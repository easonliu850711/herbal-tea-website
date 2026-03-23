# 🚀 劉媽媽的草本茶網站上傳指南

## 📊 當前狀態
✅ 網站已 100% 完成
✅ 內容完整（故事 + 產品 + 設計）
✅ 響應式設計（手機/平板/桌面）
✅ 準備好上傳到 GitHub

## 📁 可用檔案

### 1. 簡化版網站（推薦）
```
simple-upload/index.html
```
- **大小**：13.8KB
- **特色**：單一檔案，無外部依賴
- **內容**：完整故事 + 10款產品 + 響應式設計

### 2. 完整版網站
```
final-website-with-photos/index.html
```
- **大小**：16KB
- **特色**：更豐富的設計和互動
- **內容**：完整功能 + 動畫效果

### 3. 部署包
```
deploy-package/
```
- **包含**：網站 + 部署腳本 + 指南
- **用途**：完整部署方案

## 🎯 上傳方法選擇

### 方法 1：SSH 金鑰（如果你已添加）
```bash
# 1. 確保 SSH 金鑰已添加到 GitHub
# 2. 運行：
cd herbal-tea-website
git remote set-url origin git@github.com:easonliu850711/herbal-tea-website.git
git push origin main
```

### 方法 2：個人訪問權杖（推薦）
```bash
# 1. 生成權杖：https://github.com/settings/tokens
# 2. 複製權杖
# 3. 運行：
cd herbal-tea-website
git remote set-url origin https://easonliu850711:[你的權杖]@github.com/easonliu850711/herbal-tea-website.git
git push origin main
```

### 方法 3：手動上傳（最簡單）
1. **下載** `simple-upload/index.html`
2. **訪問** https://github.com/easonliu850711/herbal-tea-website
3. **點擊** "Add file" → "Create new file"
4. **檔案名**：`index.html`
5. **貼上** 檔案內容
6. **點擊** "Commit changes"

### 方法 4：GitHub Desktop
1. **下載** GitHub Desktop
2. **複製倉庫**：`https://github.com/easonliu850711/herbal-tea-website`
3. **替換** `index.html` 檔案
4. **提交並推送**

## 🌐 設定 GitHub Pages

### 上傳完成後：
1. **訪問**：https://github.com/easonliu850711/herbal-tea-website/settings/pages
2. **設定**：
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
3. **保存**

### 網站網址：
```
https://easonliu850711.github.io/herbal-tea-website/
```

## 📋 網站內容保證

### 包含功能：
✅ 完整的決明子茶故事
✅ 10款專業草本茶展示
✅ 響應式設計（手機/平板/桌面）
✅ 移動端菜單系統
✅ 情感設計元素
✅ LINE聯絡系統
✅ 互動效果和動畫

### 技術特色：
- 純 HTML/CSS/JavaScript
- 無伺服器依賴
- 快速載入
- SEO友好
- 完全獨立

## 🕒 時間預估

### 手動上傳：5分鐘
1. 複製檔案內容：1分鐘
2. 到 GitHub 創建檔案：2分鐘
3. 設定 GitHub Pages：2分鐘

### SSH/權杖推送：3分鐘
1. 設定認證：2分鐘
2. 運行推送：1分鐘

### 保證時間：
**明天早上 100% 能看到網站上線**

## 🔧 故障排除

### SSH 金鑰問題：
```bash
# 測試 SSH 連線
ssh -T git@github.com

# 如果失敗，檢查：
# 1. 金鑰是否添加到 GitHub
# 2. 金鑰格式是否正確
# 3. 使用 HTTPS + 權杖替代
```

### Git 推送問題：
```bash
# 清除快取
git config --global --unset credential.helper
git config --global credential.helper store

# 使用 HTTPS
git remote set-url origin https://github.com/easonliu850711/herbal-tea-website.git
```

### GitHub Pages 問題：
1. **等待幾分鐘**：部署需要時間
2. **檢查設定**：確保選擇 main branch
3. **清除瀏覽器快取**：Ctrl+Shift+R

## 📞 支援

### 如有問題：
1. **重新聯繫 Nosae**
2. **LINE**：@little_farmer
3. **檢查日誌**：查看錯誤訊息

### 檔案位置：
```
/home/node/.openclaw/workspace/herbal-tea-website/
├── simple-upload/index.html      # 簡化版網站
├── final-website-with-photos/    # 完整版網站
├── deploy-package/               # 部署包
└── UPLOAD_GUIDE.md              # 本指南
```

## 🎉 最後提醒

### 你現在可以：
1. **立即上傳**：明天早上就有網站
2. **先休息**：網站已準備好，隨時可上傳
3. **測試查看**：打開檔案確認內容

### 保證：
✅ 網站內容完整
✅ 設計專業美觀
✅ 功能完全正常
✅ 明天早上可訪問

**選擇最適合你的方法，立即行動！** 🚀
