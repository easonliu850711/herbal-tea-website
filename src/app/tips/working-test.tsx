// 絕對簡單的工作測試頁面
export default function WorkingTestPage() {
  return (
    <html>
      <head>
        <title>草本小撇步 - 工作測試</title>
        <style>{`
          body {
            font-family: system-ui, -apple-system, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(to bottom, #f0fdf4, #ffffff);
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          h1 {
            color: #166534;
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          .subtitle {
            color: #4b5563;
            font-size: 1.2rem;
            margin-bottom: 2rem;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 2rem;
          }
          .card {
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid #bbf7d0;
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer;
          }
          .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
          }
          .icon {
            width: 60px;
            height: 60px;
            background: #bbf7d0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 15px;
            font-size: 24px;
          }
          .name {
            text-align: center;
            font-weight: bold;
            color: #166534;
            margin-bottom: 5px;
          }
          .desc {
            text-align: center;
            color: #6b7280;
            font-size: 0.9rem;
          }
          .status {
            background: #dcfce7;
            padding: 15px;
            border-radius: 8px;
            margin-top: 30px;
            border-left: 4px solid #22c55e;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1>🌿 草本小撇步 - 工作測試版</h1>
          <p className="subtitle">這是一個完全獨立、不使用任何外部依賴的測試頁面</p>
          
          <div className="grid">
            {[
              { name: '仙楂', emoji: '🍒', desc: '幫助消化，酸甜開胃' },
              { name: '葛根', emoji: '🌿', desc: '清熱解毒，舒緩喉嚨' },
              { name: '枸杞', emoji: '🔴', desc: '明目養肝，增強免疫力' },
              { name: '菊花', emoji: '🌼', desc: '清熱降火，舒緩眼睛疲勞' },
              { name: '紅棗', emoji: '❤️', desc: '補血養氣，溫和滋補' },
              { name: '桂圓', emoji: '🍡', desc: '安神補血，改善睡眠' },
              { name: '陳皮', emoji: '🍊', desc: '理氣健脾，幫助消化' },
              { name: '甘草', emoji: '🌱', desc: '潤喉止咳，調和藥性' },
            ].map((herb) => (
              <div key={herb.name} className="card">
                <div className="icon">{herb.emoji}</div>
                <div className="name">{herb.name}</div>
                <div className="desc">{herb.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="status">
            <strong>✅ 頁面狀態：正常運作</strong>
            <p>這個頁面使用純HTML/CSS，不依賴任何外部組件或路徑別名。</p>
            <p>如果這個頁面能正常顯示，說明Next.js基本配置正常。</p>
          </div>
        </div>
      </body>
    </html>
  );
}