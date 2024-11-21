import React from "react";
import catalogostyle from "./catalogostyle.css";


function Header() {
  return (
    <header>
      <nav class="navbar">
        <a href="/" class="logo">
          MotoShop
        </a>
        <ul class="nav-links">
          <li>
            <a href="/">Catálogo</a>
          </li>
          <li>
            <a href="#">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="/login" class="btn-inicio">
              Iniciar Sesión
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
