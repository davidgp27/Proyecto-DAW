import { Link } from 'react-router-dom';

export function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-t border-outline-variant/10 dark:border-outline-variant/10 z-50 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-primary dark:text-primary flex flex-col items-center gap-1 hover:scale-110 transition-transform">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          explore
        </span>
        <span className="text-[10px] uppercase tracking-tighter text-on-surface dark:text-on-surface">
          Explore
        </span>
      </Link>

      <button className="text-on-surface-variant dark:text-on-surface-variant flex flex-col items-center gap-1 hover:text-on-surface dark:hover:text-on-surface transition-colors">
        <span className="material-symbols-outlined">
          auto_awesome_motion
        </span>
        <span className="text-[10px] uppercase tracking-tighter">
          Feed
        </span>
      </button>

      <Link to="/" className="bg-gradient-to-br from-primary to-primary-container p-3 rounded-full -mt-12 shadow-xl shadow-primary/20 flex items-center justify-center hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-on-primary dark:text-on-primary">
          add
        </span>
      </Link>

      <button className="text-on-surface-variant dark:text-on-surface-variant flex flex-col items-center gap-1 hover:text-on-surface dark:hover:text-on-surface transition-colors">
        <span className="material-symbols-outlined">
          notifications
        </span>
        <span className="text-[10px] uppercase tracking-tighter">
          Alerts
        </span>
      </button>

      <Link to="/profile" className="text-on-surface-variant dark:text-on-surface-variant flex flex-col items-center gap-1 hover:text-on-surface dark:hover:text-on-surface transition-colors">
        <span className="material-symbols-outlined">
          person
        </span>
        <span className="text-[10px] uppercase tracking-tighter">
          Me
        </span>
      </Link>
    </div>
  );
}
