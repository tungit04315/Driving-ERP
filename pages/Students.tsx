
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { MOCK_STUDENTS } from '../constants';
import { useNavigate } from 'react-router-dom';

const Students: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = MOCK_STUDENTS.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <Header title="Students List" />
      
      {/* Search & Filter */}
      <div className="sticky top-[61px] z-20 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm pt-4 pb-2">
        <div className="px-4 mb-3">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">search</span>
            </div>
            <input 
              className="block w-full pl-10 pr-4 py-3 border-none rounded-xl bg-white dark:bg-surface-dark shadow-sm text-sm focus:ring-2 focus:ring-primary placeholder-slate-400 dark:text-white" 
              placeholder="Search name, code..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 px-4 overflow-x-auto hide-scrollbar pb-2">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white rounded-full whitespace-nowrap shadow-sm text-sm font-medium">
            <span className="material-symbols-outlined text-[18px]">check</span>
            All
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-full whitespace-nowrap text-sm font-medium">
            <span className="material-symbols-outlined text-[18px] text-blue-500">school</span>
            Learning
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-full whitespace-nowrap text-sm font-medium">
            <span className="material-symbols-outlined text-[18px] text-green-500">verified</span>
            Completed
          </button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-4 pb-24">
        {/* Stats Row */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 bg-white dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Total</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{MOCK_STUDENTS.length}</p>
          </div>
          <div className="flex-1 bg-white dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Exam Near</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">12</p>
          </div>
        </div>

        {/* Student Cards */}
        <div className="flex flex-col gap-4">
          {filteredStudents.map(student => (
            <div 
              key={student.id}
              onClick={() => navigate(`/student/${student.id}`)}
              className="cursor-pointer bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-3 active:scale-[0.99] transition-transform"
            >
              <div className="flex items-start gap-3">
                <img 
                  src={student.avatar} 
                  className="w-12 h-12 rounded-full border border-slate-100 dark:border-slate-700" 
                  alt={student.name}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">{student.name}</h3>
                    <button className="text-slate-400"><span className="material-symbols-outlined">more_vert</span></button>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    <span className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-300 font-medium font-mono">{student.code}</span>
                    <span>•</span>
                    <span>Class {student.classType}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-end text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Progress</span>
                  <span className={`font-semibold ${student.progress === 100 ? 'text-secondary' : 'text-primary'}`}>
                    {student.progress}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${student.progress === 100 ? 'bg-secondary' : 'bg-primary'}`} 
                    style={{width: `${student.progress}%`}}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-50 dark:border-slate-700/50">
                <div className="flex items-center gap-1.5">
                  <span className={`flex h-2 w-2 rounded-full ${student.status === 'active' ? 'bg-blue-500' : 'bg-green-500'}`}></span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    {student.status === 'active' ? 'Studying' : 'Completed'}
                  </span>
                </div>
                <button className="flex items-center gap-1 text-primary text-xs font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 px-2 py-1 rounded">
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <button className="fixed bottom-24 right-4 z-40 bg-primary hover:bg-primary-dark text-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all active:scale-95">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default Students;
