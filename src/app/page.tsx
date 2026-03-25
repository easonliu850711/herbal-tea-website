import { Navbar, Hero, Section, SectionHeader, SectionContent, Card, CardHeader, CardContent, CardFooter, Button, ImageGallery, ProductGallery, Heading, Text } from '@/components/ui';
import { Leaf, Heart, Users, Award, Clock, Package, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { brandingImages, stallImages, interactionImages, productCloseupImages, getRandomStallImage } from '@/lib/images';

export default function HomePage() {
  // 精選產品
  const featuredProducts = [
    {
      name: '七葉膽茶',
      subtitle: '強身茶',
      description: '精選七葉膽，溫和滋補，適合日常保健',
      image: productCloseupImages['七葉膽茶'],
      benefits: ['增強體力', '促進代謝', '溫和滋補'],
      rating: 4.8,
      tag: '熱銷冠軍',
    },
    {
      name: '洛神花茶',
      subtitle: '纖體美顏茶',
      description: '新鮮洛神花，酸甜可口，養顏美容',
      image: productCloseupImages['洛神花茶'],
      benefits: ['美容養顏', '幫助消化', '豐富維生素'],
      rating: 4.7,
      tag: '女性最愛',
    },
    {
      name: '枸杞菊花茶',
      subtitle: '清熱明目茶',
      description: '枸杞搭配菊花，清熱明目，辦公室必備',
      image: productCloseupImages['枸杞菊花茶'],
      benefits: ['清熱明目', '晶亮舒適', '經典配方'],
      rating: 4.6,
      tag: '經典配方',
    },
  ];

  // 品牌價值
  const brandValues = [
    {
      title: '三十年堅持',
      description: '從屏東到台北，一盞茶養大一對姊弟',
      icon: <Clock className="w-8 h-8" />,
      color: 'brand',
    },
    {
      title: '家庭傳承',
      description: '不只是一杯茶，同時也承載一個家庭的故事',
      icon: <Heart className="w-8 h-8" />,
      color: 'pink',
    },
    {
      title: '品質保證',
      description: '純天然無添加，每一口都是自然的味道',
      icon: <Award className="w-8 h-8" />,
      color: 'amber',
    },
    {
      title: '溫暖服務',
      description: '像朋友一樣的關心，三十年不變的溫暖',
      icon: <Users className="w-8 h-8" />,
      color: 'emerald',
    },
  ];

  // 顧客評價
  const testimonials = [
    {
      name: '張小姐',
      role: '上班族，喝了3年',
      content: '每天上班泡一杯七葉膽茶，精神好很多。劉媽媽的茶真的不一樣，喝得出來是用心挑選的原料。',
      rating: 5,
    },
    {
      name: '陳先生',
      role: '工程師，喝了2年',
      content: '枸杞菊花茶拯救了我的眼睛！每天看電腦超過10小時，現在眼睛不會那麼乾澀了。',
      rating: 5,
    },
    {
      name: '林媽媽',
      role: '家庭主婦，喝了5年',
      content: '從傳統市場買到現在，品質一直沒變。劉媽媽就像朋友一樣，會根據你的狀況推薦適合的茶。',
      rating: 5,
    },
  ];

  return (
    <>
      {/* 導航列 */}
      <Navbar />

      {/* Hero 主視覺 */}
      <Hero
        title="從屏東到台北，一盞茶養大一對姊弟"
        subtitle="不只是一杯茶，同時也承載一個家庭的故事"
        description="三十年傳統市場經驗 · 溫暖傳承"
        backgroundImage={getRandomStallImage()}
        backgroundType="slideshow"
        ctaPrimary={{
          text: '探索產品',
          href: '/products',
          icon: <Leaf className="w-4 h-4" />,
        }}
        ctaSecondary={{
          text: '品牌故事',
          href: '/story',
          icon: <Heart className="w-4 h-4" />,
        }}
        height="large"
        align="center"
      />

      {/* 品牌價值 */}
      <Section background="gray" padding="lg">
        <SectionHeader
          title="我們的承諾"
          subtitle="一杯茶，一份愛，劉媽媽的諾貝爾級奉獻"
          align="center"
        />
        
        <SectionContent columns={4} gap="md">
          {brandValues.map((value, index) => (
            <Card key={index} hoverable padding="lg" className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                value.color === 'brand' ? 'bg-gradient-brand' :
                value.color === 'pink' ? 'bg-gradient-to-br from-pink-500 to-rose-500' :
                value.color === 'amber' ? 'bg-gradient-to-br from-amber-500 to-orange-500' :
                'bg-gradient-to-br from-emerald-500 to-teal-500'
              }`}>
                {value.icon}
              </div>
              
              <Heading level={4} className="mb-3">
                {value.title}
              </Heading>
              
              <Text variant="body" color="muted">
                {value.description}
              </Text>
            </Card>
          ))}
        </SectionContent>
      </Section>

      {/* 精選產品 */}
      <Section padding="lg">
        <SectionHeader
          title="精選熱銷產品"
          subtitle="茶葉養大的孩子，回饋母親的初心"
          align="center"
        />
        
        <SectionContent columns={3} gap="lg">
          {featuredProducts.map((product, index) => (
            <Card key={index} hoverable padding="none" className="overflow-hidden">
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
                
                <Text variant="body" color="muted" className="mb-4">
                  {product.description}
                </Text>
                
                {/* 功效標籤 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-brand-light/20 text-brand-deep text-sm rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                {/* 評分 */}
                <div className="flex items-center justify-between">
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
                      {product.rating}
                    </span>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    了解更多
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </SectionContent>
        
        <div className="text-center mt-8">
          <Link href="/products">
            <Button variant="primary" size="lg" icon={<ChevronRight className="w-4 h-4" />}>
              查看全部產品
            </Button>
          </Link>
        </div>
      </Section>

      {/* 攤位環境展示 */}
      <Section background="gray" padding="lg">
        <SectionHeader
          title="傳統市場的溫暖記憶"
          subtitle="三十年如一日，在屏東高雄各地的市場裡，劉媽媽與客人建立了深厚的感情"
          align="center"
        />
        
        <ImageGallery
          images={stallImages.slice(0, 6)}
          title="我們的攤位"
          description="從清晨到日落，見證了無數溫暖的故事"
          columns={3}
          category="攤位環境"
          showControls={false}
        />
      </Section>

      {/* 顧客評價 */}
      <Section padding="lg">
        <SectionHeader
          title="顧客真實評價"
          subtitle="聽聽喝了多年的顧客怎麼說"
          align="center"
        />
        
        <SectionContent columns={3} gap="md">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hoverable padding="lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>
              
              <Text variant="body" className="mb-6 italic text-gray-700">
                "{testimonial.content}"
              </Text>
              
              <div className="flex items-center justify-between">
                <div>
                  <Text weight="semibold" className="text-gray-900">
                    {testimonial.name}
                  </Text>
                  <Text variant="small" color="muted">
                    {testimonial.role}
                  </Text>
                </div>
                <Award className="w-5 h-5 text-brand-emerald" />
              </div>
            </Card>
          ))}
        </SectionContent>
      </Section>

      {/* 互動場景 */}
      <Section background="brand" padding="lg" className="text-white">
        <SectionHeader
          title="不只是賣茶，更是交朋友"
          subtitle="在市場裡，劉媽媽與客人像家人一樣聊天，分享健康知識，關心彼此生活"
          align="center"
          className="text-white"
        />
        
        <ImageGallery
          images={interactionImages.slice(0, 4)}
          columns={2}
          category="溫暖互動"
          interactive={false}
          className="opacity-90 hover:opacity-100 transition-opacity"
        />
        
        <div className="text-center mt-8">
          <Text variant="lead" className="text-white/90 mb-4">
            一杯茶，一份愛，劉媽媽的諾貝爾級奉獻
          </Text>
          <Link href="/story">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              閱讀完整故事
            </Button>
          </Link>
        </div>
      </Section>

      {/* 聯絡區 */}
      <Section padding="lg">
        <SectionHeader
          title="開始您的草本之旅"
          subtitle="掃描 QR Code 加入官方 LINE，獲取三十年市場經驗的健康建議"
          align="center"
        />
        
        <div className="max-w-4xl mx-auto">
          <Card padding="lg" className="text-center">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* QR Code */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-brand-light to-emerald-100 rounded-xl flex items-center justify-center p-4">
                  <img
                    src="/images/ＱＲcode.jpg"
                    alt="LINE官方帳號 QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <Text variant="small" weight="semibold" className="mt-3 text-brand-deep">
                  官方 LINE 掃描區
                </Text>
              </div>
              
              {/* 聯絡資訊 */}
              <div className="flex-1 text-left">
                <Heading level={3} className="mb-2">
                  LINE 官方帳號
                </Heading>
                <Text variant="lead" weight="bold" className="text-brand-emerald mb-2">
                  @910jrwoy
                </Text>
                <Text variant="body" color="muted" className="mb-6">
                  獲取專屬優惠與養生知識
                </Text>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Package className="w-5 h-5 text-brand-emerald mr-3" />
                    <span>十款精選草本茶，三十年市場驗證</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 text-brand-emerald mr-3" />
                    <span>一對一健康諮詢，像朋友一樣關心</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Award className="w-5 h-5 text-brand-emerald mr-3" />
                    <span>純天然無添加，品質保證</span>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      立即聯絡
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button variant="outline" size="lg">
                      瀏覽產品
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* 頁尾 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* 品牌資訊 */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-6 h-6 text-emerald-400" />
                <span className="text-xl font-bold">劉媽媽の草本茶</span>
              </div>
              <Text variant="body" color="muted" className="text-gray-400">
                從屏東到台北，一盞茶養大一對姊弟
              </Text>
            </div>
            
            {/* 快速連結 */}
            <div>
              <Heading level={6} className="mb-4 text-white">
                探索
              </Heading>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">首頁</Link></li>
                <li><Link href="/story" className="text-gray-400 hover:text-white transition-colors">品牌故事</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">主要產品</Link></li>
              </ul>
            </div>
            
            {/* 資源 */}
            <div>
              <Heading level={6} className="mb-4 text-white">
                資源
              </Heading>
              <ul className="space-y-2">
                <li><Link href="/tips" className="text-gray-400 hover:text-white transition-colors">草本小撇步</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">聯絡我們</Link></li>
              </ul>
            </div>
            
            {/* 聯絡 */}
            <div>
              <Heading level={6} className="mb-4 text-white">
                聯絡
              </Heading>
              <ul className="space-y-2 text-gray-400">
                <li>LINE: @910jrwoy</li>
                <li>電話: 0956-111-636</li>
                <li>三十年市場經驗</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <Text variant="small" color="muted" className="text-gray-500">
              © 2026 劉媽媽の草本茶 · 茶葉養大的孩子，回饋母親的初心
            </Text>
            <Text variant="small" color="muted" className="text-gray-500 mt-1">
              一杯茶，一份愛，劉媽媽的諾貝爾級奉獻            </Text>
          </div>
        </div>
      </footer>
    </>
  );
}