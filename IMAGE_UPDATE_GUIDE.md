# 圖片更新指南

## 📸 **需要更新的圖片位置**

### 1. **首頁 (`src/app/page.tsx`)**
- **位置**：QR Code 展示區
- **當前**：佔位設計
- **需要**：實際 QR Code 照片
- **路徑**：`public/images/branding/` 目錄中的 QR Code 檔案

### 2. **品牌故事頁面 (`src/app/story/page.tsx`)**
- **位置 1**：故事時間線圖片 (4個區塊)
- **位置 2**：名片展示區
- **位置 3**：QR Code 展示區
- **需要**：實際照片替換佔位設計

### 3. **訂購頁面 (`src/app/order/page.tsx`)**
- **位置**：QR Code 展示區
- **需要**：實際 QR Code 照片

### 4. **產品頁面 (`src/app/products/page.tsx`)**
- **位置**：產品圖片展示區 (10個產品)
- **需要**：實際產品包裝照片

## 📁 **圖片檔案結構**

```
public/images/
├── branding/                    # 品牌識別圖片
│   ├── business-card.jpg       # 名片
│   ├── qr-code-line.jpg        # LINE QR Code
│   └── logo.png               # 品牌標誌
├── products/                   # 產品照片
│   ├── qiyedan-tea.jpg        # 七葉膽茶
│   ├── yitiaogen-tea.jpg      # 一條根茶
│   ├── luoshenhua-tea.jpg     # 洛神花茶
│   └── ... (其他7款產品)
├── liu-mama/                  # 劉媽媽照片
│   ├── portrait-01.jpg
│   ├── portrait-02.jpg
│   └── market-01.jpg
├── stall-environment/         # 攤位環境
│   ├── stall-01.jpg
│   ├── stall-02.jpg
│   └── ...
├── interaction/               # 互動場景
│   ├── customer-01.jpg
│   ├── customer-02.jpg
│   └── ...
└── production-process/        # 製作過程
    ├── packaging-01.jpg
    ├── packaging-02.jpg
    └── ...
```

## 🔧 **如何更新圖片**

### **方法 1：直接替換檔案**
1. 將你的圖片檔案複製到對應的 `public/images/` 子目錄
2. 確保檔案命名與現有路徑一致
3. 重新啟動開發伺服器

### **方法 2：更新圖片路徑**
在程式碼中更新圖片路徑：

```tsx
// 當前佔位設計
<div className="w-full h-full bg-gradient-to-br from-green-50 to-stone-50">
  <div className="text-center">
    <div className="text-3xl mb-1">📱</div>
    <p className="text-xs text-stone-600">LINE QR Code</p>
    <p className="text-[10px] text-stone-400">實際照片載入中</p>
  </div>
</div>

// 更新為實際圖片
<div className="w-full h-full bg-cover bg-center"
     style={{backgroundImage: "url('/images/branding/qr-code-line.jpg')"}}>
</div>
```

### **方法 3：使用 Next.js Image 組件**
```tsx
import Image from 'next/image';

// 在組件中使用
<Image
  src="/images/branding/qr-code-line.jpg"
  alt="LINE QR Code"
  width={300}
  height={300}
  className="rounded-lg"
/>
```

## 🎯 **圖片規格建議**

### **QR Code 圖片**
- **尺寸**：300x300px 或更大
- **格式**：JPG 或 PNG
- **品質**：清晰可掃描

### **產品照片**
- **尺寸**：600x400px 或更大
- **格式**：JPG
- **背景**：乾淨白色或自然背景
- **角度**：正面或45度角

### **故事照片**
- **尺寸**：800x600px 或更大
- **格式**：JPG
- **風格**：自然、真實、有故事感

## 🚀 **快速測試**

### **步驟 1：放置圖片**
將你的圖片檔案放到對應的 `public/images/` 目錄

### **步驟 2：更新程式碼**
找到對應的組件，將佔位設計替換為實際圖片路徑

### **步驟 3：測試顯示**
```bash
cd herbal-tea-website
npm run dev
```
訪問 http://localhost:3000 查看效果

## 📝 **需要你提供的圖片**

### **立即需要**
1. ✅ **LINE QR Code** - `public/images/branding/qr-code-line.jpg`
2. ✅ **名片設計** - `public/images/branding/business-card.jpg`
3. ✅ **劉媽媽照片** - `public/images/liu-mama/` 目錄

### **後續需要**
1. **10款產品照片** - `public/images/products/` 目錄
2. **攤位環境照片** - `public/images/stall-environment/` 目錄
3. **互動場景照片** - `public/images/interaction/` 目錄
4. **製作過程照片** - `public/images/production-process/` 目錄

## 💡 **圖片優化建議**

### **效能優化**
1. **壓縮圖片**：使用 TinyPNG 或 Squoosh 壓縮
2. **適當尺寸**：根據顯示需求調整尺寸
3. **現代格式**：考慮使用 WebP 格式

### **SEO 優化**
1. **描述性檔名**：如 `liu-mama-market-stall-2024.jpg`
2. **alt 文字**：為每張圖片添加描述性 alt 文字
3. **圖片說明**：在頁面中添加圖片說明文字

## 🔄 **更新流程**

1. **準備圖片**：整理並優化所有圖片
2. **放置檔案**：複製到對應的 `public/images/` 目錄
3. **更新程式碼**：替換佔位設計為實際圖片
4. **測試顯示**：啟動開發伺服器檢查效果
5. **提交變更**：推送到 GitHub

## 📞 **協助支援**

如果遇到圖片更新問題，請提供：
1. **圖片檔案路徑**
2. **想要顯示的位置**
3. **遇到的錯誤訊息**

我會協助你完成圖片更新！