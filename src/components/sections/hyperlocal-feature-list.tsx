import HeadingImage from '@/components/heading-image';
import { sectionImages, type SectionImage } from '@/data/section-images';

interface HyperlocalFeatureListProps {
  title: string;
  items: string[];
  highlights?: string[];
  image?: SectionImage;
}

function imageForTitle(title: string): SectionImage {
  const heading = title.toLowerCase();
  if (heading.includes('amenit') || heading.includes('park')) {
    return sectionImages.clubhouse;
  }
  if (heading.includes('feature') || heading.includes('home')) {
    return sectionImages.newConstruction;
  }
  return sectionImages.monument;
}

export default function HyperlocalFeatureList({
  title,
  items,
  highlights = [],
  image,
}: HyperlocalFeatureListProps) {
  const photo = image ?? imageForTitle(title);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <HeadingImage
          src={photo.src}
          srcWebp={photo.srcWebp}
          alt={photo.alt}
          className="w-full h-48 md:h-56 object-cover rounded-xl mb-8"
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-600 mt-1">✓</span>
              {item}
            </li>
          ))}
        </ul>
        {highlights.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {highlights.map((h) => (
              <span
                key={h}
                className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm font-medium"
              >
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
