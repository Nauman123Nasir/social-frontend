'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConcent');
    if (!hasConsented) {
      setTimeout(() => {
        setShowConsent(true);
      }, 1000); // Show after 1 second
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConcent', 'true');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConcent', 'false');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 transform transition-transform duration-500 ease-in-out">
      <div className="container mx-auto max-w-5xl">
        <div className="glass-effect rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/20">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">We value your privacy</h3>
            <p className="text-sm text-gray-300">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as detailed in our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </div>
          <div className="flex flex-row items-center gap-3 shrink-0 mt-4 md:mt-0">
            <button 
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Decline
            </button>
            <button 
              onClick={handleAccept}
              className="px-6 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-primary/20"
            >
              Accept All
            </button>
            <button 
              onClick={handleDecline}
              className="p-2 text-gray-400 hover:text-white transition-colors ml-2"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
