# 劉媽媽の草本茶 - 設計系統

## 🎨 品牌色彩系統

### 主色系 (Primary Colors)
- **深綠 (Deep Green)** `#14532d` - 品牌主色，代表自然、健康
- **翡翠綠 (Emerald)** `#059669` - 輔助色，代表活力、成長
- **淺綠 (Light Green)** `#86efac` - 背景色，代表清新、柔和

### 輔助色系 (Secondary Colors)
- **暖橙色 (Warm Orange)** `#f97316` - 強調色，代表溫暖、熱情
- **石頭灰 (Stone Gray)** `#57534e` - 文字色，代表穩定、可靠
- **米白色 (Cream White)** `#fafaf9` - 背景色，代表純淨、舒適

### 漸層系統 (Gradients)
1. **主漸層**: `#14532d` → `#059669` → `#86efac`
2. **強調漸層**: `#f97316` → `#ea580c`
3. **背景漸層**: `#fafaf9` → `#ffffff`

## 🔤 字體系統

### 中文字體 (Chinese Fonts)
- **標題**: 思源黑體 (Noto Sans TC) - Bold
- **內文**: 思源宋體 (Noto Serif TC) - Regular
- **輔助**: 思源黑體 (Noto Sans TC) - Medium

### 英文字體 (English Fonts)
- **主要**: Inter - 現代、易讀
- **備用**: system-ui, -apple-system, sans-serif

### 字體大小階層 (Type Scale)
- **H1**: 3.5rem (56px) - 主標題
- **H2**: 2.5rem (40px) - 區段標題
- **H3**: 1.75rem (28px) - 卡片標題
- **Body Large**: 1.25rem (20px) - 重要內文
- **Body Regular**: 1rem (16px) - 一般內文
- **Body Small**: 0.875rem (14px) - 輔助文字

## 📐 間距系統 (Spacing Scale)

### 基礎間距 (Base 4px)
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

### 容器寬度 (Container Widths)
- **Mobile**: 100% (padding: 1rem)
- **Tablet**: 100% (padding: 2rem)
- **Desktop**: 80rem (1280px) (padding: 0)

## 🧩 組件設計規範

### 按鈕 (Buttons)
```css
/* 主要按鈕 */
.btn-primary {
  background: linear-gradient(135deg, #14532d, #059669);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s;
}

/* 次要按鈕 */
.btn-secondary {
  background: white;
  color: #14532d;
  border: 2px solid #86efac;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s;
}

/* 懸停效果 */
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(20, 83, 45, 0.3);
}

.btn-secondary:hover {
  background: #f0fdf4;
  border-color: #059669;
}
```

### 卡片 (Cards)
```css
.card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### 導航列 (Navigation)
```css
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e7e5e4;
}
```

## 🎭 動畫與過渡

### 持續時間 (Durations)
- **快速**: 150ms - 微互動
- **標準**: 300ms - 一般過渡
- **緩慢**: 500ms - 強調動畫

### 緩動曲線 (Easing Curves)
- **標準**: cubic-bezier(0.4, 0, 0.2, 1)
- **進入**: cubic-bezier(0, 0, 0.2, 1)
- **離開**: cubic-bezier(0.4, 0, 1, 1)

### 動畫類型 (Animations)
1. **淡入淡出**: 元素顯示/隱藏
2. **滑入滑出**: 上下左右移動
3. **縮放**: 放大縮小效果
4. **旋轉**: 圖標旋轉

## 📱 響應式斷點

### 斷點定義
- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 以上

### 響應式策略
- **Mobile First**: 從手機開始設計
- **漸進增強**: 大螢幕增加功能
- **內容優先**: 確保所有內容可訪問

## 🖼️ 圖片處理規範

### 圖片尺寸
- **Hero圖片**: 1920x1080px (16:9)
- **產品圖片**: 800x800px (1:1)
- **卡片圖片**: 400x300px (4:3)
- **圖標**: 24x24px, 32x32px, 48x48px

### 圖片格式
- **照片**: WebP (優先), JPEG
- **圖標**: SVG (優先), PNG
- **插圖**: SVG

### 圖片優化
- **懶載入**: 視口外圖片延遲載入
- **響應式圖片**: srcset 和 sizes 屬性
- **壓縮**: 圖片質量優化

## 🎯 可訪問性規範

### 對比度
- **文字**: 至少 4.5:1 對比度
- **大型文字**: 至少 3:1 對比度
- **非文字**: 至少 3:1 對比度

### 鍵盤導航
- 所有互動元素可通過鍵盤訪問
- 清晰的焦點狀態
- 跳過導航連結

### 螢幕閱讀器
- 語義化HTML結構
- 適當的ARIA屬性
- 有意義的替代文字

---

**設計系統版本**: 1.0.0  
**最後更新**: 2026-03-25  
**設計師**: 乃彩絵 (Nosae)  
**目標**: 為劉媽媽の草本茶建立最高標準的設計系統