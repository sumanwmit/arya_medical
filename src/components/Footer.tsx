import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Cross, MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, ShieldCheck, HeartPulse } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export default function Footer() {
  // Global Tracking Hook as instructed
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Cross className="w-6 h-6" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                ARYA <span className="text-emerald-400">MEDICAL HALL</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Genuine Medicine Guarantee</span>
              </div>
              <p className="text-slate-400">
                Direct procurement from licensed manufacturer-authorized pharma stockists in Bihar.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                title="WhatsApp Us"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                title="Call Pharmacy"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                title="Google Maps Location"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-l-4 border-emerald-500 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <NavLink to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">›</span> Home Page
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">›</span> About Our Store & Heritage
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">›</span> Healthcare Services & Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-emerald-300 font-semibold">
                  <span className="text-emerald-500">›</span> Medicine Stock Availability Checker
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">›</span> Store Photo Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">›</span> Contact & Directions
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Store Working Hours & Info */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-l-4 border-emerald-500 pl-2">
              Working Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Monday – Saturday:</p>
                  <p className="text-slate-400">8:00 AM – 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sunday:</p>
                  <p className="text-slate-400">9:00 AM – 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">WhatsApp Order Response:</p>
                  <p className="text-emerald-300 font-medium">24/7 Prescription Acceptance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Google Map Preview */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-l-4 border-emerald-500 pl-2">
              Locate Our Store
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline font-semibold text-white">
                  +91 {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors mt-2"
              >
                <span>Open Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Medical Disclaimer</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span></span>
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>

          </div>
        </div>

        <div className="mt-4 text-[11px] text-slate-500 text-center leading-relaxed max-w-4xl mx-auto">
          Disclaimer: Information provided on this website is for educational and inventory search purposes. Always consult a qualified medical doctor or healthcare provider for diagnosis and prescription medications. Arya Medical Hall dispenses prescription medicines strictly in accordance with Indian Pharmacy regulations.
        </div>
      </div>
    </footer>
  );
}
