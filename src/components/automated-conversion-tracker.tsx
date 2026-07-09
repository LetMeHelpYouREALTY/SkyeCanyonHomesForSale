'use client';

import { useEffect } from 'react';

interface AutomatedConversionTrackerProps {
  onConversionEvent?: (eventType: string, data: unknown) => void;
}

export default function AutomatedConversionTracker({
  onConversionEvent,
}: AutomatedConversionTrackerProps) {
  useEffect(() => {
    const createRealScoutConversionPopup = (lastQuery: string) => {
      const existingPopup = document.getElementById('realscout-conversion-popup');
      if (existingPopup) {
        existingPopup.remove();
      }

      const overlay = document.createElement('div');
      overlay.id = 'realscout-conversion-popup';
      overlay.style.cssText =
        'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:10000;display:flex;align-items:center;justify-content:center;';

      const popup = document.createElement('div');
      popup.style.cssText =
        'background:white;padding:2.5rem;border-radius:1rem;max-width:550px;width:90%;text-align:center;';
      popup.innerHTML = `
        <h3 style="font-size:1.75rem;font-weight:bold;margin-bottom:1rem;">Continue Your Property Search</h3>
        <p style="color:#6b7280;margin-bottom:1.5rem;">Search all Skye Canyon MLS listings with Dr. Jan Duffy.</p>
        ${lastQuery ? `<p style="margin-bottom:1rem;">Last search: <strong>${lastQuery}</strong></p>` : ''}
        <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer" style="background:#2563eb;color:white;padding:1rem 2rem;border-radius:0.75rem;text-decoration:none;font-weight:700;">Search All Properties</a>
      `;

      overlay.appendChild(popup);
      document.body.appendChild(overlay);
    };

    const handleVoiceSearchLimit = (event: Event) => {
      const customEvent = event as CustomEvent<{ searchCount: number; query: string }>;
      const { searchCount, query } = customEvent.detail;

      if (window.gtag) {
        window.gtag('event', 'voice_search_limit_reached', {
          event_category: 'conversion',
          event_label: 'realscout_popup_triggered',
          value: searchCount,
        });
      }

      setTimeout(() => {
        createRealScoutConversionPopup(query);
      }, 1500);

      onConversionEvent?.('voice_search_limit', { searchCount, query });
    };

    window.addEventListener('voiceSearchLimitReached', handleVoiceSearchLimit);

    return () => {
      window.removeEventListener('voiceSearchLimitReached', handleVoiceSearchLimit);
    };
  }, [onConversionEvent]);

  return null;
}
