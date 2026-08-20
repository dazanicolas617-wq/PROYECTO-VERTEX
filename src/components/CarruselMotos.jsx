/* =====================================================
   CARRUSELMOTOS.JSX — CARRUSEL DE MOTOS DESTACADAS
   Muestra un carrusel de diapositivas con imagen de fondo,
   título, eslogan y botón de exploración para cada moto.
   Permite navegar usando las flechas izquierda y derecha.
===================================================== */

import { useState } from "react";
import { Link } from "react-router-dom";
import "./CarruselMotos.css";

// Imágenes de las motos del carrusel importadas como módulos
import Moto1 from "../assets/Moto1.jpg";
import Moto2 from "../assets/Moto2.jpg";
import Moto3 from "../assets/Moto3.jpg";
import Moto4 from "../assets/Moto4.jpg";

/* ── DATOS DEL CARRUSEL ──────────────────────────────────
   Array de objetos con imagen, marca y eslogan de cada moto.
──────────────────────────────────────────────────────────── */
const motos = [
  {
    imagen: Moto1,
    alt: "Harley Davidson",
    marca: "HARLEY DAVIDSON",
    eslogan: "PURE POWER - PURE PRESENCE - PURE STYLE",
  },
  {
    imagen: Moto2,
    alt: "Motos Vertex",
    marca: "MOTOS VERTEX",
    eslogan: "POTENCIA - DISEÑO - LIBERTAD",
  },
  {
    imagen: Moto3,
    alt: "Vertex Adventure",
    marca: "VERTEX ADVENTURE",
    eslogan: "EXPLORA NUEVOS CAMINOS",
  },
  {
    imagen: Moto4,
    alt: "Vertex Classic",
    marca: "VERTEX CLASSIC",
    eslogan: "ESTILO QUE NUNCA PASA DE MODA",
  },
];

function CarruselMotos() {
  /* Índice de la moto que se está mostrando actualmente */
  const [diapositivaActual, setDiapositivaActual] = useState(0);

  /* ── NAVEGAR HACIA ATRÁS (CIRCULAR) ─────────────────── */
  const mostrarDiapositivaAnterior = () => {
    setDiapositivaActual((prev) => (prev === 0 ? motos.length - 1 : prev - 1));
  };

  /* ── NAVEGAR HACIA ADELANTE (CIRCULAR) ────────────────── */
  const mostrarDiapositivaSiguiente = () => {
    setDiapositivaActual((prev) => (prev === motos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="motos">
      {/* ── TÍTULO DE SECCIÓN ─────────────────────────── */}
      <div className="contenedor_titulo">
        <div className="titulo">
          <span className="linea_titulo"></span>
          <h2>Motos Vertex Colombia</h2>
          <span className="linea_titulo"></span>
        </div>
      </div>

      {/* ── SECCIÓN SHOWCASE DE MOTOS (DESLIZADOR) ─────── */}
      <div className="seccion_motos_deslizador">
        {motos.map((moto, indice) => (
          <div
            className={`diapositiva_moto ${
              indice === diapositivaActual ? "activa" : ""
            }`}
            key={moto.marca}
          >
            {/* Imagen de fondo */}
            <img
              src={moto.imagen}
              alt={moto.alt}
              className="fondo_diapositiva"
            />

            {/* Capa con gradiente oscuro sobre la imagen */}
            <div className="capa_diapositiva"></div>

            {/* Contenido textual y botón */}
            <div className="contenido_diapositiva">
              <div className="marca_diapositiva">
                <h2 className="marca_moto">{moto.marca}</h2>
                <p className="eslogan_diapositiva">{moto.eslogan}</p>
              </div>

              <Link to="/motos" className="boton_explorar">
                Explora
              </Link>

              <p className="aviso_diapositiva">
                *Algunas características y accesorios mostrados en la imagen
                pueden no hacer parte del equipamiento estándar de la
                motocicleta.
              </p>
            </div>
          </div>
        ))}

        {/* ── FLECHA IZQUIERDA ── */}
        <button
          className="flecha-deslizador flecha-izquierda"
          aria-label="Anterior"
          onClick={mostrarDiapositivaAnterior}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* ── FLECHA DERECHA ── */}
        <button
          className="flecha-deslizador flecha-derecha"
          aria-label="Siguiente"
          onClick={mostrarDiapositivaSiguiente}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default CarruselMotos;
