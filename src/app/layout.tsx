import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Downifi | Social Video Downloader",
  description: "Download videos from Facebook, Instagram, and Twitter for free in HD quality using Downifi.",
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
                    <div className="font-bold text-2xl tracking-tighter gradient-text">Downifi</div>

                    <nav className="space-x-4 flex items-center text-sm hidden md:flex">
                        <a href="/about" className="hover:text-primary transition">About</a>
                        <a href="/blog" className="hover:text-primary transition">Blog</a>
                        <a href="/contact" className="hover:text-primary transition">Contact</a>
                    </nav>
                </div>
            </header>
            
            <main className="flex-1 gradient-bg">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black pt-16 pb-12 mt-auto">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col items-center text-center space-y-8">
                        {/* SEO Heading */}
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                Best Social Video Downloader Online
                            </h2>
                            <p className="text-sm text-gray-500 max-w-xl mx-auto italic">
                                Fast, secure, and compatible with all major social media platforms. Enjoy high-quality downloads on any device.
                            </p>
                        </div>

                        {/* Core Disclaimer (Hosting) */}
                        <div className="max-w-3xl text-xs text-gray-500 leading-relaxed space-y-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <p>
                                <strong className="text-gray-400">Disclaimer:</strong> Downifi does not host any videos or copyrighted content on its servers. All videos that you extract and download are served directly from the social media platform's own CDNs. Our tool acts as a simple intermediary to help you find and save content for offline viewing.
                            </p>
                            <p>
                                Downifi is a Social Media Services website and is NOT associated by any means with Facebook, Meta Platforms, Inc., Instagram, or Twitter/X. All social media brand assets and trademarks are the property of their respective owners.
                            </p>
                        </div>

                        {/* Link Grid */}
                        <div className="flex flex-col items-center space-y-6 w-full">
                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
                                <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
                                <a href="/blog" className="text-blue-400 hover:text-blue-300 font-semibold transition">How to Download</a>
                                <a href="/about" className="text-gray-400 hover:text-white transition">About Us</a>

                                <a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a>
                                <a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                                <a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a>
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-600">
                                <a href="/disclaimer" className="hover:text-gray-400 transition">Legal Disclaimer</a>
                                <a href="/dmca" className="hover:text-gray-400 transition">DMCA Compliance</a>
                                <a href="/cookie-policy" className="hover:text-gray-400 transition">Cookie Settings</a>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="pt-8 border-t border-white/5 w-full">
                            <p className="text-xs text-gray-600 font-medium">
                                &copy; {new Date().getFullYear()} Downifi. Developed for the community. Use responsibly.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            <CookieConsent />
        </div>
      </body>
    </html>
  );
}
