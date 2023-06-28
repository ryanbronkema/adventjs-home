'use client'

import { useEffect, useState } from 'react';
import styles from './page.module.css'
import Image from "next/image";
import { bebas, mont } from '../fonts'

const TimerDisplay = (props: { timeLeft: string }) => {
  return (
    <div className={styles.time} style={bebas.style}>
      { props.timeLeft }
    </div>
  );
};

const ButtonSettings = () => {
  return (
    <button className={styles.settings}>
      <Image
        src="/images/gear.svg"
        alt="Settings"
        width={32}
        height={32}
      />
    </button>
  );
};

export default function Page() {
  const [secondsLeft, setSecondsLeft] = useState(.2 * 60);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (isActive) {
			const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);

      if (secondsLeft === 0) {
        clearInterval(interval);
        setIsActive(false);
      }

			return () => clearInterval(interval);
		}
	}, [isActive, secondsLeft]);

	const formatTimeLeft = (seconds: number) => {
		return `${Math.floor(seconds / 60)}:${
			seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
		}`;
	};

  function handleClick(){
    setIsActive(prevState => !prevState);
  }

  const buttonLabel = isActive ? "PAUSE" : secondsLeft === 0 ? "DONE" : "START";

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={`${styles.ring} ${isActive ? styles.active : ""}`}>
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
          <TimerDisplay
            timeLeft={formatTimeLeft(secondsLeft)}
          />
          <button className={styles.timerToggle} style={mont.style} onClick={handleClick}>{buttonLabel}</button>
          <ButtonSettings />
        </div>
      </div>
    </main>
  )
}