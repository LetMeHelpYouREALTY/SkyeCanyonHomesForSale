'use client';

import Breadcrumb from '@/components/breadcrumb';
import FAQSection from '@/components/faq-section';
import HyperlocalCta from '@/components/sections/hyperlocal-cta';
import HyperlocalFeatureList from '@/components/sections/hyperlocal-feature-list';
import HyperlocalHero from '@/components/sections/hyperlocal-hero';
import HyperlocalInternalLinks from '@/components/sections/hyperlocal-internal-links';
import HyperlocalListings from '@/components/sections/hyperlocal-listings';
import HyperlocalSchema from '@/components/schema/hyperlocal-schema';
import { siteConfig } from '@/config/site.config';
import type { HyperlocalPark } from '@/data/hyperlocal/types';
import { parks } from '@/data/hyperlocal/parks';
import { subdivisions } from '@/data/hyperlocal/subdivisions';
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildHyperlocalPageGraph,
  buildPlaceSchema,
  buildWebPageSchema,
} from '@/lib/schema/hyperlocal-schema';

interface ParkPageProps {
  park: HyperlocalPark;
}

export default function ParkPage({ park }: ParkPageProps) {
  const pageUrl = `${siteConfig.url}/skye-canyon-parks/${park.slug}`;
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Skye Canyon Parks', url: `${siteConfig.url}/skye-canyon-parks` },
    { name: park.name, url: pageUrl },
  ];

  const schema = buildHyperlocalPageGraph([
    buildWebPageSchema(`${park.name} — Skye Canyon Parks`, park.description, pageUrl),
    buildPlaceSchema({
      name: park.name,
      description: park.description,
      url: pageUrl,
      geo: park.geo,
      containedIn: 'Skye Canyon, Las Vegas, NV',
      zip: '89166',
    }),
    buildBreadcrumbSchema(breadcrumbs),
    buildFaqPageSchema(park.faqs),
  ].filter(Boolean) as object[]);

  const relatedLinks = [
    ...parks
      .filter((p) => p.slug !== park.slug)
      .slice(0, 3)
      .map((p) => ({
        href: `/skye-canyon-parks/${p.slug}`,
        title: p.name,
        description: p.description.slice(0, 80),
      })),
    {
      href: '/skye-canyon-communities',
      title: 'Skye Canyon Communities',
      description: 'New construction subdivisions',
    },
    ...subdivisions.slice(0, 2).map((s) => ({
      href: `/skye-canyon/${s.slug}`,
      title: `${s.name} Homes`,
      description: s.priceRange,
    })),
  ];

  return (
    <>
      <HyperlocalSchema schema={schema} />
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumb items={breadcrumbs.map((b) => ({ label: b.name, href: b.url.replace(siteConfig.url, '') || '/' }))} />
      </div>
      <HyperlocalHero
        headline={`${park.name} — Skye Canyon Las Vegas NV 89166`}
        answerSummary={park.answerSummary}
        badges={[park.size, park.hours, park.address].filter(Boolean) as string[]}
      />
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">{park.description}</p>
        {park.address && (
          <p className="mt-4 text-gray-600">
            <strong>Address:</strong> {park.address}
          </p>
        )}
      </section>
      <HyperlocalFeatureList
        title={`${park.name} Amenities`}
        items={park.features}
        highlights={park.highlights}
      />
      <HyperlocalListings title="Homes Near This Park" subtitle="Skye Canyon NV 89166 MLS listings" />
      <FAQSection title={`${park.name} FAQ`} faqs={park.faqs} pageType="skye-canyon" />
      <HyperlocalInternalLinks title="More Skye Canyon Places" links={relatedLinks} />
      <HyperlocalCta title="Find a Home Near Skye Canyon Parks" />
    </>
  );
}
