import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { CalendlyPopupWidget } from '@/components/calendly-widget';
import GbpPresenceBar from '@/components/gbp-presence-bar';
import JsonLd from '@/components/json-ld';
import { buildLocalBusinessJsonLd } from '@/lib/local-business-jsonld';

export const dynamic = 'force-dynamic';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <GbpPresenceBar />
      <Navigation />
      <main>{children}</main>
      <Footer />
      <CalendlyPopupWidget />
    </>
  );
}
