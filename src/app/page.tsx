"use client"

import DownloaderTemplate from "@/components/DownloaderTemplate"
import FAQSchema from "@/components/FAQSchema"
import HowToSchema from "@/components/HowToSchema"

const HOW_TO_STEPS = [
  {
    name: "Copy the video link",
    text: "Open the TikTok, Instagram Reel, Facebook, or X post and tap Share, then Copy Link to grab the URL.",
  },
  {
    name: "Paste the URL into Downifi",
    text: "Drop the copied link into the search box at the top of the Downifi home page. The platform is auto-detected.",
  },
  {
    name: "Download the MP4",
    text: "Hit Download to save the video as an MP4 file in up to 1080p quality — completely free and watermark-free.",
  },
]

const FAQ_ITEMS = [
  { question: "Is Downifi free to use?", answer: "Yes, Downifi is 100% free. There are no daily download caps, no hidden fees, and no registration required. Save as many TikTok, Instagram, Facebook, and X videos as you want." },
  { question: "How do I download a TikTok video without a watermark?", answer: "Open TikTok, tap Share on the video, then Copy Link. Paste the link into the box on Downifi's home page and hit Download. Downifi automatically returns the clean, watermark-free MP4 version." },
  { question: "Can I save Instagram Reels to my iPhone or Android?", answer: "Yes. Downifi works in Safari on iPhone and Chrome on Android with no app install. Copy the Reel link from Instagram, paste it on Downifi, and the MP4 saves straight to your Photos or Downloads folder." },
  { question: "Does Downifi store my videos or downloaded links?", answer: "No. Downifi does not host, cache, or log any videos. It acts as a lightweight bridge between the social platform's CDN and your browser. Nothing is saved on our servers after the download completes." },
  { question: "Which platforms does Downifi support?", answer: "Downifi supports high-speed downloads for TikTok (no watermark), Instagram (Reels, feed videos, IGTV), Facebook (HD videos and Reels), and Twitter / X (videos and GIFs)." },
  { question: "Do I need to install an app or create an account?", answer: "Neither. Downifi runs entirely in your browser with no app install, no signup, and no social login. Just paste a public video URL and download." },
  { question: "What is the maximum video quality I can download?", answer: "Downifi always fetches the highest resolution the source platform makes available — typically 1080p Full HD for TikTok and Instagram, and up to 4K for Facebook videos when the uploader provides that quality." },
  { question: "Why isn't my video link working?", answer: "Common causes include the post being private, the account being restricted, the link pointing to a photo instead of a video, or an incomplete URL. Ensure the video is public and the link starts with https://." },
  { question: "Is it legal to download social media videos?", answer: "Downloading publicly available videos for personal, offline viewing is generally permitted under fair use. Do not redistribute, monetize, or re-upload copyrighted content without the creator's written permission." },
]

