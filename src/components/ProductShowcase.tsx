'use client'

import React, { useState } from 'react';
import { Leaf, Info, ExternalLink, QrCode, Instagram } from 'lucide-react';
import Image from 'next/image';

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
            {/* 產品圖片 - 使用實際照片 */}
            <div className="w-full sm:w-48 bg-stone-100 relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={productImages[product.name as keyof typeof productImages] || "/images/products/product_photos_original.jpg"}
                  alt={`${product.name} - ${product.subtitle}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <div className="text-center">
                  <p className="text-xs font-bold text-white">{product.name}</p>
                  <div className="mt-1 text-[10px] bg-green-600/80 text-white px-2 py-0.5 rounded-full inline-block">
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
                <div className="flex items-center gap-3 text-stone-600 mb-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-stone-200">
                    <Image
                      src={ingredientImages[product.name as keyof typeof ingredientImages] || "/images/product-closeup/product-closeup-20260323_234211-000.png"}
                      alt={`${product.name} 成分展示`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold">嚴選成分</span>
                    <p className="text-[10px] text-stone-500 mt-0.5">編號 {product.name === "一條根茶" ? "000" : 
                      product.name === "七葉膽茶" ? "001" :
                      product.name === "桑葉苦瓜茶" ? "002" :
                      product.name === "枸杞菊花茶" ? "003" :
                      product.name === "桑葉茶" ? "004" :
                      product.name === "洛神花茶" ? "005" :
                      product.name === "辣木茶" ? "006" :
                      product.name === "金線蓮茶" ? "007" :
                      product.name === "魚腥草茶" ? "008" : "009"}</p>
                  </div>
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
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-green-700">
                <div className="bg-green-100 p-2 rounded-full">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <span className="font-semibold">LINE: @910jrwoy</span>
              </div>
              <div className="flex items-center gap-4 text-green-700">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="font-semibold">電話: 0956-111-636</span>
              </div>
              <div className="flex items-center gap-4 text-green-700">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="font-semibold">郵箱: imori850711@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-green-700">
                <div className="bg-green-100 p-2 rounded-full">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="font-semibold">Instagram: @herbaltea_liu0711</span>
              </div>
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
          © 2024 劉媽媽の草本茶 | 從決明子到草本茶，用茶養大兩個小孩的媽媽
        </p>
      </footer>
    </div>
  );
};

export default ProductShowcase;