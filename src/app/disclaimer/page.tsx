import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - Social Video Downloader',
  description: 'Disclaimer and limit of liability for our services.',
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Disclaimer</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="prose prose-invert lg:prose-xl space-y-6 text-gray-300">
        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Website Disclaimer</h2>
        <p>
          The information provided by Social Video Downloader ("we," "us," or "our") on our website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>

        <p className="font-bold text-white mt-4">
          UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">External Links Disclaimer</h2>
        <p>
          The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
        </p>
        <p>
          WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Copyright Disclaimer</h2>
        <p>
          We do not host, store, or otherwise maintain any media (including video or audio files) on our servers whatsoever. Social Video Downloader acts purely as a conduit that parses URLs and enables users to connect directly to the original Content Delivery Networks (CDNs) of third parties. 
          Users hold all responsibility regarding the copyrighted status of the files they process through this service. Do not use this service to infringe upon intellectual property.
        </p>
      </div>
    </div>
  );
}
