'use client';

import { useMemo } from 'react';
import styles from './Stack.module.scss';
import { stack } from '@/data/portfolio';

export default function Stack() {
  const byCategory = useMemo(() => {
    const acc: Record<string, typeof stack> = {};
    stack.forEach((s) => {
      if (!acc[s.category]) acc[s.category] = [];
      acc[s.category].push(s);
    });
    return acc;
  }, []);

  return (
    <section id="stack" className={styles.stack}>
      <div className={styles.container}>
        <p className={styles.kicker}>// stack</p>
        <h2 className={styles.heading}>Tools I reach for</h2>

        <div className={styles.grid}>
          {Object.entries(byCategory).map(([category, items]) => (
            <div key={category} className={styles.block}>
              <h3 className={styles.blockTitle}>
                <span className={styles.blockBullet} />
                {category}
              </h3>
              <ul className={styles.list}>
                {items.map((it) => (
                  <li key={it.name} className={styles.item}>
                    {it.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
