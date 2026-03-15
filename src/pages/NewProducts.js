// src/pages/NewProducts.js
import React from 'react';
import './NewProducts.css';
import ProductCard from '../components/ProductCard';

// Données fictives
const newProducts = [
  { id: 1, name: "Smartwatch 2026", price: "80 000 XOF", image: "https://via.placeholder.com/150", category: "Électronique & Informatique" },
  { id: 2, name: "Sneakers Limited", price: "50 000 XOF", image: "https://via.placeholder.com/150", category: "Mode & Accessoires" },
];

function NewProducts() {
  return (
    <div className="newproducts-container">
      <h2>Nouveautés</h2>
      <div className="product-list">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default NewProducts;