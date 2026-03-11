// App.js
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* PREMIER RECTANGLE (Header principal) */}
      <Header />

      {/* DEUXIÈME RECTANGLE (Menu / Navbar) */}
      <Navbar />
    </div>
  );
}

export default App;