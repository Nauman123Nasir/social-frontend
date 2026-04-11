import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { posts } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: 'Blog - Social Video Downloading Guides & Tips',
  description: 'The ultimate collection of guides, tutorials, and tips on how to save high-quality social media videos from Instagram, TikTok, and more.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="text-center mb-20 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 gradient-text leading-tight pb-2">
          Master the <span className="text-white">Download</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Expert guides, security tips, and the fastest workflows for archiving your favorite content from across the social web.
        </p>
      </div>

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
              {post.title}
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
  );
}
