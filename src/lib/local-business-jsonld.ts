import { siteConfig } from '@/config/site.config';
import { absoluteSiteImage } from '@/lib/cloudflare-images';

export function buildLocalBusinessJsonLd(): Record<string, unknown> {
  const imageBase = siteConfig.url;

  return {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    alternateName: siteConfig.businessName,
    legalName: siteConfig.legalName,
    description:
      'Skye Canyon real estate specialist for luxury homes, new construction, and resale in Las Vegas NV 89166.',
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: [
      absoluteSiteImage('gbp/cover.jpg', imageBase),
      absoluteSiteImage('gbp/profile.jpg', imageBase),
      absoluteSiteImage('gbp/park.jpg', imageBase),
      absoluteSiteImage('gbp/recreation.jpg', imageBase),
      absoluteSiteImage('gbp/clubhouse.jpg', imageBase),
      absoluteSiteImage('heroes/home.jpg', imageBase),
    ],
    logo: {
      '@type': 'ImageObject',
      url: absoluteSiteImage('og/skye-canyon-homes.jpg', imageBase),
    },
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
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapsUrl,
    foundingDate: `${siteConfig.opened.year}-${String(siteConfig.opened.month).padStart(2, '0')}-${String(siteConfig.opened.day).padStart(2, '0')}`,
    openingHours: siteConfig.openingHours,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: siteConfig.hours.weekdays.opens,
        closes: siteConfig.hours.weekdays.closes,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: siteConfig.hours.saturday.opens,
        closes: siteConfig.hours.saturday.closes,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: siteConfig.hours.sunday.opens,
        closes: siteConfig.hours.sunday.closes,
      },
    ],
    areaServed: [
      {
        '@type': 'Place',
        name: 'Skye Canyon',
        address: {
          '@type': 'PostalAddress',
          postalCode: '89166',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          addressCountry: 'US',
        },
      },
      { '@type': 'Place', name: 'Northwest Las Vegas' },
      { '@type': 'Place', name: 'Centennial Hills' },
    ],
    priceRange: '$$',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: `Nevada Real Estate License ${siteConfig.license}`,
      credentialCategory: 'license',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
    memberOf: {
      '@type': 'Organization',
      name: siteConfig.brokerage,
    },
    sameAs: [...Object.values(siteConfig.social), siteConfig.googleMapsUrl, siteConfig.googleBusinessUrl],
  };
}
