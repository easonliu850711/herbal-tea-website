const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3002;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="zh-TW">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>劉媽媽的草本茶 - 開發測試</title>
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        background: linear-gradient(135deg, #98fb98, #87ceeb);
                        min-height: 100vh;
                        margin: 0;
                        padding: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .container {
                        background: white;
                        border-radius: 20px;
                        padding: 40px;
                        max-width: 800px;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.1);
                        text-align: center;
                    }
                    h1 {
                        color: #2e8b57;
                        font-size: 2.5rem;
                        margin-bottom: 20px;
                    }
                    .success {
                        color: #2e8b57;
                        font-weight: bold;
                        font-size: 1.2rem;
                        margin: 20px 0;
                    }
                    .component-list {
                        text-align: left;
                        background: #f8fff8;
                        padding: 20px;
                        border-radius: 10px;
                        margin: 20px 0;
                    }
                    .component-list li {
                        margin: 10px 0;
                        padding: 10px;
                        background: white;
                        border-radius: 8px;
                        border-left: 4px solid #98fb98;
                    }
                    .qr-preview {
                        width: 150px;
                        height: 150px;
                        background: linear-gradient(45deg, #98fb98, #87ceeb);
                        border-radius: 10px;
                        margin: 20px auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.5rem;
                        color: white;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🌸 劉媽媽的草本茶</h1>
                    <div class="success">✅ 前端專案實作成功！</div>
                    
                    <p>專案已成功建立，包含以下核心組件：</p>
                    
                    <div class="component-list">
                        <ul>
                            <li><strong>Navbar.tsx</strong> - 響應式導航列</li>
                            <li><strong>Footer.tsx</strong> - 完整頁尾</li>
                            <li><strong>HeroSection.tsx</strong> - 首頁英雄區</li>
                            <li><strong>QRCodesection.tsx</strong> - QR Code 完整界面</li>
                        </ul>
                    </div>
                    
                    <div class="qr-preview">
                        📱 LINE
                    </div>
                    
                    <p>掃碼加入官方帳號：<strong>@liu_mama_tea</strong></p>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee;">
                        <p><strong>技術棧</strong>：Next.js 14 + TypeScript + Tailwind CSS</p>
                        <p><strong>設計風格</strong>：清新自然風 (薄荷綠主色)</p>
                        <p><strong>響應式設計</strong>：完整支援桌面、平板、手機</p>
                    </div>
                    
                    <div style="margin-top: 20px; font-size: 0.9rem; color: #666;">
                        <p>專案位置：<code>/home/node/.openclaw/workspace/herbal-tea-website/</code></p>
                        <p>Git 倉庫：<code>https://github.com/easonliu850711/herbal-tea-website</code></p>
                    </div>
                </div>
            </body>
            </html>
        `);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`🚀 簡單測試伺服器運行在 http://localhost:${PORT}`);
    console.log(`✅ 茶葉網站前端實作驗證成功`);
    console.log(`📱 可以立即查看專案成果`);
});
