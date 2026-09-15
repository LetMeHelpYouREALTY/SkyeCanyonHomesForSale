import RealScoutListings from '@/components/realscout-listings';
import HeadingImage from '@/components/heading-image';
import { sectionImages } from '@/data/section-images';

interface HyperlocalListingsProps {
  title?: string;
  subtitle?: string;
}

export default function HyperlocalListings({
  title = 'Current Skye Canyon MLS Listings',
  subtitle = 'Live inventory in Las Vegas NV 89166',
}: HyperlocalListingsProps) {
  const listings = sectionImages.listings;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <HeadingImage
          src={listings.src}
          srcWebp={listings.srcWebp}
          alt={listings.alt}
          className="w-full h-52 md:h-64 object-cover rounded-xl mb-8"
        />
        <RealScoutListings className="w-full" />
      </div>
    </section>
  );
}
