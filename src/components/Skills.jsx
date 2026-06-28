import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';

const CATEGORY_COLORS = {
  'Languages':  'var(--cyan)',
  'Frontend':   'var(--violet)',
  'Backend':    'var(--amber)',
  'Databases':  'var(--emerald)',
  'ML / DL':    'var(--rose)',
  'Tools':      '#60A5FA',
};

const PROFICIENCY = {
  // Languages
  'Java': 88, 'Python': 90, 'JavaScript': 85, 'C': 75, 'C++': 72, 'SQL': 85,
  // Frontend
  'React.js': 87, 'HTML5': 92, 'CSS3': 88, 'Context API': 80, 'Axios': 82,
  // Backend
  'Spring Boot': 83, 'Node.js': 80, 'Express.js': 80, 'REST APIs': 88, 'JWT Auth': 82,
  // DB
  'MySQL': 85, 'MongoDB': 80,
  // ML
  'TensorFlow': 82, 'PyTorch': 78, 'Scikit-learn': 80, 'OpenCV': 75, 'Transfer Learning': 82, 'CNN': 85,
  // Tools
  'Git': 88, 'GitHub': 88, 'Jupyter': 85, 'Google Colab': 83, 'Power BI': 76, 'Swagger': 72,
};

function SkillBar({ name, delay, color }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const pct = PROFICIENCY[name] ?? 75;

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct" style={{ color }}>{pct}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
      <style>{`
        .skill-bar { margin-bottom: 14px; }
        .skill-bar__header { display: flex; justify-content: space-between; margin-bottom: 6px; }
        .skill-bar__name { font-size: 13px; font-family: var(--font-mono); color: var(--text-secondary); }
        .skill-bar__pct { font-size: 12px; font-family: var(--font-mono); font-weight: 600; }
        .skill-bar__track {
          height: 5px;
          background: rgba(255,255,255,0.05);
          border-radius: 100px;
          overflow: hidden;
        }
        .skill-bar__fill { height: 100%; border-radius: 100px; }
      `}</style>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="skills-section__bg" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// technical stack</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="skills__grid">
          {skills.map((cat, ci) => {
            const color = CATEGORY_COLORS[cat.category] || 'var(--cyan)';
            return (
              <motion.div
                key={cat.category}
                className="skills__cat glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
              >
                <div className="skills__cat-header">
                  <span className="skills__cat-dot" style={{ background: color }} />
                  <h3 className="skills__cat-name">{cat.category}</h3>
                </div>
                {cat.items.map((item, ii) => (
                  <SkillBar key={item} name={item} delay={ii * 0.07} color={color} />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Tech tags row */}
        <motion.div
          className="skills__tags-row"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {['YOLOv8','DeepLabV3+','ResNet50','VGG19','InceptionV3','CUDA','AMP','AdamW','Pandas','NumPy','TensorBoard','Kaggle'].map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </motion.div>
      </div>

      <style>{`
        .skills-section { position: relative; }
        .skills-section__bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }
        .skills__cat { padding: 28px; }
        .skills__cat-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .skills__cat-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .skills__cat-name {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 600;
        }
        .skills__tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 8px;
        }
        @media (max-width: 1000px) { .skills__grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .skills__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
