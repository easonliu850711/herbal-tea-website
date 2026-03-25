import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '劉媽媽の草本茶 - 從屏東到台北，一盞茶養大一對姊弟',
  description: '不只是一杯茶，同時也承載一個家庭的故事。三十年傳統市場經驗，劉媽媽將溫暖與用心融入每一包草本茶中。',
  keywords: ['劉媽媽の草本茶', '傳統市場', '養生茶', '台灣茶', '天然草本', '家庭故事'],
  openGraph: {
    title: '劉媽媽の草本茶 - 從屏東到台北，一盞茶養大一對姊弟',
    description: '不只是一杯茶，同時也承載一個家庭的故事。三十年傳統市場經驗的溫暖傳承。',
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
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: "Inter, 'Noto Sans TC', system-ui, sans-serif",
        minHeight: '100vh'
      }}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}