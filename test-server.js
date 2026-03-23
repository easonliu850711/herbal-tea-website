// 簡單的 HTTP 伺服器測試
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3003;

const server = http.createServer((req, res) => {
  // 只處理根路徑
  if (req.url === '/' || req.url === '/index.html') {
    const html = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>決明子茶的故事 - 測試頁面</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', 'Noto Sans TC', sans-serif; }
    </style>
</head>
<body class="min-h-screen bg-gradient-to-b from-amber-50 to-white">
    <div class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto text-center">
            <!-- 標題 -->
            <div class="mb-8">
                <div class="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
                    <span>🌱</span>
                    <span class="text-sm font-medium">我們的故事從這裡開始</span>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    一杯決明子茶，養活了一家人
                </h1>
                <p class="text-lg text-gray-600">
                    這個名字，不只是茶葉，更是媽媽三十年的市場記憶
                </p>
            </div>

            <!-- 主要故事 -->
            <div class="bg-white rounded-2xl shadow-xl p-8 mb-8 text-left">
                <div class="mb-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-3">三十年前 • 最初的開始</h2>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        市場裡的那個小攤位，只有一個簡單的招牌：「決明子茶」。
                        每天清晨，媽媽帶著孩子們一起準備，那一杯杯溫熱的茶，
                        不只是生意，是全家人生活的希望。
                    </p>
                </div>

                <div class="border-t border-gray-100 pt-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-3">市場裡的溫暖稱呼</h2>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        「其他做生意的也都叫我媽決明子，已經變成我媽的綽號了。」
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        在傳統市場裡，人們不記得「劉媽媽」，
                        他們記得的是「決明子」。
                        這個綽號，是三十年來一杯杯茶累積起來的信任，
                        是市場裡最親切的稱呼。
                    </p>
                </div>

                <div class="border-t border-gray-100 pt-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-3">永遠不變的意義</h2>
                    <p class="text-gray-700 leading-relaxed">
                        從決明子茶開始，到現在各種草本茶葉，
                        變的是品項，不變的是那份用心。
                        每一杯茶，都還是當年的那份溫暖，
                        那份養活一家人的堅持。
                    </p>
                </div>
            </div>

            <!-- 情感價值卡片 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div class="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
                    <div class="text-3xl mb-3">❤️</div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">家庭的愛</h3>
                    <p class="text-gray-600">養活一家人的溫暖記憶</p>
                </div>
                <div class="bg-amber-50 border-2 border-amber-200 p-6 rounded-xl">
                    <div class="text-3xl mb-3">🤝</div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">市場人情</h3>
                    <p class="text-gray-600">三十年累積的信任關係</p>
                </div>
                <div class="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                    <div class="text-3xl mb-3">🌱</div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">初心不變</h3>
                    <p class="text-gray-600">從決明子茶開始的堅持</p>
                </div>
                <div class="bg-blue-50 border-2 border-blue-200 p-6 rounded-xl">
                    <div class="text-3xl mb-3">📖</div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">故事傳承</h3>
                    <p class="text-gray-600">一代傳一代的溫暖記憶</p>
                </div>
            </div>

            <!-- 呼籲行動 -->
            <div class="mt-8">
                <button class="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow">
                    品味一杯承載三十年記憶的決明子茶
                </button>
                <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
                    這不只是茶葉，這是我們家的故事，是市場裡的溫暖記憶，
                    是三十年來一杯杯茶累積起來的人情味。
                </p>
            </div>

            <!-- 頁尾 -->
            <div class="mt-12 pt-8 border-t border-gray-200">
                <p class="text-sm text-gray-500">
                    🌸 劉媽媽的草本茶 • 三十年市場記憶 • 由 Nosae 協助製作
                </p>
                <p class="text-xs text-gray-400 mt-2">
                    測試伺服器 • 即時預覽 • 完整網站開發中
                </p>
            </div>
        </div>
    </div>

    <script>
        // 簡單的互動效果
        document.querySelector('button').addEventListener('click', function() {
            this.classList.add('scale-95');
            setTimeout(() => {
                this.classList.remove('scale-95');
                alert('🎉 這就是決明子茶的故事！\n\n一杯茶，承載了三十年的家庭記憶和市場人情。');
            }, 150);
        });
    </script>
</body>
</html>
    `;
    
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`🎉 測試伺服器運行在 http://localhost:${PORT}`);
  console.log(`📱 手機訪問: http://${require('os').networkInterfaces().eth0?.[0]?.address || 'localhost'}:${PORT}`);
  console.log('📖 內容: 決明子茶的完整故事展示');
  console.log('🎨 設計: Tailwind CSS + 情感設計');
  console.log('🚀 狀態: 即時運行，無需編譯');
});

// 優雅關閉
process.on('SIGINT', () => {
  console.log('\n👋 關閉測試伺服器');
  server.close();
  process.exit(0);
});