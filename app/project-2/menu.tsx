'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { poppins } from '../fonts';
import './menu.css';
import Totals from './totals';

export default function Menu() {
  const [cart, setCart] = useState()
  const [subtotalSum, setSubtotalSum] = useState(0);
  
  const products = [
    {
      img: 'images/plate__french-fries.png',
      name: 'French Fries with Ketchup',
      price: '$2.23'
    },
    {
      img: 'images/plate__salmon-vegetables.png',
      name: 'Salmon and Vegetables',
      price: '$5.12'
    },
    {
      img: 'images/plate__spaghetti-meat-sauce.png',
      name: 'Spaghetti with Meat Sauce',
      price: '$7.82'
    },
    {
      img: 'images/plate__bacon-eggs.png',
      name: 'Bacon, Eggs, and Toast',
      price: '$5.99'
    },
    {
      img: 'images/plate__chicken-salad.png',
      name: 'Chicken Salad with Parmesan',
      price: '$6.98'
    },
    {
      img: 'images/plate__fish-sticks-fries.png',
      name: 'Fish Sticks and Fries',
      price: '$6.34'
    },
  ];

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
                  <img src={product.img} alt={product.name}  className="plate" />
                </div>
                <div className="content">
                  <p className="menu-item">{product.name}</p>
                  <p className="price">{product.price}</p>
                  <button className="btn">
                    {/* <img src="images/check-2.svg" alt="Check" /> */}
                    Add to cart
                  </button>
                </div>
                {/* <div className="selectproduct">
                  <button onClick={() => add(product)}>+</button><b>{getTotalSelectedAmountPerProduct(cart, product.name)}</b>
                  <button onClick={() => remove(product)}>-</button>
                </div> */}
              </li>
            ))}

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
            subtotalSum={subtotalSum}
          />
        </div>
      </div>
    </main>
  )
}
