
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { MOCK_STUDENTS } from '../constants';

const StudentDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = MOCK_STUDENTS.find(s => s.id === id);

  if (!student) {
    return <div className="p-10 text-center">Student not found</div>;
  }

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark min-h-screen">
      <Header title="Student Profile" showBackButton />

      <main className="flex-1 px-4 py-4 pb-20 overflow-y-auto">
        {/* Profile Card */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 text-center mb-4">
          <div className="relative inline-block mb-4">
            <img 
              src={student.avatar} 
              className="w-24 h-24 rounded-full border-4 border-slate-100 dark:border-slate-700 shadow-sm"
              alt={student.name}
            />
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-secondary border-2 border-white dark:border-slate-800 block"></span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{student.name}</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
            Category {student.classType} - K123 • {student.status === 'active' ? 'Studying' : 'Completed'}
          </p>
          <div className="flex gap-3 mt-6">
            <button className="flex-1 flex items-center justify-center h-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl text-slate-900 dark:text-white text-sm font-semibold transition-colors gap-2">
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Call</span>
            </button>
            <button className="flex-1 flex items-center justify-center h-10 bg-primary hover:bg-primary-dark rounded-xl text-white text-sm font-semibold transition-colors gap-2 shadow-sm shadow-primary/30">
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Chat</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[20px]">payments</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Fees</span>
            </div>
            <div>
              <p className="text-xs text-slate-400">Paid</p>
              <p className="text-lg font-bold">10,000,000₫</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Total: 15,000,000₫</p>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 mt-1">
              <div className="bg-secondary h-1.5 rounded-full" style={{width: '66%'}}></div>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Next Slot</span>
            </div>
            <div>
              <p className="text-xs text-slate-400">Upcoming</p>
              <p className="text-base font-bold leading-tight">08:00 - 10:00</p>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">Fri, Oct 25</p>
            </div>
          </div>
        </div>

        {/* Training Timeline */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">route</span>
            Learning Path
          </h3>
          <div className="relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-100 dark:bg-slate-700"></div>
            
            <div className="relative flex gap-4 pb-6">
              <div className="z-10 bg-secondary rounded-full p-0.5 mt-1">
                <span className="material-symbols-outlined text-white text-[18px]">check</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Profile Submission</h4>
                <p className="text-xs text-slate-400">Completed on 12/09/2023</p>
              </div>
            </div>

            <div className="relative flex gap-4 pb-6">
              <div className="z-10 bg-primary rounded-full p-1 mt-1">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-primary">Practical Training</h4>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 mt-2 max-w-[200px]">
                  <div className="bg-primary h-2 rounded-full" style={{width: '50%'}}></div>
                </div>
                <p className="text-xs text-slate-400 mt-1">20/40 hours completed</p>
              </div>
            </div>

            <div className="relative flex gap-4 opacity-50">
              <div className="z-10 bg-slate-200 dark:bg-slate-700 rounded-full w-[26px] h-[26px] flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              </div>
              <div>
                <h4 className="font-bold text-slate-400">Graduation Exam</h4>
                <p className="text-xs text-slate-400">Estimated: Nov 2023</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDetail;
