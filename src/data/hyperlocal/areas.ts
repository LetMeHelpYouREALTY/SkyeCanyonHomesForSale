import type { HyperlocalArea } from './types';

export const nearbyAreas: HyperlocalArea[] = [
  {
    slug: 'centennial-hills',
    name: 'Centennial Hills',
    zipCodes: ['89149', '89131'],
    headline: 'Centennial Hills Homes for Sale — Las Vegas NV',
    description:
      'Centennial Hills is an established northwest Las Vegas area near Skye Canyon zip 89166, with resale homes, shopping at Centennial Center, and access to US-95.',
    answerSummary:
      'Centennial Hills in northwest Las Vegas (zip 89149) offers established neighborhoods near Skye Canyon, with varied home styles and proximity to shopping and recreation.',
    highlights: [
      'Established northwest neighborhoods',
      'Centennial Center shopping',
      'Near Skye Canyon 89166',
      'Access to US-95 and CC-215',
    ],
    geo: { latitude: 36.279, longitude: -115.291 },
    faqs: [
      {
        question: 'How far is Centennial Hills from Skye Canyon?',
        answer:
          'Centennial Hills sits adjacent to Skye Canyon in northwest Las Vegas. Many buyers compare Centennial Hills resale in 89149 with Skye Canyon new construction in 89166.',
      },
      {
        question: 'What is the price range in Centennial Hills?',
        answer:
          'Centennial Hills home prices vary by subdivision and property age. Contact Dr. Jan Duffy at (702) 500-1902 for a current comparative market analysis versus Skye Canyon.',
      },
    ],
  },
];

export function getArea(slug: string): HyperlocalArea | undefined {
  return nearbyAreas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return nearbyAreas.map((a) => a.slug);
}
