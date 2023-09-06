"use client";

import React, { useEffect, useState } from "react";
import './keyboard.css';

export default function Keyboard() {
  const [jiggleKey, setJiggleKey] = useState<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    // Check if the pressed key has the class "jiggle"
    const keyElement = document.querySelector('.jiggle');
  
    if (keyElement && keyElement instanceof HTMLElement) {
      // Convert elements to upper case
      const pressedKey = event.key.toUpperCase();
      const elementDataKey = keyElement.getAttribute('data-key');
      console.log(pressedKey);
      console.log(elementDataKey);
      
      if (pressedKey === elementDataKey) {
        // Remove the class "jiggle" from the jiggling key
        keyElement.classList.remove('jiggle');
  
        // Choose a random key and add the class "jiggle" to it
        const keys = document.querySelectorAll('.key');
        if (keys.length > 0) {
          const randomIndex = Math.floor(Math.random() * keys.length);
          keys[randomIndex].classList.add('jiggle');
          setJiggleKey(randomIndex);
        }
      }
    }
  };

  useEffect(() => {
    // Set first key to jiggle on page load
    const keys = document.querySelectorAll('.key');
    if (keys.length > 0) {
      const randomIndex = Math.floor(Math.random() * keys.length);
      keys[randomIndex].classList.add('jiggle');
      setJiggleKey(randomIndex);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="keyboard">
      <h2 className="subhead">Eyes on the Screen</h2>
      <div className="row">
        <button className="key" data-key="`">`</button>
        <button className="key" data-key="1">1</button>
        <button className="key" data-key="2">2</button>
        <button className="key" data-key="3">3</button>
        <button className="key" data-key="4">4</button>
        <button className="key" data-key="5">5</button>
        <button className="key" data-key="6">6</button>
        <button className="key" data-key="7">7</button>
        <button className="key" data-key="8">8</button>
        <button className="key" data-key="9">9</button>
        <button className="key" data-key="0">0</button>
        <button className="key" data-key="-">-</button>
        <button className="key" data-key="=">=</button>
        <button className="key" data-key="BACKSPACE">DEL</button>
      </div>
      <div className="row">
        <button className="key utility" data-key="TAB">Tab</button>
        <button className="key" data-key="Q">Q</button>
        <button className="key" data-key="W">W</button>
        <button className="key" data-key="E">E</button>
        <button className="key" data-key="R">R</button>
        <button className="key" data-key="T">T</button>
        <button className="key" data-key="Y">Y</button>
        <button className="key" data-key="U">U</button>
        <button className="key" data-key="I">I</button>
        <button className="key" data-key="O">O</button>
        <button className="key" data-key="P">P</button>
        <button className="key" data-key="[">[</button>
        <button className="key" data-key="]">]</button>
        <button className="key" data-key="\">\</button>
      </div>
      <div className="row">
        <button className="key utility" data-key="CAPSLOCK">CAPS</button>
        <button className="key" data-key="A">A</button>
        <button className="key" data-key="S">S</button>
        <button className="key" data-key="D">D</button>
        <button className="key" data-key="F">F</button>
        <button className="key" data-key="G">G</button>
        <button className="key" data-key="H">H</button>
        <button className="key" data-key="J">J</button>
        <button className="key" data-key="K">K</button>
        <button className="key" data-key="L">L</button>
        <button className="key" data-key=";">;</button>
        <button className="key" data-key="'">&apos;</button>
        <button className="key utility" data-key="ENTER">ENTER</button>
      </div>
      <div className="row">
        <button className="key utility" data-key="SHIFT">SHIFT</button>
        <button className="key" data-key="Z">Z</button>
        <button className="key" data-key="X">X</button>
        <button className="key" data-key="C">C</button>
        <button className="key" data-key="V">V</button>
        <button className="key" data-key="B">B</button>
        <button className="key" data-key="N">N</button>
        <button className="key" data-key="M">M</button>
        <button className="key" data-key=",">,</button>
        <button className="key" data-key=".">.</button>
        <button className="key" data-key="/">/</button>
        <button className="key utility" data-key="SHIFT">SHIFT</button>
      </div>
    </div>
  );
}
