import { siteConfig } from '@/config/site.config';

interface HeroSearchCtasProps {
  searchLabel?: string;
}

export default function HeroSearchCtas({
  searchLabel = 'Search Homes',
}: HeroSearchCtasProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={siteConfig.realscoutOnboarding}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors text-center"
      >
        {searchLabel}
      </a>
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="inline-block bg-blue-600/80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 border-2 border-white/40 transition-colors text-center"
        aria-label={`Call Dr. Jan Duffy at ${siteConfig.phone}`}
      >
        Call {siteConfig.phone}
      </a>
    </div>
  );
}
