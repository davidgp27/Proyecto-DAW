import { Link } from 'react-router-dom';
import { useState } from 'react';

export function PhotoCard({ photo, onLike, onBookmark, isLiked, isBookmarked }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/photo/${photo.id}`}
      className="masonry-item group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-surface-container-low dark:bg-surface-container-low">
        <img 
          alt={photo.title} 
          className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
          src={photo.src}
        />
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex justify-between items-center">
            <span className="text-sm font-headline italic text-on-surface dark:text-on-surface">
              {photo.artist}
            </span>
            <div className="flex gap-3">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onLike && onLike(photo.id);
                }}
                className="p-2 bg-surface-container-highest/60 dark:bg-surface-container-highest/60 rounded-full hover:bg-error/20 dark:hover:bg-error/20 hover:text-error dark:hover:text-error transition-colors"
              >
                <span 
                  className="material-symbols-outlined text-lg"
                  style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}
                >
                  favorite
                </span>
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onBookmark && onBookmark(photo.id);
                }}
                className="p-2 bg-surface-container-highest/60 dark:bg-surface-container-highest/60 rounded-full hover:bg-primary/20 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <span 
                  className="material-symbols-outlined text-lg"
                  style={{ fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0" }}
                >
                  bookmark
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
