import { Award, Calendar, CheckCircle } from 'lucide-react';
import portfolio from '../data/portfolio';

export default function Recognition() {
  const items = portfolio.recognition || [];

  if (items.length === 0) return null;

  return (
    <section
      id="recognition"
      className="py-14 sm:py-16 md:py-20 scroll-mt-20 border-t border-light-border dark:border-dark-borderSubtle bg-light-secondary/40 dark:bg-dark-secondary/40"
    >
      <div className="section-container">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="section-subtitle">Milestones &amp; Events</span>
          <h2 className="section-title mb-3">Recognition &amp; Achievements</h2>
          <p className="text-sm sm:text-base text-light-textSecondary dark:text-dark-textSecondary">
            Verified event leadership, hackathon coordination, and competition participation.
          </p>
        </div>

        {/* Clean Structured List Layout */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200"
            >
              <div>
                {/* Year & Role Badge */}
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-light-borderSubtle dark:border-dark-border">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted font-mono">
                    <Calendar size={13} />
                    <span>{item.year}</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-200/80 dark:bg-zinc-800 text-light-textPrimary dark:text-dark-textPrimary border border-light-border dark:border-dark-border">
                    {item.role}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-1">
                  {item.title}
                </h3>

                {/* Organization */}
                <p className="text-xs sm:text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-3">
                  {item.organization}
                </p>

                {/* Description */}
                {item.description && (
                  <p className="text-xs sm:text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
