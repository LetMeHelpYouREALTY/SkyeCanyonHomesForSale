import Link from 'next/link';
import HeadingImage from '@/components/heading-image';
import { realtorServices } from '@/data/hyperlocal/realtor-services';
import { sectionImages } from '@/data/section-images';

interface HyperlocalRealtorServicesProps {
  title?: string;
}

const servicePhotos: Record<string, (typeof sectionImages)[keyof typeof sectionImages]> = {
  'buyer-agent': sectionImages.listings,
  'seller-agent': sectionImages.valuation,
  'new-construction': sectionImages.newConstruction,
  'luxury-properties': sectionImages.luxuryInterior,
  'first-time-buyer': sectionImages.guide,
  relocation: sectionImages.northwest,
};

export default function HyperlocalRealtorServices({
  title = 'Hyperlocal Realtor Services in Skye Canyon',
}: HyperlocalRealtorServicesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">{title}</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Buyer representation, listing strategy, and new construction guidance for Skye Canyon NV
          89166 and northwest Las Vegas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realtorServices.map((service) => {
            const photo = servicePhotos[service.slug] ?? sectionImages.office;
            return (
              <Link
                key={service.slug}
                href={service.href}
                className="block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden"
              >
                <HeadingImage
                  src={photo.src}
                  srcWebp={photo.srcWebp}
                  alt={`${service.title} in Skye Canyon Las Vegas NV 89166`}
                  className="w-full h-36 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <span className="inline-block mt-4 text-blue-600 font-medium text-sm">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}