import type { HyperlocalPark } from './types';

export const parks: HyperlocalPark[] = [
  {
    slug: 'skye-canyon-park',
    name: 'Skye Canyon Park',
    size: '15-acre',
    description:
      'The 15-acre Skye Canyon Park is the main recreation hub at 10111 W Skye Canyon Park Drive, adjacent to Skye Center and Skye Fitness in Las Vegas NV 89166.',
    answerSummary:
      'Skye Canyon Park is a 15-acre community park in Skye Canyon NV 89166 open 6:00am–9:00pm daily, with splash pad, sports fields, walking paths, and a resident Junior Olympic pool.',
    address: '10111 W Skye Canyon Park Dr, Las Vegas, NV 89166',
    hours: '6:00am – 9:00pm daily',
    features: [
      '15-acre park',
      'Skye Center',
      'Skye Fitness',
      'Two covered play areas',
      'Splash pad',
      'Grass field with football & soccer goal posts',
      'Basketball court with 6 hoops',
      '½ mile walking path',
      'Junior Olympic swimming pool',
    ],
    highlights: ['Main community hub', 'Resident pool access', 'Event hosting venue'],
    geo: { latitude: 36.2648, longitude: -115.3275 },
    faqs: [
      {
        question: 'What are the hours for Skye Canyon Park?',
        answer:
          'Skye Canyon Park is open daily from 6:00am to 9:00pm at 10111 W Skye Canyon Park Drive, Las Vegas, NV 89166, adjacent to Skye Center and Skye Fitness.',
      },
      {
        question: 'Does Skye Canyon Park have a swimming pool?',
        answer:
          'Yes. Skye Canyon Park includes a Junior Olympic swimming pool with resident access, plus a splash pad and covered play areas for year-round recreation.',
      },
    ],
  },
  {
    slug: 'eagle-canyon-park',
    name: 'Eagle Canyon Park',
    description:
      'Eagle Canyon Park in Skye Canyon offers play structures, open green space, and walking paths for outdoor recreation in northwest Las Vegas.',
    answerSummary:
      'Eagle Canyon Park is a neighborhood park in Skye Canyon NV 89166 with play structures, open green spaces, and walking paths.',
    features: ['Play structures', 'Open green spaces', 'Walking paths'],
    highlights: ['Neighborhood park', 'Play structures', 'Walking paths'],
    geo: { latitude: 36.2658, longitude: -115.326 },
    faqs: [
      {
        question: 'What amenities does Eagle Canyon Park offer?',
        answer:
          'Eagle Canyon Park features play structures, open green spaces, and walking paths within the Skye Canyon master-planned community in Las Vegas NV 89166.',
      },
    ],
  },
  {
    slug: 'skye-view-park',
    name: 'Skye View Park',
    description:
      'Skye View Park offers mountain views, walking trails, and picnic areas within Skye Canyon, Las Vegas NV 89166.',
    answerSummary:
      'Skye View Park in Skye Canyon NV 89166 offers mountain views, walking trails, and picnic areas for outdoor recreation.',
    features: ['Mountain views', 'Walking trails', 'Picnic areas'],
    highlights: ['Scenic vistas', 'Walking trails', 'Picnic areas'],
    geo: { latitude: 36.2635, longitude: -115.329 },
    faqs: [
      {
        question: 'What is special about Skye View Park?',
        answer:
          'Skye View Park is known for mountain views and walking trails within Skye Canyon, providing a scenic outdoor setting in zip code 89166.',
      },
    ],
  },
  {
    slug: 'big-skye-park',
    name: 'Big Skye Park',
    description:
      'Big Skye Park provides large open recreation areas and multi-use fields for community gatherings in Skye Canyon.',
    answerSummary:
      'Big Skye Park in Skye Canyon NV 89166 has large open areas, multi-use fields, and space for community gatherings.',
    features: ['Large open areas', 'Multi-use fields', 'Community gathering spaces'],
    highlights: ['Spacious recreation', 'Multi-use fields', 'Community events'],
    geo: { latitude: 36.2672, longitude: -115.3255 },
    faqs: [
      {
        question: 'What activities can you do at Big Skye Park?',
        answer:
          'Big Skye Park offers large open recreation areas and multi-use fields suited for sports, gatherings, and outdoor activities in Skye Canyon.',
      },
    ],
  },
  {
    slug: 'starlight-park',
    name: 'Starlight Park',
    description:
      'Starlight Park includes evening lighting, play areas, and open spaces for extended outdoor use in Skye Canyon.',
    answerSummary:
      'Starlight Park in Skye Canyon NV 89166 features evening lighting, play areas, and open spaces for recreation after sunset.',
    features: ['Evening lighting', 'Play areas', 'Open spaces'],
    highlights: ['Evening lighting', 'Play areas', 'Extended hours usage'],
    geo: { latitude: 36.2628, longitude: -115.3282 },
    faqs: [
      {
        question: 'Does Starlight Park have lighting for evening use?',
        answer:
          'Yes. Starlight Park includes evening lighting for play areas and open spaces, supporting recreation after sunset in Skye Canyon.',
      },
    ],
  },
];

export function getPark(slug: string): HyperlocalPark | undefined {
  return parks.find((p) => p.slug === slug);
}

export function getAllParkSlugs(): string[] {
  return parks.map((p) => p.slug);
}
