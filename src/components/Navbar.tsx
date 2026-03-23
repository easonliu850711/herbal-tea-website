'use client'

import { useState } from 'react'
import { Menu, X, ShoppingBag, Heart } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: '首頁', href: '/' },
    { name: '所有產品', href: '/products' },
    { name: '關於我們', href: '/about' },
    { name: '養生知識', href: '/knowledge' },
    { name: '聯絡我們', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-neutral-100 shadow-sm">
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">劉</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-neutral-900">劉媽媽的草本茶</h1>
              <p className="text-xs text-neutral-500">三十年市場經驗的溫暖傳承</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-500 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-neutral-700 hover:text-primary-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-neutral-700 hover:text-primary-500 transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-neutral-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-100 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-500 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
