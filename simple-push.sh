#!/bin/bash
# 簡單的 GitHub 推送腳本 (使用 SSH)
# 作者: 乃彩絵 (Nosae)
# 日期: 2026-03-24

echo "🚀 開始推送劉媽媽的草本茶網站..."
echo "========================================"

# 檢查是否在正確的目錄
cd /home/node/.openclaw/workspace/herbal-tea-website

if [ $? -ne 0 ]; then
    echo "❌ 錯誤: 無法進入 herbal-tea-website 目錄"
    exit 1
fi

echo "✅ 當前目錄: $(pwd)"

# 步驟 1: 檢查 Git 狀態
echo ""
echo "📊 步驟 1: 檢查 Git 狀態..."
git status --short

# 步驟 2: 添加所有檔案
echo ""
echo "📤 步驟 2: 添加檔案..."
git add .

# 步驟 3: 提交
echo ""
echo "💾 步驟 3: 提交更改..."
COMMIT_MSG="🚀 更新劉媽媽的草本茶網站 - $(date '+%Y年%m月%d日 %H:%M')"
git commit -m "$COMMIT_MSG"

if [ $? -eq 0 ]; then
    echo "✅ 提交成功: $COMMIT_MSG"
else
    echo "⚠️  沒有需要提交的更改"
fi

# 步驟 4: 檢查遠端
echo ""
echo "🌐 步驟 4: 檢查 Git 遠端..."
git remote -v

# 步驟 5: 推送
echo ""
echo "🚀 步驟 5: 推送到 GitHub..."
echo "正在推送..."

# 嘗試推送
if git push origin main; then
    echo "✅ 推送成功!"
else
    echo "⚠️  普通推送失敗，嘗試強制推送..."
    if git push origin main --force; then
        echo "✅ 強制推送成功"
    else
        echo "❌ 推送失敗"
        echo ""
        echo "🔧 故障排除建議:"
        echo "1. 檢查 SSH 金鑰: ssh -T git@github.com"
        echo "2. 檢查遠端設定: git remote -v"
        echo "3. 檢查網絡連接"
        exit 1
    fi
fi

# 步驟 6: 顯示結果
echo ""
echo "🎉 推送完成!"
echo ""
echo "📊 推送摘要:"
echo "  - 倉庫: herbal-tea-website"
echo "  - 分支: main"
echo "  - 提交: $COMMIT_MSG"
echo "  - 時間: $(date)"
echo ""
echo "🌐 相關連結:"
echo "  - GitHub 倉庫: https://github.com/easonliu850711/herbal-tea-website"
echo "  - GitHub Pages: https://easonliu850711.github.io/herbal-tea-website/"
echo ""
echo "🔧 下一步: 啟用 GitHub Pages"
echo "如果尚未啟用 GitHub Pages:"
echo "1. 前往: https://github.com/easonliu850711/herbal-tea-website/settings/pages"
echo "2. Source 選擇 'main' branch, '/' folder"
echo "3. 點擊 Save"
echo ""
echo "🌸 劉媽媽的草本茶網站已成功上線! 🚀"
echo ""
echo "========================================"
echo "📝 記錄時間: $(date)"