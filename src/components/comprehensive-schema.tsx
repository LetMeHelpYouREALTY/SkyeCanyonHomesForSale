'use client';

import { siteConfig } from '@/config/site.config';

interface SchemaMarkupProps {
  pageType?: 'homepage' | 'service' | 'about' | 'properties' | 'generic';
  serviceName?: string;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

export default function ComprehensiveSchemaMarkup({
  serviceName,
  breadcrumbs = [],
}: SchemaMarkupProps) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    alternateName: siteConfig.businessName,
    description:
      'Premier Skye Canyon real estate specialist with exclusive community expertise. Luxury homes, investment properties, and buyer/seller services in Las Vegas, Nevada.',
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
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
          postalCode: siteConfig.address.zip,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          addressCountry: siteConfig.address.country,
        },
      },
    ],
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
    sameAs: Object.values(siteConfig.social),
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      availableLanguage: 'English',
      areaServed: 'US-NV',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
  };

  const getServiceSchema = () => {
    if (!serviceName) {
      return null;
    }

    const serviceSchemas: Record<string, object> = {
      'buyer-agent': {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Skye Canyon Buyer Agent Services',
        description: 'Expert buyer representation for Skye Canyon homes and investment properties.',
        provider: { '@type': 'RealEstateAgent', name: siteConfig.name },
        areaServed: 'Las Vegas, NV',
        serviceType: 'Real Estate Buyer Agent',
      },
      'first-time-buyer': {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Skye Canyon First-Time Buyer Services',
        description: 'Support for first-time homebuyers including loan guidance and closing assistance.',
        provider: { '@type': 'RealEstateAgent', name: siteConfig.name },
        serviceType: 'First-Time Homebuyer Assistance',
      },
      'luxury-properties': {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Skye Canyon Luxury Property Services',
        description: 'Luxury home marketing and sales for high-end Skye Canyon properties.',
        provider: { '@type': 'RealEstateAgent', name: siteConfig.name },
        serviceType: 'Luxury Real Estate',
      },
      'new-construction': {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Skye Canyon New Construction Services',
        description: 'New construction home sales with builder partnerships.',
        provider: { '@type': 'RealEstateAgent', name: siteConfig.name },
        serviceType: 'New Construction Real Estate',
      },
    };

    return serviceSchemas[serviceName] ?? null;
  };

  const getBreadcrumbSchema = () => {
    if (breadcrumbs.length === 0) {
      return null;
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.businessName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/properties?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };

  const schemas = [
    localBusinessSchema,
    organizationSchema,
    websiteSchema,
    getServiceSchema(),
    getBreadcrumbSchema(),
  ].filter(Boolean);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
