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

  const [current, setCurrent] = useState(0);


  const previous = () => {

    setCurrent(
      current === 0
        ? motos.length - 1
        : current - 1
    );

  };


  const next = () => {

    setCurrent(
      current === motos.length - 1
        ? 0
        : current + 1
    );

  };


  const moto = motos[current];


  return (

    <section
      className="moto-carousel"
      id="motos"
    >

      {/* TITULO */}

      <div className="section-title">

        <span></span>

          <h2>Motos Vertex Colombia</h2>

        <span></span>

      </div>


      {/* CARRUSEL */}

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

        {/* FLECHA IZQUIERDA */}

        <button
          className="flecha-deslizador flecha-izquierda"
          aria-label="Anterior"
          onClick={mostrarDiapositivaAnterior}
        >
          <span>‹</span>
        </button>


        {/* INFORMACIÓN */}

        <div className="moto-info">

          <h2>
            {moto.name}
          </h2>

          <p>
            {moto.description}
          </p>

          <button className="explore-button">
            EXPLORA
          </button>

        </div>


        {/* FLECHA DERECHA */}

        <button
          className="flecha-deslizador flecha-derecha"
          aria-label="Siguiente"
          onClick={mostrarDiapositivaSiguiente}
        >
          <span>›</span>
        </button>
      </div>
    </>
  );
}

export default MotosSlider;
