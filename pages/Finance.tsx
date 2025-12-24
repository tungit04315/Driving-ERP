
import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { MOCK_TRANSACTIONS } from '../constants';

const Finance: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark min-h-screen">
      <Header title="Finance Management" />

      <main className="flex-1 px-4 py-4 pb-24 overflow-y-auto">
        {/* Balance Cards */}
        <section className="mb-6">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            <div className="min-w-[280px] bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Revenue</p>
              </div>
              <p className="text-3xl font-bold tracking-tight">1.25B ₫</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-bold text-secondary">+15% vs last month</span>
              </div>
            </div>
            <div className="min-w-[280px] bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30">
                  <span className="material-symbols-outlined">pending_actions</span>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Uncollected Fees</p>
              </div>
              <p className="text-3xl font-bold tracking-tight">45.0M ₫</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-bold text-danger">8 students overdue</span>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Progress */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-bold">Monthly Collection Progress</h2>
          <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="mb-3 flex justify-between items-end">
              <span className="text-sm font-medium text-slate-500">Target reached</span>
              <span className="text-lg font-bold text-primary">85%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
              <div className="h-full rounded-full bg-primary transition-all duration-1000" style={{width: '85%'}}></div>
            </div>
            <p className="text-[10px] text-slate-400 mt-3 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">info</span>
              Current total: 850M / Goal: 1B
            </p>
          </div>
        </section>

        {/* Transactions */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Recent Transactions</h2>
            <button className="text-xs font-bold text-primary">View All</button>
          </div>
          <div className="flex flex-col gap-3">
            {MOCK_TRANSACTIONS.map((tx) => (
              <div 
                key={tx.id}
                className="group flex items-center justify-between rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800 active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                    tx.type === 'income' 
                      ? 'bg-green-50 text-green-600 dark:bg-green-900/20' 
                      : 'bg-red-50 text-red-600 dark:bg-red-900/20'
                  }`}>
                    <span className="material-symbols-outlined">
                      {tx.type === 'income' ? 'payments' : 'account_balance'}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900 dark:text-white">{tx.studentName}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{tx.category} • {tx.code}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`font-bold ${tx.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                    {tx.type === 'income' ? '+' : '-'}{tx.amount.toLocaleString()} ₫
                  </span>
                  <span className="text-[10px] text-slate-400">{tx.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Finance;
