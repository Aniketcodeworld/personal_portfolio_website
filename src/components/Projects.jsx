import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const categories = ['All', 'Full Stack', 'AI/ML', 'Data Science'];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="project-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ '--accent': project.color }}
    >
      <div className="project-card__top-accent" />

      <div className="project-card__header">
        <div>
          <span className="project-card__period">{project.period}</span>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__subtitle">{project.subtitle}</p>
        </div>
        <div className="project-card__category">
          <span className={`tag ${project.category === 'AI/ML' ? 'violet' : project.category === 'Data Science' ? 'rose' : 'amber'}`}>
            {project.category}
          </span>
        </div>
      </div>

      <div className="project-card__highlight">
        <span className="project-card__highlight-dot" />
        {project.highlight}
      </div>

      <p className="project-card__desc">{project.description}</p>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            className="project-card__bullets"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.bullets.map((b, i) => (
              <li key={i} className="project-card__bullet">
                <span className="project-card__bullet-dot" />
                {b}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="project-card__tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="project-card__actions">
        <button
          className="project-card__expand"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <><FiChevronUp /> Less</> : <><FiChevronDown /> Details</>}
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn-outline project-card__btn"
        >
          <FiGithub size={14} /> Code
        </a>
      </div>

      <style>{`
        .project-card {
          padding: 28px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .project-card__top-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), transparent);
        }
        .project-card__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }
        .project-card__period {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          display: block;
          margin-bottom: 6px;
        }
        .project-card__title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
          color: var(--text-primary);
        }
        .project-card__subtitle {
          font-size: 12px;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .project-card__highlight {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent);
          padding: 8px 12px;
          background: rgba(0,0,0,0.2);
          border-radius: var(--radius-sm);
          border-left: 2px solid var(--accent);
        }
        .project-card__highlight-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          box-shadow: 0 0 6px var(--accent);
        }
        .project-card__desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .project-card__bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: hidden;
        }
        .project-card__bullet {
          display: flex;
          gap: 10px;
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .project-card__bullet-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          margin-top: 7px;
        }
        .project-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .project-card__actions {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 4px;
        }
        .project-card__expand {
          display: flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 12px;
          font-family: var(--font-mono);
          cursor: pointer;
          padding: 6px 0;
          transition: var(--transition);
        }
        .project-card__expand:hover { color: var(--cyan); }
        .project-card__btn {
          padding: 7px 16px !important;
          font-size: 12px !important;
          margin-left: auto;
        }
      `}</style>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section projects-section" id="projects" ref={ref}>
      <div className="projects-section__bg" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            {"// work"}
            </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects__subtitle">
            A selection of what I've built — from autonomous driving AI to production web platforms.
          </p>
        </motion.div>

        <div className="projects__filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`projects__filter-btn${filter === c ? ' active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-section { position: relative; }
        .projects-section__bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.03) 0%, transparent 60%);
          pointer-events: none;
        }
        .projects__subtitle {
          color: var(--text-secondary);
          font-size: 15px;
          margin-top: 12px;
          max-width: 560px;
        }
        .projects__filters {
          display: flex;
          gap: 8px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .projects__filter-btn {
          padding: 8px 20px;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
        }
        .projects__filter-btn:hover { color: var(--cyan); border-color: var(--border-active); }
        .projects__filter-btn.active {
          background: var(--cyan-dim);
          color: var(--cyan);
          border-color: var(--border-active);
        }
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) { .projects__grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 680px) { .projects__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
