import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <img
            src={logo}
            alt="Vertex Moto"
          />
        </div>


        {/* NAVEGACIÓN */}
        <nav className="navbar-links">

          <Link to="/">
            Inicio
          </Link>

          <Link to="/motos">
            Motos
          </Link>

          <a href="#encuentranos">
            Encuéntranos
          </a>

          <a href="#noticias">
            Blog
          </a>

          <Link to="/agendar-prueba">
  Agendar prueba
</Link>

        </nav>


        {/* BOTÓN */}
        <button className="navbar-login">
          Iniciar sesión
        </button>

      </div>

    </header>
  );
}

export default Navbar;