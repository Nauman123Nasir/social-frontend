import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Video Downloader | Free HD Downloads",
  description: "Download videos from TikTok, Facebook, YouTube, Instagram, and Twitter for free in HD quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
            {/* Header placeholder */}
            <header className="border-b border-white/10 glass-effect sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl gradient-text">VDownloader</div>
                    <nav className="space-x-4 text-sm hidden md:block">
                        <a href="/about" className="hover:text-primary transition">About</a>
                        <a href="/blog" className="hover:text-primary transition">Blog</a>
                    </nav>
                </div>
            </header>
            
            <main className="flex-1 gradient-bg">
                {children}
            </main>

            {/* Footer placeholder */}
            <footer className="border-t border-white/10 bg-black py-8 mt-auto">
                <div className="container mx-auto px-4 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Social Video Downloader. All rights reserved.</p>
                    <div className="mt-2 space-x-4">
                        <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white transition">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
      </body>
    </html>
  );
}
