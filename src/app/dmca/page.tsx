import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy - Downifi | Copyright Compliance',
  description: 'Our Digital Millennium Copyright Act (DMCA) compliance policy. Learn how we handle copyright infringement claims as a technical intermediary.',
};

export default function DMCAPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 gradient-text">DMCA Policy</h1>
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
          <p>
            <strong>Downifi</strong> (the "Service") respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement that are reported to our Designated Copyright Agent.
          </p>
          <p>
            Please note that as a technical intermediary, <strong>Downifi does not host any media files on its servers.</strong> Our tool parses instructions to allow the user's browser to connect directly with the third-party platforms hosting the content.
          </p>
        </section>

        <section>
          <h2>1. Full Takedown Notice Requirements</h2>
          <p>
            If you are a copyright owner, or are authorized to act on behalf of one, please report alleged copyright infringements taking place through our web utility by providing a formal notice containing the following information:
          </p>
          <ul>
            <li>Identification of the copyrighted work that you claim has been infringed.</li>
            <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material (e.g., the specific URL processed).</li>
            <li>Your contact information, including your address, telephone number, and an email address.</li>
            <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
            <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
            <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
          </ul>
        </section>

        <section>
          <h2>2. Counter-Notification Procedures</h2>
          <p>
            If you believe that your content was removed or disabled by mistake or misidentification, you may file a counter-notification with our Copyright Agent. To be effective, the counter-notification must be a written communication that includes the following:
          </p>
          <ul>
            <li>Your physical or electronic signature.</li>
            <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled.</li>
            <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material.</li>
            <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which the address is located, or if your address is outside of the United States, for any judicial district in which the service provider may be found, and that you will accept service of process from the person who provided notification under Section 512(c)(1)(C) or an agent of such person.</li>
          </ul>
        </section>

        <section>
          <h2>3. Repeat Infringer Policy</h2>
          <p>
            Downifi takes copyright infringement seriously. In accordance with the DMCA and other applicable law, we have adopted a policy of terminating, in appropriate circumstances and at our sole discretion, users who are deemed to be repeat infringers. We may also, at our sole discretion, limit access to the Service for any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
          </p>
        </section>

        <section>
          <h2>4. Designated Copyright Agent</h2>
          <p>
            Completed notices or counter-notifications should be sent to our Designated Copyright Agent at:
          </p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="font-bold text-white mb-2">Downifi Legal Dept. (DMCA)</p>
            <p>Email: <a href="mailto:contact@downifi.com">contact@downifi.com</a></p>
          </div>
        </section>

        <section>
          <h2>5. Misrepresentations</h2>
          <p>
            Please be aware that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability.
          </p>
        </section>
      </div>
    </div>
  );
}
