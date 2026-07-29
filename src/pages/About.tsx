import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Clock,
  HeartPulse,
  Users,
  Building2,
  CheckCircle2,
  Phone,
  MessageSquare,
  FileCheck,
  ThermometerSnowflake,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_INFO } from '../data/websiteData';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Arya Medical Hall",
    "description": "Learn about Arya Medical Hall history, certified pharmacists, mission, and genuine healthcare services in Jehanabad, Bihar."
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
      <SEO
        title="About Us - Pharmacy Heritage & Pharmacist Credentials"
        description="Discover the history of Arya Medical Hall in Jehanabad, Bihar. Founded in 2010, dispensing 100% genuine medicines, insulin cold storage, and patient care."
        schema={aboutSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="About Us" />

        {/* Page Hero Header */}
        <div className="bg-[#0d1e3a] text-white rounded-2xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A] text-xs font-bold border border-[#0A8F6A]/30">
              <Award className="w-4 h-4 text-[#0A8F6A]" />
              <span>Registered Pharmacy • Jehanabad, Bihar</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              15+ Years of Dedicated Healthcare Service <span className="text-[#0A8F6A]">in Jehanabad</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At Arya Medical Hall, our commitment is simple: providing authentic medicines, expert pharmacist guidance, and compassionate service to every family in Jehanabad.
            </p>
          </div>
        </div>

        {/* Story & Heritage Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-lg">
              <Building2 className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Built on Trust, Quality & Community Care
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded in 2010 by registered pharmacists in Jehanabad, Arya Medical Hall was established with a singular vision: ensuring that no patient in our region ever has to worry about receiving counterfeit or substandard medications.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Over the past decade and a half, we have expanded from a modest retail counter near Sadar Hospital Chowk into a trusted regional pharmacy stocking over 10,000+ certified prescription formulations, cold-chain insulin products, surgical goods, and diagnostic instruments.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">50,000+</div>
                <div className="text-xs text-slate-500 font-medium">Patients & Families Served</div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-xs text-slate-500 font-medium">Manufacturer Sourced</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
                alt="Arya Medical Hall Pharmacy Counters"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission, Vision & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              To guarantee access to 100% genuine, affordable, and temperature-verified medications for all residents of Jehanabad and nearby rural districts.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              To be the premier, most technologically seamless healthcare retail center in Bihar, blending traditional pharmacist warmth with instant WhatsApp prescription ordering.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Values</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Uncompromising authenticity, transparent pricing at MRP, zero compromise on cold-chain storage, and patient privacy above all else.
            </p>
          </div>
        </div>

        {/* Owner & Pharmacist Message */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80"
                  alt="Pharmacist Rajesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{BUSINESS_INFO.owner}</h3>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Chief Pharmacist & Founder</p>
              <p className="text-[11px] text-slate-400 mt-1">B.Pharm, Registered Pharmacy Council</p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">A Message from Our Founder</span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                "Your Family's Health is Our Highest Responsibility"
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">
                "When someone comes to a medical hall, they are often dealing with stress or caring for an ailing family member. Our duty as registered pharmacists goes far beyond selling boxes; it is about verifying every doctor prescription, counseling on proper administration, and ensuring that every batch of insulin or cardiac tablet is stored at the exact required temperature."
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                We invite you to visit Arya Medical Hall or order via WhatsApp for quick doorstep service in Jehanabad.
              </p>
            </div>
          </div>
        </div>

        {/* Business Timeline */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Milestones</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Our Journey of Growth in Jehanabad
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 relative">
              <span className="text-3xl font-black text-emerald-600 mb-2 block">2010</span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Establishment</h4>
              <p className="text-xs text-slate-500 mt-1">Started retail medicine operations near Sadar Hospital Chowk.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 relative">
              <span className="text-3xl font-black text-emerald-600 mb-2 block">2015</span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cold-Chain Upgrade</h4>
              <p className="text-xs text-slate-500 mt-1">Installed specialized medical refrigeration for vaccines and insulin storage.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 relative">
              <span className="text-3xl font-black text-emerald-600 mb-2 block">2020</span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Surgical & Device Wing</h4>
              <p className="text-xs text-slate-500 mt-1">Expanded inventory into diagnostic equipment, BP monitors, and orthopedic braces.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 relative">
              <span className="text-3xl font-black text-emerald-600 mb-2 block">Present</span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Digital WhatsApp Ordering</h4>
              <p className="text-xs text-slate-500 mt-1">Launched instant WhatsApp order processing and local doorstep delivery across Jehanabad.</p>
            </div>
          </div>
        </div>

        {/* Quality Guarantee Callout */}
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <ThermometerSnowflake className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-300 uppercase">Cold-Chain Protocol</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">Guaranteed Freshness & Correct Storage</h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              All temperature-sensitive medications are monitored 24/7 in power-backed medical freezers to preserve potency.
            </p>
          </div>

          <button
            onClick={onOpenOrderModal}
            className="px-6 py-3.5 bg-white text-emerald-950 rounded-xl font-bold text-sm hover:bg-emerald-100 transition-colors shrink-0 shadow-lg"
          >
            Order Medicines Now
          </button>
        </div>

      </div>
    </div>
  );
};
