'use client';


export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': 'https://skyecanyonhomesforsale.com/#agent',
        name: 'Dr. Jan Duffy',
        description:
          'Premier Skye Canyon real estate specialist with 15+ years of exclusive community expertise and 150+ successful transactions.',
        url: 'https://skyecanyonhomesforsale.com',
        telephone: '(702) 500-1902',
        email: 'DrDuffy@SkyeCanyonHomesForSale.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '10111 W. Skye Canyon Park Drive',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: '89166',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.2648,
          longitude: -115.3275,
        },
        knowsAbout: [
          'Luxury Real Estate',
          'Skye Canyon Properties',
          'Las Vegas Real Estate Market',
          'Investment Properties',
          'New Construction',
          'Golf Course Communities',
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          name: 'Nevada Real Estate License',
          credentialCategory: 'license',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Nevada Real Estate Division',
          },
        },
        memberOf: {
          '@type': 'Organization',
          name: 'National Association of Realtors',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Las Vegas',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              addressCountry: 'US',
            },
          },
          {
            '@type': 'Neighborhood',
            name: 'Skye Canyon',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              postalCode: '89166',
              addressCountry: 'US',
            },
          },
        ],
        hasMap: 'https://www.google.com/maps?q=10111+W.+Skye+Canyon+Park+Drive,+Las+Vegas,+NV+89166',
      },
      {
        '@type': 'WebSite',
        url: 'https://skyecanyonhomesforsale.com',
        name: 'Skye Canyon Homes for Sale',
        description: 'Exclusive Skye Canyon real estate in Las Vegas, NV',
        publisher: {
          '@id': 'https://skyecanyonhomesforsale.com/#agent',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://skyecanyonhomesforsale.com/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
