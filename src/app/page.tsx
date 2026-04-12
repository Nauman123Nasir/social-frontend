"use client"

import { useState, useRef, useEffect } from "react"
import { Download, Link as LinkIcon, Loader2, PlayCircle, AlertCircle, Instagram, Facebook, Twitter, Clipboard, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [url, setUrl] = useState("")
  const [extractedUrl, setExtractedUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [videoInfo, setVideoInfo] = useState<any>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const resetInputScroll = () => {
    // A tiny timeout allows the browser to finish its native paste/render cycle first
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollLeft = 0;
        inputRef.current.setSelectionRange(0, 0);
      }
    }, 10);
  }

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

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center">
      
      {/* Hero Content */}
      <div className="text-center max-w-3xl mb-12 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Download Any <span className="gradient-text">Video</span> Instantly
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          The fastest way to save high-quality videos from Instagram, Twitter, Facebook, and TikTok. No watermarks, completely free.
        </p>
      </div>

      {/* Main Input Area */}
      <div className="w-full max-w-2xl p-6 rounded-2xl glass-effect shadow-2xl relative z-10 transition-all duration-300 hover:shadow-primary/20">
        
        {/* External Paste Button (Moved Above) */}
        <AnimatePresence>
          {!url && (
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
          <Button 
            type="submit" 
            className="h-14 px-8 text-lg font-bold rounded-xl bg-primary hover:bg-primary/80 transition-all duration-200"
            disabled={isLoading}
            suppressHydrationWarning
          >
            {isLoading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <Download className="h-5 w-5 mr-2" />}
            {isLoading ? "Processing..." : "Download"}
          </Button>
        </form>



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
          { name: 'Twitter', icon: Twitter, color: 'text-sky-400', bg: 'bg-sky-400/10' }
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
            <div className="rounded-2xl overflow-hidden glass-effect border-white/10 relative aspect-video group">
                {videoInfo.thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                        src={videoInfo.thumbnail} 
                        alt={videoInfo.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <PlayCircle className="h-16 w-16 text-gray-600" />
                    </div>
                )}
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
                                
                                <Button size="lg" asChild className="w-full rounded-xl font-bold px-6 py-4 h-auto shadow-lg shadow-primary/10 hover:scale-[1.01] active:scale-95 transition-all bg-primary hover:bg-primary/90 text-black" suppressHydrationWarning>
                                    <a 
                                        href={`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/download?url=${encodeURIComponent(videoInfo.formats[0].url)}&title=${encodeURIComponent((videoInfo.title || 'video').replace(/\s+/g, '_'))}&ext=${encodeURIComponent(videoInfo.formats[0].ext || 'mp4')}&needs_merging=${videoInfo.formats[0].needs_merging || false}&original_url=${encodeURIComponent(extractedUrl)}`} 
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Download className="h-5 w-5 mr-2" /> Download Video
                                    </a>
                                </Button>
                                
                                <p className="text-[10px] text-gray-500 font-medium">
                                    Full quality extraction • No watermarks
                                </p>
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

      {/* Feature Section / Placeholder for Ads */}
      <div className="mt-32 w-full max-w-5xl">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How it works</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "1. Copy Link", desc: "Find the video you want to download and copy its share URL." },
                  { title: "2. Paste URL", desc: "Paste the copied link into the input box at the top of this page." },
                  { title: "3. Download", desc: "Click download and save the high-quality video directly to your device." }
              ].map((step, i) => (
                  <div key={i} className="p-8 rounded-2xl glass-effect border-white/5 hover:-translate-y-2 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-3 gradient-text">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Detailed Features Section for SEO & Readability */}
      <div className="mt-32 w-full max-w-5xl">
          <div className="text-center mb-16 px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">World Class Social Video Downloader</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-10"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Downifi is the web's most reliable tool for saving high-resolution videos from TikTok, Instagram, Twitter (X), and Facebook. Our platform is engineered for speed, privacy, and maximum video quality.
              </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">High Definition Quality</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We ensure that every video you download retains its original quality. Whether it's 1080p, 4K, or standard definition, our algorithm extracts the highest available resolution from the source platforms like Instagram, Twitter, and Facebook. Say goodbye to pixelated downloads and experience crystal-clear offline viewing.
                  </p>
              </div>
              <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Fast, Free, and Unlimited</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Unlike other web utility tools, we don't put a cap on your downloads. Enjoy unlimited high-speed fetching without ever needing to pull out a credit card or register an account. Our servers are optimized to fetch video metadata and download links in mere seconds, ensuring a seamless user experience every time.
                  </p>
              </div>
              <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">No Watermarks (TikTok & Reels)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We understand how annoying platform watermarks can be when trying to save a memory. Downifi specializes in retrieving the raw, watermark-free version of TikTok videos and Instagram Reels whenever possible, providing you with pristine MP4 files for your personal archive.
                  </p>
              </div>
               <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Cross-Platform Compatibility</h3>
                  <p className="text-gray-400 leading-relaxed">
                    This is a web-based utility, which means it works effortlessly on any device. Whether you are using an iPhone, an Android smartphone, a Windows PC, or a Mac, all you need is a web browser. There is no software to install, mitigating the risk of malware and saving your device's storage space.
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
                  <p className="text-gray-400">Yes, our tool is 100% free with no registration required. Download as many videos as you want from TikTok, Instagram, and more without hidden fees.</p>
              </div>
              
              <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Does Downifi save a copy of my videos?</h3>
                  <p className="text-gray-400">Absolutely not. We prioritize your privacy. Downifi does not host or store any videos. It simply processes your request and provides a direct link from the platform servers to your device storage.</p>
              </div>
              
              <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Which platforms are supported for downloads?</h3>
                  <p className="text-gray-400">We currently support high-speed downloads for <strong>TikTok</strong> (No Watermark), <strong>Instagram</strong> (Reels & Video), <strong>Twitter (X)</strong>, and <strong>Facebook</strong>. More platforms are added regularly.</p>
              </div>

               <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Is it legal to download social media videos?</h3>
                  <p className="text-gray-400">Downloading publicly available content for personal offline viewing is generally permitted. However, you must not use these files for commercial purposes or distribution without the original creator's permission.</p>
              </div>
          </div>
      </div>
    </div>
  )
}
