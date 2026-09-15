import type { HyperlocalBuilder } from './types';

export const builders: HyperlocalBuilder[] = [
  {
    slug: 'century-communities',
    name: 'Century Communities',
    description:
      'Century Communities is the primary new home builder in Skye Canyon, Las Vegas NV 89166, with Eaglepointe, Marvella, and Skyecrest. Confirm current builder pricing on live MLS.',
    answerSummary:
      'Century Communities builds Eaglepointe, Marvella, and Skyecrest in Skye Canyon NV 89166, with floor plans up to six bedrooms. Confirm current pricing on live MLS.',
    communities: ['Eaglepointe', 'Marvella', 'Skyecrest'],
    communitySlugs: ['eaglepointe', 'marvella', 'skyecrest'],
    priceRange: 'Confirm live MLS',
    faqs: [
      {
        question: 'What Skye Canyon communities does Century Communities build?',
        answer:
          'Century Communities builds Eaglepointe, Marvella, and Skyecrest in Skye Canyon Las Vegas NV 89166. Confirm current list prices and incentives with Dr. Jan Duffy at (702) 500-1902.',
      },
      {
        question: 'Does Century Communities offer quick move-in homes in Skye Canyon?',
        answer:
          'Century Communities periodically offers quick move-in inventory in Skye Canyon. Availability changes weekly — contact Dr. Jan Duffy at (702) 500-1902 for current Century Communities homes.',
      },
    ],
  },
  {
    slug: 'toll-brothers',
    name: 'Toll Brothers',
    description:
      'Toll Brothers has built luxury homes in the greater Las Vegas area. Dr. Jan Duffy helps buyers compare Toll Brothers options with Skye Canyon new construction and resale inventory.',
    answerSummary:
      'Toll Brothers offers luxury new construction in the greater Las Vegas market. Buyers comparing Toll Brothers with Skye Canyon can work with Dr. Jan Duffy for side-by-side market analysis.',
    communities: ['Las Vegas area luxury builds'],
    communitySlugs: [],
    priceRange: 'Luxury tier',
    faqs: [
      {
        question: 'Does Toll Brothers build in Skye Canyon?',
        answer:
          'Toll Brothers focuses on luxury new construction in the greater Las Vegas area. Skye Canyon new construction is primarily by Century Communities. Dr. Jan Duffy can help compare options across builders and zip codes.',
      },
    ],
  },
  {
    slug: 'lennar',
    name: 'Lennar',
    description:
      'Lennar builds across the Las Vegas valley. Dr. Jan Duffy provides buyer representation for Lennar and Skye Canyon purchases with local market expertise in zip codes 89166, 89149, and 89144.',
    answerSummary:
      'Lennar offers new construction across Las Vegas. For Skye Canyon-specific inventory, Century Communities is the on-site builder in 89166 — Dr. Jan Duffy represents buyers for both.',
    communities: ['Las Vegas valley communities'],
    communitySlugs: [],
    priceRange: 'Varies by community',
    faqs: [
      {
        question: 'How do Lennar homes compare to Skye Canyon new construction?',
        answer:
          'Lennar communities are located throughout Las Vegas. Skye Canyon 89166 new construction is led by Century Communities. Dr. Jan Duffy helps buyers compare floor plans, HOA structures, and commute times across options.',
      },
    ],
  },
];

export function getBuilder(slug: string): HyperlocalBuilder | undefined {
  return builders.find((b) => b.slug === slug);
}

export function getAllBuilderSlugs(): string[] {
  return builders.map((b) => b.slug);
}
