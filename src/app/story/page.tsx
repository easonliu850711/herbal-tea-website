'use client'

import React from 'react'
import { Leaf, Heart, Clock, Users, Award, Coffee } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function StoryPage() {
  const storySections = [
    {
      title: "從一杯決明子茶開始",
      icon: <Coffee className="w-6 h-6" />,
      content: "「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」這句話背後，是三十年的市場風雨。每天早上四點起床，準備茶包、裝箱、趕往屏東高雄各地的傳統市場。艷陽下揮汗如雨，只為了給客人一杯最純粹的草本茶。",
      image: "/images/stall-environment/IMG_20240315_103045.jpg",
      year: "1994-2024"
    },
    {
      title: "市場裡的溫暖記憶",
      icon: <Users className="w-6 h-6" />,
      content: "從小跟著媽媽跑市場，看著她與客人像朋友一樣聊天。不只是賣茶，更是分享健康知識、關心客人生活。許多客人一買就是二十年，從年輕喝到當爺爺奶奶。這種人與人之間的溫暖連結，是現代電商無法取代的。",
      image: "/images/interaction/customer_interaction_03.jpg",
      year: "三十年累積"
    },
    {
      title: "傳統智慧的現代轉型",
      icon: <Leaf className="w-6 h-6" />,
      content: "隨著傳統市場式微，我們思考如何讓劉媽媽的智慧繼續傳承。從單一決明子茶，發展出十款專業草本茶。每一款都是市場經驗的結晶，針對現代人的需求精心調配。",
      image: "/images/products/tea_packaging_05.jpg",
      year: "2023-2024"
    },
    {
      title: "兒子的感恩與回報",
      icon: <Heart className="w-6 h-6" />,
      content: "看著媽媽三十年如一日地辛苦，作為兒子想讓她少跑外面，專注分享製茶智慧。這個網站不只是賣茶，更是對媽媽養育之恩的回報，讓她的經驗和用心被更多人看見。",
      image: "/images/liu-mama/liu_mama_portrait_01.jpg",
      year: "感恩傳承"
    }
  ]

  const values = [
    {
      title: "真實",
      description: "每一包茶都來自真實的市場經驗，經過三十年驗證",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "用心",
      description: "手工挑選、精心調配，像為家人準備一樣用心",
      color: "bg-amber-100 text-amber-800"
    },
    {
      title: "傳承",
      description: "不只是賣茶，更是傳承台灣傳統市場的溫暖智慧",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "健康",
      description: "天然草本原料，無添加化學物質，喝得安心",
      color: "bg-emerald-100 text-emerald-800"
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-green-50 to-stone-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Leaf className="w-8 h-8 text-green-700" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            劉媽媽の草本茶
          </h1>
          <p className="text-2xl md:text-3xl font-light text-stone-600 mb-8">
            三十年市場經驗的溫暖傳承
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-stone-700 leading-relaxed">
              「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
              這句話背後，是三十年的市場風雨、無數客人的信任，
              以及一個兒子對媽媽最深的感恩。
            </p>
          </div>
        </div>
      </div>

      {/* Story Timeline */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">我們的故事</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            從傳統市場的一杯茶，到現代品牌的溫暖傳承
          </p>
        </div>

        <div className="space-y-16">
          {storySections.map((section, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-stone-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-white/80 rounded-full mb-4">
                        {section.icon}
                      </div>
                      <p className="text-sm text-stone-500">照片示意</p>
                      <p className="text-xs text-stone-400 mt-2">{section.year}</p>
                    </div>
                  </div>
                  {/* 實際照片會在部署後載入 */}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">{section.title}</h3>
                </div>
                <p className="text-stone-700 leading-relaxed">{section.content}</p>
                
                {index === 0 && (
                  <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
                    <p className="text-amber-800 text-sm">
                      🌱 這就是為什麼每一款茶都包含決明子——那是我們家的根，是媽媽養活我們的溫暖記憶。
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-b from-stone-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">我們的堅持</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              三十年不變的初心，體現在每一包茶裡
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold mb-4 ${value.color}`}>
                  {value.title}
                </div>
                <p className="text-stone-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Gallery Preview */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">市場記憶</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            真實的攤位、真實的互動、真實的情感
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { category: "攤位環境", count: "12張", color: "bg-green-100" },
            { category: "產品特寫", count: "8張", color: "bg-amber-100" },
            { category: "互動場景", count: "15張", color: "bg-blue-100" },
            { category: "製作過程", count: "10張", color: "bg-purple-100" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-stone-100">
              <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">{item.category}</h3>
              <p className="text-sm text-stone-500">{item.count}照片</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-stone-600 mb-6">
            這些照片不僅是素材，更是三十年市場生活的真實記錄。
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            探索我們的產品
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">
            喝一杯有故事的茶
          </h2>
          <p className="text-stone-700 text-lg mb-8 max-w-2xl mx-auto">
            每一包茶都承載著三十年的市場智慧、媽媽的用心，
            以及一個兒子對媽媽最深的感恩。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              立即選購
            </Link>
            <Link 
              href="/" 
              className="bg-white text-green-700 border border-green-200 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              返回首頁
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}