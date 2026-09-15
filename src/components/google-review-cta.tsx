import { Star } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { sectionImages } from '@/data/section-images';
import { siteImage } from '@/lib/cloudflare-images';

interface GoogleReviewCtaProps {
  heading?: string;
}

export default function GoogleReviewCta({
  heading = 'Google reviews for Skye Canyon buyers',
}: GoogleReviewCtaProps) {
  const qrSrc = siteImage('gbp/google-review-qr.png');
  const monument = sectionImages.monument;

  return (
    <section className="py-16 bg-white" id="google-reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <picture>
              <source srcSet={monument.srcWebp} type="image/webp" />
              <img
                src={monument.src}
                alt={monument.alt}
                className="w-full h-64 object-cover rounded-xl"
                loading="lazy"
              />
            </picture>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
            <p className="text-lg text-gray-600 mb-6">
              Read Google Business Profile reviews for {siteConfig.name} at{' '}
              {siteConfig.address.formatted}, then leave yours after closing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
              <a
                href={siteConfig.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-realscout-blue px-5 py-3 font-semibold text-white hover:bg-realscout-navy"
              >
                <Star className="h-4 w-4" aria-hidden="true" />
                Write a Google review
              </a>
              <a
                href={siteConfig.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Open Google Business Profile
              </a>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={qrSrc}
                alt="QR code to write a Google review for Dr. Jan Duffy Skye Canyon Las Vegas NV 89166"
                width={128}
                height={128}
                className="w-28 h-28 border border-gray-200 rounded-md bg-white p-1"
                loading="lazy"
              />
              <p className="text-sm text-gray-600">
                Scan at 10111 W. Skye Canyon Park Drive to open the Google review form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
