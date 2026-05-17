import { Metadata } from 'next';
import DownloaderTemplate from "@/components/DownloaderTemplate";
import FAQSchema from "@/components/FAQSchema";
import HowToSchema from "@/components/HowToSchema";

export const metadata: Metadata = {
  title: 'Twitter Video Downloader | Save X Videos & GIFs Free',
  description: 'Download videos and GIFs from Twitter (X) instantly. Fast, free, and secure online Twitter video downloader.',
  alternates: {
    canonical: 'https://downifi.com/twitter-video-downloader',
  },
};

const HOW_TO_STEPS = [
  {
    name: "Copy the Tweet link",
    text: "Click the Share icon on the Tweet containing the video or GIF, then click 'Copy link to Tweet'.",
  },
  {
    name: "Paste into Downifi",
    text: "Paste the copied URL into the search box on this page.",
  },
  {
    name: "Download",
    text: "Click Download to save the original MP4 video or GIF file.",
  },
];

const FAQ_ITEMS = [
  { question: "Can I download Twitter GIFs as MP4?", answer: "Yes! Twitter actually converts all uploaded GIFs to MP4 format. When you use Downifi, we extract that MP4 file so you can save it easily." },
  { question: "Is it safe to download videos from X (Twitter)?", answer: "Absolutely. We don't require you to log in, and all downloads are processed securely without tracking." },
  { question: "Why does the download sometimes fail?", answer: "Make sure the account that posted the video is public. We cannot download videos from protected (private) Twitter accounts." },
];

export default function TwitterDownloaderPage() {
  const schemas = (
    <>
      <FAQSchema items={FAQ_ITEMS} />
      <HowToSchema 
        name="How to Download Twitter / X Videos"
        description="Free tool to save Twitter videos and GIFs."
        steps={HOW_TO_STEPS}
      />
    </>
  );

  return (
    <DownloaderTemplate
      titlePrefix="Twitter"
      titleHighlight="(X) Video"
      titleSuffix="Downloader"
      subtitle="Save videos and GIFs from Twitter (X) in original quality. 100% free with no signup."
      placeholder="Paste Twitter/X link here..."
      howToSteps={[
        { title: "1. Copy Tweet Link", desc: "Click Share on the Tweet and select Copy Link." },
        { title: "2. Paste URL", desc: "Paste the link into the search box above." },
        { title: "3. Save MP4", desc: "Hit Download to save the video or GIF to your device." }
      ]}
      faqItems={FAQ_ITEMS}
      schemas={schemas}
      gradientClass="from-gray-300 to-gray-500"
      icon={
        <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 1200 1227" fill="currentColor">
          <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
        </svg>
      }
    />
  );
}
