'use client';

import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import RelatedSearches from '@/components/related-searches';
import RealScoutListings from '@/components/realscout-listings';
import PageHero from '@/components/sections/page-hero';
import { siteConfig } from '@/config/site.config';
import { getHeroImageProps } from '@/data/hero-images';
import { sectionImages } from '@/data/section-images';

export default function RelocationServices() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageHero
          title="Relocate to Skye Canyon Las Vegas NV 89166"
          subtitle="Relocation services for buyers moving to northwest Las Vegas and Skye Canyon NV 89166."
          {...getHeroImageProps('relocation')}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.realscoutOnboarding}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors text-center"
            >
              Search Skye Canyon Homes
            </a>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 border-2 border-white/40 transition-colors"
              aria-label={`Call Dr. Jan Duffy at ${siteConfig.phone}`}
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </PageHero>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
              Move to Skye Canyon with Local Guidance
            </h2>
            <HeadingImage
              {...sectionImages.northwest}
              className="w-full h-56 object-cover rounded-xl mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Area Orientation</h3>
                <p className="text-gray-600">
                  Commute times to the Strip, Downtown Summerlin, and Red Rock Canyon plus HOA,
                  guard-gate, and Desert Highlands Golf Course details.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Temporary Housing to Close</h3>
                <p className="text-gray-600">
                  Timeline help from offer to keys, including new construction walkthroughs and
                  resale inspections in zip 89166.
                </p>
              </div>
            </div>
            <RealScoutListings className="w-full" variant="all-properties" />
          </div>
        </section>

        <GbpLocalSection heading="Plan your Skye Canyon move from the local office" />
        <RelatedSearches searchType="las-vegas" />
      </div>
    </>
  );
}
