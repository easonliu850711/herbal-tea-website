#!/bin/bash

echo "🚀 快速上傳腳本"
echo "選擇上傳方法："
echo "1. 手動上傳（推薦）"
echo "2. 使用個人訪問權杖"
echo "3. 使用 SSH 金鑰"
echo ""
read -p "請選擇 (1/2/3): " choice

case $choice in
    1)
        echo "📋 手動上傳步驟："
        echo "1. 打開檔案：simple-upload/index.html"
        echo "2. 複製全部內容"
        echo "3. 訪問：https://github.com/easonliu850711/herbal-tea-website"
        echo "4. 點擊 'Add file' → 'Create new file'"
        echo "5. 檔案名輸入：index.html"
        echo "6. 貼上內容"
        echo "7. 點擊 'Commit changes'"
        echo "8. 設定 GitHub Pages："
        echo "   https://github.com/easonliu850711/herbal-tea-website/settings/pages"
        echo "9. 選擇：Source → Deploy from a branch → main → /"
        ;;
    2)
        read -p "請輸入你的 GitHub 個人訪問權杖: " token
        echo "🔧 設定 Git..."
        git remote set-url origin "https://easonliu850711:$token@github.com/easonliu850711/herbal-tea-website.git"
        echo "📤 推送..."
        git push origin main
        ;;
    3)
        echo "🔑 使用 SSH 金鑰..."
        git remote set-url origin git@github.com:easonliu850711/herbal-tea-website.git
        echo "📤 推送..."
        git push origin main
        ;;
    *)
        echo "❌ 無效選擇"
        ;;
esac

echo ""
echo "🌐 網站網址：https://easonliu850711.github.io/herbal-tea-website/"
echo "🎉 完成！"
