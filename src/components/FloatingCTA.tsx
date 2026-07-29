import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

interface FloatingCTAProps {
  onOpenOrderModal: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-10 h-10 rounded-full bg-slate-800/90 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg border border-slate-700/80 backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 transition-transform hover:scale-110 active:scale-95 group relative"
        title="Call Pharmacy Now"
      >
        <Phone className="w-6 h-6 animate-bounce" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Call: +91 {BUSINESS_INFO.phone}
        </span>
      </a>

      {/* Floating WhatsApp Order Button */}
      <button
        onClick={onOpenOrderModal}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white flex items-center justify-center shadow-xl shadow-emerald-600/40 transition-transform hover:scale-110 active:scale-95 group"
        title="Send WhatsApp Order"
      >
        {/* Pulse Ripple Effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping opacity-75"></span>
        <MessageSquare className="w-7 h-7 relative z-10" />

        {/* Unread Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-white dark:border-slate-900 shadow">
          1
        </span>

        <span className="absolute right-16 bg-emerald-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-emerald-700">
          Order Medicines on WhatsApp
        </span>
      </button>
    </div>
  );
};
