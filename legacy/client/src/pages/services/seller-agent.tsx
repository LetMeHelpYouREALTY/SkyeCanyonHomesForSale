import { Helmet } from 'react-helmet-async';
import { CalendlyPopupButton } from '@/components/calendly-widget';
import Footer from '@/components/footer';
import HomebotWidget from '@/components/homebot-widget';

export default function SellerAgentServices() {
  return (
    <>
      <Helmet>
        <title>Expert Seller Agent Services - Skye Canyon Homes | Dr. Jan Duffy REALTOR®</title>
        <meta
          name="description"
          content="Premier Skye Canyon seller agent with 15+ years exclusive community expertise. Professional listing, marketing, and negotiation services. Call (702) 500-1902."
        />
        <meta
          name="keywords"
          content="Skye Canyon seller agent, Las Vegas listing agent, luxury home marketing, real estate sales expert, 89166 realtor"
        />
        <link rel="canonical" href="https://skyecanyonhomesforsale.com/services/seller-agent" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">

      <section className="py-12 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skye Canyon Homes Seller's Agent Expert
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Professional listing and marketing services with proven results in the competitive
              Skye Canyon market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyPopupButton
                text="Schedule a Listing Consultation"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors"
              />
              <a
                href="tel:+17025001902"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 border-2 border-green-400 transition-colors"
              >
                Call (702) 500-1902
              </a>
            </div>
          </div>
        </div>
      </section>

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

        <Footer />
      </div>
    </>
  );
}
