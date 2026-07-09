#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const routes = [
  { path: '', page: 'home', title: 'Skye Canyon Real Estate Expert | Dr. Jan Duffy REALTOR®' },
  { path: 'about', page: 'about', title: 'About Dr. Jan Duffy | Skye Canyon Real Estate Expert' },
  { path: 'contact', page: 'contact', title: 'Contact Dr. Jan Duffy | Skye Canyon REALTOR®' },
  { path: 'properties', page: 'properties', title: 'Skye Canyon Homes for Sale | Las Vegas NV 89166' },
  { path: 'property/[id]', page: 'property-detail', title: 'Property Details | Skye Canyon Las Vegas' },
  { path: 'las-vegas', page: 'las-vegas-real-estate', title: 'Las Vegas Real Estate | Dr. Jan Duffy' },
  { path: 'las-vegas-real-estate', page: 'las-vegas-real-estate', title: 'Las Vegas Real Estate | Dr. Jan Duffy' },
  { path: 'luxury-homes-las-vegas', page: 'luxury-homes-las-vegas', title: 'Luxury Homes Las Vegas | Skye Canyon' },
  { path: 'market-analysis', page: 'market-analysis', title: 'Skye Canyon Market Analysis | Las Vegas NV' },
  { path: 'neighborhood-analysis', page: 'neighborhood-analysis', title: 'Neighborhood Analysis | Skye Canyon' },
  { path: 'privacy-policy', page: 'privacy-policy', title: 'Privacy Policy' },
  { path: 'terms-of-service', page: 'terms-of-service', title: 'Terms of Service' },
  { path: 'voice-search', page: 'voice-search', title: 'Voice Property Search | Skye Canyon' },
  { path: 'skye-canyon-guide', page: 'skye-canyon-guide', title: 'Skye Canyon Guide | Las Vegas NV 89166' },
  { path: 'skye-canyon-communities', page: 'skye-canyon-communities', title: 'Skye Canyon Communities' },
  { path: 'skye-canyon-parks', page: 'skye-canyon-parks', title: 'Skye Canyon Parks & Recreation' },
  { path: 'skye-canyon-schools', page: 'skye-canyon-schools', title: 'Skye Canyon Schools | Las Vegas NV' },
  { path: 'northwest-las-vegas', page: 'northwest-las-vegas', title: 'Northwest Las Vegas Real Estate' },
  { path: 'search', page: 'search', title: 'Property Search | Skye Canyon Las Vegas' },
  { path: 'search/[query]', page: 'search', title: 'Property Search Results' },
  { path: 'services/buyer-agent', page: 'services/buyer-agent', title: 'Buyer Agent Services | Skye Canyon' },
  { path: 'services/seller-agent', page: 'services/seller-agent', title: 'Seller Agent Services | Skye Canyon' },
  { path: 'services/first-time-buyer', page: 'services/first-time-buyer', title: 'First-Time Buyer | Skye Canyon' },
  { path: 'services/luxury-properties', page: 'services/luxury-properties', title: 'Luxury Properties | Skye Canyon' },
  { path: 'services/new-construction', page: 'services/new-construction', title: 'New Construction | Skye Canyon' },
  { path: 'services/relocation', page: 'services/relocation', title: 'Relocation Services | Las Vegas' },
  { path: 'performance-dashboard', page: 'performance-dashboard', title: 'Performance Dashboard' },
  { path: 'lead-dashboard', page: 'lead-dashboard', title: 'Lead Dashboard' },
  { path: 'followup-boss-status', page: 'followup-boss-status', title: 'Follow Up Boss Status' },
  { path: 'seo-management', page: 'seo-management', title: 'SEO Management' },
  { path: 'home-simple', page: 'home-simple', title: 'Skye Canyon Homes' },
  { path: 'demo/maps', page: 'components/static-maps-demo', title: 'Maps Demo', componentPath: '@/components/static-maps-demo' },
];

const appDir = path.join(process.cwd(), 'src/app/(marketing)');

// Remove old placeholder pages
if (fs.existsSync(path.join(appDir, 'about'))) {
  // keep structure
}

for (const route of routes) {
  const dir = route.path ? path.join(appDir, route.path) : appDir;
  fs.mkdirSync(dir, { recursive: true });

  const importPath = route.componentPath ?? `@/page-components/${route.page}`;
  const componentName = route.page.split('/').pop().replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase()) + 'Page';

  const content = `import type { Metadata } from 'next';
import PageContent from '${importPath}';

export const metadata: Metadata = {
  title: '${route.title}',
  description: 'Expert Skye Canyon real estate services in Las Vegas NV 89166. Contact Dr. Jan Duffy, REALTOR® at (702) 500-1902.',
};

export default function ${componentName}() {
  return <PageContent />;
}
`;

  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, content);
}

// not-found
const notFound = `import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
        Return Home
      </Link>
    </div>
  );
}
`;
fs.writeFileSync(path.join(process.cwd(), 'src/app/not-found.tsx'), notFound);

console.log(`Created ${routes.length} app routes`);
