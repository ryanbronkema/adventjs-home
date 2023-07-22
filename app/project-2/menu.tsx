'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { poppins } from '../fonts';
import './menu.css';
import Products from './Products';
import CartItem from './CartItem';
import Totals from './totals';

interface Product {
  img: string;
  name: string;
  price: string;
  quantity: number;
}

interface CartItem {
  name: string;
  img: string;
  price: string;
  quantity: number;
}

export default function Menu() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [subtotalSum, setSubtotalSum] = useState(0);

  const products: Product[] = [
    {
      img: 'images/plate__french-fries.png',
      name: 'French Fries with Ketchup',
      price: '$3.99',
      quantity: 1,
    },
    {
      img: 'images/plate__salmon-vegetables.png',
      name: 'Salmon and Vegetables',
      price: '$10.99',
      quantity: 1,
    },
    {
      img: 'images/plate__spaghetti-meat-sauce.png',
      name: 'Spaghetti with Meat Sauce',
      price: '$6.99',
      quantity: 1,
    },
    {
      img: 'images/plate__bacon-eggs.png',
      name: 'Bacon, Eggs, and Toast',
      price: '$6.99',
      quantity: 1,
    },
    {
      img: 'images/plate__chicken-salad.png',
      name: 'Chicken Salad with Parmesan',
      price: '$8.99',
      quantity: 1,
    },
    {
      img: 'images/plate__fish-sticks-fries.png',
      name: 'Fish Sticks and Fries',
      price: '$7.99',
      quantity: 1,
    },
  ];

  function add(product: Product) {
    const existingItem = cart.find((item) => item.name === product.name);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart((current) => [...current, { ...product, quantity: 1 }]);
    }
  }

  function updateCart(itemName: string, quantity: number) {
    const updatedCart = cart.map((item) =>
      item.name === itemName ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  }

  function getCartItemsWithQuantity() {
    return cart.filter((item) => item.quantity > 0);
  }

  useEffect(() => {
    calculateSubtotalSum();
  }, [cart]);

  function calculateSubtotalSum() {
    const sum = cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price * item.quantity;
    }, 0);

    setSubtotalSum(sum);
  }

  const isIsInCart = (productName: string) => {
    return cart.some((product) => product.name === productName && product.quantity > 0);
  };
  
  return (
    <main className="main">
      <div className="wrapper menu">
        <div className="panel">
          <h2>To Go Menu</h2>
          <ul className="menu">
            {products.map((product) => (
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

          {cart.length === 0 ? (
            <p className="empty">Your cart is empty.</p>
          ) : (
            <ul className="cart-summary">
              {getCartItemsWithQuantity().map((item) => (
                <CartItem 
                  key={item.name}
                  item={item}
                  updateCart={updateCart}
                />
              ))}
              {/* {cart.map((item) => (
                <CartItem
                  key={item.name}
                  item={item}
                  updateCart={updateCart}
                />
              ))} */}
            </ul>
          )}

          <Totals subtotalSum={subtotalSum} />
        </div>
      </div>
    </main>
  );
}