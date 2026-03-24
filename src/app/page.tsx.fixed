'use client'

import React from 'react';
import { Leaf, Info, ExternalLink, QrCode } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  // 產品圖片映射 - 根據 product-closeup 目錄檔案
  const productImages = {
    "一條根茶": "/images/product-closeup/product-closeup-20260323_234211-000.png", // 000
    "七葉膽茶": "/images/product-closeup/product-closeup-20260323_234211-001.png", // 001
    "桑葉苦瓜茶": "/images/product-closeup/product-closeup-20260323_234211-002.png", // 002 (商業苦瓜茶)
    "枸杞菊花茶": "/images/product-closeup/product-closeup-20260323_234211-003.png", // 003
    "桑葉茶": "/images/product-closeup/product-closeup-20260323_234211-004.png", // 004 (商業茶)
    "洛神花茶": "/images/product-closeup/product-closeup-20260323_234211-005.png", // 005
    "辣木茶": "/images/product-closeup/product-closeup-20260323_234211-006.png", // 006
    "金線蓮茶": "/images/product-closeup/product-closeup-20260323_234211-007.png", // 007
    "魚腥草茶": "/images/product-closeup/product-closeup-20260323_234211-008.png", // 008
    "雞角刺茶": "/images/product-closeup/product-closeup-20260323_234211-009.png"  // 009 (雞腳刺茶)
  };

  // 產品成分展示圖片映射 - 你可以根據編號替換這些圖片
  const ingredientImages = {
    "一條根茶": "/images/product-closeup/product-closeup-20260323_234211-000.png", // 000 - 成分展示圖
    "七葉膽茶": "/images/product-closeup/product-closeup-20260323_234211-001.png", // 001 - 成分展示圖
    "桑葉苦瓜茶": "/images/product-closeup/product-closeup-20260323_234211-002.png", // 002 - 成分展示圖
    "枸杞菊花茶": "/images/product-closeup/product-closeup-20260323_234211-003.png", // 003 - 成分展示圖
    "桑葉茶": "/images/product-closeup/product-closeup-20260323_234211-004.png", // 004 - 成分展示圖
    "洛神花茶": "/images/product-closeup/product-closeup-20260323_234211-005.png", // 005 - 成分展示圖
    "辣木茶": "/images/product-closeup/product-closeup-20260323_234211-006.png", // 006 - 成分展示圖
    "金線蓮茶": "/images/product-closeup/product-closeup-20260323_234211-007.png", // 007 - 成分展示圖
    "魚腥草茶": "/images/product-closeup/product-closeup-20260323_234211-008.png", // 008 - 成分展示圖
    "雞角刺茶": "/images/product-closeup/product-closeup-20260323_234211-009.png"  // 009 - 成分展示圖
  };

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
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white text-stone-800 font-sans">
      {/* Hero Banner with Background Pattern */}
      <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-stone-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-40 right-10 w-48 h-48 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
          {/* Brand Logo and Name */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg mb-6">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-green-900 mb-4">
            劉媽媽の草本茶
          </h1>
          
          <div className="h-2 w-48 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-2xl md:text-3xl font-light text-stone-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      
      <div className="px-4 md:px-8 py-8">
        {/* Slogan Section */}
        <div className="max-w-5xl mx-auto mb-16 text-center relative">
          {/* Background Decoration */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full opacity-30 blur-xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full opacity-30 blur-xl"></div>
          
          <div className="relative bg-gradient-to-br from-white to-stone-50 rounded-3xl p-10 md:p-12 border border-stone-200 shadow-xl overflow-hidden">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-green-400 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-emerald-400 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-400 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-teal-400 rounded-br-3xl"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-sm font-semibold text-stone-500">品牌故事</span>
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
                從決明子到草本茶，
                <span className="block text-emerald-700 mt-2">用茶養大兩個小孩的媽媽</span>
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-stone-700 leading-relaxed mb-8">
                  三十年市場經驗的溫暖傳承，每一杯茶都蘊含著劉媽媽對家人的愛與堅持
                </p>
                
                {/* Decorative Quote */}
                <div className="inline-block relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-200 to-emerald-200 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-stone-200">
                    <p className="text-lg font-medium text-stone-600 italic">
                      「不只是賣茶，更是傳承一份溫暖的記憶」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid with Enhanced Design */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              精選十款草本茶
            </h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              三十年市場經驗的智慧結晶，每款茶都針對現代人的需求精心調配
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br from-white to-stone-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border ${product.color.replace('border-', 'border-')}/20 flex flex-col sm:flex-row hover:-translate-y-2`}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${product.color.replace('border-', 'from-')} ${product.color.replace('border-', 'to-').replace('600', '400')} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                
                {/* Product Image Container */}
                <div className="relative w-full sm:w-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent z-10"></div>
                  <div className="w-full h-48 sm:h-full relative">
                    <Image
                      src={productImages[product.name as keyof typeof productImages] || "/images/product-closeup/product-closeup-20260323_234211-000.png"}
                      alt={`${product.name} - ${product.subtitle}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(