#!/bin/bash
# 使用 Maton API Gateway 驗證的 GitHub 推送腳本
# 作者: 乃彩絵 (Nosae)
# 日期: 2026-03-24

echo "🚀 開始推送劉媽媽的草本茶網站 (使用 Maton API Gateway 驗證)..."
echo "=========================================================="

# 檢查 MATON_API_KEY
if [ -z "$MATON_API_KEY" ]; then
    echo "❌ 錯誤: MATON_API_KEY 環境變數未設定"
    echo "請設定: export MATON_API_KEY='你的_MATON_API_KEY'"
    exit 1
fi

echo "✅ MATON_API_KEY 已設定 (長度: ${#MATON_API_KEY} 字元)"

# 步驟 1: 使用 Maton API Gateway 驗證 GitHub 連接
echo ""
echo "🔐 步驟 1: 使用 Maton API Gateway 驗證 GitHub 連接..."

# 嘗試獲取用戶資訊（使用公開端點）
GITHUB_USER="easonliu850711"  # 預設用戶名
USER_INFO=$(curl -s -H "Authorization: Bearer $MATON_API_KEY" \
    "https://gateway.maton.ai/github/users/$GITHUB_USER" 2>/dev/null)

if echo "$USER_INFO" | grep -q '"login":"easonliu850711"'; then
    echo "✅ GitHub 用戶驗證成功: $GITHUB_USER"
    echo "  - ID: $(echo "$USER_INFO" | grep -o '"id":[0-9]*' | cut -d: -f2)"
    echo "  - 頭像: $(echo "$USER_INFO" | grep -o '"avatar_url":"[^"]*"' | cut -d'"' -f4)"
else
    echo "⚠️  無法通過 Maton API Gateway 獲取用戶資訊，使用預設用戶名: $GITHUB_USER"
    echo "注意: 這可能意味著 GitHub 連接需要額外授權"
fi

# 步驟 2: 檢查倉庫是否存在
echo ""
echo "📦 步驟 2: 檢查 herbal-tea-website 倉庫..."
REPO_INFO=$(curl -s -H "Authorization: Bearer $MATON_API_KEY" \
    "https://gateway.maton.ai/github/repos/$GITHUB_USER/herbal-tea-website" 2>/dev/null)

if echo "$REPO_INFO" | grep -q '"name":"herbal-tea-website"' || echo "$REPO_INFO" | grep -q '"full_name":"easonliu850711/herbal-tea-website"'; then
    echo "✅ 倉庫 herbal-tea-website 存在"
    REPO_URL="git@github.com:$GITHUB_USER/herbal-tea-website.git"
    echo "  - 倉庫 ID: $(echo "$REPO_INFO" | grep -o '"id":[0-9]*' | cut -d: -f2)"
    echo "  - 公開倉庫: $(echo "$REPO_INFO" | grep -o '"private":\(true\|false\)' | cut -d: -f2)"
else
    echo "⚠️  倉庫不存在，將創建新倉庫"
    # 這裡可以添加創建倉庫的代碼
    echo "❌ 錯誤: 自動創建倉庫功能尚未實現"
    echo "請手動創建倉庫: https://github.com/new"
    echo "倉庫名稱: herbal-tea-website"
    echo "描述: 劉媽媽的草本茶官方網站"
    echo "公開倉庫"
    exit 1
fi

# 步驟 3: 檢查 SSH 認證
echo ""
echo "🔑 步驟 3: 檢查 SSH 認證..."
SSH_TEST=$(ssh -T git@github.com 2>&1 | grep -i "successfully authenticated")

if [ -n "$SSH_TEST" ]; then
    echo "✅ SSH 認證成功"
else
    echo "❌ SSH 認證失敗"
    echo "請確保 SSH 公鑰已添加到 GitHub:"
    echo "1. 查看公鑰: cat ~/.ssh/id_rsa.pub"
    echo "2. 添加到 GitHub: https://github.com/settings/keys"
    echo "3. 標題: OpenClaw Server"
    exit 1
fi

# 步驟 4: 切換到 SSH 遠端
echo ""
echo "🌐 步驟 4: 設定 Git 遠端..."
cd /home/node/.openclaw/workspace/herbal-tea-website

# 檢查當前遠端
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null || echo "未設定")

if [ "$CURRENT_REMOTE" != "$REPO_URL" ]; then
    echo "🔄 設定遠端為: $REPO_URL"
    git remote remove origin 2>/dev/null
    git remote add origin "$REPO_URL"
else
    echo "✅ 遠端已正確設定"
fi

# 步驟 5: 確保所有檔案已提交
echo ""
echo "📤 步驟 5: 提交檔案..."
git add .

# 檢查是否有更改
if git diff --cached --quiet; then
    echo "✅ 沒有需要提交的更改"
else
    COMMIT_MSG="🚀 更新劉媽媽的草本茶網站 - $(date '+%Y-%m-%d %H:%M')"
    git commit -m "$COMMIT_MSG"
    echo "✅ 提交完成: $COMMIT_MSG"
fi

# 步驟 6: 推送
echo ""
echo "🚀 步驟 6: 推送到 GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ 推送成功!"
else
    echo "❌ 推送失敗"
    echo "嘗試強制推送..."
    git push origin main --force
    if [ $? -eq 0 ]; then
        echo "✅ 強制推送成功"
    else
        echo "❌ 推送失敗，請手動檢查"
        exit 1
    fi
fi

# 步驟 7: 顯示結果
echo ""
echo "🎉 推送完成!"
echo ""
echo "📊 推送摘要:"
echo "  - GitHub 用戶: $GITHUB_USER"
echo "  - 倉庫: herbal-tea-website"
echo "  - 分支: main"
echo "  - 遠端: $REPO_URL"
echo ""
echo "🌐 網站網址:"
echo "  - GitHub 倉庫: https://github.com/$GITHUB_USER/herbal-tea-website"
echo "  - GitHub Pages: https://$GITHUB_USER.github.io/herbal-tea-website/"
echo ""
echo "🔧 最後一步: 啟用 GitHub Pages"
echo "1. 到 https://github.com/$GITHUB_USER/herbal-tea-website/settings/pages"
echo "2. Source 選擇 'main' branch, '/' folder"
echo "3. 點擊 Save"
echo ""
echo "🌸 劉媽媽的草本茶網站已成功上線! 🚀"
echo ""
echo "📝 記錄時間: $(date)"
echo "=========================================================="