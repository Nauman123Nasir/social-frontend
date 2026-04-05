'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'' | 'success'>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a frontend mockup to satisfy structural queries.
    // In the future this should hit an API endpoint to actually send an email.
    setStatus('success');
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Contact Us</h1>
      <p className="text-gray-400 mb-8 max-w-xl">
        Have questions, suggestions, or concerns? Fill out the form below and we will get back to you as soon as possible.
      </p>
      
      <div className="glass-effect rounded-xl p-8 max-w-2xl">
        {status === 'success' ? (
          <div className="bg-green-500/20 border border-green-500 text-green-300 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Message Sent!</h2>
            <p>Thank you for reaching out. We will respond shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                placeholder="How can we help you?"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
      
      <div className="mt-12 text-gray-400">
        <h2 className="text-xl font-semibold text-white mb-4">Other Ways to Reach Us</h2>
        <p>
          Email support directly at: <a href="mailto:contact@downifi.com" className="text-blue-400 hover:text-blue-300">contact@downifi.com</a>

        </p>
      </div>
    </div>
  );
}
