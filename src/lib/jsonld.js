// src/lib/jsonld.js
export default function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key={JSON.stringify(schema)}
    />
  );
}