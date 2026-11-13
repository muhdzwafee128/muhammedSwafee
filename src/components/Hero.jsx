import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';
import portfolio from '../data/portfolio';

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle monochrome ambient glow for restrained visual depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-[32rem] h-[32rem] rounded-full bg-zinc-300/15 dark:bg-zinc-700/10 blur-3xl -z-10"
      />

      <div className="section-container">
        <div className="max-w-4xl text-left">
          {/* Professional Role & Positioning */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-light-muted dark:text-dark-muted mb-2">
              {portfolio.role || 'Frontend Web Developer'}
            </span>
            <p className="text-xs sm:text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary">
              {portfolio.supportingRole ||
                'MERN Stack Developer / Building web experiences and exploring product development.'}
            </p>
          </div>

          {/* Large, Oversized Display Headline: Muhammed Swafee A V */}
          {/* Line breaks controlled so 'A V' never awkwardly wraps alone */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-light-textPrimary dark:text-dark-textPrimary mb-6 sm:mb-8">
            <span className="inline-block">Muhammed</span>{' '}
            <span className="inline-block">Swafee</span>{' '}
            <span className="inline-block whitespace-nowrap">A V</span>
          </h1>

          {/* Short, Confident Introduction */}
          <p className="text-base sm:text-lg md:text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl leading-relaxed mb-8 sm:mb-10">
            {portfolio.heroDescription ||
              'Building thoughtful digital experiences through frontend development, creative problem-solving and technology.'}
          </p>

          {/* Hero Actions & Monochrome Social Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary Action: View My Work */}
            <a
              href="#work"
              onClick={(e) => handleScrollTo(e, 'work')}
              className="btn-primary h-12 px-6"
            >
              <span>View My Work</span>
              <ArrowDown size={16} />
            </a>

            {/* Secondary Action: Contact Me */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="btn-secondary h-12 px-6"
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </a>

            {/* Monochrome Social Icons */}
            <div className="flex items-center gap-2.5 sm:ml-1">
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Muhammed Swafee's LinkedIn Profile"
                className="h-12 w-12 rounded-xl border border-light-border dark:border-dark-border
                           bg-white/60 dark:bg-dark-card/60
                           text-light-textSecondary dark:text-dark-textSecondary
                           hover:text-light-textPrimary dark:hover:text-dark-textPrimary
                           hover:border-zinc-400 dark:hover:border-zinc-500
                           flex items-center justify-center
                           transition-colors focus-ring"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Muhammed Swafee's GitHub Profile"
                className="h-12 w-12 rounded-xl border border-light-border dark:border-dark-border
                           bg-white/60 dark:bg-dark-card/60
                           text-light-textSecondary dark:text-dark-textSecondary
                           hover:text-light-textPrimary dark:hover:text-dark-textPrimary
                           hover:border-zinc-400 dark:hover:border-zinc-500
                           flex items-center justify-center
                           transition-colors focus-ring"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
