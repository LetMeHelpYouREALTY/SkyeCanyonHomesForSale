import type { HyperlocalZipArea } from './types';

export const zipAreas: HyperlocalZipArea[] = [
  {
    slug: '89166',
    zip: '89166',
    name: 'Skye Canyon',
    headline: '89166 Homes for Sale — Skye Canyon Las Vegas',
    description:
      'Search homes for sale in zip code 89166, centered on Skye Canyon in northwest Las Vegas. Dr. Jan Duffy specializes in new construction, resale, and luxury properties in this master-planned community.',
    answerSummary:
      'Zip code 89166 covers Skye Canyon in northwest Las Vegas, NV, with new construction from Century Communities, resale homes, community parks, and recreation near Red Rock Canyon.',
    neighborhoods: ['Skye Canyon', 'Eaglepointe', 'Marvella', 'Skyecrest'],
    medianPrice: '$650K–$1.2M+',
    daysOnMarket: '28',
    geo: { latitude: 36.2648, longitude: -115.3275 },
    faqs: [
      {
        question: 'What neighborhoods are in zip code 89166?',
        answer:
          'Zip code 89166 is anchored by Skye Canyon, including subdivisions such as Eaglepointe, Marvella, and Skyecrest. The area is a master-planned northwest Las Vegas community with parks, recreation, and new construction.',
      },
      {
        question: 'What is the average home price in 89166?',
        answer:
          'Home prices in 89166 vary by subdivision and property type. Skye Canyon resale and new construction typically ranges from the high $500s to $1.2M and above. Contact Dr. Jan Duffy at (702) 500-1902 for a current market snapshot.',
      },
      {
        question: 'Who is the best realtor for 89166 Skye Canyon homes?',
        answer:
          'Dr. Jan Duffy, REALTOR® (Nevada License S.0197614), specializes in Skye Canyon and zip code 89166 with Berkshire Hathaway HomeServices Nevada Properties. Office: 10111 W. Skye Canyon Park Drive, Las Vegas, NV 89166.',
      },
    ],
  },
  {
    slug: '89149',
    zip: '89149',
    name: 'Centennial Hills',
    headline: '89149 Homes for Sale — Centennial Hills Las Vegas',
    description:
      'Explore homes for sale in zip code 89149 covering Centennial Hills and surrounding northwest Las Vegas neighborhoods near Skye Canyon.',
    answerSummary:
      'Zip code 89149 includes Centennial Hills in northwest Las Vegas, with established neighborhoods, shopping at Centennial Center, and proximity to Skye Canyon in 89166.',
    neighborhoods: ['Centennial Hills', 'Centennial Gateway', 'Northwest Las Vegas'],
    geo: { latitude: 36.279, longitude: -115.291 },
    faqs: [
      {
        question: 'Is 89149 near Skye Canyon?',
        answer:
          'Yes. Zip code 89149 (Centennial Hills) borders the Skye Canyon area in northwest Las Vegas. Many buyers compare Centennial Hills resale homes with Skye Canyon new construction in adjacent zip 89166.',
      },
      {
        question: 'What home styles are common in 89149?',
        answer:
          '89149 features established single-family homes, townhomes, and newer infill construction in Centennial Hills, with access to shopping, parks, and northwest Las Vegas freeways.',
      },
    ],
  },
  {
    slug: '89144',
    zip: '89144',
    name: 'Northwest Las Vegas',
    headline: '89144 Homes for Sale — Northwest Las Vegas',
    description:
      'Browse homes for sale in zip code 89144 in northwest Las Vegas, including communities near Skye Canyon and Centennial Hills.',
    answerSummary:
      'Zip code 89144 covers northwest Las Vegas areas with access to US-95, local shopping, and nearby master-planned communities including Skye Canyon in 89166.',
    neighborhoods: ['Northwest Las Vegas', 'Providence area', 'Near Centennial Hills'],
    geo: { latitude: 36.272, longitude: -115.305 },
    faqs: [
      {
        question: 'How does 89144 compare to Skye Canyon 89166?',
        answer:
          '89144 offers northwest Las Vegas housing with varied price points and established neighborhoods. Skye Canyon in 89166 is a newer master-planned community with Century Communities new construction and dedicated recreation amenities.',
      },
    ],
  },
];

export function getZipArea(slug: string): HyperlocalZipArea | undefined {
  return zipAreas.find((z) => z.slug === slug || z.zip === slug);
}

export function getAllZipSlugs(): string[] {
  return zipAreas.map((z) => z.slug);
}
