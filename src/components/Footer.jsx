/* =====================================================
   FOOTER.JSX — PIE DE PÁGINA
   Muestra cuatro columnas de enlaces organizadas por
   categoría, una sección de redes sociales y la barra
   inferior con copyright y políticas legales.

   Columnas:
   1. Motocicletas — categorías del catálogo
   2. Navegación   — links principales del sitio
   3. Contacto     — formas de contactar a Vertex
   4. Nuestro Mundo — historia y comunidad
===================================================== */

import "./Footer.css";


function Footer() {

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
          <a href="#">
            Doble Propósito
          </a>

          <a href="#">
            Enduro
          </a>

          <a href="#">
            Clásica
          </a>

        </div>


        {/* ── COLUMNA 2: Navegación ────────────────────────── */}
        <div className="footer-column">

          <h3>
            NAVEGACIÓN
          </h3>

          {/* Links de ancla que llevan a secciones de la portada */}
          <a href="#inicio">
            Inicio
          </a>

          <a href="#motos">
            Motos
          </a>

          <a href="#encuentranos">
            Encuéntranos
          </a>

          <a href="#noticias">
            Blog
          </a>

        </div>


        {/* ── COLUMNA 3: Contacto ──────────────────────────── */}
        <div className="footer-column">

          <h3>
            CONTACTO
          </h3>

          <a href="#">
            Contáctanos
          </a>

          <a href="#">
            Puntos De Venta
          </a>

          <a href="#agendar">
            Prueba una
          </a>

        </div>


        {/* ── COLUMNA 4: Nuestro Mundo ─────────────────────── */}
        <div className="footer-column">

          <h3>
            NUESTRO MUNDO
          </h3>

          <a href="#">
            Historia
          </a>

          <a href="#">
            Comunidad
          </a>

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

          <a href="#">
            WhatsApp
          </a>

          <a href="#">
            Facebook
          </a>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            YouTube
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


export default Footer;