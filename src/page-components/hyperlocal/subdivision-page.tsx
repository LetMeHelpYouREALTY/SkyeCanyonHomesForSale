'use client';

import Breadcrumb from '@/components/breadcrumb';
import FAQSection from '@/components/faq-section';
import HyperlocalCta from '@/components/sections/hyperlocal-cta';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import HyperlocalFeatureList from '@/components/sections/hyperlocal-feature-list';
import HyperlocalHero from '@/components/sections/hyperlocal-hero';
import { getHeroImageProps } from '@/data/hero-images';
import { hostedImage } from '@/lib/page-images';
import {
  subdivisionHeroKey,
  subdivisionImageKey,
  subdivisionSectionImage,
} from '@/data/topic-images';
import HyperlocalInternalLinks from '@/components/sections/hyperlocal-internal-links';
import HyperlocalListings from '@/components/sections/hyperlocal-listings';
import HyperlocalRealtorServices from '@/components/sections/hyperlocal-realtor-services';
import HyperlocalSchema from '@/components/schema/hyperlocal-schema';
import { siteConfig } from '@/config/site.config';
import type { HyperlocalSubdivision } from '@/data/hyperlocal/types';
import {
  buildAgentServiceSchema,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildHyperlocalPageGraph,
  buildPlaceSchema,
  buildWebPageSchema,
} from '@/lib/schema/hyperlocal-schema';
import { subdivisions } from '@/data/hyperlocal/subdivisions';
import { parks } from '@/data/hyperlocal/parks';
import { zipAreas } from '@/data/hyperlocal/zip-areas';

interface SubdivisionPageProps {
  subdivision: HyperlocalSubdivision;
}

export default function SubdivisionPage({ subdivision }: SubdivisionPageProps) {
  const pageUrl = `${siteConfig.url}/skye-canyon/${subdivision.slug}`;
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Skye Canyon Communities', url: `${siteConfig.url}/skye-canyon-communities` },
    { name: subdivision.name, url: pageUrl },
  ];

  const schema = buildHyperlocalPageGraph([
    buildWebPageSchema(
      `${subdivision.name} Skye Canyon Homes for Sale`,
      subdivision.description,
      pageUrl,
    ),
    buildPlaceSchema({
      name: `${subdivision.name}, Skye Canyon`,
      description: subdivision.description,
      url: pageUrl,
      geo: subdivision.geo,
      containedIn: 'Skye Canyon, Las Vegas, NV',
      zip: subdivision.zip,
      image: hostedImage(subdivisionImageKey(subdivision.slug)),
    }),
    buildBreadcrumbSchema(breadcrumbs),
    buildFaqPageSchema(subdivision.faqs),
    buildAgentServiceSchema(
      `${subdivision.name} Buyer Representation`,
      `${siteConfig.url}/services/buyer-agent`,
    ),
  ].filter(Boolean) as object[]);

  const relatedLinks = [
    ...subdivisions
      .filter((s) => s.slug !== subdivision.slug)
      .map((s) => ({
        href: `/skye-canyon/${s.slug}`,
        title: `${s.name} Homes`,
        description: `${s.builder} — ${s.priceRange}`,
      })),
    {
      href: `/builders/${subdivision.builderSlug}`,
      title: `${subdivision.builder}`,
      description: 'Builder profile and communities',
    },
    {
      href: '/89166-homes-for-sale',
      title: '89166 Homes for Sale',
      description: 'Zip code landing for Skye Canyon',
    },
    ...parks.slice(0, 2).map((p) => ({
      href: `/skye-canyon-parks/${p.slug}`,
      title: p.name,
      description: p.answerSummary.slice(0, 80),
    })),
  ];

  return (
    <>
      <HyperlocalSchema schema={schema} />
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumb items={breadcrumbs.map((b) => ({ label: b.name, href: b.url.replace(siteConfig.url, '') || '/' }))} />
      </div>
      <HyperlocalHero
        headline={`${subdivision.name} Homes for Sale — Skye Canyon NV ${subdivision.zip}`}
        answerSummary={subdivision.answerSummary}
        badges={[subdivision.builder, subdivision.priceRange, `${subdivision.bedrooms} bedrooms`]}
        {...getHeroImageProps(subdivisionHeroKey(subdivision.slug))}
      />
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <HeadingImage
          {...subdivisionSectionImage(subdivision.slug, subdivision.name)}
          className="w-full h-52 object-cover rounded-xl mb-6"
        />
        <p className="text-gray-700 text-lg leading-relaxed">{subdivision.description}</p>
      </section>
      <HyperlocalFeatureList
        title={`${subdivision.name} Home Features`}
        items={subdivision.features}
        highlights={subdivision.highlights}
      />
      <HyperlocalListings
        title={`${subdivision.name} MLS Listings`}
        subtitle={`Homes in ${subdivision.name}, Skye Canyon Las Vegas ${subdivision.zip}`}
      />
      <HyperlocalRealtorServices title={`Realtor Services for ${subdivision.name} Buyers`} />
      <FAQSection
        title={`${subdivision.name} Skye Canyon FAQ`}
        faqs={subdivision.faqs}
        pageType="skye-canyon"
        includeSchema={false}
      />
      <HyperlocalInternalLinks title="Explore Skye Canyon" links={relatedLinks} />
      <GbpLocalSection heading={`Tour ${subdivision.name} from the Skye Canyon office`} />
      <HyperlocalCta
        title={`Tour ${subdivision.name} with Dr. Jan Duffy`}
        subtitle={`Compare ${subdivision.builder} inventory in Skye Canyon ${subdivision.zip}. Call ${siteConfig.phone}.`}
      />
    </>
  );
}
