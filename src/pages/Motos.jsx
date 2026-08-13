import { useState } from "react";

import MotoCard from "../components/MotoCard";
import MotoDetails from "../components/MotoDetails";

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
//import Moto8 from "../assets/motos/Moto8.jpg";
//import Moto9 from "../assets/motos/Moto9.jpg";
//import Moto10 from "../assets/motos/Moto10.jpg";
//import Moto11 from "../assets/motos/Moto11.jpg";
//import Moto12 from "../assets/motos/Moto12.jpg";


/* =========================
   DATOS DE LAS MOTOS
========================= */

const motos = [

  {
    id: 1,
    nombre: "Meteor 350",
    imagen: Moto1,
    precio: "$17.790.000 COP",
    categoria: "Cruiser",
    cilindrada: "349 cc",
    descripcion:
      "Una motocicleta cruiser diseñada para disfrutar de recorridos urbanos y viajes con comodidad, estilo y una conducción relajada."
  },

  {
    id: 2,
    nombre: "HNTR 350",
    imagen: Moto2,
    precio: "$14.990.000 COP",
    categoria: "Roadster",
    cilindrada: "349 cc",
    descripcion:
      "Una motocicleta ágil y moderna, pensada para moverse con facilidad por la ciudad y disfrutar cada recorrido."
  },

  {
    id: 3,
    nombre: "Classic 350",
    imagen: Moto3,
    precio: "$14.990.000 COP",
    categoria: "Clásica",
    cilindrada: "349 cc",
    descripcion:
      "Diseño clásico combinado con tecnología moderna para quienes buscan una motocicleta elegante, cómoda y versátil."
  },

  {
    id: 4,
    nombre: "Super Meteor 650",
    imagen: Moto4,
    precio: "$31.990.000 COP",
    categoria: "Cruiser",
    cilindrada: "648 cc",
    descripcion:
      "Una cruiser de gran presencia, diseñada para recorrer largas distancias con comodidad, potencia y estilo."
  },

  {
    id: 5,
    nombre: "Interceptor 650",
    imagen: Moto5,
    precio: "$29.990.000 COP",
    categoria: "Roadster",
    cilindrada: "648 cc",
    descripcion:
      "Una motocicleta versátil que combina el estilo clásico con una experiencia de conducción dinámica y emocionante."
  },

  {
    id: 6,
    nombre: "Shotgun 650",
    imagen: Moto6,
    precio: "$31.990.000 COP",
    categoria: "Custom",
    cilindrada: "648 cc",
    descripcion:
      "Una motocicleta con carácter propio, diseño agresivo y una configuración pensada para disfrutar cada recorrido."
  },

  {
    id: 7,
    nombre: "GRR 450",
    imagen: Moto7,
    precio: "$27.990.000 COP",
    categoria: "Adventure",
    cilindrada: "452 cc",
    descripcion:
      "Una motocicleta preparada para afrontar diferentes caminos combinando capacidad, tecnología y comodidad."
  },


];


function Motos() {

  const [motoSeleccionada, setMotoSeleccionada] = useState(null);


  /* =========================
     ABRIR DETALLES
  ========================= */

  const abrirDetalles = (moto) => {
    setMotoSeleccionada(moto);
  };


  /* =========================
     COTIZACIÓN
  ========================= */

  const abrirCotizacion = (moto) => {

    alert(
      `Cotización de ${moto.nombre}\n\nEl formulario de cotización se agregará próximamente.`
    );

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
          CATEGORÍA 1
      ========================= */}

      <section className="moto-category">

        <h2>
          ENDURO Y CLÁSICAS
        </h2>

        <div className="motos-grid">

          {motos.slice(0, 6).map((moto) => (

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

          {motos.slice(6, 12).map((moto) => (

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
          MODAL DE INFORMACIÓN
      ========================= */}

      {motoSeleccionada && (

        <MotoDetails
          moto={motoSeleccionada}
          onClose={() => setMotoSeleccionada(null)}
        />

      )}

    </main>

  );

}

export default Motos;