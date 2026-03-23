import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    產品: [
      { name: '草本茶系列', href: '/products/herbal-tea' },
      { name: '天然檸檬片', href: '/products/lemon-slices' },
      { name: '養生枇杷果', href: '/products/loquat' },
      { name: '所有產品', href: '/products' },
    ],
    資訊: [
      { name: '關於劉媽媽', href: '/about' },
      { name: '市場故事', href: '/about#story' },
      { name: '養生知識', href: '/knowledge' },
      { name: '常見問題', href: '/faq' },
    ],
    支援: [
      { name: '聯絡我們', href: '/contact' },
      { name: '運送政策', href: '/shipping' },
      { name: '退換貨政策', href: '/returns' },
      { name: '隱私政策', href: '/privacy' },
    ],
  }

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">劉</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">劉媽媽的草本茶</h3>
                <p className="text-sm text-gray-600">三十年市場經驗的溫暖傳承</p>
              </div>
            </div>
            <p className="text-gray-600">
              從傳統市場攤位到您的茶杯，我們將三十年的市場經驗和媽媽的用心，融入每一包草本茶中。
            </p>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">聯絡資訊</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-gray-600">09XX-XXX-XXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-gray-600">liu_mama@example.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-gray-600">傳統市場攤位 (詳細地址)</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-gray-600">依市場時間調整</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2026 劉媽媽的草本茶. 版權所有.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-600 hover:text-primary-500 text-sm">
                隱私政策
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-primary-500 text-sm">
                服務條款
              </Link>
              <Link href="/sitemap" className="text-gray-600 hover:text-primary-500 text-sm">
                網站地圖
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
