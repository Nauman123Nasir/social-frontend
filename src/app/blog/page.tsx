import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Social Video Downloader Tips',
  description: 'Tips, tricks, and guides on how to download and save social media videos from any platform.',
};

// Mock data for blog posts (essential for SEO)
const posts = [
  {
    id: 1,
    title: "How to Download Facebook Videos in HD",
    excerpt: "A complete guide on saving Facebook videos to your camera roll easily, securely, and completely free.",
    date: "March 10, 2026",
    slug: "download-facebook-hd-videos"
  },
  {
    id: 2,
    title: "Saving Instagram Reels to Your Phone in 3 Steps",
    excerpt: "Found a recipe or workout you want to keep? Here is how to legally save Instagram Reels for offline viewing.",
    date: "Feb 28, 2026",
    slug: "save-instagram-reels"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Archiving Twitter Videos",
    excerpt: "Twitter moves fast. Learn how to archive important video clips from X (formerly Twitter) before they get deleted.",
    date: "Feb 15, 2026",
    slug: "archive-twitter-videos"
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-8 gradient-text leading-tight pb-2">Video Downloading Tips</h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Learn the best ways to manage, convert, and save content from all your favorite social media platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group p-6 rounded-2xl glass-effect border-white/5 hover:border-primary/50 transition-colors flex flex-col">
            <div className="text-sm text-primary mb-3 font-semibold">{post.date}</div>
            <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-400 mb-6 flex-1 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center text-white/80 font-medium group-hover:text-white mt-auto">
              Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
