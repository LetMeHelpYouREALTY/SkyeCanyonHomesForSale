import { siteImage, siteImageWebp } from '@/lib/cloudflare-images';

export interface SectionImage {
  src: string;
  srcWebp: string;
  alt: string;
}

function section(name: string, alt: string): SectionImage {
  return {
    src: siteImage(`sections/${name}.jpg`),
    srcWebp: siteImageWebp(`sections/${name}.jpg`),
    alt,
  };
}

/** Images matched to H2/H3 section topics for GBP/local SEO. */
export const sectionImages = {
  listings: section(
    'listings',
    'Current Skye Canyon MLS home for sale in Las Vegas NV 89166',
  ),
  valuation: section(
    'valuation',
    'Skye Canyon home in Las Vegas NV 89166 for instant valuation',
  ),
  golf: section(
    'golf',
    'Desert Highlands Golf Course homes in Skye Canyon Las Vegas NV 89166',
  ),
  recreation: section(
    'recreation',
    'Skye Canyon community recreation pool Las Vegas NV 89166',
  ),
  office: section(
    'office-exterior',
    'Dr. Jan Duffy REALTOR office at 10111 W. Skye Canyon Park Drive Las Vegas NV 89166',
  ),
  luxuryInterior: section(
    'luxury-interior',
    'Luxury home interior in Skye Canyon Las Vegas NV 89166',
  ),
  newConstruction: section(
    'new-construction',
    'New construction homes in Skye Canyon Las Vegas NV 89166',
  ),
  guide: {
    src: siteImage('heroes/community.jpg'),
    srcWebp: siteImageWebp('heroes/community.jpg'),
    alt: 'Skye Canyon neighborhood street in Las Vegas NV 89166',
  },
  market: {
    src: siteImage('heroes/market.jpg'),
    srcWebp: siteImageWebp('heroes/market.jpg'),
    alt: 'Northwest Las Vegas real estate market view NV 89166',
  },
  schools: {
    src: siteImage('heroes/schools.jpg'),
    srcWebp: siteImageWebp('heroes/schools.jpg'),
    alt: 'School campus serving Skye Canyon Las Vegas NV 89166',
  },
  parks: {
    src: siteImage('gbp/park.jpg'),
    srcWebp: siteImageWebp('gbp/park.jpg'),
    alt: 'Skye Canyon Park playground pool and trails Las Vegas NV 89166',
  },
  northwest: {
    src: siteImage('heroes/northwest.jpg'),
    srcWebp: siteImageWebp('heroes/northwest.jpg'),
    alt: 'Northwest Las Vegas homes and desert landscape NV 89166',
  },
  communities: {
    src: siteImage('sections/new-construction.jpg'),
    srcWebp: siteImageWebp('sections/new-construction.jpg'),
    alt: 'Eaglepointe Marvella and Skyecrest new homes Skye Canyon Las Vegas',
  },
  monument: {
    src: siteImage('gbp/cover.jpg'),
    srcWebp: siteImageWebp('gbp/cover.jpg'),
    alt: 'Skye Canyon monument gate at 10111 W. Skye Canyon Park Drive Las Vegas NV 89166',
  },
  profile: {
    src: siteImage('gbp/profile.jpg'),
    srcWebp: siteImageWebp('gbp/profile.jpg'),
    alt: 'Dr. Jan Duffy REALTOR calling clients from Skye Canyon Las Vegas NV 89166',
  },
  communityMap: {
    src: siteImage('gbp/community-map.jpg'),
    srcWebp: siteImageWebp('gbp/community-map.jpg'),
    alt: 'Skye Canyon community map of parks, campuses, and home villages Las Vegas NV 89166',
  },
  clubhouse: {
    src: siteImage('gbp/clubhouse.jpg'),
    srcWebp: siteImageWebp('gbp/clubhouse.jpg'),
    alt: 'Skye Canyon recreation clubhouse terrace and firepit Las Vegas NV 89166',
  },
} as const;

export const propertyImages = {
  golf: siteImage('properties/property-golf.jpg'),
  luxury: siteImage('properties/property-luxury.jpg'),
  newConstruction: siteImage('properties/property-new.jpg'),
  single: siteImage('properties/property-single.jpg'),
} as const;
