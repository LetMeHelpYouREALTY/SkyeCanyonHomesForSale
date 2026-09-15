'use client';

import { BookOpen, GraduationCap, MapPin, School, Users } from 'lucide-react';
import FAQSection from '@/components/faq-section';
import GbpLocalSection from '@/components/gbp-local-section';
import RelatedSearches from '@/components/related-searches';
import HeadingImage from '@/components/heading-image';
import RealScoutListings from '@/components/realscout-listings';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import { sectionImages } from '@/data/section-images';
import HeroSearchCtas from '@/components/hero-search-ctas';
import { siteConfig } from '@/config/site.config';

const elementarySchools = [
  {
    name: 'William & Mary Scherkenbach Elementary School',
    type: 'Public Elementary (K-5)',
    district: 'Clark County School District',
  },
  {
    name: 'James Bilbray Elementary School',
    type: 'Public Elementary (K-5)',
    district: 'Clark County School District',
  },
  {
    name: 'Kenneth Divich Elementary',
    type: 'Public Elementary (K-5)',
    district: 'Clark County School District',
  },
];

const middleSchools = [
  {
    name: 'Ralph Cadwallader Middle School',
    type: 'Public Middle School',
    district: 'Clark County School District',
  },
  {
    name: 'Edmundo Escobedo Sr Middle School',
    type: 'Public Middle School',
    district: 'Clark County School District',
  },
];

const _highSchools = [
  {
    name: 'Arbor View High School',
    type: 'Public High School',
    district: 'Clark County School District',
  },
];

const _charterSchools = [
  {
    name: 'Somerset Academy – Skye Canyon Campus',
    type: 'Charter Elementary and Middle/High School',
    description: 'K-12 charter campus serving Skye Canyon addresses',
  },
];

const schoolsFAQs = [
  {
    question: 'What elementary schools serve Skye Canyon?',
    answer:
      'Skye Canyon is served by three K-5 campuses: William & Mary Scherkenbach Elementary, James Bilbray Elementary, and Kenneth Divich Elementary, all in Clark County School District. Confirm the locator for a specific address.',
  },
  {
    question: 'Which middle schools do Skye Canyon students attend?',
    answer:
      'Skye Canyon addresses are zoned to Ralph Cadwallader Middle School or Edmundo Escobedo Sr Middle School in Clark County School District. Confirm the current locator before you write an offer.',
  },
  {
    question: 'What is the zoned high school for Skye Canyon?',
    answer:
      'Arbor View High School is the zoned high school for Skye Canyon addresses. Confirm CCSD high school zoning for the specific property.',
  },
  {
    question: 'Are there charter school options in Skye Canyon?',
    answer:
      'Yes, Somerset Academy – Skye Canyon Campus offers K-12 charter education. Confirm enrollment and transportation directly with the campus.',
  },
  {
    question: 'Will Skye Canyon get its own schools?',
    answer:
      'Confirm current and planned campuses with Clark County School District Demographics, Zoning, and GIS at dzg.ccsd.net. Do not rely on a listing description for zoning.',
  },
  {
    question: 'How do I find current school zoning for my Skye Canyon address?',
    answer:
      'Search the street address at dzg.ccsd.net, or call Dr. Jan Duffy at (702) 500-1902 for campus drive times from a specific listing.',
  },
];

