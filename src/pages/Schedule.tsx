import { useState, type FormEvent } from 'react';
import { initialSessions, type Session } from '../data/sessions';

export default function Schedule() {
  const [sessions, setSessions] = useState<Session[]>(initialSessions);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    group: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!form.title.trim() || !form.date || !form.time || !form.location.trim()) {
      setError('Title, date, time, and location are required.');
      return;
    }

    const newSession: Session = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      date: form.date,
      time: form.time,
      location: form.location.trim(),
      group: form.group.trim(),
    };

    setSessions(
      [...sessions, newSession].sort((a, b) => a.date.localeCompare(b.date))
    );
    setForm({ title: '', date: '', time: '', location: '', group: '' });
    setShowForm(false);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Training Schedule</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
        >
          {showForm ? 'Cancel' : '+ Add Session'}
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
              Session Title *
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Group / Team
            </label>
            <input
              type="text"
              name="group"
              value={form.group}
              onChange={handleChange}
              placeholder="e.g. U-15 Boys"
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Date *
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Time *
            </label>
            <input
              type="text"
              name="time"
              value={form.time}
              onChange={handleChange}
              placeholder="e.g. 7:00 AM"
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Location *
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Save Session
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-slate-800">{session.title}</h3>
              <p className="text-sm text-slate-500">
                {session.group || 'All groups'} · {session.location}
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium text-slate-700">{session.date}</p>
              <p className="text-sm text-slate-500">{session.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}