import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import SoftwareSchema from "../components/SoftwareSchema";
import BrandSchema from "../components/BrandSchema";
import CookieConsent from "../components/CookieConsent";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Downifi | Free Social Video Downloader (No Watermark)",
  description: "Download high-quality videos from Instagram, TikTok, Facebook, and Twitter (X) for free. Fast, secure, and no watermark required.",
  metadataBase: new URL("https://downifi.com"),
  applicationName: "Downifi",
  authors: [{ name: "Downifi", url: "https://downifi.com" }],
  creator: "Downifi",
  publisher: "Downifi",
  keywords: [
    "social video downloader",
    "free video downloader",
    "tiktok downloader",
    "tiktok downloader no watermark",
    "instagram video downloader",
    "instagram reels downloader",
    "facebook video downloader",
    "twitter video downloader",
    "x video downloader",
    "download tiktok video",
    "save instagram reel",
    "hd video downloader",
    "mp4 downloader online",
    "no watermark",
  ],
  category: "Multimedia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Downifi | Free Social Video Downloader",
    description: "The fastest way to save high-quality videos from Instagram, TikTok, Facebook, and X. Completely free, no watermarks.",
    url: "https://downifi.com",
    siteName: "Downifi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Downifi Social Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Downifi | Free Social Video Downloader",
    description: "Save videos from Instagram, TikTok, and more in HD quality instantly.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/fav-icon.jpeg",
    apple: "/fav-icon.jpeg",
  },
  verification: {
    google: "14hHg6jvoTVMC-e71S4kzuqIUgpr-KWOABeEa4NENbU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SoftwareSchema />
        <BrandSchema />
      </head>
      <body className={inter.className}>
        {/* Google Analytics Tracking */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        
        <div className="min-h-screen flex flex-col">
            {/* Mobile-Responsive Header */}
            <Header />
            
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
                        <div className="flex flex-col items-center space-y-8 w-full mt-6">
                            {/* Primary Tools Navigation */}
                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold">
                                <a href="/tiktok-video-downloader" className="text-gray-300 hover:text-white transition">TikTok Downloader</a>
                                <a href="/instagram-reels-downloader" className="text-gray-300 hover:text-white transition">Instagram Reels Downloader</a>
                                <a href="/facebook-video-downloader" className="text-gray-300 hover:text-white transition">Facebook Video Downloader</a>
                                <a href="/twitter-video-downloader" className="text-gray-300 hover:text-white transition">Twitter (X) Downloader</a>
                            </div>

                            {/* Secondary Navigation */}
                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
                                <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
                                <a href="/blog" className="text-blue-400 hover:text-blue-300 font-semibold transition">Blog & Guides</a>
                                <a href="/about" className="text-gray-400 hover:text-white transition">About Us</a>
                                <a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a>
                                <a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                                <a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a>
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-600">
                                <a href="/disclaimer" className="hover:text-gray-400 transition">Legal Disclaimer</a>
                                <a href="/dmca" className="hover:text-gray-400 transition">DMCA Compliance</a>
                                <a href="/cookie-policy" className="hover:text-gray-400 transition">Cookie Settings</a>
                                <a href="/privacy#ccpa" className="hover:text-gray-400 transition">Do Not Sell My Personal Information</a>
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
