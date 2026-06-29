import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section" id="education" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
          Achievements
            </span>
          <h2 className="section-title">
            Certifications &amp; <span className="gradient-text">Awards</span>
          </h2>
        </motion.div>

        <div className="certs__grid">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              className="cert-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="cert-card__icon">
                <FiAward size={22} />
              </div>
              <div className="cert-card__body">
                <h3 className="cert-card__title">{c.title}</h3>
                <p className="cert-card__issuer">{c.issuer}</p>
              </div>
              {c.link && (
                <a href={c.link} target="_blank" rel="noreferrer" className="cert-card__link">
                  <FiExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .certs__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .cert-card {
          padding: 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .cert-card__icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: var(--violet-dim);
          color: #A78BFA;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .cert-card__body { flex: 1; }
        .cert-card__title {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .cert-card__issuer {
          font-size: 12px;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .cert-card__link {
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition);
          padding: 4px;
          flex-shrink: 0;
        }
        .cert-card__link:hover { color: var(--cyan); }
        @media (max-width: 900px) { .certs__grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .certs__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
