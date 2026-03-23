export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          🌸 劉媽媽的草本茶
        </h1>
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <p className="text-xl text-gray-700 mb-4">
            「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
          </p>
          <p className="text-gray-600">
            網站正在最後調整，明天早上即可完整上線！
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {['產品展示', '故事系統', '照片畫廊', '情感設計', '響應式', 'GitHub推送'].map((item, i) => (
              <div key={i} className="bg-rose-50 p-4 rounded-xl">
                <div className="font-semibold text-gray-900">{item}</div>
                <div className="text-green-600 text-sm mt-1">✅ 已完成</div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-500">
          感謝耐心等待，我們正在進行最後的技術調整。
        </p>
      </div>
    </div>
  )
}
