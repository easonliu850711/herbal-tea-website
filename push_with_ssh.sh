#!/bin/bash

# SSH 推送腳本
echo "🚀 使用 SSH 推送網站到 GitHub..."

# 設定 SSH 金鑰
SSH_KEY="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFk5BzkUO9H0dvO9qC0LFs8/McKDhPV/6Md4yhCPX5Xj liuyishen@liuyishendeMacBook-Air.local"

echo "🔑 設定 SSH 金鑰..."
mkdir -p ~/.ssh
echo "$SSH_KEY" > ~/.ssh/id_ed25519.pub
chmod 600 ~/.ssh/id_ed25519.pub

# 設定 Git
echo "🔧 設定 Git..."
git config --global user.name "Eason Liu"
git config --global user.email "easonliu850711@gmail.com"
git config --global core.sshCommand "ssh -i ~/.ssh/id_ed25519.pub"

# 複製網站到新目錄
echo "📦 準備網站檔案..."
DEPLOY_DIR="herbal-tea-website-deploy"
rm -rf "$DEPLOY_DIR"
mkdir "$DEPLOY_DIR"

# 複製所有必要檔案
cp -r final-website-with-photos/* "$DEPLOY_DIR/"
cp README.md "$DEPLOY_DIR/"

# 初始化 Git
cd "$DEPLOY_DIR"
git init
git add .
git commit -m "🚀 部署劉媽媽的草本茶網站 - 完整響應式設計 + 10款產品展示 + 決明子故事"

# 設定遠端倉庫
REMOTE_URL="git@github.com:easonliu850711/herbal-tea-website.git"
git remote add origin "$REMOTE_URL"

# 強制推送到 GitHub
echo "📤 推送到 GitHub..."
git push -f origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 🎉 🎉 部署成功！"
    echo ""
    echo "🌐 網站網址："
    echo "https://easonliu850711.github.io/herbal-tea-website/"
    echo ""
    echo "📋 包含內容："
    echo "✅ 完整的響應式網站"
    echo "✅ 10款產品展示"
    echo "✅ 決明子茶故事"
    echo "✅ 情感設計系統"
    echo "✅ 移動端菜單"
    echo "✅ 互動效果"
    echo ""
    echo "🚀 現在可以立即訪問網站！"
else
    echo ""
    echo "❌ 推送失敗，請檢查 SSH 金鑰設定"
    echo ""
    echo "🔧 手動設定步驟："
    echo "1. 將 SSH 金鑰添加到 GitHub："
    echo "   https://github.com/settings/keys"
    echo "2. 手動上傳 final-website-with-photos/ 目錄內容"
    echo "3. 設定 GitHub Pages："
    echo "   https://github.com/easonliu850711/herbal-tea-website/settings/pages"
fi
