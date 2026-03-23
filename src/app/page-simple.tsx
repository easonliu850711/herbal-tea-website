export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🌱 決明子茶的故事
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
        </p>
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
          <p className="text-gray-700 mb-4">
            三十年前，市場裡的那個小攤位，只有一種茶——決明子茶。
          </p>
          <p className="text-gray-700 mb-4">
            就是這一杯簡單的茶，承載了全家人的生計，也見證了孩子們的成長。
          </p>
          <p className="text-amber-600 font-medium">
            「其他做生意的也都叫我媽決明子，已經變成我媽的綽號了。」
          </p>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            劉媽媽的草本茶 • 三十年市場記憶
          </p>
        </div>
      </div>
    </div>
  )
}