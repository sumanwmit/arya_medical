import React, { useState } from 'react';
import { ZoomIn, Filter, Image as ImageIcon, Camera } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Lightbox } from '../components/Lightbox';
import { GALLERY_DATA, GalleryItem } from '../data/websiteData';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Store Exterior & Front' },
    { id: 'shelves', label: 'Medicine Counters' },
    { id: 'equipment', label: 'Cold Storage & Equipment' },
    { id: 'products', label: 'Healthcare & Devices' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Arya Medical Hall Store Gallery",
    "description": "Photos of Arya Medical Hall store front, organized medicine shelves, cold storage freezers, diagnostic equipment, and products in Jehanabad."
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
      <SEO
        title="Store Photo Gallery & Equipment Overview"
        description="View photos of Arya Medical Hall store exterior, organized medicine shelves, cold-chain insulin freezers, and health devices in Jehanabad, Bihar."
        schema={gallerySchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Store Gallery" />

        {/* Page Header */}
        <div className="bg-[#0d1e3a] text-white rounded-2xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A] text-xs font-bold border border-[#0A8F6A]/30">
              <Camera className="w-4 h-4 text-[#0A8F6A]" />
              <span>Inside Our Pharmacy</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Arya Medical Hall <span className="text-[#0A8F6A]">Store Photo Gallery</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Take a virtual tour of our clean, well-stocked, and organized pharmacy premises in Jehanabad, Bihar. Click any image for high-resolution lightbox view.
            </p>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0A8F6A] text-white shadow-md shadow-emerald-900/10 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-video sm:aspect-square bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md">
                    <ZoomIn className="w-6 h-6" />
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxItem && (
          <Lightbox
            isOpen={!!activeLightboxItem}
            imageUrl={activeLightboxItem.imageUrl}
            title={activeLightboxItem.title}
            caption={activeLightboxItem.caption}
            onClose={() => setActiveLightboxItem(null)}
          />
        )}

      </div>
    </div>
  );
};
