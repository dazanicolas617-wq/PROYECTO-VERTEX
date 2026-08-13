import { useState } from "react";

import MotoCard from "../components/MotoCard";
import MotoDetails from "../components/MotoDetails";
import MotoCotizacion from "../components/MotoCotizacion";

import "./Motos.css";


/* =========================
   IMPORTAR IMÁGENES
========================= */

import Moto1 from "../assets/motos/Moto1.jpg";
import Moto2 from "../assets/motos/Moto2.jpg";
import Moto3 from "../assets/motos/Moto3.jpg";
import Moto4 from "../assets/motos/Moto4.jpg";
import Moto5 from "../assets/motos/Moto5.jpg";
import Moto6 from "../assets/motos/Moto6.jpg";
import Moto7 from "../assets/motos/Moto7.jpg";
import Moto8 from "../assets/motos/Moto8.jpg";
import Moto9 from "../assets/motos/Moto9.jpg";
import Moto10 from "../assets/motos/Moto10.jpg";
import Moto11 from "../assets/motos/Moto11.jpg";
import Moto12 from "../assets/motos/Moto12.jpg";


/* =========================
   DATOS DE LAS MOTOS
========================= */

const motos = [

  {
    id: 1,
    nombre: "Meteor 350",
    imagen: Moto1,
    precio: "$18.990.000 COP",
    precioNumero: 18990000,
    categoria: "Cruiser",
    cilindrada: "349 cc",
    cilindradaNumero: 349,
    descripcion:
      "Una motocicleta cruiser diseñada para disfrutar de recorridos urbanos y viajes con comodidad, estilo y una conducción relajada."
  },

  {
    id: 2,
    nombre: "HNTR 350",
    imagen: Moto2,
    precio: "$17.990.000 COP",
    precioNumero: 17990000,
    categoria: "Roadster",
    cilindrada: "349 cc",
    cilindradaNumero: 349,
    descripcion:
      "Una motocicleta ágil y moderna, pensada para moverse con facilidad por la ciudad y disfrutar cada recorrido."
  },

  {
    id: 3,
    nombre: "Classic 350",
    imagen: Moto3,
    precio: "$18.990.000 COP",
    precioNumero: 18990000,
    categoria: "Clásica",
    cilindrada: "349 cc",
    cilindradaNumero: 349,
    descripcion:
      "Diseño clásico combinado con tecnología moderna para quienes buscan una motocicleta elegante, cómoda y versátil."
  },

  {
    id: 4,
    nombre: "Super Meteor 650",
    imagen: Moto4,
    precio: "$32.990.000 COP",
    precioNumero: 32990000,
    categoria: "Cruiser",
    cilindrada: "648 cc",
    cilindradaNumero: 648,
    descripcion:
      "Una cruiser de gran presencia, diseñada para recorrer largas distancias con comodidad, potencia y estilo."
  },

  {
    id: 5,
    nombre: "Interceptor 650",
    imagen: Moto5,
    precio: "$31.990.000 COP",
    precioNumero: 31990000,
    categoria: "Roadster",
    cilindrada: "648 cc",
    cilindradaNumero: 648,
    descripcion:
      "Una motocicleta versátil que combina el estilo clásico con una experiencia de conducción dinámica y emocionante."
  },

  {
    id: 6,
    nombre: "Shotgun 650",
    imagen: Moto6,
    precio: "$32.990.000 COP",
    precioNumero: 32990000,
    categoria: "Custom",
    cilindrada: "648 cc",
    cilindradaNumero: 648,
    descripcion:
      "Una motocicleta con carácter propio, diseño agresivo y una configuración pensada para disfrutar cada recorrido."
  },

  {
    id: 7,
    nombre: "GRR 450",
    imagen: Moto7,
    precio: "$23.990.000 COP",
    precioNumero: 23990000,
    categoria: "Adventure",
    cilindrada: "452 cc",
    cilindradaNumero: 452,
    descripcion:
      "Una motocicleta preparada para afrontar diferentes caminos combinando capacidad, tecnología y comodidad."
  },

  {
    id: 8,
    nombre: "New Himalayan 450",
    imagen: Moto8,
    precio: "$25.990.000 COP",
    precioNumero: 25990000,
    categoria: "Adventure",
    cilindrada: "452 cc",
    cilindradaNumero: 452,
    descripcion:
      "Una motocicleta preparada para afrontar diferentes caminos combinando capacidad, tecnología y comodidad."
  },

  {
    id: 9,
    nombre: "Bear 650",
    imagen: Moto9,
    precio: "$29.990.000 COP",
    precioNumero: 29990000,
    categoria: "Scrambler",
    cilindrada: "648 cc",
    cilindradaNumero: 648,
    descripcion:
      "Una motocicleta preparada para afrontar diferentes caminos combinando capacidad, tecnología y comodidad."
  },

  {
    id: 10,
    nombre: "Scram 411",
    imagen: Moto10,
    precio: "$21.990.000 COP",
    precioNumero: 21990000,
    categoria: "Scrambler",
    cilindrada: "411 cc",
    cilindradaNumero: 411,
    descripcion:
      "Una motocicleta preparada para afrontar diferentes caminos combinando capacidad, tecnología y comodidad."
  },

  {
    id: 11,
    nombre: "Himalayan 411",
    imagen: Moto11,
    precio: "$22.990.000 COP",
    precioNumero: 22990000,
    categoria: "Adventure",
    cilindrada: "411 cc",
    cilindradaNumero: 411,
    descripcion:
      "Una motocicleta preparada para afrontar diferentes caminos combinando capacidad, tecnología y comodidad."
  },

  {
    id: 12,
    nombre: "KTM Adventure 390",
    imagen: Moto12,
    precio: "$26.990.000 COP",
    precioNumero: 26990000,
    categoria: "Adventure",
    cilindrada: "373 cc",
    cilindradaNumero: 373,
    descripcion:
      "Una motocicleta preparada para afrontar diferentes caminos combinando capacidad, tecnología y comodidad."
  }

];


