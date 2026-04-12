'use client';

import { useState } from 'react';
import { Mail, MapPin, Clock, Phone, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'' | 'success' | 'error' | 'loading'>('');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '9d11387d-f3c2-4ffd-818d-0f1ffde5cdb8');
    formData.append('from_name', 'Downifi Contact Form');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 gradient-text leading-tight pb-2">
          Get in <span className="text-white">Touch</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Have feedback or technical questions? Our specialized support team is here to ensure your experience with Downifi remains premium and efficient.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info Card */}
        <div className="lg:col-span-1">
          <div className="glass-effect p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Direct Support</h3>
            <p className="text-gray-400 leading-relaxed font-medium">
              contact@downifi.com
            </p>
            <p className="text-xs text-gray-500 mt-2 italic font-medium">24/7 Digital Assistance</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <MessageSquare className="h-64 w-64 -rotate-12" />
            </div>

            {status === 'success' ? (
              <div className="h-[450px] flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="h-20 w-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                  <Send className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Message Transmitted!</h2>
                <p className="text-gray-400 text-lg max-w-md">
                  Thank you for your high-value input. Our team will review your message and reach out to the provided coordinates shortly.
                </p>
                <button 
                  onClick={() => setStatus('')}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm">
                    Something went wrong. Please try emailing us directly at contact@downifi.com
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition duration-300"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="subject" className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Subject / Department
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition duration-300 appearance-none cursor-pointer"
                  >
                    <option className="bg-gray-900 border-none">Technical Support</option>
                    <option className="bg-gray-900 border-none">Business & Partnerships</option>
                    <option className="bg-gray-900 border-none">Press & Media</option>
                    <option className="bg-gray-900 border-none">Legal / DMCA Inquiry</option>
                  </select>
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition duration-300 resize-none"
                    placeholder="Provide as much detail as possible..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:primary-hover text-white font-black text-lg py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center group shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="mr-3">{status === 'loading' ? 'Transmitting...' : 'Transmit Message'}</span>
                  <Send className={`h-5 w-5 ${status === 'loading' ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-16 border-t border-white/5 grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Mail className="mr-3 text-primary h-6 w-6" /> Executive Channels
          </h2>
          <div className="space-y-3">
            <p className="text-gray-400">
              General Support: <a href="mailto:contact@downifi.com" className="text-white hover:text-primary transition font-medium">contact@downifi.com</a>
            </p>
            <p className="text-gray-400">
              Media Inquiries: <a href="mailto:contact@downifi.com" className="text-white hover:text-primary transition font-medium">contact@downifi.com</a>
            </p>
            <p className="text-gray-400">
              Legal / DPO: <a href="mailto:contact@downifi.com" className="text-white hover:text-primary transition font-medium">contact@downifi.com</a>
            </p>
          </div>
        </div>
        
        <div className="glass-effect p-8 rounded-3xl bg-primary/5 border border-primary/10">
          <h4 className="text-white font-bold mb-2">Priority Response</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Registered partners and verified media outlets receive priority handling via our internal ticket system. Please mention your business name in all executive communications.
          </p>
        </div>
      </div>
    </div>
  );
}
