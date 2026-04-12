export default function SoftwareSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Downifi",
    "operatingSystem": "All",
    "applicationCategory": "MultimediaApplication",
    "url": "https://downifi.com",
    "image": "https://downifi.com/og-image.png",
    "author": {
      "@type": "Organization",
      "name": "Downifi Studio",
      "url": "https://downifi.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "description": "Downifi is a professional-grade, free high-quality social video downloader for Instagram, Facebook, TikTok, and Twitter (X). Download videos without watermarks in full HD resolution instantly.",
    "featureList": [
      "No Watermark Downloads",
      "High Definition (HD) Quality",
      "Fast Extraction Speed",
      "Supports Instagram, TikTok, Facebook, and Twitter",
      "Completely Free to Use"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "3412"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
