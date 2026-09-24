import { useState } from "react";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Valle Barber Sudio</div>

      <nav className="navbar">
        {/* Botón hamburguesa a la derecha */}
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={menuOpen ? "active" : ""}>
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#info">INFORMACIÓN</a></li>
          <li><a href="#ubicaciones">UBICACIONES</a></li>
        </ul>
      </nav>
    </header>
  );
}
