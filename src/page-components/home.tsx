'use client';

import AgentBio from '@/components/agent-bio';
import { CalendlyPopupButton } from '@/components/calendly-widget';
import CallToAction from '@/components/call-to-action';
import ComprehensiveSchemaMarkup from '@/components/comprehensive-schema';
import FAQSection from '@/components/faq-section';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import HeroSection from '@/components/hero-section';
import HomebotWidget from '@/components/homebot-widget';
import RealScoutListings from '@/components/realscout-listings';
import HyperlocalExploreHub from '@/components/sections/hyperlocal-explore-hub';
import GbpPosts from '@/components/gbp-posts';
import RelatedSearches from '@/components/related-searches';
import ReviewHighlights from '@/components/review-highlights';
import ServicesOverview from '@/components/services-overview';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

const exploreCards = [
  {
    href: '/skye-canyon-guide',
    title: 'Neighborhood Guide',
    description: 'Restaurants, named campuses, parks, and drive times in Las Vegas NV 89166.',
    image: sectionImages.guide,
    cta: 'Explore',
  },
  {
    href: '/market-analysis',
    title: 'Market Analytics',
    description: 'Price trends and current inventory for Skye Canyon Las Vegas NV 89166.',
    image: sectionImages.market,
    cta: 'View data',
  },
  {
    href: '/skye-canyon-schools',
    title: 'Schools & Education',
    description: 'Clark County campuses serving Skye Canyon with commute context.',
    image: sectionImages.schools,
    cta: 'View campuses',
  },
  {
    href: '/skye-canyon-communities',
    title: 'Communities & Builders',
    description: 'Eaglepointe, Marvella, Skyecrest, and Century Communities new construction.',
    image: sectionImages.communities,
    cta: 'Explore',
  },
  {
    href: '/skye-canyon-parks',
    title: 'Parks & Recreation',
    description: 'Golf, trails, pools, and Skye Canyon Park amenities in 89166.',
    image: sectionImages.parks,
    cta: 'See amenities',
  },
  {
    href: '/northwest-las-vegas',
    title: 'Northwest Las Vegas',
    description: 'Centennial Hills, Providence, and surrounding northwest Las Vegas areas.',
    image: sectionImages.northwest,
    cta: 'Explore area',
  },
];

