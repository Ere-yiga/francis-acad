export interface Session {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  group: string;
}

export const initialSessions: Session[] = [
  {
    id: '1',
    title: 'Morning Training',
    date: '2026-09-02',
    time: '7:00 AM',
    location: 'Main Pitch',
    group: 'U-15 Boys',
  },
  {
    id: '2',
    title: 'Fitness & Drills',
    date: '2026-09-03',
    time: '4:00 PM',
    location: 'Training Ground B',
    group: 'U-17 Boys',
  },
  {
    id: '3',
    title: 'Match Prep',
    date: '2026-09-05',
    time: '9:00 AM',
    location: 'Main Pitch',
    group: 'U-15 Boys',
  },
];