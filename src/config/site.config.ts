/**
 * Single source of truth for NAP, hours, and business metadata.
 * Must match Google Business Profile exactly.
 */
export const siteConfig = {
  name: 'Dr. Jan Duffy REALTOR®',
  businessName: 'Skye Canyon Homes for Sale',
  legalName: 'Dr. Jan Duffy Real Estate Services',
  url: 'https://www.skyecanyonhomesforsale.com',
  phone: '(702) 500-1902',
  phoneTel: '+17025001902',
  email: 'DrDuffy@SkyeCanyonHomesForSale.com',
  license: 'S.0197614',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  address: {
    street: '10111 W. Skye Canyon Park Drive',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89166',
    country: 'US',
    formatted: '10111 W. Skye Canyon Park Drive, Las Vegas, NV 89166',
  },
  geo: {
    latitude: 36.2648,
    longitude: -115.3275,
  },
  hours: {
    weekdays: { opens: '09:00', closes: '18:00', label: 'Monday - Friday: 9:00 AM - 6:00 PM' },
    saturday: { opens: '09:00', closes: '17:00', label: 'Saturday: 9:00 AM - 5:00 PM' },
    sunday: { opens: '11:00', closes: '16:00', label: 'Sunday: 11:00 AM - 4:00 PM' },
  },
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-17:00', 'Su 11:00-16:00'],
  googleReviewUrl: 'https://g.page/r/CVaZ8MapUtFoEBM/review',
  social: {
    facebook: 'https://facebook.com/skyecanyonhomes',
    instagram: 'https://instagram.com/skyecanyonhomes',
    linkedin: 'https://linkedin.com/in/drjanduffy',
    youtube: 'https://youtube.com/@skyecanyonhomes',
  },
  realscoutOnboarding: 'https://drjanduffy.realscout.com/onboarding',
  ogImage: '/images/og/skye-canyon-homes.jpg',
} as const;

export type SiteConfig = typeof siteConfig;
