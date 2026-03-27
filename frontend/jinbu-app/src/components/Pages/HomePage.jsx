import { useState, useEffect } from 'react';
import { TopNav } from '../Navigation/TopNav';
import { SideNav } from '../Navigation/SideNav';
import { BottomNav } from '../Navigation/BottomNav';
import { Footer } from '../Layout/Footer';
import { PhotoCard } from '../Cards/PhotoCard';
import { mockPhotos } from '../../data/mockData';

export function HomePage() {
  const [photos, setPhotos] = useState(mockPhotos);
  const [activeCategory, setActiveCategory] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState(() => {
    const saved = localStorage.getItem('likedPhotos');
    return saved ? JSON.parse(saved) : [];
  });
  const [bookmarkedPhotos, setBookmarkedPhotos] = useState(() => {
    const saved = localStorage.getItem('bookmarkedPhotos');
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar likes en localStorage
  useEffect(() => {
    localStorage.setItem('likedPhotos', JSON.stringify(likedPhotos));
  }, [likedPhotos]);

  // Guardar bookmarks en localStorage
  useEffect(() => {
    localStorage.setItem('bookmarkedPhotos', JSON.stringify(bookmarkedPhotos));
  }, [bookmarkedPhotos]);

  // Filtrar fotos por categoría
  const filteredPhotos = activeCategory 
    ? photos.filter(photo => photo.category === activeCategory)
    : photos;

  const handleLike = (photoId) => {
    setLikedPhotos(prev => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  const handleBookmark = (photoId) => {
    setBookmarkedPhotos(prev => 
      prev.includes(photoId)
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-surface">
      <TopNav />
      <SideNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <main className="lg:ml-64 pt-24 pb-24 md:pb-0">
        {/* Header Section */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-12">
          <div className="flex justify-between items-center">
            <h1 className="font-headline text-3xl text-on-surface dark:text-on-surface">
              {activeCategory ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Photography` : 'Curated Collections'}
            </h1>
            {activeCategory && (
              <button 
                onClick={() => setActiveCategory(null)}
                className="text-xs uppercase tracking-widest text-primary hover:text-primary/80 transition-colors font-label"
              >
                Clear Filter
              </button>
            )}
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="max-w-screen-2xl mx-auto px-8">
          <div className="masonry-grid">
            {filteredPhotos.map(photo => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onLike={handleLike}
                onBookmark={handleBookmark}
                isLiked={likedPhotos.includes(photo.id)}
                isBookmarked={bookmarkedPhotos.includes(photo.id)}
              />
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-20 mb-20">
            <button className="border border-outline-variant/30 dark:border-outline-variant/30 text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface hover:border-on-surface-variant dark:hover:border-on-surface-variant transition-all px-12 py-4 rounded-full font-label tracking-widest uppercase text-xs">
              Load More
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />

      <style>{`
        .masonry-grid {
          column-count: 1;
          column-gap: 2rem;
        }
        @media (min-width: 768px) { 
          .masonry-grid { column-count: 2; } 
        }
        @media (min-width: 1280px) { 
          .masonry-grid { column-count: 3; } 
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}
