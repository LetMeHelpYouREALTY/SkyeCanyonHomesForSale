'use client';

import { Home, MapPin, TrendingUp, Users } from 'lucide-react';
import BackToTop from '@/components/back-to-top';
import FAQSection from '@/components/faq-section';
import NeighborhoodHeatmap from '@/components/neighborhood-heatmap';
import RealScoutListings from '@/components/realscout-listings';
import RelatedSearches from '@/components/related-searches';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import { sectionImages } from '@/data/section-images';
import { Card, CardContent } from '@/components/ui/card';

export default function NeighborhoodAnalysis() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <PageHero
          title="Las Vegas Neighborhood Analysis"
          subtitle="Interactive market heat map with pricing trends, activity, and local insights across northwest Las Vegas neighborhoods."
          {...getHeroImageProps('neighborhood-analysis')}
          badges={['5 Key Neighborhoods', 'Live Market Data', 'Price Comparisons', 'Community Insights']}
        />

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
                  <div className="text-3xl font-bold text-blue-600 mb-2">$1.25M</div>
                  <div className="text-gray-600">Average Skye Canyon Price</div>
                  <div className="text-sm text-green-600 mt-1">+8.5% YoY</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                  <div className="text-gray-600">Avg Days on Market</div>
                  <div className="text-sm text-blue-600 mt-1">Hot Market</div>
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
                  <div className="text-3xl font-bold text-orange-600 mb-2">24</div>
                  <div className="text-gray-600">Recent Sales</div>
                  <div className="text-sm text-gray-500 mt-1">Last 30 Days</div>
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
                Each neighborhood offers unique advantages. Understanding these differences helps
                you make the best investment decision for your lifestyle and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Premium Communities</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex justify-between">
                      <span>Skye Canyon</span>
                      <span className="font-medium">$1.25M avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Summerlin West</span>
                      <span className="font-medium">$1.10M avg</span>
                    </div>
                    <div className="text-sm text-blue-600 mt-4">
                      Guard-gated, golf, parks and recreation
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Growing Markets</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex justify-between">
                      <span>Centennial Hills</span>
                      <span className="font-medium">$950K avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mountains Edge</span>
                      <span className="font-medium">$780K avg</span>
                    </div>
                    <div className="text-sm text-green-600 mt-4">
                      Strong appreciation, parks and shopping
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Value Opportunities</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex justify-between">
                      <span>Aliante</span>
                      <span className="font-medium">$650K avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Other Areas</span>
                      <span className="font-medium">Varies</span>
                    </div>
                    <div className="text-sm text-purple-600 mt-4">
                      Entry-level luxury, established communities
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
            </div>
            <RealScoutListings />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Neighborhood Analysis FAQs"
          pageType="market-analysis"
          faqs={[
            {
              question: 'Which Las Vegas neighborhood has the best investment potential?',
              answer:
                'Skye Canyon and Summerlin West have shown consistent appreciation with guard-gated access, golf amenities, and limited inventory. Confirm live MLS comps before you decide.',
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
                'Our neighborhood analysis data is updated weekly with the latest sales, price trends, and market activity to ensure you have the most current information for decision-making.',
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
