import { useEffect, useRef } from 'react';

interface HomebotWidgetProps {
  id: string;
  className?: string;
}

const HOMEBOT_AGENT_ID = '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43';
let homebotScriptLoaded = false;

function loadHomebotScript() {
  if (homebotScriptLoaded) return;
  if (document.querySelector('script[src*="homebotapp.com"]')) {
    homebotScriptLoaded = true;
    return;
  }

  const w = window as any;
  w['__hb_namespace'] = 'Homebot';
  w['Homebot'] = w['Homebot'] || function (...args: any[]) {
    (w['Homebot'].q = w['Homebot'].q || []).push(args);
  };

  const script = document.createElement('script');
  script.src = 'https://embed.homebotapp.com/lgw/v1/widget.js';
  script.async = true;
  document.head.appendChild(script);
  homebotScriptLoaded = true;
}

export default function HomebotWidget({ id, className = '' }: HomebotWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadHomebotScript();

    // Initialize this specific widget instance
    const w = window as any;
    if (w.Homebot) {
      w.Homebot(`#${id}`, HOMEBOT_AGENT_ID);
    }
  }, [id]);

  return <div id={id} ref={containerRef} className={className} />;
}
