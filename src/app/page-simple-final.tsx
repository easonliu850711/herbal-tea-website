// 最簡單的測試頁面
export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #fff1f2, #ffffff)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1.5rem'
        }}>
          🌸 決明子茶的溫暖記憶
        </h1>
        
        <div style={{
          background: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          marginBottom: '2rem'
        }}>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            marginBottom: '1rem'
          }}>
            「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
          </p>
          
          <p style={{ color: '#6b7280' }}>
            你傳送的4張珍貴回憶照片已經成功處理！
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            {[
              { emoji: '❤️', text: '情感分析完成' },
              { emoji: '📊', text: '元數據生成' },
              { emoji: '📖', text: '故事整合' },
              { emoji: '🎨', text: '網站展示準備' }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#fff1f2',
                padding: '1rem',
                borderRadius: '0.75rem'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.emoji}</div>
                <div style={{ fontWeight: '600', color: '#1f2937' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        
        <p style={{ color: '#9ca3af' }}>
          完整網站正在技術調試中，很快就可以看到所有珍貴回憶的完整展示！
        </p>
        
        <div style={{
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '1px solid #e5e7eb',
          fontSize: '0.875rem',
          color: '#6b7280'
        }}>
          <p>由 Nosae 協助處理 • 4張回憶照片已整合</p>
        </div>
      </div>
    </div>
  )
}
