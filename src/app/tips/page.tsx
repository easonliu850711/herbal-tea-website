import { Navbar, Section, SectionHeader, SectionContent, Card, CardHeader, CardContent, CardFooter, Heading, Text, Button } from '@/components/ui';
import { Leaf, Heart, BookOpen, Clock, Thermometer, Droplets, Moon, Sun, Coffee, Zap, Brain, Heart as HeartIcon, Eye, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function TipsPage() {
  // 草本知識
  const herbKnowledge = [
    {
      title: '七葉膽',
      subtitle: '強身滋補之王',
      description: '溫和滋補，適合日常保健。早上飲用效果最佳。',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['增強體力', '促進代謝', '溫和滋補'],
      brewing: '熱水沖泡5-8分鐘',
      bestTime: '早上',
      temperature: '90-95°C',
    },
    {
      title: '洛神花',
      subtitle: '美容養顏聖品',
      description: '豐富維生素C，酸甜可口。冷泡熱泡皆宜。',
      icon: <HeartIcon className="w-6 h-6" />,
      benefits: ['美容養顏', '幫助消化', '豐富維生素'],
      brewing: '熱水沖泡3-5分鐘',
      bestTime: '下午',
      temperature: '85-90°C',
    },
    {
      title: '枸杞菊花',
      subtitle: '清熱明目經典',
      description: '辦公室必備，緩解眼睛疲勞。',
      icon: <Eye className="w-6 h-6" />,
      benefits: ['清熱明目', '緩解疲勞', '經典配方'],
      brewing: '熱水沖泡5分鐘',
      bestTime: '工作時',
      temperature: '90-95°C',
    },
    {
      title: '金線蓮',
      subtitle: '珍貴晶亮茶',
      description: '溫和滋補，適合需要晶亮保健者。',
      icon: <Shield className="w-6 h-6" />,
      benefits: ['晶亮保健', '溫和滋補', '珍貴原料'],
      brewing: '熱水沖泡10分鐘',
      bestTime: '全天',
      temperature: '95-100°C',
    },
  ];

  // 沖泡技巧
  const brewingTips = [
    {
      title: '水溫控制',
      description: '不同草本需要不同水溫。葉類茶85-90°C，根莖類90-95°C，種子類95-100°C。',
      icon: <Thermometer className="w-6 h-6" />,
      details: [
        '葉類：85-90°C (洛神花、桑葉)',
        '根莖類：90-95°C (七葉膽、一條根)',
        '種子類：95-100°C (決明子)',
      ],
    },
    {
      title: '時間掌握',
      description: '沖泡時間影響風味和功效。太短無味，太久苦澀。',
      icon: <Clock className="w-6 h-6" />,
      details: [
        '輕發酵：3-5分鐘 (洛神花、薄荷)',
        '中發酵：5-8分鐘 (七葉膽、枸杞)',
        '重發酵：8-10分鐘 (金線蓮、人參)',
      ],
    },
    {
      title: '水量比例',
      description: '一般建議1克茶葉配50毫升水。可依個人口味調整。',
      icon: <Droplets className="w-6 h-6" />,
      details: [
        '濃郁型：1g : 40ml',
        '標準型：1g : 50ml',
        '清淡型：1g : 60ml',
      ],
    },
    {
      title: '重複沖泡',
      description: '優質草本茶可重複沖泡2-3次，每次風味略有不同。',
      icon: <Coffee className="w-6 h-6" />,
      details: [
        '第一泡：香氣最濃',
        '第二泡：滋味最醇',
        '第三泡：餘韻最長',
      ],
    },
  ];

  // 飲用時機
  const drinkingTiming = [
    {
      time: '早晨',
      description: '提神醒腦，開始美好一天',
      recommended: ['七葉膽茶', '辣木茶'],
      icon: <Sun className="w-6 h-6" />,
      tip: '搭配早餐飲用，效果加倍',
    },
    {
      time: '下午',
      description: '放鬆心情，補充能量',
      recommended: ['洛神花茶', '枸杞菊花茶'],
      icon: <Clock className="w-6 h-6" />,
      tip: '下午3-5點飲用，幫助消化',
    },
    {
      time: '晚上',
      description: '放鬆身心，幫助睡眠',
      recommended: ['桑葉茶', '一條根茶'],
      icon: <Moon className="w-6 h-6" />,
      tip: '睡前1小時飲用，避免影響睡眠',
    },
    {
      time: '工作時',
      description: '集中注意力，緩解疲勞',
      recommended: ['枸杞菊花茶', '金線蓮茶'],
      icon: <Brain className="w-6 h-6" />,
      tip: '每工作1小時，休息5分鐘飲茶',
    },
  ];

  // 常見問題
  const faqs = [
    {
      question: '草本茶可以每天喝嗎？',
      answer: '可以。劉媽媽的草本茶都是純天然原料，無添加任何化學物質，適合日常飲用。建議輪流飲用不同種類，讓身體獲得多元營養。',
    },
    {
      question: '孕婦可以喝草本茶嗎？',
      answer: '建議諮詢醫生。雖然我們的茶都是天然草本，但孕婦體質特殊，建議在醫生指導下飲用。',
    },
    {
      question: '茶葉可以保存多久？',
      answer: '未開封可保存12-18個月。開封後建議3-6個月內飲用完畢，並存放在陰涼乾燥處，避免陽光直射。',
    },
    {
      question: '如何選擇適合自己的茶？',
      answer: '可以透過LINE官方帳號 @910jrwoy 諮詢劉媽媽。她會根據您的體質和需求，推薦最適合的茶。',
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
            <BookOpen className="w-4 h-4 mr-2" />
            三十年市場經驗分享
          </div>
          
          <Heading level={1} className="text-white mb-4">
            草本小撇步
          </Heading>
          
          <Text variant="lead" className="text-white/90 mb-8 max-w-3xl mx-auto">
            劉媽媽三十年市場經驗的智慧結晶<br />
            讓您喝得健康，喝得聰明，喝得開心
          </Text>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#knowledge">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-brand-deep hover:bg-white/90"
              >
                <Leaf className="w-4 h-4 mr-2" />
                草本知識
              </Button>
            </Link>
            
            <Link href="#brewing">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Coffee className="w-4 h-4 mr-2" />
                沖泡技巧
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* 草本知識 */}
      <Section id="knowledge" padding="lg">
        <SectionHeader
          title="草本知識"
          subtitle="了解每一種草本的特性，喝出健康與智慧"
          align="center"
        />
        
        <SectionContent columns={4} gap="md">
          {herbKnowledge.map((herb, index) => (
            <Card key={index} hoverable padding="lg">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mr-4">
                  <div className="text-white">
                    {herb.icon}
                  </div>
                </div>
                <div>
                  <Heading level={5} className="mb-1">
                    {herb.title}
                  </Heading>
                  <Text variant="small" color="brand" weight="semibold">
                    {herb.subtitle}
                  </Text>
                </div>
              </div>
              
              <Text variant="body" color="muted" className="mb-4">
                {herb.description}
              </Text>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Zap className="w-4 h-4 text-amber-500 mr-2" />
                  <span className="font-medium">功效：</span>
                  <span className="ml-2 text-gray-600">{herb.benefits.join(' · ')}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="font-medium">沖泡：</span>
                  <span className="ml-2 text-gray-600">{herb.brewing}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Sun className="w-4 h-4 text-amber-500 mr-2" />
                  <span className="font-medium">最佳時機：</span>
                  <span className="ml-2 text-gray-600">{herb.bestTime}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Thermometer className="w-4 h-4 text-red-500 mr-2" />
                  <span className="font-medium">建議水溫：</span>
                  <span className="ml-2 text-gray-600">{herb.temperature}</span>
                </div>
              </div>
            </Card>
          ))}
        </SectionContent>
      </Section>

      {/* 沖泡技巧 */}
      <Section id="brewing" background="gray" padding="lg">
        <SectionHeader
          title="沖泡技巧"
          subtitle="劉媽媽三十年經驗傳授，泡出完美茶湯"
          align="center"
        />
        
        <SectionContent columns={4} gap="md">
          {brewingTips.map((tip, index) => (
            <Card key={index} hoverable padding="lg" className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-emerald to-teal-500 rounded-2xl mb-6 mx-auto">
                <div className="text-white">
                  {tip.icon}
                </div>
              </div>
              
              <Heading level={5} className="mb-3">
                {tip.title}
              </Heading>
              
              <Text variant="body" color="muted" className="mb-4">
                {tip.description}
              </Text>
              
              <div className="text-left">
                {tip.details.map((detail, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-600 mb-2">
                    <div className="w-2 h-2 bg-brand-emerald rounded-full mr-2"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </SectionContent>
      </Section>

      {/* 飲用時機 */}
      <Section padding="lg">
        <SectionHeader
          title="飲用時機"
          subtitle="對的時間喝對的茶，效果加倍"
          align="center"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {drinkingTiming.map((timing, index) => (
              <Card key={index} hoverable padding="lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-amber-600">
                      {timing.icon}
                    </div>
                  </div>
                  <div>
                    <Heading level={5} className="mb-1">
                      {timing.time}
                    </Heading>
                    <Text variant="small" color="muted">
                      {timing.description}
                    </Text>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Text variant="small" weight="semibold" className="text-gray-700 mb-2">
                    推薦茶飲：
                  </Text>
                  <div className="flex flex-wrap gap-2">
                    {timing.recommended.map((tea, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-brand-light/30 text-brand-deep text-xs rounded-full"
                      >
                        {tea}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="px-3 py-2 bg-gray-50 rounded-lg">
                  <Text variant="small" className="text-gray-600">
                    💡 {timing.tip}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 常見問題 */}
      <Section background="gray" padding="lg">
        <SectionHeader
          title="常見問題"
          subtitle="劉媽媽親自解答，三十年經驗的智慧"
          align="center"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} hoverable padding="lg">
                <CardContent>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-light/30 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-brand-deep font-bold">Q</span>
                    </div>
                    <div>
                      <Heading level={5} className="mb-2">
                        {faq.question}
                      </Heading>
                      <Text variant="body" color="muted">
                        {faq.answer}
                      </Text>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Card className="bg-gradient-to-br from-brand-light/30 to-emerald-100/30 border border-brand-light/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-brand-emerald mr-3" />
                  <Heading level={5} className="text-brand-deep">
                    還有其他問題？
                  </Heading>
                </div>
                
                <Text variant="body" color="muted" className="mb-4">
                  歡迎透過LINE官方帳號直接詢問劉媽媽<br />
                  她會根據三十年市場經驗，給您最貼心的建議
                </Text>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button variant="primary">
                      聯絡我們
                    </Button>
                  </Link>
                  
                  <Link href="/products">
                    <Button variant="outline">
                      瀏覽產品
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
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
            三十年市場經驗 · 溫暖傳承<br />
            不只是賣茶，更是分享健康知識
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