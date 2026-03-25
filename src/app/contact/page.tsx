'use client'

import React from 'react'
import { ShoppingBag, Truck, Store, QrCode, CreditCard, Package, Shield, Clock, Instagram } from 'lucide-react'
import Link from 'next/link'


export default function OrderPage() {
  const orderMethods = [
    {
      title: "LINE 官方帳號訂購",
      icon: <QrCode className="w-8 h-8" />,
      description: "掃描 QR Code 加入官方 LINE，一對一客服為您服務",
      steps: [
        "掃描下方 QR Code 加入好友",
        "傳送「我想訂購」訊息",
        "客服人員為您介紹產品",
        "選擇付款和取貨方式",
        "確認訂單後出貨"
      ],
      features: ["專人服務", "產品諮詢", "即時回覆", "訂單追蹤"],
      color: "bg-green-100 text-green-800",
      buttonText: "加入 LINE 訂購",
      buttonLink: "#line"
    },
    {
      title: "蝦皮賣場",
      icon: <ShoppingBag className="w-8 h-8" />,
      description: "在蝦皮平台直接下單，享有平台保障和優惠活動",
      steps: [
        "搜尋「劉媽媽の草本茶」賣場",
        "瀏覽商品並加入購物車",
        "選擇超商取貨或宅配",
        "使用蝦皮支付完成訂單",
        "賣家出貨後追蹤物流"
      ],
      features: ["平台保障", "超商取貨", "信用卡支付", "買家評價"],
      color: "bg-orange-100 text-orange-800",
      buttonText: "前往蝦皮賣場",
      buttonLink: "#shopee"
    },
    {
      title: "7-11 賣貨便",
      icon: <Store className="w-8 h-8" />,
      description: "透過 7-11 賣貨便下單，全台超商取貨最方便",
      steps: [
        "點選賣貨便商品連結",
        "選擇商品規格和數量",
        "填寫收件人資料",
        "選擇取貨門市",
        "完成付款後等待取貨"
      ],
      features: ["超商取貨", "貨到付款", "全台門市", "免運優惠"],
      color: "bg-red-100 text-red-800",
      buttonText: "使用賣貨便",
      buttonLink: "#seven"
    }
  ]

  const paymentMethods = [
    {
      name: "超商貨到付款",
      icon: <Truck className="w-6 h-6" />,
      description: "取貨時現場付款，最安心的付款方式",
      fee: "手續費 $60"
    },
    {
      name: "線上信用卡",
      icon: <CreditCard className="w-6 h-6" />,
      description: "VISA/MasterCard/JCB，安全快速",
      fee: "免手續費"
    },
    {
      name: "銀行轉帳",
      icon: <Package className="w-6 h-6" />,
      description: "ATM 或網路銀行轉帳",
      fee: "轉帳手續費依銀行規定"
    }
  ]

  const shippingOptions = [
    {
      name: "7-11 超商取貨",
      time: "2-3 個工作天",
      fee: "$60",
      icon: "🏪",
      description: "全台7-11門市取貨"
    },
    {
      name: "全家超商取貨",
      time: "2-3 個工作天",
      fee: "$60",
      icon: "🏪",
      description: "全台全家門市取貨"
    },
    {
      name: "大台北地區宅配",
      time: "1-2 個工作天",
      fee: "$80-120",
      icon: "🚚",
      description: "大台北地區專屬宅配服務"
    },
    {
      name: "全台宅配服務",
      time: "2-3 個工作天",
      fee: "$100-150",
      icon: "🚛",
      description: "全台灣宅配到府"
    },
    {
      name: "郵局包裹",
      time: "3-5 個工作天",
      fee: "$70-100",
      icon: "📮",
      description: "郵局i郵箱或宅配"
    }
  ]

  const guarantees = [
    {
      title: "品質保證",
      description: "所有草本原料皆經過嚴格挑選，無添加化學物質",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "新鮮保證",
      description: "接單後手工包裝，確保產品最新鮮狀態",
      icon: <Clock className="w-5 h-5" />
    },
    {
      title: "滿意保證",
      description: "收到商品如有問題，七日內可聯繫客服處理",
      icon: <ShoppingBag className="w-5 h-5" />
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-stone-50 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <ShoppingBag className="w-8 h-8 text-green-700" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            訂購方式
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            選擇最適合您的訂購方式，輕鬆享受劉媽媽三十年經驗的草本茶
          </p>
        </div>
      </div>

      {/* Order Methods */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">三種訂購方式</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            根據您的習慣選擇最方便的訂購管道
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {orderMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100">
              {/* Header */}
              <div className="p-6 border-b border-stone-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full ${method.color.split(' ')[0]}`}>
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">{method.title}</h3>
                    <p className="text-stone-600 text-sm mt-1">{method.description}</p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="p-6">
                <h4 className="font-semibold text-stone-900 mb-4">訂購步驟：</h4>
                <ol className="space-y-3">
                  {method.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">
                        {stepIndex + 1}
                      </span>
                      <span className="text-stone-700">{step}</span>
                    </li>
                  ))}
                </ol>

                {/* Features */}
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <div className="flex flex-wrap gap-2">
                    {method.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  {method.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QR Code Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-stone-900 mb-4">
                  掃碼加入 LINE 官方帳號
                </h2>
                <p className="text-stone-700 mb-6">
                  加入官方 LINE 享受專屬服務：<br/>
                  • 一對一產品諮詢<br/>
                  • 最新優惠資訊<br/>
                  • 訂單即時追蹤<br/>
                  • 健康茶飲建議
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-green-700">
                    <div className="bg-green-100 p-3 rounded-full">
                      <QrCode className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-semibold">LINE ID: @910jrwoy</span>
                      <p className="text-sm text-stone-500 mt-1">或搜尋「劉媽媽の草本茶」</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-green-700">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold">電話: 0956-111-636</span>
                      <p className="text-sm text-stone-500 mt-1">服務時間: 09:00-18:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-green-700">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold">郵箱: imori850711@gmail.com</span>
                      <p className="text-sm text-stone-500 mt-1">24小時內回覆</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-green-700">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-semibold">Instagram: @herbaltea_liu0711</span>
                      <p className="text-sm text-stone-500 mt-1">最新產品與生活分享</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-lime-400 rounded-2xl blur opacity-25"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-lg border border-stone-100">
                  <div className="qr-code-container">
                    {/* 實際 QR Code 照片 */}
                    {/* @ts-ignore */}
                    <img
                      src="/images/ＱＲcode.jpg"
                      alt="劉媽媽の草本茶 LINE 官方帳號 QR Code"
                      className="qr-code-image"
                    />
                  </div>
                  <p className="mt-3 text-xs font-bold text-green-700">官方 LINE 掃描區</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment & Shipping */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Payment Methods */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">付款方式</h2>
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-stone-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-stone-100 rounded-lg">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-900">{method.name}</h3>
                        <p className="text-sm text-stone-600">{method.description}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-stone-700">{method.fee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Options */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">運送方式</h2>
            <div className="space-y-4">
              {shippingOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-stone-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{option.icon}</span>
                      <div>
                        <h3 className="font-semibold text-stone-900">{option.name}</h3>
                        <p className="text-sm text-stone-600">約 {option.time} 送達</p>
                        {option.description && (
                          <p className="text-xs text-stone-500 mt-1">{option.description}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-lg font-bold text-green-700">{option.fee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Service Notice */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📍</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">大台北地區專屬服務</h3>
              <p className="text-blue-800 mb-3">
                我們提供大台北地區專屬的宅配服務，讓您享受更快速的送貨體驗。
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• <span className="font-semibold">快速配送</span>：1-2個工作天送達</li>
                <li>• <span className="font-semibold">專人服務</span>：大台北地區專屬配送團隊</li>
                <li>• <span className="font-semibold">彈性時間</span>：可安排特定時段配送</li>
                <li>• <span className="font-semibold">即時追蹤</span>：配送進度即時通知</li>
              </ul>
              <p className="text-blue-600 text-sm mt-4">
                💡 <span className="font-semibold">提示</span>：詳細服務範圍和配送時間，請洽官方LINE @910jrwoy 諮詢。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantees */}
      <div className="bg-stone-50 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">我們的保證</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              劉媽媽三十年市場經驗的堅持，體現在每一個細節
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-stone-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  {guarantee.icon}
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{guarantee.title}</h3>
                <p className="text-stone-600 text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact & Support */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">需要協助嗎？</h2>
          <p className="text-stone-700 mb-8 max-w-2xl mx-auto">
            有任何訂購問題或產品諮詢，歡迎隨時聯繫我們。
            劉媽媽三十年市場經驗，為您提供最專業的建議。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              瀏覽產品
            </Link>
            <Link 
              href="/story" 
              className="bg-white text-green-700 border border-green-200 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              了解品牌故事
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .qr-code-container {
          width: 12rem;
          height: 12rem;
          border-radius: 0.5rem;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          position: relative;
          background: white;
        }
        
        .qr-code-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 1rem;
        }
        
        @media (max-width: 768px) {
          .qr-code-container {
            width: 10rem;
            height: 10rem;
          }
        }
      `}</style>
    </div>
  )
}