export default function SkyeCanyonSchools() {
  return (
    <>
      {/* Enhanced Structured Data for Schools */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Skye Canyon Schools Guide — CCSD and Charter Campuses',
          description:
            'Guide to Clark County School District and charter campuses serving Skye Canyon, Las Vegas NV 89166',
          author: {
            '@type': 'Person',
            name: 'Dr. Jan Duffy',
            jobTitle: 'REALTOR®',
            license: 'S.0197614',
          },
          publisher: {
            '@type': 'RealEstateAgent',
            name: 'Dr. Jan Duffy',
            license: 'S.0197614',
          },
          datePublished: '2025-06-01',
          dateModified: '2025-06-01',
          about: {
            '@type': 'Place',
            name: 'Skye Canyon',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Las Vegas',
              addressRegion: 'Nevada',
              postalCode: '89166',
            },
          },
          mentions: [
            {
              '@type': 'School',
              name: 'Arbor View High School',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Las Vegas',
                addressRegion: 'Nevada',
              },
            },
            {
              '@type': 'School',
              name: 'Somerset Academy Skye Canyon Campus',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Las Vegas',
                addressRegion: 'Nevada',
              },
            },
          ],
        })}
      </script>

      <div className="min-h-screen bg-white">

        <PageHero
          title="Skye Canyon Schools Guide"
          subtitle="Education options for Skye Canyon — Clark County School District public schools and charter programs in northwest Las Vegas NV 89166."
          {...getHeroImageProps('skye-canyon-schools')}
          badges={['Named CCSD campuses', 'Somerset Academy', 'Confirm CCSD locator']}
        >
          <HeroSearchCtas />
        </PageHero>

        {/* Current Listings */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Skye Canyon Homes Near Clark County Campuses
              </h2>
              <p className="text-xl text-gray-600">Properties in Las Vegas NV 89166 school zones</p>
            </div>
            <HeadingImage
              {...sectionImages.schools}
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />
            <RealScoutListings className="w-full" variant="all-properties" />
          </div>
        </section>

        {/* Elementary Schools Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Skye Canyon K-5 Elementary Schools
              </h2>
              <p className="text-xl text-gray-600">
                Three elementary campuses serve Skye Canyon addresses
              </p>
              <HeadingImage
                {...sectionImages.schools}
                className="w-full h-48 object-cover rounded-xl mt-8 max-w-4xl mx-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {elementarySchools.map((school, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-sm font-medium text-blue-600">Elementary</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{school.name}</h3>
                  <p className="text-gray-600 mb-2">{school.type}</p>
                  <p className="text-sm text-gray-500">{school.district}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Middle Schools Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Skye Canyon Middle/Junior High Schools
              </h2>
            <p className="text-xl text-gray-600">
              Ralph Cadwallader Middle and Edmundo Escobedo Sr Middle serve Skye Canyon addresses
            </p>
              <HeadingImage
                {...sectionImages.communityMap}
                className="w-full h-48 object-cover rounded-xl mt-8 max-w-4xl mx-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {middleSchools.map((school, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-sm font-medium text-green-600">Middle School</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{school.name}</h3>
                  <p className="text-gray-600 mb-2">{school.type}</p>
                  <p className="text-sm text-gray-500">{school.district}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* High School Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Skye Canyon Senior High School
              </h2>
              <p className="text-xl text-gray-600">
                Arbor View High School — zoned high school for Skye Canyon addresses
              </p>
              <HeadingImage
                {...sectionImages.schools}
                className="w-full h-48 object-cover rounded-xl mt-8 max-w-4xl mx-auto"
              />
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 text-center">
                <GraduationCap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Arbor View High School
                </h3>
                <p className="text-gray-600 mb-4">
                  Clark County School District high school serving Skye Canyon. Confirm programs,
                  athletics, and transportation on the CCSD campus page.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-purple-600">Advanced Placement</div>
                    <div className="text-gray-600">Advanced Placement courses</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-purple-600">Athletics</div>
                    <div className="text-gray-600">Confirm programs on the CCSD campus page</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charter School Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Charter School Options</h2>
              <p className="text-xl text-gray-600">
                Somerset Academy – Skye Canyon Campus is a K-12 charter. Confirm enrollment with the
                campus.
              </p>
              <HeadingImage
                {...sectionImages.schools}
                className="w-full h-48 object-cover rounded-xl mt-8 max-w-4xl mx-auto"
              />
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <School className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-sm font-medium text-orange-600">Charter School</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Somerset Academy – Skye Canyon Campus
                </h3>
                <p className="text-gray-600 mb-4">
                  K-12 charter campus serving Skye Canyon addresses. Confirm programs, enrollment,
                  and transportation directly with Somerset Academy.
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Confirm before you enroll</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• K-12 continuity on one Skye Canyon campus</li>
                    <li>• Ask the campus about current programs and hours</li>
                    <li>• Confirm CCSD zoning separately for nearby public campuses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Confirm Campus Assignment</h2>
              <p className="text-xl text-gray-600">
                CCSD zoning is by street address. Use the locator, then search homes near that campus.
              </p>
              <HeadingImage
                {...sectionImages.communityMap}
                className="w-full h-48 object-cover object-top rounded-xl mt-8 max-w-4xl mx-auto"
              />
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm max-w-4xl mx-auto text-center">
              <p className="text-gray-600 mb-6">
                Clark County School District publishes current attendance zones at dzg.ccsd.net.
                Call {siteConfig.phone} if you want campus drive times from a specific listing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://dzg.ccsd.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  Open CCSD campus locator
                </a>
                <a
                  href={siteConfig.realscoutOnboarding}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
                >
                  Search Homes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* School Zoning Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">School Zoning Information</h2>
              <p className="text-xl text-gray-600">
                Find current school assignments for your Skye Canyon address
              </p>
              <HeadingImage
                {...sectionImages.communityMap}
                className="w-full h-48 object-cover object-top rounded-xl mt-8 max-w-4xl mx-auto"
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Elementary School Zoning</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Find your zoned K-5 elementary school
                  </p>
                  <a
                    href="https://dzg.ccsd.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Check Elementary Zones →
                  </a>
                </div>

                <div>
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Middle School Zoning</h3>
                  <p className="text-sm text-gray-600 mb-4">Find your zoned middle school</p>
                  <a
                    href="https://dzg.ccsd.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Check Middle School Zones →
                  </a>
                </div>

                <div>
                  <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">High School Zoning</h3>
                  <p className="text-sm text-gray-600 mb-4">Confirm your high school assignment</p>
                  <a
                    href="https://dzg.ccsd.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Check High School Zones →
                  </a>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Need help finding school information for a specific property?
                  <a
                    href="tel:+17025001902"
                    className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                  >
                    Contact Dr. Jan Duffy at (702) 500-1902
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <GbpLocalSection heading="Confirm campus zones with Dr. Jan Duffy" />

        {/* FAQ Section */}
        <FAQSection
          title="Skye Canyon Schools - Frequently Asked Questions"
          faqs={schoolsFAQs}
          pageType="skye-canyon"
        />

        <RelatedSearches searchType="skye-canyon" />

      </div>
    </>
  );
}
