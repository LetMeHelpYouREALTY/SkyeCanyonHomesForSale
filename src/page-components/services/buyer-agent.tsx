'use client';

import { CalendlyPopupButton } from '@/components/calendly-widget';
import ComprehensiveSchemaMarkup from '@/components/comprehensive-schema';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import RelatedSearches from '@/components/related-searches';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

export default function BuyerAgentServices() {
  return (
    <>
      <ComprehensiveSchemaMarkup
        pageType="service"
        serviceName="buyer-agent"
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services/buyer-agent` },
          { name: 'Buyer Agent', url: `${siteConfig.url}/services/buyer-agent` },
        ]}
      />

      <div className="min-h-screen bg-gray-50">

        <main>
          <PageHero
            title="Skye Canyon Buyer Agent"
            subtitle="Buyer representation for Skye Canyon luxury, new construction, and resale in Las Vegas NV 89166."
            {...getHeroImageProps('buyer-agent')}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.realscoutOnboarding}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors text-center"
              >
                Search Homes
              </a>
              <CalendlyPopupButton
                text="Schedule a Buyer Consultation"
                className="bg-blue-600/80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 border-2 border-white/40 transition-colors cursor-pointer"
              />
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="bg-blue-600/80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 border-2 border-white/40 transition-colors"
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
                Comprehensive Skye Canyon Buyer Services
              </h2>
              <HeadingImage
                {...sectionImages.listings}
                className="w-full h-56 object-cover rounded-xl mb-10"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Market Analysis & Property Search
                  </h3>
                  <p className="text-gray-600">
                    Live MLS search plus current comps so you can compare Skye Canyon homes before
                    you tour.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Offer Strategy</h3>
                  <p className="text-gray-600">
                    Write and negotiate offers using current MLS comps in zip 89166.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Builder Relationships
                  </h3>
                  <p className="text-gray-600">
                    Buyer representation with Century Communities and other active Skye Canyon
                    builders in zip 89166.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Transaction Management
                  </h3>
                  <p className="text-gray-600">
                    Transaction support from offer to closing, including inspections, title, and
                    lender timelines.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                  aria-label="Schedule consultation with Dr. Jan Duffy"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </section>
          <GbpLocalSection heading="Meet your Skye Canyon buyer agent" />
          <RelatedSearches searchType="general" />
        </main>

      </div>
    </>
  );
}
