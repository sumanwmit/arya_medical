import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPage: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage }) => {
  return (
    <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 py-3 px-4 bg-slate-100/70 dark:bg-slate-800/60 rounded-xl mb-6 border border-slate-200/60 dark:border-slate-700/60">
      <NavLink
        to="/"
        className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
      >
        <Home className="w-3.5 h-3.5 text-emerald-600" />
        <span>Home</span>
      </NavLink>
      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
      <span className="text-slate-900 dark:text-white font-bold">{currentPage}</span>
    </nav>
  );
};
