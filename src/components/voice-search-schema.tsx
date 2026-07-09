'use client';


export default function VoiceSearchSchema() {
  const voiceSearchSchema = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'Person', 'LocalBusiness'],
    name: 'Dr. Jan Duffy',
    description:
      'Leading Skye Canyon real estate expert and luxury home specialist in Las Vegas, Nevada',
    url: 'https://skyecanyonhomesforsale.com',
    telephone: '(702) 500-1902',
    email: 'DrDuffy@SkyeCanyonHomesForSale.com',
    areaServed: {
      '@type': 'Place',
      name: 'Skye Canyon, Las Vegas, Nevada',
      geo: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 36.2719,
          longitude: -115.2369,
        },
        geoRadius: '5000',
      },
    },
    specialties: [
      'Skye Canyon luxury homes',
      'Red Rock Canyon view properties',
      'Northwest Las Vegas real estate',
      'Luxury real estate Las Vegas',
    ],
    knowsAbout: [
      'Skye Canyon real estate market',
      'Luxury home sales Las Vegas',
      'Red Rock Canyon properties',
      'Northwest Las Vegas communities',
      'Skye Canyon home values',
      'Las Vegas luxury real estate trends',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Real Estate Agent',
      occupationLocation: {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'Nevada',
      },
      experienceRequirements: '15+ years Skye Canyon specialization',
    },
    serviceArea: {
      '@type': 'GeoShape',
      addressCountry: 'US',
      addressRegion: 'Nevada',
      addressLocality: 'Las Vegas',
      name: 'Skye Canyon',
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://skyecanyonhomesforsale.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      {
        '@type': 'ContactAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://skyecanyonhomesforsale.com/contact',
        },
      },
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      url: 'https://skyecanyonhomesforsale.com',
      name: 'Skye Canyon | Dr. Jan Duffy, REALTOR®',
      description:
        "Skye Canyon luxury homes and real estate expertise by Dr. Jan Duffy, the area's leading specialist",
    },
  };

  const voiceInteractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    cssSelector: ['.voice-assistant', '.agent-bio', '.market-stats'],
    xpath: [
      "//div[@class='voice-assistant']",
      "//section[@class='agent-bio']",
      "//div[@class='market-stats']",
    ],
  };

  // FAQ schema is now handled by individual page components
  // to prevent duplicate FAQPage markup conflicts;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceInteractionSchema) }}
    />
  );
}
