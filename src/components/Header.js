import React, { useState } from 'react';
import './Header.css';
import SearchBar from './SearchBar';

function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  return (
    <header className="header-container">
      {/* Logo + nom */}
      <div className="header-left">
        <span className="header-title">YouMeSpaces.com</span>
      </div>

      {/* Éléments centraux et droite */}
      <div className="header-center-right">

        {/* Choix langue */}
        <div className="header-button dropdown-wrapper"
             onMouseEnter={() => setLangOpen(true)}
             onMouseLeave={() => setLangOpen(false)}>
          FR <span className="small-arrow">▼</span>
          {langOpen && (
            <div className="dropdown">
              <div className="dropdown-item">Français</div>
              <div className="dropdown-item">English</div>
            </div>
          )}
        </div>

        {/* Pays et devise (pas un bouton) */}
        <div className="header-country">
          CIV (XOF)
        </div>

        {/* Barre de recherche */}
        <SearchBar />

        {/* Mon compte */}
        <div className="header-button dropdown-wrapper"
             onMouseEnter={() => setUserOpen(true)}
             onMouseLeave={() => setUserOpen(false)}>
          👤 Mon compte <span className="small-arrow">▼</span>
          {userOpen && (
            <div className="dropdown">
              <div className="dropdown-item">S'inscrire</div>
              <div className="dropdown-item">Se connecter</div>
            </div>
          )}
        </div>

        {/* Panier */}
        <div className="header-button">
          🛒Panier (0)
        </div>
      </div>
    </header>
  );
}

export default Header;