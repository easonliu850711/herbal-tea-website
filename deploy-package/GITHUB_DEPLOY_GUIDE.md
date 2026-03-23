# GitHub 部署指南

## 快速部署步驟：

### 1. 生成 GitHub 個人訪問權杖
1. 訪問：https://github.com/settings/tokens
2. 點擊 "Generate new token" → "Generate new token (classic)"
3. 設定：
   - Note: "OpenClaw 網站部署"
   - Expiration: 90 days (建議)
   - Select scopes: 勾選 `repo` (全選)
4. 複製生成的權杖

### 2. 運行推送腳本
```bash
cd herbal-tea-website
./push_to_github.sh [你的權杖]
```

### 3. 設定 GitHub Pages
1. 訪問：https://github.com/easonliu850711/herbal-tea-website/settings/pages
2. 設定：
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
3. 保存，等待部署完成

### 4. 訪問網站
部署完成後，訪問：
```
https://easonliu850711.github.io/herbal-tea-website/
```

## 檔案結構：
```
herbal-tea-website/
├── static-site/          # 靜態網站 (可立即部署)
├── src/                 # React 原始碼
├── public/              # 靜態資源
├── push_to_github.sh    # 推送腳本
└── README.md           # 專案說明
```

## 技術備註：
- 靜態網站已包含完整功能
- React 版本待技術問題解決後可升級
- 所有照片和內容已整合
- 響應式設計已測試
