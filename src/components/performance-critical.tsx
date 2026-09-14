'use client';

import { useEffect } from 'react';

// Critical performance optimizations for real estate website
export default function PerformanceCritical() {
  useEffect(() => {
    // Preload critical resources with optimization
    const preloadCriticalResources = () => {
      // Preload WebP hero image with JPEG fallback
      const heroImageLinkWebP = document.createElement('link');
      heroImageLinkWebP.rel = 'preload';
      heroImageLinkWebP.as = 'image';
      heroImageLinkWebP.href = '/images/heroes/home.webp';
      heroImageLinkWebP.type = 'image/webp';
      document.head.appendChild(heroImageLinkWebP);

      const officeImageLink = document.createElement('link');
      officeImageLink.rel = 'preload';
      officeImageLink.as = 'image';
      officeImageLink.href = '/images/sections/office-exterior.jpg';
      document.head.appendChild(officeImageLink);

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.href =
        'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Optimize images after page load
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[src]');
      images.forEach((img: Element) => {
        const imgElement = img as HTMLImageElement;

        // Add decoding optimization
        if (!imgElement.hasAttribute('decoding')) {
          imgElement.decoding = 'async';
        }

        // Add loading optimization for images below fold
        if (!imgElement.hasAttribute('loading')) {
          const rect = imgElement.getBoundingClientRect();
          if (rect.top > window.innerHeight) {
            imgElement.loading = 'lazy';
          }
        }
      });
    };

    // Run optimizations
    preloadCriticalResources();

    // Defer image optimization to after initial render
    setTimeout(optimizeImages, 100);

    // Re-optimize when new images are added
    const observer = new MutationObserver(optimizeImages);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
}
