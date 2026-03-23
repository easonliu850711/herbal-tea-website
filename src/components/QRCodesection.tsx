'use client'

import { motion } from 'framer-motion'
import { QrCode, MessageCircle, Gift, BookOpen, Headphones, Users } from 'lucide-react'
import { useState } from 'react'

const QRCodesection = () => {
  const [isScanning, setIsScanning] = useState(false)

  const benefits = [
    {
      icon: <Gift className="w-5 h-5" />,
      title: '即時優惠通知',
      description: '新品上市第一時間知道，限時折扣優惠碼'
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: '養生知識分享',
      description: '草本茶飲用建議，季節養生小貼士'
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: '一對一客服',
      description: '產品使用問題解答，客製化配方建議'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: '社群互動',
      description: '分享使用心得，參與抽獎活動'
    }
  ]

  const handleScanClick = () => {
    setIsScanning(true)
    // 模擬掃碼過程
    setTimeout(() => {
      setIsScanning(false)
      // 實際應導向 Line 或顯示成功訊息
      alert('已成功加入劉媽媽的 Line 官方帳號！')
    }, 1500)
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-50 rounded-full translate-y-24 -translate-x-24" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
            <MessageCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            掃碼加入劉媽媽的 Line 官方帳號
          </h2>
          <p className="text-neutral-600">
            與我們保持聯繫，獲取最新優惠和養生知識
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - QR Code Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg border border-primary-100 w-full max-w-xs">
              {/* QR Code Display */}
              <div className="bg-white p-6 rounded-xl shadow-inner mb-6">
                <div className="relative">
                  {/* QR Code Placeholder */}
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <QrCode className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                      <div className="grid grid-cols-3 gap-1 w-32 mx-auto">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i} className={`h-4 rounded ${i % 2 === 0 ? 'bg-primary-600' : 'bg-neutral-300'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Scan Animation */}
                  {isScanning && (
                    <motion.div
                      initial={{ y: -20 }}
                      animate={{ y: 180 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute left-0 right-0 h-1 bg-primary-500 rounded-full"
                    />
                  )}
                </div>
              </div>

              {/* QR Code Info */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full">
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-semibold">Line 官方帳號</span>
                </div>
                <p className="text-2xl font-bold text-neutral-900">@liu_mama_tea</p>
                <p className="text-sm text-neutral-500 flex items-center justify-center space-x-1">
                  <span>使用手機相機掃描</span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleScanClick}
              disabled={isScanning}
              className="mt-6 btn-primary w-full max-w-xs flex items-center justify-center space-x-2"
            >
              {isScanning ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>掃碼中...</span>
                </>
              ) : (
                <>
                  <QrCode className="w-5 h-5" />
                  <span>立即掃碼加入官方帳號</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Right Column - Benefits */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-neutral-900 flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <Gift className="w-4 h-4 text-primary-600" />
              </div>
              <span>加入官方帳號的好處</span>
            </h3>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-neutral-50 rounded-xl hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <div className="text-primary-600">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{benefit.title}</h4>
                    <p className="text-sm text-neutral-600 mt-1">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Alternative Options */}
            <div className="pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-600 mb-3">其他加入方式：</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-6 h-6 bg-neutral-100 rounded flex items-center justify-center">
                    <span className="text-neutral-600">1</span>
                  </div>
                  <span>搜尋 Line ID：<strong>@liu_mama_tea</strong></span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-6 h-6 bg-neutral-100 rounded flex items-center justify-center">
                    <span className="text-neutral-600">2</span>
                  </div>
                  <span>點擊連結：<strong>line.me/ti/p/~@liu_mama_tea</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-neutral-200 text-center">
          <p className="text-sm text-neutral-500">
            劉媽媽邀請您加入 Line 官方帳號！
            <span className="block mt-1">
              就像在市場攤位前聊天一樣，我們可以在線上繼續這份溫暖的互動。
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default QRCodesection
