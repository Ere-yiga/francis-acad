export interface StatEntry {
  id: string;
  playerId: string;
  date: string;
  goals: number;
  assists: number;
  attendance: 'Present' | 'Absent';
}

export const initialStats: StatEntry[] = [
  { id: 's1', playerId: '1', date: '2026-08-20', goals: 2, assists: 1, attendance: 'Present' },
  { id: 's2', playerId: '1', date: '2026-08-25', goals: 0, assists: 2, attendance: 'Present' },
  { id: 's3', playerId: '2', date: '2026-08-20', goals: 0, assists: 0, attendance: 'Absent' },
  { id: 's4', playerId: '2', date: '2026-08-25', goals: 1, assists: 0, attendance: 'Present' },
  { id: 's5', playerId: '3', date: '2026-08-20', goals: 3, assists: 0, attendance: 'Present' },
];