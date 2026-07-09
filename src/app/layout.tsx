import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Providers from '@/components/providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Dr. Jan Duffy REALTOR® | Skye Canyon Real Estate Expert Las Vegas NV 89166',
    template: '%s | Dr. Jan Duffy REALTOR®',
  },
  description:
    'Expert Skye Canyon real estate agent Dr. Jan Duffy specializes in luxury homes, new construction & golf course properties in Las Vegas NV 89166. Call (702) 500-1902!',
  metadataBase: new URL('https://www.skyecanyonhomesforsale.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dr. Jan Duffy REALTOR® | Skye Canyon Real Estate Expert Las Vegas NV 89166',
    description:
      'Expert Skye Canyon real estate agent specializing in luxury homes in Las Vegas NV 89166.',
    url: 'https://www.skyecanyonhomesforsale.com',
    siteName: 'Skye Canyon Homes for Sale',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
