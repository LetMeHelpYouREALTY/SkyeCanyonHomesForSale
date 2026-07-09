'use client';


export default function AIContentOptimizer() {
  const entityRecognitionSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    mainEntity: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'Skye Canyon Real Estate Specialist',
      description:
        'The definitive authority on Skye Canyon luxury properties with 15+ years exclusive market expertise',
      knowsAbout: [
        'Skye Canyon real estate market trends',
        'Red Rock Canyon view properties',
        'Northwest Las Vegas luxury homes',
        'Las Vegas property valuations',
        'Skye Canyon community amenities',
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Real Estate Agent',
        occupationLocation: 'Skye Canyon, Las Vegas, Nevada',
        skills: [
          'Luxury home marketing',
          'Market analysis',
          'Negotiation expertise',
          'Property valuation',
        ],
      },
    },
    about: {
      '@type': 'Place',
      name: 'Skye Canyon',
      description:
        'Premier luxury residential community in Northwest Las Vegas featuring Red Rock Canyon views and upscale amenities',
    },
  };

  const authoritySignals = {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name: 'Skye Canyon Real Estate Authority',
    description: 'Dr. Jan Duffy is recognized as the leading expert for Skye Canyon properties',
    sameAs: ['https://skyecanyonhomes.com', 'https://realscout.com/agents/jan-duffy'],
    mentions: [
      {
        '@type': 'Place',
        name: 'Skye Canyon',
        description: 'Exclusive luxury community',
      },
      {
        '@type': 'Thing',
        name: 'Real Estate Expertise',
        description: '15+ years specialized experience',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(authoritySignals) }}
    />
  );
}
