// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";
import SearchBar from "./SearchBar";

function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  return (
    <header className="header-container">

      {/* GAUCHE : logo + nom */}
      <div className="header-left">
        <span className="header-logo">🌍</span>
        <span className="header-title">YouMeSpaces.com</span>
      </div>

      {/* CENTRE : barre de recherche */}
      <div className="header-center">
        <SearchBar />
      </div>

      {/* DROITE : boutons */}
      <div className="header-right">

        {/* Choix de langue */}
        <div
          className="header-button dropdown-container"
          onMouseEnter={() => setLangOpen(true)}
          onMouseLeave={() => setLangOpen(false)}
        >
          🌐 FR <span className="arrow">▾</span>
          {langOpen && (
            <div className="dropdown">
              <div className="dropdown-item">Français</div>
              <div className="dropdown-item">English</div>
            </div>
          )}
        </div>

        {/* Pays (affichage seulement, pas bouton) */}
        <div className="header-button country-display">
          🇨🇮 CIV (XOF)
        </div>

        {/* Se connecter */}
        <div
          className="header-button dropdown-container"
          onMouseEnter={() => setUserOpen(true)}
          onMouseLeave={() => setUserOpen(false)}
        >
          Se connecter
          {userOpen && (
            <div className="dropdown">
              <div className="dropdown-item">S'inscrire</div>
              <div className="dropdown-item">Se connecter</div>
            </div>
          )}
        </div>

        {/* Panier */}
        <div className="header-button">
          🛒 Panier (0)
        </div>

      </div>
    </header>
  );
}

export default Header;