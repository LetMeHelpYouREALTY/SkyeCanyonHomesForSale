'use client';

import { Home, MapPin, Navigation, Phone, Search, Shield } from 'lucide-react';
import RealScoutListings from '@/components/realscout-listings';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import HeroSearchCtas from '@/components/hero-search-ctas';
import RelatedSearches from '@/components/related-searches';
import { sectionImages } from '@/data/section-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site.config';

export default function NorthwestLasVegas() {
  const neighborhoods = [
    {
      name: 'Skye Canyon',
      description: 'Guard-gated community with golf-course and rec-center homes',
      zip: '89166',
      features: ['Guarded gate', 'Golf Course', 'Recreation center'],
    },
    {
      name: 'Centennial Hills',
      description: 'Master-planned community with parks and shopping',
      zip: '89149',
      features: ['Parks', 'Shopping', 'Master-planned'],
    },
    {
      name: 'Summerlin',
      description: 'Master-planned west-valley communities near Red Rock Canyon',
      zip: '89144 / 89138',
      features: ['Golf Courses', 'Red Rock Views', 'Downtown Summerlin'],
    },
  ];

  return (
    <>
      <PageHero
        title="Northwest Las Vegas Real Estate"
        subtitle="Luxury homes in Skye Canyon, Centennial Hills, and surrounding northwest Las Vegas zip codes 89149, 89166, and 89144."
        {...getHeroImageProps('northwest-las-vegas')}
        badges={['89166', '89149', '89144']}
      >
        <HeroSearchCtas />
      </PageHero>

      {/* Current Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Northwest Las Vegas Skye Canyon Listings
            </h2>
            <p className="text-xl text-gray-600">Available properties in northwest communities</p>
          </div>
          <HeadingImage
            {...sectionImages.northwest}
            className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
          />
          <RealScoutListings className="w-full" variant="all-properties" />
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Northwest Las Vegas Skye Canyon Market Overview
            </h2>
            <p className="text-xl text-gray-600">
              Portal medians go stale. Confirm list prices and days on market on live MLS.
            </p>
            <HeadingImage
              {...sectionImages.market}
              className="w-full h-48 object-cover rounded-xl mt-8 max-w-4xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-realscout-blue mb-2">{siteConfig.address.zip}</div>
                <div className="text-gray-600 mb-2">Skye Canyon zip</div>
                <div className="text-sm text-gray-500">Northwest Las Vegas master plan</div>
              </CardContent>
            </Card>
            <a
              href={siteConfig.realscoutOnboarding}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="text-center h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Search className="w-8 h-8 text-realscout-blue mx-auto mb-2" aria-hidden="true" />
                  <div className="text-gray-900 font-semibold mb-2">Search Homes</div>
                  <div className="text-sm text-gray-500">Current 89166 / 89149 / 89144 inventory</div>
                </CardContent>
              </Card>
            </a>
            <a href={`tel:${siteConfig.phoneTel}`}>
              <Card className="text-center h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-realscout-blue mx-auto mb-2" aria-hidden="true" />
                  <div className="text-gray-900 font-semibold mb-2">Call for comps</div>
                  <div className="text-sm text-gray-500">{siteConfig.phone}</div>
                </CardContent>
              </Card>
            </a>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="text-center h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Navigation className="w-8 h-8 text-realscout-blue mx-auto mb-2" aria-hidden="true" />
                  <div className="text-gray-900 font-semibold mb-2">Google Maps</div>
                  <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3" aria-hidden="true" />
                    {siteConfig.address.street}
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Neighborhoods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Northwest Las Vegas Skye Canyon Communities
            </h2>
            <p className="text-xl text-gray-600">
              Compare Skye Canyon, Centennial Hills, and nearby west-valley communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => {
              const photo =
                neighborhood.name === 'Skye Canyon'
                  ? sectionImages.guide
                  : neighborhood.name === 'Centennial Hills'
                    ? sectionImages.northwest
                    : sectionImages.golf;
              return (
              <Card key={index} className="overflow-hidden">
                <HeadingImage
                  src={photo.src}
                  srcWebp={photo.srcWebp}
                  alt={`${neighborhood.name} homes Las Vegas Nevada`}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{neighborhood.name}</h3>
                  <p className="text-gray-600 mb-4">{neighborhood.description}</p>
                  <div className="text-lg font-semibold text-realscout-blue mb-4">
                    Zip {neighborhood.zip} · Confirm live MLS
                  </div>
                  <div className="space-y-2 mb-6">
                    {neighborhood.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Shield className="w-4 h-4 mr-2 text-realscout-blue" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a
                    href={siteConfig.realscoutOnboarding}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-realscout-blue text-white hover:bg-realscout-navy text-center rounded-md px-4 py-2 font-medium"
                  >
                    Search Homes
                  </a>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Northwest Las Vegas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Northwest Las Vegas?
              </h2>
              <HeadingImage
                {...sectionImages.northwest}
                className="w-full h-48 object-cover rounded-xl mb-8"
              />
              <div className="space-y-6">
                <div className="flex items-start">
                  <Home className="w-6 h-6 text-realscout-blue mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Luxury Living</h3>
                    <p className="text-gray-600">
                      Master-planned communities with resort-style amenities, golf courses, and
                      stunning Red Rock Canyon views.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Search className="w-6 h-6 text-realscout-blue mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Live MLS Comps</h3>
                    <p className="text-gray-600">
                      List prices and days on market change weekly. Search current northwest Las
                      Vegas inventory or call Dr. Jan Duffy for a zip-by-zip snapshot.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-realscout-blue mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Named Campuses Nearby</h3>
                    <p className="text-gray-600">
                      Clark County School District campuses serve zip 89166. Ask Dr. Duffy for
                      current zoning and typical drive times from a specific address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Ready to Explore?</h3>
              <p className="text-gray-600 mb-6">
                Search live MLS for Northwest Las Vegas and Skye Canyon 89166. Call {siteConfig.phone}{' '}
                to tour from {siteConfig.address.street}.
              </p>
              <div className="space-y-3">
                <a
                  href={siteConfig.realscoutOnboarding}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-realscout-blue text-white hover:bg-realscout-navy">
                    Search Homes
                  </Button>
                </a>
                <a href="/contact" className="block">
                  <Button className="w-full bg-realscout-blue text-white hover:bg-realscout-navy">
                    Schedule Your Consultation
                  </Button>
                </a>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full border-realscout-blue text-realscout-blue"
                  >
                    Open Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GbpLocalSection heading="Visit the northwest Las Vegas office in Skye Canyon" />
      <RelatedSearches searchType="las-vegas" />

    </>
  );
}
