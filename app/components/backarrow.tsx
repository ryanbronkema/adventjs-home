import Link from 'next/link';
import styles from './backarrow.module.css';

export default function BackArrow() {
  return (
    <>
      <div className={styles.description}>
        <Link href="/">&lt;- Back to home</Link>
      </div>
    </>
  );
}