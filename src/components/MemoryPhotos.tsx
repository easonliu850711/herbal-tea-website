'use client'

import { motion } from 'framer-motion'
import { Camera, Heart, Clock, Users, Home } from 'lucide-react'

const MemoryPhotos = () => {
  const memoryPhotos = [
    {
      id: 1,
      filename: 'IMG_20190511_122210.jpg',
      title: '最初的決明子茶攤位',
      description: '三十年前養活一家人的溫暖記憶',
      year: '1990年代',
      emotion: '懷舊溫暖',
      significance: '家庭的起點',
      quote: '「就是靠這個把我們養大的」'
    },
    {
      id: 2,
      filename: 'IMG_20190511_122252.jpg',
      title: '傳統市場的日常',
      description: '劉媽媽三十年市場經驗的真實記錄',
      year: '2000年代',
      emotion: '真實親切',
      significance: '市場記憶',
      quote: '每天清晨的準備工作'
    },
    {
      id: 3,
      filename: 'IMG_20190511_122353.jpg',
      title: '「決明子」媽媽',
      description: '市場裡最溫暖的稱呼',
      year: '三十年來',
      emotion: '情感深厚',
      significance: '市場認同',
      quote: '「已經變成我媽的綽號了」'
    },
    {
      id: 4,
      filename: 'IMG_20190511_122401.jpg',
      title: '家庭的溫暖記憶',
      description: '一杯茶承載的成長故事',
      year: '永恆',
      emotion: '家庭之愛',
      significance: '情感傳承',
      quote: '永遠不變的意義'
    }
  ]

  const emotionalValues = [
    { icon: '❤️', label: '家庭的愛', value: 98, description: '養活一家人的溫暖' },
    { icon: '🤝', label: '市場人情', value: 95, description: '三十年信任累積' },
    { icon: '🌱', label: '初心不變', value: 90, description: '從決明子茶開始' },
    { icon: '📖', label: '故事傳承', value: 92, description: '一代傳一代的記憶' },
    { icon: '⏳', label: '懷舊價值', value: 96, description: '三十年的時間沉澱' },
    { icon: '👵', label: '媽媽的愛', value: 99, description: '無私的奉獻和堅持' }
  ]

  return (
    <section className="bg-gradient-to-b from-rose-50 to-white py-20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* 標題區 */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl mb-6 shadow-lg"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              珍貴的決明子茶回憶
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
              這些照片記錄了三十年市場點滴，是我們家最溫暖的記憶。
            </p>
            <div className="inline-flex items-center space-x-2 bg-white border-2 border-rose-200 text-rose-700 px-6 py-3 rounded-full shadow-sm">
              <Clock className="w-4 h-4" />
              <span className="font-medium">4張珍貴回憶 • 1990s-2000s</span>
            </div>
          </div>

          {/* 情感價值卡片 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              這些照片的情感價值
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {emotionalValues.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-md border border-rose-100 text-center"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-3xl font-bold text-rose-600 mb-1">{item.value}%</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 回憶照片網格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {memoryPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-rose-100 hover:shadow-2xl transition-shadow"
              >
                {/* 照片區 */}
                <div className="relative h-64 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-rose-300 mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-rose-700 font-bold text-lg">{photo.title}</p>
                      <p className="text-rose-600 text-sm">{photo.filename}</p>
                    </div>
                  </div>
                  
                  {/* 年份標籤 */}
                  <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ⏳ {photo.year}
                  </div>
                  
                  {/* 情感標籤 */}
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {photo.emotion}
                  </div>
                </div>

                {/* 內容區 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-gray-600 mb-4">{photo.description}</p>
                  
                  {/* 引用 */}
                  <div className="bg-rose-50 border-l-4 border-rose-500 pl-4 py-3 mb-4">
                    <p className="text-rose-700 italic">{photo.quote}</p>
                  </div>
                  
                  {/* 意義標籤 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                        {index === 0 && <Home className="w-4 h-4 text-rose-600" />}
                        {index === 1 && <Users className="w-4 h-4 text-rose-600" />}
                        {index === 2 && <Heart className="w-4 h-4 text-rose-600" />}
                        {index === 3 && <Clock className="w-4 h-4 text-rose-600" />}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{photo.significance}</span>
                    </div>
                    <button className="text-rose-600 hover:text-rose-700 font-semibold text-sm">
                      查看詳情 →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 故事時間軸 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              決明子茶的故事時間軸
            </h3>
            <div className="relative">
              {/* 時間軸線 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-300 to-pink-300 hidden md:block"></div>
              
              {/* 時間軸項目 */}
              <div className="space-y-12">
                {[
                  { year: '1990s', title: '最初的開始', description: '只有決明子茶，養活一家人' },
                  { year: '2000s', title: '市場認同', description: '「決明子」成為媽媽的綽號' },
                  { year: '2010s', title: '多元發展', description: '從決明子茶到各種草本茶' },
                  { year: '現在', title: '情感傳承', description: '將溫暖記憶轉化為品牌故事' }
                ].map((item, index) => (
                  <div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-rose-50 p-6 rounded-xl border border-rose-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                          <span className="text-rose-700 font-bold">{item.year}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block absolute top-6 w-6 h-6 bg-rose-500 rounded-full border-4 border-white"
                      style={{ [index % 2 === 0 ? 'right' : 'left']: '-3px' }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 呼籲行動 */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              探索更多溫暖記憶
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              這些照片不只是影像，是我們家的故事，是市場裡的溫暖記憶，
              是三十年來一杯杯茶累積起來的人情味。
            </p>
            <p className="mt-2 text-sm text-gray-500">
              🌸 由 Nosae 協助整理和情感分析
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemoryPhotos