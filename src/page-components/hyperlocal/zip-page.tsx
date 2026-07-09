'use client';

import Breadcrumb from '@/components/breadcrumb';
import FAQSection from '@/components/faq-section';
import HyperlocalCta from '@/components/sections/hyperlocal-cta';
import HyperlocalHero from '@/components/sections/hyperlocal-hero';
import HyperlocalInternalLinks from '@/components/sections/hyperlocal-internal-links';
import HyperlocalListings from '@/components/sections/hyperlocal-listings';
import HyperlocalRealtorServices from '@/components/sections/hyperlocal-realtor-services';
import HyperlocalSchema from '@/components/schema/hyperlocal-schema';
import { siteConfig } from '@/config/site.config';
import type { HyperlocalZipArea } from '@/data/hyperlocal/types';
import { subdivisions } from '@/data/hyperlocal/subdivisions';
import { zipAreas } from '@/data/hyperlocal/zip-areas';
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildHyperlocalPageGraph,
  buildPlaceSchema,
  buildWebPageSchema,
} from '@/lib/schema/hyperlocal-schema';

interface ZipPageProps {
  zipArea: HyperlocalZipArea;
}

export default function ZipPage({ zipArea }: ZipPageProps) {
  const pageUrl = `${siteConfig.url}/${zipArea.zip}-homes-for-sale`;
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: `${zipArea.zip} Homes`, url: pageUrl },
  ];

  const schema = buildHyperlocalPageGraph([
    buildWebPageSchema(zipArea.headline, zipArea.description, pageUrl),
    buildPlaceSchema({
      name: `Zip Code ${zipArea.zip} — ${zipArea.name}`,
      description: zipArea.description,
      url: pageUrl,
      geo: zipArea.geo,
      zip: zipArea.zip,
    }),
    buildBreadcrumbSchema(breadcrumbs),
    buildFaqPageSchema(zipArea.faqs),
  ].filter(Boolean) as object[]);

  const relatedLinks = [
    ...zipAreas
      .filter((z) => z.zip !== zipArea.zip)
      .map((z) => ({
        href: `/${z.zip}-homes-for-sale`,
        title: `${z.zip} Homes for Sale`,
        description: z.name,
      })),
    ...subdivisions.map((s) => ({
      href: `/skye-canyon/${s.slug}`,
      title: `${s.name}`,
      description: `${s.priceRange} — Century Communities`,
    })),
    {
      href: '/centennial-hills-homes-for-sale',
      title: 'Centennial Hills',
      description: 'Nearby northwest Las Vegas area',
    },
  ];

  return (
    <>
      <HyperlocalSchema schema={schema} />
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumb items={breadcrumbs.map((b) => ({ label: b.name, href: b.url.replace(siteConfig.url, '') || '/' }))} />
      </div>
      <HyperlocalHero
        headline={zipArea.headline}
        answerSummary={zipArea.answerSummary}
        badges={[
          `Zip ${zipArea.zip}`,
          zipArea.medianPrice,
          zipArea.daysOnMarket ? `${zipArea.daysOnMarket} days on market` : undefined,
        ].filter(Boolean) as string[]}
      />
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">{zipArea.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {zipArea.neighborhoods.map((n) => (
            <span key={n} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">
              {n}
            </span>
          ))}
        </div>
      </section>
      <HyperlocalListings
        title={`${zipArea.zip} MLS Listings`}
        subtitle={`Homes for sale in ${zipArea.name}, Las Vegas NV`}
      />
      <HyperlocalRealtorServices title={`Realtor Services — Zip ${zipArea.zip}`} />
      <FAQSection title={`${zipArea.zip} Real Estate FAQ`} faqs={zipArea.faqs} pageType="skye-canyon" />
      <HyperlocalInternalLinks title="Nearby Skye Canyon Areas" links={relatedLinks} />
      <HyperlocalCta title={`Buy in ${zipArea.zip} with a Local Expert`} />
    </>
  );
}
