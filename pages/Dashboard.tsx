
import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Header title="Safe Driving Center" subtitle="Welcome back, Administrator" />
      
      <main className="flex-1 overflow-y-auto px-4 pb-24">
        {/* Stats Section */}
        <section className="mt-4">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            <Link to="/finance" className="min-w-[150px] bg-primary text-white p-4 rounded-xl shadow-lg shadow-blue-500/20 flex flex-col justify-between h-[110px]">
              <div className="flex items-center gap-2 opacity-90">
                <span className="material-symbols-outlined text-xl">payments</span>
                <span className="text-xs font-medium">Revenue</span>
              </div>
              <div>
                <p className="text-2xl font-bold">12.5M</p>
                <p className="text-[10px] opacity-80">+15% from yesterday</p>
              </div>
            </Link>
            <Link to="/students" className="min-w-[150px] bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 p-4 rounded-xl shadow-sm flex flex-col justify-between h-[110px]">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-xl text-blue-500">groups</span>
                <span className="text-xs font-medium">Students</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">1,240</p>
                <p className="text-[10px] text-green-600 font-medium">Active now</p>
              </div>
            </Link>
            <div className="min-w-[150px] bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 p-4 rounded-xl shadow-sm flex flex-col justify-between h-[110px]">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-xl text-orange-500">directions_car</span>
                <span className="text-xs font-medium">Vehicles</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">32/40</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Ready for use</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pending Actions */}
        <section className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Requires Action</h3>
            <button className="text-sm font-medium text-primary">View all</button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="bg-white dark:bg-surface-dark p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">person_add</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">New Registration</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Nguyen Thi Mai - Category B2</p>
                </div>
              </div>
              <button className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded text-xs font-bold transition-colors">Approve</button>
            </div>
            <div className="bg-white dark:bg-surface-dark p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                  <span className="material-symbols-outlined text-xl">car_repair</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Vehicle Maintenance</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Car 30A-152.99 is due</p>
                </div>
              </div>
              <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded text-xs font-bold transition-colors">Details</button>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Today's Schedule</h3>
            <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold">12 Slots</span>
          </div>
          <Link to="/calendar" className="block relative group bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-4 transition-all active:scale-[0.98]">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Ongoing
              </span>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-16 shrink-0 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://picsum.photos/seed/schedule/200" alt="Session" />
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">08:00 - 10:00 • B2</h4>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate mt-1">Student: Tran Van An</p>
                <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                  <span className="material-symbols-outlined text-[14px]">directions_car</span>
                  <span>30E-123.45</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
