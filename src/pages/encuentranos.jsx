import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./encuentranos.css";

function Encuentranos() {
  // Estado para controlar qué concesionario está activo en el Banner
  const [concesionarioActivo, setConcesionarioActivo] = useState(null);

  // Lista de concesionarios con sus datos dinámicos
  const concesionarios = [
    {
      id: 1,
      nombre: "Vertex Capital Motor",
      ciudad: "Bogotá",
      direccion: "Calle 100 #15-20 Bogotá Norte",
      horario: "Lunes - Sábado (8:00 AM - 6:00 PM)",
      telefono: "+57 601 555 0192",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/7/70/Autopista_Norte_con_calle_100_TransMilenio.JPG",
      descripcion: "Sede principal en la capital con exhibición completa de modelos y taller especializado.",
      mapsUrl: "https://maps.google.com/?q=Calle+100+#15-20+Bogota"
    },
    {
      id: 2,
      nombre: "Poblado Moto experiencia",
      ciudad: "Medellín",
      direccion: "Avenida El Poblado Medellín",
      horario: "Lunes - Sábado (8:30 AM - 6:30 PM)",
      telefono: "+57 604 444 8821",
      imagen: "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1237032-03-time-out-worlds-best-cities-2022-medellin.jpg?c=original",
      descripcion: "Ubicados en el corazón del Poblado, espacio de prueba de ruta y boutique de accesorios.",
      mapsUrl: "https://maps.google.com/?q=Avenida+El+Poblado+Medellin"
    },
    {
      id: 3,
      nombre: "Vertex Valle Motor",
      ciudad: "Cali",
      direccion: "Carrera 5 #22-18 Cali",
      horario: "Lunes - Sábado (8:00 AM - 6:00 PM)",
      telefono: "+57 602 333 1245",
      imagen: "https://cdn.getyourguide.com/img/location/5a085e58892a4.jpeg/99.jpg",
      descripcion: "Servicio posventa certificado, venta de repuestos originales y asesores dedicados.",
      mapsUrl: "https://maps.google.com/?q=Carrera+5+#22-18+Cali"
    },
    {
      id: 4,
      nombre: "Vertex Caribe Motor",
      ciudad: "Barranquilla",
      direccion: "Carrera 53 #76-115 Barranquilla",
      horario: "Lunes - Sábado (8:00 AM - 5:30 PM)",
      telefono: "+57 605 385 9000",
      imagen: "https://cdn-blog.arriendo.com/co/blog/wp-content/uploads/2022/02/Razones-para-vivir-en-Barranquilla-1400x935.jpg",
      descripcion: "Atención personalizada para la región Caribe con zona VIP de entrega.",
      mapsUrl: "https://maps.google.com/?q=Carrera+53+#76-115+Barranquilla"
    },
    {
      id: 5,
      nombre: "Ciudad Bonita Motor",
      ciudad: "Bucaramanga",
      direccion: "Carrera 27 #45-12 Bucaramanga",
      horario: "Lunes - Sábado (8:00 AM - 6:00 PM)",
      telefono: "+57 607 630 4411",
      imagen: "https://encrypted-tbn0.gstatic.com/images/q=tbn:ANd9GcSX_-p_troOH8wll9XI-97l3rrOSp98XvjKlrpHJWA2TuqhD9kvH710zgc&s=10",
      descripcion: "Centro de mantenimiento integral y venta de motos de media y alta cilindrada.",
      mapsUrl: "https://maps.google.com/?q=Carrera+27+#45-12+Bucaramanga"
    },
    {
      id: 6,
      nombre: "Vertex Eje Cafetero",
      ciudad: "Pereira",
      direccion: "Avenida 30 de Agosto #40-25 Pereira",
      horario: "Lunes - Sábado (8:00 AM - 6:00 PM)",
      telefono: "+57 606 321 7788",
      imagen: "https://www.semana.com/resizer/FMwD006VZT9DmxOhvLb_aIDHats=/arc-anglerfish-arc2-prod-semana/public/NJLMN3XLA5AE5K3MIMZWJ6L7MU.png",
      descripcion: "Punto estratégico del Eje Cafetero con Test Drive permanente.",
      mapsUrl: "https://maps.google.com/?q=Avenida+30+de+Agosto+#40-25+Pereira"
    }
  ];

  return (
    <>
      {/* 1. Usamos tu componente Navbar existente */}
      <Navbar />

      <main>
        {/* ==================================================
            HERO SECTION
        =================================================== */}
        <section className="hero">
          <img
            src="IMAGENES/moto.jpg"
            alt="Motocicleta Vertex"
            className="hero-img"
          />
          <div className="capa-oscura"></div>

          <div className="hero-contenido">
            <span>VERTEX COLOMBIA</span>
            <h1>Puntos de Venta y Talleres Autorizados</h1>
            <p>
              Encuentra el concesionario oficial más cercano y vive la experiencia Vertex.
            </p>
            <a href="#concesionarios" className="hero-btn">
              Encontrar Agencia
            </a>
          </div>
        </section>

        {/* ==================================================
            CONCESIONARIOS GRID
        =================================================== */}
        <section className="concesionario" id="concesionarios">
          <div className="container">
            {concesionarios.map((item) => (
              <div key={item.id} className="tarjeta-conces">
                <img src={item.imagen} alt={item.ciudad} />

                <div className="info">
                  <h3>{item.nombre}</h3>
                  <p>{item.direccion}</p>
                  <p>{item.horario}</p>

                  {/* Abre el Banner asignando la sede seleccionada */}
                  <button
                    className="btn-ver-detalles"
                    onClick={() => setConcesionarioActivo(item)}
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}

            {/* ==================================================
                MODAL / BANNER DE DETALLES (DINÁMICO)
            =================================================== */}
            {concesionarioActivo && (
              <div 
                className="banner-detalles activo" 
                id="banner-detalles"
                onClick={() => setConcesionarioActivo(null)} // Cierra al hacer clic en el fondo
              >
                <div 
                  className="banner-contenido" 
                  onClick={(e) => e.stopPropagation()} // Detiene el cierre si hace clic dentro
                >
                  {/* BOTÓN CERRAR */}
                  <button
                    className="cerrar-banner"
                    id="cerrar-banner"
                    aria-label="Cerrar detalles"
                    onClick={() => setConcesionarioActivo(null)}
                  >
                    <i className="fi fi-rr-rectangle-xmark"></i> &times;
                  </button>

                  {/* IMAGEN DEL CONCESIONARIO */}
                  <div className="banner-imagen">
                    <img
                      id="banner-img"
                      src={concesionarioActivo.imagen}
                      alt={concesionarioActivo.nombre}
                    />
                  </div>

                  {/* INFORMACIÓN */}
                  <div className="banner-info">
                    <span className="banner-etiqueta">VERTEX MOTOS</span>
                    <h2 id="banner-nombre">{concesionarioActivo.nombre}</h2>
                    <p id="banner-descripcion">{concesionarioActivo.descripcion}</p>

                    {/* DATOS */}
                    <div className="banner-datos">
                      <div>
                        <i className="fi fi-rr-diamond-turn-right"></i>
                        <div>
                          <strong>Dirección</strong>
                          <span id="banner-direccion">{concesionarioActivo.direccion}</span>
                        </div>
                      </div>

                      <div>
                        <i className="fi fi-rr-prime-time"></i>
                        <div>
                          <strong>Horario</strong>
                          <span id="banner-horario">{concesionarioActivo.horario}</span>
                        </div>
                      </div>

                      <div>
                        <i className="fi fi-br-phone-call"></i>
                        <div>
                          <strong>Teléfono</strong>
                          <span id="banner-telefono">{concesionarioActivo.telefono}</span>
                        </div>
                      </div>
                    </div>

                    {/* BOTONES */}
                    <div className="banner-botones">
                      <a
                        href={concesionarioActivo.mapsUrl}
                        id="btn-maps"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fi fi-rs-home-location"></i>
                        Cómo llegar
                      </a>

                      <Link to="/agendar-prueba">
                        <i className="fi fi-rs-book-bookmark"></i>
                        Agendar prueba
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* 2. Usamos tu componente Footer existente */}
      <Footer />
    </>
  );
}

export default Encuentranos;