// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h4>{product.name}</h4>
        <p>{product.price}</p>
        <p>{product.category}</p>
      </div>
    </div>
  );
}

export default ProductCard;