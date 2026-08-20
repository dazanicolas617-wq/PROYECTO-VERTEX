/* =====================================================
   PIEDEPAGINA.JSX — PIE DE PÁGINA
   Muestra cuatro columnas de enlaces organizadas por
   categoría, una sección de redes sociales con iconos
   y la barra inferior con copyright y políticas legales.

   Columnas:
   1. Motocicletas — categorías del catálogo
   2. Navegación   — links principales del sitio
   3. Contacto     — formas de contactar a Vertex
   4. Nuestro Mundo — historia y comunidad
===================================================== */

import { Link } from "react-router-dom";
import "./PieDePagina.css";

function PieDePagina() {

  return (

    <footer className="footer">

      {/* ── COLUMNAS DE ENLACES ────────────────────────────── */}
      <div className="footer-container">


        {/* ── COLUMNA 1: Motocicletas ─────────────────────── */}
        <div className="footer-column">

          <h3>
            MOTOCICLETAS
          </h3>

          {/* Categorías del catálogo de motos */}
          <Link to="/motos">
            Doble Propósito
          </Link>

          <Link to="/motos">
            Enduro
          </Link>

          <Link to="/motos">
            Scooters
          </Link>

          <Link to="/motos">
            Naked
          </Link>

        </div>


        {/* ── COLUMNA 2: Navegación ────────────────────────── */}
        <div className="footer-column">

          <h3>
            NAVEGACIÓN
          </h3>

          {/* Links de ancla que llevan a secciones de la portada */}
          <Link to="/">
            Inicio
          </Link>

          <Link to="/motos">
            Motos
          </Link>

          <Link to="/encuentranos">
            Encuéntranos
          </Link>

          <Link to="/blog">
            Blog
          </Link>

        </div>


        {/* ── COLUMNA 3: Contacto ──────────────────────────── */}
        <div className="footer-column">

          <h3>
            CONTACTO
          </h3>

          <Link to="/encuentranos">
            Contáctanos
          </Link>

          <Link to="/encuentranos">
            Puntos De Venta
          </Link>

          <Link to="/agendar-prueba">
            Prueba una
          </Link>

        </div>


        {/* ── COLUMNA 4: Nuestro Mundo ─────────────────────── */}
        <div className="footer-column">

          <h3>
            NUESTRO MUNDO
          </h3>

          <Link to="/blog">
            Historia
          </Link>

          <Link to="/blog">
            Comunidad
          </Link>

        </div>

      </div>


      {/* ── REDES SOCIALES ───────────────────────────────────
          Invitación a seguir las redes de Vertex Motors
      ──────────────────────────────────────────────────────── */}
      <div className="footer-social">

        <p>
          Síguenos en nuestras redes sociales
        </p>

        <div className="social-icons">

          {/* WhatsApp */}
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="social-btn social-whatsapp"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-btn social-facebook"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-btn social-instagram"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="social-btn social-youtube"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

        </div>

      </div>


      {/* ── BARRA INFERIOR ────────────────────────────────────
          Copyright, políticas de privacidad y términos
      ──────────────────────────────────────────────────────── */}
      <div className="footer-bottom">

        <div>

          <a href="#">
            Políticas de privacidad
          </a>

          <a href="#">
            Términos y condiciones
          </a>

        </div>

        <p>
          ©2026. Vertex Motors. Las imágenes aquí mostradas
          pueden diferir del producto real
        </p>

      </div>

    </footer>

  );
}


export default PieDePagina;
