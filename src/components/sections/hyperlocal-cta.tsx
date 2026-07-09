import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { CalendlyPopupButton } from '@/components/calendly-widget';

interface HyperlocalCtaProps {
  title?: string;
  subtitle?: string;
}

export default function HyperlocalCta({
  title = 'Work with a Skye Canyon Hyperlocal Expert',
  subtitle = 'Dr. Jan Duffy specializes in Skye Canyon, zip 89166, and northwest Las Vegas real estate.',
}: HyperlocalCtaProps) {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-blue-100 mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.realscoutOnboarding}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Search MLS Listings
          </a>
          <CalendlyPopupButton
            text="Schedule Consultation"
            className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 transition-colors"
          />
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold border-2 border-blue-400 hover:bg-blue-400 transition-colors"
          >
            Call {siteConfig.phone}
          </a>
        </div>
        <p className="text-sm text-blue-200 mt-4">{siteConfig.address.formatted}</p>
      </div>
    </section>
  );
}
