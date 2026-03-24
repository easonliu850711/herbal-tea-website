#!/bin/bash

echo "🔧 劉媽媽の草本茶 - 環境檢查腳本"
echo "======================================"

# 檢查 Node.js
echo "📦 檢查 Node.js 版本..."
node_version=$(node --version 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ Node.js 版本: $node_version"
    
    # 檢查 Node.js 版本是否符合要求
    major_version=$(echo $node_version | cut -d'.' -f1 | tr -d 'v')
    if [ $major_version -ge 18 ]; then
        echo "✅ Node.js 版本符合要求 (需要 >= 18)"
    else
        echo "⚠️  Node.js 版本過低，建議升級到 18 或更高"
    fi
else
    echo "❌ Node.js 未安裝"
    echo "   請安裝 Node.js: https://nodejs.org/"
fi

echo ""

# 檢查 npm
echo "📦 檢查 npm 版本..."
npm_version=$(npm --version 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ npm 版本: $npm_version"
else
    echo "❌ npm 未安裝"
fi

echo ""

# 檢查專案目錄
echo "📁 檢查專案結構..."
if [ -f "package.json" ]; then
    echo "✅ package.json 存在"
    
    # 讀取專案資訊
    project_name=$(grep '"name"' package.json | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')
    project_version=$(grep '"version"' package.json | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')
    echo "   專案名稱: $project_name"
    echo "   版本: $project_version"
else
    echo "❌ package.json 不存在"
    echo "   請確保在正確的目錄執行"
fi

echo ""

# 檢查依賴
echo "📦 檢查依賴安裝狀態..."
if [ -d "node_modules" ]; then
    echo "✅ node_modules 目錄存在"
    
    # 檢查主要依賴
    dependencies=("next" "react" "react-dom" "tailwindcss")
    for dep in "${dependencies[@]}"; do
        if [ -d "node_modules/$dep" ]; then
            echo "   ✅ $dep 已安裝"
        else
            echo "   ❌ $dep 未安裝"
        fi
    done
else
    echo "⚠️  node_modules 目錄不存在"
    echo "   請執行: npm install"
fi

echo ""

# 檢查 TypeScript 配置
echo "⚙️  檢查 TypeScript 配置..."
if [ -f "tsconfig.json" ]; then
    echo "✅ tsconfig.json 存在"
else
    echo "⚠️  tsconfig.json 不存在"
fi

if [ -f "tailwind.config.ts" ]; then
    echo "✅ tailwind.config.ts 存在"
else
    echo "⚠️  tailwind.config.ts 不存在"
fi

echo ""

# 檢查 Next.js 配置
echo "⚙️  檢查 Next.js 配置..."
if [ -f "next.config.js" ] || [ -f "next.config.mjs" ] || [ -f "next.config.ts" ]; then
    echo "✅ Next.js 配置文件存在"
else
    echo "ℹ️  Next.js 使用默認配置"
fi

echo ""

# 檢查圖片資源
echo "🖼️  檢查圖片資源..."
if [ -d "public/images" ]; then
    image_count=$(find public/images -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" 2>/dev/null | wc -l)
    echo "✅ 圖片目錄存在，找到 $image_count 個圖片檔案"
    
    # 檢查主要圖片目錄
    directories=("stall-environment" "liu-mama" "products" "branding")
    for dir in "${directories[@]}"; do
        if [ -d "public/images/$dir" ]; then
            count=$(find "public/images/$dir" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" 2>/dev/null | wc -l)
            echo "   📁 $dir: $count 個檔案"
        else
            echo "   ⚠️  $dir: 目錄不存在"
        fi
    done
else
    echo "⚠️  public/images 目錄不存在"
fi

echo ""

# 檢查頁面檔案
echo "📄 檢查頁面檔案..."
pages=("src/app/page.tsx" "src/app/products/page.tsx" "src/app/story/page.tsx" "src/app/order/page.tsx")
for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        echo "✅ $page 存在"
    else
        echo "❌ $page 不存在"
    fi
done

echo ""

# 檢查組件檔案
echo "🧩 檢查組件檔案..."
components=("src/components/Navbar.tsx" "src/components/ProductShowcase.tsx" "src/components/PhotoGallery.tsx")
for component in "${components[@]}"; do
    if [ -f "$component" ]; then
        echo "✅ $component 存在"
    else
        echo "❌ $component 不存在"
    fi
done

echo ""
echo "======================================"
echo "🚀 快速啟動指令："
echo ""
echo "1. 安裝依賴："
echo "   npm install"
echo ""
echo "2. 啟動開發伺服器："
echo "   npm run dev"
echo ""
echo "3. 建置生產版本："
echo "   npm run build"
echo ""
echo "4. 啟動生產伺服器："
echo "   npm start"
echo ""
echo "5. 檢查程式碼："
echo "   npm run lint"
echo ""
echo "🌐 開發伺服器將在 http://localhost:3000 啟動"
echo "======================================"