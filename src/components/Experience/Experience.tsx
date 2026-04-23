'use client';

import { useState } from 'react';
import styles from './Experience.module.scss';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  const [active, setActive] = useState(0);
  const current = experiences[active];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <p className={styles.kicker}>// experience</p>
        <h2 className={styles.heading}>Where I&apos;ve shipped</h2>

        <div className={styles.layout}>
          <div className={styles.tabs} role="tablist">
            {experiences.map((e, i) => (
              <button
                key={e.company}
                role="tab"
                aria-selected={i === active}
                className={`${styles.tab} ${i === active ? styles.active : ''}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabMark} />
                <span className={styles.tabText}>
                  <span className={styles.tabCompany}>{e.company}</span>
                  <span className={styles.tabPeriod}>{e.period}</span>
                </span>
              </button>
            ))}
          </div>

          <div className={styles.panel} key={active}>
            <header className={styles.panelHeader}>
              <h3 className={styles.role}>
                {current.role}{' '}
                <span className={styles.at}>@ {current.company}</span>
              </h3>
              <p className={styles.meta}>
                <span>{current.period}</span>
                <span className={styles.dotSep}>·</span>
                <span>{current.location}</span>
                <span className={styles.dotSep}>·</span>
                <span>{current.mode}</span>
              </p>
              <p className={styles.description}>{current.description}</p>
            </header>

            {current.bullets && (
              <ul className={styles.bullets}>
                {current.bullets.map((b, i) => (
                  <li key={i}>
                    <span className={styles.bulletIcon}>▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {current.projects?.map((p) => (
              <div key={p.name} className={styles.project}>
                <div className={styles.projectHead}>
                  <h4 className={styles.projectName}>{p.name}</h4>
                  {p.duration && (
                    <span className={styles.projectDuration}>{p.duration}</span>
                  )}
                </div>
                <p className={styles.projectSummary}>{p.summary}</p>
                <ul className={styles.bullets}>
                  {p.bullets.map((b, i) => (
                    <li key={i}>
                      <span className={styles.bulletIcon}>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.tags}>
                  {p.stack.map((s) => (
                    <span key={s} className={styles.tag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {current.stack && (
              <div className={styles.tags}>
                {current.stack.map((s) => (
                  <span key={s} className={styles.tag}>
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
