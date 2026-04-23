'use client';

import { useEffect, useState } from 'react';
import styles from './Nav.module.scss';
import Logo from '@/components/Logo/Logo';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
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
        <Logo variant="nav" />

        <nav className={`${styles.links} ${open ? styles.open : ''}`}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
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
