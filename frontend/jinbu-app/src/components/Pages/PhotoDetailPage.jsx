import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TopNav } from '../Navigation/TopNav';
import { BottomNav } from '../Navigation/BottomNav';
import { Footer } from '../Layout/Footer';
import { CommentCard } from '../Cards/CommentCard';
import { mockPhotos, mockComments } from '../../data/mockData';

export function PhotoDetailPage() {
  const { id } = useParams();
  const photo = mockPhotos.find(p => p.id === parseInt(id));
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  if (!photo) {
    return (
      <div className="min-h-screen bg-surface dark:bg-surface flex items-center justify-center">
        <TopNav />
        <p className="text-on-surface dark:text-on-surface">Photo not found</p>
      </div>
    );
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'You',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdiTQmKNXmJkH8KlaTmW6A0PX1d_tzzspnXBP6Zjbiso9p0TGT99s5yoVTZlLjJN_bjhcjvgIRXkgDMcjZj_ZCI26JgYSt7pFox8yP0tqErOY9nY1Fu9PMdJWMIsoTCNDS3lMjB0drnWEG1LoepypAqbZ3spaQkwKdGRWvGRtkQF03aRxE81LBPE_mjIZDfI_XbkoqTA1kf-lxyPyxRWpKkcJZ3_BUpQJgWzh3IlLZ-mRDnfl9lV6I6zp2CGTekDvIHQt27_LwVw62',
        text: newComment,
        timeAgo: 'now',
        likes: 0
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-surface flex flex-col">
      <TopNav />

      <main className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row flex-1 min-h-screen pt-20">
        {/* Photo Section */}
        <section className="w-full md:w-3/4 bg-surface-container-lowest dark:bg-surface-container-lowest flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full h-full group">
            <img 
              alt={photo.title}
              className="w-full h-full object-contain rounded-lg"
              src={photo.src}
            />

            {/* Fullscreen Button */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-surface-container-highest/80 dark:bg-surface-container-highest/80 backdrop-blur-md p-3 rounded-full text-on-surface dark:text-on-surface hover:bg-primary dark:hover:bg-primary hover:text-on-primary dark:hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">fullscreen</span>
              </button>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-surface-container-low dark:bg-surface-container-low border-l border-outline-variant/15 dark:border-outline-variant/15 flex flex-col h-auto md:h-screen overflow-y-auto">
          <div className="p-8 space-y-10">
            {/* Photographer Profile */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant/30 dark:border-outline-variant/30">
                  <img 
                    alt="Photographer"
                    className="w-full h-full object-cover"
                    src={mockPhotos[0].avatar || mockComments[0].avatar}
                  />
                </div>
                <div>
                  <h3 className="font-headline italic text-lg text-on-surface dark:text-on-surface">
                    {photo.artist}
                  </h3>
                  <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant">
                    Professional Photographer
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-4 py-2 rounded-lg text-xs font-medium uppercase transition-all ${
                  isFollowing 
                    ? 'bg-surface-container-high dark:bg-surface-container-high text-on-surface dark:text-on-surface border border-outline-variant/20'
                    : 'bg-primary dark:bg-primary text-on-primary dark:text-on-primary hover:opacity-90'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>

            {/* Download Button */}
            <button className="w-full bg-surface-container-high dark:bg-surface-container-high hover:bg-surface-bright dark:hover:bg-surface-bright py-3 rounded-xl text-sm font-medium transition-colors text-on-surface dark:text-on-surface border border-outline-variant/20 dark:border-outline-variant/20 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">download</span>
              Download
            </button>

            {/* EXIF Data */}
            <div>
              <h4 className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant mb-4">
                Camera Settings
              </h4>
              <div className="space-y-4">
                <div className="space-y-1 flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-primary dark:text-primary">
                    photo_camera
                  </span>
                  <div>
                    <span className="text-[9px] font-label uppercase text-on-surface-variant dark:text-on-surface-variant block">
                      Camera
                    </span>
                    <p className="text-xs font-label text-on-surface dark:text-on-surface">
                      {photo.exif?.camera || 'Unknown'}
                    </p>
                  </div>
                </div>
                <div className="space-y-1 flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-primary dark:text-primary">
                    lens
                  </span>
                  <div>
                    <span className="text-[9px] font-label uppercase text-on-surface-variant dark:text-on-surface-variant block">
                      Optics
                    </span>
                    <p className="text-xs font-label text-on-surface dark:text-on-surface">
                      {photo.exif?.lens || 'Unknown'}
                    </p>
                  </div>
                </div>
                <div className="space-y-1 flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-primary dark:text-primary">
                    camera
                  </span>
                  <div>
                    <span className="text-[9px] font-label uppercase text-on-surface-variant dark:text-on-surface-variant block">
                      Aperture
                    </span>
                    <p className="text-xs font-label text-on-surface dark:text-on-surface">
                      {photo.exif?.aperture || 'Unknown'}
                    </p>
                  </div>
                </div>
                <div className="space-y-1 flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-primary dark:text-primary">
                    shutter_speed
                  </span>
                  <div>
                    <span className="text-[9px] font-label uppercase text-on-surface-variant dark:text-on-surface-variant block">
                      Shutter
                    </span>
                    <p className="text-xs font-label text-on-surface dark:text-on-surface">
                      {photo.exif?.shutter || 'Unknown'}
                    </p>
                  </div>
                </div>
                <div className="space-y-1 flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-primary dark:text-primary">
                    iso
                  </span>
                  <div>
                    <span className="text-[9px] font-label uppercase text-on-surface-variant dark:text-on-surface-variant block">
                      ISO
                    </span>
                    <p className="text-xs font-label text-on-surface dark:text-on-surface">
                      {photo.exif?.iso || 'Unknown'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interaction Bar */}
            <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10 dark:border-outline-variant/10">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className="flex items-center gap-2 group"
                >
                  <span 
                    className="material-symbols-outlined group-hover:text-error dark:group-hover:text-error transition-colors text-on-surface dark:text-on-surface"
                    style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    favorite
                  </span>
                  <span className="text-xs font-label text-on-surface dark:text-on-surface">
                    {photo.likes}
                  </span>
                </button>
                <button className="flex items-center gap-2 group">
                  <span className="material-symbols-outlined group-hover:text-primary dark:group-hover:text-primary transition-colors text-on-surface dark:text-on-surface">
                    mode_comment
                  </span>
                  <span className="text-xs font-label text-on-surface dark:text-on-surface">
                    {comments.length}
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors"
                >
                  <span 
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    bookmark
                  </span>
                </button>
                <button className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="space-y-6 pt-6 border-t border-outline-variant/10 dark:border-outline-variant/10">
              <h4 className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant">
                Recent Comments
              </h4>
              
              <div className="space-y-6 max-h-64 overflow-y-auto">
                {comments.map(comment => (
                  <CommentCard key={comment.id} comment={comment} />
                ))}
              </div>

              {/* Comment Input */}
              <div className="relative mt-8">
                <input 
                  className="w-full bg-surface-container-high dark:bg-surface-container-high border border-outline-variant/20 dark:border-outline-variant/20 rounded-xl py-3 px-4 text-xs focus:ring-1 focus:ring-primary/40 placeholder:text-on-surface-variant/40 dark:placeholder:text-on-surface-variant/40 text-on-surface dark:text-on-surface transition-all"
                  placeholder="Add a thought..."
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                />
                <button 
                  onClick={handleAddComment}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary dark:text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
