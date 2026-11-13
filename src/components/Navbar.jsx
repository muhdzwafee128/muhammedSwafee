import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import portfolio from '../data/portfolio';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Track scroll position & active section ────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Close mobile menu on resize ───────────────────────── */
  useEffect(() => {
    const close = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  /* ── Lock body scroll when mobile menu open ────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-light-bg/85 dark:bg-dark-bg/85 backdrop-blur-md border-b border-light-border dark:border-dark-border shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav
        className="section-container flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand / Logo: "Swafee." */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display font-extrabold text-xl tracking-tight text-light-textPrimary dark:text-dark-textPrimary focus-ring rounded-lg py-0.5"
        >
          {portfolio.brandName || 'Swafee.'}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium rounded-lg transition-colors focus-ring ${
                    isActive
                      ? 'text-light-textPrimary dark:text-dark-textPrimary font-semibold'
                      : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-textPrimary dark:hover:text-dark-textPrimary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-zinc-900 dark:bg-zinc-100"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side: theme toggle + mobile hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-xl text-light-textSecondary dark:text-dark-textSecondary
                       hover:text-light-textPrimary dark:hover:text-dark-textPrimary
                       hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60
                       border border-transparent hover:border-light-border dark:hover:border-dark-border
                       transition-colors focus-ring"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 rounded-xl text-light-textSecondary dark:text-dark-textSecondary
                       hover:text-light-textPrimary dark:hover:text-dark-textPrimary
                       hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60
                       border border-transparent hover:border-light-border dark:hover:border-dark-border
                       transition-colors focus-ring"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0
                       bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-xl
                       border-b border-light-border dark:border-dark-border
                       shadow-xl"
          >
            <ul className="section-container py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors focus-ring ${
                        isActive
                          ? 'text-light-textPrimary dark:text-dark-textPrimary bg-zinc-200/60 dark:bg-zinc-800/60 font-semibold'
                          : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-textPrimary dark:hover:text-dark-textPrimary hover:bg-zinc-100 dark:hover:bg-zinc-800/40'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
