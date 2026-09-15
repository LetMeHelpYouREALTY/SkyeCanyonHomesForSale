import { MapPin, Navigation, Phone, Search } from 'lucide-react';
import HeadingImage from '@/components/heading-image';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

export default function MarketStats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skye Canyon Market Insights
          </h2>
          <p className="text-xl text-gray-600">
            Prices move monthly. Pull live MLS comps with Dr. Jan Duffy in Las Vegas NV 89166.
          </p>
        </div>
        <HeadingImage
          {...sectionImages.market}
          className="w-full h-56 md:h-72 object-cover rounded-xl mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-blue-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-realscout-blue mb-2">{siteConfig.address.zip}</div>
            <div className="text-gray-600 text-sm mb-1">Skye Canyon zip</div>
            <div className="text-gray-500 text-xs">Northwest Las Vegas master plan</div>
          </div>

          <a
            href={siteConfig.realscoutOnboarding}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-green-50 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <Search className="w-8 h-8 text-realscout-blue mx-auto mb-2" aria-hidden="true" />
            <div className="text-gray-900 font-semibold mb-1">Search Homes</div>
            <div className="text-gray-500 text-xs">Current list prices and inventory</div>
          </a>

          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="text-center bg-purple-50 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <Phone className="w-8 h-8 text-realscout-blue mx-auto mb-2" aria-hidden="true" />
            <div className="text-gray-900 font-semibold mb-1">Call for comps</div>
            <div className="text-gray-500 text-xs">{siteConfig.phone}</div>
          </a>

          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-orange-50 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <Navigation className="w-8 h-8 text-realscout-blue mx-auto mb-2" aria-hidden="true" />
            <div className="text-gray-900 font-semibold mb-1">Google Maps</div>
            <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3" aria-hidden="true" />
              {siteConfig.address.street}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
