#!/bin/bash

echo "🚀 開始推送劉媽媽的草本茶網站..."

# 步驟 1: 生成 SSH 公鑰
echo "🔑 步驟 1: 生成 SSH 公鑰..."
if [ ! -f ~/.ssh/id_rsa.pub ]; then
    ssh-keygen -y -f ~/.ssh/id_rsa > ~/.ssh/id_rsa.pub
    echo "✅ SSH 公鑰已生成"
else
    echo "✅ SSH 公鑰已存在"
fi

echo ""
echo "📋 你的 SSH 公鑰:"
cat ~/.ssh/id_rsa.pub
echo ""
echo "📝 請將上面的公鑰複製到 GitHub:"
echo "1. 到 https://github.com/settings/keys"
echo "2. 點擊 'New SSH key'"
echo "3. 貼上公鑰，標題輸入 'OpenClaw Server'"
echo "4. 點擊 'Add SSH key'"
echo ""
read -p "按 Enter 繼續，確認已添加 SSH 公鑰到 GitHub..."

# 步驟 2: 切換到 SSH 遠端
echo ""
echo "🌐 步驟 2: 切換到 SSH 遠端..."
cd /home/node/.openclaw/workspace/herbal-tea-website
git remote set-url origin git@github.com:easonliu850711/herbal-tea-website.git
echo "✅ 遠端已切換到 SSH"

# 步驟 3: 測試 SSH 連接
echo ""
echo "🔗 步驟 3: 測試 SSH 連接..."
ssh -T git@github.com

# 步驟 4: 確保所有檔案已提交
echo ""
echo "📤 步驟 4: 提交檔案..."
git add .
git commit -m "🚀 上傳劉媽媽的草本茶網站 - 決明子茶的溫暖記憶"

# 步驟 5: 推送
echo ""
echo "🚀 步驟 5: 推送到 GitHub..."
git push origin main

echo ""
echo "🎉 推送完成!"
echo ""
echo "🌐 網站網址: https://easonliu850711.github.io/herbal-tea-website/"
echo ""
echo "🔧 最後一步: 啟用 GitHub Pages"
echo "1. 到 https://github.com/easonliu850711/herbal-tea-website/settings/pages"
echo "2. Source 選擇 'main' branch, '/' folder"
echo "3. 點擊 Save"
echo ""
echo "🌸 劉媽媽的草本茶網站已成功上線! 🚀"