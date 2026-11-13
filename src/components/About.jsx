import portfolio from '../data/portfolio';

export default function About() {
  return (
    <section
      id="about"
      className="py-14 sm:py-16 md:py-20 scroll-mt-20 border-t border-light-border dark:border-dark-borderSubtle"
    >
      <div className="section-container">
        <span className="section-subtitle">Overview</span>
        <h2 className="section-title mb-6 sm:mb-8">About Me</h2>

        <div className="max-w-3xl">
          <p className="text-base sm:text-lg md:text-xl text-light-textSecondary dark:text-dark-textSecondary leading-relaxed font-normal">
            {portfolio.about}
          </p>
        </div>
      </div>
    </section>
  );
}
