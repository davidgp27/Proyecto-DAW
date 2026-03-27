import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export function TopNav() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-surface/60 dark:bg-surface/60 backdrop-blur-xl sticky top-0 z-50">
      <nav className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-headline italic text-on-surface dark:text-on-surface">
          Jinbu
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-on-surface/70 dark:text-on-surface/70 hover:text-on-surface dark:hover:text-on-surface transition-colors font-headline font-light tracking-tight">
            Explore
          </Link>
          <Link to="/" className="text-on-surface/70 dark:text-on-surface/70 hover:text-on-surface dark:hover:text-on-surface transition-colors font-headline font-light tracking-tight">
            Feed
          </Link>
          <Link to="/" className="text-on-surface/70 dark:text-on-surface/70 hover:text-on-surface dark:hover:text-on-surface transition-colors font-headline font-light tracking-tight">
            Activity
          </Link>
          <Link to="/profile" className="text-on-surface/70 dark:text-on-surface/70 hover:text-on-surface dark:hover:text-on-surface transition-colors font-headline font-light tracking-tight">
            Profile
          </Link>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="hidden sm:flex items-center bg-surface-container-low dark:bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/10">
            <span className="material-symbols-outlined text-on-surface-variant dark:text-on-surface-variant text-sm mr-2">
              search
            </span>
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface dark:text-on-surface placeholder:text-on-surface-variant/50 dark:placeholder:text-on-surface-variant/50"
              placeholder="Search creators..."
              type="text"
            />
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-surface-container-high dark:hover:bg-surface-container-high rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface dark:text-on-surface">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Upload Button */}
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-all active:scale-95 duration-200">
            Upload
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2"
          >
            <span className="material-symbols-outlined text-on-surface dark:text-on-surface">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
