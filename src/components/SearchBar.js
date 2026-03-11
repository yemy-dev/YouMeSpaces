import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher un produit, une boutique"
        className="search-input"
      />
      <button className="search-button">🔍</button>
    </div>
  );
}

export default SearchBar;