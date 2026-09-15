'use client';

import BackToTop from '@/components/back-to-top';
import FAQSection from '@/components/faq-section';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import RealScoutListings from '@/components/realscout-listings';
import RelatedSearches from '@/components/related-searches';
import HeroSearchCtas from '@/components/hero-search-ctas';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import { sectionImages } from '@/data/section-images';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site.config';

export default function LuxuryHomesLasVegas() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">

        <PageHero
          title="Luxury Homes Las Vegas & Skye Canyon"
          subtitle="Guard-gated and golf-course homes in Skye Canyon and northwest Las Vegas NV 89166."
          {...getHeroImageProps('luxury-homes-las-vegas')}
        >
          <HeroSearchCtas />
        </PageHero>

        {/* Current Luxury Listings */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Luxury Home Listings Skye Canyon Las Vegas
              </h2>
              <p className="text-xl text-gray-600">
                Guard-gated and golf-course homes in Skye Canyon and northwest Las Vegas
              </p>
            </div>
            <HeadingImage
              {...sectionImages.luxuryInterior}
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />
            <RealScoutListings className="w-full" variant="luxury" />
          </div>
        </section>

        {/* Luxury Communities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Luxury Communities in Las Vegas Nevada
            </h2>
            <HeadingImage
              {...sectionImages.clubhouse}
              alt="Skye Canyon clubhouse terrace for luxury home buyers Las Vegas NV 89166"
              className="w-full h-56 object-cover rounded-xl mb-10"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    {...sectionImages.luxuryInterior}
                    alt="Luxury Skye Canyon home interior Las Vegas NV 89166"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Skye Canyon</h3>
                  <p className="text-realscout-blue font-semibold mb-2">Confirm live MLS</p>
                  <p className="text-gray-600">
                    Guard-gated master plan with golf, parks, and rec center in NV 89166
                  </p>
                  <a
                    href={siteConfig.realscoutOnboarding}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-realscout-blue font-semibold hover:underline"
                  >
                    Search Skye Canyon luxury homes
                  </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    {...sectionImages.northwest}
                    alt="Hillside lots near Red Rock Canyon Las Vegas Nevada"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">The Ridges</h3>
                  <p className="text-realscout-blue font-semibold mb-2">Confirm live MLS</p>
                  <p className="text-gray-600">Hillside lots with Red Rock and valley views</p>
                  <a
                    href={siteConfig.realscoutOnboarding}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-realscout-blue font-semibold hover:underline"
                  >
                    Search Ridges-area luxury homes
                  </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    {...sectionImages.golf}
                    alt="Spanish Trail golf community homes Las Vegas Nevada"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Spanish Trail</h3>
                  <p className="text-realscout-blue font-semibold mb-2">Confirm live MLS</p>
                  <p className="text-gray-600">Golf course lots in southwest Las Vegas</p>
                  <a
                    href={siteConfig.realscoutOnboarding}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-realscout-blue font-semibold hover:underline"
                  >
                    Search golf-course luxury homes
                  </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <GbpLocalSection heading="Preview luxury listings from the Skye Canyon office" />

        {/* FAQ Section for Luxury Homes */}
        <FAQSection
          title="Luxury Homes & High-End Real Estate FAQs"
          pageType="luxury-homes"
          faqs={[
            {
              question: 'What defines a luxury home in Las Vegas?',
              answer:
                'Luxury homes in Las Vegas typically feature 3,000+ sq ft, premium finishes, custom designs, and are often located in guard-gated communities like Skye Canyon, The Ridges, or Spanish Trail. Confirm live MLS list prices.',
            },
            {
              question: 'Which Las Vegas communities have luxury inventory?',
              answer:
                'Compare Skye Canyon, The Ridges, Spanish Trail, and MacDonald Ranch in Henderson on live MLS. Amenities and lot types differ; list prices change monthly.',
            },
            {
              question: 'What luxury amenities are common in high-end Las Vegas homes?',
              answer:
                'Luxury Las Vegas homes often feature resort-style pools, wine cellars, home theaters, gourmet kitchens, smart home technology, casitas, RV garages, and outdoor entertainment areas with mountain or golf course views.',
            },
            {
              question: 'How is the luxury real estate market performing in Las Vegas?',
              answer:
                'Confirm current luxury comps on live MLS. Demand varies by village, golf-course orientation, and new construction incentives. Dr. Jan Duffy will pull the current snapshot.',
            },
            {
              question: 'What should I expect when buying a luxury home?',
              answer:
                'Luxury home purchases involve detailed inspections, custom financing, and longer due diligence. Dr. Jan Duffy walks the process using live MLS comps — call (702) 500-1902 for current inventory.',
            },
          ]}
        />

        {/* Related Searches for Luxury Homes */}
        <RelatedSearches searchType="luxury-homes" />

        <BackToTop />
      </div>
    </>
  );
}
