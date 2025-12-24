
export interface Student {
  id: string;
  name: string;
  avatar: string;
  classType: string;
  progress: number;
  status: 'active' | 'completed' | 'pending';
  code: string;
}

export interface Transaction {
  id: string;
  studentName: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
  code: string;
  category: string;
}

export interface ScheduleEvent {
  id: string;
  timeRange: string;
  studentName: string;
  category: string;
  carPlate?: string;
  location?: string;
  color: 'blue' | 'emerald' | 'orange';
}
