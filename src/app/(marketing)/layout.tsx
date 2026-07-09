import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { CalendlyPopupWidget } from '@/components/calendly-widget';

export const dynamic = 'force-dynamic';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <CalendlyPopupWidget />
    </>
  );
}
