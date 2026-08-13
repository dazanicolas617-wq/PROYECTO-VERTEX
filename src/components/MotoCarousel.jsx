import { useState } from "react";

import "./MotoCarousel.css";

import Moto1 from "../assets/Moto1.jpg";
import Moto2 from "../assets/Moto2.jpg";
import Moto3 from "../assets/Moto3.jpg";
import Moto4 from "../assets/Moto4.jpg";


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

        <h2>
          Motos Vertex Colombia
        </h2>

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
          className="carousel-arrow left"
          onClick={previous}
        >
          ‹
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
          className="carousel-arrow right"
          onClick={next}
        >
          ›
        </button>

      </div>


      {/* INDICADORES */}

      <div className="carousel-dots">

        {motos.map((_, index) => (

          <button
            key={index}
            className={
              index === current
                ? "dot active"
                : "dot"
            }
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

    </section>

  );
}


export default MotoCarousel;