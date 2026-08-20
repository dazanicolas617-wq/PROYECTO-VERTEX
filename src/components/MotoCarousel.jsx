/* =====================================================
   MOTOCAROUSEL.JSX — CARRUSEL DE MOTOS DESTACADAS
   Muestra un slide de imagen de fondo a pantalla completa
   con el nombre y descripción de la moto activa.
   El usuario puede navegar entre motos usando las
   flechas izquierda/derecha.

   Lógica:
   - El estado "current" guarda el índice de la moto activa
   - previous() retrocede un índice (circular)
   - next() avanza un índice (circular)
===================================================== */

import { useState } from "react";

import "./MotoCarousel.css";

// Imágenes de las motos del carrusel importadas como módulos
import Moto1 from "../assets/Moto1.jpg";
import Moto2 from "../assets/Moto2.jpg";
import Moto3 from "../assets/Moto3.jpg";
import Moto4 from "../assets/Moto4.jpg";


/* ── DATOS DEL CARRUSEL ──────────────────────────────────
   Array de objetos, cada uno con la imagen, nombre y
   descripción de una moto destacada para mostrar en portada.
──────────────────────────────────────────────────────────── */

const motos = [
  {
    image: Moto1,
    name: "Harley Davidson",
    description: "Pure Power - Pure Presence - Pure Style"
  },

  {
    image: Moto2,
    name: "Motos Vertex",
    description: "Potencia - Diseño - Libertad"
  },

  {
    image: Moto3,
    name: "Vertex Adventure",
    description: "Explora nuevos caminos"
  },

  {
    image: Moto4,
    name: "Vertex Classic",
    description: "Estilo que nunca pasa de moda"
  }
];


function MotoCarousel() {

  /* Índice de la moto que se está mostrando actualmente */
  const [current, setCurrent] = useState(0);


  /* ── NAVEGAR HACIA ATRÁS ─────────────────────────────
     Si estamos en el primer elemento (0), salta al último.
     De lo contrario, retrocede 1 posición.
  ──────────────────────────────────────────────────────── */
  const previous = () => {

    setCurrent(
      current === 0
        ? motos.length - 1   // Vuelve al último si está en el primero
        : current - 1
    );

  };


  /* ── NAVEGAR HACIA ADELANTE ──────────────────────────
     Si estamos en el último elemento, vuelve al primero.
     De lo contrario, avanza 1 posición.
  ──────────────────────────────────────────────────────── */
  const next = () => {

    setCurrent(
      current === motos.length - 1
        ? 0                  // Vuelve al primero si está en el último
        : current + 1
    );

  };


  /* Objeto de la moto activa según el índice actual */
  const moto = motos[current];


  return (

    <section
      className="moto-carousel"
      id="motos"
    >

      {/* ── TÍTULO DE SECCIÓN ───────────────────────────
          Líneas decorativas a los lados del título
      ──────────────────────────────────────────────────── */}
      <div className="section-title">

        <span></span>   {/* Línea decorativa izquierda */}

        <h2>
          Motos Vertex Colombia
        </h2>

        <span></span>   {/* Línea decorativa derecha */}

      </div>


      {/* ── SLIDE DE FONDO ──────────────────────────────
          La imagen de fondo se aplica inline con un
          degradado oscuro para garantizar legibilidad.
      ──────────────────────────────────────────────────── */}
      <div
        className="moto-slide"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.35),
              rgba(0,0,0,0.75)
            ),
            url(${moto.image})
          `
        }}
      >

        {/* ── FLECHA IZQUIERDA — navega a la moto anterior */}
        <button
          className="carousel-arrow left"
          onClick={previous}
        >
          ‹
        </button>


        {/* ── INFORMACIÓN DE LA MOTO ACTIVA ───────────────
            Nombre, descripción y botón de exploración
        ──────────────────────────────────────────────────── */}
        <div className="moto-info">

          <h2>
            {moto.name}
          </h2>

          <p>
            {moto.description}
          </p>

          {/* Botón decorativo — actualmente sin funcionalidad asignada */}
          <button className="explore-button">
            EXPLORA
          </button>

        </div>


        {/* ── FLECHA DERECHA — navega a la moto siguiente */}
        <button
          className="carousel-arrow right"
          onClick={next}
        >
          ›
        </button>

      </div>


    </section>

  );
}


export default MotoCarousel;