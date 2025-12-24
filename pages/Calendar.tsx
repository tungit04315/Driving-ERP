
import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { MOCK_SCHEDULE } from '../constants';

const Calendar: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <Header title="Schedule" showBackButton />
      
      {/* Calendar View Toggle */}
      <div className="px-4 pb-2 bg-background-light dark:bg-background-dark">
        <div className="flex h-10 w-full items-center justify-center rounded-xl bg-slate-200 dark:bg-surface-dark p-1 mt-2">
          <button className="flex-1 bg-white dark:bg-slate-700 shadow-sm rounded-lg py-1 text-sm font-medium">Day</button>
          <button className="flex-1 text-slate-500 text-sm font-medium">Week</button>
          <button className="flex-1 text-slate-500 text-sm font-medium">Month</button>
        </div>

        {/* Date Selector */}
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex items-center justify-between">
            <button className="p-1"><span className="material-symbols-outlined">chevron_left</span></button>
            <span className="text-base font-bold">October, 2023</span>
            <button className="p-1"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
          <div className="flex justify-between items-center gap-1 overflow-x-auto no-scrollbar pb-2">
            {[18, 19, 20, 21, 22, 23, 24].map((day, idx) => (
              <div key={day} className={`flex flex-col items-center gap-1 min-w-[3.5rem] cursor-pointer ${day === 18 ? '' : 'opacity-60'}`}>
                <span className={`text-xs font-bold ${day === 18 ? 'text-primary' : 'text-slate-500'}`}>
                  {['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'][idx]}
                </span>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold ${day === 18 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'text-slate-700 dark:text-slate-300'}`}>
                  {day}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto relative no-scrollbar bg-white dark:bg-[#151b26]">
        {/* Current Time Line */}
        <div className="absolute w-full border-t-2 border-red-500 z-10 top-[180px] pointer-events-none flex items-center">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1"></div>
        </div>

        {/* Time Grid */}
        <div className="relative pb-24">
          {[7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((hour) => {
            const events = MOCK_SCHEDULE.filter(e => e.timeRange.startsWith(`${hour < 10 ? '0' : ''}${hour}`));
            
            return (
              <div key={hour} className="flex w-full h-24 border-b border-slate-50 dark:border-slate-800/50">
                <div className="w-16 shrink-0 text-right pr-3 pt-2 text-[10px] font-bold text-slate-400 dark:text-slate-600">
                  {hour}:00
                </div>
                <div className="flex-1 relative border-l border-slate-50 dark:border-slate-800/50">
                  {events.map(event => (
                    <div 
                      key={event.id}
                      className={`absolute top-2 left-1 right-2 h-[88px] border-l-4 rounded-r-lg p-3 shadow-sm active:scale-[0.98] transition-all cursor-pointer ${
                        event.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500' : 
                        event.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500' : 
                        'bg-orange-50 dark:bg-orange-900/20 border-orange-500'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className={`text-sm font-bold ${
                          event.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                          event.color === 'emerald' ? 'text-emerald-900 dark:text-emerald-100' :
                          'text-orange-900 dark:text-orange-100'
                        }`}>
                          {event.studentName}
                        </h3>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          event.color === 'blue' ? 'bg-blue-200 text-blue-800' :
                          event.color === 'emerald' ? 'bg-emerald-200 text-emerald-800' :
                          'bg-orange-200 text-orange-800'
                        }`}>
                          {event.category}
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                        <span className="material-symbols-outlined text-[14px]">
                          {event.carPlate ? 'directions_car' : 'location_on'}
                        </span>
                        <span>{event.carPlate || event.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <button className="fixed bottom-24 right-4 z-40 bg-primary hover:bg-primary-dark text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-blue-500/40 active:scale-95 transition-all">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default Calendar;
