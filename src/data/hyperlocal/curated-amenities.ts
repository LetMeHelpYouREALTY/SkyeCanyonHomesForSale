import type { AmenityCategoryId } from '@/config/community-map.config';

export type CuratedAmenitySchemaType =
  | 'Park'
  | 'GolfCourse'
  | 'GroceryStore'
  | 'Hospital'
  | 'ShoppingCenter'
  | 'Airport'
  | 'Place';

export interface CuratedAmenity {
  id: string;
  name: string;
  /** Omit from JSON-LD if unverified; required for curated list display when present. */
  address: string;
  category: AmenityCategoryId;
  schemaType: CuratedAmenitySchemaType;
  geo?: { latitude: number; longitude: number };
  note?: string;
  /** Official primary source used to verify name and address. */
  sourceUrl: string;
}

/** Verified names and addresses — used for SSR copy, fallback list, and ItemList schema. */
export const curatedAmenities: CuratedAmenity[] = [
  {
    id: 'skye-canyon-park',
    name: 'Skye Canyon Park',
    address: '10111 W Skye Canyon Park Dr, Las Vegas, NV 89166',
    category: 'parks',
    schemaType: 'Park',
    geo: { latitude: 36.2648, longitude: -115.3275 },
    sourceUrl: 'https://skyecanyon.com/amenities/parks/',
    note: '15-acre community hub with sports fields, splash pad, and walking paths (public hours 6:00 a.m.–9:00 p.m.).',
  },
  {
    id: 'smiths-skye-canyon',
    name: "Smith's Marketplace (Skye Canyon)",
    address: '9710 W Skye Canyon Park Dr, Las Vegas, NV 89166',
    category: 'grocery',
    schemaType: 'GroceryStore',
    geo: { latitude: 36.3164, longitude: -115.308 },
    sourceUrl:
      'https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/smiths-marketplace/706/00367',
    note: 'Grocery, pharmacy, and fuel at Skye Canyon Marketplace.',
  },
  {
    id: 'tpc-las-vegas',
    name: 'TPC Las Vegas',
    address: '9851 Canyon Run Dr, Las Vegas, NV 89144',
    category: 'golf',
    schemaType: 'GolfCourse',
    geo: { latitude: 36.1761, longitude: -115.3094 },
    sourceUrl: 'https://tpc.com/lasvegas',
    note: 'Public PGA TOUR golf course in Summerlin, west of Skye Canyon.',
  },
  {
    id: 'centennial-hills-hospital',
    name: 'Centennial Hills Hospital Medical Center',
    address: '6900 North Durango Dr, Las Vegas, NV 89149',
    category: 'healthcare',
    schemaType: 'Hospital',
    sourceUrl: 'https://www.centennialhillshospital.com/patients-visitors/maps-directions',
    note: 'Full-service hospital on North Durango Drive in northwest Las Vegas.',
  },
  {
    id: 'centennial-center',
    name: 'Centennial Center',
    address: '8060 W Tropical Pkwy, Las Vegas, NV 89149',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    sourceUrl: 'https://kiterealty.com/properties/centennial-center',
    note: 'Retail center on Tropical Parkway near Centennial Hills.',
  },
  {
    id: 'centennial-square',
    name: 'Centennial Square',
    address: '6446 N Durango Dr, Las Vegas, NV 89149',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    sourceUrl: 'https://thepuppystorelasvegas.com/contact-us/',
    note: 'Durango Drive retail near the CC-215 beltway.',
  },
  {
    id: 'downtown-summerlin',
    name: 'Downtown Summerlin',
    address: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    sourceUrl: 'https://www.downtownsummerlin.com/',
    note: 'Dining, retail, and office in the Summerlin master plan.',
  },
  {
    id: 'harry-reid-airport',
    name: 'Harry Reid International Airport',
    address: '5757 Wayne Newton Blvd, Las Vegas, NV 89119',
    category: 'parking',
    schemaType: 'Airport',
    sourceUrl: 'https://www.harryreidairport.com/',
    note: 'Primary commercial airport serving the Las Vegas Valley (regional commute reference).',
  },
];

export function curatedByCategory(category: AmenityCategoryId): CuratedAmenity[] {
  return curatedAmenities.filter((a) => a.category === category);
}

