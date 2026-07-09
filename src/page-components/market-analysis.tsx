'use client';

import BackToTop from '@/components/back-to-top';
import Breadcrumb from '@/components/breadcrumb';
import FAQSection from '@/components/faq-section';
import MarketIntelligence from '@/components/market-intelligence';
import MarketStats from '@/components/market-stats';
import RealScoutListings from '@/components/realscout-listings';
import PageHero from '@/components/sections/page-hero';
import { getHeroImage } from '@/data/hero-images';

export default function MarketAnalysis() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">

        <PageHero
          title="Skye Canyon Real Estate Market Trends Nevada 89166"
          subtitle="Comprehensive market insights and pricing trends for Skye Canyon, Las Vegas — stay informed on investment opportunities in northwest Las Vegas."
          image={getHeroImage('market-analysis').src}
          imageAlt={getHeroImage('market-analysis').alt}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-realscout-blue">
                  Guard-Gated Security
                </h3>
                <p className="text-gray-700">
                  24/7 security and controlled access providing peace of mind and exclusive
                  community living.
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
                <h3 className="text-xl font-semibold mb-4 text-realscout-blue">Family-Friendly</h3>
                <p className="text-gray-700">
                  Top-rated schools, parks, and family amenities make this ideal for growing
                  families.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-realscout-blue">Investment Value</h3>
                <p className="text-gray-700">
                  Strong appreciation rates and high demand make Skye Canyon an excellent
                  investment.
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
                'The current median home price in Skye Canyon ranges from $650,000 to $1.2M+, with luxury custom homes reaching higher price points. The guard-gated community maintains strong property values due to premium amenities and location.',
            },
            {
              question: 'How is the Skye Canyon real estate market performing?',
              answer:
                'Skye Canyon continues to show strong market performance with steady appreciation, low inventory, and high demand. The premium location and exclusive amenities contribute to consistent property value growth.',
            },
            {
              question: 'What is the average days on market for Skye Canyon homes?',
              answer:
                'Well-priced Skye Canyon homes typically sell within 30-45 days on market. Properties with unique features or premium locations often receive multiple offers and sell even faster.',
            },
            {
              question: 'Is Skye Canyon a good investment for real estate?',
              answer:
                "Yes, Skye Canyon offers excellent investment potential due to its guard-gated exclusivity, golf course amenities, limited inventory, and strong appreciation history. The community's desirability ensures long-term value stability.",
            },
            {
              question: 'What factors affect Skye Canyon property values?',
              answer:
                'Key factors include golf course views, lot size, home condition, custom features, and proximity to amenities. The guard-gated security and Desert Highlands Golf Course significantly enhance property values.',
            },
            {
              question: 'How do Skye Canyon prices compare to other Las Vegas areas?',
              answer:
                'Skye Canyon commands premium pricing compared to most Las Vegas areas due to its exclusive guard-gated status, golf course, and luxury amenities. Prices are competitive with other high-end communities like The Ridges and Spanish Trail.',
            },
          ]}
        />

        <BackToTop />
      </div>
    </>
  );
}
