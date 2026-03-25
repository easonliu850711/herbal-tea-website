// 簡單測試版本 - 先確保能運行
export default function SimpleTipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-6">草本小撇步 - 測試版</h1>
      <p className="text-gray-600 mb-8">這是一個簡單測試，確保頁面能正常顯示。</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* 簡單的草本卡片 */}
        {['仙楂', '葛根', '枸杞', '菊花', '紅棗', '桂圓'].map((herb) => (
          <div 
            key={herb}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-green-200"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 font-bold text-lg">🍃</span>
            </div>
            <h3 className="text-center font-semibold text-green-700">{herb}</h3>
            <p className="text-sm text-gray-500 text-center mt-1">點擊查看詳細介紹</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <p className="text-green-800">
          ✅ <strong>功能確認</strong>：這個簡單版本應該能正常顯示。
          <br />
          🔧 <strong>下一步</strong>：如果這個能顯示，我們再逐步添加完整功能。
        </p>
      </div>
    </div>
  );
}