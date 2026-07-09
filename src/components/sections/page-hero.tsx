import type { ReactNode } from 'react';

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  imageMobile?: string;
  badges?: string[];
  minHeight?: 'sm' | 'md' | 'lg';
  align?: 'center' | 'left';
  children?: ReactNode;
}

const heightClasses = {
  sm: 'min-h-[320px] py-16',
  md: 'min-h-[420px] py-20',
  lg: 'min-h-[550px] py-24',
};

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  imageMobile,
  badges = [],
  minHeight = 'md',
  align = 'center',
  children,
}: PageHeroProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <section
      className={`relative overflow-hidden text-white flex items-center ${heightClasses[minHeight]}`}
      role="banner"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <picture className="absolute inset-0 block h-full w-full">
          {imageMobile && (
            <source media="(max-width: 768px)" srcSet={imageMobile} type="image/jpeg" />
          )}
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
      </div>

      <div
        className={`relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 ${alignClass}`}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-sm">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl leading-relaxed drop-shadow-sm">
            {subtitle}
          </p>
        )}
        {badges.length > 0 && (
          <div
            className={`flex flex-wrap gap-2 mb-6 ${align === 'center' ? 'justify-center' : ''}`}
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/15 backdrop-blur-sm border border-white/25 text-white"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
