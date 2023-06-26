import Image from 'next/image'
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
          
          <a
            href="#"
            className={styles.card}
          >
            <h3>
              Pomodoro timer <span>-&gt;</span>
            </h3>
            <p>A timer with a start/stop/reset options and a moving color band.</p>
          </a>

          {/* <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a> */}

          {/* <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a> */}

          {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a> */}
        </div>
      </div>
    </main>
  )
}
