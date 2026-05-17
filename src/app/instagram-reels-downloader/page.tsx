import { Metadata } from 'next';
import DownloaderTemplate from "@/components/DownloaderTemplate";
import FAQSchema from "@/components/FAQSchema";
import HowToSchema from "@/components/HowToSchema";
import { Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: 'Instagram Reels Downloader | Save IG Videos & Stories Free',
  description: 'Download Instagram Reels, Videos, and Stories in high quality. Fast, free, and secure Instagram downloader for iPhone, Android, and PC.',
  alternates: {
    canonical: 'https://downifi.com/instagram-reels-downloader',
  },
};

const HOW_TO_STEPS = [
  {
    name: "Copy the Instagram link",
    text: "Open Instagram, tap the paper plane (share) icon on the Reel or Video, and tap 'Copy Link'.",
  },
  {
    name: "Paste into Downifi",
    text: "Paste the Instagram URL into the Downifi search box at the top of this page.",
  },
  {
    name: "Download the Video",
    text: "Click Download. We will fetch the original HD MP4 file directly from Instagram's servers.",
  },
];

const FAQ_ITEMS = [
  { question: "Can I download Instagram Reels with audio?", answer: "Yes, all Reels downloaded through Downifi include their original, high-quality audio track." },
  { question: "Do I need to log in to my Instagram account?", answer: "No, Downifi does not require you to log in. We only support downloading from public Instagram accounts." },
  { question: "How to save Instagram videos to iPhone camera roll?", answer: "Use Safari to open Downifi, paste the IG link, and download the video. Once downloaded, tap the downloads icon in Safari's address bar, open the video, tap share, and select 'Save Video'." },
  { question: "Is this Instagram downloader safe?", answer: "Yes. We don't store your data, and videos are streamed directly from Instagram's secure CDN to your device." },
];

export default function InstagramDownloaderPage() {
  const schemas = (
    <>
      <FAQSchema items={FAQ_ITEMS} />
      <HowToSchema 
        name="How to Download Instagram Reels and Videos"
        description="Free guide to saving Instagram Reels to your gallery in HD quality."
        steps={HOW_TO_STEPS}
      />
    </>
  );

  return (
    <DownloaderTemplate
      titlePrefix="Instagram"
      titleHighlight="Reels"
      titleSuffix="Downloader"
      subtitle="Save Instagram Reels, Videos, and Stories directly to your device in original HD quality."
      placeholder="Paste Instagram link here..."
      howToSteps={[
        { title: "1. Copy IG Link", desc: "Tap Share on any public Instagram post and select Copy Link." },
        { title: "2. Paste URL", desc: "Paste the link into the search box above." },
        { title: "3. Save MP4", desc: "Hit Download to save the HD video to your gallery." }
      ]}
      faqItems={FAQ_ITEMS}
      schemas={schemas}
      gradientClass="from-pink-500 via-red-500 to-orange-400"
      icon={<Instagram className="w-8 h-8 md:w-10 md:h-10 text-pink-500" />}
    />
  );
}
