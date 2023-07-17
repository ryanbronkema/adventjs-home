import React from 'react';

interface ProductsProps {
  product: {
    name: string;
    img: string;
    price: string;
  };
  isIsInCart: (productName: string) => boolean;
  add: (product: { name: string; img: string; price: string; }) => void;
}

const Products: React.FC<ProductsProps> = ({ product, isIsInCart, add }) => {
  return (
    <li key={product.name}>
      <div className="plate">
        <img src={product.img} alt={product.name} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{product.name}</p>
        <p className="price">{product.price}</p>
        <button
          className={`btn ${isIsInCart(product.name) ? "in-cart" : "add"}`}
          onClick={() => add(product)}
          disabled={isIsInCart(product.name)}
        >
          {isIsInCart(product.name) ? (
            <>
            <svg width="20" height="14" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877104 6.28555C1.65815 5.50451 2.92448 5.50451 3.70553 6.28555L7.94817 10.5282L17.8477 0.6287C18.6287 -0.152349 19.895 -0.152348 20.6761 0.6287C21.4571 1.40975 21.4571 2.67608 20.6761 3.45713L7.94817 16.185L0.877104 9.11398C0.0960556 8.33293 0.0960556 7.0666 0.877104 6.28555Z" fill="white"/>
            </svg>In Cart
            </>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </li>
  );
};

export default Products;
