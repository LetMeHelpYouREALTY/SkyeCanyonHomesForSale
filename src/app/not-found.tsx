import Footer from '@/components/footer';
import GbpPresenceBar from '@/components/gbp-presence-bar';
import JsonLd from '@/components/json-ld';
import Navigation from '@/components/navigation';
import NotFoundPage from '@/page-components/not-found';
import { buildLocalBusinessJsonLd } from '@/lib/local-business-jsonld';

export default function NotFound() {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <GbpPresenceBar />
      <Navigation />
      <NotFoundPage />
      <Footer />
    </>
  );
}
