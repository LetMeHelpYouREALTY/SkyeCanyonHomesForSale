'use client';

import { CalendlyPopupButton } from '@/components/calendly-widget';
import HomebotWidget from '@/components/homebot-widget';
import PageHero from '@/components/sections/page-hero';
import { getHeroImage } from '@/data/hero-images';

export default function SellerAgentServices() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">

      <PageHero
        title="Skye Canyon Seller's Agent Expert"
        subtitle="Professional listing and marketing services with proven results in the Skye Canyon market."
        image={getHeroImage('seller-agent').src}
        imageAlt={getHeroImage('seller-agent').alt}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CalendlyPopupButton
            text="Schedule a Listing Consultation"
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors"
          />
          <a
            href="tel:+17025001902"
            className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 border-2 border-white/40 transition-colors"
          >
            Call (702) 500-1902
          </a>
        </div>
      </PageHero>

        {/* Home Valuation Widget */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Know Your Home's Value Before You List
              </h2>
              <p className="text-lg text-gray-600">
                Get an instant, data-driven valuation for your Skye Canyon property. Understanding your home's market value is the first step to a successful sale.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <HomebotWidget id="homebot_seller" className="w-full min-h-[200px]" />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Powered by Homebot &bull; Updated with real Skye Canyon market data
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
