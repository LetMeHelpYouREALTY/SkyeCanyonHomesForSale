import Link from 'next/link';
import { realtorServices } from '@/data/hyperlocal/realtor-services';

interface HyperlocalRealtorServicesProps {
  title?: string;
}

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
          {realtorServices.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
              <span className="inline-block mt-4 text-blue-600 font-medium text-sm">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
