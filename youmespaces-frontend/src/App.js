import './App.css';

function App() {
  return (
    <div>

      {/* PREMIER RECTANGLE (Header principal) */}

      <div style={{
        backgroundColor: "#4a4a4a",
        color: "white",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>

        <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
          <span style={{fontWeight:"bold", fontSize:"20px"}}>
            🌍 YouMeSpaces.com
          </span>
        </div>

        <div style={{display:"flex", alignItems:"center", gap:"20px"}}>

          <span>🌐 FR</span>

          <span>🇨🇮 CIV</span>

          <input
            type="text"
            placeholder="Cherchez un produit, une boutique"
            style={{padding:"5px", width:"250px"}}
          />

          <span>Se connecter</span>

          <span>🛒 Panier (0)</span>

        </div>

      </div>

      {/* DEUXIÈME RECTANGLE (Menu) */}

      <div style={{
        backgroundColor: "#d9d9d9",
        padding: "10px",
        display: "flex",
        gap: "30px"
      }}>

        <span>☰ Toutes les catégories</span>

        <span>Meilleures ventes</span>

        <span>Nouveautés</span>

        <span>Soldes</span>

        <span>SocialShop</span>

        <span>Favoris</span>

      </div>

    </div>
  );
}

export default App;