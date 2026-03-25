'use client'

import React, { useState } from 'react';
import { X, ExternalLink, Heart, Leaf, Thermometer, Clock, Package } from 'lucide-react';
import { Card, CardContent, Heading, Text, Button } from '.';
import type { HerbIngredient } from '@/lib/herbs';

interface HerbCardProps {
  herb: HerbIngredient;
  compact?: boolean;
  onClick?: (herb: HerbIngredient) => void;
}

const HerbCard: React.FC<HerbCardProps> = ({ herb, compact = false, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  const colorClasses = {
    rose: 'bg-rose-100 text-rose-800 border-rose-200',
    brown: 'bg-amber-100 text-amber-800 border-amber-200',
    red: 'bg-red-100 text-red-800 border-red-200',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    darkred: 'bg-red-200 text-red-900 border-red-300',
    amber: 'bg-amber-100 text-amber-800 border-amber-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    green: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    lightgreen: 'bg-green-100 text-green-800 border-green-200',
  };

  const handleClick = () => {
    if (onClick) {
      onClick(herb);
    }
  };

  if (compact) {
    return (
      <div
        className={`
          relative
          p-4
          rounded-xl
          border
          cursor-pointer
          transition-all
          hover:scale-105
          hover:shadow-md
          ${colorClasses[herb.color as keyof typeof colorClasses]}
        `}
        onClick={handleClick}
      >
        <div className="flex items-center">
          <div className="text-2xl mr-3">{herb.icon}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Heading level={6} className="mb-1">
                {herb.chineseName}
              </Heading>
              <span className="text-xs px-2 py-1 bg-white/50 rounded-full">
                {herb.category}
              </span>
            </div>
            <Text variant="small" color="muted">
              {herb.name}
            </Text>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card
      hoverable
      className="cursor-pointer transition-transform hover:-translate-y-1"
      onClick={handleClick}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="text-3xl mr-3">{herb.icon}</div>
            <div>
              <Heading level={5} className="mb-1">
                {herb.chineseName}
              </Heading>
              <Text variant="small" color="muted">
                {herb.name}
              </Text>
            </div>
          </div>
          
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            aria-label={isLiked ? '取消喜歡' : '加入喜歡'}
          >
            <Heart
              className={`w-5 h-5 ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'
              }`}
            />
          </button>
        </div>
        
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
            colorClasses[herb.color as keyof typeof colorClasses]
          }`}>
            {herb.category}
          </span>
        </div>
        
        <Text variant="body" color="muted" className="mb-4 line-clamp-3">
          {herb.description}
        </Text>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Thermometer className="w-4 h-4 mr-2" />
            <span>水溫：{herb.temperature}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>時間：{herb.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Package className="w-4 h-4 mr-2" />
            <span>用量：{herb.usage.split('，')[0]}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {herb.benefits.slice(0, 3).map((benefit, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {benefit}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface HerbModalProps {
  herb: HerbIngredient | null;
  isOpen: boolean;
  onClose: () => void;
}

const HerbModal: React.FC<HerbModalProps> = ({ herb, isOpen, onClose }) => {
  if (!herb || !isOpen) return null;

  const colorClasses = {
    rose: 'bg-rose-50 border-rose-200 text-rose-800',
    brown: 'bg-amber-50 border-amber-200 text-amber-800',
    red: 'bg-red-50 border-red-200 text-red-800',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    darkred: 'bg-red-100 border-red-300 text-red-900',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    green: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    lightgreen: 'bg-green-50 border-green-200 text-green-800',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 關閉按鈕 */}
        <button
          className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
          onClick={onClose}
          aria-label="關閉"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        
        {/* 內容 */}
        <div className="p-6 md:p-8">
          {/* 標頭 */}
          <div className="flex items-start mb-6">
            <div className="text-4xl mr-4">{herb.icon}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <Heading level={3} className="mb-1">
                    {herb.chineseName}
                  </Heading>
                  <Text variant="lead" color="muted">
                    {herb.name}
                  </Text>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  colorClasses[herb.color as keyof typeof colorClasses]
                }`}>
                  {herb.category}
                </span>
              </div>
            </div>
          </div>
          
          {/* 描述 */}
          <div className="mb-6">
            <Heading level={5} className="mb-3">介紹</Heading>
            <Text variant="body" className="text-gray-700 leading-relaxed">
              {herb.description}
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* 功效 */}
            <div>
              <Heading level={5} className="mb-3">主要功效</Heading>
              <ul className="space-y-2">
                {herb.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-brand-emerald rounded-full mr-3"></div>
                    <Text variant="body">{benefit}</Text>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 使用方式 */}
            <div>
              <Heading level={5} className="mb-3">使用方式</Heading>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Thermometer className="w-5 h-5 text-blue-500 mr-3" />
                  <div>
                    <Text weight="semibold">建議水溫</Text>
                    <Text variant="small" color="muted">{herb.temperature}</Text>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-amber-500 mr-3" />
                  <div>
                    <Text weight="semibold">沖泡時間</Text>
                    <Text variant="small" color="muted">{herb.time}</Text>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Package className="w-5 h-5 text-green-500 mr-3" />
                  <div>
                    <Text weight="semibold">用量建議</Text>
                    <Text variant="small" color="muted">{herb.usage}</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 搭配產品 */}
          {herb.pairing.length > 0 && (
            <div className="mb-6">
              <Heading level={5} className="mb-3">常搭配產品</Heading>
              <div className="flex flex-wrap gap-2">
                {herb.pairing.map((product, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-light/30 text-brand-deep rounded-full text-sm"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* 劉媽媽的話 */}
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center mb-2">
              <Leaf className="w-5 h-5 text-brand-emerald mr-2" />
              <Text weight="semibold">劉媽媽的話</Text>
            </div>
            <Text variant="body" color="muted">
              三十年市場經驗告訴我，{herb.chineseName}要挑選{herb.category === '果實' ? '飽滿有光澤' : herb.category === '根莖' ? '粗壯紮實' : '香氣濃郁'}的才是好品質。我特別用心挑選每一批{herb.chineseName}，確保客人喝到的都是最好的。
            </Text>
          </div>
          
          {/* 行動按鈕 */}
          <div className="flex gap-3 mt-8">
            <Button variant="outline" onClick={onClose}>
              關閉
            </Button>
            <Button variant="primary">
              查看相關產品
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HerbCard, HerbModal };