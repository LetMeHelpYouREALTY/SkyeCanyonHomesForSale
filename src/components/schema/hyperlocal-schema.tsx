'use client';

interface HyperlocalSchemaProps {
  schema: object;
}

export default function HyperlocalSchema({ schema }: HyperlocalSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
