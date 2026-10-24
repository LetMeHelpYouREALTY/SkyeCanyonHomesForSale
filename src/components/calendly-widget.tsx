'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { calendlyUrlFor } from '@/lib/calendly';

let calendlyScriptLoaded = false;

function loadCalendlyScript() {
  if (calendlyScriptLoaded) return;
  if (document.querySelector('script[src*="calendly.com"]')) {
    calendlyScriptLoaded = true;
    return;
  }

  // Load Calendly CSS
  const link = document.createElement('link');
  link.href = 'https://assets.calendly.com/assets/external/widget.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  // Load Calendly JS
  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.head.appendChild(script);
  calendlyScriptLoaded = true;
}

/**
 * Inline Calendly embed - shows full scheduling calendar on the page.
 * Use on the Contact page to replace forms.
 */
export function CalendlyInline({ className = '' }: { className?: string }) {
  const pathname = usePathname() || '/';
  const url = calendlyUrlFor(pathname, 'inline');
  const parentRef = useRef<HTMLDivElement>(null);

  // widget.js only auto-mounts inline widgets present at first load; mount explicitly
  // so client-side navigation to the page still shows the scheduler.
  useEffect(() => {
    loadCalendlyScript();
    const parent = parentRef.current;
    if (!parent) return;
    const mount = () => {
      const w = window as any;
      if (!w.Calendly?.initInlineWidget) return false;
      parent.innerHTML = '';
      w.Calendly.initInlineWidget({ url, parentElement: parent });
      return true;
    };
    if (mount()) return;
    const interval = setInterval(() => {
      if (mount()) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, [url]);

  return (
    <div
      ref={parentRef}
      className={className}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}

/**
 * Floating popup badge widget - shows a persistent button in the corner.
 * Add once in App.tsx for site-wide availability.
 */
export function CalendlyPopupWidget() {
  const pathname = usePathname() || '/';

  // Rebuilt on each route change so the badge's event and utm_campaign match the page.
  useEffect(() => {
    loadCalendlyScript();

    const initBadge = () => {
      const w = window as any;
      if (!w.Calendly?.initBadgeWidget) return false;
      if (w.Calendly.destroyBadgeWidget) {
        w.Calendly.destroyBadgeWidget();
      } else {
        document.querySelector('.calendly-badge-widget')?.remove();
      }
      w.Calendly.initBadgeWidget({
        url: calendlyUrlFor(pathname, 'badge'),
        text: 'Schedule a Consultation',
        color: '#1e40af',
        textColor: '#ffffff',
        branding: false,
      });
      return true;
    };

    if (initBadge()) return;
    const interval = setInterval(() => {
      if (initBadge()) clearInterval(interval);
    }, 500);

    // Stop retrying after 10s
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return null; // Badge widget is injected by Calendly into the DOM
}

/**
 * Popup text button - a styled button that opens Calendly in a modal.
 * Use on homepage CTA, seller agent page, etc.
 */
export function CalendlyPopupButton({
  text = 'Schedule a Consultation',
  className = '',
}: {
  text?: string;
  className?: string;
}) {
  const pathname = usePathname() || '/';
  const handleClick = () => {
    loadCalendlyScript();
    const url = calendlyUrlFor(pathname, 'popup');
    const w = window as any;
    if (w.Calendly?.initPopupWidget) {
      w.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      {text}
    </button>
  );
}

/** Booking strip placed directly after a RealScout listings widget. */
export function CalendlyAfterListings() {
  const pathname = usePathname() || '/';
  const url = calendlyUrlFor(pathname, 'after-listings');

  return (
    <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-6 py-5 sm:flex-row">
      <p className="text-base text-gray-800">See a home you like? Pick a time with Dr. Jan Duffy.</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          const w = window as any;
          if (event.metaKey || event.ctrlKey || event.shiftKey || !w.Calendly?.initPopupWidget) return;
          event.preventDefault();
          w.Calendly.initPopupWidget({ url });
        }}
        className="inline-flex items-center justify-center rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white hover:bg-blue-900"
      >
        Schedule time with me
      </a>
    </div>
  );
}
