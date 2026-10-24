/** Calendly events by page intent (scheduling_url values from the Calendly API). */
export const CALENDLY_EVENTS = {
  tour: 'https://calendly.com/drjanduffy/showing',
  seller: 'https://calendly.com/drjanduffy/listing-consultation',
  buyer: 'https://calendly.com/drjanduffy/buyer-consultation-30-min',
  general: 'https://calendly.com/drjanduffy/15min',
} as const;

const SELLER_PATHS = ['/services/seller-agent', '/market-analysis', '/neighborhood-analysis'];
const BUYER_PATHS = ['/services/buyer-agent', '/services/relocation', '/services/first-time-buyer'];

const matches = (pathname: string, paths: string[]) =>
  paths.some((p) => pathname === p || pathname.startsWith(`${p}/`));

/** Contact gets the 15-minute strategy call; seller and buyer pages their consultations; the rest tours. */
export function calendlyEventForPath(pathname: string): string {
  if (pathname === '/contact') return CALENDLY_EVENTS.general;
  if (matches(pathname, SELLER_PATHS)) return CALENDLY_EVENTS.seller;
  if (matches(pathname, BUYER_PATHS)) return CALENDLY_EVENTS.buyer;
  return CALENDLY_EVENTS.tour;
}

/**
 * Calendly URL for the page's intent, tagged with UTM. utm_source is the bare
 * domain so the Calendly → FUB Worker can map the booking to this site.
 */
export function calendlyUrlFor(pathname: string, medium: string): string {
  const url = new URL(calendlyEventForPath(pathname));
  url.searchParams.set('hide_gdpr_banner', '1');
  url.searchParams.set('utm_source', 'skyecanyonhomesforsale.com');
  url.searchParams.set('utm_medium', medium);
  url.searchParams.set('utm_campaign', pathname === '/' ? 'home' : pathname.replace(/^\/|\/$/g, ''));
  return url.toString();
}
