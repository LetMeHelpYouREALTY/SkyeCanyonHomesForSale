'use client';

import VoiceSearchIntegration from '@/components/voice-search-integration';
import PageHero from '@/components/sections/page-hero';
import { getHeroImageProps } from '@/data/hero-images';
import GbpLocalSection from '@/components/gbp-local-section';
import HeadingImage from '@/components/heading-image';
import HeroSearchCtas from '@/components/hero-search-ctas';
import RelatedSearches from '@/components/related-searches';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

export default function VoiceSearchPage() {
  return (
    <>
      <PageHero
        title="Search Skye Canyon Homes by Voice"
        subtitle="Speak a Skye Canyon search, then continue on live MLS with Dr. Jan Duffy in Las Vegas NV 89166. Call (702) 500-1902."
        {...getHeroImageProps('voice-search')}
        minHeight="md"
      >
        <HeroSearchCtas />
      </PageHero>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">

          <div className="mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-blue-900 mb-3">
                Try These Voice Commands:
              </h2>
              <HeadingImage
                {...sectionImages.listings}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="grid md:grid-cols-2 gap-4 text-blue-800">
                <div>
                  <ul className="space-y-2">
                    <li>• "Show me luxury homes in Skye Canyon under $2 million"</li>
                    <li>• "Find 4-bedroom houses with a pool"</li>
                    <li>• "What properties are available in Northwest Las Vegas?"</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>• "Properties with mountain views under $1.5M"</li>
                    <li>• "New construction homes in guard-gated communities"</li>
                    <li>• "Tell me about the Skye Canyon real estate market"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <VoiceSearchIntegration maxSearches={3} onSearchLimitReached={() => {}} />

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
              <HeadingImage
                {...sectionImages.voiceSearch}
                className="w-full h-48 object-cover rounded-xl mb-8"
              />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Speak Naturally</h3>
                  <p className="text-gray-600 text-sm">
                    Use everyday words for Skye Canyon homes in Las Vegas NV 89166.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Open live MLS</h3>
                  <p className="text-gray-600 text-sm">
                    Voice search opens the same RealScout MLS onboarding buyers use on every page.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-lg">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tour with Dr. Duffy</h3>
                  <p className="text-gray-600 text-sm">
                    Call {siteConfig.phone} or search live MLS to tour matching Skye Canyon homes.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a
                  href={siteConfig.realscoutOnboarding}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Search Homes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GbpLocalSection heading="Voice-search Skye Canyon homes with a local agent" />
      <RelatedSearches searchType="general" />

    </>
  );
}
