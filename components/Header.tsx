
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  rightAction?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, showBackButton, rightAction }) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between transition-colors">
      <div className="flex items-center gap-2">
        {showBackButton && (
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full active:bg-gray-200 dark:active:bg-gray-800 text-slate-700 dark:text-white"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        )}
        <div className="flex-1">
          <h1 className="text-base font-bold text-slate-900 dark:text-white truncate">{title}</h1>
          {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {rightAction || (
          <>
            <button className="relative p-2 rounded-full active:bg-gray-200 dark:active:bg-gray-800 text-slate-700 dark:text-white">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-background-dark"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-300 dark:border-gray-600">
              <img className="w-full h-full object-cover" src="https://picsum.photos/seed/admin/100" alt="Profile" />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
