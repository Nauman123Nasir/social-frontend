import { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Zap, Globe, Lock, Download, Users, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Downifi Social Video Downloader',
  description: 'Learn about Downifi, the fastest and most secure tool for downloading high-quality videos from Instagram, TikTok, Twitter, and Facebook for free.',
  keywords: 'About Downifi, social video downloader team, TikTok downloader, Instagram downloader, secure video tool, fast downloader',
  openGraph: {
    title: 'About Us | Downifi',
    description: 'Empowering users to save their favorite digital moments securely and for free.',
    type: 'website',
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Banner Section */}
      <section className="w-full relative py-20 px-4 md:py-32 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about-banner.png" 
            alt="Downifi Abstract Tech Banner" 
            fill 
            className="object-cover opacity-60 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a14]/30 to-[#0a0a14]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Our Mission</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
            Empowering Your <br className="hidden md:block" />
            <span className="gradient-text">Digital Archive</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed shadow-sm">
            Downifi provides the fastest, safest, and most reliable bridge between fleeting social media moments and your permanent personal library.
          </p>
        </div>
      </section>

      {/* Stats/Credibility Section */}
      <section className="w-full max-w-5xl px-4 -mt-10 relative z-20 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { label: "Supported Platforms", value: "4+", icon: Globe },
            { label: "Active Users", value: "1k+", icon: Users },
            { label: "Uptime", value: "99.9%", icon: Star }
          ].map((stat, idx) => (
            <div key={idx} className="glass-effect rounded-2xl p-6 flex flex-col items-center text-center border-white/10 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-black/40">
              <stat.icon className="h-6 w-6 text-primary mb-3 opacity-80" />
              <span className="text-3xl font-black text-white mb-1 tracking-tighter">{stat.value}</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* The Story & SEO Content */}
      <section className="w-full max-w-4xl px-4 py-8 mb-24 space-y-16">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">The Downifi Story</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                In a digital age where countless hours of incredible content are uploaded every second, we realized something crucial was missing: a genuinely reliable, ad-light, and cross-platform way to save those videos for offline viewing. 
              </p>
              <p>
                Whether it is an educational thread on <strong>Twitter (X)</strong>, a hilarious <strong>TikTok</strong>, a memorable <strong>Instagram Reel</strong>, or a crucial clip from <strong>Facebook</strong>, content can vanish instantly. We built Downifi to ensure you never lose access to the media that matters most to you.
              </p>
            </div>
          </div>
          <div className="glass-effect p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
            <h3 className="text-xl font-bold text-white mb-4">Our Core Vision</h3>
            <p className="text-gray-300 relative z-10 font-medium">
              "To permanently bridge the gap between temporary social media feeds and your permanent personal media library—free of charge, and free of compromise."
            </p>
          </div>
        </div>

        {/* Why Downifi is the Best Tool */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">Built For Excellence</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We don't settle for "good enough". Our technology stack is designed to extract maximum resolution video instantly.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                By optimizing our backend scraping algorithms and using edge delivery grids, we eliminate buffering and queuing. Paste your URL, and the direct download begins in under a second.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
              <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">100% Secure & Safe</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                No software downloads, no sketchy extensions, and no browser plugins required. Because Downifi operates completely in your web browser, your device stays completely safe from malware.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
              <div className="bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                <Lock className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Privacy First</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We respect your data. We do not host your downloaded videos, nor do we track your download history. We act purely as a proxy to deliver content straight from the host site to your storage.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl px-4 mb-32">
        <div className="relative rounded-3xl overflow-hidden glass-effect border border-primary/20 p-12 text-center shadow-2xl shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Experience the Best Downloader</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Join millions of users who trust Downifi daily for saving their content offline. Grab a link from TikTok, Instagram, Twitter, or Facebook to get started.
            </p>
            <Link href="/" className="inline-flex items-center justify-center bg-primary text-black px-8 py-4 rounded-xl font-black text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
              <Download className="mr-2 h-5 w-5" />
              Start Downloading Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
