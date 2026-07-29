import React, { useEffect } from 'react';
import { X, ZoomIn, ExternalLink } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  caption: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  imageUrl,
  title,
  caption,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white flex items-center justify-center transition-colors border border-slate-700"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative bg-black max-h-[75vh] flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-full max-h-[75vh] object-contain"
          />
        </div>

        <div className="p-5 bg-slate-900 text-slate-200">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-emerald-400" />
            {title}
          </h3>
          <p className="text-sm text-slate-400 mt-1">{caption}</p>
        </div>
      </div>
    </div>
  );
};
