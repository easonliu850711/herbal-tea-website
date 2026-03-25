'use client'

import { useState } from 'react';
import { Navbar, Section, SectionHeader, SectionContent, Heading, Text, Button } from '@/components/ui';
import { HerbCard, HerbModal } from '@/components/ui/HerbCard';
import { Filter, Search, BookOpen, Leaf, Heart, Coffee, Zap, Brain } from 'lucide-react';
import Link from 'next/link';
import { herbIngredients, getAllCategories, getHerbsByCategory, getRandomHerbs, type HerbIngredient } from '@/lib/herbs';

export default function TipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedHerb, setSelectedHerb] = useState<HerbIngredient | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['all', ...getAllCategories()];
  const categoryLabels: Record<string, string> = {
    all: '全部',
    果實: '果實類',
    根莖: '根莖類',
    葉類: '葉類',
    花類: '花類',
    種子: '種子類',
    其他: '其他',
  };
  
  // 過濾草本
  const filteredHerbs = herbIngredients.filter(herb => {
    const matchesCategory = selectedCategory === 'all' || herb.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      herb.chineseName.includes(searchQuery) || 
      herb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      herb.description.includes(searchQuery) ||
      herb.benefits.some(benefit => benefit.includes(searchQuery));
    
    return matchesCategory && matchesSearch;
  });
  
  // 隨機推薦草本
  const recommendedHerbs = getRandomHerbs(3);
  
  // 熱門草本（按配對產品數量排序）
  const popularHerbs = [...herbIngredients]
    .sort((a, b) => b.pairing.length - a.pairing.length)
    .slice(0, 4);

  return (
    <>
      {/* 導航列 */}
      <Navbar />

      {/* Hero */}
      <Section
        background="gradient"
        padding="xl"
        className="text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white font-semibold text-sm mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            草本成分百科
          </div>
          
          <Heading level={1} className="text-white mb-4">
            認識茶中的每一個小物
          </Heading>
          
          <Text variant="lead" className="text-white/90 mb-8 max-w-3xl mx-auto">
            劉媽媽三十年經驗，精心挑選每一種添加小物<br />
            點擊認識仙楂、葛根、枸杞... 背後的用心與故事
          </Text>
          
          {/* 搜尋框 */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜尋草本成分（如：仙楂、葛根）"
                className="w-full pl-12 pr-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/30 bg-white/10 text-white placeholder-white/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#herbs">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-brand-deep hover:bg-white/90"
              >
                <Leaf className="w-4 h-4 mr-2" />
                探索草本
              </Button>
            </Link>
            
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Coffee className="w-4 h-4 mr-2" />
                查看產品
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* 推薦草本 */}
      <Section padding="lg">
        <SectionHeader
          title="劉媽媽推薦"
          subtitle="三十年市場驗證，這些草本最受客人喜愛"
          align="center"
        />
        
        <SectionContent columns={3} gap="md">
          {recommendedHerbs.map((herb) => (
            <HerbCard
              key={herb.id}
              herb={herb}
              onClick={() => setSelectedHerb(herb)}
            />
          ))}
        </SectionContent>
      </Section>

      {/* 分類篩選 */}
      <Section background="gray" padding="lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-gray-600 mr-2" />
              <Heading level={5}>分類篩選</Heading>
            </div>
            
            <Text variant="small" color="muted">
              共 {filteredHerbs.length} 種草本成分
            </Text>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`
                  px-4 py-2 rounded-full border transition-all
                  ${selectedCategory === category
                    ? 'bg-brand-emerald text-white border-brand-emerald'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-brand-emerald hover:text-brand-emerald'
                  }
                `}
                onClick={() => setSelectedCategory(category)}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
          
          {/* 熱門草本 */}
          {selectedCategory === 'all' && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Zap className="w-5 h-5 text-amber-500 mr-2" />
                <Heading level={5}>熱門草本</Heading>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {popularHerbs.map((herb) => (
                  <HerbCard
                    key={herb.id}
                    herb={herb}
                    compact
                    onClick={() => setSelectedHerb(herb)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* 草本網格 */}
      <Section id="herbs" padding="lg">
        {filteredHerbs.length > 0 ? (
          <>
            <div className="mb-8">
              <Heading level={3} className="mb-2">
                {selectedCategory === 'all' ? '全部草本成分' : categoryLabels[selectedCategory]}
              </Heading>
              <Text variant="body" color="muted">
                點擊任何一個小區塊，查看詳細介紹
              </Text>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredHerbs.map((herb) => (
                <HerbCard
                  key={herb.id}
                  herb={herb}
                  onClick={() => setSelectedHerb(herb)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <Heading level={4} className="mb-2">
              找不到相關草本
            </Heading>
            <Text variant="body" color="muted" className="mb-6">
              試試其他關鍵字或分類
            </Text>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              清除篩選
            </Button>
          </div>
        )}
      </Section>

      {/* 使用指南 */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-brand-emerald text-white rounded-full font-semibold text-sm mb-4">
              <Brain className="w-4 h-4 mr-2" />
              使用指南
            </div>
            
            <Heading level={2} className="mb-4">
              如何善用草本成分百科？
            </Heading>
            
            <Text variant="lead" className="text-gray-700">
              劉媽媽三十年經驗分享，讓您喝得聰明又健康
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">1</div>
              <Heading level={5} className="mb-3">認識成分</Heading>
              <Text variant="body" color="muted">
                點擊任何草本小區塊，了解它的功效、使用方式和劉媽媽的挑選標準
              </Text>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">2</div>
              <Heading level={5} className="mb-3">搭配選擇</Heading>
              <Text variant="body" color="muted">
                查看每種草本常搭配的產品，選擇最適合您需求的組合
              </Text>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">3</div>
              <Heading level={5} className="mb-3">諮詢專家</Heading>
              <Text variant="body" color="muted">
                仍有疑問？透過LINE直接詢問劉媽媽，獲得三十年經驗的專業建議
              </Text>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Text variant="body" color="muted" className="mb-4">
              劉媽媽：「每一種草本都有它的故事，了解它們，喝茶會更有趣。」
            </Text>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary">
                  聯絡劉媽媽
                </Button>
              </Link>
              
              <Link href="/story">
                <Button variant="outline">
                  品牌故事
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 頁尾 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="w-6 h-6 text-emerald-400" />
            <span className="text-xl font-bold">劉媽媽の草本茶</span>
          </div>
          
          <Text variant="body" color="muted" className="text-gray-400 mb-6">
            草本成分百科 · 三十年經驗結晶<br />
            不只是喝茶，更是學習與享受
          </Text>
          
          <div className="space-y-2 text-gray-500">
            <Text variant="small">
              茶葉養大的孩子，回饋母親的初心
            </Text>
            <Text variant="small">
              一杯茶，一份愛，劉媽媽的諾貝爾級奉獻
            </Text>
          </div>
        </div>
      </footer>

      {/* 草本詳情模態框 */}
      <HerbModal
        herb={selectedHerb}
        isOpen={!!selectedHerb}
        onClose={() => setSelectedHerb(null)}
      />
    </>
  );
}