'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Star } from 'lucide-react'
import QRCodesection from './QRCodesection'

const HeroSection = () => {
  return (
    <section className="gradient-bg overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">三十年市場經驗 • 天然草本原料</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              記憶中的市場溫度，
              <span className="text-gradient block mt-2">一杯茶的溫暖傳承</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-neutral-600 leading-relaxed">
              從傳統市場攤位到您的茶杯，劉媽媽將三十年的市場經驗和用心，
              融入每一包草本茶中。這不只是茶，這是記憶的延續，溫暖的傳遞。
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '🌿', text: '天然草本原料' },
                { icon: '❤️', text: '媽媽的用心' },
                { icon: '⏳', text: '三十年經驗' },
                { icon: '🏆', text: '品質保證' },
                { icon: '🚚', text: '快速配送' },
                { icon: '💬', text: '專屬客服' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm p-3 rounded-xl"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>立即選購</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary">
                了解更多
              </button>
            </div>

            {/* Reviews */}
            <div className="pt-8 border-t border-neutral-200">
              <div className="flex items-center space-x-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">超過 500+ 位顧客好評</p>
                  <p className="text-sm text-neutral-500">「喝得到市場的溫度和媽媽的用心」</p>
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
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-1000" />
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-white"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-white"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-white"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
