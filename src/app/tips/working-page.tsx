'use client'

import { useState } from 'react';
import { Search, Filter, Heart, Leaf } from 'lucide-react';

// 簡單的草本資料 - 不使用複雜導入
const herbs = [
  {
    id: 1,
    name: '仙楂',
    category: '果實',
    description: '幫助消化，酸甜開胃，劉媽媽特別挑選的優質仙楂。',
    benefits: ['幫助消化', '酸甜開胃', '促進食慾'],
    color: 'bg-rose-100 text-rose-800 border-rose-200'
  },
  {
    id: 2,
    name: '葛根',
    category: '根莖',
    description: '清熱解毒，生津止渴，傳統中藥常用材料。',
    benefits: ['清熱解毒', '生津止渴', '解酒護肝'],
    color: 'bg-amber-100 text-amber-800 border-amber-200'
  },
  {
    id: 3,
    name: '枸杞',
    category: '果實',
    description: '明目養肝，增強免疫力，劉媽媽三十年經驗挑選。',
    benefits: ['明目養肝', '增強免疫力', '抗衰老'],
    color: 'bg-red-100 text-red-800 border-red-200'
  },
  {
    id: 4,
    name: '菊花',
    category: '花類',
    description: '清熱明目，降火氣，適合長時間用眼的人。',
    benefits: ['清熱明目', '降火氣', '放鬆神經'],
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  },
  {
    id: 5,
    name: '紅棗',
    category: '果實',
    description: '補氣養血，安神助眠，女性養生首選。',
    benefits: ['補氣養血', '安神助眠', '美容養顏'],
    color: 'bg-red-100 text-red-800 border-red-200'
  },
  {
    id: 6,
    name: '桂圓',
    category: '果實',
    description: '補心安神，改善睡眠，溫暖身體。',
    benefits: ['補心安神', '改善睡眠', '溫暖身體'],
    color: 'bg-brown-100 text-brown-800 border-brown-200'
  }
];

export default function WorkingTipsPage() {
  const [selectedHerb, setSelectedHerb] = useState<any>(null);
  const [search, setSearch] = useState('');
  const [liked, setLiked] = useState<number[]>([]);

  const filteredHerbs = herbs.filter(herb =>
    herb.name.toLowerCase().includes(search.toLowerCase()) ||
    herb.description.toLowerCase().includes(search.toLowerCase())
  );

  const toggleLike = (id: number) => {
    setLiked(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* 導航 */}
      <nav className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="w-6 h-6 text-green-600" />
              <h1 className="text-xl font-bold text-green-800">草本小撇步</h1>
            </div>
            <div className="text-sm text-gray-500">
              劉媽媽三十年經驗分享
            </div>
          </div>
        </div>
      </nav>

      {/* 主內容 */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* 標題區 */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            探索草本世界的奧秘
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            劉媽媽三十年市場經驗，精選10種優質草本添加物。
            點擊任何草本，查看詳細介紹和劉媽媽的使用建議。
          </p>
        </div>

        {/* 搜尋區 */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜尋草本名稱或功效..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* 草本網格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredHerbs.map((herb) => (
            <div
              key={herb.id}
              className={`${herb.color} rounded-xl p-5 border-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              onClick={() => setSelectedHerb(herb)}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-white/50 text-xs font-medium mb-2">
                    {herb.category}
                  </div>
                  <h3 className="text-xl font-bold">{herb.name}</h3>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(herb.id);
                  }}
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  <Heart className={`w-5 h-5 ${liked.includes(herb.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>
              </div>
              
              <p className="text-sm mb-4 line-clamp-2">{herb.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {herb.benefits.slice(0, 2).map((benefit, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white/50 rounded text-xs">
                    {benefit}
                  </span>
                ))}
              </div>
              
              <div className="text-xs text-gray-600">
                點擊查看詳細介紹 →
              </div>
            </div>
          ))}
        </div>

        {/* 提示 */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>✨ 共 {herbs.length} 種草本添加物 | 🔍 可搜尋名稱或功效 | ❤️ 點擊愛心收藏</p>
        </div>
      </main>

      {/* 模態框 - 詳細介紹 */}
      {selectedHerb && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-2">
                    {selectedHerb.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedHerb.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedHerb(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">劉媽媽的話：</h4>
                <p className="text-gray-600">{selectedHerb.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">主要功效：</h4>
                <ul className="space-y-2">
                  {selectedHerb.benefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">使用建議：</h4>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    • 水溫：85-95°C
                    <br />
                    • 時間：浸泡3-5分鐘
                    <br />
                    • 用量：每杯茶添加1-2克
                    <br />
                    • 最佳搭配：與決明子、菊花一起沖泡
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <button
                  onClick={() => toggleLike(selectedHerb.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${liked.includes(selectedHerb.id) ? 'bg-rose-100 text-rose-700' : 'bg-gray-100 text-gray-700'}`}
                >
                  <Heart className={`w-4 h-4 ${liked.includes(selectedHerb.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{liked.includes(selectedHerb.id) ? '已收藏' : '加入收藏'}</span>
                </button>
                <button
                  onClick={() => setSelectedHerb(null)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  關閉
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 頁尾 */}
      <footer className="mt-12 py-6 border-t border-green-100 text-center text-gray-500 text-sm">
        <p>© 2024 劉媽媽的草本茶 · 三十年市場經驗 · 品質保證</p>
        <p className="mt-1">傳統市場的溫暖記憶，現代生活的健康選擇</p>
      </footer>
    </div>
  );
}