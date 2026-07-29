import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Phone, Upload, CheckCircle, AlertCircle, FileText, Send, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(prefilledMedicine);
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('Yes');
  const [prescriptionFileName, setPrescriptionFileName] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('As soon as possible');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (prefilledMedicine) {
      setMedicineName(prefilledMedicine);
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFileName(e.target.files[0].name);
    }
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello ${BUSINESS_INFO.name}
*Medicine Order Request*

*Customer Name*: ${customerName || 'N/A'}
*Phone*: ${phone || 'N/A'}
*Email*: ${email || 'N/A'}
*Medicine Required*: ${medicineName || 'Attached Prescription'}
*Address*: ${address || 'Pickup from store / Jehanabad'}
*Prescription Attached*: ${hasPrescription}${prescriptionFileName ? ` (${prescriptionFileName})` : ''}
*Preferred Delivery Time*: ${deliveryTime}
*Message/Notes*: ${message || 'None'}

Please confirm availability and bill total. Thank you!`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
              <MessageSquare className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold">WhatsApp Medicine Order</h3>
              <p className="text-xs text-emerald-200">Instant confirmation • Arya Medical Hall</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmitWhatsApp} className="p-5 overflow-y-auto space-y-4 text-slate-800 dark:text-slate-200">
          <div className="bg-emerald-50 dark:bg-emerald-950/50 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Fill out your details below. Clicking "Send via WhatsApp" opens WhatsApp directly with a formatted message.</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Rajesh Kumar"
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 7488380297"
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="As soon as possible">As soon as possible (Urgent)</option>
                <option value="Today Morning (9 AM - 12 PM)">Today Morning (9 AM - 12 PM)</option>
                <option value="Today Evening (4 PM - 8 PM)">Today Evening (4 PM - 8 PM)</option>
                <option value="Store Self-Pickup">Store Self-Pickup</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address (in Jehanabad)
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="House/Shop No., Landmark, Road, Jehanabad"
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Required / List
            </label>
            <textarea
              rows={2}
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="e.g. Dolo 650mg (1 strip), Pan 40mg (2 strips), Volini spray"
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Prescription Upload Area */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                Do you have a Doctor's Prescription?
              </span>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1 text-xs cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="Yes"
                    checked={hasPrescription === 'Yes'}
                    onChange={() => setHasPrescription('Yes')}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-1 text-xs cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="No"
                    checked={hasPrescription === 'No'}
                    onChange={() => setHasPrescription('No')}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>No (OTC)</span>
                </label>
              </div>
            </div>

            {hasPrescription === 'Yes' && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                <label className="flex flex-col items-center justify-center p-3 border-2 border-dashed border-emerald-300 dark:border-emerald-700/60 rounded-xl cursor-pointer hover:bg-emerald-50/50 dark:hover:bg-slate-700/50 transition-colors">
                  <Upload className="w-5 h-5 text-emerald-600 mb-1" />
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {prescriptionFileName ? `Selected: ${prescriptionFileName}` : 'Select Prescription Photo / PDF'}
                  </span>
                  <span className="text-[10px] text-slate-400">You can also attach it directly in WhatsApp chat</span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Special Instructions / Message
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Please send generic option if available"
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
            <button
              type="submit"
              className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-transform active:scale-95 text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
