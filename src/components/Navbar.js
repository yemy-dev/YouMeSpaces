// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import CategoriesDropdown from './CategoriesDropdown';

function Navbar() {
  // État pour le bouton actuellement sélectionné
  const [active, setActive] = useState('Accueil');

  // Liste des boutons
  const buttons = [
    'Accueil',
    'Meilleures Ventes',
    'Nouveautés',
    'Soldes',
    'Boutique sociale',
    'Favoris ♡'
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <CategoriesDropdown />
      </div>

      <div className="navbar-center">
        {buttons.map((btn) => (
          <span
            key={btn}
            className={active === btn ? 'active' : ''}
            onClick={() => setActive(btn)}
          >
            {btn}
          </span>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;