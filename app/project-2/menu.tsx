'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { poppins } from '../fonts';
import './menu.css';
import Totals from './totals';

export default function Menu() {
  const [subtotal, setSubtotal] = useState(0);
    
  useEffect(() => {
    calculateSubtotal();
  }, []);

  const calculateSubtotal = () => {
    const subtotalElements = document.getElementsByClassName('subtotal');
    let sum = 0;

    for (let i = 0; i < subtotalElements.length; i++) {
      const subtotalValue = parseFloat(subtotalElements[i].innerHTML.replace('$', ''));
      if (!isNaN(subtotalValue)) {
        sum += subtotalValue;
      }
    }

    setSubtotal(sum);
  };
  
  return (
    <main className="main">
      <div className="wrapper menu">
        <div className="panel">
          <h2>To Go Menu</h2>
          <ul className="menu">
              <li>
              <div className="plate">
                  <img src="images/plate__french-fries.png" alt="French Fries" className="plate" />
              </div>
              <div className="content">
                  <p className="menu-item">French Fries with Ketchup</p>
                  <p className="price">$2.23</p>
                  <button className="btn in-cart">
                    <img src="images/check-2.svg" alt="Check" />
                    In Cart
                  </button>
              </div>
              </li>
              <li>
              <div className="plate">
                  <img src="images/plate__salmon-vegetables.png" alt="Salmon and Vegetables" className="plate" />
              </div>
              <div className="content">
                  <p className="menu-item">Salmon and Vegetables</p>
                  <p className="price">$5.12</p>
                  <button className="btn add">Add to Cart</button>
              </div>
              </li>
              <li>
              <div className="plate">
                  <img src="images/plate__spaghetti-meat-sauce.png" alt="Spaghetti Meat Sauce" className="plate" />
              </div>
              <div className="content">
                  <p className="menu-item">Spaghetti with Meat Sauce</p>
                  <p className="price">$7.82</p>
                  <button className="btn add">Add to Cart</button>
              </div>
              </li>
              <li>
              <div className="plate">
                  <img src="images/plate__bacon-eggs.png" alt="Bacon, Eggs, and Toast" className="plate" />
              </div>
              <div className="content">
                  <p className="menu-item">Bacon, Eggs, and Toast</p>
                  <p className="price">$5.99</p>
                  <button className="btn add">Add to Cart</button>
              </div>
              </li>
              <li>
              <div className="plate">
                  <img src="images/plate__chicken-salad.png" alt="Chicken Salad with Parmesean" className="plate" />
              </div>
              <div className="content">
                  <p className="menu-item">Chicken Salad with Parmesan</p>
                  <p className="price">$6.98</p>
                  <button className="btn add">Add to Cart</button>
              </div>
              </li>
              <li>
              <div className="plate">
                  <img src="images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" className="plate" />
              </div>
              <div className="content">
                  <p className="menu-item">Fish Sticks and Fries</p>
                  <p className="price">$6.34</p>
                  <button className="btn add">Add to Cart</button>
              </div>
              </li>
          </ul>
        </div>

        <div className="panel cart">
          <h2>Your Cart</h2>
          <p className="empty">Your cart is empty.</p>
          <ul className="cart-summary">

              <li>
              <div className="plate">
                <img src="images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" className="plate" />
                <div className="quantity">1</div>
              </div>
              <div className="content">
                  <p className="menu-item">Fish Sticks and Fries</p>
                  <p className="price">$6.34</p>
              </div>
              <div className="quantity__wrapper">
                <button className="btn decrease">
                  <img src="images/chevron.svg" />
                </button>
                <div className="quantity">1</div>
                <button className="btn increase">
                  <img src="images/chevron.svg" />
                </button>
              </div>
              <div className="subtotal">$6.34</div>
            </li>

            <li>
              <div className="plate">
                <img src="images/plate__french-fries.png" alt="French Fries" className="plate" />
                <div className="quantity">2</div>
              </div>
              <div className="content">
                <p className="menu-item">French Fries with Ketchup</p>
                <p className="price">$2.23</p>
              </div>
              <div className="quantity__wrapper">
                <button className="btn decrease">
                  <img src="images/chevron.svg" />
                </button>
                <div className="quantity">2</div>
                <button className="btn increase">
                  <img src="images/chevron.svg" />
                </button>
              </div>
              <div className="subtotal">$4.46</div>
              </li>
          </ul>

          <Totals 
            subtotal={subtotal}
          />
        </div>
      </div>
    </main>
  )
}