export default function Home() {
  const listings = sectionImages.listings;
  const valuation = sectionImages.valuation;
  const golf = sectionImages.golf;

  return (
    <>
      <ComprehensiveSchemaMarkup
        pageType="homepage"
        breadcrumbs={[{ name: 'Home', url: siteConfig.url }]}
      />

      <div className="min-h-screen bg-white">
        <HeroSection />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Skye Canyon MLS Listings
              </h2>
              <p className="text-xl text-gray-600">
                Live inventory of available homes in Las Vegas NV 89166
              </p>
            </div>
            <HeadingImage
              src={listings.src}
              srcWebp={listings.srcWebp}
              alt={listings.alt}
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />
            <RealScoutListings className="w-full" />
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Skye Canyon Real Estate Market
            </h2>
            <HeadingImage
              src={sectionImages.market.src}
              srcWebp={sectionImages.market.srcWebp}
              alt={sectionImages.market.alt}
              className="w-full h-48 object-cover rounded-xl mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">89166</div>
                <div className="text-gray-600">Skye Canyon zip</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">Live MLS</div>
                <div className="text-gray-600">Current list prices</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">Maps pin</div>
                <div className="text-gray-600">{siteConfig.address.street}</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Confirm current list prices and sale comps on live MLS with Dr. Jan Duffy before you write an offer.
            </p>
            <a
              href="/market-analysis"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View Complete Market Analysis &rarr;
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What&apos;s Your Skye Canyon Home Worth?
              </h2>
              <p className="text-lg text-gray-600">
                Get an instant home valuation for your Skye Canyon property in Las Vegas NV 89166.
              </p>
            </div>
            <HeadingImage
              src={valuation.src}
              srcWebp={valuation.srcWebp}
              alt={valuation.alt}
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <HomebotWidget id="homebot_homeowner" className="w-full min-h-[200px]" />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Powered by Homebot &bull; Confirm the estimate against live MLS comps
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
            <HeadingImage
              src={golf.src}
              srcWebp={golf.srcWebp}
              alt={golf.alt}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Desert Highlands Golf Course Homes
              </h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Fairway lots in Skye Canyon, Las Vegas NV 89166
              </h3>
              <p className="text-gray-600 mb-6">
                Compare golf-course, interior, and new-construction floor plans with live MLS data.
                Dr. Jan Duffy walks the inventory at {siteConfig.address.formatted}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.realscoutOnboarding}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-white bg-blue-600 hover:bg-blue-700 font-medium px-5 py-3 rounded-lg text-center"
                >
                  Search Homes
                </a>
                <a
                  href="/luxury-homes-las-vegas"
                  className="inline-flex text-blue-600 font-medium hover:text-blue-800 items-center"
                >
                  Luxury and golf-course guide &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        <ServicesOverview />

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Skye Canyon</h2>
              <p className="text-lg text-gray-600">
                Amenities, builders, and northwest Las Vegas context for zip 89166
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exploreCards.map((card) => (
                <a
                  key={card.href}
                  href={card.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
                >
                  <HeadingImage
                    src={card.image.src}
                    srcWebp={card.image.srcWebp}
                    alt={card.image.alt}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{card.description}</p>
                    <span className="text-blue-600 font-medium text-sm group-hover:text-blue-800">
                      {card.cta} &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <HyperlocalExploreHub />

        <ReviewHighlights />
        <GbpPosts />
        <GbpLocalSection />

        <FAQSection
          title="Frequently Asked Questions About Skye Canyon"
          pageType="skye-canyon"
          faqs={[
            {
              question: 'What are the home prices in Skye Canyon?',
              answer:
                'List prices vary by village, golf-course lots, and new construction. Confirm live MLS comps with Dr. Jan Duffy at (702) 500-1902 before you write an offer.',
            },
            {
              question: 'Is Skye Canyon a guard-gated community?',
              answer:
                'Yes. Skye Canyon has a 24/7 guarded gate and controlled vehicle access in Las Vegas NV 89166.',
            },
            {
              question: 'What amenities are available in Skye Canyon?',
              answer:
                'Skye Canyon includes Desert Highlands Golf Course, a recreation center, fitness rooms, swimming pools, tennis courts, walking trails, and a clubhouse.',
            },
            {
              question: 'What schools serve the Skye Canyon area?',
              answer:
                'Zip 89166 addresses are served by Kenneth Divich, William & Mary Scherkenbach, and James Bilbray Elementary, Ralph Cadwallader and Edmundo Escobedo Sr Middle, and Arbor View High. Confirm the CCSD locator for a specific street.',
            },
            {
              question: 'Are there new construction homes available?',
              answer:
                'Yes. Skye Canyon offers resale and new construction by Century Communities in Eaglepointe, Marvella, and Skyecrest. Compare quick move-in and to-be-built options in zip 89166.',
            },
          ]}
        />

        <RelatedSearches searchType="skye-canyon" />

        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Search Skye Canyon Homes in 89166</h2>
            <p className="text-xl text-blue-100 mb-8">
              Live MLS with {siteConfig.name} at {siteConfig.address.formatted}. Call{' '}
              {siteConfig.phone}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.realscoutOnboarding}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg text-center"
              >
                Search Homes
              </a>
              <CalendlyPopupButton
                text="Schedule a Consultation"
                className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400 transition-colors shadow-lg text-center"
              />
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 border-2 border-blue-400 transition-colors shadow-lg text-center"
              >
                Call {siteConfig.phone}
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              {siteConfig.address.formatted} &bull; {siteConfig.brokerage}
            </p>
          </div>
        </section>

        <AgentBio />
        <CallToAction />
      </div>
    </>
  );
}
