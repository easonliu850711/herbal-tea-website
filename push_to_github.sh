#!/bin/bash
# GitHub 推送腳本
# 使用方法：./push_to_github.sh [你的 GitHub 個人訪問權杖]

if [ $# -eq 0 ]; then
  echo "❌ 錯誤：請提供 GitHub 個人訪問權杖"
  echo "使用方法：./push_to_github.sh [你的權杖]"
  echo ""
  echo "如何獲取權杖："
  echo "1. 訪問 https://github.com/settings/tokens"
  echo "2. 點擊 'Generate new token' → 'Generate new token (classic)'"
  echo "3. 設定 Note: 'OpenClaw Git Access'"
  echo "4. 勾選 'repo' 權限"
  echo "5. 複製生成的權杖"
  exit 1
fi

GITHUB_TOKEN="$1"
USERNAME="easonliu850711"
REPO="herbal-tea-website"

echo "🔧 設定 Git 認證..."
git remote set-url origin "https://${USERNAME}:${GITHUB_TOKEN}@github.com/${USERNAME}/${REPO}.git"

echo "🚀 推送到 GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "🎉 推送成功！"
  echo "🌐 倉庫網址：https://github.com/${USERNAME}/${REPO}"
  echo ""
  echo "✅ 專案已成功上傳到 GitHub"
  echo "📊 包含內容："
  echo "   - 6個核心 React 組件"
  echo "   - 完整照片整合系統"
  echo "   - Tailwind CSS 設計系統"
  echo "   - 照片分類目錄結構"
  echo "   - 完整專案文檔"
else
  echo ""
  echo "❌ 推送失敗"
  echo "請檢查："
  echo "1. 權杖是否正確"
  echo "2. 權杖權限是否足夠"
  echo "3. 網路連線是否正常"
fi

# 恢復原始 URL（安全考慮）
git remote set-url origin "https://github.com/${USERNAME}/${REPO}.git"
echo ""
echo "🔒 已恢復原始遠端 URL"
