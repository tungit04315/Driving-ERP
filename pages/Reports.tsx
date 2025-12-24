
import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 2000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 1890 },
  { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

const Reports: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Header 
        title="Analytics & Reports" 
        rightAction={
          <button className="p-2 bg-white dark:bg-surface-dark rounded-full shadow-sm text-primary">
            <span className="material-symbols-outlined">download</span>
          </button>
        }
      />
      
      <main className="flex-1 px-4 py-4 pb-24 overflow-y-auto">
        {/* Date Filters */}
        <div className="flex gap-3 mb-6 overflow-x-auto hide-scrollbar">
          <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-md shadow-primary/20">This Month</button>
          <button className="px-4 py-2 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-full text-sm font-medium">Last Month</button>
          <button className="px-4 py-2 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-full text-sm font-medium">This Year</button>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
                <span className="material-symbols-outlined text-xl">group_add</span>
              </div>
              <span className="text-[10px] font-bold text-secondary bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded-full">+12%</span>
            </div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">New Students</p>
            <p className="text-2xl font-bold mt-1">45</p>
          </div>
          <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600">
                <span className="material-symbols-outlined text-xl">payments</span>
              </div>
              <span className="text-[10px] font-bold text-secondary bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded-full">+5%</span>
            </div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Revenue</p>
            <p className="text-2xl font-bold mt-1">1.2B</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-5 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Revenue Trend</h3>
              <p className="text-xs text-slate-400 mt-1">Oct 01 - Oct 30</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-primary">1.2B ₫</p>
              <p className="text-[10px] font-bold text-secondary">+8.5% growth</p>
            </div>
          </div>
          <div className="h-56 w-full -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#135bec" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#135bec" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#135bec" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Success Rate */}
        <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-6">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-100 dark:text-slate-700" />
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray={176} strokeDashoffset={176 * (1 - 0.88)} className="text-secondary" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">88%</span>
          </div>
          <div>
            <h3 className="font-bold">Pass Rate</h3>
            <p className="text-sm text-slate-400">Exceeding last month's performance</p>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Reports;
