import { Navbar, StoryHero, Section, SectionHeader, SectionContent, Card, CardContent, Heading, Text, ImageGallery, Button } from '@/components/ui';
import { Leaf, Heart, MapPin, Users, Clock, Award, Coffee, Package, Home, GraduationCap, Smartphone, Globe } from 'lucide-react';
import Link from 'next/link';
import { brandingImages, stallImages, interactionImages, liuMamaImages, productionProcessImages } from '@/lib/images';

export default function StoryPage() {
  // 故事時間線
  const timeline = [
    {
      year: '1994',
      title: '屏東的開始',
      description: '在屏東傳統市場，劉媽媽開始賣決明子茶。一箱12罐每罐一公斤的貨，成為家庭的經濟支柱。',
      icon: <MapPin className="w-6 h-6" />,
      image: stallImages[0],
      location: '屏東',
    },
    {
      year: '2000-2010',
      title: '高屏地區的足跡',
      description: '每天在屏東及高雄市場到處跑，「決明子」成為劉媽媽的綽號，也是她含辛茹苦養大我們的證明。',
      icon: <Users className="w-6 h-6" />,
      image: interactionImages[2],
      location: '高雄',
    },
    {
      year: '2015',
      title: '北遷台北',
      description: '為了孩子讀書，從屏東搬到台北。「決明子」的綽號跟著轉戰北北基市場，面對更高的租金，更緊湊的都市生活。',
      icon: <Home className="w-6 h-6" />,
      image: stallImages[5],
      location: '台北',
    },
    {
      year: '2020',
      title: '市場的變化',
      description: '傳統市場式微，日漸稀少的人群。劉媽媽改賣各式草本茶，但面對網路時代的挑戰。',
      icon: <Smartphone className="w-6 h-6" />,
      image: stallImages[8],
      location: '全台市場',
    },
    {
      year: '2024',
      title: '網站的誕生',
      description: '兒子為了感念母親，建立這個網站。希望讓更多人認識劉媽媽的茶，延續這份樸實而深厚的愛。',
      icon: <Globe className="w-6 h-6" />,
      image: brandingImages.banner,
      location: '網路世界',
    },
  ];

  // 劉媽媽的特質
  const traits = [
    {
      title: '堅韌不拔',
      description: '天氣熱的時候快40度，冷的時候個位數，也很少見她休息。每天從家裡搬好幾箱到市場，賣完再搬回家。',
      icon: <Award className="w-8 h-8" />,
      color: 'amber',
    },
    {
      title: '無私奉獻',
      description: '靠著決明子茶的收入，讓一對姊弟衣食無憂地長大，唸到大學畢業，找到工作。',
      icon: <Heart className="w-8 h-8" />,
      color: 'rose',
    },
    {
      title: '溫暖親切',
      description: '在市場裡，劉媽媽與客人像朋友一樣聊天。不只是賣茶，更是分享健康知識、關心客人生活。',
      icon: <Users className="w-8 h-8" />,
      color: 'emerald',
    },
    {
      title: '傳統智慧',
      description: '三十年市場經驗，從單一決明子茶發展出十款專業草本茶，每款都是市場智慧的結晶。',
      icon: <Leaf className="w-8 h-8" />,
      color: 'brand',
    },
  ];

  // 兒子的話
  const sonWords = [
    "我是劉媽媽的兒子。我的家在屏東，從小家裡就常常有一個特別的烘培味道。那是我媽賣的決明子茶。",
    "靠著這股茶香，伴隨我長大，也是母親養育我的證明。",
    "以前，一箱12罐每罐一公斤、一包一台斤一箱24包的貨，我搬一次就嫌累了。但劉媽媽每天要從家裡搬好幾箱到市場，賣完再從市場搬回家。",
    "我媽不會用網路，所以生意只能越來越差。後來她改賣了各式草本茶，還是面臨許多現實的瓶頸。",
    "常常會想如果能多做些什麼就好了。因此，為了感念她，我做了這個網站。",
    "希望透過這裡，讓更多人認識劉媽媽的茶，品嚐這份來自從南到北的一段故事。",
    "希望哪怕只有一點點幫助，也能讓我媽可以提早退休XD。順便跟大家介紹一下這位值得諾貝爾和平獎的母親。",
    "我媽的茶，不只是一種商品，更是她一生的心血、她對家庭的付出。我不希望這份溫暖，隨著傳統市場一起消失。",
    "這也是我回饋母親心意的方式。有機會邀請您，一同感受劉媽媽的茶香，延續這份樸實而深厚的愛。",
    "PS. 我主要負責網站架設跟技術支援，產品方便問我媽最準(笑)",
  ];

  return (
    <>
      {/* 導航列 */}
      <Navbar />

      {/* Hero 主視覺 */}
      <StoryHero
        title="劉媽媽的茶：從屏東到台北，貫串全台的茶故事"
        subtitle="草本茶香，承載母親的愛與日常堅持"
        description="三十年市場足跡 · 一個家庭的溫暖傳承"
        ctaPrimary={{
          text: '探索產品',
          href: '/products',
          icon: <Leaf className="w-4 h-4" />,
        }}
        ctaSecondary={{
          text: '聯絡我們',
          href: '/contact',
          icon: <Heart className="w-4 h-4" />,
        }}
      />

      {/* 引言 */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-brand-light/20 rounded-full text-brand-deep font-semibold text-sm mb-6">
            <Heart className="w-4 h-4 mr-2" />
            兒子的話
          </div>
          
          <Heading level={2} className="mb-6">
            一杯茶，養大一對姊弟
          </Heading>
          
          <Text variant="lead" className="text-gray-700 mb-8">
            我是劉媽媽的兒子。這不只是我媽的故事，也是我們全家的故事。
          </Text>
        </div>
      </Section>

      {/* 時間線故事 */}
      <Section background="gray" padding="lg">
        <SectionHeader
          title="從屏東到台北的三十年旅程"
          subtitle="一盞茶，養大一對姊弟；一份愛，溫暖無數家庭"
          align="center"
        />
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* 時間線連接線 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-brand-emerald/20 hidden md:block"></div>
            
            {/* 時間線項目 */}
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 時間點 */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
                  <div className={`text-center md:text-right ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-medium border-4 border-white mb-4">
                      <div className="text-brand-deep">
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="text-2xl font-bold text-brand-deep mb-2">
                      {item.year}
                    </div>
                    <div className="text-sm text-gray-500 font-semibold">
                      {item.location}
                    </div>
                  </div>
                </div>
                
                {/* 連接點 */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full border-4 border-brand-emerald z-10">
                  <div className="w-3 h-3 bg-brand-emerald rounded-full"></div>
                </div>
                
                {/* 內容 */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                  <Card className="max-w-md" hoverable>
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardContent>
                      <Heading level={4} className="mb-2">
                        {item.title}
                      </Heading>
                      <Text variant="body" color="muted">
                        {item.description}
                      </Text>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 劉媽媽的特質 */}
      <Section padding="lg">
        <SectionHeader
          title="值得諾貝爾和平獎的母親"
          subtitle="這些特質，定義了劉媽媽三十年的堅持"
          align="center"
        />
        
        <SectionContent columns={4} gap="md">
          {traits.map((trait, index) => (
            <Card key={index} hoverable padding="lg" className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                trait.color === 'brand' ? 'bg-gradient-brand' :
                trait.color === 'rose' ? 'bg-gradient-to-br from-rose-500 to-pink-500' :
                trait.color === 'amber' ? 'bg-gradient-to-br from-amber-500 to-orange-500' :
                'bg-gradient-to-br from-emerald-500 to-teal-500'
              }`}>
                <div className="text-white">
                  {trait.icon}
                </div>
              </div>
              
              <Heading level={4} className="mb-3">
                {trait.title}
              </Heading>
              
              <Text variant="body" color="muted">
                {trait.description}
              </Text>
            </Card>
          ))}
        </SectionContent>
      </Section>

      {/* 兒子的親筆信 */}
      <Section background="brand" padding="lg" className="text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white font-semibold text-sm mb-6">
              <Heart className="w-4 h-4 mr-2" />
              給母親的一封信
            </div>
            
            <Heading level={2} className="text-white mb-4">
              媽，謝謝您用茶香養大我們
            </Heading>
            
            <Text variant="lead" className="text-white/90">
              這是我回饋您心意的方式
            </Text>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                {sonWords.map((paragraph, index) => (
                  <Text
                    key={index}
                    variant="body"
                    className="text-white/90 leading-relaxed"
                  >
                    {paragraph}
                  </Text>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center">
                  <div className="w-12 h-12                  bg-gradient-to-br from-brand-light to-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-brand-deep" />
                  </div>
                  <div>
                    <Text weight="semibold" className="text-white">
                      劉媽媽的兒子
                    </Text>
                    <Text variant="small" className="text-white/70">
                      網站創辦人 · 技術支援
                    </Text>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 市場記憶畫廊 */}
      <Section padding="lg">
        <SectionHeader
          title="傳統市場的溫暖記憶"
          subtitle="這些照片，記錄了三十年市場生活的點點滴滴"
          align="center"
        />
        
        <div className="mb-8">
          <ImageGallery
            images={stallImages.slice(0, 8)}
            title="我們的攤位時光"
            description="從清晨到日落，從屏東到台北"
            columns={4}
            category="市場記憶"
          />
        </div>
        
        <div className="mb-8">
          <ImageGallery
            images={interactionImages.slice(0, 8)}
            title="與客人的溫暖互動"
            description="不只是買賣，更是朋友般的關心"
            columns={4}
            category="溫暖互動"
          />
        </div>
        
        <div>
          <ImageGallery
            images={liuMamaImages}
            title="劉媽媽的身影"
            description="三十年如一日，始終如一的堅持"
            columns={3}
            category="劉媽媽"
          />
        </div>
      </Section>

      {/* 製作過程 */}
      <Section background="gray" padding="lg">
        <SectionHeader
          title="傳統工藝的堅持"
          subtitle="每一包茶，都是手工挑選、用心烘培"
          align="center"
        />
        
        <div className="max-w-4xl mx-auto">
          <Card padding="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Heading level={3} className="mb-4">
                  從原料到茶杯
                </Heading>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-light/30 rounded-full flex items-center justify-center mr-3">
                      <Leaf className="w-4 h-4 text-brand-deep" />
                    </div>
                    <div>
                      <Text weight="semibold" className="mb-1">手工挑選</Text>
                      <Text variant="body" color="muted">每一片茶葉都是劉媽媽親手挑選，確保品質</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-light/30 rounded-full flex items-center justify-center mr-3">
                      <Coffee className="w-4 h-4 text-brand-deep" />
                    </div>
                    <div>
                      <Text weight="semibold" className="mb-1">傳統烘培</Text>
                      <Text variant="body" color="muted">遵循古法烘培，保留草本的自然香氣</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-light/30 rounded-full flex items-center justify-center mr-3">
                      <Package className="w-4 h-4 text-brand-deep" />
                    </div>
                    <div>
                      <Text weight="semibold" className="mb-1">手工包裝</Text>
                      <Text variant="body" color="muted">每一包都是手工秤重、包裝，確保份量準確</Text>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={productionProcessImages[0]}
                    alt="茶葉製作過程"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* 行動呼籲 */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-brand-light/30 to-emerald-100/30 border border-brand-light/50">
            <CardContent className="p-8">
              <div className="inline-flex items-center px-4 py-2 bg-brand-emerald text-white rounded-full font-semibold text-sm mb-6">
                <Heart className="w-4 h-4 mr-2" />
                延續這份愛
              </div>
              
              <Heading level={2} className="mb-4">
                幫助劉媽媽提早退休
              </Heading>
              
              <Text variant="lead" className="text-gray-700 mb-6">
                每一杯茶，都是對這份三十年堅持的支持。<br />
                每一份訂單，都是對這位偉大母親的感謝。
              </Text>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/products">
                  <Button variant="primary" size="lg" icon={<Leaf className="w-4 h-4" />}>
                    探索產品
                  </Button>
                </Link>
                
                <Link href="/contact">
                  <Button variant="outline" size="lg" icon={<Heart className="w-4 h-4" />}>
                    聯絡我們
                  </Button>
                </Link>
              </div>
              
              <Text variant="small" color="muted" className="mt-6">
                PS. 我主要負責網站架設跟技術支援，產品方便問我媽最準(笑)
              </Text>
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
            從屏東到台北，一盞茶養大一對姊弟<br />
            不只是一杯茶，同時也承載一個家庭的故事
          </Text>
          
          <div className="space-y-2 text-gray-500">
            <Text variant="small">
              一杯茶，一份愛，劉媽媽的諾貝爾級奉獻
            </Text>
            <Text variant="small">
              茶葉養大的孩子，回饋母親的初心
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
}