export default function Home() {
  const schemas = (
    <>
      <FAQSchema items={FAQ_ITEMS} />
      <HowToSchema 
        name="How to Download Videos from TikTok, Instagram, Facebook, and X"
        description="Free, 3-step guide for saving HD social media videos to your device using Downifi — no app and no signup required."
        steps={HOW_TO_STEPS}
      />
    </>
  );

  return (
    <>
      <DownloaderTemplate
        titlePrefix="Free Social"
        titleHighlight="Video"
        titleSuffix="Downloader"
        subtitle={
          <>
            Download HD videos from <strong className="text-white">TikTok, Instagram, Facebook, and X (Twitter)</strong> in one click — in original quality, no app, no signup.
          </>
        }
        howToSteps={[
          { title: "1. Copy the Video Link", desc: "Open the TikTok, Instagram Reel, Facebook, or X post and tap Share → Copy Link to grab the URL." },
          { title: "2. Paste URL Above", desc: "Drop the copied link into the search box at the top of this page. Downifi auto-detects the platform." },
          { title: "3. Download in HD", desc: "Hit Download to save the video as an MP4 file in up to 1080p — completely free and watermark-free." }
        ]}
        faqItems={FAQ_ITEMS}
        schemas={schemas}
      />

      {/* Platform-Specific Section - targets [platform] downloader long-tail keywords on the home page */}
      <div className="container mx-auto px-4 w-full max-w-5xl mb-32 flex flex-col items-center">
          <div className="text-center mb-16 px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Supported Platforms</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-10"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                One tool, every major social network. Downifi works as a dedicated <strong className="text-white">TikTok video downloader</strong>, <strong className="text-white">Instagram Reels saver</strong>, <strong className="text-white">Facebook video grabber</strong>, and <strong className="text-white">Twitter/X downloader</strong> — all in a single page.
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full">
              <div className="p-8 rounded-2xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">TikTok Downloader — Original Quality</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Access original TikTok source files. Downifi helps you download the clean MP4 file before any platform-specific compression is added. Supports <strong className="text-white">TikTok Shorts</strong>, <strong className="text-white">story clips</strong>, and long-form TikTok videos on both iPhone and Android.
                  </p>
              </div>
              <div className="p-8 rounded-2xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">Instagram Reels & Video Downloader</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Grab Instagram Reels, feed videos, and IGTV clips in full HD. Just copy the Instagram share link and paste it above — Downifi works as a free <strong className="text-white">Instagram Reels downloader online</strong>, no Instagram login required. Ideal for saving inspiration or re-sharing content you own.
                  </p>
              </div>
              <div className="p-8 rounded-2xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">Facebook Video Downloader (HD)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Download public Facebook videos, Reels, and watch clips in high definition. Downifi accesses the direct source stream and gives you a direct MP4 link — perfect for saving tutorials, news clips, and memorable moments to your camera roll or PC.
                  </p>
              </div>
              <div className="p-8 rounded-2xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">Twitter (X) Video Downloader</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Save videos and GIFs from X (formerly Twitter) in original quality. Paste any tweet URL to pull the highest-bitrate MP4 available. Works as a free <strong className="text-white">Twitter video downloader online</strong> for viral clips, sports highlights, and news footage.
                  </p>
              </div>
          </div>
      </div>

      {/* Detailed Features Section for SEO & Readability */}
      <div className="container mx-auto px-4 w-full max-w-5xl mb-32 flex flex-col items-center">
          <div className="text-center mb-16 px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Downifi Is the Best Free Video Downloader</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-10"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Downifi is the web's fastest tool for saving high-resolution videos from TikTok, Instagram, Twitter (X), and Facebook. Built for speed, privacy, and maximum video quality — with zero ads on download pages.
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 w-full">
              <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Full HD &amp; 4K Quality Preserved</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Every video you download keeps its original resolution. Whether the source is 720p, 1080p, or 4K, our extractor pulls the highest-quality MP4 stream directly from Instagram, TikTok, X, and Facebook CDNs. No recompression, no quality loss — just pixel-perfect offline playback.
                  </p>
              </div>
              <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Unlimited Free Downloads — No Signup</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Download as many videos as you want, as often as you want. No daily caps, no premium tier, no credit card, no account creation. Our servers resolve video metadata in under two seconds, so you can batch-save dozens of clips back-to-back without friction.
                  </p>
              </div>
              <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Original Source TikTok &amp; Reels</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Save your TikTok videos and Instagram Reels in their original format. Downifi requests the raw source file whenever the platform exposes it, so your personal archive stays clean and high-quality.
                  </p>
              </div>
               <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Works on iPhone, Android, PC &amp; Mac</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Downifi is a browser-based video downloader — nothing to install, nothing to update. Save Instagram Reels on iPhone via Safari, download TikTok videos on Android in Chrome, or archive Facebook clips from your desktop. Lower malware risk, zero storage footprint.
                  </p>
              </div>
              <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">100% Private — No Data Stored</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We don't log the links you paste, we don't cache the videos you download, and we never ask for your social media credentials. Your download history stays on your device. Videos stream directly from the original platform's CDN to your browser.
                  </p>
              </div>
              <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">MP4 Output — Universally Compatible</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Every saved file is a standard MP4 with H.264 video and AAC audio, so it plays natively in iOS Photos, Android Gallery, VLC, QuickTime, and any video editor. No codec juggling, no format conversion needed before sharing or editing.
                  </p>
              </div>
          </div>
      </div>
    </>
  )
}
