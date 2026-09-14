'use client';

import { siteConfig } from '@/config/site.config';
import { absoluteSiteImage } from '@/lib/cloudflare-images';

export default function LocalBusinessSchema() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: `${siteConfig.businessName} | ${siteConfig.name}`,
    alternateName: siteConfig.name,
    description:
      'Skye Canyon and Northwest Las Vegas real estate specialist for luxury homes, new construction, and resale properties.',
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.url,
    image: [
      absoluteSiteImage('og/skye-canyon-homes.jpg', siteConfig.url),
      absoluteSiteImage('heroes/home.jpg', siteConfig.url),
      absoluteSiteImage('sections/office-exterior.jpg', siteConfig.url),
    ],
    hasMap: siteConfig.mapsUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: String(siteConfig.geo.latitude),
      longitude: String(siteConfig.geo.longitude),
    },
    openingHours: siteConfig.openingHours,
    memberOf: {
      '@type': 'Organization',
      name: siteConfig.brokerage,
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
      identifier: siteConfig.license,
    },
    sameAs: Object.values(siteConfig.social),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  );
}
