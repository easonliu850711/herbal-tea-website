/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 關閉圖片優化，使用簡單img標籤
  },
  trailingSlash: true,
}

module.exports = nextConfig