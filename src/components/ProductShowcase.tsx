'use client'

import React from 'react';
import { Leaf, Star, Check } from 'lucide-react';

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "七葉膽茶",
      subtitle: "強身茶",
      description: "精選七葉膽，溫和滋補，適合日常保健",
      benefits: ["增強體力", "促進代謝", "溫和滋補"],
      image: "/images/product-closeup/產品照-001.png"
    },
    {
      id: 2,
      name: "一條根茶",
      subtitle: "舒活茶",
      description: "傳統一條根配方，舒緩放鬆，適合久坐族",
      benefits: ["舒緩肌肉", "放鬆身心", "促進循環"],
      image: "/images/product-closeup/產品照-000.png"
    },
    {
      id: 3,
      name: "洛神花茶",
      subtitle: "纖體美顏茶",
      description: "新鮮洛神花，酸甜可口，養顏美容",
      benefits: ["美容養顏", "幫助消化", "豐富維生素"],
      image: "/images/product-closeup/產品照-002.png"
    },
    {
      id: 4,
      name: "雞角刺茶",
      subtitle: "好眠防禦茶",
      description: "雞角刺搭配草本，安定助眠，提升防護",
      benefits: ["幫助睡眠", "增強防護", "安定心神"],
      image: "/images/product-closeup/產品照-003.png"
    },
    {
      id: 5,
      name: "魚腥草茶",
      subtitle: "防護茶",
      description: "傳統魚腥草，清新口感，日常防護",
      benefits: ["日常防護", "清熱解毒", "清新口感"],
      image: "/images/product-closeup/產品照-004.png"
    },
    {
      id: 6,
      name: "金線蓮茶",
      subtitle: "美人茶",
      description: "珍貴金線蓮，煥發神采，適合女性",
      benefits: ["煥發神采", "女性保養", "珍貴草本"],
      image: "/images/product-closeup/產品照-005.png"
    },
    {
      id: 7,
      name: "辣木茶",
      subtitle: "女王茶",
      description: "營養豐富的辣木，元氣補給，活力滿分",
      benefits: ["元氣補給", "營養豐富", "提升活力"],
      image: "/images/product-closeup/產品照-006.png"
    },
    {
      id: 8,
      name: "枸杞菊花茶",
      subtitle: "清熱明目茶",
      description: "枸杞搭配菊花，清熱明目，晶亮舒適",
      benefits: ["清熱明目", "晶亮舒適", "經典配方"],
      image: "/images/product-closeup/產品照-007.png"
    },
    {
      id: 9,
      name: "桑葉苦瓜茶",
      subtitle: "三降茶",
      description: "桑葉與苦瓜完美搭配，幫助代謝穩定",
      benefits: ["幫助代謝", "穩定維持", "天然配方"],
      image: "/images/product-closeup/產品照-008.png"
    },
    {
      id: 10,
      name: "桑葉茶",
      subtitle: "油糖雙切茶",
      description: "純正桑葉，餐後解膩，清爽口感",
      benefits: ["餐後解膩", "清爽口感", "純正桑葉"],
      image: "/images/product-closeup/產品照-009.png"
    }
  ];

  return (
    <div className="page-container">
      {/* Hero */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title">十款精選草本茶</h1>
          <p className="hero-subtitle">三十年市場經驗的智慧結晶，每款都針對現代人的需求精心調配</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">我們的產品</h2>
            <p className="section-description">
              從傳統市場到線上平台，不變的是對品質的堅持與對客人的用心
            </p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-img"
                  />
                  <div className="product-badge">
                    <Leaf className="icon-small" />
                  </div>
                </div>
                
                <div className="product-content">
                  <div className="product-header">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-subtitle">{product.subtitle}</p>
                  </div>
                  
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-benefits">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        <Check className="icon-tiny" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="product-footer">
                    <button className="btn btn-secondary">
                      了解更多
                    </button>
                    <div className="product-rating">
                      <Star className="icon-tiny filled" />
                      <Star className="icon-tiny filled" />
                      <Star className="icon-tiny filled" />
                      <Star className="icon-tiny filled" />
                      <Star className="icon-tiny" />
                      <span className="rating-text">市場熱銷</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-container {
          min-height: 100vh;
          padding-top: 5rem;
        }
        
        .hero-section {
          background: linear-gradient(to bottom right, 
            var(--green-800), 
            var(--emerald-700)
          );
          color: white;
          padding: 4rem 0;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          opacity: 0.9;
          max-width: 48rem;
          margin: 0 auto;
        }
        
        .section-padding {
          padding: 4rem 0;
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
          margin: 0 auto 2rem;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
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
          position: relative;
          height: 250px;
          overflow: hidden;
        }
        
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        
        .product-card:hover .product-img {
          transform: scale(1.05);
        }
        
        .product-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--green-500);
          color: white;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
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
        
        .product-benefits {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--green-50);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          color: var(--green-700);
        }
        
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .product-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .rating-text {
          margin-left: 0.5rem;
          color: var(--stone-500);
          font-size: 0.875rem;
        }
        
        .icon-small {
          width: 1.5rem;
          height: 1.5rem;
        }
        
        .icon-tiny {
          width: 1rem;
          height: 1rem;
        }
        
        .icon-tiny.filled {
          color: #fbbf24;
        }
        
        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: var(--green-600);
          color: white;
          border-radius: 0.5rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn:hover {
          background: var(--green-700);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
        }
        
        .btn-secondary {
          background: white;
          color: var(--green-700);
          border: 2px solid var(--green-200);
        }
        
        .btn-secondary:hover {
          background: var(--green-50);
          border-color: var(--green-300);
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}