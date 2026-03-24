# 劉媽媽の草本茶 - 安裝與部署指南

## 🚀 快速開始

### 1. 環境需求
- **Node.js** 18.17 或更高版本（建議 20.x）
- **npm** 或 **yarn** 或 **pnpm**
- **Git**（可選，用於版本控制）

### 2. 安裝步驟

#### 方法一：本地開發
```bash
# 1. 進入專案目錄
cd herbal-tea-website

# 2. 安裝依賴
npm install

# 3. 啟動開發伺服器
npm run dev
```

#### 方法二：使用 Docker
```bash
# 1. 建立 Dockerfile（如果不存在）
# 2. 建置 Docker 映像
docker build -t herbal-tea-website .

# 3. 運行容器
docker run -p 3000:3000 herbal-tea-website
```

#### 方法三：一鍵安裝腳本
```bash
# 給予執行權限
chmod +x check_environment.sh

# 執行環境檢查
./check_environment.sh

# 如果檢查通過，執行安裝
npm install
npm run dev
```

## 📦 專案結構

```
herbal-tea-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 首頁
│   │   ├── products/          # 產品頁面
│   │   ├── story/             # 品牌故事
│   │   └── order/             # 訂購方式
│   ├── components/            # React 組件
│   │   ├── Navbar.tsx         # 導航列
│   │   ├── ProductShowcase.tsx # 產品展示
│   │   └── PhotoGallery.tsx   # 照片畫廊
│   └── styles/                # 樣式檔案
├── public/                    # 靜態資源
│   └── images/               # 圖片素材
│       ├── branding/         # 品牌識別（名片、QR Code）
│       ├── stall-environment/ # 攤位環境
│       ├── liu-mama/         # 劉媽媽照片
│       ├── products/         # 產品照片
│       ├── interaction/      # 互動場景
│       └── production-process/ # 製作過程
├── package.json              # 專案依賴
├── tailwind.config.ts        # Tailwind 配置
├── tsconfig.json            # TypeScript 配置
├── check_environment.sh     # 環境檢查腳本
└── INSTALLATION_GUIDE.md    # 本文件
```

## 🔧 技術棧

### 核心框架
- **Next.js 14** - React 框架，支援 App Router
- **TypeScript** - 類型安全的 JavaScript
- **Tailwind CSS** - 實用優先的 CSS 框架

### 主要依賴
- **React 18** - UI 庫
- **Lucide React** - 圖標庫
- **Framer Motion** - 動畫庫（可選）

### 開發工具
- **PostCSS** - CSS 處理
- **Autoprefixer** - CSS 前綴
- **ESLint** - 程式碼檢查

## 🌐 部署選項

### 免費方案（推薦）

#### 1. Vercel（最適合 Next.js）
```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel
```
或連接 GitHub 倉庫自動部署。

#### 2. GitHub Pages（靜態網站）
需要額外配置 `next.config.js`：
```javascript
module.exports = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/herbal-tea-website' : '',
}
```

#### 3. Railway（全棧部署）
```bash
# 安裝 Railway CLI
npm i -g railway

# 登入並部署
railway login
railway up
```

### 付費方案

#### 1. AWS Amplify
- 自動 CI/CD
- 全球 CDN
- 自訂域名

#### 2. Google Cloud Run
- 容器化部署
- 自動擴展
- 按使用付費

#### 3. DigitalOcean App Platform
- 簡單易用
- 自動 HTTPS
- 監控工具

## ⚙️ 環境配置

### 基本配置
建立 `.env.local` 檔案：
```env
# 網站基本資訊
NEXT_PUBLIC_SITE_NAME=劉媽媽の草本茶
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_LINE=@910jrwoy
NEXT_PUBLIC_CONTACT_PHONE=0956-111-636

# 部署環境
NODE_ENV=production
```

### 圖片優化配置
在 `next.config.js` 中配置圖片優化：
```javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

## 🚨 常見問題

### Q1: 安裝依賴時出現錯誤
```bash
# 清除 npm 快取
npm cache clean --force

# 刪除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安裝
npm install
```

### Q2: 開發伺服器無法啟動
```bash
# 檢查端口是否被佔用
lsof -i :3000

# 使用不同端口
npm run dev -- -p 3001
```

### Q3: 圖片無法載入
1. 檢查圖片路徑是否正確
2. 確認圖片檔案權限
3. 檢查 Next.js 圖片配置

### Q4: 樣式沒有生效
```bash
# 重新建置 Tailwind
npx tailwindcss -i ./src/styles/globals.css -o ./src/styles/output.css --watch
```

## 📊 效能優化

### 生產環境建置
```bash
# 建置生產版本
npm run build

# 分析套件大小
npm run analyze
```

### 圖片優化
1. 使用 WebP/AVIF 格式
2. 適當壓縮圖片
3. 使用 Next.js Image 組件

### 程式碼分割
- Next.js 自動進行程式碼分割
- 使用動態導入減少初始載入大小

## 🔒 安全性建議

### 基本安全
1. 保持依賴更新
2. 使用環境變數儲存敏感資訊
3. 啟用 HTTPS

### Next.js 安全功能
1. 自動 CSP 標頭
2. XSS 防護
3. 點擊劫持防護

## 📈 監控與分析

### 基本分析
```bash
# 安裝分析工具
npm install @vercel/analytics

# 在 app/layout.tsx 中添加
import { Analytics } from '@vercel/analytics/react'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 錯誤監控
考慮使用：
- **Sentry** - 錯誤追蹤
- **LogRocket** - 使用者會話重播
- **Google Analytics** - 流量分析

## 🤝 貢獻指南

### 開發流程
1. Fork 專案
2. 建立功能分支
3. 提交更改
4. 建立 Pull Request

### 程式碼規範
- 使用 TypeScript
- 遵循 ESLint 規則
- 撰寫清晰的註解

## 📞 支援與聯絡

如有問題，請聯絡：
- **LINE**: @910jrwoy
- **電話**: 0956-111-636
- **服務範圍**: 大台北地區及宅配服務

---

**最後更新**: 2026-03-24  
**專案狀態**: ✅ 開發完成，等待部署  
**技術負責**: 乃彩絵 (Nosae)