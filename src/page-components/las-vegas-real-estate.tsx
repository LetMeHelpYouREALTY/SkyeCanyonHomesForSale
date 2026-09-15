'use client';

import BackToTop from '@/components/back-to-top';
import FAQSection from '@/components/faq-section';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import RealScoutListings from '@/components/realscout-listings';
import RelatedSearches from '@/components/related-searches';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import { sectionImages } from '@/data/section-images';
import { Card, CardContent } from '@/components/ui/card';

export default function LasVegasRealEstate() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">

        <PageHero
          title="Las Vegas Real Estate Homes for Sale"
          subtitle="Comprehensive real estate services across Las Vegas communities — Skye Canyon specialist."
          {...getHeroImageProps('las-vegas-real-estate')}
        />

        {/* Current Las Vegas Listings */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Las Vegas Real Estate MLS Listings Nevada
              </h2>
              <p className="text-xl text-gray-600">
                Available properties across all Las Vegas communities
              </p>
            </div>
            <HeadingImage
              {...sectionImages.listings}
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />
            <RealScoutListings className="w-full" />
          </div>
        </section>

        {/* Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Las Vegas Real Estate Communities Nevada MLS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    {...sectionImages.northwest}
                    alt="Northwest Las Vegas homes near Skye Canyon NV 89166"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Northwest Las Vegas</h3>
                  <p className="text-realscout-blue font-semibold mb-2">Confirm live MLS</p>
                  <p className="text-gray-600">
                    Guard-gated communities, golf courses, parks and trails
                  </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    {...sectionImages.guide}
                    alt="Henderson Nevada master-planned community homes"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Henderson</h3>
                  <p className="text-realscout-blue font-semibold mb-2">Confirm live MLS</p>
                  <p className="text-gray-600">Planned communities, mountain views, parks</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    {...sectionImages.golf}
                    alt="Summerlin Las Vegas master-planned community parks"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Summerlin</h3>
                  <p className="text-realscout-blue font-semibold mb-2">Confirm live MLS</p>
                  <p className="text-gray-600">Master-planned community, parks, shopping</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <GbpLocalSection heading="Start your Las Vegas search in Skye Canyon" />

        {/* FAQ Section for Las Vegas Real Estate */}
        <FAQSection
          title="Las Vegas Real Estate Market FAQs"
          pageType="las-vegas"
          faqs={[
            {
              question: 'Which Las Vegas areas should buyers compare?',
              answer:
                'Compare Skye Canyon (guard-gated, golf), Henderson (master-planned, mountain views), Summerlin (parks and shopping), The Ridges (hillside lots), and northwest Las Vegas zip codes 89166, 89149, and 89144. Confirm commute times and HOA fees for the specific address.',
            },
            {
              question: 'How is the Las Vegas real estate market currently performing?',
              answer:
                'Inventory, days on market, and sale-to-list ratios change week to week. Confirm live MLS comps with Dr. Jan Duffy at (702) 500-1902. Skye Canyon is zip 89166 at 10111 W. Skye Canyon Park Drive.',
            },
            {
              question: 'What should out-of-state buyers know about Las Vegas real estate?',
              answer:
                'Nevada has no state income tax, property taxes are relatively low, and the climate offers year-round outdoor activities. Consider factors like HOA fees, water restrictions, and proximity to amenities when choosing locations.',
            },
            {
              question: 'What is the average home price in Las Vegas?',
              answer:
                'List prices vary by zip and village. Confirm live MLS comps with Dr. Jan Duffy at (702) 500-1902. Skye Canyon is zip 89166 at 10111 W. Skye Canyon Park Drive.',
            },
            {
              question: 'Are there good investment opportunities in Las Vegas real estate?',
              answer:
                'Las Vegas rental, vacation, and resale inventory exists across many zips. Compare HOA fees, commute times, and live MLS comps for the specific address with Dr. Jan Duffy.',
            },
            {
              question: 'What makes Las Vegas attractive for relocation?',
              answer:
                'Las Vegas offers no state income tax, year-round entertainment, outdoor recreation, growing job market, relatively affordable housing compared to California, and excellent dining and cultural amenities.',
            },
          ]}
        />

        {/* Related Searches for Las Vegas Real Estate */}
        <RelatedSearches searchType="las-vegas" />

        <BackToTop />
      </div>
    </>
  );
}
