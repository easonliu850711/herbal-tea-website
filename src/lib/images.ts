/**
 * 劉媽媽の草本茶 - 圖片庫配置
 * 整理所有圖片資源，方便在組件中使用
 */

// 品牌圖片
export const brandingImages = {
  banner: '/images/branding/攤位banner.jpg',
  businessCard: '/images/branding/橫式名片照.jpg',
  logo: '/images/branding/066a2b88-93eb-41dd-bdc7-8b435bd4e758_original.jpg',
} as const;

// 攤位環境圖片 (12張)
export const stallImages = [
  '/images/stall-environment/booth-20260323_234211-000.jpg',
  '/images/stall-environment/booth-20260323_234211-001.jpg',
  '/images/stall-environment/booth-20260323_234211-002.jpg',
  '/images/stall-environment/booth-20260323_234211-003.jpg',
  '/images/stall-environment/booth-20260323_234211-004.jpg',
  '/images/stall-environment/booth-20260323_234211-005.jpg',
  '/images/stall-environment/booth-20260323_234211-006.jpg',
  '/images/stall-environment/booth-20260323_234211-007.jpg',
  '/images/stall-environment/booth-20260323_234211-008.jpg',
  '/images/stall-environment/booth-20260323_234211-009.jpg',
  '/images/stall-environment/booth-20260323_234211-010.jpg',
  '/images/stall-environment/booth-20260323_234211-011.jpg',
] as const;

// 互動場景圖片 (15張)
export const interactionImages = [
  '/images/interaction/customer_interaction_01.jpg',
  '/images/interaction/customer_interaction_02.jpg',
  '/images/interaction/customer_interaction_03.jpg',
  '/images/interaction/customer_interaction_04.jpg',
  '/images/interaction/customer_interaction_05.jpg',
  '/images/interaction/customer_interaction_06.jpg',
  '/images/interaction/customer_interaction_07.jpg',
  '/images/interaction/customer_interaction_08.jpg',
  '/images/interaction/customer_interaction_09.jpg',
  '/images/interaction/customer_interaction_10.jpg',
  '/images/interaction/customer_interaction_11.jpg',
  '/images/interaction/customer_interaction_12.jpg',
  '/images/interaction/customer_interaction_13.jpg',
  '/images/interaction/customer_interaction_14.jpg',
  '/images/interaction/customer_interaction_15.jpg',
] as const;

// 產品特寫圖片 (10張 - 對應10款茶)
export const productCloseupImages = {
  '七葉膽茶': '/images/product-closeup/產品照-001.png',
  '一條根茶': '/images/product-closeup/產品照-000.png',
  '洛神花茶': '/images/product-closeup/產品照-002.png',
  '雞角刺茶': '/images/product-closeup/產品照-003.png',
  '魚腥草茶': '/images/product-closeup/產品照-004.png',
  '金線蓮茶': '/images/product-closeup/產品照-005.png',
  '辣木茶': '/images/product-closeup/產品照-006.png',
  '枸杞菊花茶': '/images/product-closeup/產品照-007.png',
  '桑葉苦瓜茶': '/images/product-closeup/產品照-008.png',
  '桑葉茶': '/images/product-closeup/產品照-009.png',
} as const;

// 產品包裝圖片
export const productPackagingImages = [
  '/images/products/tea_packaging_01.jpg',
  '/images/products/tea_packaging_02.jpg',
  '/images/products/tea_packaging_03.jpg',
  '/images/products/tea_packaging_04.jpg',
  '/images/products/tea_packaging_05.jpg',
  '/images/products/tea_packaging_06.jpg',
] as const;

// 製作過程圖片
export const productionProcessImages = [
  '/images/production-process/IMG_20240315_103045.jpg',
] as const;

// 劉媽媽個人照片
export const liuMamaImages = [
  '/images/liu-mama/liu_mama_01.jpg',
  '/images/liu-mama/liu_mama_02.jpg',
  '/images/liu-mama/liu_mama_03.jpg',
] as const;

// QR Code
export const qrCodeImage = '/images/ＱＲcode.jpg';

// 海報
export const posterImage = '/poster_zh-TW_3_4.png';

/**
 * 獲取隨機攤位圖片
 */
export function getRandomStallImage(): string {
  const randomIndex = Math.floor(Math.random() * stallImages.length);
  return stallImages[randomIndex];
}

/**
 * 獲取隨機互動圖片
 */
export function getRandomInteractionImage(): string {
  const randomIndex = Math.floor(Math.random() * interactionImages.length);
  return interactionImages[randomIndex];
}

/**
 * 根據產品名稱獲取對應的產品圖片
 */
export function getProductImage(productName: string): string {
  return productCloseupImages[productName as keyof typeof productCloseupImages] || productCloseupImages['七葉膽茶'];
}

/**
 * 圖片預加載配置
 */
export const imagePreloadConfig = {
  // 首屏關鍵圖片
  critical: [
    brandingImages.banner,
    stallImages[0],
    productCloseupImages['七葉膽茶'],
    qrCodeImage,
  ],
  // 重要圖片
  important: [
    ...stallImages.slice(0, 3),
    ...interactionImages.slice(0, 3),
    ...Object.values(productCloseupImages).slice(0, 5),
  ],
} as const;

// 圖片類型
export type ImageCategory = 
  | 'branding'
  | 'stall'
  | 'interaction'
  | 'product'
  | 'packaging'
  | 'process'
  | 'liu-mama'
  | 'qr'
  | 'poster';

/**
 * 根據分類獲取圖片列表
 */
export function getImagesByCategory(category: ImageCategory): string[] {
  switch (category) {
    case 'branding':
      return Object.values(brandingImages);
    case 'stall':
      return [...stallImages];
    case 'interaction':
      return [...interactionImages];
    case 'product':
      return Object.values(productCloseupImages);
    case 'packaging':
      return [...productPackagingImages];
    case 'process':
      return [...productionProcessImages];
    case 'liu-mama':
      return [...liuMamaImages];
    case 'qr':
      return [qrCodeImage];
    case 'poster':
      return [posterImage];
    default:
      return [];
  }
}