'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Star, Camera } from 'lucide-react'
import QRCodesection from './QRCodesection'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* 攤位背景圖片 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-primary-800/10 to-white" />
        {/* 攤位照片背景 - 使用模糊效果 */}
        <div className="absolute inset-0 bg-[url('/images/stall-background.jpg')] bg-cover bg-center opacity-10 blur-sm" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge with Camera Icon */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-primary-700 px-4 py-2 rounded-full border border-primary-100">
              <Camera className="w-4 h-4" />
              <span className="text-sm font-medium">真實攤位照片 • 三十年市場經驗</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              從一杯決明子茶開始，
              <span className="text-gradient block mt-2">養活一家人的溫暖記憶</span>
            </h1>

            {/* Description with Photo Reference */}
            <div className="space-y-4">
              <p className="text-xl text-neutral-700 leading-relaxed">
                「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
                三十年來，市場裡的人們都叫她「決明子」，
                這個名字，承載了一家人的成長，也見證了無數溫暖的相遇。
              </p>
              
              {/* Photo Highlights */}
              <div className="flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">真實攤位記錄</p>
                  <p className="text-sm text-neutral-600">超過 50+ 張市場照片，完整呈現劉媽媽的工作日常</p>
                </div>
              </div>
            </div>

            {/* Features with Photo Integration */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '🌱', text: '最初的決明子茶' },
                { icon: '👵', text: '「決明子」媽媽' },
                { icon: '❤️', text: '養活一家人的愛' },
                { icon: '⏳', text: '三十年市場記憶' },
                { icon: '🏪', text: '傳統市場攤位' },
                { icon: '💬', text: '顧客溫暖見證' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-neutral-100"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>瀏覽攤位照片</span>
                <Camera className="w-4 h-4" />
              </button>
              <button className="btn-secondary">
                了解更多故事
              </button>
            </div>

            {/* Reviews with Photo Testimonials */}
            <div className="pt-8 border-t border-neutral-200/50">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  {/* Customer Photo Placeholder */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-bold">顧</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-semibold">「從決明子茶喝到現在，就像家人一樣」</p>
                  <p className="text-sm text-neutral-500">三十年來，市場裡的老朋友們</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - QR Code Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <QRCodesection />
            
            {/* Market Stall Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow delay-1000" />
            
            {/* Small Photo Preview */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                <Camera className="w-8 h-8 text-primary-600" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Photo Gallery Preview */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
        <div className="flex space-x-4 animate-scroll-slow">
          {/* Photo Placeholders */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <div className={`w-full h-full ${i % 2 === 0 ? 'bg-primary-200' : 'bg-secondary-200'} flex items-center justify-center`}>
                <div className="text-center">
                  <Camera className="w-8 h-8 text-white mx-auto mb-2" />
                  <span className="text-white text-sm font-medium">
                    {i === 1 ? '決明子茶' : i === 2 ? '市場攤位' : i === 3 ? '媽媽的用心' : `溫暖記憶 ${i}`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
