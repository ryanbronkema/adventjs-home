import Link from 'next/link';
import styles from './backarrow.module.css';

export default function BackArrow() {
  return (
    <div className={styles.arrowWrap}>
        <Link title="Back to home" href="/" className={styles.arrow}>&lt;-</Link>
    </div>
  );
}
