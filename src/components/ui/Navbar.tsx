'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf, ShoppingBag } from 'lucide-react';
import { Button } from './Button';

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  items?: NavItem[];
  cta?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  sticky?: boolean;
  transparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo = (
    <div className="flex items-center space-x-2">
      <Leaf className="w-6 h-6 text-brand-deep" />
      <span className="text-xl font-bold text-functional-stone-900">
        劉媽媽の草本茶
      </span>
    </div>
  ),
  items = [
    { label: '首頁', href: '/' },
    { label: '產品故事', href: '/story' },
    { label: '主要產品', href: '/products' },
    { label: '草本小撇步', href: '/tips' },
    { label: '聯絡我們', href: '/contact' },
  ],
  cta = {
    label: '立即訂購',
    href: '/contact',
    icon: <ShoppingBag className="w-4 h-4" />,
  },
  sticky = true,
  transparent = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseStyles = `
    w-full
    transition-all duration-300
    ${sticky ? 'fixed top-0 left-0 right-0 z-50' : 'relative'}
  `;

  const backgroundStyles = transparent
    ? scrolled
      ? 'bg-white/95 backdrop-blur-md border-b border-functional-stone-200'
      : 'bg-transparent'
    : 'bg-white/95 backdrop-blur-md border-b border-functional-stone-200';

  const logoStyles = transparent && !scrolled ? 'text-white' : '';

  return (
    <>
      <nav className={`${baseStyles} ${backgroundStyles}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className={`flex items-center ${logoStyles}`}>
              {logo}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-4 py-2
                    rounded-lg
                    text-functional-stone-700
                    hover:text-brand-deep
                    hover:bg-brand-light/10
                    transition-colors duration-200
                    font-medium
                    flex items-center space-x-2
                  `}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="md"
                icon={cta.icon}
                onClick={() => window.location.href = cta.href}
              >
                {cta.label}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-functional-stone-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-functional-stone-700" />
              ) : (
                <Menu className="w-6 h-6 text-functional-stone-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-functional-stone-200 animate-slide-up">
              <div className="flex flex-col space-y-2">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      px-4 py-3
                      rounded-lg
                      text-functional-stone-700
                      hover:text-brand-deep
                      hover:bg-brand-light/10
                      transition-colors duration-200
                      font-medium
                      flex items-center space-x-3
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-functional-stone-200">
                  <Button
                    variant="primary"
                    size="md"
                    icon={cta.icon}
                    fullWidth
                    onClick={() => {
                      window.location.href = cta.href;
                      setIsOpen(false);
                    }}
                  >
                    {cta.label}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      {sticky && <div className="h-16 md:h-20" />}

      <style jsx>{`
        .container {
          max-width: 1280px;
          margin: 0 auto;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
};