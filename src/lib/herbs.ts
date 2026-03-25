/**
 * 劉媽媽の草本茶 - 草本成分資料庫
 * 整理所有產品中的添加小物（仙楂、葛根等）
 */

export interface HerbIngredient {
  id: string;
  name: string;
  chineseName: string;
  category: '果實' | '根莖' | '葉類' | '花類' | '種子' | '其他';
  description: string;
  benefits: string[];
  usage: string;
  temperature: string;
  time: string;
  pairing: string[]; // 常搭配的產品
  image?: string;
  color: string;
  icon: string;
}

export const herbIngredients: HerbIngredient[] = [
  {
    id: 'xianzha',
    name: 'Hawthorn',
    chineseName: '仙楂',
    category: '果實',
    description: '酸甜可口，幫助消化，傳統市場常見的添加物。劉媽媽特別挑選的仙楂，品質優良，為茶飲增添自然甜味。',
    benefits: ['幫助消化', '增添甜味', '促進食欲', '傳統配方'],
    usage: '通常與洛神花、決明子搭配，每包茶添加5-10克',
    temperature: '85-90°C',
    time: '沖泡5-8分鐘',
    pairing: ['洛神花茶', '決明子茶', '七葉膽茶'],
    color: 'rose',
    icon: '🍎',
  },
  {
    id: 'gegen',
    name: 'Kudzu Root',
    chineseName: '葛根',
    category: '根莖',
    description: '傳統中藥材，溫和滋補，適合與各種草本搭配。劉媽媽三十年經驗，知道如何挑選品質最好的葛根。',
    benefits: ['溫和滋補', '幫助放鬆', '傳統智慧', '搭配性強'],
    usage: '切片或磨粉，與根莖類茶飲搭配最佳',
    temperature: '90-95°C',
    time: '沖泡8-10分鐘',
    pairing: ['七葉膽茶', '一條根茶', '金線蓮茶'],
    color: 'brown',
    icon: '🌿',
  },
  {
    id: 'gouqi',
    name: 'Goji Berry',
    chineseName: '枸杞',
    category: '果實',
    description: '晶亮保健聖品，富含營養，劉媽媽特別挑選寧夏枸杞，品質有保證。',
    benefits: ['晶亮保健', '豐富營養', '天然甜味', '日常保健'],
    usage: '每包茶添加10-15克，可重複沖泡',
    temperature: '85-90°C',
    time: '沖泡5分鐘',
    pairing: ['枸杞菊花茶', '七葉膽茶', '金線蓮茶'],
    color: 'red',
    icon: '🍒',
  },
  {
    id: 'juhua',
    name: 'Chrysanthemum',
    chineseName: '菊花',
    category: '花類',
    description: '清熱明目，香氣清新，劉媽媽挑選杭菊，品質優良，香氣持久。',
    benefits: ['清熱明目', '香氣清新', '幫助放鬆', '辦公室必備'],
    usage: '與枸杞搭配最佳，每包茶添加8-12克',
    temperature: '85-90°C',
    time: '沖泡3-5分鐘',
    pairing: ['枸杞菊花茶', '洛神花茶', '桑葉茶'],
    color: 'yellow',
    icon: '🌼',
  },
  {
    id: 'hongzao',
    name: 'Red Date',
    chineseName: '紅棗',
    category: '果實',
    description: '天然甜味劑，溫和滋補，劉媽媽特別挑選新疆大棗，甜度適中。',
    benefits: ['天然甜味', '溫和滋補', '幫助氣色', '女性最愛'],
    usage: '去核切片，與各種茶飲都能搭配',
    temperature: '90-95°C',
    time: '沖泡8-10分鐘',
    pairing: ['七葉膽茶', '一條根茶', '辣木茶'],
    color: 'darkred',
    icon: '🍇',
  },
  {
    id: 'longyan',
    name: 'Longan',
    chineseName: '桂圓',
    category: '果實',
    description: '香甜可口，幫助安神，劉媽媽挑選台灣本土桂圓，香氣濃郁。',
    benefits: ['幫助安神', '香甜口感', '溫和滋補', '睡前飲用'],
    usage: '去殼，與紅棗搭配效果加倍',
    temperature: '90-95°C',
    time: '沖泡8-10分鐘',
    pairing: ['七葉膽茶', '桑葉茶', '一條根茶'],
    color: 'amber',
    icon: '🍑',
  },
  {
    id: 'chenpi',
    name: 'Dried Tangerine Peel',
    chineseName: '陳皮',
    category: '果實',
    description: '陳年柑橘皮，香氣獨特，幫助消化，劉媽媽存放三年的陳皮，香氣醇厚。',
    benefits: ['幫助消化', '獨特香氣', '陳年風味', '去油解膩'],
    usage: '切絲，與油膩食物後飲用最佳',
    temperature: '90-95°C',
    time: '沖泡5-8分鐘',
    pairing: ['洛神花茶', '決明子茶', '魚腥草茶'],
    color: 'orange',
    icon: '🍊',
  },
  {
    id: 'gancao',
    name: 'Licorice Root',
    chineseName: '甘草',
    category: '根莖',
    description: '天然甜味劑，溫和調和，劉媽媽挑選內蒙甘草，甜度自然。',
    benefits: ['天然甜味', '溫和調和', '幫助喉嚨', '百搭配方'],
    usage: '切片，幾乎可與所有茶飲搭配',
    temperature: '90-95°C',
    time: '沖泡8-10分鐘',
    pairing: ['所有茶飲'],
    color: 'yellow',
    icon: '🌱',
  },
  {
    id: 'bohe',
    name: 'Mint',
    chineseName: '薄荷',
    category: '葉類',
    description: '清涼提神，香氣清新，劉媽媽自己種植的薄荷，新鮮無農藥。',
    benefits: ['清涼提神', '幫助呼吸', '清新口氣', '夏季必備'],
    usage: '新鮮或乾燥葉片，夏季冷泡最佳',
    temperature: '80-85°C',
    time: '沖泡3分鐘',
    pairing: ['洛神花茶', '桑葉茶', '辣木茶'],
    color: 'green',
    icon: '🌿',
  },
  {
    id: 'sangye',
    name: 'Mulberry Leaf',
    chineseName: '桑葉',
    category: '葉類',
    description: '清新口感，幫助平衡，劉媽媽挑選無農藥桑葉，品質純淨。',
    benefits: ['清新口感', '幫助平衡', '日常飲用', '簡單純粹'],
    usage: '單獨沖泡或與其他草本搭配',
    temperature: '85-90°C',
    time: '沖泡3-5分鐘',
    pairing: ['桑葉茶', '桑葉苦瓜茶', '枸杞菊花茶'],
    color: 'lightgreen',
    icon: '🍃',
  },
];

