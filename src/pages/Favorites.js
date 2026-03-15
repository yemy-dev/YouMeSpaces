// src/pages/Favorites.js
import React from 'react';
import './Favorites.css';
import ProductCard from '../components/ProductCard';
import ShopCard from '../components/ShopCard';

// Données fictives
const favoriteProducts = [
  { id: 1, name: "Montre Connectée", price: "70 000 XOF", image: "https://via.placeholder.com/150", category: "Électronique & Informatique" },
];

const favoriteShops = [
  { id: 1, name: "Tech Store", followers: 200, likes: 80, cover: "https://via.placeholder.com/300x100", rating: 4.8 },
];

function Favorites() {
  return (
    <div className="favorites-container">
      <h2>Produits favoris</h2>
      <div className="product-list">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h2>Boutiques favorites</h2>
      <div className="shop-list">
        {favoriteShops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;