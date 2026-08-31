import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <header className="px-6 md:px-8 py-5 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold">Francis Academy</h1>
        <Link
          to="/app"
          className="bg-emerald-600 hover:bg-emerald-700 transition-colors px-3 py-2 md:px-4 rounded-md text-sm font-medium"
        >
          Open Dashboard
        </Link>
      </header>

      <main
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 bg-cover bg-center relative min-h-[500px]"
        style={{ backgroundImage: "url('/Francis-aca.png')" }}
      >
        <div className="absolute inset-0 bg-slate-950/55"></div>
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Manage your football academy, all in one place.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl">
            Player registration, performance tracking, training schedules, and
            parent communication — built for Nigerian youth football academies.
          </p>
          <Link
            to="/app"
            className="mt-2 bg-emerald-600 hover:bg-emerald-700 transition-colors px-6 py-3 rounded-md font-medium"
          >
            Get Started
          </Link>
        </div>
      </main>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-8 py-10 max-w-5xl mx-auto w-full">
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