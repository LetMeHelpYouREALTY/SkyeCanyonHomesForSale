import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';

interface PageSeoEntry {
  title: string;
  description: string;
  path: string;
}

const pages: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Skye Canyon Homes for Sale | Las Vegas NV 89166',
    description:
      'Skye Canyon homes for sale in Las Vegas NV 89166. Live MLS, valuations, and Dr. Jan Duffy, REALTOR®. Call (702) 500-1902.',
    path: '/',
  },
  '/about': {
    title: 'About Dr. Jan Duffy | Skye Canyon REALTOR® Las Vegas NV 89166',
    description:
      'Dr. Jan Duffy is a Skye Canyon REALTOR® with BHHS Nevada Properties. Luxury, new construction, and resale in Las Vegas NV 89166.',
    path: '/about',
  },
  '/contact': {
    title: 'Contact Dr. Jan Duffy | Skye Canyon Las Vegas NV 89166',
    description:
      'Call, get directions, or book a consult with Dr. Jan Duffy. 10111 W. Skye Canyon Park Drive, Las Vegas, NV 89166. (702) 500-1902.',
    path: '/contact',
  },
  '/properties': {
    title: 'Skye Canyon Homes for Sale | Live MLS Las Vegas NV 89166',
    description:
      'Browse live Skye Canyon MLS listings in Las Vegas NV 89166. Luxury, golf-course, and new construction with Dr. Jan Duffy.',
    path: '/properties',
  },
  '/market-analysis': {
    title: 'Skye Canyon Market Analysis | Las Vegas NV 89166 Prices',
    description:
      'Skye Canyon real estate market trends, prices, and days on market in Las Vegas NV 89166. Updated analysis from Dr. Jan Duffy.',
    path: '/market-analysis',
  },
  '/neighborhood-analysis': {
    title: 'Northwest Las Vegas Neighborhood Analysis | 89166',
    description:
      'Compare Skye Canyon, Centennial Hills, and northwest Las Vegas housing data, commute times, and amenities in zip 89166.',
    path: '/neighborhood-analysis',
  },
  '/northwest-las-vegas': {
    title: 'Northwest Las Vegas Homes | Skye Canyon 89166 REALTOR®',
    description:
      'Homes for sale in Northwest Las Vegas, Skye Canyon, and Centennial Hills. Dr. Jan Duffy, REALTOR®. Call (702) 500-1902.',
    path: '/northwest-las-vegas',
  },
  '/las-vegas-real-estate': {
    title: 'Las Vegas Real Estate | Skye Canyon NV 89166 Specialist',
    description:
      'Las Vegas real estate focused on Skye Canyon NV 89166. New construction, resale, and luxury with Dr. Jan Duffy, REALTOR®.',
    path: '/las-vegas-real-estate',
  },
  '/luxury-homes-las-vegas': {
    title: 'Luxury Homes Las Vegas | Skye Canyon NV 89166',
    description:
      'Luxury homes in Skye Canyon and northwest Las Vegas NV 89166. Golf-course and custom residences with Dr. Jan Duffy.',
    path: '/luxury-homes-las-vegas',
  },
  '/skye-canyon-guide': {
    title: 'Skye Canyon Community Guide | Las Vegas NV 89166',
    description:
      'Skye Canyon guide: golf, parks, commute times, HOA, and homes for sale in Las Vegas NV 89166. Call (702) 500-1902.',
    path: '/skye-canyon-guide',
  },
  '/skye-canyon-communities': {
    title: 'Skye Canyon New Construction | Eaglepointe Marvella Skyecrest',
    description:
      'Century Communities new homes in Eaglepointe, Marvella, and Skyecrest, Skye Canyon Las Vegas NV 89166. Dr. Jan Duffy.',
    path: '/skye-canyon-communities',
  },
  '/skye-canyon-parks': {
    title: 'Skye Canyon Parks | Trails and Recreation Las Vegas 89166',
    description:
      'Skye Canyon Park, trails, pools, and recreation in Las Vegas NV 89166. Homes near parks with Dr. Jan Duffy, REALTOR®.',
    path: '/skye-canyon-parks',
  },
  '/skye-canyon-schools': {
    title: 'Homes Near Skye Canyon Schools | Las Vegas NV 89166',
    description:
      'Skye Canyon homes near named Clark County campuses in Las Vegas NV 89166. Commute context from Dr. Jan Duffy, REALTOR®.',
    path: '/skye-canyon-schools',
  },
  '/services/buyer-agent': {
    title: 'Skye Canyon Buyer Agent | Las Vegas NV 89166',
    description:
      'Buyer representation for Skye Canyon homes in Las Vegas NV 89166. New construction and resale with Dr. Jan Duffy, REALTOR®.',
    path: '/services/buyer-agent',
  },
  '/services/seller-agent': {
    title: 'Sell Your Skye Canyon Home | Las Vegas NV 89166',
    description:
      'Listing a Skye Canyon home in Las Vegas NV 89166? Dr. Jan Duffy markets resale and luxury properties. Call (702) 500-1902.',
    path: '/services/seller-agent',
  },
  '/services/first-time-buyer': {
    title: 'First-Time Homebuyer | Skye Canyon Las Vegas NV 89166',
    description:
      'First-time buyer guidance for Skye Canyon and northwest Las Vegas NV 89166. Financing steps and listings with Dr. Jan Duffy.',
    path: '/services/first-time-buyer',
  },
  '/services/luxury-properties': {
    title: 'Luxury Property Specialist | Skye Canyon Las Vegas 89166',
    description:
      'Luxury Skye Canyon property sales in Las Vegas NV 89166. Golf-course and custom homes with Dr. Jan Duffy, REALTOR®.',
    path: '/services/luxury-properties',
  },
  '/services/new-construction': {
    title: 'Skye Canyon New Construction | Century Communities 89166',
    description:
      'New construction in Skye Canyon Las Vegas NV 89166, including Century Communities. Quick move-in and to-be-built options.',
    path: '/services/new-construction',
  },
  '/services/relocation': {
    title: 'Relocate to Skye Canyon | Las Vegas NV 89166 REALTOR®',
    description:
      'Relocating to Las Vegas NV 89166? Skye Canyon area tours, commute times, and listings with Dr. Jan Duffy, REALTOR®.',
    path: '/services/relocation',
  },
  '/search': {
    title: 'Search Skye Canyon Homes | Las Vegas NV 89166 MLS',
    description:
      'Search Skye Canyon and northwest Las Vegas homes by price, beds, and zip 89166. Dr. Jan Duffy, REALTOR®. (702) 500-1902.',
    path: '/search',
  },
  '/voice-search': {
    title: 'Voice Search Skye Canyon Homes | Las Vegas NV 89166',
    description:
      'Ask for Skye Canyon homes in Las Vegas NV 89166 by voice. Dr. Jan Duffy helps match listings to your criteria.',
    path: '/voice-search',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Skye Canyon Homes for Sale',
    description:
      'Privacy policy for SkyeCanyonHomesForSale.com, Dr. Jan Duffy REALTOR®, serving Las Vegas NV 89166.',
    path: '/privacy-policy',
  },
  '/terms-of-service': {
    title: 'Terms of Service | Skye Canyon Homes for Sale',
    description:
      'Terms of service for SkyeCanyonHomesForSale.com and Dr. Jan Duffy real estate services in Las Vegas NV 89166.',
    path: '/terms-of-service',
  },
};

export function marketingMetadata(path: string): Metadata {
  const entry = pages[path];
  if (!entry) {
    return pageMetadata(
      'Skye Canyon Real Estate | Las Vegas NV 89166',
      'Dr. Jan Duffy, REALTOR® — Skye Canyon homes in Las Vegas NV 89166. Call (702) 500-1902.',
      path,
    );
  }
  return pageMetadata(entry.title, entry.description, entry.path);
}
