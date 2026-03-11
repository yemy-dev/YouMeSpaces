import React from "react";
import "./Navbar.css";
import CategoriesDropdown from "./CategoriesDropdown";

function Navbar(){

return(

<nav className="navbar">

<div className="navbar-left">
<CategoriesDropdown />
</div>

<div className="navbar-center">

<span>Accueil</span>
<span>Meilleures ventes</span>
<span>Nouveautés</span>
<span>Soldes</span>
<span>Boutique sociale</span>
<span>Favoris ♡</span>

</div>

</nav>

)

}

export default Navbar;