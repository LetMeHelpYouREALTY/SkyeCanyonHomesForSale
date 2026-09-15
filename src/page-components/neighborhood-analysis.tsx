'use client';

import BackToTop from '@/components/back-to-top';
import FAQSection from '@/components/faq-section';
import NeighborhoodHeatmap from '@/components/neighborhood-heatmap';
import RealScoutListings from '@/components/realscout-listings';
import RelatedSearches from '@/components/related-searches';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import HeroSearchCtas from '@/components/hero-search-ctas';
import { sectionImages } from '@/data/section-images';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site.config';

export default function NeighborhoodAnalysis() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <PageHero
          title="Las Vegas Neighborhood Analysis"
          subtitle="Interactive market heat map with pricing trends, activity, and local insights across northwest Las Vegas neighborhoods."
          {...getHeroImageProps('neighborhood-analysis')}
          badges={['89166', '89149', '89144', 'Live MLS']}
        >
          <HeroSearchCtas searchLabel="Search Northwest Las Vegas Homes" />
        </PageHero>

        {/* Key Insights Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Market Overview & Key Insights
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding neighborhood dynamics is crucial for making informed real estate
                decisions. Our interactive heat map provides comprehensive data to guide your
                investment choices.
              </p>
              <HeadingImage
                {...sectionImages.northwest}
                className="w-full h-56 md:h-72 object-cover rounded-xl mt-8"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">89166</div>
                  <div className="text-gray-600">Skye Canyon zip</div>
                  <div className="text-sm text-gray-500 mt-1">Northwest Las Vegas</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Live MLS</div>
                  <div className="text-gray-600">Current inventory</div>
                  <a
                    href={siteConfig.realscoutOnboarding}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 mt-1 inline-block"
                  >
                    Search listings
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                  <div className="text-gray-600">Elementary Campuses</div>
                  <div className="text-sm text-gray-500 mt-1">Scherkenbach, Bilbray, Divich</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Maps</div>
                  <div className="text-gray-600">Office pin</div>
                  <div className="text-sm text-gray-500 mt-1">{siteConfig.address.street}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Neighborhood Heatmap */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <NeighborhoodHeatmap />
          </div>
        </section>

        {/* Neighborhood Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Location Matters in Las Vegas Real Estate
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Compare guard-gated golf, parks, named campuses, and commute times. Confirm live MLS
                comps for the specific address.
              </p>
              <HeadingImage
                {...sectionImages.communityMap}
                className="w-full h-56 object-cover object-top rounded-xl mt-8"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    {...sectionImages.monument}
                    alt="Skye Canyon monument gate Las Vegas NV 89166"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">Guard-gated golf</h3>
                  <div className="space-y-3 text-gray-600">
                    <div>Skye Canyon — Desert Highlands Golf Course, rec center</div>
                    <div>Summerlin West — parks and trailheads toward Red Rock</div>
                    <div className="text-sm text-blue-600 mt-4">Confirm live MLS list prices</div>
                  </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    {...sectionImages.northwest}
                    alt="Centennial Hills and northwest Las Vegas homes NV 89149"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">Nearby northwest zips</h3>
                  <div className="space-y-3 text-gray-600">
                    <div>Centennial Hills — shopping and recreation, zip 89149</div>
                    <div>Mountains Edge — parks and I-215 access</div>
                    <div className="text-sm text-blue-600 mt-4">Confirm live MLS list prices</div>
                  </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    {...sectionImages.listings}
                    alt="Las Vegas NV resale homes for sale near Skye Canyon"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">Compare on MLS</h3>
                  <div className="space-y-3 text-gray-600">
                    <div>Aliante and other northwest corridors</div>
                    <div>Match commute times and HOA fees to the listing</div>
                    <div className="text-sm text-blue-600 mt-4">Confirm live MLS list prices</div>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Available Properties by Neighborhood
              </h2>
              <p className="text-lg text-gray-600">
                Explore current listings in each analyzed neighborhood
              </p>
              <HeadingImage
                {...sectionImages.listings}
                className="w-full h-52 object-cover rounded-xl mt-8"
              />
            </div>
            <RealScoutListings variant="all-properties" />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Neighborhood Analysis FAQs"
          pageType="market-analysis"
          faqs={[
            {
              question: 'How do I compare housing across Las Vegas neighborhoods?',
              answer:
                'Pull live MLS comps, days on market, and current inventory for Skye Canyon, Summerlin West, and Centennial Hills. Confirm numbers with Dr. Jan Duffy at (702) 500-1902. Guard-gated entry and Desert Highlands Golf Course are facts to weigh — they are not a substitute for sale comps.',
            },
            {
              question: 'How do I confirm which campus serves a Skye Canyon address?',
              answer:
                'Use the Clark County School District locator for the specific address. Skye Canyon is served by William & Mary Scherkenbach Elementary, James Bilbray Elementary, Kenneth Divich Elementary, Ralph Cadwallader Middle, Edmundo Escobedo Sr Middle, and Arbor View High School. Confirm boundaries before you write an offer.',
            },
            {
              question: 'What makes Skye Canyon stand out from other neighborhoods?',
              answer:
                'Skye Canyon has 24/7 guard-gated entry, Desert Highlands Golf Course, a 15-acre community park, and a short drive to Red Rock Canyon. Confirm commute times for your work location.',
            },
            {
              question: 'How often is the market data updated?',
              answer:
                'Confirm the latest sales, list prices, and days on market on live MLS with Dr. Jan Duffy. Portal snapshots go stale; call (702) 500-1902 for a current pull.',
            },
          ]}
        />

        <GbpLocalSection heading="Walk northwest Las Vegas neighborhoods with a local agent" />

        {/* Related Searches */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RelatedSearches searchType="las-vegas" />
          </div>
        </section>
      </main>

      <BackToTop />
    </>
  );
}
