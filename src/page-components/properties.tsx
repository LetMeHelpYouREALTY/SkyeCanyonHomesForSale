'use client';

import { useSearchParams } from '@/hooks/use-search-params';
import BackToTop from '@/components/back-to-top';
import Breadcrumb from '@/components/breadcrumb';
import FAQSection from '@/components/faq-section';

import FollowUpBossListings from '@/components/followup-boss-listings';
import RealScoutListings from '@/components/realscout-listings';
import GoogleMapEmbed from '@/components/google-map-embed';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import { sectionImages } from '@/data/section-images';
import { siteConfig } from '@/config/site.config';

export default function Properties() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.search || '';
  return (
    <>
      <div className="min-h-screen bg-gray-50">

        <PageHero
          title="Skye Canyon Homes Properties MLS Listings Nevada 89166"
          subtitle="Live MLS homes for sale in Skye Canyon, Las Vegas NV 89166."
          {...getHeroImageProps('properties')}
          minHeight="sm"
        />

        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'Properties' }]} />
        </div>

        {/* Search Results Section */}
        {searchQuery && (
          <section className="py-12 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Search Results for "{searchQuery}"
                </h2>
                <p className="text-lg text-gray-600">
                  Showing properties matching your search criteria
                </p>
              </div>
              <RealScoutListings className="w-full" variant="all-properties" />
            </div>
          </section>
        )}

        {/* Current MLS Listings */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Skye Canyon MLS Listings Las Vegas Nevada
              </h2>
              <p className="text-xl text-gray-600">
                Latest properties for sale from Dr. Jan Duffy's active portfolio
              </p>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Featured Listings</h3>
            </div>
            <HeadingImage
              {...sectionImages.listings}
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />
            <RealScoutListings className="w-full" variant="mid-range" />
          </div>
        </section>

        {/* All Available Properties */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Available Skye Canyon Properties Nevada 89166
              </h2>
              <p className="text-xl text-gray-600">
                Complete listing of Skye Canyon homes and Las Vegas area properties
              </p>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Browse All Properties</h3>
            </div>
            <HeadingImage
              {...sectionImages.listings}
              className="w-full h-52 object-cover rounded-xl mb-8"
            />
            <RealScoutListings className="w-full" variant="all-properties" />
          </div>
        </section>

        {/* Sample Properties with Maps */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Skye Canyon Listings Near the Office Pin
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The office pin is 10111 W Skye Canyon Park Dr, Las Vegas, NV 89166. Search live
                MLS for current homes — we do not publish placeholder addresses or prices.
              </p>
            </div>
            <HeadingImage
              {...sectionImages.office}
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />

            <div className="mb-8">
              <GoogleMapEmbed />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-md text-white bg-realscout-blue hover:bg-realscout-navy"
              >
                Get directions
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-md border border-realscout-blue text-realscout-blue hover:bg-blue-50"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Client Portfolio */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Skye Canyon Homes Represented by Dr. Jan Duffy
              </h2>
              <p className="text-xl text-gray-600">
                Current listings and client inventory in Las Vegas NV 89166
              </p>
            </div>
            <HeadingImage
              {...sectionImages.listings}
              className="w-full h-52 object-cover rounded-xl mb-8"
            />
            <FollowUpBossListings />
          </div>
        </section>

        <GbpLocalSection heading="Tour Skye Canyon listings from the office" />

        {/* FAQ Section for Properties */}
        <FAQSection
          title="Property Search & Buying Process FAQs"
          pageType="general"
          faqs={[
            {
              question: 'How do I search for Skye Canyon properties?',
              answer:
                'Filter live MLS by price, bedrooms, bathrooms, and features, or start a saved search at RealScout. Call Dr. Jan Duffy at (702) 500-1902 for upcoming and off-market inventory.',
            },
            {
              question: 'What is the typical timeline for buying a home?',
              answer:
                'The home buying process typically takes 30-45 days from offer acceptance to closing. Pre-approval can be completed in 1-3 days, and property searches can begin immediately.',
            },
            {
              question: 'Do you have access to new construction homes?',
              answer:
                'Yes, Dr. Jan Duffy works with Century Communities, Lennar, and Toll Brothers in Skye Canyon and can help you secure new construction, including quick move-in homes.',
            },
            {
              question: 'What are closing costs in Las Vegas?',
              answer:
                'Closing costs typically range from 2-5% of the purchase price and include title insurance, escrow fees, inspections, and loan origination fees. Dr. Jan Duffy provides detailed cost estimates upfront.',
            },
            {
              question: 'Can I view properties virtually?',
              answer:
                'Yes, we offer virtual tours, video walkthroughs, and detailed photo galleries for most properties. In-person showings can be scheduled at your convenience.',
            },
          ]}
        />

        <BackToTop />
      </div>
    </>
  );
}
