/**
 * Hero background images — self-hosted in /public/images/heroes/.
 * Keys map to routes and page identifiers.
 */
export interface HeroImageConfig {
  src: string;
  srcMobile?: string;
  srcWebp?: string;
  srcMobileWebp?: string;
  alt: string;
}

function hero(path: string, alt: string): HeroImageConfig {
  return {
    src: `/images/heroes/${path}.jpg`,
    srcMobile: `/images/heroes/${path}-mobile.jpg`,
    srcWebp: `/images/heroes/${path}.webp`,
    srcMobileWebp: `/images/heroes/${path}-mobile.webp`,
    alt,
  };
}

export const heroImages: Record<string, HeroImageConfig> = {
  home: hero('home', 'Luxury home exterior in Skye Canyon Las Vegas NV 89166'),
  properties: hero('properties', 'Luxury Skye Canyon home for sale Las Vegas Nevada'),
  contact: hero('contact', 'Real estate consultation in Las Vegas Nevada'),
  about: hero('about', 'Skye Canyon and Red Rock Canyon Las Vegas mountain views'),
  'market-analysis': hero('market', 'Las Vegas real estate market overview'),
  'neighborhood-analysis': hero('neighborhood', 'Northwest Las Vegas neighborhood aerial view'),
  'las-vegas-real-estate': hero('las-vegas', 'Las Vegas Nevada real estate skyline and mountains'),
  'luxury-homes-las-vegas': hero('luxury', 'Luxury home interior Las Vegas Nevada'),
  'northwest-las-vegas': hero('northwest', 'Northwest Las Vegas homes and desert landscape'),
  'skye-canyon-guide': hero('community', 'Modern Skye Canyon community homes Las Vegas'),
  'skye-canyon-communities': hero('community', 'New construction homes in Skye Canyon Las Vegas'),
  'skye-canyon-parks': hero('parks', 'Skye Canyon park and recreation area Las Vegas'),
  'skye-canyon-schools': hero('schools', 'Schools near Skye Canyon Las Vegas Nevada'),
  'buyer-agent': hero('contact', 'Buyer agent consultation for Skye Canyon homes'),
  'seller-agent': hero('properties', 'Listing and selling homes in Skye Canyon Las Vegas'),
  'first-time-buyer': hero('home', 'First-time homebuyer guide Skye Canyon Nevada'),
  'luxury-properties': hero('luxury', 'Luxury properties in Skye Canyon Las Vegas'),
  'new-construction': hero('properties', 'New construction homes Skye Canyon Century Communities'),
  relocation: hero('northwest', 'Relocating to Las Vegas Skye Canyon Nevada'),
  subdivision: hero('community', 'Skye Canyon subdivision homes Las Vegas NV 89166'),
  park: hero('parks', 'Community park in Skye Canyon Las Vegas'),
  zip: hero('properties', 'Homes for sale in Las Vegas Nevada zip code'),
  builder: hero('luxury', 'New home builder communities Skye Canyon Las Vegas'),
  area: hero('northwest', 'Northwest Las Vegas area homes for sale'),
  default: hero('home', 'Skye Canyon Las Vegas luxury real estate'),
  'voice-search': hero('voice-search', 'Voice search technology for Las Vegas property search'),
  'seo-management': hero('market', 'SEO analytics dashboard'),
};

export function getHeroImage(key: string): HeroImageConfig {
  return heroImages[key] ?? heroImages.default;
}

/** Spreadable props for PageHero / HyperlocalHero */
export function getHeroImageProps(key: string) {
  const hero = getHeroImage(key);
  return {
    image: hero.src,
    imageMobile: hero.srcMobile,
    imageWebp: hero.srcWebp,
    imageMobileWebp: hero.srcMobileWebp,
    imageAlt: hero.alt,
  };
}
