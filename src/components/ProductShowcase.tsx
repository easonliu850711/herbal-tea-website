'use client'

import React, { useState } from 'react';
import { Leaf, Info, ExternalLink, QrCode } from 'lucide-react';

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      name: "七葉膽茶",
      subtitle: "強身茶",
      ingredients: ["七葉膽", "白鶴靈芝", "枸杞根", "紅棗葉", "甘草", "決明子"],
      color: "border-green-600",
      tag: "滋補強身"
    },
    {
      name: "一條根茶",
      subtitle: "舒活茶",
      ingredients: ["一條根", "薄荷葉", "伸筋草", "續斷藤", "甘草", "羅漢果", "決明子"],
      color: "border-orange-600",
      tag: "舒緩放鬆"
    },
    {
      name: "洛神花茶",
      subtitle: "纖體美顏茶",
      ingredients: ["洛神花", "烏梅", "仙楂", "桑葉", "荷葉", "羅漢果", "決明子", "甘草"],
      color: "border-pink-600",
      tag: "養顏美容"
    },
    {
      name: "雞角刺茶",
      subtitle: "好眠防禦茶",
      ingredients: ["雞角刺", "刺五加", "茵陳", "魚腥草", "蒲公英", "甘草", "羅漢果"],
      color: "border-purple-600",
      tag: "安定助眠"
    },
    {
      name: "魚腥草茶",
      subtitle: "防護茶",
      ingredients: ["魚腥草", "金銀花", "紫蘇", "薄荷", "桑葉", "麥門冬", "肺炎草", "決明子", "羅漢果", "甘草"],
      color: "border-teal-600",
      tag: "健康防護"
    },
    {
      name: "金線蓮茶",
      subtitle: "美人茶",
      ingredients: ["金線蓮", "白鶴靈芝", "刺五加", "枸杞根", "桑寄生", "紫蘇", "決明子", "甘草"],
      color: "border-yellow-600",
      tag: "煥發神采"
    },
    {
      name: "辣木茶",
      subtitle: "女王茶",
      ingredients: ["辣木枝葉", "金線蓮", "白鶴靈芝", "決明子", "甘草", "羅漢果"],
      color: "border-red-600",
      tag: "元氣補給"
    },
    {
      name: "枸杞菊花茶",
      subtitle: "清熱明目茶",
      ingredients: ["枸杞", "白菊花", "決明子", "蒲公英", "甘草", "羅漢果"],
      color: "border-cyan-600",
      tag: "晶亮舒適"
    },
    {
      name: "桑葉苦瓜茶",
      subtitle: "三降茶",
      ingredients: ["山苦瓜", "桑葉", "葛根", "仙楂", "決明子", "甘草", "羅漢果"],
      color: "border-emerald-700",
      tag: "代謝穩定"
    },
    {
      name: "桑葉茶",
      subtitle: "油糖雙切茶",
      ingredients: ["桑葉", "荷葉", "仙楂", "丹參", "羅漢果", "決明子"],
      color: "border-lime-600",
      tag: "餐後解膩"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans p-4 md:p-8">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-block p-2 mb-4">
          <Leaf className="w-10 h-10 text-green-700 mx-auto mb-2" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-green-900 mb-2">
            劉媽媽の草本茶
          </h1>
          <div className="h-1 w-24 bg-green-700 mx-auto rounded-full"></div>
        </div>
        <p className="text-stone-500 max-w-lg mx-auto mt-4 text-sm md:text-base leading-relaxed">
          「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
        </p>
      </header>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div 
            key={index}
            className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-l-8 ${product.color} flex flex-col sm:flex-row`}
          >
            {/* Image Placeholder - Typically you would use actual images here */}
            <div className="w-full sm:w-48 bg-stone-100 flex items-center justify-center p-6 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  <Leaf className="w-32 h-32" />
               </div>
               <div className="relative text-center">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-stone-200">
                    <p className="text-[10px] text-stone-400 mb-1">PACKAGING</p>
                    <p className="text-xs font-bold text-stone-700">{product.name}</p>
                    <div className="mt-2 text-[9px] bg-green-100 text-green-800 px-2 py-0.5 rounded-full inline-block">
                      20包入
                    </div>
                  </div>
               </div>
            </div>

            {/* Content Details */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{product.tag}</span>
                  <h3 className="text-2xl font-bold text-stone-900 mt-1">{product.name}</h3>
                </div>
                <div className="text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm font-medium border border-green-100">
                  {product.subtitle}
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 text-stone-500 mb-2">
                  <Info className="w-4 h-4" />
                  <span className="text-xs font-semibold">嚴選成分</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md border border-stone-200"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer / QR Code Section */}
      <footer className="max-w-4xl mx-auto mt-20 mb-10 text-center border-t border-stone-200 pt-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-left">
            <h4 className="text-xl font-bold text-stone-800 mb-2">即刻訂購與諮詢</h4>
            <p className="text-stone-500 mb-4 max-w-xs text-sm">
              掃描 QR Code 加入我們的官方 LINE，獲取最新優惠資訊與健康茶飲建議。
            </p>
            <div className="flex items-center gap-4 text-green-700">
               <div className="bg-green-100 p-2 rounded-full">
                  <ExternalLink className="w-5 h-5" />
               </div>
               <span className="font-semibold">LINE: @little_farmer</span>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-lime-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-4 rounded-xl shadow-lg border border-stone-100">
              <div className="w-32 h-32 bg-stone-200 flex items-center justify-center rounded-lg border-2 border-dashed border-stone-300">
                 <QrCode className="w-20 h-20 text-stone-400" />
              </div>
              <p className="mt-2 text-[10px] font-bold text-green-700">官方 LINE 掃描區</p>
            </div>
          </div>
        </div>
        
        <p className="text-stone-400 text-[10px] mt-16 tracking-widest uppercase">
          © 2024 劉媽媽の草本茶 | 三十年市場經驗的溫暖傳承
        </p>
      </footer>
    </div>
  );
};

export default ProductShowcase;