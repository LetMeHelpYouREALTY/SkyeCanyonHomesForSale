'use client';

import ComprehensiveSchemaMarkup from '@/components/comprehensive-schema';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

export default function NewConstructionServices() {
  return (
    <>
      <ComprehensiveSchemaMarkup
        pageType="service"
        serviceName="new-construction"
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services/new-construction` },
          {
            name: 'New Construction',
            url: `${siteConfig.url}/services/new-construction`,
          },
        ]}
      />

      <div className="min-h-screen bg-gray-50">

        <main>
          <PageHero
            title="Skye Canyon New Construction Expert"
            subtitle="Century Communities specialist in Eaglepointe, Marvella, and Skyecrest — buyer representation for new builds in 89166."
            {...getHeroImageProps('new-construction')}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.realscoutOnboarding}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors text-center"
              >
                Search New Construction
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
                Exclusive Skye Canyon Builder Partnerships
              </h2>
              <HeadingImage
                {...sectionImages.newConstruction}
                className="w-full h-56 object-cover rounded-xl mb-10"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Direct Builder Relationships
                  </h3>
                  <p className="text-gray-600">
                    Buyer representation with Century Communities, Lennar, Toll Brothers, and other
                    active Skye Canyon builders.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Skye Canyon builder inventory
                  </h3>
                  <p className="text-gray-600">
                    Compare Eaglepointe, Marvella, and Skyecrest floor plans with Dr. Jan Duffy in
                    Las Vegas NV 89166.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Priority Access</h3>
                  <p className="text-gray-600">
                    First access to new phases, floor plans, and builder incentives before public
                    release.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Construction Oversight
                  </h3>
                  <p className="text-gray-600">
                    Professional guidance through the entire build process including inspections and
                    quality control.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="/contact"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300"
                  aria-label="Schedule consultation with Dr. Jan Duffy"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </section>
          <GbpLocalSection heading="Walk new construction from the Skye Canyon office" />
        </main>

      </div>
    </>
  );
}
