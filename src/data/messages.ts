export interface Announcement {
  id: string;
  author: string;
  content: string;
  date: string;
}

export const initialMessages: Announcement[] = [
  {
    id: '1',
    author: 'Coach Emeka',
    content:
      'Reminder: Saturday match kicks off at 9 AM. Players should arrive by 8 AM for warm-up.',
    date: '2026-08-29',
  },
  {
    id: '2',
    author: 'Academy Admin',
    content:
      'Registration for the next term opens Monday. Please update your ward\u2019s contact details if anything has changed.',
    date: '2026-08-27',
  },
];