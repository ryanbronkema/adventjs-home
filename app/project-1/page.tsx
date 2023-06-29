'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { bebas, mont } from '../fonts';
import styles from './page.module.css';

const TimerDisplay = (
  props: { 
    minutesLeft: string, 
    secondsLeft: string, 
    editMode: boolean, 
    onMinutesChange: (value: number) => void, 
    onSecondsChange: (value: number) => void 
  }) => {
  return (
    <div className={styles.time} style={bebas.style}>
      <div className={styles.minutes}>
        <input type="number" value={props.minutesLeft} disabled={!props.editMode} onChange={(e) => props.onMinutesChange(e.target.value)} />
      </div>
      <div className={styles.colon}>:</div>
      <div className={styles.seconds}>
        <input type="number" value={props.secondsLeft} disabled={!props.editMode} onChange={(e) => props.onSecondsChange(e.target.value)} />
      </div>
    </div>
  );
};

export default function Page() {
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [audio] = useState(typeof Audio !== 'undefined' && new Audio('https://www.soundjay.com/misc/sounds/magic-chime-02.mp3'));
  const [editMode, setEditMode] = useState(false);
  const [editedMinutes, setEditedMinutes] = useState(0);
  const [editedSeconds, setEditedSeconds] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let formattedMinutes = 0;
    let formattedSeconds = 0;

    if (editMode) {
      formattedMinutes = editedMinutes;
      formattedSeconds = editedSeconds;
    } else {
      formattedMinutes = Math.floor(secondsLeft / 60);
      formattedSeconds = Math.floor(secondsLeft % 60);
    }

    const totalSeconds = formattedMinutes * 60 + formattedSeconds;
    setSecondsLeft(totalSeconds);
  }, [editMode, editedMinutes, editedSeconds]);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
      setEditMode(false);
      if (secondsLeft === 0) {
        clearInterval(interval);
        setIsActive(false);
        setIsDone(true);
        audio.play();
      }

      return () => clearInterval(interval);
    }
  }, [isActive, secondsLeft, audio]);

  function handleClick() {
    if (!hasStarted) {
      setIsActive(true);
      setHasStarted(true);
    } else {
      setIsActive((prevState) => !prevState);
    }
  }

  function handleSettingsClick() {
    setEditMode(true);
    setIsActive(false);
    setIsDone(false);
  }

  function handleMinutesChange(value: number) {
    setEditedMinutes(value);
  }

  function handleSecondsChange(value: number) {
    setEditedSeconds(value);
  }

  const formattedMinutes = Math.floor(secondsLeft / 60).toString().padStart(2, '0');
  const formattedSeconds = Math.floor(secondsLeft % 60).toString().padStart(2, '0');
  const buttonLabel = isActive ? 'STOP' : secondsLeft === 0 ? 'DONE' : 'START';

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={`${styles.ring} ${isActive ? styles.active : ''} ${isDone ? styles.done : ''}`}>
          <svg width="518" height="518" viewBox="0 0 518 518">
            <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
          </svg>
        </div>
        <div className={styles.timer}>
          <TimerDisplay
            minutesLeft={formattedMinutes}
            secondsLeft={formattedSeconds}
            editMode={editMode}
            onMinutesChange={handleMinutesChange}
            onSecondsChange={handleSecondsChange}
          />
          <button className={styles.timerToggle} style={mont.style} onClick={handleClick} disabled={isDone}>
            {buttonLabel}
          </button>
          <button className={styles.settings} onClick={handleSettingsClick}>
            <Image src="/images/gear.svg" alt="Settings" width={32} height={32} />
          </button>
        </div>
      </div>
    </main>
  );
}
