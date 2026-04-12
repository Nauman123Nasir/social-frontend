import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - Downifi | Tracking & Transparency',
  description: 'Detailed Information about how Downifi uses cookies, including third-party advertising cookies from Google and how you can manage your preferences.',
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 gradient-text">Cookie Policy</h1>
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
            This Cookie Policy explains what cookies are and how we use them on <strong>Downifi</strong> ("we," "us," or "our"). You should read this policy so you can understand what type of cookies we use, the information we collect using cookies, and how that information is used.
          </p>
          <p>
            Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies. For further information on how we use, store and keep your personal data secure, see our Privacy Policy.
          </p>
        </section>

        <section>
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
          </p>
        </section>

        <section>
          <h2>2. How We Use Cookies</h2>
          <p>
            Like most online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
          </p>
          <p>
            Third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
          </p>
        </section>

        <section>
          <h2>3. Types of Cookies We Use</h2>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information.
            </li>
            <li>
              <strong>Statistics Cookies:</strong> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc. These data help us understand and analyze how well the website performs and where it needs improvement.
            </li>
            <li>
              <strong>Marketing/Advertising Cookies:</strong> Our website displays advertisements. These cookies are used to personalize the advertisements that we show to you so that they are meaningful to you. These cookies also help us keep track of the efficiency of these ad campaigns. The information stored in these cookies may also be used by the third-party ad providers to show you ads on other websites on the browser as well.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Google AdSense & DoubleClick Cookies</h2>
          <p>
            Google, as a third-party vendor, uses cookies to serve ads on <strong>Downifi</strong>. Google's use of the DART cookie enables it and its partners to serve ads to our users based on their visit to our Site or other websites on the Internet.
          </p>
          <p>
            You may learn more about how Google uses cookies in advertising and how you can control them by visiting the <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google Advertising Privacy & Terms</a> page.
          </p>
        </section>

        <section>
          <h2>5. How Can You Control Cookies?</h2>
          <p>
            You can manage your cookies preferences through our site's cookie consent banner. Additionally, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies.
          </p>
          <ul>
            <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and Security &rarr; Cookies and other site data.</li>
            <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data.</li>
            <li><strong>Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data.</li>
          </ul>
        </section>

        <section>
          <h2>6. Changes to This Cookie Policy</h2>
          <p>
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes.
          </p>
        </section>
      </div>
    </div>
  );
}
