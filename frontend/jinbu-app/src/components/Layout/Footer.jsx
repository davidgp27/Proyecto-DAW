export function Footer() {
  return (
    <footer className="w-full py-12 px-8 mt-20 bg-surface dark:bg-surface border-t border-outline-variant/10 dark:border-outline-variant/10">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-lg font-headline text-on-surface/60 dark:text-on-surface/60 italic">
          Jinbu Digital Gallery
        </div>
        <div className="flex gap-10">
          <a href="#" className="text-on-surface/40 dark:text-on-surface/40 hover:text-on-surface dark:hover:text-on-surface text-[12px] font-label uppercase tracking-widest transition-colors">
            About
          </a>
          <a href="#" className="text-on-surface/40 dark:text-on-surface/40 hover:text-on-surface dark:hover:text-on-surface text-[12px] font-label uppercase tracking-widest transition-colors">
            Terms
          </a>
          <a href="#" className="text-on-surface/40 dark:text-on-surface/40 hover:text-on-surface dark:hover:text-on-surface text-[12px] font-label uppercase tracking-widest transition-colors">
            Privacy
          </a>
          <a href="#" className="text-on-surface/40 dark:text-on-surface/40 hover:text-on-surface dark:hover:text-on-surface text-[12px] font-label uppercase tracking-widest transition-colors">
            Support
          </a>
        </div>
        <div className="text-[12px] font-label uppercase tracking-widest text-on-surface/40 dark:text-on-surface/40">
          © 2024 Jinbu Digital Gallery
        </div>
      </div>
    </footer>
  );
}
