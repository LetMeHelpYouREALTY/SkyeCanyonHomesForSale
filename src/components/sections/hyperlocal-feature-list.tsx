interface HyperlocalFeatureListProps {
  title: string;
  items: string[];
  highlights?: string[];
}

export default function HyperlocalFeatureList({
  title,
  items,
  highlights = [],
}: HyperlocalFeatureListProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
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
