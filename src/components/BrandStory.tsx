const BrandStory = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-amber-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              決明子茶的故事：我們的根
            </h2>
            <p className="text-lg text-gray-600">
              從一杯決明子茶開始，養活了一家人，也成就了「決明子」這個名字
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 左側故事 */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  🌱 最初的決明子茶
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  三十年前，市場裡的那個小攤位，只有一種茶——決明子茶。
                  就是這一杯簡單的茶，承載了全家人的生計，也見證了孩子們的成長。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  🏷️ 「決明子」不只是茶，是媽媽的名字
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  「其他做生意的也都叫我媽決明子，已經變成我媽的綽號了。」
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  在傳統市場裡，人們不記得「劉媽媽」，他們記得的是「決明子」。
                  這個綽號，是三十年來一杯杯茶累積起來的信任，
                  是市場裡最溫暖的稱呼。
                </p>
              </div>
            </div>

            {/* 右側故事 */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ❤️ 永遠不變的意義
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  「後來雖然因為種種原因改賣其他茶葉，但永遠不會改變決明子茶跟在我心中的意義。」
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  從決明子茶開始，到現在各種草本茶葉，
                  變的是品項，不變的是那份用心。
                  每一杯茶，都還是當年的那份溫暖，
                  那份養活一家人的堅持。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  👥 市場裡的人情味
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  三十年來，這個攤位見證了市場的變化，
                  見證了孩子們長大，見證了無數顧客從年輕喝到老。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  這裡賣的不只是茶葉，是記憶，是情感，
                  是市場裡那份最真實的人情味。
                  每一杯茶，都是三十年故事的延續。
                </p>
              </div>
            </div>
          </div>

          {/* 底部引言 */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-md">
              品味一杯承載三十年記憶的決明子茶
            </div>
            <p className="mt-3 text-gray-600 italic text-sm">
              這不只是茶，這是我們家的故事，是市場裡的溫暖記憶
            </p>
          </div>

          {/* 照片展示區 */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
              📸 市場裡的溫暖記憶
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-amber-100 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🌅</div>
                <p className="text-sm font-medium">三十年市場攤位</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">👵</div>
                <p className="text-sm font-medium">「決明子」媽媽</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🍵</div>
                <p className="text-sm font-medium">最初的決明子茶</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">❤️</div>
                <p className="text-sm font-medium">養活一家人的溫暖</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
