/**
 * Hero background images — luxury real estate photography (Unsplash).
 * Keys map to routes and page identifiers.
 */
export interface HeroImageConfig {
  src: string;
  srcMobile?: string;
  alt: string;
}

const unsplash = (id: string, w = 1920) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=80`;

export const heroImages: Record<string, HeroImageConfig> = {
  home: {
    src: unsplash('photo-1600596542815-ffad4c1539a9'),
    srcMobile: unsplash('photo-1600596542815-ffad4c1539a9', 800),
    alt: 'Luxury home exterior in Skye Canyon Las Vegas NV 89166',
  },
  properties: {
    src: unsplash('photo-1600047509806-bf629a14d289'),
    alt: 'Luxury Skye Canyon home for sale Las Vegas Nevada',
  },
  contact: {
    src: unsplash('photo-1560518883-e15d4c4b8c8e'),
    alt: 'Real estate consultation in Las Vegas Nevada',
  },
  about: {
    src: unsplash('photo-1605273170674-8b4e0d5c7c0e'),
    alt: 'Skye Canyon and Red Rock Canyon Las Vegas mountain views',
  },
  'market-analysis': {
    src: unsplash('photo-1560520033-3a48c1e2b1f8'),
    alt: 'Las Vegas real estate market overview',
  },
  'neighborhood-analysis': {
    src: unsplash('photo-1449824913935-59a10b8d2000'),
    alt: 'Northwest Las Vegas neighborhood aerial view',
  },
  'las-vegas-real-estate': {
    src: unsplash('photo-1605273170674-8b4e0d5c7c0e'),
    alt: 'Las Vegas Nevada real estate skyline and mountains',
  },
  'luxury-homes-las-vegas': {
    src: unsplash('photo-1613490495256-5f7a8d2c8b2e'),
    alt: 'Luxury home interior Las Vegas Nevada',
  },
  'northwest-las-vegas': {
    src: unsplash('photo-1600607687644-c7171b42498b'),
    alt: 'Northwest Las Vegas homes and desert landscape',
  },
  'skye-canyon-guide': {
    src: unsplash('photo-1600585154340-be6161a56a0c'),
    alt: 'Modern Skye Canyon community homes Las Vegas',
  },
  'skye-canyon-communities': {
    src: unsplash('photo-1600585154527-990d8214a9a5'),
    alt: 'New construction homes in Skye Canyon Las Vegas',
  },
  'skye-canyon-parks': {
    src: unsplash('photo-1600607687939-261c94b5a1b0'),
    alt: 'Skye Canyon park and recreation area Las Vegas',
  },
  'skye-canyon-schools': {
    src: unsplash('photo-1580587771525-78b9dba3b914'),
    alt: 'Schools near Skye Canyon Las Vegas Nevada',
  },
  'buyer-agent': {
    src: unsplash('photo-1560518883-e15d4c4b8c8e'),
    alt: 'Buyer agent consultation for Skye Canyon homes',
  },
  'seller-agent': {
    src: unsplash('photo-1600585154340-be6161a56a0c'),
    alt: 'Listing and selling homes in Skye Canyon Las Vegas',
  },
  'first-time-buyer': {
    src: unsplash('photo-1600047509806-bf629a14d289'),
    alt: 'First-time homebuyer guide Skye Canyon Nevada',
  },
  'luxury-properties': {
    src: unsplash('photo-1613490495256-5f7a8d2c8b2e'),
    alt: 'Luxury properties in Skye Canyon Las Vegas',
  },
  'new-construction': {
    src: unsplash('photo-1600585154527-990d8214a9a5'),
    alt: 'New construction homes Skye Canyon Century Communities',
  },
  relocation: {
    src: unsplash('photo-1600607687644-c7171b42498b'),
    alt: 'Relocating to Las Vegas Skye Canyon Nevada',
  },
  subdivision: {
    src: unsplash('photo-1600585154340-be6161a56a0c'),
    alt: 'Skye Canyon subdivision homes Las Vegas NV 89166',
  },
  park: {
    src: unsplash('photo-1600607687939-261c94b5a1b0'),
    alt: 'Community park in Skye Canyon Las Vegas',
  },
  zip: {
    src: unsplash('photo-1600047509806-bf629a14d289'),
    alt: 'Homes for sale in Las Vegas Nevada zip code',
  },
  builder: {
    src: unsplash('photo-1600585154527-990d8214a9a5'),
    alt: 'New home builder communities Skye Canyon Las Vegas',
  },
  area: {
    src: unsplash('photo-1600607687644-c7171b42498b'),
    alt: 'Northwest Las Vegas area homes for sale',
  },
  default: {
    src: unsplash('photo-1600596542815-ffad4c1539a9'),
    alt: 'Skye Canyon Las Vegas luxury real estate',
  },
  'voice-search': {
    src: unsplash('photo-1516321318423-f06f85e504b3'),
    alt: 'Voice search technology for Las Vegas property search',
  },
  'seo-management': {
    src: unsplash('photo-1460925895917-afdab827c52f'),
    alt: 'SEO analytics dashboard',
  },
};

export function getHeroImage(key: string): HeroImageConfig {
  return heroImages[key] ?? heroImages.default;
}
