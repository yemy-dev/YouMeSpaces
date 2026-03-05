import React from 'react';
import './Header.css'; // Styles séparés

function Header() {
  return (
    <header className="header-dark">
      <div className="header-left">
        <div className="logo">
          🌍 <span className="logo-text">YouMespaces.com</span>
        </div>
        <div className="language">
          <span>Fr</span>
        </div>
        <div className="currency-location">
          <span>💲</span> <span>🇨🇮 CIV</span>
        </div>
      </div>

      <div className="header-center">
        <input
          type="text"
          placeholder="Cherchez un produit, une boutique"
          className="search-bar"
        />
      </div>

      <div className="header-right">
        <button className="login-btn">Se connecter</button>
        <div className="cart">
          🛒 <span className="cart-text">Panier</span>
          <span className="cart-count">0</span>
        </div>
      </div>
    </header>
  );
}

export default Header;