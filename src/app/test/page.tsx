// 最簡單的測試頁面
export default function TestPage() {
  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h1 style={{ color: 'green' }}>✅ 測試成功！</h1>
      <p>如果看到這個頁面，說明Next.js基本配置正常。</p>
      <div style={{ marginTop: 20, padding: 15, background: '#f0fdf4', borderRadius: 8 }}>
        <h3>測試結果：</h3>
        <ul>
          <li>✅ Next.js路由正常</li>
          <li>✅ 頁面渲染正常</li>
          <li>✅ 基本樣式正常</li>
        </ul>
      </div>
    </div>
  );
}