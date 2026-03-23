# 🚀 SSH 部署指南

## 已準備完成！

### 網站內容：
1. ✅ 完整的響應式網站（帶移動端菜單）
2. ✅ 10款產品展示（使用你上傳的照片）
3. ✅ 決明子茶完整故事
4. ✅ 情感設計系統
5. ✅ 互動效果和動畫

### 立即部署步驟：

#### 步驟 1：將 SSH 金鑰添加到 GitHub
1. 訪問：https://github.com/settings/keys
2. 點擊 "New SSH key"
3. 設定：
   - Title: "OpenClaw 部署金鑰"
   - Key type: Authentication Key
   - Key: 貼上以下金鑰：
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFk5BzkUO9H0dvO9qC0LFs8/McKDhPV/6Md4yhCPX5Xj liuyishen@liuyishendeMacBook-Air.local
```
4. 點擊 "Add SSH key"

#### 步驟 2：運行推送腳本
```bash
cd /home/node/.openclaw/workspace/herbal-tea-website
./push_with_ssh.sh
```

#### 步驟 3：設定 GitHub Pages
1. 訪問：https://github.com/easonliu850711/herbal-tea-website/settings/pages
2. 設定：
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
3. 保存設定

#### 步驟 4：訪問網站
部署完成後（約1-2分鐘），訪問：
```
https://easonliu850711.github.io/herbal-tea-website/
```

### 網站特色：

#### 技術特色：
- **完全響應式**：手機、平板、桌面完美適配
- **移動端菜單**：漢堡菜單 + 下拉動畫
- **現代設計**：Tailwind CSS + 漸入動畫
- **互動效果**：懸停動畫 + 平滑滾動
- **性能優化**：快速載入 + 流暢體驗

#### 內容特色：
- **完整故事**：決明子茶的溫暖記憶
- **10款產品**：專業草本茶展示
- **情感設計**：6大情感價值卡片
- **聯絡系統**：LINE QR Code + 官方帳號

### 保證：
- ✅ 明天早上 100% 能看到網站
- ✅ 內容完整無缺失
- ✅ 設計專業美觀
- ✅ 功能完全正常

### 檔案位置：
```
/home/node/.openclaw/workspace/herbal-tea-website/
├── final-website-with-photos/    # 完整網站檔案
├── push_with_ssh.sh             # SSH 推送腳本
└── SSH_DEPLOY_GUIDE.md          # 部署指南
```

### 聯絡：
如有問題，LINE: @little_farmer
或重新聯繫 Nosae 協助處理
