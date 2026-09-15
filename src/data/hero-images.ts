/**
 * Hero background images.
 * Primary delivery: Cloudflare (see src/lib/cloudflare-images.ts).
 * Git backup: public/images/heroes/ and public/images/og/.
 *
 * Hero workflow:
 *   1. Save to /opt/cursor/artifacts/assets/<name>.jpg
 *   2. npm run hero:publish -- <name>
 *   3. npm run images:cf-sync
 */
import { siteImage, siteImageWebp } from '@/lib/cloudflare-images';

export interface HeroImageConfig {
  src: string;
  srcMobile?: string;
  srcWebp?: string;
  srcMobileWebp?: string;
  alt: string;
}

function hero(path: string, alt: string): HeroImageConfig {
  return {
    src: siteImage(`heroes/${path}.jpg`),
    srcMobile: siteImage(`heroes/${path}-mobile.jpg`),
    srcWebp: siteImageWebp(`heroes/${path}.jpg`),
    srcMobileWebp: siteImage(`heroes/${path}-mobile.webp`),
    alt,
  };
}

export const heroImages: Record<string, HeroImageConfig> = {
  home: hero('home', 'Luxury home exterior in Skye Canyon Las Vegas NV 89166'),
  properties: hero('properties', 'Luxury Skye Canyon home for sale Las Vegas Nevada'),
  contact: hero('contact', 'Skye Canyon monument gate Las Vegas NV 89166 matching the Google Business Profile cover'),
  about: hero('about', 'Skye Canyon and Red Rock Canyon Las Vegas mountain views'),
  'market-analysis': hero('market', 'Las Vegas real estate market overview'),
  'neighborhood-analysis': hero('neighborhood', 'Northwest Las Vegas neighborhood aerial view'),
  'las-vegas-real-estate': hero('las-vegas', 'Las Vegas Nevada real estate skyline and mountains'),
  'luxury-homes-las-vegas': hero('luxury', 'Luxury home interior Las Vegas Nevada'),
  'northwest-las-vegas': hero('northwest', 'Northwest Las Vegas homes and desert landscape'),
  'skye-canyon-guide': hero('community', 'Skye Canyon monument entrance Las Vegas NV 89166'),
  'skye-canyon-communities': hero('new-construction', 'New construction homes in Skye Canyon Las Vegas'),
  'skye-canyon-parks': hero('parks', 'Skye Canyon Park playground pool and trails Las Vegas NV 89166'),
  'skye-canyon-schools': hero('schools', 'School campus near Skye Canyon Las Vegas Nevada 89166'),
  'buyer-agent': hero('contact', 'Buyer consultation office for Skye Canyon homes Las Vegas'),
  'seller-agent': hero('properties', 'Listing and selling homes in Skye Canyon Las Vegas'),
  'first-time-buyer': hero('home', 'First-time homebuyer guide Skye Canyon Nevada'),
  'luxury-properties': hero('luxury', 'Luxury properties in Skye Canyon Las Vegas'),
  'new-construction': hero('new-construction', 'New construction homes Skye Canyon Century Communities'),
  relocation: hero('northwest', 'Relocating to Las Vegas Skye Canyon Nevada'),
  subdivision: hero('community', 'Skye Canyon subdivision homes Las Vegas NV 89166'),
  park: hero('parks', 'Community park in Skye Canyon Las Vegas'),
  zip: hero('properties', 'Homes for sale in Las Vegas Nevada zip code'),
  builder: hero('new-construction', 'New home builder communities Skye Canyon Las Vegas'),
  area: hero('northwest', 'Northwest Las Vegas area homes for sale'),
  default: hero('home', 'Skye Canyon Las Vegas luxury real estate'),
  'voice-search': hero('voice-search', 'Voice search for Las Vegas property search'),
  'seo-management': hero('market', 'SEO analytics dashboard'),
};

export function getHeroImage(key: string): HeroImageConfig {
  return heroImages[key] ?? heroImages.default;
}

/** Spreadable props for PageHero / HyperlocalHero */
export function getHeroImageProps(key: string) {
  const heroImage = getHeroImage(key);
  return {
    image: heroImage.src,
    imageMobile: heroImage.srcMobile,
    imageWebp: heroImage.srcWebp,
    imageMobileWebp: heroImage.srcMobileWebp,
    imageAlt: heroImage.alt,
  };
}
