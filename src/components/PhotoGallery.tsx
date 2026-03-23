'use client'

import { motion } from 'framer-motion'
import { Camera, ChevronLeft, ChevronRight, Maximize2, Heart, Share2 } from 'lucide-react'
import { useState } from 'react'
import { allPhotos, photoCategories, PhotoItem } from '@/data/photos'

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePhotoClick = (index: number) => {
    setSelectedPhoto(index)
    setCurrentIndex(index)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allPhotos.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length)
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 標題 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-full mb-4">
            <Camera className="w-8 h-8 text-rose-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            劉媽媽的溫暖記憶
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            透過真實照片，感受三十年市場經驗的溫度與情感
          </p>
        </div>

        {/* 類別導航 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {photoCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 border border-white/50 backdrop-blur-sm ${
                category.special ? 'ring-2 ring-rose-200' : ''
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-3">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  {category.count} 張照片
                </span>
                {category.special && (
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 text-sm font-medium rounded-full">
                    珍貴回憶
                  </span>
                )}
              </div>
              {category.quote && (
                <div className="mt-4 pt-4 border-t border-white/30">
                  <p className="text-sm italic text-gray-700">{category.quote}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 照片網格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => handlePhotoClick(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                {/* 圖片容器 */}
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={photo.imagePath}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                {/* 照片資訊 */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {photo.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {photo.description}
                      </p>
                    </div>
                    {photo.featured && (
                      <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded">
                        特色
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      {photo.year && (
                        <span className="text-xs text-gray-500">
                          📅 {photo.year}
                        </span>
                      )}
                      {photo.emotion && (
                        <span className="text-xs text-gray-500">
                          ❤️ {photo.emotion}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {photo.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 照片總計 */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <Camera className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">
              共 <span className="font-bold text-gray-900">{allPhotos.length}</span> 張真實照片
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">
              {photoCategories.length} 個主題分類
            </span>
          </div>
        </div>
      </div>

      {/* 照片詳情彈出層 */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* 關閉按鈕 */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              ✕ 關閉
            </button>
            
            {/* 照片顯示 */}
            <div className="relative rounded-2xl overflow-hidden bg-white">
              <img
                src={allPhotos[currentIndex].imagePath}
                alt={allPhotos[currentIndex].title}
                className="w-full max-h-[70vh] object-contain"
              />
              
              {/* 照片資訊 */}
              <div className="p-6 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {allPhotos[currentIndex].title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {allPhotos[currentIndex].description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6">
                    {allPhotos[currentIndex].year && (
                      <div>
                        <div className="text-sm text-gray-500">年份</div>
                        <div className="font-medium">{allPhotos[currentIndex].year}</div>
                      </div>
                    )}
                    {allPhotos[currentIndex].emotion && (
                      <div>
                        <div className="text-sm text-gray-500">情感</div>
                        <div className="font-medium">{allPhotos[currentIndex].emotion}</div>
                      </div>
                    )}
                    <div>
                      <div className="text-sm text-gray-500">分類</div>
                      <div className="font-medium">{allPhotos[currentIndex].category}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handlePrev}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-gray-700">
                      {currentIndex + 1} / {allPhotos.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoGallery
