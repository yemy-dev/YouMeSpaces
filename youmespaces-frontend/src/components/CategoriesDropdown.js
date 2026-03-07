// src/components/CategoriesDropdown.js
import React, { useState } from "react";
import "./CategoriesDropdown.css";

function CategoriesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="categories-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="categories-button">☰ Toutes les catégories</button>
      {open && (
        <div className="categories-menu">
          <strong>Électronique & Informatique</strong>
          <div className="subitem">Smartphones & Tablettes</div>
          <div className="subitem">Ordinateurs & Accessoires</div>
          <div className="subitem">Télévisions & Audio</div>
          <div className="subitem">Appareils photo & Caméras</div>
          <div className="subitem">Objets connectés & Wearables</div>
          <div className="subitem">Jeux vidéo</div>

          <strong>Maison & Décoration</strong>
          <div className="subitem">Meubles</div>
          <div className="subitem">Décoration</div>
          <div className="subitem">Éclairage</div>
          <div className="subitem">Cuisine & Arts de la table</div>
          <div className="subitem">Rangement & Organisation</div>

          <strong>Mode & Accessoires</strong>
          <div className="subitem">Vêtements Femmes/Hommes/Enfants</div>
          <div className="subitem">Chaussures</div>
          <div className="subitem">Accessoires & Bijoux</div>

          <strong>Sports & Loisirs</strong>
          <div className="subitem">Équipement sportif</div>
          <div className="subitem">Vêtements de sport</div>
          <div className="subitem">Jeux & Jouets</div>
          <div className="subitem">Musique & Instruments</div>

          <strong>Beauté & Santé</strong>
          <div className="subitem">Soins du visage & corps</div>
          <div className="subitem">Maquillage</div>
          <div className="subitem">Parfums & Déodorants</div>
          <div className="subitem">Santé & Bien-être</div>
          <div className="subitem">Équipements fitness à domicile</div>

          <strong>Alimentation & Boissons</strong>
          <div className="subitem">Épicerie</div>
          <div className="subitem">Produits frais</div>
          <div className="subitem">Boissons</div>
          <div className="subitem">Snacks & Confiseries</div>
          <div className="subitem">Produits bio / diététiques</div>

          <strong>Automobile & Bricolage</strong>
          <div className="subitem">Accessoires auto</div>
          <div className="subitem">Outils & Bricolage</div>
          <div className="subitem">Équipements extérieurs</div>

          <strong>Immobilier</strong>
          <div className="subitem">Ventes & Locations</div>
          <div className="subitem">Mobilier & Aménagement</div>
          <div className="subitem">Services immobiliers</div>

          <strong>Véhicules</strong>
          <div className="subitem">Voitures</div>
          <div className="subitem">Deux-roues</div>
          <div className="subitem">Accessoires & Pièces détachées</div>
          <div className="subitem">Utilitaires & Camions</div>

          <strong>Pour enfants & bébés</strong>
          <div className="subitem">Vêtements bébé/enfant</div>
          <div className="subitem">Jouets & Jeux</div>
          <div className="subitem">Puériculture</div>
          <div className="subitem">Éducation & développement</div>

          <strong>Culture & Éducation</strong>
          <div className="subitem">Livres</div>
          <div className="subitem">Papeterie</div>
          <div className="subitem">Instruments éducatifs & loisirs créatifs</div>
          <div className="subitem">Cours & Formation</div>

          <strong>Restauration & Services alimentaires</strong>
          <div className="subitem">Restaurants & Livraison</div>
          <div className="subitem">Épicerie & Aliments spéciaux</div>
          <div className="subitem">Café & Boissons</div>
          <div className="subitem">Équipements & Ustensiles</div>
        </div>
      )}
    </div>
  );
}

export default CategoriesDropdown;