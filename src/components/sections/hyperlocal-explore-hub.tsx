import Link from 'next/link';
import { subdivisions } from '@/data/hyperlocal/subdivisions';
import { parks } from '@/data/hyperlocal/parks';
import { zipAreas } from '@/data/hyperlocal/zip-areas';
import { builders } from '@/data/hyperlocal/builders';
import { nearbyAreas } from '@/data/hyperlocal/areas';

const hubLinks = [
  ...zipAreas.map((z) => ({
    href: `/${z.zip}-homes-for-sale`,
    title: `${z.zip} Homes`,
    description: z.name,
    category: 'Zip Codes',
  })),
  ...subdivisions.map((s) => ({
    href: `/skye-canyon/${s.slug}`,
    title: s.name,
    description: `${s.builder} — ${s.priceRange}`,
    category: 'Communities',
  })),
  ...parks.slice(0, 3).map((p) => ({
    href: `/skye-canyon-parks/${p.slug}`,
    title: p.name,
    description: p.size ? `${p.size} park` : 'Skye Canyon park',
    category: 'Parks',
  })),
  ...builders.slice(0, 2).map((b) => ({
    href: `/builders/${b.slug}`,
    title: b.name,
    description: b.priceRange,
    category: 'Builders',
  })),
  ...nearbyAreas.map((a) => ({
    href: `/${a.slug}-homes-for-sale`,
    title: a.name,
    description: 'Nearby northwest Las Vegas',
    category: 'Areas',
  })),
];

export default function HyperlocalExploreHub() {
  return (
    <section className="py-16 bg-gray-50" id="hyperlocal-guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skye Canyon Hyperlocal Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neighborhood pages, zip codes, subdivisions, parks, and builder guides for Las Vegas NV
            89166 — built for search, maps, and AI answers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hubLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-5 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                {link.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-blue-700">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/skye-canyon-guide"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Full Skye Canyon community guide &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
