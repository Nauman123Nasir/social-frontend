type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  author: string;
  image?: string;
};

export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  author,
  image,
}: BlogPostSchemaProps) {
  const url = `https://downifi.com/blog/${slug}`;
  const imageUrl = image?.startsWith("http") ? image : `https://downifi.com${image ?? "/og-image.png"}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://downifi.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Downifi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://downifi.com/logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "url": url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
