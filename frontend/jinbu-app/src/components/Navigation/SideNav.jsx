import { useState } from 'react';
import { mockCategories } from '../../data/mockData';

export function SideNav({ activeCategory = null, onCategoryChange = null }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <aside className="hidden lg:flex flex-col h-full border-r border-outline-variant/10 dark:border-outline-variant/10 w-64 fixed left-0 top-0 pt-24 bg-surface dark:bg-surface">
      <div className="px-6 mb-10">
        <h2 className="text-xl font-headline font-light text-on-surface dark:text-on-surface">
          Collections
        </h2>
        <p className="text-xs text-on-surface-variant dark:text-on-surface-variant font-label uppercase tracking-widest mt-1">
          Curated Categories
        </p>
      </div>

      <nav className="flex flex-col flex-1">
        {mockCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange && onCategoryChange(category.id)}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`px-6 py-3 flex items-center gap-4 hover:translate-x-1 transition-all duration-300 text-left ${
              activeCategory === category.id 
                ? 'text-primary dark:text-primary font-medium bg-surface-container-high dark:bg-surface-container-high rounded-r-xl'
                : 'text-on-surface/60 dark:text-on-surface/60 hover:text-on-surface dark:hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-lg">
              {category.icon}
            </span>
            {category.name}
          </button>
        ))}
      </nav>

      {/* Collections Footer */}
      <div className="p-6 border-t border-outline-variant/10 dark:border-outline-variant/10">
        <button className="w-full bg-surface-container-high dark:bg-surface-container-high border border-outline-variant/20 dark:border-outline-variant/20 py-3 rounded-xl text-xs font-label uppercase tracking-widest hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors text-on-surface dark:text-on-surface">
          Create Gallery
        </button>
      </div>
    </aside>
  );
}
