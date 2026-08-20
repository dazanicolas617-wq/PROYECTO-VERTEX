/* =====================================================
   MOTOS.JSX — PÁGINA DE CATÁLOGO DE MOTOCICLETAS
   Muestra todas las motos disponibles organizadas
   en dos categorías, con filtros de ordenamiento
   por cilindrada y precio.

   Estructura de la página:
   1. Encabezado con título de sección
   2. Barra de filtros (cilindrada y precio)
   3. Categoría 1: Enduro y Clásicas (primeras 6 motos)
   4. Categoría 2: Doble Propósito (motos 7 a 12)
   5. Modal de detalles (si hay una moto seleccionada)
   6. Modal de cotización (si el usuario solicita cotizar)

   Cada moto tiene: id, nombre, imagen, precio, categoría,
   cilindrada y descripción.
===================================================== */

import { useState } from "react";

import MotoCard from "../components/MotoCard";           // Tarjeta de presentación de cada moto
import MotoDetails from "../components/MotoDetails";     // Modal con detalles completos
import MotoCotizacion from "../components/MotoCotizacion"; // Modal de formulario de cotización

import "./Motos.css";


/* =========================
   IMPORTAR IMÁGENES
   Se importan como módulos para que Vite las optimice
   y gestione las rutas correctamente en producción.
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
   Array con todos los modelos disponibles en el catálogo.
   - precio        : string formateado para mostrar en UI
   - precioNumero  : número entero para ordenamiento
   - cilindrada    : string con "cc" para mostrar
   - cilindradaNumero: número para ordenamiento
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
     Almacenan el objeto de la moto seleccionada.
     null = ningún modal abierto
  ========================= */

  /* Moto seleccionada para el modal de detalles */
  const [motoSeleccionada, setMotoSeleccionada] =
    useState(null);

  /* Moto seleccionada para el modal de cotización */
  const [motoCotizacion, setMotoCotizacion] =
    useState(null);


  /* =========================
     FILTROS DE ORDENAMIENTO
     "todos" = sin ordenamiento aplicado
     "asc"   = de menor a mayor
     "desc"  = de mayor a menor
  ========================= */

  const [filtroCilindrada, setFiltroCilindrada] =
    useState("todos");

  const [filtroPrecio, setFiltroPrecio] =
    useState("todos");


  /* =========================
     ABRIR MODAL DE DETALLES
     Se llama cuando el usuario hace clic en "VER MÁS"
  ========================= */

  const abrirDetalles = (moto) => {

    setMotoSeleccionada(moto);

  };


  /* =========================
     ABRIR MODAL DE COTIZACIÓN
     Se llama cuando el usuario hace clic en "COTIZACIÓN"
  ========================= */

  const abrirCotizacion = (moto) => {

    setMotoCotizacion(moto);

  };


  /* =========================
     FILTRAR Y ORDENAR MOTOS
     Se parte de una copia del array original para
     no mutar el array de datos.
  ========================= */

  let motosFiltradas = [...motos];


  /* ── ORDENAR POR CILINDRADA ─────────────────────────────
     "asc"  → de menor cilindrada a mayor
     "desc" → de mayor cilindrada a menor
  ──────────────────────────────────────────────────────── */

  if (filtroCilindrada === "asc") {

    motosFiltradas.sort(
      (a, b) =>
        a.cilindradaNumero -
        b.cilindradaNumero     // Menor a mayor
    );

  }

  if (filtroCilindrada === "desc") {

    motosFiltradas.sort(
      (a, b) =>
        b.cilindradaNumero -
        a.cilindradaNumero     // Mayor a menor
    );

  }


  /* ── ORDENAR POR PRECIO ─────────────────────────────────
     "asc"  → de menor precio a mayor
     "desc" → de mayor precio a menor
  ──────────────────────────────────────────────────────── */

  if (filtroPrecio === "asc") {

    motosFiltradas.sort(
      (a, b) =>
        a.precioNumero -
        b.precioNumero         // Menor a mayor
    );

  }

  if (filtroPrecio === "desc") {

    motosFiltradas.sort(
      (a, b) =>
        b.precioNumero -
        a.precioNumero         // Mayor a menor
    );

  }


  /* =========================
     LIMPIAR FILTROS
     Reinicia ambos selectores a "todos"
  ========================= */

  const limpiarFiltros = () => {

    setFiltroCilindrada("todos");
    setFiltroPrecio("todos");

  };


  return (

    <main className="motos-page">


      {/* =========================
          ENCABEZADO — Título principal del catálogo
      ========================= */}

      <section className="motos-header">

        {/* Título con líneas decorativas */}
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
          BARRA DE FILTROS
          Permite ordenar las motos por cilindrada o precio.
          El botón LIMPIAR reinicia ambos filtros.
      ========================= */}

      <section className="motos-filtros">

        {/* Filtro de cilindrada */}
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


        {/* Filtro de precio */}
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


        {/* Botón para resetear todos los filtros */}
        <button
          type="button"
          className="btn-limpiar-filtros"
          onClick={limpiarFiltros}
        >
          LIMPIAR
        </button>

      </section>



      {/* =========================
          CATEGORÍA 1 — Enduro y Clásicas
          Muestra las primeras 6 motos del array filtrado
      ========================= */}

      <section className="moto-category">

        <h2>
          ENDURO Y CLÁSICAS
        </h2>

        {/* Grid de tarjetas MotoCard */}
        <div className="motos-grid">

          {motosFiltradas
            .slice(0, 6)              // Solo las primeras 6 motos
            .map((moto) => (

              <MotoCard
                key={moto.id}
                moto={moto}
                onVerMas={abrirDetalles}      // Abre el modal de detalles
                onCotizar={abrirCotizacion}   // Abre el modal de cotización
              />

            ))}

        </div>

      </section>



      {/* =========================
          CATEGORÍA 2 — Doble Propósito
          Muestra las motos del índice 6 al 11 del array filtrado
      ========================= */}

      <section className="moto-category">

        <h2>
          DOBLE PROPÓSITO
        </h2>

        <div className="motos-grid">

          {motosFiltradas
            .slice(6, 12)             // Motos del índice 6 al 11
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
          Solo se renderiza si hay una moto seleccionada.
          onClose limpia el estado cerrando el modal.
      ========================= */}

      {motoSeleccionada && (

        <MotoDetails
          moto={motoSeleccionada}
          onClose={() =>
            setMotoSeleccionada(null)    // Cierra el modal
          }
        />

      )}



      {/* =========================
          MODAL COTIZACIÓN
          Solo se renderiza si el usuario pidió cotizar una moto.
      ========================= */}

      {motoCotizacion && (

        <MotoCotizacion
          moto={motoCotizacion}
          onClose={() =>
            setMotoCotizacion(null)      // Cierra el modal
          }
        />

      )}

    </main>

  );

}


export default Motos;