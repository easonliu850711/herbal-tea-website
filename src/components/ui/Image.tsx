import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends Omit<NextImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  ratio?: 'square' | 'video' | 'widescreen' | 'portrait' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  shadow?: 'none' | 'soft' | 'medium' | 'hard';
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  ratio = 'auto',
  objectFit = 'cover',
  rounded = 'none',
  shadow = 'none',
  loading = 'lazy',
  priority = false,
  className = '',
  width,
  height,
  ...props
}) => {
  // 確保有寬高或fill屬性
  const hasDimensions = width && height;
  const shouldUseFill = !hasDimensions;

  // 比例類名
  const ratioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    widescreen: 'aspect-[16/9]',
    portrait: 'aspect-[3/4]',
    auto: '',
  };

  // 圓角類名
  const roundedClasses = {
    none: '',
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  };

  // 陰影類名
  const shadowClasses = {
    none: '',
    soft: 'shadow-soft',
    medium: 'shadow-medium',
    hard: 'shadow-hard',
  };

  // 物件適應類名
  const objectFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  };

  const containerClasses = `
    relative overflow-hidden
    ${ratioClasses[ratio]}
    ${roundedClasses[rounded]}
    ${shadowClasses[shadow]}
    ${className}
  `;

  const imageClasses = `
    ${objectFitClasses[objectFit]}
    transition-transform duration-500
    hover:scale-105
  `;

  // 如果是外部圖片，需要配置remotePatterns
  const isExternal = src.startsWith('http');
  
  if (isExternal) {
    console.warn('外部圖片需要配置next.config.js中的remotePatterns');
  }

  return (
    <div className={containerClasses}>
      <NextImage
        src={src}
        alt={alt}
        fill={shouldUseFill}
        width={shouldUseFill ? undefined : width}
        height={shouldUseFill ? undefined : height}
        className={imageClasses}
        loading={loading}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={85}
        {...props}
      />
      
      {/* 載入佔位符 */}
      {!priority && (
        <div className="absolute inset-0 bg-gradient-to-br from-functional-stone-100 to-functional-stone-200 animate-pulse" />
      )}
    </div>
  );
};

// 產品圖片專用組件
export interface ProductImageProps extends Omit<ImageProps, 'ratio' | 'rounded' | 'shadow'> {
  badge?: string;
  badgeColor?: 'brand' | 'success' | 'warning' | 'error';
}

export const ProductImage: React.FC<ProductImageProps> = ({
  badge,
  badgeColor = 'brand',
  ...props
}) => {
  const badgeColorClasses = {
    brand: 'bg-brand-emerald text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-amber-500 text-white',
    error: 'bg-red-500 text-white',
  };

  return (
    <div className="relative">
      <Image
        ratio="square"
        rounded="lg"
        shadow="medium"
        {...props}
      />
      
      {badge && (
        <div className={`
          absolute top-3 right-3
          px-2 py-1
          text-xs font-bold
          rounded-full
          ${badgeColorClasses[badgeColor]}
          animate-scale-in
        `}>
          {badge}
        </div>
      )}
    </div>
  );
};

// Hero圖片專用組件
export interface HeroImageProps extends Omit<ImageProps, 'ratio' | 'objectFit'> {
  overlay?: boolean;
  overlayOpacity?: number;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  overlay = true,
  overlayOpacity = 0.3,
  ...props
}) => {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] max-h-[800px]">
      <Image
        fill
        objectFit="cover"
        priority
        className="z-0"
        {...props}
      />
      
      {overlay && (
        <div 
          className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-transparent"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
};