'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { poppins } from '../fonts';
import './menu.css';
import Products from './Products';
import CartItem from './CartItem';
import Totals from './totals';

export default function Menu() {
  const [cart, setCart] = useState<{ name: string; img: string; price: string; }[]>([]);
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

  function add(product: { name: string; img: string; price: string; }) {
    setCart((current: { name: string; img: string; price: string; }[]) => [...current, product]);
    setIsInCart(true);
  }

  const isIsInCart = (productName: string) => {
    return cart.some((product) => product.name === productName);
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
              <Products 
                key={product.name}
                product={product}
                isIsInCart={isIsInCart}
                add={add}
              />
            ))}

          </ul>
        </div>

        <div className="panel cart">
          <h2>Your Cart</h2>
          
          <p className="empty">Your cart is empty.</p>
          <ul className="cart-summary">

            {cart.map((item) => (
              <CartItem key={item.name} item={item} />
            ))}    
          </ul>

          <Totals 
            subtotalSum={subtotalSum}
          />
        </div>
      </div>
    </main>
  )
}
