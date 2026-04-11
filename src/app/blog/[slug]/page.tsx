import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2, ChevronRight } from 'lucide-react';
import { posts } from '@/lib/blog-content';
import { Button } from '@/components/ui/button';

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Downifi Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Dynamic Hero Banner Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        {post.bannerImage ? (
          <img 
            src={post.bannerImage} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-60 transition-scale duration-700 hover:scale-105"
          />
        ) : (
          <div 
            className="w-full h-full opacity-40 animate-pulse-subtle"
            style={{ 
              background: `linear-gradient(135deg, ${post.themeColor}dd 0%, #000000 100%)` 
            }}
          />
        )}
        
        {/* Overlay Gradients for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent hidden md:block" />

        {/* Content over hero */}
        <div className="absolute bottom-0 left-0 w-full pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
             <Link href="/blog" className="inline-flex items-center text-white/60 hover:text-white mb-6 transition-colors group text-sm font-medium">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Guides & Tutorials
            </Link>
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/50 text-sm font-semibold uppercase tracking-wider">
               <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" style={{ color: post.themeColor }} />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" style={{ color: post.themeColor }} />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="relative">
          {/* Main Article Text */}
          <div className="relative z-10 glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <div 
              className="article-content 
                text-gray-300 text-lg md:text-xl leading-relaxed 
                [&_h2]:text-3xl [&_h2]:font-black [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:flex [&_h2]:items-center
                [&_h2]:bg-gradient-to-r [&_h2]:from-white [&_h2]:to-white/40 [&_h2]:bg-clip-text [&_h2]:text-transparent
                [&_h2]:before:content-[''] [&_h2]:before:w-1.5 [&_h2]:before:h-8 [&_h2]:before:bg-primary [&_h2]:before:mr-4 [&_h2]:before:rounded-full [&_h2]:before:inline-block [&_h2]:before:align-middle
                [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-4
                [&_p]:mb-6 [&_p]:opacity-90
                [&_strong]:font-bold
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-4 [&_ol]:mb-8 [&_ol]:text-gray-200
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-3 [&_ul]:mb-8 [&_ul]:text-gray-200
                [&_li]:pl-2
              "
              style={{ "--tw-accent": post.themeColor } as any}
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* Post Footer / CTA */}
            <div className="mt-20 pt-12 border-t border-white/10">
              <div className="bg-gradient-to-br from-white/[0.05] to-transparent p-8 md:p-12 rounded-[2rem] border border-white/10 text-center relative overflow-hidden group">
                <div 
                  className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-150"
                  style={{ backgroundColor: post.themeColor }}
                />
                
                <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">Stop waiting, start saving.</h2>
                <p className="text-white/60 mb-10 text-lg max-w-md mx-auto">
                  Experience the fastest, watermark-free downloads for TikTok, Instagram, and more.
                </p>
                <Link href="/">
                  <Button className="bg-white text-black hover:bg-gray-200 font-black px-10 h-14 rounded-2xl text-lg shadow-xl hover:scale-105 transition-all">
                    Launch Downloader <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Social Share Buttons (Static for now) */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white/30">Share this guide</span>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => (
                  <button key={i} className="h-12 w-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all">
                    <Share2 className="h-5 w-5 text-white/60" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
