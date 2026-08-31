import { initialPlayers } from '../data/players';
import { initialSessions } from '../data/sessions';
import { initialMessages } from '../data/messages';

export default function Dashboard() {
  const stats = [
    { label: 'Total Players', value: initialPlayers.length },
    { label: 'Upcoming Sessions', value: initialSessions.length },
    { label: 'Announcements', value: initialMessages.length },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}