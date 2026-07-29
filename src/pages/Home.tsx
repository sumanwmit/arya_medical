import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Clock,
  Award,
  Truck,
  Search,
  CheckCircle2,
  ArrowRight,
  Star,
  HelpCircle,
  BookOpen,
  Mail,
  ChevronRight,
  PlusCircle,
  Stethoscope,
  Pill,
  HeartPulse,
  Activity
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { BUSINESS_INFO, SERVICES_DATA, REVIEWS_DATA, FAQ_DATA, HEALTH_TIPS } from '../data/websiteData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface HomeProps {
  onOpenOrderModal: () => void;
  onSelectMedicineForOrder: (name: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal, onSelectMedicineForOrder }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.slice(0, 3).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="Home - Pharmacy & Medical Store in Jehanabad"
        description="Arya Medical Hall provides 100% genuine medicines, healthcare devices, baby care, surgical supplies, and doorstep delivery in Jehanabad, Bihar."
        schema={homeFaqSchema}
      />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-[#0d1e3a] text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Background Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="grid grid-cols-12 gap-4 w-full h-full p-4">
            <div className="col-span-1 border-r border-white/10"></div>
            <div className="col-span-1 border-r border-white/10"></div>
            <div className="col-span-1 border-r border-white/10"></div>
            <div className="col-span-1 border-r border-white/10"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-[#0A8F6A]/20 text-[#0A8F6A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-[#0A8F6A]/30">
                Official Pharmacy Store • Jehanabad
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Your Trusted Medical Store{' '}
                <span className="text-[#0A8F6A]">for Genuine Medicines</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Providing genuine medicines, healthcare products, surgical supplies, and baby care essentials at affordable prices in Jehanabad.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <button
                  onClick={onOpenOrderModal}
                  className="px-8 py-3.5 bg-[#0A8F6A] hover:bg-[#087858] text-white font-bold rounded-lg shadow-lg shadow-emerald-900/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Order via WhatsApp</span>
                </button>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3.5 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <MapPin className="w-5 h-5 text-[#0A8F6A]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>
              </div>

              {/* Feature Badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="space-y-0.5">
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-400">Genuine Medicines</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xl font-bold text-white">24/7</div>
                  <div className="text-xs text-slate-400">WhatsApp Order</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xl font-bold text-white">50k+</div>
                  <div className="text-xs text-slate-400">Patients Served</div>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl space-y-5">
                  
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0A8F6A] text-white flex items-center justify-center">
                        <Pill className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm">Quick Prescription Upload</h3>
                        <p className="text-xs text-slate-400">Doorstep delivery in Jehanabad</p>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A] border border-[#0A8F6A]/30 font-bold">
                      Available Now
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Have a doctor's prescription slip? Snap a photo with your phone and send it directly via WhatsApp for instant bill estimation and doorstep medicine delivery.
                  </p>

                  <button
                    onClick={onOpenOrderModal}
                    className="w-full py-3 bg-[#0A8F6A] hover:bg-[#087858] text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Upload Prescription on WhatsApp</span>
                  </button>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-slate-400">
                      Emergency Store Support: <strong className="text-white">+91 7488380297</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Short About Preview Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80"
                  alt="Arya Medical Hall Store Exterior"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-emerald-600 text-white p-4 sm:p-5 rounded-2xl shadow-xl space-y-1 max-w-xs">
                <p className="text-2xl font-black">15+ Years</p>
                <p className="text-xs text-emerald-100 font-medium">Serving Jehanabad Community with Genuine Healthcare</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>About Arya Medical Hall</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Jehanabad's Trusted Pharmacy Partner Since 2010
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Arya Medical Hall is a premier retail and wholesale medical establishment situated near Sadar Hospital Road, Jehanabad. Under the expert leadership of registered pharmacists, we are dedicated to dispensing 100% authentic, temperature-managed pharmaceutical products at fair prices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Licensed Registered Pharmacists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Cold Chain Refrigerated Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Direct Authorized Distributors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Express Doorstep Delivery</span>
                </div>
              </div>

              <div className="pt-2">
                <NavLink
                  to="/about"
                  className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
                >
                  <span>Read Full Business Story</span>
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview (Maximum 6) */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Our Core Services
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Explore our full spectrum of medicine fulfillment, diagnostic instruments, surgical products, and doorstep services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((serv) => (
              <div
                key={serv.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Stethoscope className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {serv.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {serv.description}
                  </p>

                  <div className="space-y-1 pt-2">
                    {serv.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
                  <NavLink
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
                  >
                    <span>Learn More & Order</span>
                    <ChevronRight className="w-4 h-4" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <span>View All Category Services</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Stock Availability Checker Preview Component */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker
            compactMode={true}
            onSelectMedicineForOrder={onSelectMedicineForOrder}
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
              The Arya Advantage
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Why Jehanabad Trusts Arya Medical Hall
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">100% Genuine Medicines</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Directly sourced from verified pharma manufacturers with strict batch quality inspection.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Certified Pharmacists</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Registered pharmacists on duty to review doctor prescriptions and explain safe dosage timings.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center font-bold">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Express Delivery</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Quick local delivery across Jehanabad city for elderly patients and urgent medical needs.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">24/7 WhatsApp Response</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Send prescription photos anytime to confirm item availability and reserve stock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Verified Feedback
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{rev.text}"
                </p>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">{rev.author}</span>
                  <span className="text-slate-400">{rev.location} • {rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.slice(0, 3).map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pl-7 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Health Tips Preview */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Health Awareness
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Pharmacist Advice & Health Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_TIPS.map((tip) => (
              <div
                key={tip.id}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                      {tip.category}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3">
                      {tip.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 text-xs text-slate-400 flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-3">
                  <span>By {tip.author}</span>
                  <span>{tip.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-gradient-to-r from-emerald-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black">
            Need Medicines Urgently in Jehanabad?
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto text-sm sm:text-base">
            Call our store directly or send your doctor prescription on WhatsApp. We confirm stock instantly!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenOrderModal}
              className="px-6 py-3.5 bg-white text-emerald-900 font-bold rounded-xl shadow-lg hover:bg-emerald-50 transition-colors flex items-center gap-2 text-sm sm:text-base"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <span>WhatsApp Prescription Order</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl border border-emerald-500/50 flex items-center gap-2 text-sm sm:text-base"
            >
              <Phone className="w-5 h-5" />
              <span>Call: +91 {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 bg-slate-900 text-slate-300 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Subscribe for Healthcare Alerts & Refill Reminders</h3>
          <p className="text-xs text-slate-400">Stay updated on medicine stock availability, seasonal health tips, and free health camps in Jehanabad.</p>
          
          {subscribed ? (
            <div className="p-3 bg-emerald-950 text-emerald-300 rounded-xl border border-emerald-800 text-sm font-semibold inline-block">
              ✓ Thank you for subscribing to Arya Medical Hall health updates!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
