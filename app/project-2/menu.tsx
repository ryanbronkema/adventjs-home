'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { poppins } from '../fonts';
import './menu.css';
import Totals from './totals';

export default function Menu() {
  const [cart, setCart] = useState<string[]>([]);
  const [subtotalSum, setSubtotalSum] = useState(0);
  const [isInCart, setIsInCart] = useState<boolean>(false);
  
  const products = [
    {
      id: 1,
      img: 'images/plate__french-fries.png',
      name: 'French Fries with Ketchup',
      price: '$2.23'
    },
    {
      id: 2,
      img: 'images/plate__salmon-vegetables.png',
      name: 'Salmon and Vegetables',
      price: '$5.12'
    },
    {
      id: 3,
      img: 'images/plate__spaghetti-meat-sauce.png',
      name: 'Spaghetti with Meat Sauce',
      price: '$7.82'
    },
    {
      id: 4,
      img: 'images/plate__bacon-eggs.png',
      name: 'Bacon, Eggs, and Toast',
      price: '$5.99'
    },
    {
      id: 5,
      img: 'images/plate__chicken-salad.png',
      name: 'Chicken Salad with Parmesan',
      price: '$6.98'
    },
    {
      id: 6,
      img: 'images/plate__fish-sticks-fries.png',
      name: 'Fish Sticks and Fries',
      price: '$6.34'
    },
  ];

  function add(product: { name: string; }) {
    setCart((current: string[]) => [...current, product.name]);
    setIsInCart(true);
  }

  const isIsInCart = (product: string) => {
    return cart.includes(product);
  };

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

    setSubtotalSum(sum);
  };
  
  return (
    <main className="main">
      <div className="wrapper menu">
        <div className="panel">
          <h2>To Go Menu</h2>
          <ul className="menu">

            {products.map(product => (
              <li key={product.name}>
                <div className="plate">
                  <img src={product.img} alt={product.name} className="plate" />
                </div>
                <div className="content">
                  <p className="menu-item">{product.name}</p>
                  <p className="price">{product.price}</p>
                  <button
                    className="btn"
                    onClick={() => add(product)}
                    disabled={isIsInCart(product.name)}
                  >
                    {isIsInCart(product.name) ? (
                      <>
                      <svg width="22" height="14" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877104 6.28555C1.65815 5.50451 2.92448 5.50451 3.70553 6.28555L7.94817 10.5282L17.8477 0.6287C18.6287 -0.152349 19.895 -0.152348 20.6761 0.6287C21.4571 1.40975 21.4571 2.67608 20.6761 3.45713L7.94817 16.185L0.877104 9.11398C0.0960556 8.33293 0.0960556 7.0666 0.877104 6.28555Z" fill="white"/>
                      </svg>In Cart
                      </>
                    ) : (
                      'Add to Cart'
                    )}
                  </button>
                </div>
              </li>
            ))}

          </ul>
        </div>
        {cart}
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
            subtotalSum={subtotalSum}
          />
        </div>
      </div>
    </main>
  )
}
