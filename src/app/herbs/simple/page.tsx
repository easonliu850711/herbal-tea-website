// 簡單草本頁面 - 不使用路徑別名
'use client'

import { useState } from 'react';

// 本地資料
const herbs = [
  { id: 1, name: '仙楂', emoji: '🍒', color: 'bg-red-100', description: '幫助消化，酸甜開胃' },
  { id: 2, name: '葛根', emoji: '🌿', color: 'bg-green-100', description: '清熱解毒，舒緩喉嚨' },
  { id: 3, name: '枸杞', emoji: '🔴', color: 'bg-amber-100', description: '明目養肝，增強免疫力' },
  { id: 4, name: '菊花', emoji: '🌼', color: 'bg-yellow-100', description: '清熱降火，舒緩眼睛疲勞' },
  { id: 5, name: '紅棗', emoji: '❤️', color: 'bg-pink-100', description: '補血養氣，溫和滋補' },
  { id: 6, name: '桂圓', emoji: '🍡', color: 'bg-purple-100', description: '安神補血，改善睡眠' },
];

export default function SimpleHerbsPage() {
  const [selectedHerb, setSelectedHerb] = useState<typeof herbs[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4 md:p-8">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
          🌿 草本小撇步 - 簡單版本
        </h1>
        <p className="text-gray-600">
          點擊任何草本卡片查看詳細介紹。這是完全獨立運行的測試版本。
        </p>
      </header>

      <div className="max-w-6xl mx-auto">
        {/* 草本卡片網格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {herbs.map((herb) => (
            <div
              key={herb.id}
              className={`${herb.color} rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-green-200`}
              onClick={() => setSelectedHerb(herb)}
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl mr-3">
                  {herb.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{herb.name}</h3>
                  <p className="text-sm text-gray-600">{herb.description}</p>
                </div>
              </div>
              <div className="text-center">
                <button className="text-green-600 text-sm font-medium hover:text-green-800">
                  點擊查看詳細 →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 狀態顯示 */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <h3 className="font-bold text-green-800 mb-2">✅ 頁面狀態</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 不使用路徑別名 (@/components/ui)</li>
            <li>• 不使用外部組件庫</li>
            <li>• 純React + Tailwind CSS</li>
            <li>• 應該能正常構建和運行</li>
          </ul>
          {selectedHerb && (
            <div className="mt-4 p-3 bg-white rounded-lg border border-green-300">
              <p className="font-medium text-green-700">
                已選擇：<span className="text-lg">{selectedHerb.emoji} {selectedHerb.name}</span>
              </p>
              <p className="text-gray-600 mt-1">{selectedHerb.description}</p>
            </div>
          )}
        </div>

        {/* 測試說明 */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <h4 className="font-bold text-blue-800 mb-2">🔧 測試目的</h4>
          <p className="text-blue-700">
            這個頁面用於驗證Next.js基本功能是否正常。如果這個頁面能正常顯示，
            我們就可以逐步添加更複雜的功能。
          </p>
          <div className="mt-3 flex gap-2">
            <a 
              href="/" 
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              返回首頁
            </a>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              重新整理頁面
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}