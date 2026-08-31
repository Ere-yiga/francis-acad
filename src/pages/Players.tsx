import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { initialPlayers, type Player } from '../data/players';
export default function Players() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    fullName: '',
    age: '',
    position: '',
    phone: '',
    guardianName: '',
    guardianPhone: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    // Basic validation — prevents empty or malformed entries
    if (!form.fullName.trim() || !form.age || !form.position) {
      setError('Full name, age, and position are required.');
      return;
    }

    const ageNum = Number(form.age);
    if (isNaN(ageNum) || ageNum < 5 || ageNum > 25) {
      setError('Please enter a valid age between 5 and 25.');
      return;
    }

    const phoneRegex = /^[0-9]{10,11}$/;
    if (form.phone && !phoneRegex.test(form.phone)) {
      setError('Please enter a valid phone number (10-11 digits).');
      return;
    }

    const newPlayer: Player = {
      id: crypto.randomUUID(),
      fullName: form.fullName.trim(),
      age: ageNum,
      position: form.position,
      phone: form.phone.trim(),
      guardianName: form.guardianName.trim(),
      guardianPhone: form.guardianPhone.trim(),
    };

    setPlayers([...players, newPlayer]);
    setForm({
      fullName: '',
      age: '',
      position: '',
      phone: '',
      guardianName: '',
      guardianPhone: '',
    });
    setShowForm(false);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Players</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
        >
          {showForm ? 'Cancel' : '+ Register Player'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-sm mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {error && (
            <p className="md:col-span-2 text-red-600 bg-red-50 px-3 py-2 rounded-md text-sm">
              {error}
            </p>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Age *
            </label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Position *
            </label>
            <select
              name="position"
              value={form.position}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select position</option>
              <option value="Goalkeeper">Goalkeeper</option>
              <option value="Defender">Defender</option>
              <option value="Midfielder">Midfielder</option>
              <option value="Forward">Forward</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Player Phone
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="08012345678"
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Guardian Name
            </label>
            <input
              type="text"
              name="guardianName"
              value={form.guardianName}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Guardian Phone
            </label>
            <input
              type="text"
              name="guardianPhone"
              value={form.guardianPhone}
              onChange={handleChange}
              placeholder="08012345678"
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Save Player
            </button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-100 text-slate-600 text-sm">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Position</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Guardian</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr
  key={player.id}
  onClick={() => navigate(`/players/${player.id}`)}
  className="border-t border-slate-100 hover:bg-slate-50 cursor-pointer"
>
                <td className="px-4 py-3 font-medium text-slate-800">{player.fullName}</td>
                <td className="px-4 py-3 text-slate-600">{player.age}</td>
                <td className="px-4 py-3 text-slate-600">{player.position}</td>
                <td className="px-4 py-3 text-slate-600">{player.phone || '—'}</td>
                <td className="px-4 py-3 text-slate-600">{player.guardianName || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}