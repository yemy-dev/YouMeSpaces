// src/pages/Home.js
import React from 'react';
import './Home.css';
import ProductCard from '../components/ProductCard';
import ShopCard from '../components/ShopCard';

// Données fictives pour test
const products = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: "150 000 XOF",
    image: "https://via.placeholder.com/150",
    category: "Électronique & Informatique",
  },
  {
    id: 2,
    name: "Chaussures Sport",
    price: "45 000 XOF",
    image: "https://via.placeholder.com/150",
    category: "Mode & Accessoires",
  },
];

const shops = [
  {
    id: 1,
    name: "Boutique Abidjan",
    followers: 120,
    likes: 35,
    cover: "https://via.placeholder.com/300x100",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Tech Store",
    followers: 200,
    likes: 80,
    cover: "https://via.placeholder.com/300x100",
    rating: 4.8,
  },
];

function Home() {
  return (
    <div className="home-container">
      <h2>Suggestions de boutiques</h2>
      <div className="shop-list">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>

      <h2>Suggestions de produits</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;