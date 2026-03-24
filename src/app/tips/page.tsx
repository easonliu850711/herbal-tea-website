'use client'

import React from 'react';
import { Leaf, Info, Thermometer, Droplets, Heart, Brain, Shield, Moon, Sun, Zap } from 'lucide-react';

export default function TipsPage() {
  const tips = [
    {
      title: "七葉膽",
      subtitle: "滋補強身",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      description: "傳統滋補草本，有助於增強體力、恢復精神。",
      benefits: ["增強體力", "恢復精神", "滋補強身"],
      usage: "適合工作疲勞、體力消耗大時飲用",
      bestTime: "下午或傍晚"
    },
    {
      title: "一條根",
      subtitle: "舒緩放鬆",
      icon: <Thermometer className="w-6 h-6" />,
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      description: "舒緩肌肉緊繃，幫助身體放鬆。",
      benefits: ["舒緩肌肉", "放鬆身心", "緩解緊繃"],
      usage: "運動後或長時間工作後飲用",
      bestTime: "運動後或睡前"
    },
    {
      title: "洛神花",
      subtitle: "養顏美容",
      icon: <Droplets className="w-6 h-6" />,
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-600",
      description: "富含花青素，幫助維持肌膚健康。",
      benefits: ["養顏美容", "維持肌膚", "抗氧化"],
      usage: "日常保養、追求美麗時飲用",
      bestTime: "早晨或下午"
    },
    {
      title: "雞角刺",
      subtitle: "安定助眠",
      icon: <Moon className="w-6 h-6" />,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      description: "幫助安定心神，促進良好睡眠。",
      benefits: ["安定心神", "促進睡眠", "放鬆神經"],
      usage: "睡前飲用幫助放鬆",
      bestTime: "睡前1小時"
    },
    {
      title: "魚腥草",
      subtitle: "健康防護",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-600",
      description: "傳統保健草本，幫助維持身體防護力。",
      benefits: ["健康防護", "維持防護", "保健草本"],
      usage: "季節轉換或需要增強防護時",
      bestTime: "早晨或需要時"
    },
    {
      title: "金線蓮",
      subtitle: "煥發神采",
      icon: <Sun className="w-6 h-6" />,
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600",
      description: "幫助提神醒腦，恢復精神活力。",
      benefits: ["提神醒腦", "恢復活力", "煥發神采"],
      usage: "需要集中注意力時飲用",
      bestTime: "早晨或工作時"
    },
    {
      title: "辣木",
      subtitle: "元氣補給",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      description: "營養豐富，提供身體所需能量。",
      benefits: ["元氣補給", "提供能量", "營養豐富"],
      usage: "體力消耗大或需要補充能量時",
      bestTime: "早晨或運動前"
    },
    {
      title: "枸杞菊花",
      subtitle: "晶亮舒適",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-cyan-50 border-cyan-200",
      iconColor: "text-cyan-600",
      description: "幫助眼睛舒適，維持晶亮感受。",
      benefits: ["眼睛舒適", "維持晶亮", "清熱明目"],
      usage: "長時間用眼後飲用",
      bestTime: "下午或傍晚"
    },
    {
      title: "桑葉苦瓜",
      subtitle: "代謝穩定",
      icon: <Thermometer className="w-6 h-6" />,
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-600",
      description: "幫助維持正常代謝機能。",
      benefits: ["代謝穩定", "維持機能", "平衡調理"],
      usage: "日常保健、維持平衡時飲用",
      bestTime: "餐後"
    },
    {
      title: "桑葉",
      subtitle: "餐後解膩",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-lime-50 border-lime-200",
      iconColor: "text-lime-600",
      description: "幫助消化，餐後飲用感受清爽。",
      benefits: ["幫助消化", "餐後解膩", "感受清爽"],
      usage: "餐後飲用幫助消化",
      bestTime: "餐後30分鐘"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white text-stone-800 font-sans p-4 md:p-8 pt-24">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-block p-4 mb-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-sm border border-green-100">
          <Leaf className="w-12 h-12 text-green-700 mx-auto mb-3" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-green-900 mb-3">
            草本小撇步
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        <p className="text-stone-600 max-w-2xl mx-auto mt-6 text-lg md:text-xl leading-relaxed">
          了解每種草本原料的特性，選擇最適合自己的茶飲。
          劉媽媽三十年市場經驗，為您精選最適合的搭配。
        </p>
      </header>

      {/* Tips Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div 
            key={index}
            className={`group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${tip.color} flex flex-col`}
          >
            {/* Tip Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-full ${tip.color.replace('bg-', 'bg-').replace(' border', '')}`}>
                    <div className={tip.iconColor}>
                      {tip.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900">{tip.title}</h3>
                    <div className="text-sm font-medium text-stone-500 mt-1">{tip.subtitle}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-600 mb-4 leading-relaxed">
                {tip.description}
              </p>

              {/* Benefits */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-stone-500 mb-2">
                  <Info className="w-4 h-4" />
                  <span className="text-sm font-semibold">主要益處</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tip.benefits.map((benefit, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-white/80 text-stone-600 px-3 py-1.5 rounded-full border border-stone-200"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Usage Tips */}
              <div className="space-y-3">
                <div className="bg-white/50 rounded-lg p-3 border border-stone-100">
                  <div className="text-xs font-semibold text-stone-500 mb-1">建議使用時機</div>
                  <div className="text-sm text-stone-700">{tip.usage}</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3 border border-stone-100">
                  <div className="text-xs font-semibold text-stone-500 mb-1">最佳飲用時間</div>
                  <div className="text-sm text-stone-700">{tip.bestTime}</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto p-4 bg-white/50 border-t border-stone-100">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-green-700 text-sm font-medium">
                  <Leaf className="w-4 h-4" />
                  <span>劉媽媽精選配方</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="max-w-4xl mx-auto mt-20 mb-10 text-center border-t border-stone-200 pt-12">
        <div className="mb-8">
          <h4 className="text-xl font-bold text-stone-800 mb-4">草本飲用小提醒</h4>
          <div className="max-w-2xl mx-auto text-stone-600 text-sm space-y-2">
            <p>• 每種草本都有其特性，請根據自身狀況選擇適合的茶飲</p>
            <p>• 建議初次飲用從少量開始，觀察身體反應</p>
            <p>• 如有特殊健康狀況，請諮詢專業醫師建議</p>
            <p>• 劉媽媽三十年市場經驗，為您把關每一種原料品質</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-left">
            <h4 className="text-lg font-bold text-stone-800 mb-3">需要更多建議？</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-green-700">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="font-medium">電話: 0956-111-636</span>
              </div>
              <div className="flex items-center gap-3 text-green-700">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="font-medium">郵箱: imori850711@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-lime-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-4 rounded-xl shadow-lg border border-stone-100">
              <div className="text-center">
                <div className="text-2xl mb-2">📱</div>
                <p className="text-sm font-bold text-green-700">LINE官方帳號</p>
                <p className="text-xs text-stone-600 mt-1">@910jrwoy</p>
                <p className="text-[10px] text-stone-400 mt-2">掃描加入獲取專屬建議</p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-stone-400 text-[10px] mt-16 tracking-widest uppercase">
          © 2024 劉媽媽の草本茶 | 從決明子到草本茶，用茶養大兩個小孩的媽媽
        </p>
      </footer>
    </div>
  );
}