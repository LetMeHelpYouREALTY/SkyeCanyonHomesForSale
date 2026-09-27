import { siteConfig } from '@/config/site.config';
import { communityMapConfig } from '@/config/community-map.config';
import {
  amenityFaqs,
  curatedAmenities,
  type CuratedAmenity,
} from '@/data/hyperlocal/curated-amenities';
import { buildLocalBusinessJsonLd } from '@/lib/local-business-jsonld';

function placeJsonLd(item: CuratedAmenity): Record<string, unknown> {
  const base: Record<string, unknown> = {
    '@type': item.schemaType,
    name: item.name,
    url: item.sourceUrl,
  };
  if (item.address) {
    base.address = {
      '@type': 'PostalAddress',
      streetAddress: item.address.split(',')[0]?.trim(),
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: item.address.match(/\b(\d{5})\b/)?.[1] ?? communityMapConfig.zip,
      addressCountry: 'US',
    };
  }
  if (item.geo) {
    base.geo = {
      '@type': 'GeoCoordinates',
      latitude: item.geo.latitude,
      longitude: item.geo.longitude,
    };
  }
  return base;
}

export function buildAmenitiesPageJsonLd(): Record<string, unknown>[] {
  const pageUrl = `${siteConfig.url}/amenities`;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nearby Amenities',
        item: pageUrl,
      },
    ],
  };

  const communityPlace = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: communityMapConfig.communityName,
    description: `Master-planned community in ${communityMapConfig.city}, Nevada ${communityMapConfig.zip}.`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: communityMapConfig.center.lat,
      longitude: communityMapConfig.center.lng,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'US',
    },
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Featured amenities near ${communityMapConfig.communityName}`,
    itemListElement: curatedAmenities.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: placeJsonLd(item),
    })),
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: amenityFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const agent = buildLocalBusinessJsonLd();

  return [breadcrumb, communityPlace, itemList, faqPage, agent];
}
