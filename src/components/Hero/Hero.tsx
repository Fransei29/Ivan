'use client';

import styles from './Hero.module.scss';
import { profile, metrics } from '@/data/portfolio';

const heroStack = [
  'React',
  'Node.js',
  'NestJS',
  'Next.js',
  'TypeScript',
  'PostgreSQL',
  'Docker',
  'AWS',
  'GraphQL',
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.grid} aria-hidden />
      <div className={styles.glow} aria-hidden />

      <div className={styles.container}>
        <p className={styles.kicker}>FULL STACK DEVELOPER</p>

        <h1 className={styles.name}>Ivan Martinez</h1>

        <div className={styles.divider} />

        <ul className={styles.chips}>
          {heroStack.map((s) => (
            <li key={s} className={styles.chip}>
              {s}
            </li>
          ))}
        </ul>

        <p className={styles.tagline}>
          4+ years building <strong>production-grade SaaS platforms</strong>.
          Currently Tech Lead at RedLizard, owning end-to-end architecture on a
          multi-tenant document management platform.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            See my work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Get in touch
          </a>
        </div>

        <div className={styles.metrics}>
          {metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
