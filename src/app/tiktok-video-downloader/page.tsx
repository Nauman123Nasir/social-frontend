import { Metadata } from 'next';
import DownloaderTemplate from "@/components/DownloaderTemplate";
import FAQSchema from "@/components/FAQSchema";
import HowToSchema from "@/components/HowToSchema";

export const metadata: Metadata = {
  title: 'TikTok Downloader No Watermark | Save TikTok Videos Free',
  description: 'Download TikTok videos without watermark in HD quality. The fastest, free TikTok video downloader. Works on iPhone, Android, and PC.',
  alternates: {
    canonical: 'https://downifi.com/tiktok-video-downloader',
  },
};

const HOW_TO_STEPS = [
  {
    name: "Copy the TikTok link",
    text: "Open the TikTok app, find the video you want to save, tap the Share icon, and select 'Copy Link'.",
  },
  {
    name: "Paste the URL",
    text: "Go back to Downifi and paste the copied TikTok link into the search box above.",
  },
  {
    name: "Download without Watermark",
    text: "Click Download. Downifi will process the video and give you the clean, watermark-free MP4 file.",
  },
];

const FAQ_ITEMS = [
  { question: "How do I download a TikTok without the watermark?", answer: "Just copy the video link from the TikTok app, paste it into the Downifi TikTok downloader box, and click download. Our system removes the watermark automatically." },
  { question: "Is this TikTok Downloader free?", answer: "Yes! Downifi is 100% free to use. You can download as many TikTok videos as you want without paying or registering." },
  { question: "Where are TikTok videos saved after downloading?", answer: "On iPhone, they usually save to your Files app (Downloads folder) or Photos if you choose 'Save Video'. On Android and PC, they save to your default Downloads folder." },
  { question: "Can I download TikTok videos on my iPhone?", answer: "Yes, you can use Safari to download TikToks. Just copy the link from the TikTok app and paste it into Downifi in Safari." },
];

export default function TikTokDownloaderPage() {
  const schemas = (
    <>
      <FAQSchema items={FAQ_ITEMS} />
      <HowToSchema 
        name="How to Download TikTok Videos Without Watermark"
        description="A simple 3-step guide to saving TikTok videos to your phone or computer without the logo."
        steps={HOW_TO_STEPS}
      />
    </>
  );

  return (
    <DownloaderTemplate
      titlePrefix="TikTok"
      titleHighlight="Video"
      titleSuffix="Downloader"
      subtitle="Download TikTok videos without watermark in 1080p HD. Fast, free, and no app required."
      placeholder="Paste TikTok video link here..."
      howToSteps={[
        { title: "1. Copy TikTok Link", desc: "Open TikTok, tap Share, and click Copy Link." },
        { title: "2. Paste URL", desc: "Paste the link into the search box above." },
        { title: "3. Save MP4", desc: "Hit Download to save the clean, watermark-free video." }
      ]}
      faqItems={FAQ_ITEMS}
      schemas={schemas}
      gradientClass="from-cyan-400 to-pink-500"
      icon={
        <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 448 512" fill="currentColor">
          <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
        </svg>
      }
    />
  );
}
