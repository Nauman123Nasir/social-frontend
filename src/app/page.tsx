"use client"

import { useState } from "react"
import { Download, Link as LinkIcon, Loader2, PlayCircle, AlertCircle, Instagram, Youtube, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { motion } from "framer-motion"

export default function Home() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [videoInfo, setVideoInfo] = useState<any>(null)

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
          The fastest way to save high-quality videos from Instagram, YouTube, Twitter, and Facebook. No watermarks, completely free.
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
              className="pl-10 h-14 text-lg bg-black/50 border-white/20 focus:border-primary/50 text-white rounded-xl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
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
          { name: 'YouTube', icon: Youtube, color: 'text-red-500', bg: 'bg-red-500/10' },
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
        <div className="mt-16 w-full max-w-4xl grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
                                <a href={format.url} target="_blank" rel="noopener noreferrer" download>
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
    </div>
  )
}
