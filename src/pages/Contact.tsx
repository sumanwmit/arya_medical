import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  ExternalLink,
  CheckCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_INFO } from '../data/websiteData';

interface ContactProps {
  onOpenOrderModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenOrderModal }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formPhone) {
      setSubmitted(true);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Arya Medical Hall",
    "description": "Contact information, address, phone number, working hours, and Google map directions for Arya Medical Hall in Jehanabad, Bihar."
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
      <SEO
        title="Contact Us - Phone, Location & Google Map"
        description="Get in touch with Arya Medical Hall in Jehanabad, Bihar. Phone: 7488380297, WhatsApp: 7488380297. Location: Sadar Hospital Road, Jehanabad 804408."
        schema={contactSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Contact Us" />

        {/* Page Hero Header */}
        <div className="bg-[#0d1e3a] text-white rounded-2xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A] text-xs font-bold border border-[#0A8F6A]/30">
              <Phone className="w-4 h-4 text-[#0A8F6A]" />
              <span>We Are Here To Help You 24/7</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Get in Touch <span className="text-[#0A8F6A]">with Arya Medical Hall</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions about medicine availability, prescription fulfillment, or home delivery in Jehanabad? Visit our store, call us, or message on WhatsApp.
            </p>
          </div>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Phone & Emergency */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center font-bold">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Call Pharmacy</h3>
            <p className="text-xs text-slate-500">Speak directly with our registered pharmacist</p>
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-base font-black text-blue-600 dark:text-blue-400 hover:underline"
              >
                +91 {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Order */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Order</h3>
            <p className="text-xs text-slate-500">24/7 Prescription upload & quick chat</p>
            <div className="pt-2">
              <button
                onClick={onOpenOrderModal}
                className="text-base font-black text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Send WhatsApp Order</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Address & Location */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Store Address</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {BUSINESS_INFO.address}
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Form & Map Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Send Us a Quick Message</h2>
              <p className="text-xs text-slate-500 mt-1">Fill out the form below and our staff will respond promptly.</p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Thank you, {formName}. Our team at Arya Medical Hall will review your inquiry and call/SMS you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. 7488380297"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                  <input
                    type="text"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="e.g. Inquiring about diabetes medicine stock"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Message Details</label>
                  <textarea
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Type your medicine request or general inquiry here..."
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0A8F6A] hover:bg-[#087858] text-white font-bold rounded-xl shadow-lg shadow-emerald-900/10 text-sm flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quick Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Google Map & Store Hours */}
          <div className="lg:col-span-6 space-y-6">
            {/* Store Working Hours Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-600" />
                <span>Store Business Hours</span>
              </h3>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Monday – Saturday:</span>
                  <span className="font-bold text-slate-900 dark:text-white">8:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Sunday:</span>
                  <span className="font-bold text-slate-900 dark:text-white">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">WhatsApp Prescription Assistant:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">24 Hours / 7 Days</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Preview Container */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-lg space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Google Maps Location (Jehanabad)
                </span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 relative bg-slate-100 dark:bg-slate-800">
                <iframe
                  title="Arya Medical Hall Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14450.771239845348!2d84.9785!3d25.2138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2cc81c5d99999%3A0x1234567890abcdef!2sJehanabad%2C%20Bihar%20804408!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
