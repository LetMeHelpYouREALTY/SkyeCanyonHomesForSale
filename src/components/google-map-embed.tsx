import { siteConfig } from '@/config/site.config';

interface GoogleMapEmbedProps {
  title?: string;
  className?: string;
}

export default function GoogleMapEmbed({
  title = `${siteConfig.name} office map — ${siteConfig.address.formatted}`,
  className = '',
}: GoogleMapEmbedProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 shadow-sm ${className}`}>
      <iframe
        title={title}
        src={siteConfig.mapsEmbedUrl}
        width="100%"
        height="360"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block w-full"
      />
    </div>
  );
}
