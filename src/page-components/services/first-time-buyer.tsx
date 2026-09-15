'use client';

import ComprehensiveSchemaMarkup from '@/components/comprehensive-schema';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import RelatedSearches from '@/components/related-searches';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

export default function FirstTimeBuyerServices() {
  return (
    <>
      <ComprehensiveSchemaMarkup
        pageType="service"
        serviceName="first-time-buyer"
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services/buyer-agent` },
          {
            name: 'First-Time Buyer',
            url: `${siteConfig.url}/services/first-time-buyer`,
          },
        ]}
      />

      <div className="min-h-screen bg-gray-50">

        <main>
          <PageHero
            title="Skye Canyon First-Time Buyer Expert"
            subtitle="Step-by-step guidance through financing, HOA requirements, builder incentives, and closing in 89166."
            {...getHeroImageProps('first-time-buyer')}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.realscoutOnboarding}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors text-center"
              >
                Search Skye Canyon Homes
              </a>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 border-2 border-white/40 transition-colors"
                aria-label={`Call Dr. Jan Duffy at ${siteConfig.phone}`}
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </PageHero>

          <section className="py-16 bg-white" aria-labelledby="services-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                id="services-heading"
                className="text-3xl font-bold text-center mb-12 text-gray-900"
              >
                Complete First-Time Buyer Support in Skye Canyon
              </h2>
              <HeadingImage
                {...sectionImages.guide}
                className="w-full h-56 object-cover rounded-xl mb-10"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    HOA & Community Navigation
                  </h3>
                  <p className="text-gray-600">
                    Expert guidance through Skye Canyon HOA requirements, amenities access, and
                    community regulations.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Builder Incentive Programs
                  </h3>
                  <p className="text-gray-600">
                    Access to builder incentives and first-time buyer loan programs.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Financing Education</h3>
                  <p className="text-gray-600">
                    Comprehensive education on loan programs, down payment assistance, and
                    qualification requirements.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Market Insights</h3>
                  <p className="text-gray-600">
                    Confirm live MLS comps, HOA dues, and builder incentives with Dr. Jan Duffy
                    before you write an offer in zip 89166.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="/contact"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
                  aria-label="Schedule consultation with Dr. Jan Duffy"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </section>
          <GbpLocalSection heading="Get first-time buyer guidance in Skye Canyon" />
          <RelatedSearches searchType="general" />
        </main>

      </div>
    </>
  );
}
