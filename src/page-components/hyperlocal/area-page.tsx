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
import type { HyperlocalArea } from '@/data/hyperlocal/types';
import { zipAreas } from '@/data/hyperlocal/zip-areas';
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildHyperlocalPageGraph,
  buildPlaceSchema,
  buildWebPageSchema,
} from '@/lib/schema/hyperlocal-schema';

interface AreaPageProps {
  area: HyperlocalArea;
}

export default function AreaPage({ area }: AreaPageProps) {
  const pageUrl = `${siteConfig.url}/${area.slug}-homes-for-sale`;
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: area.name, url: pageUrl },
  ];

  const schema = buildHyperlocalPageGraph([
    buildWebPageSchema(area.headline, area.description, pageUrl),
    buildPlaceSchema({
      name: area.name,
      description: area.description,
      url: pageUrl,
      geo: area.geo,
      zip: area.zipCodes[0],
    }),
    buildBreadcrumbSchema(breadcrumbs),
    buildFaqPageSchema(area.faqs),
  ].filter(Boolean) as object[]);

  const relatedLinks = [
    { href: '/89166-homes-for-sale', title: '89166 Skye Canyon', description: 'Adjacent master-planned community' },
    ...area.zipCodes.map((zip) => ({
      href: `/${zip}-homes-for-sale`,
      title: `${zip} Homes`,
      description: `Zip code ${zip} listings`,
    })),
    ...zipAreas
      .filter((z) => !area.zipCodes.includes(z.zip))
      .slice(0, 2)
      .map((z) => ({
        href: `/${z.zip}-homes-for-sale`,
        title: `${z.zip} Homes`,
        description: z.name,
      })),
  ];

  return (
    <>
      <HyperlocalSchema schema={schema} />
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumb items={breadcrumbs.map((b) => ({ label: b.name, href: b.url.replace(siteConfig.url, '') || '/' }))} />
      </div>
      <HyperlocalHero
        headline={area.headline}
        answerSummary={area.answerSummary}
        badges={area.zipCodes.map((z) => `Zip ${z}`)}
      />
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">{area.description}</p>
      </section>
      <HyperlocalFeatureList title={`${area.name} Highlights`} items={area.highlights} />
      <HyperlocalListings title={`${area.name} MLS Listings`} />
      <FAQSection title={`${area.name} FAQ`} faqs={area.faqs} pageType="skye-canyon" />
      <HyperlocalInternalLinks title="Compare Nearby Areas" links={relatedLinks} />
      <HyperlocalCta title={`Buy in ${area.name} with Dr. Jan Duffy`} />
    </>
  );
}
