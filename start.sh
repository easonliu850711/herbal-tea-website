#!/bin/bash

# 劉媽媽の草本茶 - 啟動腳本
# 作者：乃彩絵 (Nosae)
# 日期：2026-03-24

echo "🌸 劉媽媽の草本茶 - 網站啟動腳本"
echo "======================================"
echo ""

# 檢查是否在正確的目錄
if [ ! -f "package.json" ]; then
    echo "❌ 錯誤：請在專案根目錄執行此腳本"
    echo "   當前目錄：$(pwd)"
    exit 1
fi

# 顯示專案資訊
echo "📦 專案資訊："
project_name=$(grep '"name"' package.json | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')
project_version=$(grep '"version"' package.json | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')
echo "   名稱：$project_name"
echo "   版本：$project_version"
echo ""

# 檢查 Node.js
echo "🔧 檢查環境："
node_version=$(node --version 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "   ✅ Node.js: $node_version"
else
    echo "   ❌ Node.js 未安裝"
    echo "      請先安裝 Node.js: https://nodejs.org/"
    exit 1
fi

npm_version=$(npm --version 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "   ✅ npm: $npm_version"
else
    echo "   ❌ npm 未安裝"
    exit 1
fi

echo ""

# 檢查依賴
echo "📦 檢查依賴："
if [ ! -d "node_modules" ]; then
    echo "   ⚠️  依賴未安裝，正在安裝..."
    npm install
    if [ $? -ne 0 ]; then
        echo "   ❌ 依賴安裝失敗"
        exit 1
    fi
    echo "   ✅ 依賴安裝完成"
else
    echo "   ✅ 依賴已安裝"
fi

echo ""

# 選擇啟動模式
echo "🚀 選擇啟動模式："
echo "   1) 開發模式 (熱重載，偵錯)"
echo "   2) 生產模式 (最佳化效能)"
echo "   3) 建置生產版本"
echo "   4) 檢查環境"
echo "   5) 清理並重新安裝"
echo ""

read -p "請選擇 (1-5): " mode

case $mode in
    1)
        echo ""
        echo "🔄 啟動開發伺服器..."
        echo "   網址：http://localhost:3000"
        echo "   按 Ctrl+C 停止"
        echo ""
        npm run dev
        ;;
    2)
        echo ""
        echo "⚡ 啟動生產伺服器..."
        
        # 檢查是否已建置
        if [ ! -d ".next" ]; then
            echo "   ⚠️  未找到建置檔案，正在建置..."
            npm run build
            if [ $? -ne 0 ]; then
                echo "   ❌ 建置失敗"
                exit 1
            fi
        fi
        
        echo "   網址：http://localhost:3000"
        echo "   按 Ctrl+C 停止"
        echo ""
        npm start
        ;;
    3)
        echo ""
        echo "🔨 建置生產版本..."
        npm run build
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ 建置成功！"
            echo "   建置檔案位於 .next 目錄"
            echo "   可以使用以下指令啟動生產伺服器："
            echo "   npm start"
        else
            echo "❌ 建置失敗"
        fi
        ;;
    4)
        echo ""
        echo "🔍 執行環境檢查..."
        if [ -f "check_environment.sh" ]; then
            chmod +x check_environment.sh
            ./check_environment.sh
        else
            echo "❌ 檢查腳本不存在"
        fi
        ;;
    5)
        echo ""
        echo "🧹 清理並重新安裝..."
        
        echo "   刪除 node_modules..."
        rm -rf node_modules
        
        echo "   刪除 package-lock.json..."
        rm -f package-lock.json
        
        echo "   刪除 .next 目錄..."
        rm -rf .next
        
        echo "   重新安裝依賴..."
        npm install
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ 清理完成！"
            echo "   現在可以選擇啟動模式"
        else
            echo "❌ 清理失敗"
        fi
        ;;
    *)
        echo "❌ 無效的選擇"
        exit 1
        ;;
esac

echo ""
echo "======================================"
echo "🌸 劉媽媽の草本茶 - 啟動完成"
echo "======================================"