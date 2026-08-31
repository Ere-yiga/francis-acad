export interface Player {
  id: string;
  fullName: string;
  age: number;
  position: string;
  phone: string;
  guardianName: string;
  guardianPhone: string;
}

export const initialPlayers: Player[] = [
  {
    id: '1',
    fullName: 'Chidi Okafor',
    age: 15,
    position: 'Forward',
    phone: '08012345678',
    guardianName: 'Mrs. Okafor',
    guardianPhone: '08023456789',
  },
  {
    id: '2',
    fullName: 'Ifeanyi Obi',
    age: 14,
    position: 'Midfielder',
    phone: '08034567890',
    guardianName: 'Mr. Obi',
    guardianPhone: '08045678901',
  },
  {
    id: '3',
    fullName: 'Emeka Nwosu',
    age: 16,
    position: 'Defender',
    phone: '08056789012',
    guardianName: 'Mrs. Nwosu',
    guardianPhone: '08067890123',
  },
];