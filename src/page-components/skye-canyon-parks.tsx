'use client';

import { MapPin, Users } from 'lucide-react';
import FAQSection from '@/components/faq-section';
import GbpLocalSection from '@/components/gbp-local-section';
import RelatedSearches from '@/components/related-searches';
import HeadingImage from '@/components/heading-image';
import RealScoutListings from '@/components/realscout-listings';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import { sectionImages } from '@/data/section-images';
import { siteConfig } from '@/config/site.config';
import HeroSearchCtas from '@/components/hero-search-ctas';

export default function SkyeCanyonParks() {
  const parksData = [
    {
      name: 'Skye Canyon Park',
      size: '15-acre',
      description:
        'The sprawling 15-acre Skye Canyon Park, adjacent to Skye Center and Skye Fitness, is the heartbeat of the neighborhood and home to many community events.',
      address: '10111 W Skye Canyon Park Dr, Las Vegas, NV 89166',
      hours: '6:00am – 9:00pm',
      features: [
        '15-acre park',
        'Skye Center',
        'Skye Fitness',
        'Two covered play areas',
        'Splash pad',
        'Grass field with football & soccer goal posts',
        'Basketball court with 6 hoops',
        '½ mile walking path',
        'Junior Olympic swimming pool',
      ],
      highlights: ['Main community hub', 'Resident-only pool access', 'Event hosting venue'],
    },
    {
      name: 'Eagle Canyon Park',
      description:
        'Park with covered play structures and open lawns for recreation.',
      features: ['Play structures', 'Open green spaces', 'Walking paths'],
      highlights: ['Play structures', 'Open lawn recreation'],
    },
    {
      name: 'Skye View Park',
      description:
        'Park with Red Rock and Sheep Mountain views, walking trails, and picnic tables.',
      features: ['Mountain views', 'Walking trails', 'Picnic areas'],
      highlights: ['Scenic mountain vistas', 'Walking trails'],
    },
    {
      name: 'Big Skye Park',
      description:
        'Expansive park space designed for larger recreational activities and community gatherings.',
      features: ['Large open areas', 'Multi-use fields', 'Community gathering spaces'],
      highlights: ['Spacious recreation areas', 'Community events'],
    },
    {
      name: 'Starlight Park',
      description:
        'Park with lighting for after-dusk walking and recreation.',
      features: ['Evening lighting', 'Play areas', 'Open spaces'],
      highlights: ['Extended hours usage', 'Lighted evening recreation'],
    },
  ];

  const parksFAQs = [
    {
      question: 'What parks are available in Skye Canyon Las Vegas?',
      answer:
        'Skye Canyon features five community parks: the 15-acre Skye Canyon Park (main hub), Eagle Canyon Park, Skye View Park, Big Skye Park, and Starlight Park. Amenities include splash pads, sports courts, walking paths, and a Junior Olympic pool.',
    },
    {
      question: 'What are the hours for Skye Canyon Park?',
      answer:
        'Skye Canyon Park is open daily from 6:00am to 9:00pm, located at 10111 W Skye Canyon Park Dr, Las Vegas, NV 89166, adjacent to Skye Center and Skye Fitness.',
    },
    {
      question: 'Does Skye Canyon Park have a swimming pool?',
      answer:
        'Yes, Skye Canyon Park features a Junior Olympic swimming pool with resident-only access, along with a splash pad.',
    },
    {
      question: 'What sports facilities are at Skye Canyon parks?',
      answer:
        'Skye Canyon parks offer basketball courts with 6 hoops, grass fields with football and soccer goal posts, walking paths, and various play structures for active outdoor recreation.',
    },
    {
      question: 'What play and sports amenities are at Skye Canyon parks?',
      answer:
        'Skye Canyon parks have covered play areas, splash pads, basketball courts, soccer and football fields, and walking paths. Confirm resident-only pool access with the HOA.',
    },
    {
      question: 'Can I host events at Skye Canyon parks?',
      answer:
        "The 15-acre Skye Canyon Park hosts HOA events, with lawns, splash pads, and courts. Confirm reservation rules with the HOA.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

        <PageHero
          title="Skye Canyon Parks & Recreation"
          subtitle="Play, run, or splash in one of Skye Canyon's community parks — fitness-inspired outdoor recreation in Las Vegas NV 89166."
          {...getHeroImageProps('skye-canyon-parks')}
          badges={['5 Community Parks', 'Splash Pads & Pool', 'Sports Courts & Fields']}
        >
          <HeroSearchCtas searchLabel="Search Homes Near Parks" />
        </PageHero>

        {/* Current Listings */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Skye Canyon Homes Near Parks & Recreation
              </h2>
              <p className="text-xl text-gray-600">Properties close to community amenities</p>
            </div>
            <HeadingImage
              {...sectionImages.parks}
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />
            <RealScoutListings className="w-full" variant="all-properties" />
          </div>
        </section>

        {/* Main Park Feature */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Skye Canyon Park
                  <span className="block text-lg text-blue-600 font-normal">
                    15-Acre Community Hub
                  </span>
                </h2>
                <p className="text-gray-600 mb-6">
                  The sprawling 15-acre Skye Canyon Park, adjacent to Skye Center and Skye Fitness,
                  is the heartbeat of the neighborhood and home to many community events.
                  Easily-accessible, the park features large green spaces and resident-only pool
                  access.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600">🕕</span>
                    <span className="text-gray-700">Open 6:00am – 9:00pm daily</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <span className="text-gray-700">10111 W Skye Canyon Park Dr</span>
                      <br />
                      <span className="text-gray-700">Las Vegas, NV 89166</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {parksData[0].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <HeadingImage
                {...sectionImages.recreation}
                className="w-full h-72 object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* All Parks Grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              All Skye Canyon Community Parks
            </h2>
            <HeadingImage
              {...sectionImages.parks}
              className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parksData.slice(1).map((park, index) => {
                const parkPhotos = [
                  sectionImages.parks,
                  sectionImages.northwest,
                  sectionImages.recreation,
                  sectionImages.clubhouse,
                ];
                const photo = parkPhotos[index] ?? sectionImages.parks;
                return (
                <div
                  key={park.name}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <HeadingImage
                    src={photo.src}
                    srcWebp={photo.srcWebp}
                    alt={`${park.name} in Skye Canyon Las Vegas NV 89166`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{park.name}</h3>
                  <p className="text-gray-600 mb-4">{park.description}</p>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-medium text-gray-900">Features:</h4>
                    {park.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
                    {park.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recreation Benefits */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Parks, Trails, and Recreation
            </h2>
            <HeadingImage
              {...sectionImages.clubhouse}
              className="w-full h-56 object-cover rounded-xl mb-8"
            />
            <p className="text-xl text-gray-600 mb-12">
              Splash pads, basketball courts, soccer fields, and play structures are available at
              Skye Canyon community parks in Las Vegas NV 89166.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Play Areas</h3>
                <p className="text-gray-600">
                  Covered play structures, splash pads, and open lawns at Skye Canyon Park.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-green-600">💪</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fitness Focused</h3>
                <p className="text-gray-600">
                  Walking paths, sports courts, and fitness amenities for an active lifestyle.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-purple-600">🌲</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Events</h3>
                <p className="text-gray-600">
                  HOA event lawns, splash pads, and courts at Skye Canyon Park in zip 89166.
                </p>
              </div>
            </div>
          </div>
        </section>

        <GbpLocalSection heading="Directions to Skye Canyon Park" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions About Skye Canyon Parks"
          faqs={parksFAQs}
          pageType="skye-canyon"
        />

        <RelatedSearches searchType="skye-canyon" />

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Find Your Home Near Skye Canyon Parks
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Compare current MLS homes near Skye Canyon Park, the rec center, and Desert Highlands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.realscoutOnboarding}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Search Homes
              </a>
              <a
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get directions
              </a>
              <a
                href="tel:+17025001902"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call (702) 500-1902
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
