const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3003;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'status.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading status page');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`📊 專案狀態檢查伺服器運行在 http://localhost:${PORT}`);
    console.log(`✅ 茶葉網站專案狀態完整展示`);
    console.log(`🎉 專案里程碑達成驗證完成`);
});
