import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Code2, Layers, Info } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll while modal is active
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm -z-10"
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 14 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl
                     bg-white dark:bg-dark-card
                     border border-light-border dark:border-dark-border
                     shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar with Title, Status & Close Button */}
          <div className="flex items-start justify-between p-5 sm:p-6 border-b border-light-borderSubtle dark:border-dark-border bg-light-secondary/50 dark:bg-dark-secondary/50">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted">
                  Project Details
                </span>

                {/* Development Status Badge */}
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

              <h3
                id="modal-project-title"
                className="font-display text-xl sm:text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary"
              >
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-xs sm:text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mt-0.5">
                  {project.subtitle}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close project details"
              className="p-2 rounded-xl text-light-textSecondary dark:text-dark-textSecondary
                         hover:bg-zinc-200/60 dark:hover:bg-zinc-800
                         hover:text-light-textPrimary dark:hover:text-dark-textPrimary
                         transition-colors focus-ring"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
            {/* Project Image or Neutral Code-Header Preview */}
            {project.image ? (
              <div className="rounded-xl overflow-hidden border border-light-border dark:border-dark-border aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill"
                />
              </div>
            ) : (
              <div className="rounded-xl overflow-hidden border border-light-border dark:border-dark-border bg-light-secondary/60 dark:bg-dark-secondary/60 p-4 sm:p-5">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-light-border dark:border-dark-border">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  </div>
                  <span className="text-xs font-mono text-light-muted dark:text-dark-muted">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}.config
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-light-textPrimary dark:text-dark-textPrimary">
                  <Code2 size={16} />
                  <span>Stack: {project.technologies.slice(0, 4).join(' • ')}</span>
                </div>
              </div>
            )}

            {/* Overview / Detailed Description */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-light-muted dark:text-dark-muted mb-2">
                Overview
              </h4>
              <p className="text-sm sm:text-base text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Key Features (renders automatically if present) */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-light-muted dark:text-dark-muted mb-3 flex items-center gap-1.5">
                  <Layers size={14} />
                  <span>Key Features</span>
                </h4>
                <ul className="space-y-2.5">
                  {project.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-zinc-700 dark:text-zinc-300 flex-shrink-0 mt-0.5"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technology Stack */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-light-muted dark:text-dark-muted mb-2.5">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg
                               bg-zinc-100 dark:bg-zinc-800
                               text-light-textSecondary dark:text-dark-textSecondary
                               border border-light-border dark:border-dark-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Details (Renders automatically if present in data) */}
            {project.additionalDetails && (
              <div className="p-3.5 rounded-xl bg-light-secondary/60 dark:bg-dark-secondary/60 border border-light-border dark:border-dark-border text-xs sm:text-sm text-light-textSecondary dark:text-dark-textSecondary flex items-start gap-2.5">
                <Info size={16} className="text-zinc-700 dark:text-zinc-300 flex-shrink-0 mt-0.5" />
                <span>{project.additionalDetails}</span>
              </div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-5 border-t border-light-borderSubtle dark:border-dark-border bg-light-secondary/50 dark:bg-dark-secondary/50 flex flex-wrap items-center justify-end gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm"
              >
                <Github size={16} />
                <span>View GitHub Repository</span>
              </a>
            )}

            {project.demoUrl && project.demoUrl.trim() !== '' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm"
              >
                <ExternalLink size={16} />
                <span>View Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-medium rounded-xl text-light-textSecondary dark:text-dark-textSecondary hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors focus-ring"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
