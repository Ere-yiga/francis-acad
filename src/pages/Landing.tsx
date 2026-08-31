import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <header className="px-8 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Francis Academy</h1>
        <Link
          to="/app"
          className="bg-emerald-600 hover:bg-emerald-700 transition-colors px-4 py-2 rounded-md text-sm font-medium"
        >
          Open Dashboard
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
          Manage your football academy, all in one place.
        </h2>
        <p className="text-slate-400 mt-4 max-w-xl">
          Player registration, performance tracking, training schedules, and
          parent communication — built for Nigerian youth football academies.
        </p>
        <Link
          to="/app"
          className="mt-8 bg-emerald-600 hover:bg-emerald-700 transition-colors px-6 py-3 rounded-md font-medium"
        >
          Get Started
        </Link>
      </main>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-8 pb-12 max-w-5xl mx-auto w-full">
        {[
          { title: 'Player Registration', desc: 'Keep every player\u2019s profile in one place.' },
          { title: 'Performance Stats', desc: 'Track goals, assists, and attendance.' },
          { title: 'Training Schedule', desc: 'Plan and share sessions easily.' },
          { title: 'Parent Updates', desc: 'Post announcements parents can see.' },
        ].map((f) => (
          <div key={f.title} className="bg-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-slate-400">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}