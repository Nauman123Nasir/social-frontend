import { Metadata } from 'next';
import DownloaderTemplate from "@/components/DownloaderTemplate";
import FAQSchema from "@/components/FAQSchema";
import HowToSchema from "@/components/HowToSchema";
import { Facebook } from "lucide-react";

export const metadata: Metadata = {
  title: 'Facebook Video Downloader | Save FB Videos & Reels in HD',
  description: 'Download Facebook videos and Reels in 1080p and 4K quality. Free online FB downloader tool, fast and secure.',
  alternates: {
    canonical: 'https://downifi.com/facebook-video-downloader',
  },
};

const HOW_TO_STEPS = [
  {
    name: "Copy the Facebook link",
    text: "Find the video on Facebook, tap the Share button, and select 'Copy Link'.",
  },
  {
    name: "Paste into Downifi",
    text: "Paste the Facebook video URL into the Downifi search box above.",
  },
  {
    name: "Download the MP4",
    text: "Click Download and choose the highest quality available to save the MP4 file.",
  },
];

const FAQ_ITEMS = [
  { question: "Can I download private Facebook videos?", answer: "Downifi only supports downloading publicly shared videos. Private videos or videos in closed groups cannot be downloaded." },
  { question: "Does this work for Facebook Reels?", answer: "Yes! You can download both standard Facebook videos and Facebook Reels using the exact same process." },
  { question: "Is it possible to download FB videos in 4K?", answer: "If the original video was uploaded to Facebook in 4K resolution, Downifi will provide a 4K download option." },
];

export default function FacebookDownloaderPage() {
  const schemas = (
    <>
      <FAQSchema items={FAQ_ITEMS} />
      <HowToSchema 
        name="How to Download Facebook Videos"
        description="Save Facebook videos to your device in High Definition."
        steps={HOW_TO_STEPS}
      />
    </>
  );

  return (
    <DownloaderTemplate
      titlePrefix="Facebook"
      titleHighlight="Video"
      titleSuffix="Downloader"
      subtitle="Save public Facebook Videos and Reels in Full HD or 4K quality directly to your device."
      placeholder="Paste Facebook video link here..."
      howToSteps={[
        { title: "1. Copy FB Link", desc: "Tap Share on the Facebook post and select Copy Link." },
        { title: "2. Paste URL", desc: "Paste the link into the search box above." },
        { title: "3. Save MP4", desc: "Hit Download to save the video in the highest available quality." }
      ]}
      faqItems={FAQ_ITEMS}
      schemas={schemas}
      gradientClass="from-blue-400 to-blue-600"
      icon={<Facebook className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />}
    />
  );
}
