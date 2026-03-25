'use client'

import React from 'react';
import { Leaf, BookOpen, Package, Lightbulb, Phone, Star, Users, Award, Clock, Heart, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: "產品故事",
      description: "三十年傳統市場經驗，從一杯決明子茶開始的溫暖傳承",
      icon: <BookOpen className="icon-large" />,
      link: "/story",
      color: "green",
      stats: "30年經驗"
    },
    {
      title: "主要產品",
      description: "十款精選草本茶，每款都是市場經驗的智慧結晶",
      icon: <Package className="icon-large" />,
      link: "/products",
      color: "orange",
      stats: "10款茶品"
    },
    {
      title: "草本小撇步",
      description: "養生知識、茶飲搭配、季節養生提醒",
      icon: <Lightbulb className="icon-large" />,
      link: "/tips",
      color: "blue",
      stats: "每日更新"
    },
    {
      title: "聯絡我們",
      description: "LINE官方帳號、服務專線、實體攤位資訊",
      icon: <Phone className="icon-large" />,
      link: "/contact",
      color: "purple",
      stats: "即時回覆"
    }
  ];

  const featuredProducts = [
    {
      name: "七葉膽茶",
      subtitle: "強身茶",
      description: "精選七葉膽，溫和滋補，市場最受歡迎",
      image: "/images/product-closeup/產品照-001.png",
      rating: 4.8,
      tag: "熱銷冠軍"
    },
    {
      name: "洛神花茶",
      subtitle: "纖體美顏茶",
      description: "新鮮洛神花，酸甜可口，女性最愛",
      image: "/images/product-closeup/產品照-002.png",
      rating: 4.7,
      tag: "美容首選"
    },
    {
      name: "枸杞菊花茶",
      subtitle: "清熱明目茶",
      description: "枸杞搭配菊花，清熱明目，辦公室必備",
      image: "/images/product-closeup/產品照-007.png",
      rating: 4.6,
      tag: "經典配方"
    }
  ];

  const testimonials = [
    {
      name: "張小姐",
      role: "上班族，喝了3年",
      content: "每天上班泡一杯七葉膽茶，精神好很多。劉媽媽的茶真的不一樣，喝得出來是用心挑選的原料。",
      rating: 5
    },
    {
      name: "陳先生",
      role: "工程師，喝了2年",
      content: "枸杞菊花茶拯救了我的眼睛！每天看電腦超過10小時，現在眼睛不會那麼乾澀了。",
      rating: 5
    },
    {
      name: "林媽媽",
      role: "家庭主婦，喝了5年",
      content: "從傳統市場買到現在，品質一直沒變。劉媽媽就像朋友一樣，會根據你的狀況推薦適合的茶。",
      rating: 5
    }
  ];

  const stats = [
    { value: "30", label: "年市場經驗", icon: <Clock className="icon-medium" /> },
    { value: "10", label: "款精選茶品", icon: <Package className="icon-medium" /> },
    { value: "5000+", label: "位滿意顧客", icon: <Users className="icon-medium" /> },
    { value: "99%", label: "顧客回購率", icon: <Heart className="icon-medium" /> }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container text-center relative z-10">
          <div className="hero-logo float">
            <Leaf className="icon-xlarge" />
          </div>
          
          <h1 className="hero-title">
            劉媽媽の草本茶
          </h1>
          <p className="hero-subtitle">
            「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
          </p>
          <p className="hero-tagline">
            三十年傳統市場經驗 · 溫暖傳承
          </p>
          
          <div className="hero-cta">
            <Link href="/products" className="btn btn-primary">
              探索產品 <ChevronRight className="icon-small ml-2" />
            </Link>
            <Link href="/story" className="btn btn-outline">
              品牌故事
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              探索劉媽媽的草本世界
            </h2>
            <p className="section-description">
              從產品故事到養生知識，完整了解三十年市場經驗的智慧結晶
            </p>
          </div>

          <div className="grid grid-4">
            {features.map((feature, index) => (
              <Link 
                key={index}
                href={feature.link}
                className="feature-card"
              >
                <div className={`feature-icon ${feature.color}`}>
                  {feature.icon}
                </div>
                
                <div className="feature-badge">{feature.stats}</div>
                
                <h3 className="feature-title">
                  {feature.title}
                </h3>
                <p className="feature-description">
                  {feature.description}
                </p>
                
                <div className="feature-link">
                  <span>探索更多</span>
                  <span className="arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              精選熱銷產品
            </h2>
            <p className="section-description">
              三十年市場驗證，顧客最愛的三款草本茶
            </p>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image img-container">
                  {/* @ts-ignore */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
                  <div className="product-tag">{product.tag}</div>
                </div>
                
                <div className="product-content">
                  <div className="product-header">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-subtitle">{product.subtitle}</p>
                  </div>
                  
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                      />
                    ))}
                    <span className="rating-value">{product.rating}</span>
                  </div>
                  
                  <Link href="/products" className="btn btn-secondary">
                    查看詳情
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn btn-primary">
              查看全部產品 <ChevronRight className="icon-small ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              顧客真實評價
            </h2>
            <p className="section-description">
              聽聽喝了多年的顧客怎麼說
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star filled" />
                  ))}
                </div>
                
                <p className="testimonial-content">"{testimonial.content}"</p>
                
                <div className="testimonial-author">
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                  <Award className="icon-small text-green-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="contact-section">
        <div className="container text-center">
          <h2 className="section-title">
            立即開始您的草本之旅
          </h2>
          <p className="section-description">
            掃描 QR Code 加入官方 LINE，獲取三十年市場經驗的健康建議與專屬優惠
          </p>
          
          <div className="contact-card">
            <div className="qr-placeholder">
              <div className="qr-icon">📱</div>
              <div className="qr-text">掃描加入</div>
            </div>
            
            <div className="contact-info">
              <h3>LINE 官方帳號</h3>
              <p className="line-id">@910jrwoy</p>
              <p className="contact-note">獲取專屬優惠與養生知識</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <Phone className="icon-small" />
                  <span>服務專線：0956-111-636</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">劉媽媽の草本茶</div>
              <p className="footer-tagline">三十年市場經驗的溫暖傳承</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>探索</h4>
                <Link href="/">首頁</Link>
                <Link href="/story">產品故事</Link>
                <Link href="/products">主要產品</Link>
              </div>
              
              <div className="footer-column">
                <h4>資源</h4>
                <Link href="/tips">草本小撇步</Link>
                <Link href="/contact">聯絡我們</Link>
              </div>
              
              <div className="footer-column">
                <h4>聯絡</h4>
                <span>LINE: @910jrwoy</span>
                <span>電話: 0956-111-636</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>
              © 2026 劉媽媽の草本茶 · 從決明子到草本茶，用茶養大兩個小孩的媽媽
            </p>
            <p>
              三十年市場經驗的溫暖傳承 · 每一杯茶都是對媽媽養育之恩的回報
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* 頁面容器 */
        .page-container {
          min-height: 100vh;
          padding-top: 5rem;
        }
        
        /* Hero區 */
        .hero-section {
          position: relative;
          background: linear-gradient(to bottom right, 
            var(--green-900), 
            var(--emerald-800), 
            var(--stone-900)
          );
          color: white;
          padding: 8rem 0;
          overflow: hidden;
        }
        
        .hero-overlay {
          position: absolute;
          inset: 0;
          background-image: url('/images/booth/booth-20260323_234211-000.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.2;
          filter: blur(3px);
        }
        
        .hero-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, 
            rgba(20, 83, 45, 0.8), 
            rgba(15, 118, 110, 0.7), 
            rgba(30, 41, 59, 0.8)
          );
        }
        
        .hero-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 8rem;
          height: 8rem;
          background: linear-gradient(to bottom right, 
            var(--green-500), 
            var(--emerald-600)
          );
          border-radius: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .hero-subtitle {
          font-size: 2rem;
          opacity: 0.95;
          max-width: 48rem;
          margin: 0 auto 2rem;
          line-height: 1.4;
        }
        
        .hero-tagline {
          font-size: 1.5rem;
          opacity: 0.8;
          margin-bottom: 3rem;
        }
        
        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        /* 按鈕 */
        .btn {
          display: inline-flex;
          align-items: center;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          border: 2px solid transparent;
        }
        
        .btn-primary {
          background: var(--green-600);
          color: white;
        }
        
        .btn-primary:hover {
          background: var(--green-700);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(22, 163, 74, 0.4);
        }
        
        .btn-outline {
          background: transparent;
          color: white;
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
        }
        
        .btn-secondary {
          background: white;
          color: var(--green-700);
          border: 2px solid var(--green-200);
          padding: 0.75rem 1.5rem;
        }
        
        .btn-secondary:hover {
          background: var(--green-50);
          border-color: var(--green-300);
        }
        
        /* 統計區 */
        .stats-section {
          background: white;
          padding: 4rem 0;
          margin-top: -2rem;
          border-radius: 2rem 2rem 0 0;
          position: relative;
          z-index: 1;
          box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.05);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 64rem;
          margin: 0 auto;
        }
        
        .stat-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: var(--green-50);
          border-radius: 1rem;
        }
        
        .stat-icon {
          flex-shrink: 0;
          width: 4rem;
          height: 4rem;
          background: white;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .stat-icon :global(svg) {
          width: 2rem;
          height: 2rem;
          color: var(--green-600);
        }
        
        .stat-value {
          font-size: 2rem;
          font-weight: bold;
          color: var(--stone-900);
          line-height: 1;
        }
        
        .stat-label {
          color: var(--stone-600);
          font-size: 0.875rem;
        }
        
        /* 區段通用 */
        .section-padding {
          padding:          5rem 0;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--stone-900);
          margin-bottom: 1rem;
        }
        
        .section-description {
          font-size: 1.25rem;
          color: var(--stone-600);
          max-width: 48rem;
          margin: 0 auto 3rem;
        }
        
        /* 功能卡片 */
        .grid-4 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
          text-decoration: none;
          display: block;
          position: relative;
          overflow: hidden;
        }
        
        .feature-card:hover {
          transform: translateY(-0.5rem);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 5rem;
          height: 5rem;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .feature-icon.green {
          background: linear-gradient(to bottom right, 
            var(--green-500), 
            var(--emerald-600)
          );
        }
        
        .feature-icon.orange {
          background: linear-gradient(to bottom right, 
            #f97316, 
            #ea580c
          );
        }
        
        .feature-icon.blue {
          background: linear-gradient(to bottom right, 
            #3b82f6, 
            #0ea5e9
          );
        }
        
        .feature-icon.purple {
          background: linear-gradient(to bottom right, 
            #8b5cf6, 
            #d946ef
          );
        }
        
        .feature-icon :global(svg) {
          width: 3rem;
          height: 3rem;
          color: white;
        }
        
        .feature-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--green-100);
          color: var(--green-700);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--stone-900);
          margin-bottom: 0.75rem;
        }
        
        .feature-description {
          color: var(--stone-600);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .feature-link {
          display: flex;
          align-items: center;
          color: var(--green-600);
          font-weight: 600;
        }
        
        .arrow {
          margin-left: 0.5rem;
          transition: transform 0.3s;
        }
        
        .feature-card:hover .arrow {
          transform: translateX(0.5rem);
        }
        
        /* 產品區 */
        .products-section {
          background: linear-gradient(to bottom, 
            var(--stone-50), 
            white
          );
          padding: 5rem 0;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 64rem;
          margin: 0 auto;
        }
        
        .product-card {
          background: white;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }
        
        .product-card:hover {
          transform: translateY(-0.5rem);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .product-image {
          height: 250px;
          position: relative;
        }
        
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .product-tag {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--green-600);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .product-content {
          padding: 1.5rem;
        }
        
        .product-header {
          margin-bottom: 1rem;
        }
        
        .product-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--stone-900);
          margin-bottom: 0.25rem;
        }
        
        .product-subtitle {
          color: var(--green-600);
          font-weight: 600;
        }
        
        .product-description {
          color: var(--stone-600);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .product-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }
        
        .star {
          width: 1.25rem;
          height: 1.25rem;
          color: #d1d5db;
        }
        
        .star.filled {
          color: #fbbf24;
        }
        
        .rating-value {
          margin-left: 0.5rem;
          color: var(--stone-600);
          font-weight: 600;
        }
        
        /* 評價區 */
        .testimonials-section {
          padding: 5rem 0;
          background: white;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 64rem;
          margin: 0 auto;
        }
        
        .testimonial-card {
          background: var(--green-50);
          border-radius: 1.5rem;
          padding: 2rem;
          border: 1px solid var(--green-100);
        }
        
        .testimonial-rating {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }
        
        .testimonial-content {
          color: var(--stone-700);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.5rem;
        }
        
        .testimonial-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .author-name {
          font-weight: 600;
          color: var(--stone-900);
        }
        
        .author-role {
          color: var(--stone-600);
          font-size: 0.875rem;
        }
        
        /* 聯絡區 */
        .contact-section {
          background: linear-gradient(to bottom right, 
            var(--green-50), 
            var(--emerald-50)
          );
          padding: 5rem 0;
        }
        
        .contact-card {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          background: white;
          padding: 3rem;
          border-radius: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          max-width: 36rem;
          margin-top: 2rem;
        }
        
        @media (min-width: 768px) {
          .contact-card {
            flex-direction: row;
            gap: 3rem;
            max-width: 56rem;
          }
        }
        
        .qr-placeholder {
          width: 12rem;
          height: 12rem;
          background: linear-gradient(to bottom right, 
            var(--green-100), 
            var(--emerald-100)
          );
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }
        
        @media (min-width: 768px) {
          .qr-placeholder {
            margin-bottom: 0;
          }
        }
        
        .qr-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        
        .qr-text {
          color: var(--green-600);
          font-weight: bold;
        }
        
        .contact-info {
          text-align: left;
        }
        
        .contact-info h3 {
          font-size: 1.75rem;
          font-weight: bold;
          color: var(--stone-900);
          margin-bottom: 0.5rem;
        }
        
        .line-id {
          font-size: 2rem;
          font-weight: bold;
          color: var(--green-700);
          margin-bottom: 0.5rem;
        }
        
        .contact-note {
          color: var(--stone-600);
          margin-bottom: 1.5rem;
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--stone-700);
        }
        
        .contact-item :global(svg) {
          width: 1.25rem;
          height: 1.25rem;
          color: var(--green-600);
        }
        
        /* 頁尾 */
        .footer {
          background: var(--stone-900);
          color: white;
          padding: 4rem 0 2rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr 2fr;
          }
        }
        
        .footer-brand {
          max-width: 300px;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
        }
        
        .footer-tagline {
          color: var(--stone-400);
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }
        
        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-column h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .footer-column a,
        .footer-column span {
          color: var(--stone-400);
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .footer-column a:hover {
          color: white;
        }
        
        .footer-bottom {
          border-top: 1px solid var(--stone-800);
          padding-top: 2rem;
          text-align: center;
        }
        
        .footer-bottom p {
          color: var(--stone-400);
          margin-bottom: 0.5rem;
        }
        
        /* 圖標大小 */
        .icon-large {
          width: 3rem;
          height: 3rem;
        }
        
        .icon-xlarge {
          width: 3.5rem;
          height: 3.5rem;
          color: white;
        }
        
        .icon-medium {
          width: 2rem;
          height: 2rem;
        }
        
        .icon-small {
          width: 1.25rem;
          height: 1.25rem;
        }
        
        /* 工具類 */
        .ml-2 {
          margin-left: 0.5rem;
        }
        
        .mt-12 {
          margin-top: 3rem;
        }
        
        .text-center {
          text-align: center;
        }
        
        .relative {
          position: relative;
        }
        
        .z-10 {
          z-index: 10;
        }
        
        /* 響應式設計 */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .hero-cta {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .grid-4 {
            grid-template-columns: 1fr;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}