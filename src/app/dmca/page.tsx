import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy - Social Video Downloader',
  description: 'Digital Millennium Copyright Act Policy.',
};

export default function DMCAPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">DMCA Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="prose prose-invert lg:prose-xl space-y-6 text-gray-300">
        <p>
          Social Video Downloader respects the intellectual property rights of others. This Digital Millennium Copyright Act (DMCA) Policy outlines how we respond to notices of alleged copyright infringement.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">No Content Hosted</h2>
        <p>
          It is important to emphasize that Social Video Downloader does not host any videos, music, or other copyrighted media on its servers. We merely provide a tool to download publicly available content from third-party social media platforms. All content is downloaded directly from the source server to the user's device.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Reporting Infringement</h2>
        <p>
          If you are a copyright owner or an agent thereof and believe that any content generated or accessed via our web utility infringes upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act ("DMCA") by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):
        </p>
        
        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
          <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works;</li>
          <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Contact Information</h2>
        <p>
          You can send your DMCA takedown notice to us at: <br/>
          <a href="mailto:support@socialvideodownloader.com" className="text-blue-400 hover:text-blue-300 transition-colors">support@socialvideodownloader.com</a>
        </p>
      </div>
    </div>
  );
}
