import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiCode, FiCpu, FiDatabase } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const highlights = [
  { icon: <FiCode size={20} />, title: 'Full Stack', desc: 'React · Spring Boot · MERN · REST APIs · JWT' },
  { icon: <FiCpu size={20} />, title: 'AI / ML', desc: 'TensorFlow · PyTorch · CNN · Transfer Learning' },
  { icon: <FiDatabase size={20} />, title: 'Data', desc: 'MySQL · MongoDB · Power BI · Big Data Analytics' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about__grid"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="about__text">
            <span className="section-label">
              About me
            </span>
            <h2 className="section-title">
              Crafting <span className="gradient-text">Intelligent</span> Solutions
            </h2>
            <p className="about__para">
              I'm a final-year B.Tech CSE student at SRM University AP, specializing in Big Data Analytics.
              My passion sits at the intersection of deep learning research and scalable web engineering — I don't
              just train models, I ship full systems.
            </p>
            <p className="about__para">
              From architecting a YOLOv8 + DeepLabV3+ perception pipeline for autonomous driving to building
              production-ready MERN platforms, I care equally about the model metrics and the user experience.
              I've interned at HCLTech as a Java Full Stack trainee and solved 230+ LeetCode problems to keep
              fundamentals razor-sharp.
            </p>
            <div className="about__certs">
              <span className="tag">Oracle Certified Java SE 11</span>
              <span className="tag violet">AWS Cloud Essentials</span>
              <span className="tag emerald">230+ LeetCode</span>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary about__btn"
              style={{ marginTop: '28px' }}
            >
              <FiDownload /> View GitHub
            </a>
          </div>

          <div className="about__cards">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="about__card glass-card"
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="about__card-icon">{h.icon}</div>
                <h3 className="about__card-title">{h.title}</h3>
                <p className="about__card-desc">{h.desc}</p>
              </motion.div>
            ))}

            <motion.div
              className="about__card about__card--quote glass-card"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <p className="about__quote">
                "Code is craft. Models are tools. The product is what matters."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .about__para {
          color: var(--text-secondary);
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .about__certs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }
        .about__btn { display: inline-flex; }
        .about__cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .about__card {
          padding: 24px;
        }
        .about__card--quote {
          grid-column: 1 / -1;
          text-align: center;
          border-color: rgba(124,58,237,0.2) !important;
        }
        .about__card-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: var(--cyan-dim);
          color: var(--cyan);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .about__card-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .about__card-desc {
          font-size: 13px;
          color: var(--text-muted);
          font-family: var(--font-mono);
          line-height: 1.6;
        }
        .about__quote {
          font-family: var(--font-display);
          font-size: 1rem;
          font-style: italic;
          color: var(--text-secondary);
        }
        @media (max-width: 900px) {
          .about__grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 500px) {
          .about__cards { grid-template-columns: 1fr; }
          .about__card--quote { grid-column: 1; }
        }
      `}</style>
    </section>
  );
}
