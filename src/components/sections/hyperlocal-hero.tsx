interface HyperlocalHeroProps {
  headline: string;
  answerSummary: string;
  badges?: string[];
}

export default function HyperlocalHero({ headline, answerSummary, badges = [] }: HyperlocalHeroProps) {
  return (
    <section className="pt-20 pb-12 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{headline}</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">{answerSummary}</p>
        {badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
