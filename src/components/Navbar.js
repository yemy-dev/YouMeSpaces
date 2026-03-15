// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CategoriesDropdown from './CategoriesDropdown';

function Navbar() {
  const [active, setActive] = useState('Accueil');

  const buttons = [
    { name: 'Accueil', path: '/' },
    { name: 'Meilleures Ventes', path: '/bestsales' },
    { name: 'Nouveautés', path: '/newproducts' },
    { name: 'Soldes', path: '/sales' },
    { name: 'Boutique sociale', path: '/socialshop' },
    { name: 'Favoris ♡', path: '/favorites' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <CategoriesDropdown />
      </div>

      <div className="navbar-center">
        {buttons.map((btn) => (
          <Link
            key={btn.name}
            to={btn.path}
            className={active === btn.name ? 'active' : ''}
            onClick={() => setActive(btn.name)}
          >
            {btn.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;