/**
 * Single source of truth for NAP, hours, and business metadata.
 * Must match Google Business Profile exactly.
 */
import { siteImage } from '@/lib/cloudflare-images';

export const siteConfig = {
  name: 'Dr. Jan Duffy REALTOR®',
  /** Google Business Profile title — verified 2026-09-15 */
  businessName: 'Skye Canyon Real Estate | Homes by Dr. Jan Duffy',
  legalName: 'Dr. Jan Duffy Real Estate Services',
  url: 'https://www.skyecanyonhomesforsale.com',
  phone: '(702) 500-1902',
  phoneTel: '+17025001902',
  email: 'DrDuffy@SkyeCanyonHomesForSale.com',
  license: 'S.0197614',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  placeId: 'ChIJ_yrcejWTyIARVpnwxqlS0Wg',
  mapsCid: '7552908939217639766',
  address: {
    /** Matches live GBP storefrontAddress.addressLines (verified 2026-09-15). */
    street: '10111 W Skye Canyon Park Dr',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89166',
    country: 'US',
    formatted: '10111 W Skye Canyon Park Dr, Las Vegas, NV 89166',
  },
  geo: {
    latitude: 36.2648,
    longitude: -115.3275,
  },
  hours: {
    daily: { opens: '08:00', closes: '20:00', label: 'Monday - Sunday: 8:00 AM - 8:00 PM' },
  },
  /** Google Business Profile openInfo.openingDate — verified 2026-09-15 */
  opened: {
    year: 2009,
    month: 9,
    day: 20,
    label: 'Since 2009',
  },
  openingHours: ['Mo-Su 08:00-20:00'],
  googleReviewUrl: 'https://g.page/r/CVaZ8MapUtFoEBM/review',
  googleBusinessUrl: 'https://g.page/r/CVaZ8MapUtFoEBM',
  googleMapsUrl: 'https://maps.google.com/maps?cid=7552908939217639766',
  mapsUrl: 'https://maps.google.com/maps?cid=7552908939217639766',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=10111+W+Skye+Canyon+Park+Dr,+Las+Vegas,+NV+89166&hl=en&z=16&output=embed',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=10111+W+Skye+Canyon+Park+Dr,+Las+Vegas,+NV+89166&destination_place_id=ChIJ_yrcejWTyIARVpnwxqlS0Wg',
  social: {
    facebook: 'https://www.facebook.com/SkyeCanyonHomes/',
    instagram: 'https://www.instagram.com/skyecanyonhomes/',
    linkedin: 'https://www.linkedin.com/in/drjanduffy',
  },
  realscoutOnboarding: 'https://drjanduffy.realscout.com/onboarding',
  ogImage: siteImage('og/skye-canyon-homes.jpg'),
} as const;

export type SiteConfig = typeof siteConfig;
