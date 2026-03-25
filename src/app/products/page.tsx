import { Navbar, Section, SectionHeader, SectionContent, Card, CardHeader, CardContent, CardFooter, Heading, Text, Button, ImageGallery, ProductGallery } from '@/components/ui';
import { Leaf, Heart, Star, Package, Clock, Award, ShoppingBag, Filter, ChevronRight, Check, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { productCloseupImages, productPackagingImages, getProductImage } from '@/lib/images';

export default function ProductsPage() {
  // 所有產品
  const allProducts = [
    {
      id: 'qiyedan',
      name: '七葉膽茶',
      subtitle: '強身茶',
      description: '精選七葉膽，溫和滋補，適合日常保健。三十年市場驗證，增強體力首選。',
      image: productCloseupImages['七葉膽茶'],
      benefits: ['增強體力', '促進代謝', '溫和滋補', '日常保健'],
      ingredients: ['七葉膽', '甘草', '枸杞'],
      brewing: '熱水沖泡5-8分鐘',
      rating: 4.8,
      reviews: 128,
      price: 350,
      unit: '300g/包',
      tag: '熱銷冠軍',
      featured: true,
      category: '滋補類',
    },
    {
      id: 'yitiaogen',
      name: '一條根茶',
      subtitle: '舒緩茶',
      description: '傳統舒緩配方，適合長時間工作或運動後飲用。',
      image: productCloseupImages['一條根茶'],
      benefits: ['舒緩放鬆', '幫助恢復', '傳統配方'],
      ingredients: ['一條根', '紅棗', '桂圓'],
      brewing: '熱水沖泡10分鐘',
      rating: 4.6,
      reviews: 89,
      price: 320,
      unit: '300g/包',
      tag: '經典配方',
      featured: true,
      category: '舒緩類',
    },
    {
      id: 'luoshenhua',
      name: '洛神花茶',
      subtitle: '纖體美顏茶',
      description: '新鮮洛神花，酸甜可口，養顏美容，女性最愛。',
      image: productCloseupImages['洛神花茶'],
      benefits: ['美容養顏', '幫助消化', '豐富維生素', '酸甜口感'],
      ingredients: ['洛神花', '冰糖', '陳皮'],
      brewing: '熱水沖泡3-5分鐘',
      rating: 4.7,
      reviews: 156,
      price: 280,
      unit: '250g/包',
      tag: '女性最愛',
      featured: true,
      category: '美容類',
    },
    {
      id: 'jijiaoci',
      name: '雞角刺茶',
      subtitle: '清熱茶',
      description: '傳統清熱配方，適合天氣炎熱或身體燥熱時飲用。',
      image: productCloseupImages['雞角刺茶'],
      benefits: ['清熱解毒', '降火氣', '傳統智慧'],
      ingredients: ['雞角刺', '菊花', '甘草'],
      brewing: '熱水沖泡5分鐘',
      rating: 4.5,
      reviews: 67,
      price: 300,
      unit: '300g/包',
      tag: '季節限定',
      category: '清熱類',
    },
    {
      id: 'yuxingcao',
      name: '魚腥草茶',
      subtitle: '保健茶',
      description: '傳統保健草本，適合換季或身體不適時飲用。',
      image: productCloseupImages['魚腥草茶'],
      benefits: ['保健養生', '增強抵抗力', '傳統配方'],
      ingredients: ['魚腥草', '薄荷', '甘草'],
      brewing: '熱水沖泡8分鐘',
      rating: 4.4,
      reviews: 54,
      price: 290,
      unit: '300g/包',
      tag: '保健首選',
      category: '保健類',
    },
    {
      id: 'jinxianlian',
      name: '金線蓮茶',
      subtitle: '晶亮茶',
      description: '珍貴金線蓮，適合需要晶亮保健的現代人。',
      image: productCloseupImages['金線蓮茶'],
      benefits: ['晶亮保健', '珍貴原料', '溫和滋補'],
      ingredients: ['金線蓮', '枸杞', '紅棗'],
      brewing: '熱水沖泡10分鐘',
      rating: 4.7,
      reviews: 92,
      price: 450,
      unit: '200g/包',
      tag: '珍貴原料',
      category: '晶亮類',
    },
    {
      id: 'lamu',
      name: '辣木茶',
      subtitle: '活力茶',
      description: '營養豐富的辣木，提供日常活力與營養補充。',
      image: productCloseupImages['辣木茶'],
      benefits: ['補充營養', '增強活力', '豐富礦物質'],
      ingredients: ['辣木葉', '綠茶', '薄荷'],
      brewing: '熱水沖泡3分鐘',
      rating: 4.5,
      reviews: 78,
      price: 320,
      unit: '250g/包',
      tag: '營養豐富',
      category: '活力類',
    },
    {
      id: 'gouqijuhua',
      name: '枸杞菊花茶',
      subtitle: '清熱明目茶',
      description: '枸杞搭配菊花，清熱明目，辦公室必備，經典不敗。',
      image: productCloseupImages['枸杞菊花茶'],
      benefits: ['清熱明目', '晶亮舒適', '經典配方', '辦公室必備'],
      ingredients: ['枸杞', '菊花', '冰糖'],
      brewing: '熱水沖泡5分鐘',
      rating: 4.6,
      reviews: 203,
      price: 270,
      unit: '300g/包',
      tag: '經典不敗',
      category: '明目類',
    },
    {
      id: 'sangyekugua',
      name: '桑葉苦瓜茶',
      subtitle: '平衡茶',
      description: '桑葉與苦瓜的完美搭配，幫助身體平衡與調理。',
      image: productCloseupImages['桑葉苦瓜茶'],
      benefits: ['幫助平衡', '傳統智慧', '溫和調理'],
      ingredients: ['桑葉', '苦瓜', '甘草'],
      brewing: '熱水沖泡8分鐘',
      rating: 4.4,
      reviews: 61,
      price: 310,
      unit: '300g/包',
      tag: '平衡調理',
      category: '平衡類',
    },
    {
      id: 'sangye',
      name: '桑葉茶',
      subtitle: '清新茶',
      description: '單純桑葉，清新口感，適合喜歡簡單純粹的您。',
      image: productCloseupImages['桑葉茶'],
      benefits: ['清新口感', '簡單純粹', '日常飲用'],
      ingredients: ['桑葉'],
      brewing: '熱水沖泡3分鐘',
      rating: 4.3,
      reviews: 45,
      price: 260,
      unit: '300g/包',
      tag: '簡單純粹',
      category: '清新類',
    },
  ];

  // 產品分類
  const categories = [
    { id: 'all', name: '全部產品', count: 10 },
    { id: 'featured', name: '精選推薦', count: 3 },
    { id: 'zibu', name: '滋補類', count: 2 },
    { id: 'shuhuan', name: '舒緩類', count: 1 },
    { id: 'meirong', name: '美容類', count: 1 },
    { id: 'qingre', name: '清熱類', count: 2 },
    { id: 'baojian', name: '保健類', count: 4 },
  ];

  // 熱銷產品（前3名）
  const topProducts = allProducts
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

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
            <Leaf className="w-4 h-4 mr-2" />
            十款精選 · 三十年驗證
          </div>
          
          <Heading level={1} className="text-white mb-4">
            劉媽媽の草本茶
          </Heading>
          
          <Text variant="lead" className="text-white/90 mb-8 max-w-3xl mx-auto">
            從傳統市場到您的茶杯，每一款茶都是三十年市場智慧的結晶。<br />
            不只是商品，更是劉媽媽對品質的堅持與對客人的關心。
          </Text>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#featured">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-brand-deep hover:bg-white/90"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                立即選購
              </Button>
            </Link>
            
            <Link href="/story">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Heart className="w-4 h-4 mr-2" />
                品牌故事
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* 產品特色 */}
      <Section padding="lg">
        <SectionHeader
          title="為什麼選擇劉媽媽的茶？"
          subtitle="三十年市場經驗，不只是賣茶，更是品質的保證"
          align="center"
        />
        
        <SectionContent columns={4} gap="md">
          <Card hoverable padding="lg" className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-brand rounded-2xl mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <Heading level={4} className="mb-3">市場驗證</Heading>
            <Text variant="body" color="muted">
              在傳統市場銷售三十年，品質經過無數顧客驗證
            </Text>
          </Card>
          
          <Card hoverable padding="lg" className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <Heading level={4} className="mb-3">純天然</Heading>
            <Text variant="body" color="muted">
              無添加、無防腐劑，每一口都是自然的味道
            </Text>
          </Card>
          
          <Card hoverable padding="lg" className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <Heading level={4} className="mb-3">傳統工藝</Heading>
            <Text variant="body" color="muted">
              遵循古法烘培，保留草本最原始的香氣與功效
            </Text>
          </Card>
          
          <Card hoverable padding="lg" className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <Heading level={4} className="mb-3">溫暖服務</Heading>
            <Text variant="body" color="muted">
              像朋友一樣的關心，根據您的需求推薦適合的茶
            </Text>
          </Card>
        </SectionContent>
      </Section>

      {/* 熱銷產品 */}
      <Section id="featured" background="gray" padding="lg">
        <SectionHeader
          title="熱銷推薦"
          subtitle="顧客最愛的三款茶，三十年市場驗證的經典"
          align="center"
        />
        
        <SectionContent columns={3} gap="lg">
          {topProducts.map((product) => (
            <Card key={product.id} hoverable padding="none" className="overflow-hidden">
              {/* 產品圖片 */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-brand-emerald text-white text-sm font-semibold rounded-full">
                  {product.tag}
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                  {product.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <Heading level={4} className="mb-1">
                    {product.name}
                  </Heading>
                  <Text variant="body" color="brand" weight="semibold">
                    {product.subtitle}
                  </Text>
                </div>
                
                <Text variant="body" color="muted" className="mb-4 line-clamp-2">
                  {product.description}
                </Text>
                
                {/* 功效標籤 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.slice(0, 3).map((benefit, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-brand-light/20 text-brand-deep text-sm rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                {/* 評分和價格 */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews}則評價)
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-brand-deep">
                      NT${product.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.unit}
                    </div>
                  </div>
                </div>
                
                {/* 沖泡方式 */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>沖泡：{product.brewing}</span>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="primary" size="md" fullWidth>
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    立即購買
                  </Button>
                  
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" size="md">
                      詳細資訊
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </SectionContent>
      </Section>

      {/* 所有產品 */}
      <Section padding="lg">
        <SectionHeader
          title="全部產品"
          subtitle="十款精選草本茶，滿足不同需求"
          align="center"
        />
        
        {/* 分類篩選 */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-4 py-2 rounded-full border border-gray-300 hover:border-brand-emerald hover:text-brand-emerald transition-colors"
            >
              {category.name}
              <span className="ml-2 text-sm text-gray-500">
                ({category.count})
              </span>
            </button>
          ))}
        </div>
        
        {/* 產品網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <Card key={product.id} hoverable className="h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {product.featured && (
                  <div className="absolute top-3 left-3 px-2                  py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                    精選
                  </div>
                )}
              </div>
              
              <CardContent className="flex-1 p-4">
                <div className="mb-2">
                  <Heading level={5} className="mb-1">
                    {product.name}
                  </Heading>
                  <Text variant="small" color="brand" weight="semibold">
                    {product.subtitle}
                  </Text>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? 'text-amber-500 fill-amber-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs text-gray-600">
                    {product.rating}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.benefits.slice(0, 2).map((benefit, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <div className="text-right">
                  <div className="text-xl font-bold text-brand-deep">
                    NT${product.price}
                  </div>
                  <div className="text-xs text-gray-500">
                    {product.unit}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" fullWidth>
                  加入詢問
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* 產品包裝展示 */}
      <Section background="gray" padding="lg">
        <SectionHeader
          title="我們的包裝"
          subtitle="每一包都是手工秤重、用心包裝"
          align="center"
        />
        
        <ImageGallery
          images={productPackagingImages}
          columns={3}
          gap="md"
          title="用心包裝，品質保證"
          description="從原料到包裝，每一個細節都不馬虎"
          category="產品包裝"
        />
      </Section>

      {/* 購買指南 */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-brand-light/20 to-emerald-100/20 border border-brand-light/50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-brand-emerald text-white rounded-full font-semibold text-sm mb-4">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  購買方式
                </div>
                
                <Heading level={2} className="mb-4">
                  如何購買劉媽媽的茶？
                </Heading>
                
                <Text variant="lead" className="text-gray-700">
                  三種方式，選擇最適合您的購買管道
                </Text>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card hoverable padding="lg" className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 mx-auto">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <Heading level={4} className="mb-3">LINE官方帳號</Heading>
                  <Text variant="body" color="muted" className="mb-4">
                    @910jrwoy<br />
                    一對一諮詢，即時回覆
                  </Text>
                  <Button variant="outline" size="sm">
                    加入LINE
                  </Button>
                </Card>
                
                <Card hoverable padding="lg" className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 mx-auto">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <Heading level={4} className="mb-3">蝦皮購物</Heading>
                  <Text variant="body" color="muted" className="mb-4">
                    線上商城<br />
                    便利購買，超商取貨
                  </Text>
                  <Button variant="outline" size="sm">
                    前往蝦皮
                  </Button>
                </Card>
                
                <Card hoverable padding="lg" className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 mx-auto">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <Heading level={4} className="mb-3">7-11賣貨便</Heading>
                  <Text variant="body" color="muted" className="mb-4">
                    超商取貨<br />
                    最方便，免運費
                  </Text>
                  <Button variant="outline" size="sm">
                    前往賣貨便
                  </Button>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Text variant="body" color="muted">
                  有任何問題？歡迎隨時聯絡我們！
                </Text>
                <div className="mt-4">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      聯絡我們
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
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
            十款精選草本茶 · 三十年市場驗證<br />
            不只是商品，更是溫暖的傳承
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
    </>
  );
}