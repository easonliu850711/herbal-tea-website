#!/bin/bash

echo "🔍 茶葉網站快速測試腳本"
echo "================================"
echo ""

# 檢查當前目錄
if [ ! -f "package.json" ]; then
    echo "❌ 請在茶葉網站專案目錄執行此腳本"
    echo "   當前目錄: $(pwd)"
    exit 1
fi

echo "1. 📁 檢查圖片檔案..."
echo ""

# 檢查主要圖片目錄
check_dir() {
    local dir=$1
    local desc=$2
    
    if [ -d "$dir" ]; then
        count=$(find "$dir" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" 2>/dev/null | wc -l)
        if [ $count -gt 0 ]; then
            echo "   ✅ $desc: $count 個檔案"
            # 顯示前3個檔案
            find "$dir" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" 2>/dev/null | head -3 | while read file; do
                size=$(ls -lh "$file" | awk '{print $5}')
                echo "      📄 $(basename "$file") ($size)"
            done
        else
            echo "   ⚠️  $desc: 0 個檔案"
        fi
    else
        echo "   ❌ $desc: 目錄不存在"
    fi
}

check_dir "public/images/branding" "品牌識別圖片"
check_dir "public/images/liu-mama" "劉媽媽照片"
check_dir "public/images/stall-environment" "攤位環境"
check_dir "public/images/products" "產品照片"
check_dir "public/images/interaction" "互動場景"
check_dir "public/images/production-process" "製作過程"

echo ""
echo "2. 🌐 測試選項："
echo ""
echo "   a) 開啟靜態測試頁面 (test-photos.html)"
echo "   b) 啟動 Next.js 開發伺服器"
echo "   c) 檢查圖片路徑引用"
echo "   d) 建立圖片清單報告"
echo ""

read -p "請選擇 (a-d): " choice

case $choice in
    a)
        echo ""
        echo "📄 開啟靜態測試頁面..."
        if [ -f "test-photos.html" ]; then
            echo "   檔案: test-photos.html"
            echo "   請用瀏覽器開啟此檔案測試圖片載入"
            echo ""
            echo "   💡 提示: 如果圖片無法顯示，可能是路徑問題"
            echo "       正確路徑應該是: public/images/..."
        else
            echo "❌ test-photos.html 不存在"
        fi
        ;;
    b)
        echo ""
        echo "🚀 啟動 Next.js 開發伺服器..."
        
        # 檢查依賴
        if [ ! -d "node_modules" ]; then
            echo "   ⚠️  依賴未安裝，正在安裝..."
            npm install
            if [ $? -ne 0 ]; then
                echo "❌ 依賴安裝失敗"
                exit 1
            fi
        fi
        
        echo ""
        echo "   開發伺服器將在 http://localhost:3000 啟動"
        echo "   按 Ctrl+C 停止"
        echo ""
        npm run dev
        ;;
    c)
        echo ""
        echo "🔍 檢查圖片路徑引用..."
        
        echo "   檢查 Next.js 組件中的圖片引用:"
        find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" 2>/dev/null | while read file; do
            if grep -q "background-image\|src=\|Image.*src=" "$file" 2>/dev/null; then
                echo "   📄 $file"
                grep -n "background-image\|src=\|Image.*src=" "$file" 2>/dev/null | head -3 | while read line; do
                    echo "      $line"
                done
            fi
        done
        
        echo ""
        echo "   檢查 CSS 中的圖片引用:"
        find src -name "*.css" 2>/dev/null | while read file; do
            if grep -q "background-image\|url(" "$file" 2>/dev/null; then
                echo "   📄 $file"
                grep -n "background-image\|url(" "$file" 2>/dev/null | head -3 | while read line; do
                    echo "      $line"
                done
            fi
        done
        ;;
    d)
        echo ""
        echo "📋 建立圖片清單報告..."
        
        report_file="image-inventory-$(date +%Y%m%d_%H%M%S).md"
        
        cat > "$report_file" << EOF
# 茶葉網站圖片清單報告
生成時間: $(date)

## 圖片統計
EOF
        
        total=0
        for dir in public/images/*; do
            if [ -d "$dir" ]; then
                count=$(find "$dir" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" 2>/dev/null | wc -l)
                total=$((total + count))
                echo "## $(basename "$dir")" >> "$report_file"
                echo "檔案數: $count" >> "$report_file"
                echo "" >> "$report_file"
                
                find "$dir" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" 2>/dev/null | while read file; do
                    size=$(ls -lh "$file" | awk '{print $5}')
                    dimensions=$(identify "$file" 2>/dev/null | awk '{print $3}' | head -1)
                    echo "- \`$(basename "$file")\` ($size, $dimensions)" >> "$report_file"
                done
                echo "" >> "$report_file"
            fi
        done
        
        echo "總圖片數: $total" >> "$report_file"
        
        echo "   報告已生成: $report_file"
        echo "   總圖片數: $total"
        ;;
    *)
        echo "❌ 無效的選擇"
        ;;
esac

echo ""
echo "================================"
echo "🌸 測試完成"