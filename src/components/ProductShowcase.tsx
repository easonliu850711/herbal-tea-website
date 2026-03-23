'use client'

import React, { useState } from 'react'
import { Leaf, Info, ExternalLink, QrCode } from 'lucide-react'

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      name: "七葉膽茶",
      subtitle: "強身茶",
      ingredients: ["七葉膽", "白鶴靈芝", "枸杞根", "紅棗葉", "甘草", "決明子"],
      color: "border-green-600",
      tag: "滋補強身",
      description: "增強體力，提升元氣"
    },
    {
      name: "一條根茶",
      subtitle: "舒活茶",
      ingredients: ["一條根", "薄荷葉", "伸筋草", "續斷藤", "甘草", "羅漢果", "決明子"],
      color: "border-orange-600",
      tag: "舒緩放鬆",
      description: "放鬆肌肉，舒緩不適"
    },
    {
      name: "洛神花茶",
      subtitle: "纖體美顏茶",
      ingredients: ["洛神花", "烏梅", "仙楂", "桑葉", "荷葉", "羅漢果", "決明子", "甘草"],
      color: "border-pink-600",
      tag: "養顏美容",
      description: "美容養顏，幫助代謝"
    },
    {
      name: "雞角刺茶",
      subtitle: "好眠防禦茶",
      ingredients: ["雞角刺", "刺五加", "茵陳", "魚腥草", "蒲公英", "甘草", "羅漢果"],
      color: "border-purple-600",
      tag: "安定助眠",
      description: "幫助入睡，提升防護"
    },
    {
      name: "魚腥草茶",
      subtitle: "防護茶",
      ingredients: ["魚腥草", "金銀花", "紫蘇", "薄荷", "桑葉", "麥門冬", "肺炎草", "決明子", "羅漢果", "甘草"],
      color: "border-teal-600",
      tag: "健康防護",
      description: "增強防護，維持健康"
    },
    {
      name: "金線蓮茶",
      subtitle: "美人茶",
      ingredients: ["金線蓮", "白鶴靈芝", "刺五加", "枸杞根", "桑寄生", "紫蘇", "決明子", "甘草"],
      color: "border-yellow-600",
      tag: "煥發神采",
      description: "提亮膚色，煥發精神"
    },
    {
      name: "辣木茶",
      subtitle: "女王茶",
      ingredients: ["辣木枝葉", "金線蓮", "白鶴靈芝", "決明子", "甘草", "羅漢果"],
      color: "border-red-600",
      tag: "元氣補給",
      description: "補充元氣，增強活力"
    },
    {
      name: "枸杞菊花茶",
      subtitle: "清熱明目茶",
      ingredients: ["枸杞", "白菊花", "決明子", "蒲公英", "甘草", "羅漢果"],
      color: "border-cyan-600",
      tag: "晶亮舒適",
      description: "明亮雙眼，清熱舒適"
    },
    {
      name: "桑葉苦瓜茶",
      subtitle: "三降茶",
      ingredients: ["山苦瓜", "桑葉", "葛根", "仙楂", "決明子", "甘草", "羅漢果"],
      color: "border-emerald-700",
      tag: "代謝穩定",
      description: "幫助代謝，維持平衡"
    },
    {
      name: "桑葉茶",
      subtitle: "油糖雙切茶",
      ingredients: ["桑葉", "荷葉", "仙楂", "丹參", "羅漢果", "決明子"],
      color: "border-lime-600",
      tag: "餐後解膩",
      description: "餐後飲用，幫助消化"
    }
  ]

  return (
    <section className="bg-gradient-to-b from-stone-50 to-white py-20">
      <div className="container-custom">
        {/* Header Section */}
        <header className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-block p-2 mb-6">
            <Leaf className="w-12 h-12 text-green-700 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-green-900 mb-3">
              小農孵 <span className="font-light">| 台灣草本茶</span>
            </h1>
            <div className="h-1 w-32 bg-green-700 mx-auto rounded-full"></div>
          </div>
          <p className="text-stone-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            源自土地的純粹，以台灣在地草本為核心，為您的每一天注入自然能量。
            劉媽媽三十年市場經驗的智慧結晶。
          </p>
          
          {/* Connection to Memory Story */}
          <div className="mt-8 inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-800 px-6 py-3 rounded-full">
            <span className="text-sm font-medium">🌱 從決明子茶開始，發展出10款專業草本茶</span>
          </div>
        </header>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-l-8 ${product.color} flex flex-col h-full`}
              >
                {/* Product Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-stone-100 to-stone-50 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 flex items-center justify-center">
                    <Leaf className="w-48 h-48 text-stone-400" />
                  </div>
                  <div className="relative text-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md border border-stone-200">
                      <p className="text-xs text-stone-400 mb-1 font-semibold tracking-wider">PACKAGING</p>
                      <p className="text-lg font-bold text-stone-800">{product.name}</p>
                      <div className="mt-3 text-xs bg-green-100 text-green-800 px-3 py-1.5 rounded-full inline-block font-semibold">
                        20包入 • 劉媽媽手工包裝
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-stone-400 font-bold">{product.tag}</span>
                      <h3 className="text-2xl font-bold text-stone-900 mt-2">{product.name}</h3>
                      <p className="text-stone-500 text-sm mt-1">{product.description}</p>
                    </div>
                    <div className="text-green-700 bg-green-50 px-4 py-2 rounded-full text-sm font-medium border border-green-100 whitespace-nowrap">
                      {product.subtitle}
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="mt-6">
                    <div className="flex items-center gap-2 text-stone-500 mb-3">
                      <Info className="w-5 h-5" />
                      <span className="text-sm font-semibold">嚴選成分</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ing, i) => (
                        <span 
                          key={i} 
                          className={`text-xs px-3 py-1.5 rounded-md border ${
                            ing === '決明子' 
                              ? 'bg-amber-100 text-amber-800 border-amber-200 font-semibold' 
                              : 'bg-stone-100 text-stone-600 border-stone-200'
                          }`}
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                    
                    {/* Highlight 決明子 */}
                    {product.ingredients.includes('決明子') && (
                      <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <p className="text-amber-700 text-sm flex items-center">
                          <span className="mr-2">🌱</span>
                          包含決明子 - 劉媽媽最初只賣的茶，養活一家人的溫暖記憶
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer with Actions */}
                <div className="p-6 pt-0">
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    了解更多 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer / QR Code Section */}
        <footer className="max-w-6xl mx-auto mt-24 mb-10 text-center border-t border-stone-200 pt-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-left max-w-lg">
              <h4 className="text-2xl font-bold text-stone-800 mb-4">即刻訂購與諮詢</h4>
              <p className="text-stone-600 mb-6 text-lg">
                掃描 QR Code 加入我們的官方 LINE，獲取最新優惠資訊與健康茶飲建議。
                劉媽媽親自為您推薦適合的茶飲。
              </p>
              <div className="flex items-center gap-4 text-green-700">
                <div className="bg-green-100 p-3 rounded-full">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-semibold text-lg">LINE: @little_farmer</span>
                  <p className="text-stone-500 text-sm mt-1">或搜尋「小農孵台灣草本茶」</p>
                </div>
              </div>
            </div>
            
            {/* QR Code Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-lime-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-stone-100">
                <div className="w-48 h-48 bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center rounded-xl border-2 border-dashed border-stone-300">
                  <div className="text-center">
                    <QrCode className="w-24 h-24 text-stone-400 mx-auto mb-3" />
                    <p className="text-xs font-bold text-green-700">官方 LINE 掃描區</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-stone-500">掃碼加入，獲取專屬優惠</p>
              </div>
            </div>
          </div>
          
          {/* Connection to Brand Story */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <p className="text-stone-500 max-w-2xl mx-auto">
              🌱 從一杯決明子茶開始，到現在10款專業草本茶。
              三十年市場經驗，不變的是劉媽媽對每一包茶的用心。
              「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
            </p>
            <p className="text-stone-400 text-sm mt-8 tracking-widest uppercase">
              © 2024 小農孵台灣草本茶 | 本草綱目與現代科技的結合 | 劉媽媽三十年市場智慧
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default ProductShowcase