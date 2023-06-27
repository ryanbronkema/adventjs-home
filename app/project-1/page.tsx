import styles from './page.module.css'
import { bebas } from '../fonts'
import { mont } from '../fonts'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.ring}>
          <svg width="518" height="518" viewBox="0 0 518 518">
            <circle
              strokeWidth="9px"
              x="0"
              y="y"
              cx="259"
              cy="259"
              r="254"
            />
          </svg>
        </div>
        <div className={styles.timer}>
          {/* <TimerDisplay
            timeLeft={formatTimeLeft(secondsLeft)}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <ButtonStatus
            isActive={isActive}
            setIsActive={setIsActive}
            buttonText={buttonText}
            setButtonText={setButtonText}
          />
          <ButtonSettings /> */}
        </div>
      </div>
      
      {/* <div className={styles.time} style={bebas.style}>15:00</div> */}
      {/* <div className={styles.start} style={mont.style}>Start</div> */}

    </main>
  )
}