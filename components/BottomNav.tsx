
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: '/', label: 'Tổng quan', icon: 'grid_view' },
    { path: '/students', label: 'Học viên', icon: 'school' },
    { path: '/calendar', label: 'Lịch học', icon: 'calendar_month' },
    { path: '/reports', label: 'Báo cáo', icon: 'bar_chart' },
    { path: '/finance', label: 'Tài chính', icon: 'attach_money' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white dark:bg-[#1e293b] border-t border-gray-200 dark:border-gray-800 z-40 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
              isActive(item.path) 
                ? 'text-primary' 
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive(item.path) ? 'filled' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
