type Step = { name: string; text: string };

export default function HowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: Step[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "totalTime": "PT10S",
    "supply": [{ "@type": "HowToSupply", "name": "Video URL from TikTok, Instagram, Facebook, or X" }],
    "tool": [{ "@type": "HowToTool", "name": "Web browser" }],
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.name,
      "text": s.text,
      "url": `https://downifi.com/#step-${i + 1}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
