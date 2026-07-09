import { siteConfig } from '@/config/site.config';
import type { HyperlocalFaq } from '@/data/hyperlocal/types';

interface PlaceSchemaInput {
  name: string;
  description: string;
  url: string;
  geo: { latitude: number; longitude: number };
  containedIn?: string;
  zip?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildPlaceSchema(input: PlaceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: input.name,
    description: input.description,
    url: input.url,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: input.geo.latitude,
      longitude: input.geo.longitude,
    },
    ...(input.zip && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: input.zip,
        addressCountry: siteConfig.address.country,
      },
    }),
    ...(input.containedIn && {
      containedInPlace: {
        '@type': 'Place',
        name: input.containedIn,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          addressCountry: siteConfig.address.country,
        },
      },
    }),
  };
}

export function buildFaqPageSchema(faqs: HyperlocalFaq[]) {
  if (faqs.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildAgentServiceSchema(serviceName: string, serviceUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    provider: {
      '@type': 'RealEstateAgent',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
      areaServed: {
        '@type': 'Place',
        name: 'Skye Canyon, Las Vegas, NV 89166',
      },
    },
    areaServed: 'Skye Canyon, Las Vegas, NV',
    url: serviceUrl,
  };
}

export function buildHyperlocalPageGraph(schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}

export function buildWebPageSchema(title: string, description: string, url: string) {
  return {
    '@type': 'WebPage',
    name: title,
    description,
    url,
    dateModified: new Date().toISOString().split('T')[0],
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#localbusiness` },
  };
}
