import { Globe, ShieldAlert, Layout, Users } from 'lucide-react';
import portfolio from '../data/portfolio';

const ICONS = {
  '01': Globe,
  '02': ShieldAlert,
  '03': Layout,
  '04': Users,
};

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="py-14 sm:py-16 md:py-20 scroll-mt-20 border-t border-light-border dark:border-dark-borderSubtle bg-light-secondary/40 dark:bg-dark-secondary/40"
    >
      <div className="section-container">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="section-subtitle">Services &amp; Capabilities</span>
          <h2 className="section-title mb-3">What I Do</h2>
          <p className="text-sm sm:text-base text-light-textSecondary dark:text-dark-textSecondary">
            Open to frontend development roles, internships, freelance projects, and technology
            community collaborations.
          </p>
        </div>

        {/* 4 Focus Areas Responsive Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {portfolio.focusAreas.map((area) => {
            const IconComponent = ICONS[area.id] || Globe;
            return (
              <div
                key={area.id}
                className="glass-card p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 group"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-light-borderSubtle dark:border-dark-border">
                    <span className="font-mono text-xs font-semibold tracking-wider text-light-muted dark:text-dark-muted">
                      {area.id}
                    </span>
                    <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-light-textPrimary dark:text-dark-textPrimary">
                      <IconComponent size={18} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-1.5 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-light-muted dark:text-dark-muted mb-3.5">
                    {area.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
