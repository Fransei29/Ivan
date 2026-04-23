import styles from './Logo.module.scss';

type Props = {
  href?: string;
  variant?: 'nav' | 'footer';
  ariaLabel?: string;
};

export default function Logo({
  href = '#top',
  variant = 'nav',
  ariaLabel = 'Ivan Martinez — home',
}: Props) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${styles.logo} ${variant === 'footer' ? styles.footer : ''}`}
    >
      <svg
        className={styles.mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="8"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.35"
        />
        <path
          d="M12 12 V28"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M18 28 V12 L24 22 L30 12 V28"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.text}>Ivan Martinez</span>
    </a>
  );
}
