'use client';

import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import RealScoutListings from '@/components/realscout-listings';
import PageHero from '@/components/sections/page-hero';
import { siteConfig } from '@/config/site.config';
import { getHeroImageProps } from '@/data/hero-images';
import { sectionImages } from '@/data/section-images';

export default function HomeSimple() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <PageHero
          title="Skye Canyon Homes — Dr. Jan Duffy REALTOR®"
          subtitle="Live MLS search, valuations, and local comps for Las Vegas NV 89166."
          {...getHeroImageProps('home')}
        >
          <a
            href={siteConfig.realscoutOnboarding}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50"
          >
            Search MLS Listings
          </a>
        </PageHero>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Welcome to Skye Canyon Homes
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Browse Skye Canyon homes in Las Vegas NV 89166. Call {siteConfig.phone} to tour.
            </p>
            <HeadingImage
              {...sectionImages.listings}
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a href="/properties" className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Property Search</h3>
                <p className="text-gray-600">Current MLS listings in Skye Canyon and northwest Las Vegas.</p>
              </a>
              <a href="/market-analysis" className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
                <p className="text-gray-600">Price trends and inventory for zip 89166. Confirm comps on live MLS.</p>
              </a>
            </div>
            <RealScoutListings className="w-full" />
          </div>
        </section>

        <GbpLocalSection heading="Visit the Skye Canyon office" />
      </div>
    </>
  );
}
