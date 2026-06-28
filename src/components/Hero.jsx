import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

/* ── Neural-net particle canvas ─────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H, particles;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      init();
    };

    const init = () => {
      const count = Math.floor((W * H) / 14000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // edges
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__canvas" />;
}

/* ── Typing animation ───────────────────────────────────── */
function TypedText({ texts }) {
  const el = useRef(null);
  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = texts[idx.current];
      if (!deleting.current) {
        charIdx.current++;
        if (charIdx.current > current.length) {
          deleting.current = true;
          clearInterval(interval);
          setTimeout(() => startTyping(), 1800);
          return;
        }
      } else {
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % texts.length;
        }
      }
      if (el.current) el.current.textContent = current.slice(0, charIdx.current);
    }, deleting.current ? 40 : 70);

    const startTyping = () => {
      const iv = setInterval(() => {
        const cur = texts[idx.current];
        if (!deleting.current) {
          charIdx.current++;
          if (charIdx.current > cur.length) {
            deleting.current = true;
            clearInterval(iv);
            setTimeout(() => startTyping(), 1800);
            return;
          }
        } else {
          charIdx.current--;
          if (charIdx.current === 0) {
            deleting.current = false;
            idx.current = (idx.current + 1) % texts.length;
          }
        }
        if (el.current) el.current.textContent = cur.slice(0, charIdx.current);
      }, deleting.current ? 40 : 70);
    };

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <span className="hero__typed">
      <span ref={el} />
      <span className="hero__cursor">|</span>
    </span>
  );
}

/* ── Hero ───────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="hero" id="home">
      <ParticleCanvas />

      <div className="hero__glow hero__glow--cyan" />
      <div className="hero__glow hero__glow--violet" />

      <div className="container hero__content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="hero__greeting">
            <span className="hero__dot" />
            Available for opportunities
          </span>

          <h1 className="hero__name">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="hero__role">
            <TypedText
              texts={[
                'Full Stack Developer',
                'AI / ML Engineer',
                'Deep Learning Researcher',
                'Big Data Enthusiast',
              ]}
            />
          </div>

          <p className="hero__bio">{personalInfo.bio}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary">
              View My Work <FiArrowDown />
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>

          <div className="hero__socials">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hero__social">
              <FiGithub size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hero__social">
              <FiLinkedin size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__social">
              <FiMail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__badge-group"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__avatar">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar-inner">
              <span className="hero__avatar-initials">AM</span>
            </div>
          </div>
          <div className="hero__stats">
            {[
              { num: '5+', label: 'Projects Built' },
              { num: '8.34', label: 'CGPA' },
              { num: '230+', label: 'LeetCode' },
              { num: '2', label: 'Internships' },
            ].map((s) => (
              <div key={s.label} className="hero__stat glass-card">
                <span className="hero__stat-num gradient-text">{s.num}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }
        .hero__canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.5;
          pointer-events: none;
        }
        .hero__glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        .hero__glow--cyan {
          width: 500px; height: 500px;
          background: rgba(0, 212, 255, 0.07);
          top: -100px; left: -100px;
        }
        .hero__glow--violet {
          width: 400px; height: 400px;
          background: rgba(124, 58, 237, 0.08);
          bottom: 0; right: 10%;
        }
        .hero__content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 64px;
          padding-top: 40px;
          padding-bottom: 80px;
        }
        .hero__greeting {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--cyan);
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          padding: 6px 14px;
          border-radius: 100px;
          background: var(--cyan-dim);
          border: 1px solid rgba(0,212,255,0.2);
        }
        .hero__dot {
          width: 7px; height: 7px;
          background: var(--emerald);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--emerald);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .hero__name {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .hero__role {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 2.5vw, 1.7rem);
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 24px;
          min-height: 2.2em;
        }
        .hero__typed { color: var(--text-primary); }
        .hero__cursor {
          animation: blink 1s infinite;
          color: var(--cyan);
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hero__bio {
          font-size: 15px;
          color: var(--text-secondary);
          max-width: 520px;
          margin-bottom: 36px;
          line-height: 1.75;
        }
        .hero__actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .hero__socials {
          display: flex;
          gap: 12px;
        }
        .hero__social {
          width: 42px; height: 42px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          background: var(--bg-card);
          text-decoration: none;
          transition: var(--transition);
        }
        .hero__social:hover {
          color: var(--cyan);
          border-color: var(--border-active);
          background: var(--cyan-dim);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px var(--cyan-glow);
        }
        .hero__avatar {
          position: relative;
          width: 220px; height: 220px;
          margin: 0 auto 32px;
        }
        .hero__avatar-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: conic-gradient(var(--cyan), var(--violet), var(--cyan));
          animation: spin 6s linear infinite;
          padding: 3px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .hero__avatar-inner {
          position: absolute;
          inset: 4px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--bg-surface), var(--bg-deep));
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid var(--bg-void);
        }
        .hero__avatar-initials {
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--cyan), var(--violet));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero__stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .hero__stat {
          padding: 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hero__stat-num {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
        }
        .hero__stat-label {
          font-size: 11px;
          color: var(--text-muted);
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
        }
        .hero__scroll-hint {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-size: 11px;
          font-family: var(--font-mono);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          z-index: 2;
          animation: float 2.5s ease-in-out infinite;
        }
        @keyframes float { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
        .hero__scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, transparent, var(--cyan));
        }
        @media (max-width: 900px) {
          .hero__content { grid-template-columns: 1fr; gap: 48px; }
          .hero__badge-group { order: -1; }
          .hero__bio { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
