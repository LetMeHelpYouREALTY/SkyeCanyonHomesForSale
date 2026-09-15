'use client';

import { siteConfig } from '@/config/site.config';
import { schemaImages } from '@/lib/schema-images';
import { schemaGeo, schemaPostalAddress } from '@/lib/schema-nap';

export default function ReviewSchema() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: schemaImages.office,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: schemaPostalAddress,
    geo: schemaGeo,
    priceRange: '$$',
    sameAs: [siteConfig.googleBusinessUrl, siteConfig.googleReviewUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
}
