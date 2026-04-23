import styles from './About.module.scss';
import { profile, education } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p className={styles.kicker}>// about</p>
        <h2 className={styles.heading}>Who is behind the code</h2>

        <div className={styles.grid}>
          <div className={styles.text}>
            {profile.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className={styles.aside}>
            <div className={styles.card}>
              <p className={styles.cardLabel}>location</p>
              <p className={styles.cardValue}>{profile.location}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardLabel}>current role</p>
              <p className={styles.cardValue}>
                Tech Lead @ <span className={styles.accent}>RedLizard</span>
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardLabel}>education</p>
              <p className={styles.cardValue}>{education.degree}</p>
              <p className={styles.cardSub}>
                {education.institution} · {education.period}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
