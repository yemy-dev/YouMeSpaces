// src/pages/BestSales.js
import React from 'react';
import './BestSales.css';
import ProductCard from '../components/ProductCard';

// Données fictives pour test
const bestSalesProducts = [
  { id: 1, name: "Laptop ABC", price: "250 000 XOF", image: "https://via.placeholder.com/150", category: "Électronique & Informatique" },
  { id: 2, name: "T-shirt Sport", price: "20 000 XOF", image: "https://via.placeholder.com/150", category: "Mode & Accessoires" },
];

function BestSales() {
  return (
    <div className="bestsales-container">
      <h2>Meilleures ventes</h2>
      <div className="product-list">
        {bestSalesProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSales;