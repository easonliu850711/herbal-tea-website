'use client'

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Download, Heart } from 'lucide-react';
import { Image } from './Image';
import { Button } from './Button';

export interface ImageGalleryProps {
  images: readonly string[];
  title?: string;
  description?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  showControls?: boolean;
  interactive?: boolean;
  category?: string;
  className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title,
  description,
  columns = 3,
  gap = 'md',
  showControls = true,
  interactive = true,
  category,
  className = '',
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4 md:gap-6',
    lg: 'gap-6 md:gap-8',
  };

  const handleImageClick = (index: number) => {
    if (interactive) {
      setSelectedIndex(index);
    }
  };

  const handleLike = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newLiked = new Set(likedImages);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedImages(newLiked);
  };

  const handleDownload = (imageUrl: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // 在實際應用中，這裡應該處理圖片下載
    console.log('Downloading:', imageUrl);
  };

  const handlePrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  // 鍵盤導航
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case 'Escape':
          handleClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className={`w-full ${className}`}>
      {/* 標題區域 */}
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && (
            <h3 className="text-display-sm font-bold text-functional-stone-900 mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-body-md text-functional-stone-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      {/* 圖片網格 */}
      <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            {/* 圖片容器 */}
            <div className="relative overflow-hidden rounded-xl bg-functional-stone-100">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}${category ? ` - ${category}` : ''}`}
                ratio="video"
                objectFit="cover"
                rounded="lg"
                className="transition-transform duration-500 group-hover:scale-105"
              />

              {/* 懸停遮罩 */}
              {interactive && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center space-x-3">
                    <button
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      onClick={(e) => handleLike(index, e)}
                      aria-label="Like image"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedImages.has(index)
                            ? 'fill-red-500 text-red-500'
                            : 'text-functional-stone-700'
                        }`}
                      />
                    </button>
                    <button
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      onClick={(e) => handleDownload(src, e)}
                      aria-label="Download image"
                    >
                      <Download className="w-5 h-5 text-functional-stone-700" />
                    </button>
                    <button
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label="View fullscreen"
                    >
                      <Maximize2 className="w-5 h-5 text-functional-stone-700" />
                    </button>
                  </div>
                </div>
              )}

              {/* 圖片編號 */}
              <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 text-white text-xs rounded-md">
                {index + 1} / {images.length}
              </div>
            </div>

            {/* 類別標籤 */}
            {category && (
              <div className="absolute top-3 right-3 px-2 py-1 bg-brand-emerald text-white text-xs font-semibold rounded-md">
                {category}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 控制按鈕 */}
      {showControls && images.length > 0 && (
        <div className="mt-6 flex justify-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedIndex(0)}
            disabled={!interactive}
          >
            查看全部 ({images.length}張)
          </Button>
        </div>
      )}

      {/* 燈箱模態框 */}
      {selectedIndex !== null && interactive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          {/* 關閉按鈕 */}
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            onClick={handleClose}
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* 導航按鈕 */}
          {selectedIndex > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {selectedIndex < images.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* 當前圖片 */}
          <div className="relative w-full max-w-6xl max-h-[80vh]">
            <Image
              src={images[selectedIndex]}
              alt={`Selected image ${selectedIndex + 1}`}
              objectFit="contain"
              className="max-h-[80vh]"
              priority
            />

            {/* 圖片資訊 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">
                    圖片 {selectedIndex + 1} / {images.length}
                  </div>
                  {category && (
                    <div className="text-sm opacity-80">類別: {category}</div>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    onClick={(e) => handleLike(selectedIndex, e)}
                    aria-label="Like image"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedImages.has(selectedIndex)
                          ? 'fill-red-500 text-red-500'
                          : 'text-white'
                      }`}
                    />
                  </button>
                  <button
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    onClick={(e) => handleDownload(images[selectedIndex], e)}
                    aria-label="Download image"
                  >
                    <Download className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 縮略圖預覽 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-full px-4 py-2">
            {images.map((src, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                  index === selectedIndex
                    ? 'border-white scale-110'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                onClick={() => setSelectedIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  objectFit="cover"
                  className="w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// 專門的產品畫廊
export interface ProductGalleryProps extends Omit<ImageGalleryProps, 'images'> {
  productName?: string;
  showProductInfo?: boolean;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  productName,
  showProductInfo = true,
  ...props
}) => {
  // 這裡可以根據產品名稱獲取對應的圖片
  // 暫時使用通用圖片
  const productImages = [
    '/images/product-closeup/產品照-000.png',
    '/images/product-closeup/產品照-001.png',
    '/images/product-closeup/產品照-002.png',
    '/images/product-closeup/產品照-003.png',
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-medium">
      {showProductInfo && productName && (
        <div className="mb-6">
          <h4 className="text-xl font-bold text-functional-stone-900 mb-2">
            {productName} - 產品展示
          </h4>
          <p className="text-functional-stone-600">
            點擊圖片查看詳細資訊
          </p>
        </div>
      )}
      <ImageGallery
        images={productImages}
        category="產品"
        {...props}
      />
    </div>
  );
};