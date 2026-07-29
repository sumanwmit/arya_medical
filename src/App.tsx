import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy loaded page components as required
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(module => ({ default: module.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

// Loading Spinner Fallback for Lazy Routing
const PageLoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-950">
    <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Loading Arya Medical Hall...</p>
  </div>
);

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState('');

  const handleOpenOrderModal = (medicineName: string = '') => {
    setSelectedMedicine(medicineName);
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    setSelectedMedicine('');
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-200">
          {/* Main Navigation Header */}
          <Header onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* Lazy Loaded Page Routes */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      onOpenOrderModal={() => handleOpenOrderModal()}
                      onSelectMedicineForOrder={(med) => handleOpenOrderModal(med)}
                    />
                  }
                />
                <Route
                  path="/about"
                  element={<About onOpenOrderModal={() => handleOpenOrderModal()} />}
                />
                <Route
                  path="/services"
                  element={
                    <Services
                      onOpenOrderModal={() => handleOpenOrderModal()}
                      onSelectMedicineForOrder={(med) => handleOpenOrderModal(med)}
                    />
                  }
                />
                <Route path="/gallery" element={<Gallery />} />
                <Route
                  path="/contact"
                  element={<Contact onOpenOrderModal={() => handleOpenOrderModal()} />}
                />
                <Route
                  path="*"
                  element={
                    <Home
                      onOpenOrderModal={() => handleOpenOrderModal()}
                      onSelectMedicineForOrder={(med) => handleOpenOrderModal(med)}
                    />
                  }
                />
              </Routes>
            </Suspense>
          </main>

          {/* Persistent Footer with Global Tracking Hook */}
          <Footer />

          {/* Floating Action Buttons */}
          <FloatingCTA onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* Global WhatsApp Prescription Order Modal */}
          <WhatsAppOrderModal
            isOpen={orderModalOpen}
            onClose={handleCloseOrderModal}
            prefilledMedicine={selectedMedicine}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}
