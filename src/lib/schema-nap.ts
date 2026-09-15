import { siteConfig } from '@/config/site.config';

/** GBP-matching PostalAddress for JSON-LD. */
export const schemaPostalAddress = {
  '@type': 'PostalAddress' as const,
  streetAddress: siteConfig.address.street,
  addressLocality: siteConfig.address.city,
  addressRegion: siteConfig.address.state,
  postalCode: siteConfig.address.zip,
  addressCountry: siteConfig.address.country,
};

/** GBP office pin for JSON-LD. */
export const schemaGeo = {
  '@type': 'GeoCoordinates' as const,
  latitude: siteConfig.geo.latitude,
  longitude: siteConfig.geo.longitude,
};
