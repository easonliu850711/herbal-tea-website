'use client'

import React from 'react'
import { Leaf, Heart, Clock, Users, Award, Coffee, Instagram } from 'lucide-react'
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
      title: "每一杯茶都是感恩",
      icon: <Heart className="w-6 h-6" />,
      content: "這不只是生意，這是對媽媽養育之恩的回報。每一包茶都承載著感恩的心，希望將這份溫暖傳遞給更多人。從傳統市場到線上平台，不變的是對品質的堅持與對客人的用心。",
      image: "/images/branding/橫式名片照.jpg",
      year: "永續傳承"
    }
  ]

  const values = [
    {
      title: "真實",
      description: "不添加人工香料，每一口都是自然的味道",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      title: "溫暖",
      description: "不只是賣茶，更是分享健康與關懷",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "堅持",
      description: "三十年如一日，對品質的堅持從未改變",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "傳承",
      description: "將媽媽的智慧與溫暖傳遞給下一代",
      icon: <Users className="w-8 h-8" />
    }
  ]

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
            劉媽媽の草本茶故事
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            三十年傳統市場經驗的溫暖傳承
          </p>
        </div>
      </div>

      {/* Story Timeline */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            我們的旅程
          </h2>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto">
            從一杯決明子茶開始，到十款專業草本茶，這是三十年市場經驗的故事
          </p>
        </div>

        <div className="space-y-16">
          {storySections.map((section, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="bg-gradient-to-br from-white to-stone-50 rounded-xl p-8 border border-stone-200 shadow-inner">
                  {/* 圖片展示 */}
                  <div className="aspect-video rounded-lg overflow-hidden border-2 border-stone-300 mb-6">
                    <div className="w-full h-full relative">
                      {/* @ts-ignore */}
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      {section.icon}
                    </div>
                    <span className="text-green-600 font-semibold">{section.year}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl mb-6">
                    {React.cloneElement(section.icon, { className: "w-12 h-12 text-white" })}
                  </div>
                  <h4 className="text-3xl font-bold text-stone-900 mb-3">
                    {section.title}
                  </h4>
                  <p className="text-stone-600 text-lg">
                    {section.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              我們的價值觀
            </h2>
            <p className="text-stone-600 text-lg max-w-3xl mx-auto">
              三十年不變的堅持，成就每一杯溫暖的草本茶
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6">
                  {React.cloneElement(value.icon, { className: "w-8 h-8 text-green-600" })}
                </div>
                
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
          開始您的草本之旅
        </h2>
        <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
          加入 LINE 官方帳號，獲取三十年市場經驗的健康建議與專屬優惠
        </p>
        
        <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg">
          <div className="w-48 h-48 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-2">📱</div>
              <div className="text-green-600 font-bold">掃描加入</div>
            </div>
          </div>
          
          <div className="text-left">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">LINE 官方帳號</h3>
            <p className="text-3xl font-bold text-green-700 mb-2">@910jrwoy</p>
            <p className="text-stone-600 mb-6">獲取專屬優惠與養生知識</p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Instagram className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-stone-700">Instagram: @liumama_herbal_tea</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <p className="text-stone-300 text-lg">
            © 2026 劉媽媽の草本茶 · 從決明子到草本茶，用茶養大兩個小孩的媽媽
          </p>
          <p className="text-stone-400 mt-2">
            三十年市場經驗的溫暖傳承 · 每一杯茶都是對媽媽養育之恩的回報
          </p>
        </div>
      </footer>

      <style jsx>{`
        /* 修復圖片顯示 */
        .story-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.5rem;
        }
        
        /* 響應式設計 */
        @media (max-width: 768px) {
          .min-h-screen {
            padding-top: 4rem;
          }
        }
      `}</style>
    </div>
  )
}