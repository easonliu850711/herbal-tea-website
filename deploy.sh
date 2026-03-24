#!/bin/bash

echo "🚀 開始部署劉媽媽の草本茶網站..."

# 1. 檢查依賴
echo "📦 檢查依賴..."
npm install

# 2. 構建專案
echo "🔨 構建專案..."
if npx next build; then
    echo "✅ 構建成功！"
else
    echo "❌ 構建失敗，請檢查錯誤訊息"
    exit 1
fi

# 3. 創建輸出目錄
echo "📁 準備輸出檔案..."
mkdir -p ./output
cp -r .next ./output/
cp -r public ./output/
cp -r package.json ./output/
cp -r package-lock.json ./output/

# 4. 創建啟動腳本
cat > ./output/start.sh << 'EOF'
#!/bin/bash
echo "🌿 啟動劉媽媽の草本茶網站..."
npm start
EOF
chmod +x ./output/start.sh

# 5. 創建部署說明
cat > ./output/DEPLOYMENT.md << 'EOF'
# 劉媽媽の草本茶網站部署說明

## 檔案結構
- `.next/` - Next.js 構建輸出
- `public/` - 靜態資源（圖片、QR Code等）
- `package.json` - 依賴配置
- `start.sh` - 啟動腳本

## 部署步驟

### 方法一：使用 Node.js
1. 安裝 Node.js (v18+)
2. 運行：`npm install`
3. 運行：`npm start`

### 方法二：使用 Docker
```bash
docker build -t liu-mama-tea .
docker run -p 3000:3000 liu-mama-tea
```

### 方法三：靜態部署
網站已預渲染為靜態檔案，可部署到：
- Vercel
- Netlify
- GitHub Pages
- 任何靜態主機

## 環境要求
- Node.js 18+
- 500MB 記憶體
- 支援 HTTPS

## 聯絡資訊
- LINE: @910jrwoy
- 電話: 0956-111-636
- 郵件: imori850711@gmail.com

## 照片說明
所有產品照片已更新為中文名稱：
- 產品照-000.png ~ 產品照-009.png
- 攤位環境照片在 uncategorized/ 目錄
- QR Code 在 products/QRcode名片版.jpg
EOF

echo "🎉 部署準備完成！"
echo ""
echo "📋 下一步："
echo "1. 將 ./output 目錄上傳到您的伺服器"
echo "2. 運行 ./output/start.sh"
echo "3. 網站將在 http://localhost:3000 運行"
echo ""
echo "🌐 線上預覽："
echo "開發伺服器運行中：http://localhost:3000"
echo ""
echo "📸 照片已更新："
echo "- 10款產品照片（產品照-000.png ~ 產品照-009.png）"
echo "- 4張市場攤位照片"
echo "- QR Code 名片版"
echo ""
echo "✅ 網站已準備好上線！"