/**
 * 根據分類獲取草本成分
 */
export function getHerbsByCategory(category: HerbIngredient['category']): HerbIngredient[] {
  return herbIngredients.filter(herb => herb.category === category);
}

/**
 * 根據產品名稱獲取相關的草本成分
 */
export function getHerbsByProduct(productName: string): HerbIngredient[] {
  const productMap: Record<string, string[]> = {
    '七葉膽茶': ['gegen', 'gouqi', 'hongzao', 'longyan', 'gancao'],
    '洛神花茶': ['xianzha', 'chenpi', 'bohe'],
    '枸杞菊花茶': ['gouqi', 'juhua', 'gancao'],
    '一條根茶': ['gegen', 'hongzao', 'longyan'],
    '金線蓮茶': ['gouqi', 'hongzao', 'gancao'],
    '辣木茶': ['bohe', 'sangye'],
    '桑葉茶': ['sangye'],
    '桑葉苦瓜茶': ['sangye', 'gancao'],
    '魚腥草茶': ['bohe', 'chenpi', 'gancao'],
    '雞角刺茶': ['juhua', 'gancao'],
  };

  const herbIds = productMap[productName] || [];
  return herbIngredients.filter(herb => herbIds.includes(herb.id));
}

/**
 * 獲取所有分類
 */
export function getAllCategories(): HerbIngredient['category'][] {
  return Array.from(new Set(herbIngredients.map(herb => herb.category)));
}

/**
 * 隨機獲取推薦草本
 */
export function getRandomHerbs(count: number = 3): HerbIngredient[] {
  const shuffled = [...herbIngredients].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}