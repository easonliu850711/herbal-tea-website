# GitHub SSH 金鑰設定指南

## 🚀 長期解決方案：使用 SSH 金鑰

### 優點：
- 更安全：不需要每次輸入權杖
- 更方便：一次設定，長期使用
- 更標準：GitHub 推薦的方式

### 步驟 1：生成 SSH 金鑰
```bash
ssh-keygen -t ed25519 -C "easonliu850711@gmail.com"
```
- 按 Enter 接受預設位置
- 設定密碼（可選，建議設定）

### 步驟 2：將公鑰添加到 GitHub
1. 複製公鑰：
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
2. 訪問 GitHub：Settings → SSH and GPG keys → New SSH key
3. 貼上公鑰，設定 Title: "OpenClaw"

### 步驟 3：使用 SSH URL
```bash
git remote set-url origin git@github.com:easonliu850711/herbal-tea-website.git
git push -u origin main
```

### 步驟 4：測試連線
```bash
ssh -T git@github.com
```
應該看到：`Hi easonliu850711! You've successfully authenticated...`

## 🔧 故障排除

### 如果 SSH 無法工作：
1. 檢查 SSH 代理：
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

2. 檢查權限：
   ```bash
   chmod 600 ~/.ssh/id_ed25519
   chmod 644 ~/.ssh/id_ed25519.pub
   ```

3. 檢查 GitHub SSH 設定：
   ```bash
   ssh -T git@github.com -v
   ```
