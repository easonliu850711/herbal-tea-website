# 劉媽媽の草本茶網站

## 🎯 專案狀態：✅ 準備上線

### 📸 照片更新完成
所有產品照片已更新為中文名稱：
- `產品照-000.png` ~ `產品照-009.png` - 10款產品特寫
- `uncategorized/` 目錄 - 4張市場攤位環境照片
- `QRcode名片版.jpg` - LINE 官方帳號 QR Code

### 🚀 快速部署

```bash
# 1. 安裝依賴
npm install

# 2. 啟動開發伺服器
npm run dev

# 3. 構建生產版本
npm run build

# 4. 啟動生產伺服器
npm start
```

### 🌐 網站功能

#### ✅ 已完成
- [x] 響應式設計 (手機/平板/電腦)
- [x] 品牌故事頁面 (含市場攤位照片)
- [x] 10款產品展示 (含照片、成分、說明)
- [x] LINE QR Code 聯絡區
- [x] 聯絡資訊 (電話、郵件、LINE)
- [x] 導航列與頁尾
- [x] 現代化 UI 設計 (Tailwind CSS)
- [x] 照片優化 (Next.js Image 組件)

#### 📱 頁面結構
1. **首頁** (`/`)
   - 品牌英雄區 (市場攤位背景)
   - 品牌故事 (含真實市場照片)
   - 10款產品展示
   - 聯絡資訊與 QR Code

2. **產品頁** (`/products`)
   - 產品詳細展示 (開發中)

### 🎨 設計特色

#### 品牌色彩
- **主色**: 薄荷綠 (`#98FB98`) - 代表自然、健康
- **輔助色**: 天空藍 (`#87CEEB`) - 代表清新、信任
- **中性色**: 暖灰色系 - 營造溫暖感

#### 字體系統
- **主要字體**: Inter + 思源黑體
- **標題字體**: 思源宋體 (傳統感)

#### 情感設計
- **真實性**: 市場攤位照片建立信任
- **溫暖感**: 媽媽故事引發情感共鳴
- **專業性**: 現代化設計提升品牌形象

### 📊 技術架構

#### 前端
- **框架**: Next.js 14 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS v4
- **圖標**: Lucide React
- **圖片**: Next.js Image Optimization

#### 開發工具
- **打包工具**: Webpack (Next.js 內建)
- **CSS 處理**: PostCSS + Autoprefixer
- **代碼檢查**: TypeScript 嚴格模式

### 📁 檔案結構

```
herbal-tea-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # 根佈局
│   │   ├── page.tsx           # 首頁
│   │   ├── products/          # 產品頁
│   │   └── globals.css        # 全局樣式
│   ├── components/            # React 組件
│   │   ├── Navbar.tsx         # 導航列
│   │   ├── Footer.tsx         # 頁尾
│   │   └── ProductShowcase.tsx # 產品展示
│   └── lib/                   # 工具函數
├── public/                    # 靜態資源
│   ├── images/               # 圖片資源
│   │   ├── product-closeup/  # 產品照片
│   │   ├── uncategorized/    # 市場照片
│   │   └── products/         # 其他產品照片
│   └── favicon.ico           # 網站圖標
├── package.json              # 依賴配置
├── tailwind.config.ts        # Tailwind 配置
├── postcss.config.js         # PostCSS 配置
├── tsconfig.json             # TypeScript 配置
└── README.md                 # 說明文件
```

### 🚀 部署選項

#### 選項 1: Vercel (推薦)
```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel
```

#### 選項 2: 靜態導出
```bash
# 構建靜態檔案
npm run build

# 輸出到 out/ 目錄
# 可部署到 GitHub Pages、Netlify 等
```

#### 選項 3: 自託管
```bash
# 構建
npm run build

# 啟動生產伺服器
npm start
```

### 📞 聯絡資訊

- **LINE 官方帳號**: @910jrwoy
- **服務專線**: 0956-111-636 (09:00-18:00)
- **電子郵件**: imori850711@gmail.com
- **市場經驗**: 30+ 年

### 📝 更新記錄

#### 2026-03-25: 準備上線版本
- ✅ 更新所有產品照片為中文名稱
- ✅ 整合市場攤位環境照片
- ✅ 優化頁面設計與使用者體驗
- ✅ 修復構建問題
- ✅ 準備部署腳本

#### 2026-03-24: 基礎版本
- ✅ 建立專案架構
- ✅ 實作核心組件
- ✅ 設計系統建立
- ✅ 響應式設計完成

### 🎯 商業價值

1. **品牌差異化**: 真實市場故事建立獨特性
2. **顧客信任**: 照片證據增強可信度
3. **轉化提升**: 情感連接促進購買決策
4. **分享傳播**: 照片內容易於社交分享

### 🔧 故障排除

#### 常見問題
1. **構建失敗**: 檢查 Node.js 版本 (需要 v18+)
2. **圖片無法載入**: 檢查圖片路徑和權限
3. **樣式問題**: 運行 `npm install` 更新依賴

#### 開發命令
```bash
# 檢查 TypeScript 錯誤
npx tsc --noEmit

# 格式化代碼
npx prettier --write .

# 檢查代碼風格
npx prettier --check .
```

### 📄 授權
專案為劉媽媽の草本茶品牌所有，僅供內部使用。

---

**最後更新**: 2026-03-25  
**狀態**: ✅ 準備上線  
**目標**: 今日上線完成