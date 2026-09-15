'use client';

import BackToTop from '@/components/back-to-top';
import FAQSection from '@/components/faq-section';
import RealScoutListings from '@/components/realscout-listings';
import RelatedSearches from '@/components/related-searches';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import HeadingImage from '@/components/heading-image';
import GbpLocalSection from '@/components/gbp-local-section';
import HeroSearchCtas from '@/components/hero-search-ctas';
import { sectionImages } from '@/data/section-images';
import { Card, CardContent } from '@/components/ui/card';

export default function SkyeCanyonGuide() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">

        <PageHero
          title="Skye Canyon Homes Community Guide Las Vegas 89166"
          subtitle="Guard-gated parks, golf, recreation, and named CCSD campuses in Las Vegas NV 89166."
          {...getHeroImageProps('skye-canyon-guide')}
        >
          <HeroSearchCtas />
        </PageHero>

        {/* Current Listings */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Skye Canyon Home Listings Nevada 89166
              </h2>
              <p className="text-xl text-gray-600">Available homes in Skye Canyon, Las Vegas NV 89166</p>
            </div>
            <HeadingImage
              src={sectionImages.listings.src}
              srcWebp={sectionImages.listings.srcWebp}
              alt={sectionImages.listings.alt}
              className="w-full h-52 object-cover rounded-xl mb-8"
            />
            <RealScoutListings className="w-full" variant="all-properties" />
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Skye Canyon Community Overview Las Vegas Nevada
            </h2>
            <HeadingImage
              src={sectionImages.communityMap.src}
              srcWebp={sectionImages.communityMap.srcWebp}
              alt={sectionImages.communityMap.alt}
              className="w-full h-64 object-cover object-top rounded-xl mb-10"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-realscout-blue mb-2">89166</h3>
                  <p className="text-sm text-gray-600">Skye Canyon zip</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-realscout-blue mb-2">Guard-gated</h3>
                  <p className="text-sm text-gray-600">Staffed entry on Skye Canyon Park Dr</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-realscout-blue mb-2">Golf + rec</h3>
                  <p className="text-sm text-gray-600">Desert Highlands and clubhouse amenities</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-realscout-blue mb-2">Confirm MLS</h3>
                  <p className="text-sm text-gray-600">Live list prices, lots, and HOA on each listing</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Premium Amenities</h2>
            <HeadingImage
              {...sectionImages.clubhouse}
              alt="Skye Canyon clubhouse firepit and recreation terrace Las Vegas NV 89166"
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    src={sectionImages.guide.src}
                    srcWebp={sectionImages.guide.srcWebp}
                    alt="Guarded gate entry to Skye Canyon Las Vegas NV 89166"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">24/7 Guard-Gated Access</h3>
                  <p className="text-gray-600">
                    Controlled vehicle access with a staffed gatehouse in Las Vegas NV 89166.
                  </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    src={sectionImages.golf.src}
                    srcWebp={sectionImages.golf.srcWebp}
                    alt={sectionImages.golf.alt}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Desert Highlands Golf Course</h3>
                  <p className="text-gray-600">
                    Championship 18-hole golf course with mountain views and clubhouse amenities.
                  </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <HeadingImage
                    src={sectionImages.recreation.src}
                    srcWebp={sectionImages.recreation.srcWebp}
                    alt={sectionImages.recreation.alt}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Community Recreation Center</h3>
                  <p className="text-gray-600">
                    Fitness rooms, pools, tennis courts, and event spaces at Skye Canyon.
                  </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section for Skye Canyon Community */}
        <FAQSection
          title="Living in Skye Canyon - Community Guide FAQs"
          pageType="skye-canyon"
          faqs={[
            {
              question: 'What makes Skye Canyon different from other Las Vegas communities?',
              answer:
                'Skye Canyon is a 24/7 guard-gated community with Desert Highlands Golf Course and recreation amenities at 10111 W Skye Canyon Park Dr, Las Vegas NV 89166. Confirm lot size on the specific listing.',
            },
            {
              question: 'What amenities are included with Skye Canyon living?',
              answer:
                'Residents enjoy access to Desert Highlands Golf Course, community recreation center with fitness facilities, swimming pools, tennis courts, walking trails, clubhouse, and various community events and activities.',
            },
            {
              question: 'What are the HOA fees in Skye Canyon?',
              answer:
                'HOA dues vary by village and amenity access. Confirm current fees on the listing or with Dr. Jan Duffy at (702) 500-1902. Dues typically cover the staffed gate, common-area upkeep, and recreation amenities.',
            },
            {
              question: 'What schools serve Skye Canyon residents?',
              answer:
                'Skye Canyon addresses are served by Clark County School District campuses including Kenneth Divich Elementary, William & Mary Scherkenbach Elementary, James Bilbray Elementary, Ralph Cadwallader Middle, Edmundo Escobedo Sr Middle, and Arbor View High. Confirm the CCSD locator for a specific street.',
            },
            {
              question: 'How far is Skye Canyon from Las Vegas Strip and airport?',
              answer:
                'Skye Canyon is about 25–30 minutes from the Las Vegas Strip and Harry Reid International Airport, with I-215 and the 215 Beltway as the usual drive.',
            },
            {
              question: 'Are there dining and shopping options near Skye Canyon?',
              answer:
                'Yes, Skye Canyon is close to various shopping centers, restaurants, grocery stores, and entertainment venues in the northwest Las Vegas area, with easy access to major retail and dining destinations.',
            },
          ]}
        />

        <GbpLocalSection heading="Explore Skye Canyon from the community office" />

        {/* Related Searches for Skye Canyon */}
        <RelatedSearches searchType="skye-canyon" />

        <BackToTop />
      </div>
    </>
  );
}
