'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/breadcrumb';
import FAQSection from '@/components/faq-section';
import HyperlocalCta from '@/components/sections/hyperlocal-cta';
import HyperlocalHero from '@/components/sections/hyperlocal-hero';
import { getHeroImage } from '@/data/hero-images';
import HyperlocalListings from '@/components/sections/hyperlocal-listings';
import HyperlocalSchema from '@/components/schema/hyperlocal-schema';
import { siteConfig } from '@/config/site.config';
import type { HyperlocalBuilder } from '@/data/hyperlocal/types';
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildHyperlocalPageGraph,
  buildWebPageSchema,
} from '@/lib/schema/hyperlocal-schema';

interface BuilderPageProps {
  builder: HyperlocalBuilder;
}

export default function BuilderPage({ builder }: BuilderPageProps) {
  const pageUrl = `${siteConfig.url}/builders/${builder.slug}`;
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Skye Canyon Communities', url: `${siteConfig.url}/skye-canyon-communities` },
    { name: builder.name, url: pageUrl },
  ];

  const schema = buildHyperlocalPageGraph([
    buildWebPageSchema(`${builder.name} Skye Canyon Homes`, builder.description, pageUrl),
    {
      '@type': 'Organization',
      name: builder.name,
      description: builder.description,
      url: pageUrl,
    },
    buildBreadcrumbSchema(breadcrumbs),
    buildFaqPageSchema(builder.faqs),
  ].filter(Boolean) as object[]);

  return (
    <>
      <HyperlocalSchema schema={schema} />
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumb items={breadcrumbs.map((b) => ({ label: b.name, href: b.url.replace(siteConfig.url, '') || '/' }))} />
      </div>
      <HyperlocalHero
        headline={`${builder.name} Homes in Skye Canyon Las Vegas`}
        answerSummary={builder.answerSummary}
        badges={[builder.priceRange, ...builder.communities.slice(0, 2)]}
        image={getHeroImage('builder').src}
        imageAlt={`${builder.name} — ${getHeroImage('builder').alt}`}
      />
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">{builder.description}</p>
        {builder.communitySlugs.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {builder.communitySlugs.map((slug, i) => (
              <Link
                key={slug}
                href={`/skye-canyon/${slug}`}
                className="p-4 border rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-center"
              >
                <h3 className="font-semibold text-gray-900">{builder.communities[i]}</h3>
                <span className="text-sm text-blue-600">View community &rarr;</span>
              </Link>
            ))}
          </div>
        )}
      </section>
      <HyperlocalListings title={`${builder.name} Area Listings`} />
      <FAQSection title={`${builder.name} FAQ`} faqs={builder.faqs} pageType="skye-canyon" />
      <HyperlocalCta title={`Buy a ${builder.name} Home with Expert Representation`} />
    </>
  );
}
