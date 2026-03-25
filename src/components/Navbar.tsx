import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          劉媽媽の草本茶
        </div>
        
        <div className="nav-links">
          <Link href="/" className="nav-link">
            首頁
          </Link>
          <Link href="/story" className="nav-link">
            產品故事
          </Link>
          <Link href="/products" className="nav-link">
            主要產品
          </Link>
          <Link href="/tips" className="nav-link">
            草本小撇步
          </Link>
          <Link href="/contact" className="nav-link">
            聯絡
          </Link>
        </div>
      </div>
    </nav>
  );
}