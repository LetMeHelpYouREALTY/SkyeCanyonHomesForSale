'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import HeadingImage from '@/components/heading-image';
import { Card, CardContent } from '@/components/ui/card';
import { sectionImages, type SectionImage } from '@/data/section-images';
import FAQSchema from './faq-schema';

interface FAQItem {
  question: string;
  answer: string;
}

type FaqPageType = 'general' | 'skye-canyon' | 'luxury-homes' | 'market-analysis' | 'las-vegas';

interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
  pageType?: FaqPageType;
  /** Set false when the page already emits FAQPage JSON-LD. */
  includeSchema?: boolean;
}

function faqHeadingPhoto(pageType: FaqPageType): SectionImage {
  switch (pageType) {
    case 'skye-canyon':
      return sectionImages.guide;
    case 'luxury-homes':
      return sectionImages.luxuryInterior;
    case 'market-analysis':
      return sectionImages.market;
    case 'las-vegas':
      return sectionImages.northwest;
    case 'general':
      return sectionImages.listings;
    default: {
      const _never: never = pageType;
      return _never;
    }
  }
}

export default function FAQSection({
  title,
  faqs,
  pageType = 'general',
  includeSchema = true,
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const photo = faqHeadingPhoto(pageType);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {includeSchema ? <FAQSchema faqs={faqs} pageType={pageType} /> : null}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
          <HeadingImage {...photo} className="w-full h-48 object-cover rounded-xl mb-10" />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="transition-all duration-200 hover:shadow-md">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-realscout-blue"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-realscout-blue flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-realscout-blue flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
