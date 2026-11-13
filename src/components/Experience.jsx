import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import portfolio from '../data/portfolio';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-14 sm:py-16 md:py-20 scroll-mt-20 border-t border-light-border dark:border-dark-borderSubtle bg-light-secondary/40 dark:bg-dark-secondary/40"
    >
      <div className="section-container">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="section-subtitle">Career &amp; Leadership</span>
          <h2 className="section-title mb-3">Experience</h2>
          <p className="text-sm sm:text-base text-light-textSecondary dark:text-dark-textSecondary">
            Community leadership, technical event coordination, and student developer mentorship.
          </p>
        </div>

        {/* Minimal Stacked Experience Entries (Neeraj Rajeev style) */}
        <div className="space-y-6 max-w-3xl">
          {portfolio.experience.map((exp, i) => (
            <div
              key={i}
              className="glass-card p-6 sm:p-7 relative border-l-4 border-l-zinc-900 dark:border-l-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all"
            >
              {/* Header: Role, Badges & Date */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">
                    {exp.role}
                  </h3>
                  {exp.workMode && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-200/80 dark:bg-zinc-800 text-light-textPrimary dark:text-dark-textPrimary border border-light-border dark:border-dark-border">
                      {exp.workMode}
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-light-muted dark:text-dark-muted font-mono">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Organization and Location */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-4">
                <span className="inline-flex items-center gap-1.5 text-light-textPrimary dark:text-dark-textPrimary font-semibold">
                  <Briefcase size={14} />
                  {exp.orgUrl ? (
                    <a
                      href={exp.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      {exp.organization}
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span>{exp.organization}</span>
                  )}
                </span>
                {exp.location && (
                  <span className="inline-flex items-center gap-1 text-light-muted dark:text-dark-muted">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                )}
              </div>

              {/* Concise Bulleted Responsibilities */}
              <ul className="space-y-2 mb-5">
                {exp.responsibilities.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Relevant Skills as small muted tags */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-light-borderSubtle dark:border-dark-border">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-md
                                 bg-zinc-100 dark:bg-zinc-800/60
                                 text-light-muted dark:text-dark-muted
                                 border border-light-borderSubtle dark:border-dark-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
