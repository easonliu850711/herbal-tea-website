'use client'

import React from 'react'
import { Leaf, Heart, Clock, Users, Award, Coffee } from 'lucide-react'

export default function StoryPageSimple() {
  const storySections = [
    {
      title: "從一杯決明子茶開始",
      icon: <Coffee className="icon" />,
      content: "「以前我媽只賣這個決明子茶，就是靠這個把我們養大的。」這句話背後，是三十年的市場風雨。每天早上四點起床，準備茶包、裝箱、趕往屏東高雄各地的傳統市場。艷陽下揮汗如雨，只為了給客人一杯最純粹的草本茶。",
      year: "1994-2024"
    },
    {
      title: "市場裡的溫暖記憶",
      icon: <Users className="icon" />,
      content: "從小跟著媽媽跑市場，看著她與客人像朋友一樣聊天。不只是賣茶，更是分享健康知識、關心客人生活。許多客人一買就是二十年，從年輕喝到當爺爺奶奶。這種人與人之間的溫暖連結，是現代電商無法取代的。",
      year: "三十年累積"
    },
    {
      title: "傳統智慧的現代轉型",
      icon: <Leaf className="icon" />,
      content: "隨著傳統市場式微，我們思考如何讓劉媽媽的智慧繼續傳承。從單一決明子茶，發展出十款專業草本茶。每一款都是市場經驗的結晶，針對現代人的需求精心調配。",
      year: "2023-2024"
    },
    {
      title: "每一杯茶都是感恩",
      icon: <Heart className="icon" />,
      content: "這不只是生意，這是對媽媽養育之恩的回報。每一包茶都承載著感恩的心，希望將這份溫暖傳遞給更多人。從傳統市場到線上平台，不變的是對品質的堅持與對客人的用心。",
      year: "永續傳承"
    }
  ];

  return (
    <div className="page-container">
      {/* Hero */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title">劉媽媽の草本茶故事</h1>
          <p className="hero-subtitle">三十年傳統市場經驗的溫暖傳承</p>
        </div>
      </section>

      {/* Story Sections */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">我們的旅程</h2>
            <p className="section-description">
              從一杯決明子茶開始，到十款專業草本茶，這是三十年市場經驗的故事
            </p>
          </div>

          <div className="story-grid">
            {storySections.map((section, index) => (
              <div key={index} className="story-card">
                <div className="story-icon">
                  {section.icon}
                </div>
                
                <div className="story-content">
                  <div className="story-year">{section.year}</div>
                  <h3 className="story-title">{section.title}</h3>
                  <p className="story-text">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">我們的價值觀</h2>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <Clock className="icon-large" />
              <h3>堅持三十年</h3>
              <p>三十年如一日，對品質的堅持從未改變</p>
            </div>
            
            <div className="value-card">
              <Heart className="icon-large" />
              <h3>用心對待</h3>
              <p>不只是賣茶，更是分享健康與溫暖</p>
            </div>
            
            <div className="value-card">
              <Award className="icon-large" />
              <h3>市場認證</h3>
              <p>三十年市場經驗，顧客口碑是最好的證明</p>
            </div>
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
          margin: 0 auto;
        }
        
        .story-grid {
          display: grid;
          gap: 2rem;
          max-width: 64rem;
          margin: 0 auto;
        }
        
        .story-card {
          display: flex;
          gap: 2rem;
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .story-icon {
          flex-shrink: 0;
          width: 4rem;
          height: 4rem;
          background: var(--green-100);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .story-icon :global(svg) {
          width: 2rem;
          height: 2rem;
          color: var(--green-600);
        }
        
        .story-year {
          color: var(--green-600);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .story-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--stone-900);
          margin-bottom: 1rem;
        }
        
        .story-text {
          color: var(--stone-600);
          line-height: 1.6;
        }
        
        .values-section {
          background: linear-gradient(to bottom right, 
            var(--green-50), 
            var(--emerald-50)
          );
          padding: 4rem 0;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 64rem;
          margin: 0 auto;
        }
        
        .value-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .value-card :global(svg) {
          width: 3rem;
          height: 3rem;
          color: var(--green-600);
          margin-bottom: 1rem;
        }
        
        .value-card h3 {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--stone-900);
          margin-bottom: 0.75rem;
        }
        
        .value-card p {
          color: var(--stone-600);
        }
        
        .icon {
          width: 2rem;
          height: 2rem;
        }
        
        .icon-large {
          width: 3rem;
          height: 3rem;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .story-card {
            flex-direction: column;
            gap: 1rem;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}