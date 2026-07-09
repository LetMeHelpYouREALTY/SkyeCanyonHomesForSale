import { CalendlyPopupButton } from '@/components/calendly-widget';

export default function HeroSection() {
  return (
    <section
      id="search"
      className="relative text-white py-20 min-h-[550px] flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75&fm=webp"
            type="image/webp"
          />
          <source
            srcSet="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85&fm=webp"
            type="image/webp"
          />
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Luxury homes in Skye Canyon Las Vegas NV 89166"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Skye Canyon Homes for Sale<br />
          <span className="text-blue-300">Las Vegas NV 89166</span>
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Dr. Jan Duffy, REALTOR® specializing in luxury homes, new construction
          & Desert Highlands Golf Course properties. Toll Brothers, Lennar & DR Horton builder partnerships.
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="text-center">
            <div className="text-3xl font-bold">150+</div>
            <div className="text-sm opacity-80">Homes Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm opacity-80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">98%</div>
            <div className="text-sm opacity-80">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="https://drjanduffy.realscout.com/onboarding"
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

        <p className="text-sm text-white/70">
          Berkshire Hathaway HomeServices Nevada Properties &bull; License S.0197614.LLC
        </p>
      </div>
    </section>
  );
}
