import { useParams, Link } from 'react-router-dom';
import { initialPlayers } from '../data/players';
import { initialStats } from '../data/stats';

export default function PlayerDetail() {
  const { id } = useParams();
  const player = initialPlayers.find((p) => p.id === id);
  const stats = initialStats.filter((s) => s.playerId === id);

  if (!player) {
    return (
      <div>
        <p className="text-slate-600">Player not found.</p>
        <Link to="/players" className="text-emerald-600 underline">
          Back to Players
        </Link>
      </div>
    );
  }

  const totalGoals = stats.reduce((sum, s) => sum + s.goals, 0);
  const totalAssists = stats.reduce((sum, s) => sum + s.assists, 0);
  const sessionsPresent = stats.filter((s) => s.attendance === 'Present').length;

  return (
    <div>
      <Link to="/players" className="text-emerald-600 text-sm hover:underline">
        ← Back to Players
      </Link>

      <div className="bg-white rounded-lg shadow-sm p-6 my-4">
        <h1 className="text-2xl font-bold text-slate-800">{player.fullName}</h1>
        <p className="text-slate-500">
          {player.position} · Age {player.age}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div>
            <p className="text-sm text-slate-500">Phone</p>
            <p className="text-slate-800">{player.phone || '—'}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Guardian</p>
            <p className="text-slate-800">{player.guardianName || '—'}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Guardian Phone</p>
            <p className="text-slate-800">{player.guardianPhone || '—'}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600">{totalGoals}</p>
          <p className="text-sm text-slate-500">Goals</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600">{totalAssists}</p>
          <p className="text-sm text-slate-500">Assists</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600">{sessionsPresent}</p>
          <p className="text-sm text-slate-500">Sessions Present</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-100 text-slate-600 text-sm">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Goals</th>
              <th className="px-4 py-3">Assists</th>
              <th className="px-4 py-3">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((s) => (
              <tr key={s.id} className="border-t border-slate-100">
                <td className="px-4 py-3 text-slate-600">{s.date}</td>
                <td className="px-4 py-3 text-slate-600">{s.goals}</td>
                <td className="px-4 py-3 text-slate-600">{s.assists}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      s.attendance === 'Present'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {s.attendance}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}