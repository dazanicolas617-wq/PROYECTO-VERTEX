import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* ==================================================
            LOGO
        ================================================== */}

        <Link
          to="/"
          className="navbar-logo"
        >
          <img
            src={logo}
            alt="Vertex Moto"
          />
        </Link>


        {/* ==================================================
            NAVEGACIÓN
        ================================================== */}

        <nav className="navbar-links">

          {/* INICIO */}

          <Link to="/">
            Inicio
          </Link>


          {/* MOTOS */}

          <Link to="/motos">
            Motos
          </Link>


          {/* ENCUÉNTRANOS */}

          <a href="#encuentranos">
            Encuéntranos
          </a>


          {/* BLOG */}

          <Link to="/blog">
            Blog
          </Link>


          {/* AGENDAR PRUEBA */}

          <Link to="/agendar-prueba">
            Agendar prueba
          </Link>

        </nav>


        {/* ==================================================
            INICIAR SESIÓN
        ================================================== */}

        <Link to="/login" className="navbar-login">
          Iniciar sesión
        </Link>

      </div>

    </header>
  );
}

export default Navbar;