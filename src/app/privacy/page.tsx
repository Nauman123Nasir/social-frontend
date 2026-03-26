import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Social Video Downloader',
  description: 'Privacy Policy for Social Video Downloader.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="prose prose-invert lg:prose-xl space-y-6 text-gray-300">
        <p>
          At Social Video Downloader, accessible from our website, one of our main priorities is the 
          privacy of our visitors. This Privacy Policy document contains types of information that is 
          collected and recorded by us and how we use it.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Log Files</h2>
        <p>
          Social Video Downloader follows a standard procedure of using log files. These files log 
          visitors when they visit websites. The information collected by log files include internet 
          protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, 
          referring/exit pages, and possibly the number of clicks.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Cookies and Web Beacons</h2>
        <p>
          Like any other website, Social Video Downloader uses "cookies". These cookies are used to 
          store information including visitors' preferences, and the pages on the website that the 
          visitor accessed or visited. The information is used to optimize the users' experience by 
          customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Advertising Partners Privacy Policies</h2>
        <p>
          Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons 
          that are used in their respective advertisements and links that appear on Social Video Downloader, 
          which are sent directly to users' browser. They automatically receive your IP address when this 
          occurs.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}
