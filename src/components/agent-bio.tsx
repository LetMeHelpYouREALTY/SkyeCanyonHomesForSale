'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site.config';
import { siteImage } from '@/lib/cloudflare-images';

export default function AgentBio() {
  const _scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={siteImage('gbp/profile.jpg')}
              alt="Dr. Jan Duffy REALTOR at Skye Canyon Las Vegas NV 89166"
              className="rounded-xl shadow-lg w-full max-w-md mx-auto lg:mx-0 object-cover"
              width={800}
              height={800}
            />
          </div>

          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Dr. Jan Duffy
              </h2>
              <div className="text-xl text-realscout-blue font-semibold mb-2">
                REALTOR® | Skye Canyon Specialist
              </div>
              <div className="text-gray-600 mb-4">Licensed in Nevada | License# S.0197614</div>
            </div>

            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                Dr. Jan Duffy is a Nevada REALTOR® specializing in luxury homes, new
                construction, custom builds, and resales in Skye Canyon and Northwest Las Vegas. She
                represents buyers with Century Communities, Lennar, Toll Brothers, and other active
                Skye Canyon builders.
              </p>
              <p>
                She works from {siteConfig.address.formatted} and pulls live MLS comps before you
                tour. Read current client reviews on Google, then call {siteConfig.phone} to
                schedule.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Professional Credentials</h3>
                <h4 className="font-medium text-gray-700 mb-2">Education & Licensing</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Nevada Real Estate License S.0197614</li>
                  <li>• Certified Luxury Specialist</li>
                  <li>• Skye Canyon Market Specialist</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Professional Memberships</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• NAR (National Association)</li>
                  <li>• Nevada REALTORS®</li>
                  <li>• Las Vegas REALTORS®</li>
                </ul>
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 text-realscout-blue mr-3" />
                <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 text-realscout-blue mr-3" />
                <span>DrDuffy@SkyeCanyonHomesForSale.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 text-realscout-blue mr-3" />
                <span>{siteConfig.address.formatted}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={siteConfig.googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-realscout-blue text-white hover:bg-realscout-navy">
                  Google Business Profile
                </Button>
              </a>
              <a href={siteConfig.googleReviewUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-realscout-blue text-realscout-blue hover:bg-realscout-blue hover:text-white"
                >
                  Read Google Reviews
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
