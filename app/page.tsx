import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          See this code collection<br />
          <a href="https://github.com/ryanbronkema/" target="_blank">
            <code className={styles.code}>https://github.com/ryanbronkema/</code>
          </a>
        </p>
        <p>
          Check out my other work<br />
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
          <Link href="/project-1/" className={styles.card}>
            <h3>
              Pomodoro timer <span>-&gt;</span>
            </h3>
            <p>A timer with a start/stop/reset options and a moving color band.</p>
          </Link>

          <Link href="/project-2/" className={styles.card}>
            <h3>
              Project 2 <span>-&gt;</span>
            </h3>
            <p>Blah blah blah...</p>
          </Link>

          <Link href="/project-3/" className={styles.card}>
            <h3>
              Project 3 <span>-&gt;</span>
            </h3>
            <p>Blah blah blah...</p>
          </Link>

          <Link href="/project-4/" className={styles.card}>
            <h3>
              Project 4 <span>-&gt;</span>
            </h3>
            <p>Blah blah blah...</p>
          </Link>
          
        </div>
      </div>
    </main>
  )
}
