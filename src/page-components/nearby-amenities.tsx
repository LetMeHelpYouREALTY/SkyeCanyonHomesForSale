'use client';

import AgentBio from '@/components/agent-bio';
import Breadcrumb from '@/components/breadcrumb';
import CallToAction from '@/components/call-to-action';
import FAQSection from '@/components/faq-section';
import GbpLocalSection from '@/components/gbp-local-section';
import CommunityAmenityMap from '@/components/maps/community-amenity-map';
import RelatedSearches from '@/components/related-searches';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import HeroSearchCtas from '@/components/hero-search-ctas';
import {
  amenityContentSections,
  amenityFaqs,
} from '@/data/hyperlocal/curated-amenities';
import { buildAmenitiesPageJsonLd } from '@/lib/amenities-page-jsonld';
import { communityMapConfig } from '@/config/community-map.config';
import { siteConfig } from '@/config/site.config';

export default function NearbyAmenitiesPageContent() {
  const jsonLdBlocks = buildAmenitiesPageJsonLd();

  return (
    <>
      {jsonLdBlocks.map((block, index) => (
        <script
          key={`amenities-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}

      <div className="min-h-screen bg-gray-50">
        <PageHero
          title={`Nearby Amenities in ${communityMapConfig.communityName}, Las Vegas`}
          subtitle={`Hyperlocal map of parks, grocery, golf, healthcare, and schools around ${communityMapConfig.city} NV ${communityMapConfig.zip}.`}
          {...getHeroImageProps('skye-canyon-guide')}
        >
          <HeroSearchCtas />
        </PageHero>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'Nearby Amenities' }]} />
        </div>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nearby Amenities in {communityMapConfig.communityName}, Las Vegas
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mb-8">
              Use the interactive map to explore {communityMapConfig.communityName} and northwest Las
              Vegas. Map center: {siteConfig.address.formatted} (GBP office / Skye Canyon Park hub).{' '}
              {siteConfig.name} at {siteConfig.brokerage}, Nevada License {siteConfig.license}.
            </p>
            <CommunityAmenityMap variant="full" defaultCategory="parks" />
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {amenityContentSections.map((section) => (
              <article key={section.id} className="max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-gray-700 mb-3 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <FAQSection
          title={`Living in ${communityMapConfig.communityName} — FAQs`}
          pageType="skye-canyon"
          faqs={amenityFaqs}
          includeSchema={false}
        />

        <GbpLocalSection heading={`Tour ${communityMapConfig.communityName} from the office pin`} />
        <RelatedSearches searchType="skye-canyon" />
        <AgentBio />
        <CallToAction />
      </div>
    </>
  );
}
