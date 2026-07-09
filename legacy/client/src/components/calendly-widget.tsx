import { useEffect, useRef } from 'react';

const CALENDLY_URL = 'https://calendly.com/drjanduffy';

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
  useEffect(() => {
    loadCalendlyScript();
  }, []);

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}

/**
 * Floating popup badge widget - shows a persistent button in the corner.
 * Add once in App.tsx for site-wide availability.
 */
export function CalendlyPopupWidget() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    loadCalendlyScript();

    // Wait for script to load, then initialize badge widget
    const initBadge = () => {
      const w = window as any;
      if (w.Calendly?.initBadgeWidget) {
        w.Calendly.initBadgeWidget({
          url: CALENDLY_URL,
          text: 'Schedule a Consultation',
          color: '#1e40af',
          textColor: '#ffffff',
          branding: false,
        });
        initialized.current = true;
      }
    };

    // Try immediately, then retry after script loads
    initBadge();
    const interval = setInterval(() => {
      const w = window as any;
      if (w.Calendly?.initBadgeWidget) {
        initBadge();
        clearInterval(interval);
      }
    }, 500);

    // Cleanup after 10s max
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

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
  const handleClick = () => {
    loadCalendlyScript();
    const w = window as any;
    if (w.Calendly?.initPopupWidget) {
      w.Calendly.initPopupWidget({ url: CALENDLY_URL });
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
