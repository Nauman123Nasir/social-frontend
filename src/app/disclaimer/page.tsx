import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - Downifi | Legal Disclosures',
  description: 'Our comprehensive legal disclaimer regarding the use of our social video downloader, external links, and the non-hosting of copyrighted content.',
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 gradient-text">Legal Disclaimer</h1>
        <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Last updated: April 12, 2026</p>
      </div>
      
      <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed
        [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-white/10
        [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3
        [&_p]:mb-4
        [&_strong]:text-white [&_strong]:font-semibold
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-4
        [&_a]:text-primary [&_a]:underline
      ">
        <section>
          <h2>1. General Information</h2>
          <p>
            The information provided by <strong>Downifi</strong> ("we," "us," or "our") on <a href="https://downifi.com">https://downifi.com</a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>
          <p className="text-white italic">
            UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
          </p>
        </section>

        <section>
          <h2>2. External Links Disclaimer</h2>
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>
          <p>
            WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
          </p>
        </section>

        <section>
          <h2>3. No Hosting of Content Disclaimer</h2>
          <p>
            <strong>Downifi does not host, store, or archive any media content on its servers.</strong> Our infrastructure acts purely as a technical conduit that facilitates a direct connection between the third-party platforms hosting the content (specifically Instagram, TikTok, Facebook, and Twitter/X) and your personal device.
          </p>
          <p>
            We do not have control over the availability, legality, or safety of the third-party content you download. Any issues regarding the content itself must be addressed to the platform that is hosting said content.
          </p>
        </section>

        <section>
          <h2>4. Accuracy of Information Disclaimer</h2>
          <p>
            While we strive to keep the Service running smoothly, social media platforms frequently update their code and security protocols. Therefore, Downifi cannot guarantee that the Service will always be compatible with every link you provide. We do not provide any warranties regarding the uptime or continuous availability of our downloader tool.
          </p>
        </section>

        <section>
          <h2>5. Professional Disclaimer</h2>
          <p>
            The Site cannot and does not contain professional legal advice. The legal information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.
          </p>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>
            Should you have any feedback, comments, requests for technical support or other inquiries, please contact us by email: <a href="mailto:support@downifi.com">support@downifi.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
