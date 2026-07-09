'use client';


interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: any;
  pageType?: 'website' | 'article' | 'property' | 'location' | 'service';
}

export default function EnhancedSEOMetadata({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://skyecanyonhomesforsale.com/images/skye-canyon-og-image.jpg',
  structuredData,
  pageType = 'website',
}: SEOMetadataProps) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    url: 'https://skyecanyonhomesforsale.com',
    logo: 'https://skyecanyonhomesforsale.com/images/dr-jan-duffy-logo.png',
    image: 'https://skyecanyonhomesforsale.com/images/dr-jan-duffy-realtor.jpg',
    description:
      'Expert real estate services in Skye Canyon and Las Vegas, Nevada specializing in luxury homes and investment properties.',
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
      latitude: 36.2469,
      longitude: -115.3242,
    },
    telephone: '(702) 500-1902',
    email: 'DrDuffy@SkyeCanyonHomesForSale.com',
    priceRange: '$$$',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.2469,
        longitude: -115.3242,
      },
      geoRadius: '25000',
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
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Nevada Real Estate License',
      credentialCategory: 'license',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
    knowsAbout: [
      'Luxury Real Estate',
      'Skye Canyon Properties',
      'Las Vegas Real Estate Market',
      'Investment Properties',
      'New Construction',
      'Golf Course Communities',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'National Association of Realtors',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseStructuredData) }}
    />
  );
}
