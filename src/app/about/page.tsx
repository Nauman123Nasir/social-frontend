import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Social Video Downloader',
  description: 'Learn more about Social Video Downloader, your free tool for downloading videos from TikTok, Instagram, Twitter, and more.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">About Social Video Downloader</h1>
      
      <div className="prose prose-invert lg:prose-xl space-y-6 text-gray-300">
        <p>
          Welcome to Social Video Downloader, the premier web tool designed to make saving your favorite 
          social media content as seamless as possible. Our mission is to provide a fast, reliable, 
          and free service that empowers users to keep the videos they love, right on their devices.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Universal Compatibility:</strong> Whether it's a funny TikTok, an inspiring Instagram Reel, or a newsworthy Twitter clip, we support it all.</li>
          <li><strong>High Quality:</strong> We extract the highest possible resolution available so you never compromise on quality.</li>
          <li><strong>No Watermarks:</strong> Keep the aesthetic clean. Our tool downloads the raw video file without intrusive logos.</li>
          <li><strong>Lightning Fast:</strong> No waiting in queues. Just paste the link and get your download options instantly.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Our Commitment</h2>
        <p>
          We are committed to maintaining a user-friendly experience without the clutter. While we may 
          display unobtrusive advertisements to keep the service running, our primary focus is 
          always on the smooth operation of the downloader tool itself.
        </p>

        <div className="mt-16 p-8 rounded-2xl glass-effect text-center border-primary/20">
          <h3 className="text-xl font-bold mb-4 text-white">Ready to start downloading?</h3>
          <p className="mb-6">Head back to the homepage and paste your first link.</p>
          <a href="/" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors">
            Go to Downloader
          </a>
        </div>
      </div>
    </div>
  );
}
