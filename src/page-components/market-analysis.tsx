'use client';

import BackToTop from '@/components/back-to-top';
import Breadcrumb from '@/components/breadcrumb';
import FAQSection from '@/components/faq-section';
import MarketIntelligence from '@/components/market-intelligence';
import MarketStats from '@/components/market-stats';
import RealScoutListings from '@/components/realscout-listings';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import { sectionImages } from '@/data/section-images';

export default function MarketAnalysis() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">

        <PageHero
          title="Skye Canyon Real Estate Market Trends Nevada 89166"
          subtitle="Comprehensive market insights and pricing trends for Skye Canyon, Las Vegas — stay informed on investment opportunities in northwest Las Vegas."
          {...getHeroImageProps('market-analysis')}
        />

        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'Market Analysis' }]} />
        </div>

        {/* Current Listings */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Skye Canyon Market Listings Nevada 89166
              </h2>
              <p className="text-xl text-gray-600">
                Live inventory showing current market conditions
              </p>
            </div>
            <HeadingImage
              {...sectionImages.market}
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />
            <RealScoutListings className="w-full" />
          </div>
        </section>

        {/* Market Statistics */}
        <MarketStats />

        {/* Market Intelligence & Insights */}
        <MarketIntelligence />

        {/* Additional Market Context */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Invest in Skye Canyon Las Vegas Nevada?
            </h2>
            <HeadingImage
              {...sectionImages.golf}
              className="w-full h-52 object-cover rounded-xl mb-10"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-realscout-blue">
                  Guarded Gate
                </h3>
                <p className="text-gray-700">
                  24/7 guarded gate and controlled vehicle access in Las Vegas NV 89166.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-realscout-blue">
                  Golf Course Living
                </h3>
                <p className="text-gray-700">
                  Beautiful homes surrounding championship golf courses with stunning mountain
                  views.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-realscout-blue">
                  Parks and Recreation
                </h3>
                <p className="text-gray-700">
                  Skye Canyon Park, trails, pools, and Desert Highlands Golf Course are within the
                  89166 community.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-realscout-blue">Live MLS comps</h3>
                <p className="text-gray-700">
                  Confirm current list prices and sale comps with Dr. Jan Duffy before you decide.
                  Portal medians go stale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section for Market Analysis */}
        <FAQSection
          title="Skye Canyon Market Analysis & Investment FAQs"
          pageType="market-analysis"
          faqs={[
            {
              question: 'What is the current median home price in Skye Canyon?',
              answer:
                'Medians move monthly. Confirm live MLS list prices and recent sale comps with Dr. Jan Duffy at (702) 500-1902 before you write an offer.',
            },
            {
              question: 'How is the Skye Canyon real estate market performing?',
              answer:
                'Inventory, days on market, and sale-to-list ratios change week to week. Search live MLS or visit 10111 W. Skye Canyon Park Drive for a current snapshot.',
            },
            {
              question: 'What is the average days on market for Skye Canyon homes?',
              answer:
                'Days on market depends on price, condition, and village. Confirm the live MLS figure for the specific listing with Dr. Jan Duffy.',
            },
            {
              question: 'Is Skye Canyon a good investment for real estate?',
              answer:
                'Guard-gated inventory, Desert Highlands Golf Course, and limited new phases are the facts to weigh. Confirm current comps on live MLS with Dr. Jan Duffy before you decide.',
            },
            {
              question: 'What factors affect Skye Canyon property values?',
              answer:
                'Golf-course orientation, lot size, home condition, custom features, and proximity to Skye Canyon Park and the rec center. Confirm commute time for your work location.',
            },
            {
              question: 'How do Skye Canyon prices compare to other Las Vegas areas?',
              answer:
                'Compare Skye Canyon with Summerlin West, Centennial Hills, The Ridges, and Spanish Trail on live MLS. Amenities differ; list prices are not a substitute for a comp pull.',
            },
          ]}
        />

        <GbpLocalSection heading="Get current Skye Canyon comps in person" />

        <BackToTop />
      </div>
    </>
  );
}
