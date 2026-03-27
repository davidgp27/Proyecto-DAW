import { useState } from 'react';
import { TopNav } from '../Navigation/TopNav';
import { SideNav } from '../Navigation/SideNav';
import { BottomNav } from '../Navigation/BottomNav';
import { Footer } from '../Layout/Footer';
import { mockUserProfile, mockPhotos, mockGear } from '../../data/mockData';

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [isFollowing, setIsFollowing] = useState(mockUserProfile.isFollowing);
  const [profile] = useState(mockUserProfile);

  const portfolioPhotos = mockPhotos.slice(0, 6);

  return (
    <div className="min-h-screen bg-surface dark:bg-surface">
      <TopNav />
      <SideNav />

      <main className="lg:ml-64 pt-24 pb-24 md:pb-0">
        {/* Profile Header */}
        <header className="bg-surface-container-low dark:bg-surface-container-low border-b border-outline-variant/15 dark:border-outline-variant/15">
          <div className="max-w-6xl mx-auto px-8 py-16">
            <div className="flex items-start gap-8">
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full overflow-hidden border border-outline-variant/30 dark:border-outline-variant/30 flex-shrink-0">
                <img 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  src={profile.avatar}
                />
              </div>

              {/* Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="font-headline text-4xl text-on-surface dark:text-on-surface italic">
                    {profile.name}
                  </h1>
                  <p className="text-sm text-on-surface-variant dark:text-on-surface-variant uppercase tracking-widest font-label">
                    {profile.role}
                  </p>
                </div>
                <p className="text-on-surface/80 dark:text-on-surface/80 leading-relaxed max-w-2xl">
                  {profile.bio}
                </p>

                {/* Stats */}
                <div className="flex justify-between items-start pt-4 gap-8">
                  <div className="text-center">
                    <span className="block text-2xl font-light text-on-surface dark:text-on-surface">
                      {profile.followers.toLocaleString()}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant">
                      Followers
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-light text-on-surface dark:text-on-surface">
                      {profile.following.toLocaleString()}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant">
                      Following
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-light text-on-surface dark:text-on-surface">
                      {profile.totalShots}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant">
                      Total Shots
                    </span>
                  </div>
                </div>

                {/* Follow Button */}
                <button 
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-8 py-3 rounded-xl font-medium transition-all ${
                    isFollowing
                      ? 'bg-surface-container-high dark:bg-surface-container-high text-on-surface dark:text-on-surface border border-outline-variant/20 dark:border-outline-variant/20 hover:border-outline-variant/40'
                      : 'bg-gradient-to-br from-primary to-primary-container text-on-primary dark:text-on-primary hover:opacity-90'
                  }`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Tabs Section */}
        <section className="max-w-6xl mx-auto px-8 mt-12">
          <div className="flex gap-12 border-b border-outline-variant/15 dark:border-outline-variant/15 overflow-x-auto no-scrollbar mb-12">
            {[
              { id: 'portfolio', label: 'Portfolio', icon: 'grid_view' },
              { id: 'galleries', label: 'Galleries', icon: 'auto_awesome_motion' },
              { id: 'gear', label: 'Gear', icon: 'camera' },
              { id: 'about', label: 'About', icon: 'person_outline' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 flex items-center gap-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary dark:text-primary border-b-2 border-primary dark:border-primary font-medium'
                    : 'text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
                {portfolioPhotos.map((photo, idx) => (
                  <div 
                    key={photo.id}
                    className={`group relative aspect-square overflow-hidden bg-surface-container-low dark:bg-surface-container-low rounded-xl ${
                      idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                    }`}
                  >
                    <img 
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={photo.src}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      <span className="text-xs uppercase tracking-widest text-primary dark:text-primary mb-2">
                        {photo.category}
                      </span>
                      <h4 className="font-headline text-2xl text-on-surface dark:text-on-surface">
                        {photo.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Galleries Tab */}
            {activeTab === 'galleries' && (
              <div className="mb-20 p-8 bg-surface-container-low dark:bg-surface-container-low rounded-xl text-center">
                <p className="text-on-surface-variant dark:text-on-surface-variant">
                  Galleries coming soon...
                </p>
              </div>
            )}

            {/* Gear Tab */}
            {activeTab === 'gear' && (
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="font-headline text-3xl text-on-surface dark:text-on-surface">
                    The Toolkit
                  </h2>
                  <div className="h-[1px] flex-1 bg-outline-variant/20 dark:bg-outline-variant/20"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {/* Left side - Main gear */}
                  <div className="space-y-12">
                    {mockGear[0] && (
                      <div className="group">
                        <span className="text-[10px] uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant">
                          {mockGear[0].category}
                        </span>
                        <h3 className="font-headline text-2xl mt-1 group-hover:text-primary dark:group-hover:text-primary transition-colors text-on-surface dark:text-on-surface">
                          {mockGear[0].title}
                        </h3>
                        <p className="text-sm text-on-surface/60 dark:text-on-surface/60 mt-2 font-body leading-relaxed">
                          {mockGear[0].description}
                        </p>
                      </div>
                    )}

                    {mockGear[1] && (
                      <div className="group">
                        <span className="text-[10px] uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant">
                          {mockGear[1].category}
                        </span>
                        <div className="space-y-4 mt-4">
                          {mockGear[1].items.map((item, idx) => (
                            <div key={idx}>
                              <h4 className="text-on-surface dark:text-on-surface font-medium">
                                {item.name}
                              </h4>
                              <p className="text-xs text-on-surface-variant dark:text-on-surface-variant">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right side - Accessories */}
                  {mockGear[2] && (
                    <div className="bg-surface-container-low dark:bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 dark:border-outline-variant/10">
                      <h3 className="font-headline text-xl mb-6 text-on-surface dark:text-on-surface">
                        {mockGear[2].category}
                      </h3>
                      <ul className="space-y-6">
                        {mockGear[2].items.map((item, idx) => (
                          <li key={idx} className="flex gap-4">
                            <span className="material-symbols-outlined text-primary dark:text-primary">
                              {item.icon}
                            </span>
                            <div>
                              <p className="text-on-surface dark:text-on-surface text-sm font-medium">
                                {item.name}
                              </p>
                              <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant dark:text-on-surface-variant">
                                {item.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="mb-20 p-8 bg-surface-container-low dark:bg-surface-container-low rounded-xl">
                <p className="text-on-surface dark:text-on-surface text-lg leading-relaxed">
                  {profile.bio}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
