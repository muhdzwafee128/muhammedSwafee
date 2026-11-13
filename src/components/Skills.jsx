import TechIcon from './TechIcon';
import portfolio from '../data/portfolio';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-14 sm:py-16 md:py-20 scroll-mt-20 border-t border-light-border dark:border-dark-borderSubtle"
    >
      <div className="section-container">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="section-subtitle">Core Tools &amp; Languages</span>
          <h2 className="section-title mb-3">Technical Stack</h2>
          <p className="text-sm sm:text-base text-light-textSecondary dark:text-dark-textSecondary">
            Technologies, frameworks, and tools I use to design, architect, and build software.
          </p>
        </div>

        {/* Minimal Clean Grid (Neeraj Rajeev inspired) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {portfolio.skills.map((skill) => (
            <div
              key={skill}
              className="glass-card p-4 flex flex-col items-center justify-center gap-2.5 text-center
                         hover:border-zinc-400 dark:hover:border-zinc-600
                         hover:-translate-y-0.5 transition-all duration-200 cursor-default group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <TechIcon name={skill} size={28} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-light-textPrimary dark:text-dark-textPrimary">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
