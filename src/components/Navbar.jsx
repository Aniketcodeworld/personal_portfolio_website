import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="nav__logo-bracket">&lt;</span>
          <span className="gradient-text">AM</span>
          <span className="nav__logo-bracket">/&gt;</span>
        </a>

        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <button
                className={`nav__link${active === l.href ? ' nav__link--active' : ''}`}
                onClick={() => handleNav(l.href)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="mailto:beinganiket07@gmail.com"
          className="btn-outline nav__cta"
        >
          Hire Me
        </a>

        <button className="nav__hamburger" onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {links.map((l) => (
            <button
              key={l.href}
              className="nav__mobile-link"
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
        }
        .nav--scrolled {
          background: rgba(5, 11, 24, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 14px 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.4);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav__logo {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
          flex-shrink: 0;
        }
        .nav__logo-bracket {
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .nav__links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin-left: auto;
        }
        .nav__link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: var(--transition);
        }
        .nav__link:hover, .nav__link--active {
          color: var(--cyan);
          background: var(--cyan-dim);
        }
        .nav__cta { padding: 8px 20px; font-size: 13px; margin-left: 8px; }
        .nav__hamburger {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          margin-left: auto;
        }
        .nav__mobile {
          display: flex;
          flex-direction: column;
          background: rgba(5,11,24,0.97);
          border-top: 1px solid var(--border);
          padding: 16px;
          gap: 4px;
        }
        .nav__mobile-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          text-align: left;
          transition: var(--transition);
        }
        .nav__mobile-link:hover { color: var(--cyan); background: var(--cyan-dim); }
        @media (max-width: 900px) {
          .nav__links, .nav__cta { display: none; }
          .nav__hamburger { display: flex; }
        }
      `}</style>
    </nav>
  );
}
