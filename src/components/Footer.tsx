import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white mt-24">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">劉</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">劉媽媽的草本茶</h3>
                <p className="text-neutral-400 text-sm">三十年市場經驗的溫暖傳承</p>
              </div>
            </div>
            <p className="text-neutral-400">
              從傳統市場攤位到您的茶杯，我們將三十年的市場經驗和媽媽的用心，融入每一包草本茶中。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-neutral-400 hover:text-white transition-colors">首頁</Link></li>
              <li><Link href="/products" className="text-neutral-400 hover:text-white transition-colors">所有產品</Link></li>
              <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">關於我們</Link></li>
              <li><Link href="/knowledge" className="text-neutral-400 hover:text-white transition-colors">養生知識</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">聯絡我們</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">聯絡資訊</h4>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Line: @liu_mama_tea</span>
              </li>
              <li>📞 電話: 09XX-XXX-XXX</li>
              <li>📧 郵箱: liu_mama@example.com</li>
              <li>📍 地址: 傳統市場攤位</li>
              <li>🕒 營業時間: 依市場時間調整</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">關注我們</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-neutral-500">
              掃碼加入 Line 官方帳號，獲取最新優惠和養生知識
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500 text-sm">
          <p>© 2026 劉媽媽的草本茶 版權所有 | 三十年市場經驗的草本養生茶</p>
          <p className="mt-2">本網站僅供展示，實際產品資訊以官方公告為準</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
