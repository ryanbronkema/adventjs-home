import React, { useState } from 'react';

interface CartItemProps {
  item: {
    name: string;
    img: string;
    price: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const price = parseFloat(item.price); // Parse the price to a number
  const subtotal = price * quantity;

  return (
    <li>
      <div className="plate">
        <img src={item.img} alt={item.name} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{item.name}</p>
        <p className="price">{item.price}</p>
      </div>
      <div className="quantity__wrapper">
        <button className="btn decrease" onClick={decreaseQuantity}>
          <img src="images/chevron.svg" />
        </button>
        <div className="quantity">{quantity}</div>
        <button className="btn increase" onClick={increaseQuantity}>
          <img src="images/chevron.svg" />
        </button>
      </div>
      <div className="subtotal">${subtotal.toFixed(2)}</div>
    </li>
  );
};

export default CartItem;
