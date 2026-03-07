import React from "react";
import "./Navbar.css";
import CategoriesDropdown from "./CategoriesDropdown";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Toutes les catégories (à gauche) */}
      <div className="navbar-left">
        <CategoriesDropdown />
      </div>

      {/* Les autres boutons centrés */}
      <div className="navbar-center">
        <span>Meilleures ventes</span>
        <span>Nouveautés</span>
        <span>Soldes</span>
        <span>Boutique sociale</span>
        <span>Favoris ♡</span>
      </div>

    </nav>
  );
}

export default Navbar;