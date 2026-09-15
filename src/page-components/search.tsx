'use client';

import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import RealScoutListings from '@/components/realscout-listings';
import PageHero from '@/components/sections/page-hero';
import { siteConfig } from '@/config/site.config';
import { getHeroImageProps } from '@/data/hero-images';
import { sectionImages } from '@/data/section-images';

interface SearchProps {
  query?: string;
}

export default function Search({ query }: SearchProps) {
  const q = query?.trim();

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PageHero
          title={
            q
              ? `Search Skye Canyon Homes: ${q}`
              : 'Search Skye Canyon Homes for Sale'
          }
          subtitle={
            q
              ? `Live MLS for "${q}" in Skye Canyon and northwest Las Vegas NV 89166.`
              : 'Live MLS search for Skye Canyon, Las Vegas NV 89166 — filter by price, beds, and new construction.'
          }
          {...getHeroImageProps('properties')}
        >
          <a
            href={siteConfig.realscoutOnboarding}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Open RealScout Search
          </a>
        </PageHero>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Current Skye Canyon MLS Listings
              </h2>
              <p className="text-lg text-gray-600">
                Search live inventory, then call {siteConfig.phone} to tour.
              </p>
            </div>
            <HeadingImage
              {...sectionImages.listings}
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />
            <RealScoutListings className="w-full" variant="all-properties" />
          </div>
        </section>

        <GbpLocalSection heading="Search with a local Skye Canyon agent" />
      </div>
    </>
  );
}
