"use client"

import { useState, useRef, useEffect } from "react"
import { Download, Link as LinkIcon, Loader2, PlayCircle, AlertCircle, Instagram, Facebook, Twitter, Clipboard, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
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
  const [url, setUrl] = useState("")
  const [extractedUrl, setExtractedUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [videoInfo, setVideoInfo] = useState<any>(null)
  const [isIOS, setIsIOS] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isLongDownload, setIsLongDownload] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const resetInputScroll = () => {
    // A tiny timeout allows the browser to finish its native paste/render cycle first
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollLeft = 0;
      }
    }, 10);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = window.navigator.userAgent;
      const iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      setIsIOS(iOS);
    }
  }, []);

  useEffect(() => {
    if (videoInfo && resultsRef.current) {
      // Add a tiny delay to ensure the DOM is fully painted before scrolling
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [videoInfo])

  const validateUrl = (text: string) => {
    const socialPatterns = [/instagram\.com/, /facebook\.com/, /twitter\.com/, /x\.com/, /fb\.watch/, /tiktok\.com/, /vt\.tiktok\.com/];
    return socialPatterns.some(pattern => pattern.test(text.toLowerCase()));
  }

  const handlePaste = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) {
          setUrl(text);
          setError("");
          resetInputScroll();
        }
      } else {
        setError("Clipboard access is not available in this browser. Please long-press the search box and select 'Paste'.");
      }
    } catch (err) {
      // Intentionally omitting console.error to prevent the Next.js dev server overlay 
      // from violently taking over the screen on a harmless permission exception.
      setError("Clipboard access denied. Please long-press the search box above and select 'Paste' manually.");
    }
  }

  const handleExtract = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    // Pre-flight Validation
    if (!validateUrl(url)) {
      setError("Please enter a valid Instagram, Facebook, Twitter/X, or TikTok video link. Other platforms are not supported yet.")
      setVideoInfo(null)
      return
    }

    setIsLoading(true)
    setError("")
    setVideoInfo(null)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await axios.post(`${apiUrl}/api/info`, { url });
      setVideoInfo(response.data)
      setExtractedUrl(url)
    } catch (err: any) {
      setError(err.response?.data?.detail || "Failed to extract video info. Please verify the link and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    if (!videoInfo) return;
    
    // Generate a unique token for this download session
    const token = Math.random().toString(36).substring(2, 10);
    
    setIsDownloading(true);
    setIsLongDownload(false);
    
    // Show "Almost there" message after 5 seconds
    const longDownloadTimeout = setTimeout(() => {
      setIsLongDownload(true);
    }, 5000);
    
    // Construct the backend URL with the token
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    const downloadLink = `${backendUrl}/api/download?url=${encodeURIComponent(videoInfo.formats[0].url)}&title=${encodeURIComponent((videoInfo.title || 'video').replace(/\s+/g, '_'))}&ext=${encodeURIComponent(videoInfo.formats[0].ext || 'mp4')}&needs_merging=${videoInfo.formats[0].needs_merging || false}&original_url=${encodeURIComponent(extractedUrl)}&token=${token}`;
    
    // Trigger the download
    window.location.href = downloadLink;
    
    // Polling function to check for the "download started" status via API
    // This is cross-origin compatible and more robust than cookies
    const checkStatus = setInterval(async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/download-status/${token}`);
        if (response.data.started) {
          // Status found! Download has started.
          setIsDownloading(false);
          clearTimeout(longDownloadTimeout);
          clearInterval(checkStatus);
        }
      } catch (err) {
        // Silently continue polling on error
      }
    }, 1000);

    // Safety timeout: Automatically hide the loader after 45 seconds if status is never found
    setTimeout(() => {
      clearInterval(checkStatus);
      setIsDownloading(false);
      clearTimeout(longDownloadTimeout);
    }, 45000); 
  }

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center">
      <FAQSchema items={FAQ_ITEMS} />
      <HowToSchema
        name="How to Download Videos from TikTok, Instagram, Facebook, and X"
        description="Free, 3-step guide for saving HD social media videos to your device using Downifi — no app and no signup required."
        steps={HOW_TO_STEPS}
      />

      {/* Hero Content */}
      <div className="text-center max-w-3xl mb-12 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Free Social <span className="gradient-text">Video Downloader</span>
        </h1>
        <p className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
          Download HD videos from <strong className="text-white">TikTok, Instagram, Facebook, and X (Twitter)</strong> in one click — in original quality, no app, no signup.
        </p>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          Paste any public video link below to save Reels, Shorts, Stories, and posts in MP4 at full 1080p quality. Works on iPhone, Android, PC, and Mac.
        </p>
      </div>

      {/* Main Input Area */}
      <div className="w-full max-w-2xl p-6 rounded-2xl glass-effect shadow-2xl relative z-10 transition-all duration-300 hover:shadow-primary/20">
        
        {/* External Paste Button (Moved Above) */}
        <AnimatePresence>
          {!url && !isIOS && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mb-4 flex justify-center w-full"
            >
              <Button 
                type="button"
                onClick={handlePaste}
                variant="ghost"
                size="sm"
                className="group relative h-10 px-6 overflow-hidden rounded-2xl font-bold text-sm text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 active:scale-95 border border-white/15 bg-white/5 hover:bg-white/10"
                suppressHydrationWarning
              >
                <span className="absolute inset-x-0 w-full h-px top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <div className="flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:translate-x-[2px]">
                  <Clipboard className="h-4 w-4 mr-2 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="tracking-wide">Paste URL</span>
                </div>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleExtract} className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              ref={inputRef}
              type="url"
              placeholder="Enter social media video link here..."
              className="pl-10 pr-14 h-14 text-lg bg-black/50 border-white/20 focus:border-primary/50 text-white rounded-xl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onPaste={resetInputScroll}
              required
            />

            <AnimatePresence mode="wait">
              {url && (
                <motion.div
                  key="clear-btn"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-2 top-2 z-20"
                >
                  <button 
                    type="button"
                    onClick={() => { setUrl(""); setError(""); }}
                    className="h-10 w-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 focus:outline-none"
                    title="Clear Input"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {validateUrl(url) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: 'auto' }}
                exit={{ opacity: 0, scale: 0.95, width: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <Button 
                  type="submit" 
                  className="h-14 w-full md:w-auto px-8 text-lg font-bold rounded-xl bg-primary hover:bg-primary/80 transition-all duration-200"
                  disabled={isLoading}
                  suppressHydrationWarning
                >
                  {isLoading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <Download className="h-5 w-5 mr-2" />}
                  {isLoading ? "Processing..." : "Download"}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        {/* Invalid URL State */}
        <AnimatePresence>
          {url.length > 5 && !validateUrl(url) && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-4 px-4 py-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200/90 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.05)] overflow-hidden"
            >
              <AlertCircle className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
              <span className="text-sm font-medium tracking-wide">
                Please enter a valid link from <strong className="text-orange-300">Instagram, Facebook, TikTok, or Twitter</strong>.
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error State */}
        <AnimatePresence mode="wait">
          {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="mt-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-100 flex items-start shadow-[0_0_20px_rgba(239,68,68,0.1)] overflow-hidden animate-pulse-subtle"
              >
                  <div className="bg-red-500/20 p-2.5 rounded-xl mr-4 flex-shrink-0 border border-red-500/20">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="flex flex-col py-0.5">
                    <span className="font-bold text-sm mb-1 text-red-500 tracking-tight">Extraction Failed</span>
                    <p className="text-xs font-semibold leading-relaxed text-red-200/90">{error}</p>
                  </div>
              </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Platform Icons */}
      <div className="mt-16 flex items-center gap-6 justify-center flex-wrap">
        {[
          { name: 'Instagram', icon: Instagram, color: 'text-pink-500', bg: 'bg-pink-500/10' },
          { name: 'TikTok', icon: ({ className }: any) => (
            <svg className={className} viewBox="0 0 448 512" fill="currentColor">
              <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
            </svg>
          ), color: 'text-white', bg: 'bg-white/10' },
          { name: 'Facebook', icon: Facebook, color: 'text-blue-600', bg: 'bg-blue-600/10' },
          { name: 'X (Twitter)', icon: ({ className }: any) => (
            <svg className={className} viewBox="0 0 1200 1227" fill="currentColor">
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
            </svg>
          ), color: 'text-white', bg: 'bg-white/10' }
        ].map((platform) => (
            <motion.div 
              key={platform.name}
              whileHover={{ y: -5, scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl glass-effect border border-white/5 ${platform.bg} group transition-all duration-300`}
            >
                <platform.icon className={`h-5 w-5 ${platform.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-bold tracking-wide uppercase text-gray-300 group-hover:text-white">
                    {platform.name}
                </span>
            </motion.div>
        ))}
      </div>

      {/* Results Area */}
      {videoInfo && (
        <div ref={resultsRef} className="mt-16 w-full max-w-4xl grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Thumbnail */}
            <div className="rounded-2xl overflow-hidden glass-effect border-white/10 relative aspect-video group bg-black/50">
                {videoInfo.thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                        src={videoInfo.thumbnail} 
                        alt={videoInfo.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : null}
                
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-gray-900 to-black select-none pointer-events-none">
                    <PlayCircle className="h-16 w-16 text-primary/40 mb-3 group-hover:text-primary transition-colors" />
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">
                      Video Preview Unavailable
                      <br />
                      <span className="text-[10px] lowercase opacity-50">Private profile or hotlink protection active</span>
                    </span>
                </div>

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <PlayCircle className="h-16 w-16 text-white opacity-80" />
                </div>
            </div>

            {/* Formats Section */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
                    {videoInfo.formats && videoInfo.formats.length > 0 ? (
                        <div className="flex flex-col gap-5">
                            <div>
                                <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]"></span>
                                    Ready to Download
                                </div>
                                <h2 className="text-xl font-bold text-white/90 line-clamp-1 leading-tight">{videoInfo.title}</h2>
                                <div className="mt-1 flex items-center gap-2">
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{videoInfo.platform}</span>
                                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                                    <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">High Quality</span>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center gap-5 transition-all hover:bg-white/[0.05] hover:border-primary/20 group">
                                <div className="flex flex-col items-center">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-3xl font-black text-white tracking-tight">{videoInfo.formats[0].resolution}</span>
                                        <span className="text-xs font-bold text-gray-500 uppercase">{videoInfo.formats[0].ext}</span>
                                    </div>
                                    {videoInfo.formats[0].filesize && (
                                        <span className="text-[10px] font-bold text-gray-400 bg-white/5 px-2 py-0.5 rounded-md">
                                            {(videoInfo.formats[0].filesize / 1048576).toFixed(1)} MB
                                        </span>
                                    )}
                                </div>
                                
                                <Button 
                                    size="lg" 
                                    onClick={handleDownload}
                                    className="w-full rounded-xl font-bold px-6 py-4 h-auto shadow-lg shadow-primary/10 hover:scale-[1.01] active:scale-95 transition-all bg-primary hover:bg-primary/90 text-black" 
                                    suppressHydrationWarning
                                >
                                    <Download className="h-5 w-5 mr-text mr-2" /> Download Video
                                </Button>
                                
                                {isIOS ? (
                                    <p className="text-[10px] text-primary/70 font-bold uppercase tracking-wider animate-pulse">
                                        Tap Download • Then check your Files app
                                    </p>
                                ) : (
                                    <p className="text-[10px] text-gray-500 font-medium">
                                        Full quality extraction • Original source format
                                    </p>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 rounded-3xl bg-amber-500/5 border border-amber-500/10 text-amber-200/70 flex flex-col items-center justify-center text-center shadow-xl shadow-amber-900/5 animate-in fade-in zoom-in duration-300">
                            <div className="bg-amber-500/10 p-3 rounded-2xl mb-4">
                                <AlertCircle className="h-8 w-8 text-amber-500" />
                            </div>
                            <h3 className="font-bold text-lg text-amber-500 mb-2 tracking-tight">No Video Found</h3>
                            <p className="text-xs font-medium leading-relaxed max-w-[200px] mx-auto opacity-80 italic">
                                This link might point to a photo, a text post, or a private profile. We only support public video content.
                            </p>
                        </div>
                    )}
                </div>
            </div>
      )}

      {/* How It Works - numbered for Google rich-snippet eligibility */}
      <div className="mt-32 w-full max-w-5xl">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How to Download Videos in 3 Steps</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Save any public video from TikTok, Instagram, Facebook, or X to your device in seconds — no login, no software install.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "1. Copy the Video Link", desc: "Open the TikTok, Instagram Reel, Facebook, or X post and tap Share → Copy Link to grab the URL." },
                  { title: "2. Paste URL Above", desc: "Drop the copied link into the search box at the top of this page. Downifi auto-detects the platform." },
                  { title: "3. Download in HD", desc: "Hit Download to save the video as an MP4 file in up to 1080p — completely free and watermark-free." }
              ].map((step, i) => (
                  <div key={i} className="p-8 rounded-2xl glass-effect border-white/5 hover:-translate-y-2 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-3 gradient-text">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Platform-Specific Section - targets [platform] downloader long-tail keywords */}
      <div className="mt-32 w-full max-w-5xl">
          <div className="text-center mb-16 px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Supported Platforms</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-10"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                One tool, every major social network. Downifi works as a dedicated <strong className="text-white">TikTok video downloader</strong>, <strong className="text-white">Instagram Reels saver</strong>, <strong className="text-white">Facebook video grabber</strong>, and <strong className="text-white">Twitter/X downloader</strong> — all in a single page.
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
      <div className="mt-32 w-full max-w-5xl">
          <div className="text-center mb-16 px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Downifi Is the Best Free Video Downloader</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-10"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Downifi is the web's fastest tool for saving high-resolution videos from TikTok, Instagram, Twitter (X), and Facebook. Built for speed, privacy, and maximum video quality — with zero ads on download pages.
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
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

      {/* FAQ Section for SEO */}
      <div className="mt-32 w-full max-w-4xl mb-10">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
              <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Is Downifi free to use?</h3>
                  <p className="text-gray-400">Yes, Downifi is 100% free. There are no daily download caps, no hidden fees, and no registration required. Save as many TikTok, Instagram, Facebook, and X videos as you want.</p>
              </div>

              <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">How do I download a TikTok video without a watermark?</h3>
                  <p className="text-gray-400">Open the TikTok app or website, tap <strong>Share</strong> on the video, then <strong>Copy Link</strong>. Paste the link into the box at the top of this page and hit Download — Downifi automatically returns the clean, watermark-free MP4 version.</p>
              </div>

              <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Can I save Instagram Reels to my iPhone or Android?</h3>
                  <p className="text-gray-400">Yes. Downifi works in Safari on iPhone and Chrome on Android with no app install. Copy the Reel link from Instagram (tap the paper-plane icon → Copy Link), paste it here, and the MP4 will save straight to your Photos or Downloads folder.</p>
              </div>

              <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Does Downifi store my videos or downloaded links?</h3>
                  <p className="text-gray-400">No. Downifi does not host, cache, or log any videos. We act as a lightweight bridge between the social platform's CDN and your browser. Nothing is saved on our servers after the download completes.</p>
              </div>

              <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Which platforms does Downifi support?</h3>
                  <p className="text-gray-400">We currently support high-speed downloads for <strong>TikTok</strong> (no watermark), <strong>Instagram</strong> (Reels, feed videos, IGTV), <strong>Facebook</strong> (HD videos and Reels), and <strong>Twitter / X</strong> (videos and GIFs). More platforms such as YouTube Shorts and LinkedIn videos are on the roadmap.</p>
              </div>

              <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Do I need to install an app or create an account?</h3>
                  <p className="text-gray-400">Neither. Downifi runs entirely in your browser — no app install, no signup, no social login. Just paste a public video URL and download. No APK files or Chrome extensions required.</p>
              </div>

              <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">What is the maximum video quality I can download?</h3>
                  <p className="text-gray-400">Downifi always fetches the highest resolution the source platform makes available — typically 1080p Full HD for TikTok and Instagram, and up to 4K for Facebook videos when the uploader provides that quality. You always get the original bitrate, never a re-encoded copy.</p>
              </div>

              <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Why isn't my video link working?</h3>
                  <p className="text-gray-400">The most common reasons: the post is private, the account is restricted, the link points to a photo rather than a video, or the URL was copied incompletely. Make sure the video is publicly viewable and that the link starts with <code className="text-primary">https://</code>.</p>
              </div>

              <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Is it legal to download social media videos?</h3>
                  <p className="text-gray-400">Downloading publicly available videos for personal, offline viewing is generally permitted under fair use. However, you must not redistribute, monetize, or re-upload copyrighted content without the original creator's written permission. When in doubt, credit the creator and ask first.</p>
              </div>

              <div className="p-8 rounded-3xl glass-effect border border-red-500/20 bg-red-500/5 mt-8">
                  <h3 className="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" /> Terms of Service & Legal Disclaimer
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    By using Downifi, you agree to only download content for personal use or content for which you have explicit permission from the copyright owner. Downifi does not host any media files on its servers and acts solely as an indexing tool to locate original file paths. Downloading copyrighted material without permission is against our terms and may violate the law.
                  </p>
              </div>
          </div>
      </div>
      {/* Download Overlay Loader */}
      <AnimatePresence>
        {isDownloading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
              {/* Premium Loader Illustration */}
              <div className="relative mb-12">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-150 animate-pulse"
                  ></motion.div>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative glass-effect p-12 md:p-16 rounded-[40px] border-white/10 shadow-2xl"
                  >
                      <div className="relative">
                          <Loader2 className="h-20 w-20 md:h-24 md:w-24 text-primary animate-spin" />
                          <div className="absolute inset-0 flex items-center justify-center">
                              <Download className="h-8 w-8 text-white/40 animate-bounce" />
                          </div>
                      </div>
                  </motion.div>

                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 -right-4 bg-primary text-black font-black text-xs px-4 py-2 rounded-full shadow-xl shadow-primary/20 rotate-12"
                  >
                    HD
                  </motion.div>
              </div>

              {/* Main Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                  <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                    Preparing Your <span className="gradient-text">High-Quality</span> File
                  </h2>
                  
                  <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed font-medium">
                    Fetching direct MP4 stream for <br/>
                    <span className="text-white bg-white/5 border border-white/10 px-3 py-1 rounded-lg mt-2 inline-block shadow-sm text-base md:text-lg">
                       "{videoInfo?.title?.length > 50 ? videoInfo.title.substring(0, 50) + '...' : videoInfo?.title || 'video'}"
                    </span>
                  </p>
              </motion.div>

              <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4 px-8 py-4 rounded-3xl bg-white/[0.03] border border-white/5 text-gray-400 font-bold tracking-wide shadow-inner text-sm">
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
                    </div>
                    {isLongDownload ? "Finalizing HD Streams..." : "Connecting to Secure CDN"}
                  </div>
                  
                  {isLongDownload && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-primary/70 font-bold uppercase tracking-widest animate-pulse"
                    >
                      Almost there • High quality merging takes a moment
                    </motion.p>
                  )}
                  
                  <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]">
                    Safe • Fast • Original Quality
                  </p>
              </div>

              {/* Info Notice */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 p-6 rounded-[32px] bg-white/[0.02] border border-white/5 max-w-lg relative overflow-hidden group"
              >
                <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                        <Info className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left text-xs md:text-sm">
                        <p className="text-gray-500 leading-relaxed font-medium">
                            To provide the highest quality, we fetch and merge secure video streams in real-time. This ensures the file is natively compatible with your device.
                        </p>
                    </div>
                </div>
              </motion.div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsDownloading(false)}
                className="mt-8 text-gray-500 hover:text-white"
              >
                Close Loader
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
