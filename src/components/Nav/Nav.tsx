'use client';

import { useEffect, useState } from 'react';
import styles from './Nav.module.scss';

const sections = [
  { id: 'about', label: 'about' },
  { id: 'stack', label: 'stack' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoBracket}>{'{'}</span>
          <span className={styles.logoText}>ivan.dev</span>
          <span className={styles.logoBracket}>{'}'}</span>
        </a>

        <nav className={`${styles.links} ${open ? styles.open : ''}`}>
          {sections.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              <span className={styles.linkIndex}>0{i + 1}.</span> {s.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.cta}
          >
            LinkedIn →
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.burgerOpen : ''} />
          <span className={open ? styles.burgerOpen : ''} />
          <span className={open ? styles.burgerOpen : ''} />
        </button>
      </div>
    </header>
  );
}
