'use client'

import { motion } from 'framer-motion'
import { Camera, ChevronLeft, ChevronRight, Maximize2, Heart, Share2 } from 'lucide-react'
import { useState } from 'react'

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const photoCategories = [
    {
      title: '攤位環境',
      description: '傳統市場的溫暖場景',
      count: 12,
      color: 'from-primary-100 to-primary-50'
    },
    {
      title: '產品特寫',
      description: '草本原料的品質展示',
      count: 8,
      color: 'from-secondary-100 to-secondary-50'
    },
    {
      title: '互動場景',
      description: '與顧客的真實互動',
      count: 15,
      color: 'from-amber-100 to-amber-50'
    },
    {
      title: '製作過程',
      description: '手工包裝的用心細節',
      count: 10,
      color: 'from-emerald-100 to-emerald-50'
    }
  ]

  const samplePhotos = [
    { id: 1, category: '攤位環境', title: '早晨的市場攤位', description: '劉媽媽正在準備一天的開始' },
    { id: 2, category: '產品特寫', title: '精選草本原料', description: '嚴選的天然草本材料' },
    { id: 3, category: '互動場景', title: '老顧客的回訪', description: '三十年不變的親切招呼' },
    { id: 4, category: '製作過程', title: '手工包裝過程', description: '每一包茶都用心包裝' },
    { id: 5, category: '攤位環境', title: '市場的日常', description: '充滿人情味的市場氛圍' },
    { id: 6, category: '產品特寫', title: '茶湯的色澤', description: '天然草本的美麗顏色' },
  ]

  const handlePhotoClick = (index: number) => {
    setSelectedPhoto(index)
    setCurrentIndex(index)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % samplePhotos.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + samplePhotos.length) % samplePhotos.length)
  }

  return (
    <section className="bg-gradient-to-b from-white to-neutral-50 py-16">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
            <Camera className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            劉媽媽的市場記憶
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            這些照片記錄了劉媽媽在傳統市場三十年的點點滴滴，
            從攤位前的親切招呼到每一包茶的用心包裝。
          </p>
        </div>

        {/* Photo Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {photoCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-neutral-900">{category.title}</h3>
                <span className="bg-white/80 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {category.count}張
                </span>
              </div>
              <p className="text-neutral-600 mb-4">{category.description}</p>
              <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                瀏覽照片 →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {samplePhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handlePhotoClick(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                {/* Photo Placeholder */}
                <div className={`aspect-square ${index % 2 === 0 ? 'bg-primary-200' : 'bg-secondary-200'} flex items-center justify-center`}>
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-white mx-auto mb-3" />
                    <div className="space-y-1">
                      <p className="text-white font-bold">{photo.title}</p>
                      <p className="text-white/80 text-sm">{photo.category}</p>
                    </div>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{photo.title}</h4>
                    <p className="text-white/90">{photo.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-neutral-900">{photo.category}</span>
                </div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-6 py-3 rounded-full mb-6">
            <Camera className="w-5 h-5" />
            <span className="font-semibold">超過 50+ 張真實市場照片</span>
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            想看到更多劉媽媽的市場故事嗎？
          </h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            加入我們的 Line 官方帳號，我們會定期分享市場的日常、
            新產品的幕後故事，以及老顧客的溫暖見證。
          </p>
          <button className="btn-primary">
            瀏覽完整照片集
          </button>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
              onClick={() => setSelectedPhoto(null)}
            >
              <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                <span className="text-2xl">×</span>
              </div>
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300"
              onClick={handlePrev}
            >
              <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                <ChevronLeft className="w-6 h-6" />
              </div>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2              z-10 text-white hover:text-gray-300"
              onClick={handleNext}
            >
              <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                <ChevronRight className="w-6 h-6" />
              </div>
            </button>

            {/* Photo Display */}
            <div className="bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <Camera className="w-20 h-20 mx-auto mb-6" />
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">{samplePhotos[currentIndex].title}</h3>
                  <p className="text-xl">{samplePhotos[currentIndex].description}</p>
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mt-4">
                    <span>{samplePhotos[currentIndex].category}</span>
                    <span>•</span>
                    <span>照片 {currentIndex + 1} / {samplePhotos.length}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Info */}
            <div className="mt-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold">{samplePhotos[currentIndex].title}</h4>
                  <p className="text-white/80">{samplePhotos[currentIndex].description}</p>
                </div>
                <div className="flex space-x-3">
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30">
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Photo Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-sm text-white/60">拍攝時間</p>
                  <p className="font-semibold">2026年3月</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-sm text-white/60">拍攝地點</p>
                  <p className="font-semibold">傳統市場攤位</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-sm text-white/60">相機型號</p>
                  <p className="font-semibold">iPhone 15 Pro</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-sm text-white/60">分享次數</p>
                  <p className="font-semibold">128次</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PhotoGallery
