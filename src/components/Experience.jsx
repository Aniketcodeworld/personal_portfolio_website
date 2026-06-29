import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiBook } from 'react-icons/fi';
import { experience, education } from '../data/portfolioData';

function TimelineItem({ data, index, isExp }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="timeline-item"
      initial={{ opacity: 0, x: isExp ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
    >
      <div className="timeline-item__dot">
        {isExp ? <FiBriefcase size={14} /> : <FiBook size={14} />}
      </div>
      <div className="timeline-item__card glass-card">
        <div className="timeline-item__meta">
          <span className="timeline-item__period">{data.period}</span>
          {data.location && (
            <span className="timeline-item__location">{data.location}</span>
          )}
        </div>
        <h3 className="timeline-item__title">{isExp ? data.role : data.degree}</h3>
        <p className="timeline-item__company">{isExp ? data.company : data.institution}</p>
        {data.description && (
          <p className="timeline-item__desc">{data.description}</p>
        )}
        {data.score && (
          <span className="timeline-item__score">{data.score}</span>
        )}
        {data.detail && data.detail.length > 0 && (
          <span className="timeline-item__detail">{data.detail}</span>
        )}
        {data.tags && (
          <div className="timeline-item__tags">
            {data.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .timeline-item {
          display: flex;
          gap: 20px;
          position: relative;
          padding-left: 8px;
        }
        .timeline-item__dot {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: var(--cyan-dim);
          border: 1px solid var(--border-active);
          color: var(--cyan);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          margin-top: 4px;
        }
        .timeline-item__card {
          flex: 1;
          padding: 24px;
          margin-bottom: 0;
        }
        .timeline-item__meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          flex-wrap: wrap;
          gap: 4px;
        }
        .timeline-item__period {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--cyan);
          letter-spacing: 0.05em;
        }
        .timeline-item__location {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
        }
        .timeline-item__title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .timeline-item__company {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 10px;
        }
        .timeline-item__desc {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 12px;
        }
        .timeline-item__score {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--emerald);
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.25);
          padding: 3px 10px;
          border-radius: 100px;
          margin-right: 8px;
        }
        .timeline-item__detail {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted);
        }
        .timeline-item__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }
      `}</style>
    </motion.div>
  );
}

function Timeline({ items, isExp }) {
  return (
    <div className="timeline">
      <div className="timeline__line" />
      <div className="timeline__items">
        {items.map((item, i) => (
          <TimelineItem key={i} data={item} index={i} isExp={isExp} />
        ))}
      </div>
      <style>{`
        .timeline { position: relative; }
        .timeline__line {
          position: absolute;
          top: 18px;
          bottom: 0;
          left: 25px;
          width: 1px;
          background: linear-gradient(to bottom, var(--border-active), transparent);
        }
        .timeline__items {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-left: 4px;
        }
      `}</style>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section exp-section" id="experience" ref={ref}>
      <div className="exp-section__bg" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            {"// journey"}
          </span>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="exp-section__grid">
          <div>
            <h3 className="exp-section__col-title">
              <FiBriefcase size={16} />
              Work Experience
            </h3>
            <Timeline items={experience} isExp={true} />
          </div>
          <div>
            <h3 className="exp-section__col-title">
              <FiBook size={16} />
              Education
            </h3>
            <Timeline items={education} isExp={false} />
          </div>
        </div>
      </div>

      <style>{`
        .exp-section { position: relative; }
        .exp-section__bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 20% 80%, rgba(0,212,255,0.04) 0%, transparent 60%);
          pointer-events: none;
        }
        .exp-section__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .exp-section__col-title {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 12px;
          font-family: var(--font-mono);
        }
        @media (max-width: 900px) {
          .exp-section__grid { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>
    </section>
  );
}
