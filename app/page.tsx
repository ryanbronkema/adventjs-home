import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          See this code collection
          <br />
          <a href="https://github.com/ryanbronkema/" target="_blank">
            <code className={styles.code}>
              https://github.com/ryanbronkema/
            </code>
          </a>
        </p>
        <p>
          Check out my other work
          <br />
          <a href="https://ryanbronkema.com/" target="_blank">
            <code className={styles.code}>https://ryanbronkema.com/</code>
          </a>
        </p>
      </div>

      <div className={`${styles.center} ${styles.bgGradient}`}>
        <Image
          className={styles.logo}
          src="/images/logo-rb-dark.svg"
          alt="Ryan Bronkema Logo"
          width={180}
          height={120}
          priority
        />
      </div>

      <div>
        <h2 className={`${styles.center} ${styles.heading}`}>Most recent</h2>
        <div className={styles.grid}>
          <Link href="/project-1" className={styles.card}>
            <h3>
              Pomodoro timer <span>-&gt;</span>
            </h3>
            <p>
              A countdown timer that can be started, paused, and set to an
              custom duration.
            </p>
          </Link>

          <Link href="/project-2" className={styles.card}>
            <h3>
              E-commerce component <span>-&gt;</span>
            </h3>
            <p>A menu and cart with a cost total that updates dynamically.</p>
          </Link>

          <Link href="/project-3" className={styles.card}>
            <h3>
              SFX Piano <span>-&gt;</span>
            </h3>
            <p>
              A virtual piano that plays corresponding audio files when the keys
              are clicked.
            </p>
          </Link>

          <Link href="/project-4/" className={styles.card}>
            <h3>
              Eyes on the Screen <span>-&gt;</span>
            </h3>
            <p>A keyboard with a jiggling key that moves when clicked.</p>
          </Link>

          <Link href="/project-5/" className={styles.card}>
            <h3>
              Eyes on the Screen <span>-&gt;</span>
            </h3>
            <p>A list of podcast checkboxes that can be shift-clicked.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
