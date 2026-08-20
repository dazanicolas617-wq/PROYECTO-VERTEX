/* =====================================================
   HERO.JSX — SECCIÓN PRINCIPAL DE BIENVENIDA
   Muestra una imagen de fondo con degradado oscuro,
   el título de la empresa, una descripción breve
   y un botón de llamada a la acción.
===================================================== */

import "./Hero.css";

import heroImage from "../assets/hero-motos.jpg"; // Imagen de fondo del hero

function Hero() {
  return (
    /* Sección que ocupa el 80% del alto de la pantalla.
       La imagen de fondo se aplica vía style inline para
       poder inyectar la variable de JavaScript (heroImage). */
    <section
      className="hero"
      id="inicio"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.55),
          rgba(0, 0, 0, 0.75)
        ), url(${heroImage})`   // Degradado negro sobre la foto para legibilidad del texto
      }}
    >

      {/* Contenedor del contenido textual centrado */}
      <div className="hero-content">

        {/* Título principal con salto de línea entre las dos palabras */}
        <h1>
          MOTOS VERTEX
          <br />
          COLOMBIA
        </h1>

        {/* Párrafo descriptivo de la empresa */}
        <p>
          Bienvenidos a la herencia que se remonta a 2014,
          Vertex Colombia se enorgullece de la excelencia
          de sus motores, con una amplia variedad de modelos
          de alta calidad, diseñados para satisfacer las
          necesidades de los clientes de todo el mundo.
        </p>

        {/* Botón CTA (Call To Action) — actualmente sin acción asignada */}
        <button className="hero-button">
          Contáctenos
        </button>

      </div>

    </section>
  );
}

export default Hero;