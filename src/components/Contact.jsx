import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contacts = [
    { icon: <FiMail size={18} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FiPhone size={18} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <FiMapPin size={18} />, label: 'Location', value: 'Kathmandu, Nepal / India', href: null },
  ];

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="contact-section__bg" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            Say hello
          </span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="contact-section__sub">
            Have a project, opportunity, or just want to connect? I'm always open to conversations.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact__info-title">Let's build something together</h3>
            <p className="contact__info-body">
              I'm currently seeking full-time roles in full-stack development, ML engineering, or data engineering.
              Open to remote and on-site opportunities globally.
            </p>

            <div className="contact__links">
              {contacts.map((c) => (
                <div key={c.label} className="contact__link-item glass-card">
                  <div className="contact__link-icon">{c.icon}</div>
                  <div>
                    <span className="contact__link-label">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="contact__link-value">{c.value}</a>
                    ) : (
                      <p className="contact__link-value">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact__social">
                <FiGithub size={18} />
                <span>GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact__social">
                <FiLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label className="contact__label">Name</label>
                <input
                  className="contact__input"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label">Email</label>
                <input
                  className="contact__input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="contact__field">
              <label className="contact__label">Subject</label>
              <input
                className="contact__input"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>
            <div className="contact__field">
              <label className="contact__label">Message</label>
              <textarea
                className="contact__input contact__textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
                rows={5}
              />
            </div>
            <button type="submit" className={`btn-primary contact__submit${sent ? ' contact__submit--sent' : ''}`}>
              {sent ? '✓ Opening Mail Client' : <><FiSend size={14} /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-section { position: relative; }
        .contact-section__bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .contact-section__sub {
          color: var(--text-secondary);
          font-size: 15px;
          margin-top: 12px;
          max-width: 500px;
        }
        .contact__grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 48px;
          align-items: start;
        }
        .contact__info-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .contact__info-body {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 28px;
        }
        .contact__links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .contact__link-item {
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .contact__link-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: var(--cyan-dim);
          color: var(--cyan);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .contact__link-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2px;
        }
        .contact__link-value {
          font-size: 13px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition);
        }
        a.contact__link-value:hover { color: var(--cyan); }
        .contact__socials {
          display: flex;
          gap: 12px;
        }
        .contact__social {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 100px;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: var(--transition);
          background: var(--bg-card);
        }
        .contact__social:hover { color: var(--cyan); border-color: var(--border-active); background: var(--cyan-dim); }
        .contact__form { padding: 32px; }
        .contact__form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .contact__field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
        .contact__label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .contact__input {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 14px;
          transition: var(--transition);
          outline: none;
          resize: none;
        }
        .contact__input::placeholder { color: var(--text-muted); }
        .contact__input:focus { border-color: var(--border-active); background: rgba(0,212,255,0.03); box-shadow: 0 0 0 3px rgba(0,212,255,0.08); }
        .contact__textarea { min-height: 120px; }
        .contact__submit { width: 100%; justify-content: center; }
        .contact__submit--sent { background: linear-gradient(135deg, var(--emerald), #059669) !important; }
        @media (max-width: 900px) {
          .contact__grid { grid-template-columns: 1fr; gap: 40px; }
          .contact__form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
