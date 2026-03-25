'use client'

import React from 'react';
import { Leaf, BookOpen, Package, Lightbulb, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: "產品故事",
      description: "三十年傳統市場經驗，從一杯決明子茶開始的溫暖傳承",
      icon: <BookOpen className="icon-large" />,
      link: "/story",
      color: "green"
    },
    {
      title: "主要產品",
      description: "十款精選草本茶，每款都是市場經驗的智慧結晶",
      icon: <Package className="icon-large" />,
      link: "/products",
      color: "orange"
    },
    {
      title: "草本小撇步",
      description: "養生知識、茶飲搭配、季節養生提醒",
      icon: <Lightbulb className="icon-large" />,
      link: "/tips",
      color: "blue"
    },
    {
      title: "聯絡我們",
      description: "LINE官方帳號、服務專線、實體攤位資訊",
      icon: <Phone className="icon-large" />,
      link: "/contact",
      color: "purple"
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container text-center">
          <div className="hero-logo">
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
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-4">
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
        <div className="container text-center">
          <p className="footer-main">
            © 2026 劉媽媽の草本茶 · 從決明子到草本茶，用茶養大兩個小孩的媽媽
          </p>
          <p className="footer-sub">
            三十年市場經驗的溫暖傳承 · 每一杯茶都是對媽媽養育之恩的回報
          </p>
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
          padding: 6rem 0;
          overflow: hidden;
        }
        
        .hero-overlay {
          position: absolute;
          inset: 0;
          background-image: url('/images/booth/booth-20260323_234211-000.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.3;
          filter: blur(2px);
        }
        
        .hero-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, 
            rgba(20, 83, 45, 0.7), 
            rgba(15, 118, 110, 0.6), 
            rgba(30, 41, 59, 0.7)
          );
        }
        
        .hero-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 6rem;
          height: 6rem;
          background: linear-gradient(to bottom right, 
            var(--green-500), 
            var(--emerald-600)
          );
          border-radius: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }
        
        .hero-subtitle {
          font-size: 1.75rem;
          opacity: 0.9;
          max-width: 48rem;
          margin: 0 auto 2.5rem;
        }
        
        .hero-tagline {
          font-size: 1.25rem;
          opacity: 0.8;
        }
        
        /* 區段通用 */
        .section-padding {
          padding: 5rem 0;
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
          margin: 0 auto;
        }
        
        /* 功能卡片 */
        .feature-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
          text-decoration: none;
          display: block;
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
          padding: 3rem 0;
        }
        
        .footer-main {
          color: var(--stone-300);
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }
        
        .footer-sub {
          color: var(--stone-400);
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
        
        .icon-small {
          width: 1.25rem;
          height: 1.25rem;
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
          
          .grid-4 {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}