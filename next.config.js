/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 重要：輸出靜態檔案
  images: {
    unoptimized: true, // 重要：關閉圖片優化，避免問題
  },
  trailingSlash: true,
}

module.exports = nextConfig