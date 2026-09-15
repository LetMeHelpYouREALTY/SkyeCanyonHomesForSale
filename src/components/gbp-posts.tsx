import HeadingImage from '@/components/heading-image';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';

interface GbpPostCard {
  dateLabel: string;
  title: string;
  image: (typeof sectionImages)[keyof typeof sectionImages];
}

/** Headlines only — GBP post bodies go stale (prices, rates, incentives). */
const gbpPostCards: GbpPostCard[] = [
  {
    dateLabel: 'July 21, 2026',
    title: 'New-construction incentives — confirm current builder offers on live MLS',
    image: sectionImages.newConstruction,
  },
  {
    dateLabel: 'May 14, 2026',
    title: 'Skye Canyon community update on the Google Business Profile',
    image: sectionImages.guide,
  },
];

export default function GbpPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Latest Google Business Profile posts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read the current update on Google, then search live MLS or call {siteConfig.phone}.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {gbpPostCards.map((post) => (
            <a
              key={post.title}
              href={siteConfig.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <HeadingImage
                {...post.image}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.dateLabel}</p>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-realscout-blue">
                  {post.title}
                </h3>
                <p className="text-sm text-realscout-blue mt-3">Read on Google &rarr;</p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={siteConfig.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50"
          >
            Open Google Business Profile
          </a>
          <a
            href={siteConfig.realscoutOnboarding}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Search Homes
          </a>
        </div>
      </div>
    </section>
  );
}
