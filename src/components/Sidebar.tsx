import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/app' },
  { name: 'Players', path: '/app/players' },
  { name: 'Schedule', path: '/app/schedule' },
  { name: 'Messages', path: '/app/messages' },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`h-screen bg-slate-900 text-white flex flex-col p-4 fixed left-0 top-0 transition-all duration-200 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between mb-8 px-1">
        {!collapsed && <h1 className="text-xl font-bold">Francis Academy</h1>}
        <button
          onClick={onToggle}
          className="text-slate-300 hover:text-white p-1"
          aria-label="Toggle sidebar"
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/app'}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`
            }
          >
            {collapsed ? item.name.charAt(0) : item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}