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

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-blue-400 hover:text-blue-300">https://policies.google.com/technologies/ads</a>
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>
          Under the CCPA, among other rights, California consumers have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
          <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
          <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
        </ul>
        <p className="mt-4">
          If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">GDPR Data Protection Rights</h2>
        <p>
          We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>The right to access</strong> – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
          <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
          <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
          <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
          <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
          <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        <p className="mt-4">
          If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}
