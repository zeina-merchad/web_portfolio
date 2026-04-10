import React, { useState } from "react";
import { projects } from "../data";
import { Project } from "../types";

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="font-mono text-xs text-accent-dark bg-accent-light px-2 py-0.5">
    {label}
  </span>
);

const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({
  project,
}) => (
  <div className="group border border-ink-200 bg-white flex flex-col hover:border-ink-400 transition-colors">
    {/* Image area */}
    {project.image ? (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover border-b border-ink-200"
      />
    ) : (
      <div className="w-full h-48 bg-ink-100 border-b border-ink-200 flex items-center justify-center">
        <span className="font-mono text-xs text-ink-400">No preview</span>
      </div>
    )}

    <div className="p-6 flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-ink-400 mb-1">{project.year}</p>
          <h3 className="font-display text-xl font-semibold text-ink-900 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 shrink-0 mt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-400 hover:text-ink-900 transition-colors"
              aria-label="GitHub"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.005 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-400 hover:text-ink-900 transition-colors"
              aria-label="Live site"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <p className="text-ink-600 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visible = showAll ? rest : rest.slice(0, 2);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="px-6 max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
              02 — Projects
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-900">
              Things I've built
            </h2>
          </div>
          <span className="font-mono text-xs text-ink-400">
            {projects.length} total
          </span>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-px bg-ink-200 border border-ink-200 mb-px">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-3 gap-px bg-ink-200 border border-ink-200 border-t-0">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {rest.length > 2 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-mono text-sm text-ink-600 hover:text-accent border border-ink-200 px-6 py-2 hover:border-accent transition-colors"
            >
              {showAll ? "Show less" : `Show ${rest.length - 2} more`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
