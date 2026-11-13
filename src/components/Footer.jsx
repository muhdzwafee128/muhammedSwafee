import { ArrowUp } from 'lucide-react';
import portfolio from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-light-border dark:border-dark-borderSubtle bg-light-bg dark:bg-dark-bg py-8 sm:py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-display font-extrabold text-base text-light-textPrimary dark:text-dark-textPrimary">
            {portfolio.brandName || 'Swafee.'}
          </span>
          <span className="hidden sm:inline text-light-border dark:text-dark-border">
            •
          </span>
          <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted">
            {portfolio.footerText || `© ${new Date().getFullYear()} Muhammed Swafee A V. All rights reserved.`}
          </p>
        </div>

        {/* Minimal Back-to-Top Action */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-light-textSecondary dark:text-dark-textSecondary hover:text-light-textPrimary dark:hover:text-dark-textPrimary hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors focus-ring"
        >
          <span>Back to Top</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
