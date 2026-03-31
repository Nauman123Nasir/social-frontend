import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Social Video Downloader',
  description: 'Terms of Service for Social Video Downloader.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="prose prose-invert lg:prose-xl space-y-6 text-gray-300">
        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using Social Video Downloader, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">2. Description of Service</h2>
        <p>
          Social Video Downloader provides users with tools to download publicly available videos from supported social media platforms for personal, non-commercial use. We do not host any copyrighted material on our servers.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">3. User Conduct</h2>
        <p>
          You agree to use the Service only for lawful purposes. You agree not to take any action that might compromise the security of the site, render the site inaccessible to others, or otherwise cause damage to the site or its content.
          You are solely responsible for ensuring that you have the right to download the content you access through our service.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">4. Intellectual Property</h2>
        <p>
          All content downloaded through this service belongs to their respective owners. We do not obtain or claim any rights to the videos you download. It is your responsibility to respect the copyright of the content creators.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">5. Disclaimer of Warranties</h2>
        <p>
          The service is provided on an "as is" and "as available" basis. We make no warranties, either expressed or implied, about the reliability, availability, or accuracy of the service.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">6. Limitation of Liability</h2>
        <p>
          In no event shall Social Video Downloader be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of this service.
        </p>
      </div>
    </div>
  );
}
