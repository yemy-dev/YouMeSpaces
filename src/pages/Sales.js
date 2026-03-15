// src/pages/Sales.js
import React from 'react';
import './Sales.css';
import ProductCard from '../components/ProductCard';

// Données fictives
const salesProducts = [
  { id: 1, name: "Casque Audio", price: "25 000 XOF", image: "https://via.placeholder.com/150", category: "Électronique & Informatique" },
  { id: 2, name: "Veste Hiver", price: "35 000 XOF", image: "https://via.placeholder.com/150", category: "Mode & Accessoires" },
];

function Sales() {
  return (
    <div className="sales-container">
      <h2>Soldes</h2>
      <div className="product-list">
        {salesProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Sales;