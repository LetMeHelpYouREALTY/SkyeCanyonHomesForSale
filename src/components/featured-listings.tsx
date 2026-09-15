import HeadingImage from '@/components/heading-image';
import RealScoutListings from '@/components/realscout-listings';
import { sectionImages } from '@/data/section-images';

export default function FeaturedListings() {
  return (
    <section id="featured" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Skye Canyon Properties
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Current MLS listings in Skye Canyon, Las Vegas NV 89166
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="bg-gray-100 px-3 py-1 rounded-full">Toll Brothers Homes</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Lennar Communities</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Custom Builds</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Luxury Resales</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Live MLS feed for Skye Canyon 89166
            </h3>
            <p className="text-gray-600 text-sm">
              Real-time updates from MLS • Skye Canyon, Centennial Hills & Northwest Las Vegas
            </p>
          </div>
        </div>

        <HeadingImage
          {...sectionImages.listings}
          className="w-full h-56 md:h-72 object-cover rounded-xl mb-8"
        />
        <RealScoutListings className="w-full shadow-lg rounded-xl" />

        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Live MLS Data
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Professional Photos
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Virtual Tours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
