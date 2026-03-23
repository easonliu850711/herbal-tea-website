import React from 'react'
import Link from 'next/link'
import { Menu, ShoppingBag, User } from 'lucide-react'

const Navbar = () => {
  const navItems = [
    { name: '首頁', href: '/' },
    { name: '所有產品', href: '/products' },
    { name: '關於我們', href: '/about' },
    { name: '養生知識', href: '/knowledge' },
    { name: '聯絡我們', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">劉</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-gray-900">劉媽媽的草本茶</h1>
                <p className="text-xs text-gray-500">三十年市場經驗的溫暖傳承</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-primary-500 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-primary-500 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent-500 text-xs text-white flex items-center justify-center">
                0
              </span>
            </button>
            <button className="md:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 transition-colors font-medium py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
