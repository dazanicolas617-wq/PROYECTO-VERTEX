/* =====================================================
   NAVBAR.JSX — BARRA DE NAVEGACIÓN SUPERIOR
   Muestra el logo, los enlaces de navegación y el
   botón de "Iniciar sesión".
   Se reutiliza en casi todas las páginas del sitio.
===================================================== */

import { Link } from "react-router-dom";  // Link evita recargar la página al navegar
import "./Navbar.css";

import logo from "../assets/logo.png";   // Logo de Vertex Motors

function Navbar() {
  return (
    /* Elemento semántico <header> que envuelve toda la barra */
    <header className="barra-navegacion">

      {/* Contenedor interno con ancho máximo y padding lateral */}
      <div className="contenedor-barra-navegacion">

        {/* ── LOGO ─────────────────────────────────────────
            Clic en el logo lleva al usuario a la página principal
        ──────────────────────────────────────────────────── */}
        <Link to="/" className="logo-barra-navegacion">
          <img src={logo} alt="Vertex Moto" />
        </Link>

        {/* ── ENLACES DE NAVEGACIÓN ────────────────────────
            Menú central con los links principales del sitio.
            El enlace "Encuéntranos" usa ancla #encuentranos
            para hacer scroll a esa sección en la portada.
        ──────────────────────────────────────────────────── */}
        <nav className="enlaces-barra-navegacion">
          <Link to="/">Inicio</Link>
          <Link to="/motos">Motos</Link>
          <a href="#encuentranos">Encuéntranos</a>
          <Link to="/blog">Blog</Link>
          <Link to="/agendar-prueba">Agendar prueba</Link>
        </nav>

        {/* ── BOTÓN INICIAR SESIÓN ─────────────────────────
            Redirige al formulario de login (/login)
        ──────────────────────────────────────────────────── */}
        <Link to="/login" className="login-barra-navegacion">
          Iniciar sesión
        </Link>

      </div>
    </header>
  );
}

export default Navbar;