import { useState } from "react";
import "./MotoCarousel.css";

import Moto1 from "../assets/Moto1.jpg";
import Moto2 from "../assets/Moto2.jpg";
import Moto3 from "../assets/Moto3.jpg";

function MotosSlider() {
  const [diapositivaActual, setDiapositivaActual] = useState(0);

  const motos = [
    {
      imagen: Moto1,
      alt: "Harley Davidson",
      marca: "HARLEY DAVIDSON",
    },
    {
      imagen: Moto2,
      alt: "Royal Enfield Classic 350",
      marca: "ROYAL ENFIELD CLASSIC 350",
    },
    {
      imagen: Moto3,
      alt: "Royal Enfield Meteor 650",
      marca: "ROYAL ENFIELD METEOR 650",
    },
  ];

  const mostrarDiapositivaAnterior = () => {
    setDiapositivaActual((diapositivaActual - 1 + motos.length) % motos.length);
  };

  const mostrarDiapositivaSiguiente = () => {
    setDiapositivaActual((diapositivaActual + 1) % motos.length);
  };

  return (
    <>
      <div className="contenedor_titulo">
        <div className="titulo">
          <span className="linea_titulo"></span>

          <h2>Motos Vertex Colombia</h2>

          <span className="linea_titulo"></span>
        </div>
      </div>

      {/* SECCIÓN SHOWCASE DE MOTOS */}
      <div className="seccion_motos_deslizador">
        {motos.map((moto, indice) => (
          <div
            className={`diapositiva_moto ${
              indice === diapositivaActual ? "activa" : ""
            }`}
            key={moto.marca}
          >
            <img
              src={moto.imagen}
              alt={moto.alt}
              className="fondo_diapositiva"
            />

            <div className="capa_diapositiva"></div>

            <div className="contenido_diapositiva">
              <div className="marca_diapositiva">
                <h2 className="marca_moto">{moto.marca}</h2>

                <p className="eslogan_diapositiva">
                  PURE POWER - PURE PRESENCE - PURE STYLE
                </p>
              </div>

              <a href="/motos" className="boton_explorar">
                Explora
              </a>

              <p className="aviso_diapositiva">
                *Algunas características y accesorios mostrados en la imagen
                pueden no hacer parte del equipamiento estándar de la
                motocicleta.
              </p>
            </div>
          </div>
        ))}

        {/* Flecha anterior */}
        <button
          className="flecha_deslizador flecha_izquierda"
          aria-label="Anterior"
          onClick={mostrarDiapositivaAnterior}
        >
          <span>‹</span>
        </button>

        {/* Flecha siguiente */}
        <button
          className="flecha_deslizador flecha_derecha"
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
