import { siteConfig } from '@/config/site.config';
import { siteImage } from '@/lib/cloudflare-images';

interface QRCodePlaceholderProps {
  reviewLink?: string;
  className?: string;
}

export default function QRCodePlaceholder({
  reviewLink = siteConfig.googleReviewUrl,
  className = '',
}: QRCodePlaceholderProps): JSX.Element {
  const qrSrc = siteImage('gbp/google-review-qr.png');

  return (
    <div className={`bg-white p-6 rounded-lg border border-gray-200 text-center ${className}`}>
      <a href={reviewLink} target="_blank" rel="noopener noreferrer">
        <img
          src={qrSrc}
          alt="QR code to write a Google review for Dr. Jan Duffy Skye Canyon Las Vegas NV 89166"
          width={192}
          height={192}
          className="w-40 h-40 mx-auto mb-4 bg-white"
          loading="lazy"
        />
      </a>
      <p className="text-sm text-gray-600 font-medium">Scan to write a Google review</p>
      <p className="mt-2 text-xs text-gray-500 break-all">{reviewLink}</p>
    </div>
  );
}
