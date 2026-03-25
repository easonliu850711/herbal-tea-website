import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 品牌主色系
        brand: {
          deep: '#14532d',     // 深綠
          emerald: '#059669',  // 翡翠綠
          light: '#86efac',    // 淺綠
          orange: '#f97316',   // 暖橙色
        },
        // 功能色系
        functional: {
          stone: {
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917',
          }
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans TC',
          'system-ui',
          '-apple-system',
          'sans-serif'
        ],
        serif: [
          'Noto Serif TC',
          'serif'
        ]
      },
      fontSize: {
        // 設計系統字體大小
        'display-lg': ['3.5rem', { lineHeight: '1.2' }],
        'display-md': ['2.5rem', { lineHeight: '1.3' }],
        'display-sm': ['1.75rem', { lineHeight: '1.4' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        // 設計系統間距
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'hard': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'brand': '0 10px 25px rgba(20, 83, 45, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #14532d 0%, #059669 50%, #86efac 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-subtle': 'linear-gradient(to bottom, #fafaf9 0%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
}
export default config