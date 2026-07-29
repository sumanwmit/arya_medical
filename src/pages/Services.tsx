import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Pill,
  ShieldCheck,
  Activity,
  Baby,
  Stethoscope,
  Truck,
  HeartPulse,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Search,
  HelpCircle,
  PlusCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/websiteData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenOrderModal: () => void;
  onSelectMedicineForOrder: (medicineName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal, onSelectMedicineForOrder }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pharmacy & Healthcare Services",
    "provider": {
      "@type": "Pharmacy",
      "name": BUSINESS_INFO.name
    },
    "areaServed": "Jehanabad, Bihar"
  };

  const categories = [
    'All',
    'Prescription Medicines',
    'OTC Medicines',
    'Health Devices',
    'Baby Care',
    'Surgical Supplies',
    'Home Delivery'
  ];

  const filteredServices = activeCategoryFilter === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategoryFilter);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
      <SEO
        title="Healthcare Services & Medicine Stock Checker"
        description="Explore Arya Medical Hall services: Prescription Fulfillment, OTC Medicines, Health Devices, Baby Care, Surgical Supplies, and online Stock Checker in Jehanabad."
        schema={servicesSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Services & Medicine Stock" />

        {/* Hero Section */}
        <div className="bg-[#0d1e3a] text-white rounded-2xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A] text-xs font-bold border border-[#0A8F6A]/30">
              <Sparkles className="w-4 h-4 text-[#0A8F6A]" />
              <span>Full Pharmacy Catalog & Services</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Comprehensive Healthcare Services <span className="text-[#0A8F6A]">& Medicine Inventory</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From specialty prescription fulfillment to digital home health monitors and express WhatsApp delivery, Arya Medical Hall has all your healthcare needs covered.
            </p>
          </div>
        </div>

        {/* EXCLUSIVE FEATURE: Medicine Stock Checker Component Section */}
        <div id="stock-checker-section" className="mb-16 scroll-mt-24">
          <MedicineStockChecker onSelectMedicineForOrder={onSelectMedicineForOrder} />
        </div>

        {/* Services Category Filter Bar */}
        <div className="mb-10 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Category-Wise Healthcare Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Click any category below to filter our specialized healthcare solutions and consultation offerings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategoryFilter === cat
                    ? 'bg-[#0A8F6A] text-white shadow-md shadow-emerald-900/10 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((serv) => (
            <div
              key={serv.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {serv.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {serv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {serv.longDescription}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider block">
                    Key Highlights & Benefits:
                  </span>
                  <ul className="space-y-1.5">
                    {serv.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={onOpenOrderModal}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire / Order Service</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Prescription Verification Process Banner */}
        <div className="bg-slate-900 text-slate-200 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl mb-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Quality Control</span>
            <h3 className="text-2xl font-black text-white">How We Process Doctor Prescriptions</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">1</div>
                <h4 className="font-bold text-white">Verification</h4>
                <p className="text-slate-400">Our senior pharmacist reads doctor notes, dosage instructions, and patient details.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">2</div>
                <h4 className="font-bold text-white">Batch & Expiry Check</h4>
                <p className="text-slate-400">Every tablet strip is double-checked for batch validity and long expiry shelf life.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">3</div>
                <h4 className="font-bold text-white">Counseling & Delivery</h4>
                <p className="text-slate-400">We label dosage schedules clearly and dispatch via local rider or counter pickup.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
