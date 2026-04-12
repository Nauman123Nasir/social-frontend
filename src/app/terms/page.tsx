import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Downifi | Legal & Usage Guidelines',
  description: 'The formal Terms of Service for Downifi. Learn about your rights, responsibilities, and our site usage policies as a leading social media utility.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 gradient-text">Terms of Service</h1>
        <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Last updated: April 12, 2026</p>
      </div>
      
      <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed
        [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-white/10
        [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3
        [&_p]:mb-4
        [&_strong]:text-white [&_strong]:font-semibold
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
      ">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using <strong>Downifi</strong> (the "Service"), provided by Downifi Studio ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are prohibited from using or accessing this site. All materials on this website are protected by applicable copyright and trademark law.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            Downifi provides a web-based utility that allows users to parse URLs from third-party social media platforms and download publicly available media files directly from the original Content Delivery Networks (CDNs). 
          </p>
          <p>
            <strong>Downifi does NOT host, store, or archive any content on its servers.</strong> We simply act as a technical intermediary facilitating a direct connection between your device and the third-party server hosting the media.
          </p>
        </section>

        <section>
          <h2>3. Acceptable Use Policy</h2>
          <p>As a condition of your use of the Service, you agree not to use the Service for any purpose that is unlawful or prohibited by these Terms. You specifically agree:</p>
          <ul>
            <li>To use the Service only for personal, non-commercial purposes.</li>
            <li>Not to use the Service to download content that you do not have the legal right to access or download.</li>
            <li>Not to violate the intellectual property rights of content creators.</li>
            <li>Not to use the Service as a tool for mass-extraction (scraping) for commercial datasets.</li>
            <li>Not to attempt to circumvent any technical limitations or security measures implemented by the Service or the third-party platforms.</li>
            <li>Not to use the Service in any way that could damage, disable, overburden, or impair the Service or interfere with any other party's use of the Service.</li>
          </ul>
        </section>

        <section>
          <h2>4. Intellectual Property Rights</h2>
          <p>
            All social media logos, trademarks, and brand names used on this site are the property of their respective owners. Downifi is not affiliated with, endorsed by, or sponsored by Instagram, TikTok, Facebook, or Twitter/X.
          </p>
          <p>
            By using our Service, you acknowledge that you are solely responsible for compliance with any third-party terms of service and copyright laws applicable to the content you download.
          </p>
        </section>

        <section>
          <h2>5. Disclaimer of Liability</h2>
          <p>
            The materials on Downifi's website are provided on an 'as is' basis. Downifi makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, Downifi does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall Downifi or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Downifi's website, even if Downifi or a Downifi authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2>7. Termination</h2>
          <p>
            We reserve the right, in our sole discretion, to terminate or suspend your access to all or part of the Service, with or without notice, for any reason or no reason, including, without limitation, a breach of these Terms of Service.
          </p>
        </section>

        <section>
          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Downifi Studio operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>

        <section>
          <h2>9. Changes to Terms</h2>
          <p>
            Downifi may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
          </p>
        </section>
      </div>
    </div>
  );
}
