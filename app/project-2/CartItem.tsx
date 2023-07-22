import React, { useState, useEffect } from 'react';

interface CartItemProps {
  item: {
    name: string;
    img: string;
    price: string;
  };
  updateCart: (itemName: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, updateCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const price = parseFloat(item.price.replace('$', ''));
    const newSubtotal = price * quantity;
    setSubtotal(newSubtotal);
    updateCart(item.name, quantity);
  }, [quantity, item, updateCart]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

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
          <img src="images/chevron.svg" alt="Decrease Quantity" />
        </button>
        <div className="quantity">{quantity}</div>
        <button className="btn increase" onClick={increaseQuantity}>
          <img src="images/chevron.svg" alt="Increase Quantity" />
        </button>
      </div>
      <div className="subtotal">${subtotal.toFixed(2)}</div>
    </li>
  );
};

export default CartItem;
