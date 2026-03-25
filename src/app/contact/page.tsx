import { Navbar, Section, SectionHeader, SectionContent, Card, CardContent, CardFooter, Heading, Text, Button } from '@/components/ui';
import { MessageCircle, Phone, Mail, MapPin, Clock, Users, Award, Leaf, Heart, ShoppingBag, QrCode, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  // 聯絡方式
  const contactMethods = [
    {
      title: 'LINE官方帳號',
      description: '一對一諮詢，即時回覆\n劉媽媽親自為您服務',
      icon: <MessageCircle className="w-8 h-8" />,
      details: ['@910jrwoy', '掃描QR Code加入'],
      color: 'green',
      action: {
        text: '加入LINE',
        href: '#line',
      },
      featured: true,
    },
    {
      title: '電話聯絡',
      description: '直接與劉媽媽通話\n獲得最貼心的建議',
      icon: <Phone className="w-8 h-8" />,
      details: ['0956-111-636', '週一至週六 9:00-18:00'],
      color: 'blue',
      action: {
        text: '撥打電話',
        href: 'tel:0956111636',
      },
    },
    {
      title: '蝦皮購物',
      description: '線上商城便利購買\n超商取貨最方便',
      icon: <ShoppingBag className="w-8 h-8" />,
      details: ['搜尋「劉媽媽草本茶」', '多種支付方式'],
      color: 'orange',
      action: {
        text: '前往蝦皮',
        href: '#',
        external: true,
      },
    },
    {
      title: '7-11賣貨便',
      description: '超商取貨免運費\n全台7-11皆可取貨',
      icon: <ExternalLink className="w-8 h-8" />,
      details: ['超商代碼付款', '24小時取貨'],
      color: 'purple',
      action: {
        text: '前往賣貨便',
        href: '#',
        external: true,
      },
    },
  ];

  // 服務時間
  const serviceHours = [
    { day: '週一至週五', time: '09:00 - 18:00' },
    { day: '週六', time: '09:00 - 17:00' },
    { day: '週日', time: '公休' },
    { day: '國定假日', time: '公休' },
  ];

  // 常見問題
  const quickQuestions = [
    {
      question: '如何選擇適合的茶？',
      answer: '建議透過LINE諮詢劉媽媽，她會根據您的體質和需求推薦最適合的茶。',
    },
    {
      question: '可以貨到付款嗎？',
      answer: '可以。蝦皮購物和7-11賣貨便都支援貨到付款。',
    },
    {
      question: '有實體店面嗎？',
      answer: '主要在傳統市場擺攤，詳細地點請透過LINE詢問。',
    },
    {
      question: '可以大量訂購嗎？',
      answer: '可以。大量訂購另有優惠，請直接電話或LINE聯絡。',
    },
  ];

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
            <Heart className="w-4 h-4 mr-2" />
            三十年如一日，溫暖服務
          </div>
          
          <Heading level={1} className="text-white mb-4">
            聯絡我們
          </Heading>
          
          <Text variant="lead" className="text-white/90 mb-8 max-w-3xl mx-auto">
            不只是買賣，更是朋友般的關心<br />
            劉媽媽三十年市場經驗，給您最貼心的建議
          </Text>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#line">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-brand-deep hover:bg-white/90"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                加入LINE
              </Button>
            </a>
            
            <a href="tel:0956111636">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Phone className="w-4 h-4 mr-2" />
                撥打電話
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* 聯絡方式 */}
      <Section padding="lg">
        <SectionHeader
          title="聯絡方式"
          subtitle="選擇最適合您的方式，與劉媽媽取得聯繫"
          align="center"
        />
        
        <SectionContent columns={4} gap="md">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              hoverable
              padding="lg"
              className={`relative ${method.featured ? 'border-2 border-brand-emerald' : ''}`}
            >
              {method.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-brand-emerald text-white text-sm font-semibold rounded-full">
                  推薦方式
                </div>
              )}
              
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                  method.color === 'green' ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                  method.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                  method.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-amber-500' :
                  'bg-gradient-to-br from-purple-500 to-pink-500'
                }`}>
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                
                <Heading level={5} className="mb-3">
                  {method.title}
                </Heading>
                
                <Text variant="body" color="muted" className="mb-4 whitespace-pre-line">
                  {method.description}
                </Text>
                
                <div className="space-y-2 mb-6">
                  {method.details.map((detail, i) => (
                    <div key={i} className="text-sm text-gray-600">
                      {detail}
                    </div>
                  ))}
                </div>
                
                <a
                  href={method.action.href}
                  target={method.action.external ? '_blank' : '_self'}
                  rel={method.action.external ? 'noopener noreferrer' : ''}
                >
                  <Button
                    variant={method.featured ? 'primary' : 'outline'}
                    size="md"
                    fullWidth
                  >
                    {method.action.text}
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </SectionContent>
      </Section>

      {/* LINE QR Code */}
      <Section id="line" background="gray" padding="lg">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* QR Code 區域 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 flex flex-col items-center justify-center">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold text-sm mb-4">
                    <QrCode className="w-4 h-4 mr-2" />
                    掃描加入
                  </div>
                  
                  <Heading level={3} className="mb-2">
                    LINE官方帳號
                  </Heading>
                  
                  <Text variant="lead" weight="bold" className="text-green-700 mb-2">
                    @910jrwoy
                  </Text>
                  
                  <Text variant="body" color="muted">
                    一對一諮詢 · 即時回覆
                  </Text>
                </div>
                
                {/* QR Code */}
                <div className="w-48 h-48 bg-white rounded-xl p-4 shadow-lg mb-6">
                  <img
                    src="/images/ＱＲcode.jpg"
                    alt="LINE官方帳號 QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="text-center">
                  <Text variant="small" color="muted">
                    掃描QR Code或搜尋ID加入
                  </Text>
                </div>
              </div>
              
              {/* 加入好處 */}
              <div className="p-8">
                <Heading level={4} className="mb-6">
                  加入LINE官方帳號的好處
                </Heading>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <Text weight="semibold" className="mb-1">一對一諮詢</Text>
                      <Text variant="small" color="muted">
                        劉媽媽親自為您服務，根據您的需求推薦最適合的茶
                      </Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Award className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <Text weight="semibold" className="mb-1">專屬優惠</Text>
                      <Text variant="small" color="muted">
                        LINE好友專屬優惠，新客首購享折扣
                      </Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Leaf className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <Text weight="semibold" className="mb-1">養生知識</Text>
                      <Text variant="small" color="muted">
                        定期分享草本養生知識，喝得健康又聰明
                      </Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <Text weight="semibold" className="mb-1">即時回覆</Text>
                      <Text variant="small" color="muted">
                        營業時間內即時回覆，解決您的疑問
                      </Text>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a href="https://line.me/ti/p/@910jrwoy" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" fullWidth>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      立即加入LINE
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* 服務資訊 */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 服務時間 */}
            <Card hoverable padding="lg">
              <CardContent>
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-brand-emerald mr-3" />
                  <Heading level={4}>服務時間</Heading>
                </div>
                
                <div className="space-y-3">
                  {serviceHours.map((hour, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <Text weight="medium">{hour.day}</Text>
                      <Text color="muted">{hour.time}</Text>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <Text variant="small" color="muted">
                    💡 建議營業時間內聯絡，以獲得即時回覆
                  </Text>
                </div>
              </CardContent>
            </Card>
            
            {/* 常見問題 */}
            <Card hoverable padding="lg">
              <CardContent>
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-brand-emerald mr-3" />
                  <Heading level={4}>常見問題</Heading>
                </div>
                
                <div className="space-y-4">
                  {quickQuestions.map((qa, index) => (
                    <div key={index}>
                      <Text weight="semibold" className="mb-1">
                        Q: {qa.question}
                      </Text>
                      <Text variant="small" color="muted">
                        A: {qa.answer}
                      </Text>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link href="/tips">
                    <Button variant="outline" size="sm">
                      查看更多小撇步
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* 劉媽媽的承諾 */}
      <Section background="brand" padding="lg" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white font-semibold text-sm mb-6">
            <Heart className="w-4 h-4 mr-2" />
            劉媽媽的承諾
          </div>
          
          <Heading level={2} className="text-white mb-6">
            三十年市場經驗，給您最安心的保證
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white/10 rounded-xl">
              <Leaf className="w-8 h-8 text-white mb-4 mx-auto" />
              <Text weight="semibold" className="mb-2">純天然無添加</Text>
              <Text variant="small" className="text-white/80">
                每一包茶都是純天然原料，無防腐劑、無化學添加
              </Text>
            </div>
            
            <div className="p-6 bg-white/10 rounded-xl">
              <Award className="w-8 h-8 text-white mb-4 mx-auto" />
              <Text weight="semibold" className="mb-2">三十年經驗</Text>
              <Text variant="small" className="text-white/80">
                從傳統市場到網路，品質始終如一，經驗值得信賴
              </Text>
            </div>
            
            <div className="p-6 bg-white/10 rounded-xl">
              <Users className="w-8 h-8 text-white mb-4 mx-auto" />
              <Text weight="semibold" className="mb-2">像朋友一樣</Text>
              <Text variant="small" className="text-white/80">
                不只是買賣，更是朋友般的關心與建議
              </Text>
            </div>
          </div>
          
          <Text variant="lead" className="text-white/90 mb-6">
            一杯茶，一份愛，劉媽媽的諾貝爾級奉獻<br />
            茶葉養大的孩子，回饋母親的初心
          </Text>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products">
              <Button
                variant="primary"
                className="bg-white text-brand-deep hover:bg-white/90"
              >
                瀏覽產品
              </Button>
            </Link>
            
            <Link href="/story">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                品牌故事
              </Button>
            </Link>
          </div>
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
                <li className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  LINE: @910jrwoy
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  0956-111-636
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  三十年市場經驗
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <Text variant="small" color="muted" className="text-gray-500">
              © 2026 劉媽媽の草本茶 · 茶葉養大的孩子，回饋母親的初心
            </Text>
            <Text variant="small" color="muted" className="text-gray-500 mt-1">
              一杯茶，一份愛，劉媽媽的諾貝爾級奉獻
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
}