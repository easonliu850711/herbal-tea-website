'use client'

import React from 'react';
import { Leaf, ExternalLink, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

// 內聯樣式對象
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #fafaf9, #ffffff)',
    color: '#333',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans TC', sans-serif"
  },
  hero: {
    position: 'relative' as const,
    background: 'linear-gradient(to bottom right, rgba(20, 83, 45, 0.9), rgba(15, 118, 110, 0.8), rgba(30, 41, 59, 0.9))',
    color: 'white',
    padding: '8rem 0 6rem',
    marginTop: '4rem',
    overflow: 'hidden'
  },
  heroBg: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/images/uncategorized/uncategorized-20260323_224649-000.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.4
  },
  heroContent: {
    position: 'relative' as const,
    zIndex: 1,
    textAlign: 'center' as const,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  highlight: {
    color: '#86efac'
  },
  subtitle: {
    fontSize: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto 2rem',
    opacity: 0.9
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  productCard: {
    background: 'white',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s'
  },
  productImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover' as const
  },
  productContent: {
    padding: '1.5rem'
  },
  productTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '0.5rem'
  },
  productSubtitle: {
    color: '#059669',
    fontWeight: 600,
    marginBottom: '1rem'
  },
  productTag: {
    display: 'inline-block',
    background: '#f0fdf4',
    color: '#059669',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    marginBottom: '1rem'
  },
  contactSection: {
    background: 'linear-gradient(to bottom right, #f0fdf4, #ecfdf5)',
    padding: '5rem 0',
    borderRadius: '2rem',
    margin: '3rem auto',
    maxWidth: '1200px'
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center',
    padding: '0 20px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.5rem',
    background: 'white',
    borderRadius: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  contactIcon: {
    width: '3rem',
    height: '3rem',
    background: 'linear-gradient(to bottom right, #10b981, #059669)',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.25rem'
  },
  qrcode: {
    width: '300px',
    height: '300px',
    border: '8px solid white',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    margin: '0 auto'
  },
  footer: {
    background: '#1e293b',
    color: 'white',
    padding: '3rem 0',
    textAlign: 'center' as const
  }
};

export default function Home() {
  const productImages = {
    "一條根茶": "/images/product-closeup/產品照-000.png",
    "七葉膽茶": "/images/product-closeup/產品照-001.png",
    "桑葉苦瓜茶": "/images/product-closeup/產品照-002.png",
    "枸杞菊花茶": "/images/product-closeup/產品照-003.png",
    "桑葉茶": "/images/product-closeup/產品照-004.png",
    "洛神花茶": "/images/product-closeup/產品照-005.png",
    "辣木茶": "/images/product-closeup/產品照-006.png",
    "金線蓮茶": "/images/product-closeup/產品照-007.png",
    "魚腥草茶": "/images/product-closeup/產品照-008.png",
    "雞角刺茶": "/images/product-closeup/產品照-009.png"
  };

  const products = [
    { name: "七葉膽茶", subtitle: "強身茶", tag: "滋補強身" },
    { name: "一條根茶", subtitle: "舒活茶", tag: "舒緩放鬆" },
    { name: "洛神花茶", subtitle: "纖體美顏茶", tag: "養顏美容" },
    { name: "雞角刺茶", subtitle: "好眠防禦茶", tag: "安定助眠" },
    { name: "魚腥草茶", subtitle: "防護茶", tag: "健康防護" },
    { name: "金線蓮茶", subtitle: "美人茶", tag: "煥發神采" },
    { name: "辣木茶", subtitle: "女王茶", tag: "元氣補給" },
    { name: "枸杞菊花茶", subtitle: "清熱明目茶", tag: "晶亮舒適" },
    { name: "桑葉苦瓜茶", subtitle: "三降茶", tag: "代謝穩定" },
    { name: "桑葉茶", subtitle: "油糖雙切茶", tag: "餐後解膩" }
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBg}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            劉媽媽の<span style={styles.highlight}>草本茶</span>
          </h1>
          <p style={styles.subtitle}>
            「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%' }}></div>
            <span style={{ fontWeight: 500 }}>三十年傳統市場經驗</span>
            <div style={{ width: '8px', height: '8px', background: '#2dd4bf', borderRadius: '50%' }}></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '1rem' }}>
            精選<span style={{ color: '#059669' }}>十款</span>草本茶
          </h2>
          <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto' }}>
            三十年市場經驗的智慧結晶，每款茶都針對現代人的需求精心調配
          </p>
        </div>

        <div style={styles.productGrid}>
          {products.map((product, index) => (
            <div key={index} style={styles.productCard}>
              <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                <Image
                  src={productImages[product.name as keyof typeof productImages]}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#374151' }}>
                    {product.tag}
                  </span>
                </div>
              </div>
              
              <div style={styles.productContent}>
                <h3 style={styles.productTitle}>{product.name}</h3>
                <p style={styles.productSubtitle}>{product.subtitle}</p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid #e5e5e5'
                }}>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>市場熱銷 · 20包入</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#059669' }}>了解更多 →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#166534', marginBottom: '1rem' }}>
            開始您的<span style={{ color: '#059669' }}>草本之旅</span>
          </h2>
          <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto' }}>
            掃描 QR Code 加入官方 LINE，獲取三十年市場經驗的健康建議與專屬優惠
          </p>
        </div>

        <div style={styles.contactGrid}>
          <div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <ExternalLink size={24} />
              </div>
              <div>
                <h3 style={{ fontWeight: 600, color: '#166534' }}>LINE 官方帳號</h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669' }}>@910jrwoy</p>
              </div>
            </div>
            
            <div style={{ ...styles.contactItem, marginTop: '1.5rem' }}>
              <div style={{ ...styles.contactIcon, background: 'linear-gradient(to bottom right, #f59e0b, #ea580c)' }}>
                <Phone size={24} />
              </div>
              <div>
                <h3 style={{ fontWeight: 600, color: '#166534' }}>服務專線</h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669' }}>0956-111-636</p>
              </div>
            </div>
            
            <div style={{ ...styles.contactItem, marginTop: '1.5rem' }}>
              <div style={{ ...styles.contactIcon, background: 'linear-gradient(to bottom right, #3b82f6, #06b6d4)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h3 style={{ fontWeight: 600, color: '#166534' }}>電子郵件</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#059669' }}>imori850711@gmail.com</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '1rem' }}>掃碼加入 LINE</h3>
            <p style={{ color: '#4b5563', marginBottom: '2rem' }}>獲取專屬優惠與養生知識</p>
            
            <div style={{ position: 'relative', width: '300px', height: '300px', margin: '0 auto' }}>
              <Image
                src="/images/products/QRcode名片版.jpg"
                alt="劉媽媽の草本茶 LINE 官方帳號 QR Code"
                fill
                style={{ objectFit: 'contain', padding: '2rem' }}
                sizes="300px"
              />
            </div>
            
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem',
              background: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #d1fae5'
            }}>
              <p style={{ color: '#065f46', fontWeight: 600 }}>📱 掃描立即加入 · 專人為您服務</p>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid #d1fae5',
          textAlign: 'center'
        }}>
          <p style={{ color: '#4b5563' }}>
            © 2026 劉媽媽の草本茶 · 從決明子到草本茶，用茶養大兩個小孩的媽媽
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            三十年市場經驗的溫暖傳承 · 每一杯茶都是對媽媽養育之恩的回報
          </p>
        </div>
      </section>
    </div>
  );
}