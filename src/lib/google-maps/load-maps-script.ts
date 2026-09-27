const SCRIPT_ID = 'google-maps-js-api';

let loadPromise: Promise<void> | null = null;

export function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Google Maps can only load in the browser'));
  }

  if (window.google?.maps) {
    return Promise.resolve();
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Maps script error')), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places,marker&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Maps script failed to load'));
    document.head.appendChild(script);
  });

  return loadPromise;
}
