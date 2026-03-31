import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - Social Video Downloader',
  description: 'Detailed Cookie Policy regarding tracking and usage.',
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Cookie Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="prose prose-invert lg:prose-xl space-y-6 text-gray-300">
        <p>
          This Cookie Policy explains what cookies are and how we use them on Social Video Downloader. You should read this policy so you can understand what type of cookies we use, the information we collect using cookies, and how that information is used.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">What Are Cookies?</h2>
        <p>
          Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
        </p>
        <p>
          Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">How Do We Use Cookies?</h2>
        <p>
          When you use and access the Service, we may place a number of cookies files in your web browser.
          We use cookies for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
          <li><strong>Essential Cookies:</strong> We may use essential cookies to authenticate users and prevent fraudulent use of user accounts. For this website, this mainly pertains to remembering your cookie consent choice.</li>
          <li><strong>Advertising Cookies:</strong> We partner with third-party tracking and advertising networks (like Google AdSense). These networks use cookies to track your browsing habits, enabling them to show targeted ads which are more relevant to you and your interests.</li>
          <li><strong>Google DoubleClick DART Cookie:</strong> Google, as a third-party vendor, uses cookies to serve ads on our Service. Google's use of the DART cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet. </li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">What Are Your Choices Regarding Cookies?</h2>
        <p>
          If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
        </p>
        <p>
          Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
        </p>

        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
          <li>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Google Chrome Help</a></li>
          <li>For the Safari web browser, please visit this page from Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Apple Safari Help</a></li>
        </ul>
        
        <p className="mt-4">
          You may also opt out of the use of the DART cookie by visiting the Google ad and content network Privacy Policy at: <a href="http://www.google.com/privacy_ads.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Google Ad Privacy</a>
        </p>
      </div>
    </div>
  );
}
