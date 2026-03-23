'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Coffee, Leaf } from 'lucide-react'

const CassiaTeaStory = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* 主標題 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">我們的故事從這裡開始</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              一杯決明子茶，養活了一家人
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              這個名字，不只是茶葉，更是媽媽三十年的市場記憶
            </p>
          </div>

          {/* 故事時間軸 */}
          <div className="relative">
            {/* 時間軸線 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 to-orange-300 hidden md:block"></div>

            {/* 時間軸項目 */}
            <div className="space-y-12">
              {/* 30年前 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:pr-12 md:ml-auto"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-amber-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">三十年前 • 最初的開始</h3>
                      <p className="text-amber-600 font-medium">只有一種茶：決明子茶</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    市場裡的那個小攤位，只有一個簡單的招牌：「決明子茶」。
                    每天清晨，媽媽帶著孩子們一起準備，那一杯杯溫熱的茶，
                    不只是生意，是全家人生活的希望。
                  </p>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                    <p className="text-amber-800 italic">
                      「就是靠這個把我們養大的。」
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-6 -right-3 w-6 h-6 bg-amber-500 rounded-full border-4 border-white"></div>
              </motion.div>

              {/* 市場裡的稱呼 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:pl-12"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">市場裡的溫暖稱呼</h3>
                      <p className="text-orange-600 font-medium">「決明子」媽媽</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    在傳統市場裡，人們不記得「劉媽媽」，
                    他們記得的是「決明子」。
                    這個綽號，是三十年來一杯杯茶累積起來的信任，
                    是市場裡最親切的稱呼。
                  </p>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-orange-800 italic">
                      「其他做生意的也都叫我媽決明子，已經變成我媽的綽號了。」
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-6 -left-3 w-6 h-6 bg-orange-500 rounded-full border-4 border-white"></div>
              </motion.div>

              {/* 現在的意義 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:pr-12 md:ml-auto"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">永遠不變的意義</h3>
                      <p className="text-green-600 font-medium">不只是茶，是家的記憶</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    從決明子茶開始，到現在各種草本茶葉，
                    變的是品項，不變的是那份用心。
                    每一杯茶，都還是當年的那份溫暖，
                    那份養活一家人的堅持。
                  </p>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-800 italic">
                      「永遠不會改變決明子茶跟在我心中的意義。」
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-6 -right-3 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
              </motion.div>
            </div>
          </div>

          {/* 情感價值卡片 */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              一杯茶裡的情感價值
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '❤️',
                  title: '家庭的愛',
                  description: '養活一家人的溫暖記憶',
                  color: 'bg-red-50 border-red-200'
                },
                {
                  icon: '🤝',
                  title: '市場人情',
                  description: '三十年累積的信任關係',
                  color: 'bg-amber-50 border-amber-200'
                },
                {
                  icon: '🌱',
                  title: '初心不變',
                  description: '從決明子茶開始的堅持',
                  color: 'bg-green-50 border-green-200'
                },
                {
                  icon: '📖',
                  title: '故事傳承',
                  description: '一代傳一代的溫暖記憶',
                  color: 'bg-blue-50 border-blue-200'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl border-2 ${item.color}`}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 呼籲行動 */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              品味一杯承載三十年記憶的決明子茶
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              這不只是茶葉，這是我們家的故事，是市場裡的溫暖記憶，
              是三十年來一杯杯茶累積起來的人情味。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CassiaTeaStory