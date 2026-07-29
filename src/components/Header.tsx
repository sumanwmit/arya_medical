import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageSquare, Sun, Moon, Menu, X, Cross, PlusCircle, Search } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services & Stock', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement & Emergency Contact Bar */}
      <div className="bg-[#0d1e3a] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>{BUSINESS_INFO.shortAddress}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>{BUSINESS_INFO.hours.weekdays}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-[#0A8F6A] transition-colors font-medium text-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#0A8F6A] animate-pulse" />
              <span>Call: {BUSINESS_INFO.formattedPhone}</span>
            </a>
            <button
              onClick={onOpenOrderModal}
              className="flex items-center gap-1.5 bg-[#0A8F6A] hover:bg-[#087858] text-white px-3 py-1 rounded-full text-xs font-bold transition-transform active:scale-95 shadow-sm"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#0A8F6A] flex items-center justify-center text-white shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform">
              <Cross className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-white font-sans">
                  ARYA<span className="text-[#0A8F6A]"> MEDICAL</span>
                </span>
                <span className="text-xs bg-[#0A8F6A]/10 dark:bg-[#0A8F6A]/20 text-[#0A8F6A] border border-[#0A8F6A]/30 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  HALL
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 tracking-wide font-medium">
                Jehanabad, Bihar • Reg. Pharmacy
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors py-1 ${
                    isActive
                      ? 'text-[#0A8F6A] border-b-2 border-[#0A8F6A] font-bold'
                      : 'hover:text-[#0A8F6A]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Action Buttons & Theme Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Stock Search Icon / Button */}
            <NavLink
              to="/services"
              className="hidden sm:flex items-center gap-1.5 text-xs text-[#0A8F6A] bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 border border-[#0A8F6A]/30 px-3 py-2 rounded-lg font-semibold transition-colors"
            >
              <Search className="w-4 h-4 text-[#0A8F6A]" />
              <span>Stock Checker</span>
            </NavLink>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Emergency Support Button */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden sm:flex items-center gap-2 bg-[#0A8F6A] hover:bg-[#087858] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md shadow-emerald-900/10 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Emergency Support</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold border-l-4 border-emerald-600'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold shadow-md text-base"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Upload Prescription / Order</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 py-3 rounded-xl font-semibold text-base border border-slate-200 dark:border-slate-700"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>Call Store ({BUSINESS_INFO.phone})</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