function Motos() {

  /* =========================
     MODALES
  ========================= */

  const [motoSeleccionada, setMotoSeleccionada] =
    useState(null);

  const [motoCotizacion, setMotoCotizacion] =
    useState(null);


  /* =========================
     FILTROS
  ========================= */

  const [filtroCilindrada, setFiltroCilindrada] =
    useState("todos");

  const [filtroPrecio, setFiltroPrecio] =
    useState("todos");


  /* =========================
     ABRIR DETALLES
  ========================= */

  const abrirDetalles = (moto) => {

    setMotoSeleccionada(moto);

  };


  /* =========================
     ABRIR COTIZACIÓN
  ========================= */

  const abrirCotizacion = (moto) => {

    setMotoCotizacion(moto);

  };


  /* =========================
     FILTRAR Y ORDENAR MOTOS
  ========================= */

  let motosFiltradas = [...motos];


  /* -------------------------
     ORDENAR CILINDRADA
  ------------------------- */

  if (filtroCilindrada === "asc") {

    motosFiltradas.sort(
      (a, b) =>
        a.cilindradaNumero -
        b.cilindradaNumero
    );

  }

  if (filtroCilindrada === "desc") {

    motosFiltradas.sort(
      (a, b) =>
        b.cilindradaNumero -
        a.cilindradaNumero
    );

  }


  /* -------------------------
     ORDENAR PRECIO
  ------------------------- */

  if (filtroPrecio === "asc") {

    motosFiltradas.sort(
      (a, b) =>
        a.precioNumero -
        b.precioNumero
    );

  }

  if (filtroPrecio === "desc") {

    motosFiltradas.sort(
      (a, b) =>
        b.precioNumero -
        a.precioNumero
    );

  }


  /* =========================
     LIMPIAR FILTROS
  ========================= */

  const limpiarFiltros = () => {

    setFiltroCilindrada("todos");
    setFiltroPrecio("todos");

  };


  return (

    <main className="motos-page">


      {/* =========================
          ENCABEZADO
      ========================= */}

      <section className="motos-header">

        <div className="section-title">

          <span></span>

          <h1>
            Selecciona tu Vertex
          </h1>

          <span></span>

        </div>

        <p>
          Encuentra la motocicleta ideal para tu estilo de vida.
        </p>

      </section>



      {/* =========================
          FILTROS
      ========================= */}

      <section className="motos-filtros">

        {/* CILINDRADA */}

        <div className="filtro-grupo">

          <label htmlFor="filtro-cilindrada">
            CILINDRAJE
          </label>

          <select
            id="filtro-cilindrada"
            value={filtroCilindrada}
            onChange={(e) =>
              setFiltroCilindrada(e.target.value)
            }
          >

            <option value="todos">
              Todos
            </option>

            <option value="asc">
              Menor a mayor
            </option>

            <option value="desc">
              Mayor a menor
            </option>

          </select>

        </div>


        {/* PRECIO */}

        <div className="filtro-grupo">

          <label htmlFor="filtro-precio">
            PRECIO
          </label>

          <select
            id="filtro-precio"
            value={filtroPrecio}
            onChange={(e) =>
              setFiltroPrecio(e.target.value)
            }
          >

            <option value="todos">
              Todos
            </option>

            <option value="asc">
              Menor a mayor
            </option>

            <option value="desc">
              Mayor a menor
            </option>

          </select>

        </div>


        {/* LIMPIAR */}

        <button
          type="button"
          className="btn-limpiar-filtros"
          onClick={limpiarFiltros}
        >
          LIMPIAR
        </button>

      </section>



      {/* =========================
          CATEGORÍA 1
      ========================= */}

      <section className="moto-category">

        <h2>
          ENDURO Y CLÁSICAS
        </h2>

        <div className="motos-grid">

          {motosFiltradas
            .slice(0, 6)
            .map((moto) => (

              <MotoCard
                key={moto.id}
                moto={moto}
                onVerMas={abrirDetalles}
                onCotizar={abrirCotizacion}
              />

            ))}

        </div>

      </section>



      {/* =========================
          CATEGORÍA 2
      ========================= */}

      <section className="moto-category">

        <h2>
          DOBLE PROPÓSITO
        </h2>

        <div className="motos-grid">

          {motosFiltradas
            .slice(6, 12)
            .map((moto) => (

              <MotoCard
                key={moto.id}
                moto={moto}
                onVerMas={abrirDetalles}
                onCotizar={abrirCotizacion}
              />

            ))}

        </div>

      </section>



      {/* =========================
          MODAL DETALLES
      ========================= */}

      {motoSeleccionada && (

        <MotoDetails
          moto={motoSeleccionada}
          onClose={() =>
            setMotoSeleccionada(null)
          }
        />

      )}



      {/* =========================
          MODAL COTIZACIÓN
      ========================= */}

      {motoCotizacion && (

        <MotoCotizacion
          moto={motoCotizacion}
          onClose={() =>
            setMotoCotizacion(null)
          }
        />

      )}

    </main>

  );

}


export default Motos;