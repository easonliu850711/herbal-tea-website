'use client'

import React from 'react';
import { Leaf, BookOpen, Package, Lightbulb, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: "產品故事",
      description: "三十年傳統市場經驗，從一杯決明子茶開始的溫暖傳承",
      icon: <BookOpen className="w-12 h-12" />,
      link: "/story",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "主要產品",
      description: "十款精選草本茶，每款都是市場經驗的智慧結晶",
      icon: <Package className="w-12 h-12" />,
      link: "/products",
      color: "from-orange-500 to-amber-600"
    },
    {
      title: "草本小撇步",
      description: "養生知識、茶飲搭配、季節養生提醒",
      icon: <Lightbulb className="w-12 h-12" />,
      link: "/tips",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "聯絡我們",
      description: "LINE官方帳號、服務專線、實體攤位資訊",
      icon: <Phone className="w-12 h-12" />,
      link: "/contact",
      color: "from-purple-500 to-pink-600"
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
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl shadow-2xl mb-8">
            <Leaf className="w-14 h-14 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            劉媽媽の草本茶
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 max-w-3xl mx-auto mb-10">
            「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
          </p>
          <p className="text-xl opacity-80">
            三十年傳統市場經驗 · 溫暖傳承
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            探索劉媽媽的草本世界
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            從產品故事到養生知識，完整了解三十年市場經驗的智慧結晶
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link 
              key={index}
              href={feature.link}
              className="group block"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                <div className={`h-3 bg-gradient-to-r ${feature.color}`}></div>
                
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-green-600 font-medium">
                    <span>探索更多</span>
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Contact */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            立即開始您的草本之旅
          </h2>
          <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
            掃描 QR Code 加入官方 LINE，獲取三十年市場經驗的健康建議與專屬優惠
          </p>
          
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl shadow-lg">
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
                  <Phone className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-stone-700">服務專線：0956-111-636</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <p className="text-stone-300 text-lg">
              © 2026 劉媽媽の草本茶 · 從決明子到草本茶，用茶養大兩個小孩的媽媽
            </p>
            <p className="text-stone-400 mt-2">
              三十年市場經驗的溫暖傳承 · 每一杯茶都是對媽媽養育之恩的回報
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}