import { useState } from "react";

import "./NewsCarousel.css";


const noticias = [

  {
    title: "Revisión tecnicomecánica en Colombia",

    text:
      "Según la normativa vigente en 2024, las motocicletas nuevas no requieren revisión tecnicomecánica durante los primeros dos años. A partir del tercer año, debes realizarla anualmente en un centro autorizado."
  },

  {
    title: "Honda CB125 Hornet inicia preventa oficial",

    text:
      "Inspirada en el ADN deportivo de sus hermanas mayores, la nueva Honda CB125 Hornet llega al segmento de baja cilindrada con un diseño agresivo. Ya disponible para reserva nacional."
  },

  {
    title: "Alerta por falsos concesionarios en internet",

    text:
      "La Cámara de la Industria de Motocicletas reporta fraudes en páginas que suplantan marcas. Recuerda verificar siempre nuestros canales de atención oficiales y comprar de forma 100% segura."
  },

  {
    title: 'Plan "Back to the Bricks": Harley-Davidson',

    text:
      "Harley-Davidson anunció la aceleración de su plan de recuperación enfocado en lanzar modelos de entrada con precios más competitivos adaptados a la demanda juvenil."
  }

];


function NewsCarousel() {

  const [current, setCurrent] = useState(0);


  const next = () => {

    setCurrent(
      (current + 1) % noticias.length
    );

  };


  const previous = () => {

    setCurrent(
      current === 0
        ? noticias.length - 1
        : current - 1
    );

  };


  const first = noticias[current];

  const second =
    noticias[(current + 1) % noticias.length];


  return (

    <section
      className="news-section"
      id="noticias"
    >

      {/* TITULO */}

      <div className="news-title">

        <span></span>

        <h2>
          Noticias
        </h2>

        <span></span>

      </div>


      {/* NOTICIAS */}

      <div className="news-carousel">

        <button
          className="news-arrow news-left"
          onClick={previous}
        >
          ‹
        </button>


        <article className="news-card">

          <h3>
            {first.title}
          </h3>

          <p>
            {first.text}
          </p>

        </article>


        <article className="news-card">

          <h3>
            {second.title}
          </h3>

          <p>
            {second.text}
          </p>

        </article>


        <button
          className="news-arrow news-right"
          onClick={next}
        >
          ›
        </button>

      </div>


      {/* INDICADORES */}

      <div className="news-dots">

        {noticias.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={
              index === current
                ? "news-dot active"
                : "news-dot"
            }
          />

        ))}

      </div>

    </section>

  );
}


export default NewsCarousel;