// src/components/SearchBar.js
import React from 'react';

function SearchBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Cherchez un produit, une boutique"
        style={{
          padding: "5px",
          width: "300px", /* plus long */
          borderRadius: "3px 0 0 3px",
          border: "1px solid #ccc"
        }}
      />
      <button style={{
        padding: "5px 10px",
        border: "1px solid #ccc",
        backgroundColor: "#eee",
        borderRadius: "0 3px 3px 0",
        cursor: "pointer"
      }}>
        🔍
      </button>
    </div>
  );
}

export default SearchBar;