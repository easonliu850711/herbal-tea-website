'use client'

import React from 'react';
import { Leaf, ExternalLink, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const products = [
    {
      name: "七葉膽茶",
      subtitle: "強身茶",
      tag: "滋補強身",
      color: "bg-green-100 border-green-200 text-green-800"
    },
    {
      name: "一條根茶",
      subtitle: "舒活茶",
      tag: "舒緩放鬆",
      color: "bg-orange-100 border-orange-200 text-orange-800"
    },
    {
      name: "洛神花茶",
      subtitle: "纖體美顏茶",
      tag: "養顏美容",
      color: "bg-pink-100 border-pink-200 text-pink-800"
    },
    {
      name: "雞角刺茶",
      subtitle: "好眠防禦茶",
      tag: "安定助眠",
      color: "bg-purple-100 border-purple-200 text-purple-800"
    },
    {
      name: "魚腥草茶",
      subtitle: "防護茶",
      tag: "健康防護",
      color: "bg-blue-100 border-blue-200 text-blue-800"
    },
    {
      name: "金線蓮茶",
      subtitle: "美人茶",
      tag: "煥發神采",
      color: "bg-yellow-100 border-yellow-200 text-yellow-800"
    },
    {
      name: "辣木茶",
      subtitle: "女王茶",
      tag: "元氣補給",
      color: "bg-red-100 border-red-200 text-red-800"
    },
    {
      name: "枸杞菊花茶",
      subtitle: "清熱明目茶",
      tag: "晶亮舒適",
      color: "bg-amber-100 border-amber-200 text-amber-800"
    },
    {
      name: "桑葉苦瓜茶",
      subtitle: "三降茶",
      tag: "代謝穩定",
      color: "bg-lime-100 border-lime-200 text-lime-800"
    },
    {
      name: "桑葉茶",
      subtitle: "油糖雙切茶",
      tag: "餐後解膩",
      color: "bg-emerald-100 border-emerald-200 text-emerald-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-stone-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-40 right-10 w-48 h-48 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            劉媽媽の草本茶
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10">
            「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
          </p>
          <p className="text-lg opacity-80">
            三十年傳統市場經驗
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            精選十款草本茶
          </h2>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto">
            三十年市場經驗的智慧結晶，每款茶都針對現代人的需求精心調配
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-stone-200"
            >
              <div className={`p-6 ${product.color} border-b`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <p className="text-lg opacity-90">{product.subtitle}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/80">
                    {product.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-stone-700">市場熱銷 · 20包入</span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    了解更多 →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            開始您的草本之旅
          </h2>
          <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
            掃描 QR Code 加入官方 LINE，獲取三十年市場經驗的健康建議與專屬優惠
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-green-600 mb-4">
                <Phone className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">服務專線</h3>
              <p className="text-stone-700 text-lg">0956-111-636</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-green-600 mb-4">
                <Mail className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">LINE 官方帳號</h3>
              <p className="text-stone-700 text-lg">@910jrwoy</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-green-600 mb-4">
                <ExternalLink className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">掃碼加入 LINE</h3>
              <p className="text-stone-700">獲取專屬優惠與養生知識</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <p className="text-stone-300">
            © 2026 劉媽媽の草本茶 · 從決明子到草本茶，用茶養大兩個小孩的媽媽
          </p>
          <p className="text-stone-400 mt-2">
            三十年市場經驗的溫暖傳承 · 每一杯茶都是對媽媽養育之恩的回報
          </p>
        </div>
      </footer>
    </div>
  );
}