"use client"

import { useState, useRef, useEffect } from "react"
import { Download, Link as LinkIcon, Loader2, PlayCircle, AlertCircle, Instagram, Facebook, Twitter, Clipboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [videoInfo, setVideoInfo] = useState<any>(null)
  const [showPasteButton, setShowPasteButton] = useState(false)
  const [clipboardText, setClipboardText] = useState("")
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (videoInfo && resultsRef.current) {
      // Add a tiny delay to ensure the DOM is fully painted before scrolling
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [videoInfo])

  const validateUrl = (text: string) => {
    const socialPatterns = [/instagram\.com/, /facebook\.com/, /twitter\.com/, /x\.com/, /fb\.watch/];
    return socialPatterns.some(pattern => pattern.test(text.toLowerCase()));
  }

  const checkClipboard = async () => {
    try {
      if (!navigator.clipboard || !navigator.clipboard.readText) return;
      
      // We only want to check if the input is currently empty
      if (url) {
        setShowPasteButton(false);
        return;
      }

      const text = await navigator.clipboard.readText();
      if (text && validateUrl(text)) {
        setClipboardText(text);
        setShowPasteButton(true);
      } else {
        setShowPasteButton(false);
      }
    } catch (err) {
      // Clipboard access might be denied
      setShowPasteButton(false);
    }
  }

  useEffect(() => {
    // Check clipboard on focus and mount
    const handleFocus = () => checkClipboard();
    window.addEventListener('focus', handleFocus);
    checkClipboard();

    return () => window.removeEventListener('focus', handleFocus);
  }, [url]);

  const handlePaste = () => {
    setUrl(clipboardText);
    setShowPasteButton(false);
  }

  const handleExtract = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    setIsLoading(true)
    setError("")
    setVideoInfo(null)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await axios.post(`${apiUrl}/api/info`, { url });
      setVideoInfo(response.data)
    } catch (err: any) {
      setError(err.response?.data?.detail || "Failed to extract video info. Please try again.")
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
          The fastest way to save high-quality videos from Instagram, Twitter, and Facebook. No watermarks, completely free.
        </p>
      </div>

      {/* Main Input Area */}
      <div className="w-full max-w-2xl p-6 rounded-2xl glass-effect shadow-2xl relative z-10 transition-all duration-300 hover:shadow-primary/20">
        <form onSubmit={handleExtract} className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              type="url"
              placeholder="Paste social media video link here..."
              className="pl-10 pr-32 h-14 text-lg bg-black/50 border-white/20 focus:border-primary/50 text-white rounded-xl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <AnimatePresence>
              {showPasteButton && !url && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.95 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <Button 
                    type="button"
                    onClick={handlePaste}
                    variant="ghost"
                    size="sm"
                    className="h-10 px-3 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/20 rounded-lg font-bold text-xs"
                  >
                    <Clipboard className="h-3.5 w-3.5 mr-1.5" />
                    Paste Link
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Button 
            type="submit" 
            className="h-14 px-8 text-lg font-bold rounded-xl bg-primary hover:bg-primary/80 transition-all duration-200"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <Download className="h-5 w-5 mr-2" />}
            {isLoading ? "Processing..." : "Download"}
          </Button>
        </form>

        {/* Error State */}
        {error && (
            <div className="mt-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-sm">{error}</p>
            </div>
        )}
      </div>

      {/* Platform Icons */}
      <div className="mt-16 flex items-center gap-6 justify-center flex-wrap">
        {[
          { name: 'Instagram', icon: Instagram, color: 'text-pink-500', bg: 'bg-pink-500/10' },
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

            {/* Formats */}
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-4 line-clamp-2 text-white/90">{videoInfo.title}</h2>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 self-start">
                    {videoInfo.platform}
                </div>
                
                <h3 className="font-semibold text-gray-400 mb-3 text-sm uppercase tracking-wider">Available Formats</h3>
                <div className="space-y-3 flex-1 overflow-y-auto pr-2 max-h-[300px] custom-scrollbar">
                    {/* Filter out messy resolutions, keeping logic simple for demo */}
                    {videoInfo.formats.slice(0, 5).map((format: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between p-4 rounded-xl glass-effect hover:bg-white/5 border border-white/5 transition-colors">
                            <div className="flex flex-col">
                                <span className="font-bold text-lg">{format.resolution}</span>
                                <span className="text-xs text-gray-500 uppercase">{format.ext}</span>
                            </div>
                            <Button size="sm" asChild className="rounded-lg font-semibold shadow-lg shadow-primary/20">
                                <a href={`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/download?url=${encodeURIComponent(format.url)}&title=${encodeURIComponent(videoInfo.title || 'video')}&ext=${encodeURIComponent(format.ext || 'mp4')}`} download>
                                    <Download className="h-4 w-4 mr-2" /> Download
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>
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
                  { title: "3. Download", desc: "Choose your preferred quality format and save the video directly." }
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
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Downloader?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-8"></div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Social Video Downloader is the ultimate tool for saving your favorite moments from social media. Our platform is built for speed, quality, and ease of use.
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
                  <h3 className="text-2xl font-bold text-white">No Watermarks</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We understand how annoying platform watermarks can be. Whenever possible through the API, our downloader retrieves the raw, watermark-free version of the video. This makes it perfect for content creators, meme pages, and personal archives where pristine video files are preferred.
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
      <div className="mt-32 w-full max-w-4xl mb-20">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
              <div className="p-6 rounded-2xl glass-effect border-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">Is Social Video Downloader free to use?</h3>
                  <p className="text-gray-400">Yes, our video downloader is 100% free to use. There are no hidden fees, subscription models, or premium tiers. You can download as many videos as you like without spending a dime.</p>
              </div>
              
              <div className="p-6 rounded-2xl glass-effect border-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">Do you keep a copy of the downloaded videos?</h3>
                  <p className="text-gray-400">No, we do not store or host any of the videos you download on our servers. Our tool simply acts as an intermediary, providing a direct download link from the original platform's servers directly to your device. This ensures your privacy and adheres to copyright policies.</p>
              </div>
              
              <div className="p-6 rounded-2xl glass-effect border-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">Which platforms are supported?</h3>
                  <p className="text-gray-400">Currently, our primary support includes Instagram (Reels, IGTV, Posts), Twitter/X (Videos and GIFs), and Facebook (Public Video Posts). We are constantly working on updates to support more networks in the future.</p>
              </div>

               <div className="p-6 rounded-2xl glass-effect border-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">Is it legal to download videos?</h3>
                  <p className="text-gray-400">Downloading publicly available videos for personal, offline viewing is generally acceptable. However, reproducing, distributing, or monetizing copyrighted content without the explicit permission of the creator is strictly prohibited. Please respect the intellectual property rights of the content owners.</p>
              </div>
          </div>
      </div>
    </div>
  )
}
