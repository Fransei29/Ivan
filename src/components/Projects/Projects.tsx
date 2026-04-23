import styles from './Projects.module.scss';
import { highlights } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <p className={styles.kicker}>// shipped things</p>
        <h2 className={styles.heading}>Selected highlights</h2>
        <p className={styles.intro}>
          A few non-trivial pieces I&apos;ve built, debugged, or rescued in
          production — the kind of features that require owning the full stack.
        </p>

        <div className={styles.grid}>
          {highlights.map((h, i) => (
            <article key={h.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>0{i + 1}</span>
                <span className={styles.cardLine} />
              </div>
              <h3 className={styles.cardTitle}>{h.title}</h3>
              <p className={styles.cardDetail}>{h.detail}</p>
              <div className={styles.cardGlow} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
