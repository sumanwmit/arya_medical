import React, { useState, useMemo } from 'react';
import { Search, Filter, AlertCircle, CheckCircle2, Clock, ShoppingCart, MessageSquare, ShieldCheck, RefreshCw } from 'lucide-react';
import medicineData from '../data/medicineStock.json';
import { BUSINESS_INFO } from '../data/websiteData';

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock' | string;
  dosage?: string;
  prescriptionRequired?: boolean;
  description?: string;
}

interface MedicineStockCheckerProps {
  onSelectMedicineForOrder?: (medicineName: string) => void;
  compactMode?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onSelectMedicineForOrder,
  compactMode = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Categories list
  const categories = useMemo(() => {
    const cats = new Set(medicineData.map(item => item.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filtered inventory
  const filteredMedicines = useMemo(() => {
    return (medicineData as MedicineItem[]).filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.dosage && item.dosage.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  const handleOrderClick = (item: MedicineItem) => {
    if (onSelectMedicineForOrder) {
      onSelectMedicineForOrder(item.name);
    } else {
      const text = encodeURIComponent(
        `Hello ${BUSINESS_INFO.name}, I would like to inquire about/order:\n\n*Medicine Name*: ${item.name}\n*Brand*: ${item.brand}\n*MRP*: ₹${item.mrp}\n*Stock Status*: ${item.status}\n\nPlease let me know availability and pickup/delivery details.`
      );
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
    }
  };

  const getStatusBadge = (status: string, qty: number) => {
    if (status === 'Available' || qty > 20) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          <span>AVAILABLE</span>
        </span>
      );
    } else if (status === 'Limited Stock' || (qty > 0 && qty <= 20)) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-[10px] font-bold">
          <Clock className="w-3 h-3 text-orange-600" />
          <span>LIMITED STOCK</span>
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-[10px] font-bold">
          <AlertCircle className="w-3 h-3 text-red-600" />
          <span>OUT OF STOCK</span>
        </span>
      );
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-5 sm:p-8 transition-all">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <RefreshCw className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Medicine & Product Stock Checker
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time store inventory search for Arya Medical Hall, Jehanabad.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Updated Daily • 100% Verified MRP</span>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative mb-5">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search medicine name..."
          className="w-full pl-11 pr-4 py-3.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-sm sm:text-base font-medium transition-all"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 px-2 py-1 rounded"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      {!compactMode && (
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by Category:</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0A8F6A] text-white shadow-md shadow-emerald-900/10'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status:</span>
            {['All', 'Available', 'Limited Stock', 'Out of Stock'].map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedStatus === st
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results Counter */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
        <span>Showing <strong className="text-slate-800 dark:text-slate-200">{filteredMedicines.length}</strong> medicines found</span>
        <span>Store Phone: <strong>7488380297</strong></span>
      </div>

      {/* Medicines Inventory Grid / Table */}
      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMedicines.slice(0, compactMode ? 6 : filteredMedicines.length).map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50/50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/50 rounded-xl p-4 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {item.category}
                  </span>
                  {getStatusBadge(item.status, item.availableQuantity)}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  By {item.brand} {item.dosage ? `• ${item.dosage}` : ''}
                </p>

                {item.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs text-slate-400">MRP Price</div>
                  <div className="text-base font-black text-emerald-700 dark:text-emerald-400">
                    ₹{item.mrp.toFixed(2)}
                  </div>
                </div>

                <button
                  onClick={() => handleOrderClick(item)}
                  disabled={item.status === 'Out of Stock'}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    item.status === 'Out of Stock'
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/30 active:scale-95'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{item.status === 'Out of Stock' ? 'Notify Stock' : 'Order Now'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
          <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
          <h4 className="text-base font-bold text-slate-700 dark:text-slate-200">
            No medicine matching "{searchTerm}" found
          </h4>
          <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
            Don't worry! We stock thousands of items not listed online. WhatsApp our pharmacist directly to inquire about this medication.
          </p>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello ${BUSINESS_INFO.name}, please check availability for medicine: ${searchTerm}`)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire Availability on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Footer Info Banner */}
      <div className="mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-900 dark:text-emerald-200">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <ShoppingCart className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Need bulk hospital supplies or chronic monthly prescription refill refills? Contact our team directly.</span>
        </div>
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="font-bold underline whitespace-nowrap text-emerald-700 dark:text-emerald-300 hover:text-emerald-800"
        >
          Call: +91 {BUSINESS_INFO.phone}
        </a>
      </div>
    </div>
  );
};
