export default function BrandSchema() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Downifi",
    "url": "https://downifi.com",
    "logo": "https://downifi.com/logo.png",
    "description":
      "Downifi is a free online social video downloader for TikTok, Instagram, Facebook, and X (Twitter). Save HD videos without watermarks in one click.",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Downifi",
    "url": "https://downifi.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://downifi.com/?url={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
