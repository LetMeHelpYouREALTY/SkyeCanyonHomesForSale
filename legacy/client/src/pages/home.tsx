import { Helmet } from 'react-helmet-async';
import AgentBio from '@/components/agent-bio';
import { CalendlyPopupButton } from '@/components/calendly-widget';
import CallToAction from '@/components/call-to-action';
import ComprehensiveSchemaMarkup from '@/components/comprehensive-schema';
import FAQSection from '@/components/faq-section';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import HomebotWidget from '@/components/homebot-widget';
import RealScoutListings from '@/components/realscout-listings';
import ReviewHighlights from '@/components/review-highlights';
import GoogleBusinessReview from '@/components/google-business-review';
import ServicesOverview from '@/components/services-overview';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dr. Jan Duffy REALTOR® | Skye Canyon Real Estate Expert Las Vegas NV 89166</title>
        <meta
          name="description"
          content="Expert Skye Canyon real estate agent Dr. Jan Duffy specializes in luxury homes, new construction & golf course properties in Las Vegas NV 89166. Call (702) 500-1902!"
        />
        <meta
          name="keywords"
          content="Skye Canyon homes for sale, Las Vegas NV 89166, luxury real estate, Dr. Jan Duffy REALTOR, golf course homes, guard gated community, new construction, Desert Highlands Golf Course"
        />
        <meta name="geo.region" content="US-NV" />
        <meta name="geo.placename" content="Las Vegas" />
        <meta name="geo.position" content="36.2648;-115.3275" />
        <meta name="ICBM" content="36.2648, -115.3275" />
        <meta name="geo.locality" content="Skye Canyon" />
        <meta name="geo.zipcode" content="89166" />
        <meta name="business.phone" content="(702) 500-1902" />
        <meta name="business.address" content="10111 W Skye Canyon Park Dr, Las Vegas, NV 89166" />
        <meta name="business.hours" content="Mo-Fr 09:00-18:00, Sa 09:00-17:00, Su 11:00-16:00" />
        <meta property="og:title" content="Dr. Jan Duffy REALTOR® | Skye Canyon Real Estate Expert Las Vegas NV 89166" />
        <meta property="og:description" content="Expert Skye Canyon real estate agent Dr. Jan Duffy specializes in luxury homes, new construction & golf course properties in Las Vegas NV 89166." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skyecanyonhomesforsale.com" />
        <meta property="og:image" content="https://skyecanyonhomesforsale.com/dr-jan-duffy-headshot.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Skye Canyon Homes for Sale" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Jan Duffy REALTOR® | Skye Canyon Real Estate Expert Las Vegas NV 89166" />
        <meta name="twitter:description" content="Expert Skye Canyon real estate agent specializing in luxury homes, new construction & golf course properties. Call (702) 500-1902!" />
        <meta name="twitter:image" content="https://skyecanyonhomesforsale.com/dr-jan-duffy-headshot.jpg" />
        <link rel="canonical" href="https://skyecanyonhomesforsale.com" />
        <meta name="author" content="Dr. Jan Duffy" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>

      {/* Schema Markup (invisible, SEO only) */}
      <ComprehensiveSchemaMarkup
        pageType="homepage"
        breadcrumbs={[{ name: 'Home', url: 'https://skyecanyonhomesforsale.com' }]}
        reviews={[
          { author: 'Sarah Mitchell', rating: 5, reviewBody: 'Dr. Jan Duffy made our Skye Canyon home purchase seamless. Her knowledge of the community and market expertise helped us find our perfect luxury home.', datePublished: '2024-11-15' },
          { author: 'Michael Rodriguez', rating: 5, reviewBody: 'Outstanding service from Dr. Duffy! She guided us through our first-time home purchase in Skye Canyon with professionalism and patience.', datePublished: '2024-10-22' },
          { author: 'Jennifer Chen', rating: 5, reviewBody: "Sold our Skye Canyon home in just 8 days! Dr. Duffy's marketing strategy and local connections delivered exceptional results.", datePublished: '2024-12-03' },
          { author: 'David Thompson', rating: 5, reviewBody: "Dr. Duffy's expertise in luxury Skye Canyon properties is unmatched. She helped us navigate the competitive market and secure our dream home.", datePublished: '2024-09-18' },
          { author: 'Lisa Anderson', rating: 5, reviewBody: 'Professional, knowledgeable, and responsive. Dr. Duffy made our new construction purchase stress-free with her builder relationships.', datePublished: '2024-11-28' },
        ]}
      />
      {/* Single consolidated schema - no duplicates */}

      <div className="min-h-screen bg-white">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Live MLS Listings */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Skye Canyon MLS Listings
              </h2>
              <p className="text-xl text-gray-600">Live inventory of available homes in Las Vegas NV 89166</p>
            </div>
            <RealScoutListings className="w-full" />
          </div>
        </section>

        {/* 3. Market Stats */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Skye Canyon Real Estate Market
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">$1.2M</div>
                <div className="text-gray-600">Median Home Price</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">28</div>
                <div className="text-gray-600">Days on Market</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
                <div className="text-gray-600">Price to List Ratio</div>
              </div>
            </div>
            <a href="/market-analysis" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View Complete Market Analysis &rarr;
            </a>
          </div>
        </section>

        {/* 4. Home Valuation Widget */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's Your Skye Canyon Home Worth?
              </h2>
              <p className="text-lg text-gray-600">
                Get an instant, AI-powered home valuation for your Skye Canyon property. Updated monthly with real market data.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <HomebotWidget id="homebot_homeowner" className="w-full min-h-[200px]" />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Powered by Homebot &bull; Trusted by top agents nationwide
            </p>
          </div>
        </section>

        {/* 5. Services */}
        <ServicesOverview />

        {/* 5. Explore Skye Canyon */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Skye Canyon</h2>
              <p className="text-lg text-gray-600">Discover what makes Skye Canyon one of the most sought-after communities in Northwest Las Vegas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/skye-canyon-guide" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Neighborhood Guide</h3>
                <p className="text-gray-600 text-sm mb-3">Restaurants, schools, parks & amenities with maps and drive times.</p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-800">Explore &rarr;</span>
              </a>
              <a href="/market-analysis" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Market Analytics</h3>
                <p className="text-gray-600 text-sm mb-3">Price trends, heatmaps & real-time data for Skye Canyon.</p>
                <span className="text-emerald-600 font-medium text-sm group-hover:text-emerald-800">View Data &rarr;</span>
              </a>
              <a href="/skye-canyon-schools" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Schools & Education</h3>
                <p className="text-gray-600 text-sm mb-3">Top-rated Clark County schools and district information.</p>
                <span className="text-amber-600 font-medium text-sm group-hover:text-amber-800">View Schools &rarr;</span>
              </a>
              <a href="/skye-canyon-communities" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 p-6">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Communities & Builders</h3>
                <p className="text-gray-600 text-sm mb-3">Toll Brothers, Lennar, DR Horton and sub-community details.</p>
                <span className="text-rose-600 font-medium text-sm group-hover:text-rose-800">Explore &rarr;</span>
              </a>
              <a href="/skye-canyon-parks" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Parks & Recreation</h3>
                <p className="text-gray-600 text-sm mb-3">Golf, trails, pools, Skye Canyon Park and outdoor amenities.</p>
                <span className="text-teal-600 font-medium text-sm group-hover:text-teal-800">See Amenities &rarr;</span>
              </a>
              <a href="/northwest-las-vegas" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Northwest Las Vegas</h3>
                <p className="text-gray-600 text-sm mb-3">Centennial Hills, Providence & surrounding NW communities.</p>
                <span className="text-indigo-600 font-medium text-sm group-hover:text-indigo-800">Explore Area &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* 6. Reviews */}
        <ReviewHighlights />
        <GoogleBusinessReview />

        {/* 7. FAQ */}
        <FAQSection
          title="Frequently Asked Questions About Skye Canyon"
          pageType="skye-canyon"
          faqs={[
            { question: 'What are the home prices in Skye Canyon?', answer: 'Skye Canyon home prices typically range from $650,000 to $1.2M+, with luxury custom homes reaching higher price points. The guard-gated community offers exceptional value for the premium amenities and location.' },
            { question: 'Is Skye Canyon a guard-gated community?', answer: "Yes, Skye Canyon is a prestigious 24/7 guard-gated community with controlled access and roving security patrols, ensuring residents' safety and privacy." },
            { question: 'What amenities are available in Skye Canyon?', answer: 'Skye Canyon features the Desert Highlands Golf Course, community recreation center, fitness facilities, swimming pools, tennis courts, walking trails, and exclusive clubhouse amenities.' },
            { question: 'What schools serve the Skye Canyon area?', answer: 'Skye Canyon is served by highly-rated schools in the Clark County School District, including top-performing elementary, middle, and high schools in the northwest Las Vegas area.' },
            { question: 'Are there new construction homes available?', answer: 'Yes, Skye Canyon offers both resale homes and new construction. Dr. Jan Duffy can help you explore all available options including quick move-in homes and custom builds from Toll Brothers, Lennar, and DR Horton.' },
          ]}
        />

        {/* 8. CTA */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Skye Canyon Home?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy for expert guidance on buying or selling in Skye Canyon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg text-center">
                Search Available Homes
              </a>
              <CalendlyPopupButton
                text="Schedule a Consultation"
                className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400 transition-colors shadow-lg text-center"
              />
              <a href="tel:+17025001902" className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 border-2 border-blue-400 transition-colors shadow-lg text-center">
                Call (702) 500-1902
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              10111 W Skye Canyon Park Dr, Las Vegas, NV 89166 &bull; Berkshire Hathaway HomeServices
            </p>
          </div>
        </section>

        {/* 9. Agent Bio + Footer */}
        <AgentBio />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}
