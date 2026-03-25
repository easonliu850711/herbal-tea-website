'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Leaf, Heart } from 'lucide-react';
import { Button } from './Button';
import { HeroImage } from './Image';
import { brandingImages, getRandomStallImage, stallImages } from '@/lib/images';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundType?: 'static' | 'slideshow' | 'video';
  overlay?: boolean;
  overlayOpacity?: number;
  ctaPrimary?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  ctaSecondary?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  showScrollIndicator?: boolean;
  height?: 'small' | 'medium' | 'large' | 'full';
  align?: 'left' | 'center' | 'right';
}

const Hero: React.FC<HeroProps> = ({
  title = '劉媽媽の草本茶',
  subtitle = '「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」',
  description = '三十年傳統市場經驗的溫暖傳承',
  backgroundImage,
  backgroundType = 'static',
  overlay = true,
  overlayOpacity = 0.4,
  ctaPrimary = {
    text: '探索產品',
    href: '/products',
    icon: <Leaf className="w-4 h-4" />,
  },
  ctaSecondary = {
    text: '品牌故事',
    href: '/story',
    icon: <Heart className="w-4 h-4" />,
  },
  showScrollIndicator = true,
  height = 'large',
  align = 'center',
}) => {
  const [currentBackground, setCurrentBackground] = useState<string>(
    backgroundImage || brandingImages.banner
  );
  const [slideIndex, setSlideIndex] = useState(0);

  // 幻燈片背景
  useEffect(() => {
    if (backgroundType === 'slideshow') {
      const interval = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % stallImages.length);
        setCurrentBackground(stallImages[slideIndex]);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [backgroundType, slideIndex]);

  const heightClasses = {
    small: 'h-[50vh] min-h-[400px]',
    medium: 'h-[60vh] min-h-[500px]',
    large: 'h-[70vh] min-h-[600px]',
    full: 'h-screen',
  };

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const contentPadding = {
    left: 'pl-8 md:pl-16',
    center: '',
    right: 'pr-8 md:pr-16',
  };

  return (
    <div className={`relative ${heightClasses[height]} w-full overflow-hidden`}>
      {/* 背景圖片/影片 */}
      {backgroundType === 'video' ? (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            {/* 備用圖片 */}
            <HeroImage
              src={currentBackground}
              alt="Hero background"
              overlay={false}
            />
          </video>
        </div>
      ) : (
        <HeroImage
          src={currentBackground}
          alt="Hero background"
          overlay={overlay}
          overlayOpacity={overlayOpacity}
        />
      )}

      {/* 內容 */}
      <div
        className={`
          relative z-20
          h-full flex flex-col justify-center
          ${alignClasses[align]}
          ${contentPadding[align]}
          px-4 md:px-8
          text-white
        `}
      >
        {/* 裝飾元素 */}
        <div className="absolute top-8 left-8 opacity-20">
          <Leaf className="w-16 h-16" />
        </div>
        <div className="absolute bottom-8 right-8 opacity-20">
          <Leaf className="w-16 h-16 transform rotate-45" />
        </div>

        {/* 標題區域 */}
        <div className="max-w-4xl">
          {/* 副標題（小字） */}
          {subtitle && (
            <div className="mb-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium">{subtitle}</span>
              </div>
            </div>
          )}

          {/* 主標題 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          {/* 描述 */}
          {description && (
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl">
              {description}
            </p>
          )}

          {/* 行動按鈕 */}
          <div className="flex flex-wrap gap-4 mt-8">
            {ctaPrimary && (
              <Button
                variant="primary"
                size="lg"
                icon={ctaPrimary.icon}
                onClick={() => window.location.href = ctaPrimary.href}
                className="bg-white text-brand-deep hover:bg-white/90"
              >
                {ctaPrimary.text}
              </Button>
            )}

            {ctaSecondary && (
              <Button
                variant="outline"
                size="lg"
                icon={ctaSecondary.icon}
                onClick={() => window.location.href = ctaSecondary.href}
                className="border-white text-white hover:bg-white/10"
              >
                {ctaSecondary.text}
              </Button>
            )}
          </div>

          {/* 額外資訊 */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>30年市場經驗</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>10款精選草本茶</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>純天然無添加</span>
            </div>
          </div>
        </div>
      </div>

      {/* 幻燈片指示器 */}
      {backgroundType === 'slideshow' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {stallImages.slice(0, 5).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === slideIndex % 5
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => {
                setSlideIndex(index);
                setCurrentBackground(stallImages[index]);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* 滾動指示器 */}
      {showScrollIndicator && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/80" />
        </div>
      )}

      {/* 漸變遮罩（底部） */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
    </div>
  );
};

// 專門的產品Hero
interface ProductHeroProps extends Omit<HeroProps, 'backgroundImage'> {
  productName: string;
  productImage?: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  productName,
  productImage,
  ...props
}) => {
  const background = productImage || getRandomStallImage();

  return (
    <Hero
      title={productName}
      subtitle="精選草本茶 · 三十年市場驗證"
      description="每一口都是自然的味道，每一杯都是溫暖的傳承"
      backgroundImage={background}
      backgroundType="static"
      ctaPrimary={{
        text: '立即購買',
        href: '/contact',
        icon: <Leaf className="w-4 h-4" />,
      }}
      ctaSecondary={{
        text: '了解更多',
        href: `/products#${productName}`,
        icon: <Play className="w-4 h-4" />,
      }}
      height="medium"
      {...props}
    />
  );
};

// 專門的故事Hero
const StoryHero: React.FC<HeroProps> = (props) => {
  return (
    <Hero
      title="劉媽媽的故事"
      subtitle="從一杯決明子茶開始的三十年旅程"
      description="傳統市場的溫暖記憶，現代生活的健康選擇"
      backgroundImage={brandingImages.banner}
      backgroundType="static"
      ctaPrimary={{
        text: '閱讀完整故事',
        href: '/story',
        icon: <Heart className="w-4 h-4" />,
      }}
      height="medium"
      align="left"
      {...props}
    />
  );
};

export { Hero, ProductHero, StoryHero };