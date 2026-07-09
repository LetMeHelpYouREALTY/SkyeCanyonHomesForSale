import Link from 'next/link';

interface InternalLink {
  href: string;
  title: string;
  description: string;
}

interface HyperlocalInternalLinksProps {
  title: string;
  links: InternalLink[];
}

export default function HyperlocalInternalLinks({ title, links }: HyperlocalInternalLinksProps) {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-1">{link.title}</h3>
              <p className="text-sm text-gray-600">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
