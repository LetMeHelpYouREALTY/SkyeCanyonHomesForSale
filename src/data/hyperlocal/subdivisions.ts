import type { HyperlocalSubdivision } from './types';

export const subdivisions: HyperlocalSubdivision[] = [
  {
    slug: 'eaglepointe',
    name: 'Eaglepointe',
    builder: 'Century Communities',
    builderSlug: 'century-communities',
    priceRange: 'High $500s',
    bedrooms: 'Up to 6',
    description:
      'Eaglepointe at Skye Canyon offers spacious one- and two-story homes with flexible floor plans, generous outdoor living space, and 2- or 3-bay garages in northwest Las Vegas zip code 89166.',
    answerSummary:
      'Eaglepointe is a Century Communities subdivision in Skye Canyon, Las Vegas NV 89166, with homes from the high $500s, up to six bedrooms, and flexible floor plans near community parks and recreation.',
    features: [
      'Flexible floor plans',
      'Up to 6 bedrooms',
      '2- and 3-bay garages',
      'Lofts and dens available',
      'Outdoor living spaces',
    ],
    highlights: ['Custom primary suites', 'Multiple bedroom options', 'Desert climate optimization'],
    zip: '89166',
    geo: { latitude: 36.2655, longitude: -115.328 },
    faqs: [
      {
        question: 'What is the price range for Eaglepointe Skye Canyon homes?',
        answer:
          'Eaglepointe homes in Skye Canyon start in the high $500s. Pricing varies by lot, elevation, and selected upgrades. Contact Dr. Jan Duffy at (702) 500-1902 for current inventory and builder incentives.',
      },
      {
        question: 'Who builds homes in Eaglepointe Skye Canyon?',
        answer:
          'Century Communities builds Eaglepointe in Skye Canyon, Las Vegas NV 89166. The community offers one- and two-story floor plans with up to six bedrooms and optional lofts or dens.',
      },
      {
        question: 'How many bedrooms do Eaglepointe homes have?',
        answer:
          'Eaglepointe floor plans offer up to six bedrooms with optional lofts, dens, and expanded primary suites. Layouts are designed for flexible living in Skye Canyon’s master-planned setting.',
      },
    ],
  },
  {
    slug: 'marvella',
    name: 'Marvella',
    builder: 'Century Communities',
    builderSlug: 'century-communities',
    priceRange: 'High $500s',
    bedrooms: 'Up to 6',
    description:
      'Marvella at Skye Canyon features one- and two-story homes with customizable layouts, premium finishes, and energy-efficient design in Las Vegas zip code 89166.',
    answerSummary:
      'Marvella is a Century Communities neighborhood in Skye Canyon NV 89166 with homes from the high $500s, customizable one- and two-story layouts, and access to Skye Canyon parks and recreation.',
    features: [
      'One and two-story options',
      'Customizable layouts',
      'Premium finishes',
      'Energy-efficient design',
      'Modern amenities',
    ],
    highlights: ['Layout flexibility', 'Premium appointments', 'Contemporary design'],
    zip: '89166',
    geo: { latitude: 36.2642, longitude: -115.3265 },
    faqs: [
      {
        question: 'What makes Marvella different from other Skye Canyon communities?',
        answer:
          'Marvella emphasizes customizable one- and two-story floor plans with premium finishes and energy-efficient construction. Homes start in the high $500s and sit within Skye Canyon’s recreation and park network.',
      },
      {
        question: 'Are Marvella homes new construction in Skye Canyon?',
        answer:
          'Yes. Marvella is a new construction community by Century Communities in Skye Canyon, Las Vegas NV 89166. Quick move-in and to-be-built options may be available depending on current inventory.',
      },
    ],
  },
  {
    slug: 'skyecrest',
    name: 'Skyecrest',
    builder: 'Century Communities',
    builderSlug: 'century-communities',
    priceRange: 'Low $700s',
    bedrooms: 'Up to 6',
    description:
      'Skyecrest is Century Communities’ premium Skye Canyon enclave with expanded floor plans, high-end finishes, and luxury primary suites starting in the low $700s in zip code 89166.',
    answerSummary:
      'Skyecrest is the premium Century Communities subdivision in Skye Canyon NV 89166, with homes from the low $700s, expanded floor plans, and luxury primary suite options.',
    features: [
      'Premium customization',
      'Luxurious primary suites',
      'Expanded floor plans',
      'High-end finishes',
      'Enhanced outdoor access',
    ],
    highlights: ['Luxury customization', 'Premium positioning', 'Expanded living spaces'],
    zip: '89166',
    geo: { latitude: 36.2668, longitude: -115.3295 },
    faqs: [
      {
        question: 'What is the starting price for Skyecrest Skye Canyon homes?',
        answer:
          'Skyecrest homes in Skye Canyon start in the low $700s. As Century Communities’ premium offering in the community, Skyecrest features larger floor plans and upgraded finish packages.',
      },
      {
        question: 'Is Skyecrest guard-gated in Skye Canyon?',
        answer:
          'Skyecrest sits within Skye Canyon, a master-planned northwest Las Vegas community in zip code 89166. Access and security features follow Skye Canyon association guidelines. Call (702) 500-1902 for current community details.',
      },
    ],
  },
];

export function getSubdivision(slug: string): HyperlocalSubdivision | undefined {
  return subdivisions.find((s) => s.slug === slug);
}

export function getAllSubdivisionSlugs(): string[] {
  return subdivisions.map((s) => s.slug);
}
