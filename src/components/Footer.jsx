import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__line" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>&lt;</span>
            <span className="gradient-text" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>AM</span>
            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>/&gt;</span>
          </span>
          <p className="footer__tagline">Building intelligent systems, one commit at a time.</p>
        </div>

        <div className="footer__socials">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="footer__social">
            <FiGithub size={16} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="footer__social">
            <FiLinkedin size={16} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="footer__social">
            <FiMail size={16} />
          </a>
        </div>

        <p className="footer__copy">
          Made with <FiHeart size={12} style={{ display: 'inline', color: 'var(--rose)' }} /> by Aniket Mishra · {new Date().getFullYear()}
        </p>
      </div>

      <style>{`
        .footer { padding: 40px 0 24px; }
        .footer__line {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
          margin-bottom: 36px;
        }
        .footer__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer__brand { display: flex; flex-direction: column; gap: 6px; }
        .footer__logo { font-size: 1.2rem; display: inline-flex; align-items: center; gap: 2px; }
        .footer__tagline { font-size: 12px; color: var(--text-muted); font-family: var(--font-mono); }
        .footer__socials { display: flex; gap: 10px; }
        .footer__social {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          color: var(--text-muted);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: var(--transition);
          background: var(--bg-card);
        }
        .footer__social:hover { color: var(--cyan); border-color: var(--border-active); background: var(--cyan-dim); }
        .footer__copy { font-size: 12px; color: var(--text-muted); display: flex; align-items: center; gap: 4px; }
        @media (max-width: 600px) {
          .footer__inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
