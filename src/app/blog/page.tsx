import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { posts } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: 'Social Video Downloader Guides & Tutorials | Downifi Blog',
  description: 'Step-by-step tutorials for downloading TikTok, Instagram, Facebook, and Twitter (X) videos in HD. Device-specific guides for iPhone, Android, PC & Mac — by Downifi.',
  keywords: [
    'social video downloader guides',
    'how to download tiktok videos',
    'how to save instagram reels',
    'how to download facebook videos',
    'twitter video downloader tutorial',
  ],
  alternates: { canonical: 'https://downifi.com/blog' },
  openGraph: {
    title: 'Social Video Downloader Guides & Tutorials | Downifi Blog',
    description: 'Step-by-step tutorials for saving HD social media videos from TikTok, Instagram, Facebook, and X.',
    url: 'https://downifi.com/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className="w-full flex flex-col pb-24">
      {/* Hero Banner Section */}
      <section className="w-full relative py-32 px-4 flex flex-col items-center text-center overflow-hidden mb-20 border-b border-white/5 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/blog-banner.png" 
            alt="Downifi Blog Tech Banner" 
            fill 
            className="object-cover opacity-60 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a14]/30 to-[#0a0a14]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Knowledge Base</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 gradient-text leading-tight pb-2 drop-shadow-lg">
            Master the <span className="text-white">Download</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed shadow-sm">
            Expert guides, security tips, and the fastest workflows for archiving your favorite content from across the social web.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/blog/${post.slug}`}
            className="group relative p-8 rounded-3xl glass-effect border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
              <ArrowRight className="h-24 w-24 -rotate-45" />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="text-sm font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {post.date}
              </div>
              <div className="flex items-center text-xs text-gray-500 font-medium uppercase tracking-widest">
                <Clock className="mr-2 h-3.5 w-3.5" />
                {post.readTime}
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors leading-snug">
              {post.title.replace(/\s*\|\s*Downifi.*$/, "")}
            </h2>
            
            <p className="text-gray-400 mb-8 flex-1 leading-relaxed text-lg line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center text-primary font-bold group-hover:gap-3 transition-all">
              Read Full Guide <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
     </div>
    </div>
  );
}
