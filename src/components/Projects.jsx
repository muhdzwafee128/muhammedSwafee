import { useState } from 'react';
import { Github, ExternalLink, Code2, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import portfolio from '../data/portfolio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-14 sm:py-16 md:py-20 scroll-mt-20 border-t border-light-border dark:border-dark-borderSubtle"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="section-subtitle">Selected Projects</span>
          <h2 className="section-title mb-3">Work</h2>
          <p className="text-sm sm:text-base text-light-textSecondary dark:text-dark-textSecondary">
            A selection of web platforms and software products I have built and actively develop.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {portfolio.projects.map((project, i) => (
            <article
              key={project.title}
              className="glass-card flex flex-col justify-between overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 group"
            >
              {/* 1. Preview / Header Area */}
              <div className="relative border-b border-light-borderSubtle dark:border-dark-border bg-zinc-100/70 dark:bg-zinc-900/60 p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  {/* Window dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  </div>

                  {/* Status Badge */}
                  {project.status && (
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        project.status === 'Completed & Deployed'
                          ? 'bg-zinc-200/80 text-zinc-800 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700'
                          : 'bg-zinc-200/80 text-zinc-700 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.status === 'Completed & Deployed'
                            ? 'bg-emerald-500'
                            : 'bg-amber-400'
                        }`}
                      />
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Project Image or Clean Code Preview */}
                {project.image ? (
                  <div className="rounded-xl overflow-hidden aspect-video border border-light-border dark:border-dark-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-fit"
                    />
                  </div>
                ) : (
                  <div className="py-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-200/70 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-xs font-mono text-light-textPrimary dark:text-dark-textPrimary mb-3">
                      <Code2 size={13} />
                      <span>{project.technologies[0]}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                )}
              </div>

              {/* 2. Card Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {project.subtitle && (
                    <p className="text-xs sm:text-sm font-semibold text-light-muted dark:text-dark-muted mb-2">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-5">
                    {project.shortDescription || project.description}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg
                                   bg-zinc-100 dark:bg-zinc-800/80
                                   text-light-textSecondary dark:text-dark-textSecondary
                                   border border-light-borderSubtle dark:border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 text-[11px] font-medium text-light-muted dark:text-dark-muted">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-light-borderSubtle dark:border-dark-border">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-light-textPrimary dark:text-dark-textPrimary hover:underline focus-ring rounded-lg py-1 px-1.5"
                    >
                      <span>View Project</span>
                      <ArrowUpRight size={16} />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="p-2 rounded-xl border border-light-border dark:border-dark-border
                                     text-light-textSecondary dark:text-dark-textSecondary
                                     hover:text-light-textPrimary dark:hover:text-dark-textPrimary
                                     hover:border-zinc-400 dark:hover:border-zinc-500
                                     transition-colors focus-ring"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.demoUrl && project.demoUrl.trim() !== '' && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit live demo for ${project.title}`}
                          className="p-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950
                                     hover:opacity-90 transition-opacity focus-ring"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
