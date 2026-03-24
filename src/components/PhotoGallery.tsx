'use client'

import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Heart, Share2, Maximize2 } from 'lucide-react'
import Image from 'next/image'

interface Photo {
  id: string
  src: string
  alt: string
  category: string
  description: string
  width: number
  height: number
}

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set())

  // 照片資料 - 實際部署時會從API或資料庫取得
  const photos: Photo[] = [
    {
      id: 'market-1',
      src: '/images/stall-environment/market_stall_original.jpg',
      alt: '劉媽媽的市場攤位 - 傳統市場的溫暖場景',
      category: 'stall',
      description: '劉媽媽三十年如一日經營的市場攤位，承載著無數溫暖記憶',
      width: 1280,
      height: 1280
    },
    {
      id: 'liu-mama-1',
      src: '/images/liu-mama/liu_mama_photo_original.jpg',
      alt: '劉媽媽本人照片 - 溫暖的笑容',
      category: 'liu-mama',
      description: '劉媽媽溫暖的笑容，三十年市場經驗的智慧結晶',
      width: 800,
      height: 1000
    },
    {
      id: 'product-1',
      src: '/images/products/tea_packaging_01.jpg',
      alt: '草本茶產品包裝 - 手工包裝的用心',
      category: 'product',
      description: '劉媽媽手工包裝的草本茶，每一包都充滿用心',
      width: 600,
      height: 600
    },
    {
      id: 'interaction-1',
      src: '/images/interaction/customer_interaction_01.jpg',
      alt: '與顧客互動 - 市場的人情味',
      category: 'interaction',
      description: '劉媽媽與老顧客像朋友一樣聊天，分享健康知識',
      width: 800,
      height: 600
    },
    {
      id: 'process-1',
      src: '/images/production-process/tea_preparation_01.jpg',
      alt: '茶葉準備過程 - 傳統製茶智慧',
      category: 'process',
      description: '傳統製茶過程，每一步都蘊含著三十年經驗',
      width: 900,
      height: 600
    },
    {
      id: 'market-2',
      src: '/images/stall-environment/stall-environment-20260323_224649-004.jpg',
      alt: '市場攤位細節 - 茶葉展示',
      category: 'stall',
      description: '攤位上整齊擺放的各種草本茶，每一款都有故事',
      width: 1200,
      height: 800
    },
    {
      id: 'product-2',
      src: '/images/products/tea_packaging_02.jpg',
      alt: '決明子茶特寫 - 最初的記憶',
      category: 'product',
      description: '決明子茶 - 劉媽媽最初只賣的茶，養活一家人的溫暖記憶',
      width: 700,
      height: 700
    },
    {
      id: 'interaction-2',
      src: '/images/interaction/customer_interaction_02.jpg',
      alt: '顧客試喝 - 分享的喜悅',
      category: 'interaction',
      description: '劉媽媽親自為顧客沖泡試喝，分享茶飲的喜悅',
      width: 850,
      height: 600
    }
  ]

  const categories = [
    { id: 'all', name: '全部照片', count: photos.length },
    { id: 'stall', name: '攤位環境', count: photos.filter(p => p.category === 'stall').length },
    { id: 'liu-mama', name: '劉媽媽', count: photos.filter(p => p.category === 'liu-mama').length },
    { id: 'product', name: '產品特寫', count: photos.filter(p => p.category === 'product').length },
    { id: 'interaction', name: '互動場景', count: photos.filter(p => p.category === 'interaction').length },
    { id: 'process', name: '製作過程', count: photos.filter(p => p.category === 'process').length }
  ]

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  const handleLike = (id: string) => {
    const newLiked = new Set(likedPhotos)
    if (newLiked.has(id)) {
      newLiked.delete(id)
    } else {
      newLiked.add(id)
    }
    setLikedPhotos(newLiked)
  }

  const handleShare = (photo: Photo) => {
    if (navigator.share) {
      navigator.share({
        title: photo.alt,
        text: photo.description,
        url: window.location.origin + photo.src
      })
    } else {
      navigator.clipboard.writeText(window.location.origin + photo.src)
      alert('照片連結已複製到剪貼簿！')
    }
  }

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
    document.body.style.overflow = 'auto'
  }

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return
    
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id)
    let newIndex
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1
    }
    
    setSelectedPhoto(filteredPhotos[newIndex])
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Gallery Header */}
      <div className="p-6 border-b border-stone-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">照片畫廊</h2>
            <p className="text-stone-600 mt-1">真實記錄劉媽媽三十年市場生活的溫暖瞬間</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-stone-500">共 {photos.length} 張照片</span>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="px-6 py-4 bg-stone-50 border-b border-stone-100 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="p-6">
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-stone-500">此分類暫無照片</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map(photo => (
              <div 
                key={photo.id}
                className="group relative bg-stone-50 rounded-xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Photo Container */}
                <div 
                  className="aspect-square relative overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(photo)}
                >
                  {/* 實際照片會在部署後載入 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-stone-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-4xl mb-3">📸</div>
                      <p className="text-sm font-medium text-stone-700">{photo.alt}</p>
                      <p className="text-xs text-stone-500 mt-2">{photo.category}</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Maximize2 className="w-6 h-6 text-stone-700" />
                    </div>
                  </div>
                </div>

                {/* Photo Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-stone-900 line-clamp-1">{photo.alt}</h3>
                  <p className="text-sm text-stone-600 mt-1 line-clamp-2">{photo.description}</p>
                  
                  {/* Actions */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleLike(photo.id)
                        }}
                        className={`p-2 rounded-full transition-colors ${
                          likedPhotos.has(photo.id)
                            ? 'bg-red-50 text-red-500'
                            : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedPhotos.has(photo.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleShare(photo)
                        }}
                        className="p-2 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-xs px-2 py-1 bg-stone-100 text-stone-600 rounded">
                      {photo.width}×{photo.height}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Gallery Footer */}
        <div className="mt-8 pt-6 border-t border-stone-100 text-center">
          <p className="text-stone-600 text-sm">
            🌱 這些照片不僅是素材，更是三十年市場生活的真實記錄。
            每一張照片都在講述劉媽媽與客人之間的溫暖故事。
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigatePhoto('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigatePhoto('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Display */}
            <div className="bg-black rounded-xl overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-green-900 to-stone-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🖼️</div>
                  <p className="text-white text-lg font-medium">{selectedPhoto.alt}</p>
                  <p className="text-stone-300 mt-2">{selectedPhoto.description}</p>
                  <p className="text-stone-400 text-sm mt-4">
                    實際照片會在部署後載入
                  </p>
                </div>
              </div>
            </div>

            {/* Photo Info */}
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{selectedPhoto.alt}</h3>
                  <p className="text-stone-300 text-sm mt-1">{selectedPhoto.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleLike(selectedPhoto.id)}
                    className={`p-2 rounded-full ${
                      likedPhotos.has(selectedPhoto.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    } transition-colors`}
                  >
                    <Heart className={`w-5 h-5 ${likedPhotos.has(selectedPhoto.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => handleShare(selectedPhoto)}
                    className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
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