export function directionsUrlForAddress(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

export interface AmenityContentSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export const amenityContentSections: AmenityContentSection[] = [
  {
    id: 'dining',
    heading: 'Dining near Skye Canyon',
    paragraphs: [
      "Smith's Marketplace at 9710 W Skye Canyon Park Dr anchors everyday dining inside Skye Canyon with a deli, coffee bar, and grab-and-go options.",
      'Centennial Square on North Durango Drive and Downtown Summerlin on Festival Plaza Drive add sit-down restaurants a short drive from zip 89166.',
    ],
  },
  {
    id: 'parks-recreation',
    heading: 'Parks and recreation in Skye Canyon',
    paragraphs: [
      'Skye Canyon Park at 10111 W Skye Canyon Park Dr is the 15-acre recreation hub with sports fields, splash pad, walking paths, and resident pool access.',
      'Neighborhood parks inside Skye Canyon include Eagle Canyon Park, Skye View Park, Big Skye Park, and Starlight Park for playgrounds and open space.',
    ],
  },
  {
    id: 'golf',
    heading: 'Golf near Skye Canyon',
    paragraphs: [
      'TPC Las Vegas at 9851 Canyon Run Dr in Summerlin is a public PGA TOUR course west of Skye Canyon with Red Rock Canyon views.',
      'Buyers comparing golf-adjacent lots should confirm HOA and membership details on each MLS listing with Dr. Jan Duffy.',
    ],
  },
  {
    id: 'healthcare',
    heading: 'Healthcare near Skye Canyon',
    paragraphs: [
      'Centennial Hills Hospital Medical Center at 6900 North Durango Dr provides emergency and inpatient care in northwest Las Vegas.',
      'Urgent care and medical offices also cluster along North Durango Drive and Centennial Center Boulevard near Centennial Hills.',
    ],
  },
  {
    id: 'shopping',
    heading: 'Shopping and errands',
    paragraphs: [
      "Daily groceries are at Smith's Marketplace on W Skye Canyon Park Dr in 89166.",
      'Centennial Center on W Tropical Parkway, Centennial Square on Durango Drive, and Downtown Summerlin extend retail and services within a regional drive of Skye Canyon.',
    ],
  },
  {
    id: 'schools',
    heading: 'Schools serving Skye Canyon (89166)',
    paragraphs: [
      'Clark County School District assigns campuses by address — confirm your street on the CCSD zoning tool before you write an offer.',
      'Named campuses commonly referenced for 89166 include Kenneth Divich, William & Mary Scherkenbach, and James Bilbray elementary schools; Ralph Cadwallader and Edmundo Escobedo Sr. middle schools; and Arbor View High School.',
    ],
  },
  {
    id: 'commute',
    heading: 'Commute and regional destinations',
    paragraphs: [
      'Skye Canyon sits in northwest Las Vegas with access to US-95 and the CC-215 beltway for valley commutes.',
      'Approximate driving distance to the Las Vegas Strip is often 20–25 miles; Downtown Summerlin is closer to the west. Actual drive times vary with traffic and time of day.',
      'Harry Reid International Airport is roughly 25 miles southeast via freeways — allow extra time for peak travel periods.',
    ],
  },
];

export interface AmenityFaq {
  question: string;
  answer: string;
}

export const amenityFaqs: AmenityFaq[] = [
  {
    question: 'What grocery stores are near Skye Canyon?',
    answer:
      "Smith's Marketplace at 9710 W Skye Canyon Park Dr in Las Vegas NV 89166 is the primary grocery anchor inside Skye Canyon, with pharmacy and fuel on site.",
  },
  {
    question: 'How far is Skye Canyon from the Las Vegas Strip?',
    answer:
      'Skye Canyon in zip 89166 is roughly 20–25 miles northwest of the Las Vegas Strip; drive time depends on traffic and which Strip resort you target.',
  },
  {
    question: 'Are there hospitals near Skye Canyon?',
    answer:
      'Centennial Hills Hospital Medical Center at 6900 North Durango Dr, Las Vegas NV 89149, is one of the closest full-service hospitals to Skye Canyon.',
  },
  {
    question: 'What parks are in Skye Canyon?',
    answer:
      'Skye Canyon Park at 10111 W Skye Canyon Park Dr is the main 15-acre hub, plus neighborhood parks such as Eagle Canyon, Skye View, Big Skye, and Starlight parks inside the community.',
  },
  {
    question: 'Where can I play golf near Skye Canyon?',
    answer:
      'TPC Las Vegas at 9851 Canyon Run Dr in Summerlin is a well-known public course west of Skye Canyon; confirm tee times and fees directly with the course.',
  },
  {
    question: 'What shopping is near Skye Canyon 89166?',
    answer:
      "In-community shopping starts at Smith's on W Skye Canyon Park Dr; Centennial Center, Centennial Square, and Downtown Summerlin add regional retail a short drive away.",
  },
  {
    question: 'What schools serve Skye Canyon?',
    answer:
      '89166 addresses are assigned by Clark County School District — verify your street on the CCSD locator; common campus names include Divich, Scherkenbach, Bilbray, Cadwallader, Escobedo Sr., and Arbor View High.',
  },
];
