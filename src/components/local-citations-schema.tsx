'use client';

import { siteConfig } from '@/config/site.config';
import { schemaImages } from '@/lib/schema-images';
import { schemaGeo, schemaPostalAddress } from '@/lib/schema-nap';

interface LocalCitationSchemaProps {
  pageType?: string;
}

export default function LocalCitationsSchema({ pageType: _pageType = 'homepage' }: LocalCitationSchemaProps) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.name,
    description:
      'Premier Skye Canyon real estate specialist in Las Vegas NV 89166. Expert in luxury homes, new construction, and Desert Highlands Golf Course properties.',
    url: siteConfig.url,
    image: schemaImages.office,
    logo: schemaImages.og,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: schemaPostalAddress,
    geo: schemaGeo,
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        sameAs: 'https://en.wikipedia.org/wiki/Las_Vegas',
      },
      {
        '@type': 'Neighborhood',
        name: 'Skye Canyon',
        containedIn: 'Las Vegas, NV',
      },
      {
        '@type': 'PostalCode',
        name: '89166',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: schemaGeo,
      geoRadius: '25000',
    },
    priceRange: '$300,000 - $2,000,000+',
    paymentAccepted: ['Cash', 'Check', 'Credit Card'],
    currenciesAccepted: 'USD',
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-17:00', 'Su 11:00-16:00'],
    specialties: [
      'Skye Canyon Real Estate',
      'Luxury Home Sales',
      'New Construction',
      'Golf Course Properties',
      'Buyer Representation',
      'Seller Services',
    ],
    knowsAbout: [
      'Skye Canyon Community',
      'Desert Highlands Golf Course',
      'Las Vegas Real Estate Market',
      'Nevada Real Estate Law',
      'Luxury Property Marketing',
      'New Construction Process',
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Las Vegas Board of REALTORS',
        url: 'https://www.lvrealtors.com',
      },
      {
        '@type': 'Organization',
        name: 'National Association of REALTORS',
        url: 'https://www.nar.realtor',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional License',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Nevada Real Estate Division',
        },
      },
    ],
    sameAs: [
      'https://g.co/kgs/nbUf6Pj',
      'https://www.zillow.com/profile/DrJanDuffy/',
      'https://www.realtor.com/realestateagents/dr-jan-duffy_las-vegas_nv_2665289_000000000',
      'https://www.yelp.com/biz/dr-jan-duffy-realtor-las-vegas',
      'https://www.facebook.com/DrJanDuffyRealtor',
      'https://www.linkedin.com/in/drjanduffy',
    ],
  };

  const localSEOCitations = [
    {
      name: 'Skye Canyon homes for sale',
      url: 'https://skyecanyonhomesforsale.com/properties',
    },
    {
      name: 'Las Vegas 89166 real estate agent',
      url: 'https://skyecanyonhomesforsale.com',
    },
    {
      name: 'Desert Highlands Golf Course homes',
      url: 'https://skyecanyonhomesforsale.com/luxury-homes-las-vegas',
    },
    {
      name: 'Northwest Las Vegas realtor',
      url: 'https://skyecanyonhomesforsale.com/northwest-las-vegas',
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
