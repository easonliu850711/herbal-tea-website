/** @type {import('next').NextConfig} */
const nextConfig = {
  // 暫時移除 output: 'export' 以解決路徑別名問題
  // output: 'export',
  images: {
    // 正確配置圖片優化
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 允許本地圖片
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // 靜態輸出時需要unoptimized
    unoptimized: process.env.NODE_ENV === 'production' ? true : false,
  },
  trailingSlash: true,
  // 性能優化
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig