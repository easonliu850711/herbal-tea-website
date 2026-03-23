import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '劉媽媽的草本茶 - 三十年市場經驗的溫暖傳承',
  description: '從傳統市場攤位到您的茶杯，劉媽媽將三十年的市場經驗和用心，融入每一包草本茶中。這不只是茶，這是記憶的延續，溫暖的傳遞。',
  keywords: ['草本茶', '劉媽媽', '傳統市場', '養生茶', '台灣茶', '天然草本'],
  openGraph: {
    title: '劉媽媽的草本茶 - 三十年市場經驗的溫暖傳承',
    description: '從傳統市場攤位到您的茶杯，劉媽媽將三十年的市場經驗和用心，融入每一包草本茶中。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-primary-50 to-white font-sans">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
