import { CalendlyPopupButton } from '@/components/calendly-widget';
import PageHero from '@/components/sections/page-hero';
import { siteConfig } from '@/config/site.config';
import { getHeroImageProps } from '@/data/hero-images';

export default function HeroSection() {
  const hero = getHeroImageProps('home');

  return (
    <PageHero
      title="Skye Canyon Homes for Sale"
      subtitle="Dr. Jan Duffy, REALTOR® — luxury homes, new construction, and resale in Las Vegas NV 89166. Century Communities specialist."
      {...hero}
      minHeight="lg"
    >
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        <div className="text-center">
          <div className="text-3xl font-bold">150+</div>
          <div className="text-sm text-white/80">Homes Sold</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">15+</div>
          <div className="text-sm text-white/80">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">89166</div>
          <div className="text-sm text-white/80">Skye Canyon office</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <a
          href={siteConfig.realscoutOnboarding}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg text-center"
        >
          Search Homes for Sale
        </a>
        <a
          href="tel:+17025001902"
          className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
        >
          Call (702) 500-1902
        </a>
        <CalendlyPopupButton
          text="Book a Consultation"
          className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 border-2 border-white/60 transition-colors text-center cursor-pointer"
        />
      </div>

      <p className="text-sm text-white/70 mb-3">
        {siteConfig.brokerage} &bull; License {siteConfig.license}.LLC
      </p>
      <p className="text-sm text-white/80">
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white"
        >
          Google Maps
        </a>
        <span className="mx-2">·</span>
        <a
          href={siteConfig.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white"
        >
          Google reviews
        </a>
        <span className="mx-2">·</span>
        {siteConfig.address.formatted}
      </p>
    </PageHero>
  );
}
