// src/components/ShopCard.js
import React from 'react';
import './ShopCard.css';

function ShopCard({ shop }) {
  return (
    <div className="shop-card">
      <img src={shop.cover} alt={shop.name} className="shop-cover" />
      <div className="shop-info">
        <h3>{shop.name}</h3>
        <p>{shop.followers} abonnés • {shop.likes} likes</p>
        <p>Note: {shop.rating} ⭐</p>
      </div>
    </div>
  );
}

export default ShopCard;