
import { Student, Transaction, ScheduleEvent } from './types';

export const MOCK_STUDENTS: Student[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    avatar: 'https://picsum.photos/seed/stu1/200',
    classType: 'B2',
    progress: 75,
    status: 'active',
    code: 'HV-2023-001'
  },
  {
    id: '2',
    name: 'Trần Thị B',
    avatar: 'https://picsum.photos/seed/stu2/200',
    classType: 'C',
    progress: 100,
    status: 'completed',
    code: 'HV-2023-042'
  },
  {
    id: '3',
    name: 'Lê Văn C',
    avatar: 'https://picsum.photos/seed/stu3/200',
    classType: 'B1',
    progress: 45,
    status: 'active',
    code: 'HV-2023-088'
  }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 'gd1',
    studentName: 'Nguyễn Văn A',
    amount: 5000000,
    date: '2023-10-18',
    type: 'income',
    code: 'GD-09382',
    category: 'Học phí'
  },
  {
    id: 'gd2',
    studentName: 'Trung tâm',
    amount: 2000000,
    date: '2023-10-17',
    type: 'expense',
    code: 'GD-09383',
    category: 'Bảo trì xe'
  }
];

export const MOCK_SCHEDULE: ScheduleEvent[] = [
  {
    id: 'e1',
    timeRange: '08:00 - 10:00',
    studentName: 'Nguyễn Văn A',
    category: 'B2',
    carPlate: '30E-123.45',
    color: 'blue'
  },
  {
    id: 'e2',
    timeRange: '10:00 - 11:30',
    studentName: 'Trần Thị B',
    category: 'Sa hình',
    location: 'Sân số 1',
    color: 'emerald'
  }
];
