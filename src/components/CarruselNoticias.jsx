/* =====================================================
   CARRUSELNOTICIAS.JSX — CARRUSEL DE NOTICIAS
   Muestra un conjunto de noticias paginadas de a 2.
   El usuario navega entre páginas con flechas izquierda
   y derecha, o haciendo clic en los indicadores de puntos.

   Lógica:
   - noticiasPorPagina: cuántas noticias se muestran a la vez
   - paginaActual: índice de la página visible (empieza en 0)
   - noticiasVisibles: slice del array según la página actual
   - La paginación es circular (va del final al inicio y viceversa)
===================================================== */

import { useState } from "react";
import "./CarruselNoticias.css";

function CarruselNoticias() {
  /* =========================================
        LISTA DE NOTICIAS
     ========================================= */
  const noticias = [
    {
      titulo: "NUEVA COLECCIÓN 2026",
      descripcion:
        "Descubre los nuevos modelos que llegan para llevar tu pasión por las motos al siguiente nivel.",
      contenidoCompleto:
        "Nuestra nueva colección 2026 redefine el concepto de velocidad, diseño y ergonomía. Cada modelo ha sido desarrollado tras intensas pruebas de rendimiento en circuito y carretera, integrando materiales ligeros de alta resistencia y acabados prémium. Ven a conocer las especificaciones completas en nuestros concesionarios autorizados.",
      imagen:
        "https://www.alquilerdemotosmedellin.com/wp-content/uploads/2020/07/ALQUILERMOTOSMEDELLINALTOCILINDRAJEKAWAZAKIZ250-0.jpg",
    },
    {
      titulo: "POTENCIA SIN LÍMITES",
      descripcion:
        "Conoce motocicletas diseñadas para ofrecer máximo rendimiento, potencia y presencia.",
      contenidoCompleto:
        "Equipadas con motores de última generación, aceleración instantánea y sistemas de escape optimizados. Siente el verdadero rugido de la potencia y mantén el control absoluto en todo momento gracias a nuestros sistemas avanzados de frenado y suspensión ajustables.",
      imagen:
        "https://images.unsplash.com/photo-1525013066836-c6090f0ad9d8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwZGUlMjBtb3RvJTIwZGUlMjBjcm9zc3xlbnwwfHwwfHx8MA%3D%3D.jpg",
    },
    {
      titulo: "VIVE LA EXPERIENCIA",
      descripcion:
        "Siente la libertad de conducir una motocicleta creada para quienes buscan algo diferente.",
      contenidoCompleto:
        "Más que un medio de transporte, una declaración de principios. Únete a nuestras rodadas mensuales y vive la hermandad en ruta. Organizamos eventos exclusivos, pruebas de manejo y clínicas de conducción para toda nuestra comunidad.",
      imagen:
        "https://img.magnific.com/fotos-premium/bicicleta-negra-estacionada-junto-lago-crepusculo-cielo-azul-profundo-que-refleja-agua_879736-90512.jpg?semt=ais_hybrid&w=740&q=80.jpg",
    },
    {
      titulo: "AVENTURA SOBRE DOS RUEDAS",
      descripcion:
        "Prepárate para recorrer nuevos caminos y convertir cada viaje en una experiencia inolvidable.",
      contenidoCompleto:
        "Diseñadas para afrontar cualquier terreno. Con capacidad de carga ampliada, protección aerodinámica de primera y tecnología de navegación integrada para que tu única preocupación sea disfrutar el paisaje.",
      imagen:
        "https://img1.wallspic.com/crops/0/4/3/9/4/149340/149340-hombre_de_chaqueta_negra_montando_motocicleta_en_la_carretera_durante_el_dia-3840x2160.jpg",
    },
    {
      titulo: "DISEÑO QUE IMPONE",
      descripcion:
        "Líneas agresivas, detalles únicos y una personalidad que no pasa desapercibida.",
      contenidoCompleto:
        "Inspiradas en la estética urbana contemporánea y las motos de competición clásica. Cada curva de la carrocería ha sido esculpida para minimizar la resistencia al viento manteniendo una presencia imponente.",
      imagen:
        "https://images.unsplash.com/photo-1660725997223-efbedf3397fb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIweWFtYWhhfGVufDB8fDB8fHww.jpg",
    },
    {
      titulo: "TECNOLOGÍA Y RENDIMIENTO",
      descripcion:
        "La combinación perfecta entre innovación, tecnología y el espíritu de las motocicletas.",
      contenidoCompleto:
        "Incluye pantallas TFT a color de alta definición, conectividad Bluetooth con tu smartphone, múltiples modos de manejo configurable (Rain, Sport, Eco) y control de tracción dinámico.",
      imagen:
        "https://img1.wallspic.com/previews/1/9/3/3/2/123391/123391-motocicleta-stunt_artista_interprete_o_ejecutante-deporte_extremo-motociclismo-automovilismo-x750.jpg",
    },
    {
      titulo: "TU PRÓXIMA MOTOCICLETA",
      descripcion:
        "Encuentra el modelo que se adapta a tu estilo y comienza una nueva aventura.",
      contenidoCompleto:
        "Planes de financiamiento a tu medida, garantía extendida y servicios de mantenimiento preferenciales. Acércate a nuestra red de asesores para configurar la moto de tus sueños.",
      imagen:
        "https://wallpaper.forfun.com/fetch/c0/c0a949a04dd13b894b6cc89a766fb875.jpeg",
    },
    {
      titulo: "UNA NUEVA HISTORIA COMIENZA",
      descripcion:
        "No se trata solamente de conducir. Se trata de vivir cada kilómetro al máximo.",
      contenidoCompleto:
        "Da el primer paso hacia la libertad. Explora nuestros catálogos interactivos, solicita una prueba de manejo y descubre por qué miles de motociclistas nos eligen día a día.",
      imagen:
        "https://4kwallpapers.com/images/wallpapers/honda-cbr650r-biker-racer-3840x2160-125.jpg",
    },
  ];

  /* =========================================
        ESTADOS Y LÓGICA
     ========================================= */
  const noticiasPorPagina = 2;
  const [paginaActual, setPaginaActual] = useState(0);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  const cantidadPaginas = Math.ceil(noticias.length / noticiasPorPagina);
  const inicio = paginaActual * noticiasPorPagina;
  const noticiasVisibles = noticias.slice(inicio, inicio + noticiasPorPagina);

  const siguientePagina = () => {
    setPaginaActual((pagina) => (pagina >= cantidadPaginas - 1 ? 0 : pagina + 1));
  };

  const anteriorPagina = () => {
    setPaginaActual((pagina) => (pagina <= 0 ? cantidadPaginas - 1 : pagina - 1));
  };

  return (
    <section className="seccion-noticias">
      {/* ENCABEZADO */}
      <div className="encabezado-noticias">
        <span className="linea-titulo"></span>
        <h2>Noticias</h2>
        <span className="linea-titulo"></span>
      </div>

      <div className="fondo-noticias"></div>

      <div className="contenido-seccion-noticias">
        <div className="carrusel-noticias">
          {/* FLECHA IZQUIERDA */}
          <button
            className="flecha-noticia flecha-izquierda"
            onClick={anteriorPagina}
            aria-label="Noticias anteriores"
          >
            <span>‹</span>
          </button>

          {/* TARJETAS DE NOTICIAS */}
          <div className="contenedor-noticias">
            {noticiasVisibles.map((noticia, indice) => (
              <article className="tarjeta-noticia" key={inicio + indice}>
                <div className="imagen-noticia">
                  <img src={noticia.imagen} alt={noticia.titulo} loading="lazy" decoding="async" />
                </div>

                <div className="contenido-noticia">
                  <h3>{noticia.titulo}</h3>
                  <p>{noticia.descripcion}</p>
                  
                  <button
                    className="boton-leer"
                    onClick={() => setNoticiaSeleccionada(noticia)}
                  >
                    Leer más
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* FLECHA DERECHA */}
          <button
            className="flecha-noticia flecha-derecha"
            onClick={siguientePagina}
            aria-label="Siguientes noticias"
          >
            <span>›</span>
          </button>
        </div>

        {/* INDICADORES */}
        <div className="indicadores-noticias">
          {Array.from({ length: cantidadPaginas }).map((_, indice) => (
            <button
              key={indice}
              className={`indicador-noticia ${
                indice === paginaActual ? "activo" : ""
              }`}
              onClick={() => setPaginaActual(indice)}
              aria-label={`Ir a página ${indice + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* =========================================
            MODAL DE NOTICIA COMPLETA
         ========================================= */}
      {noticiaSeleccionada && (
        <div
          className="modal-noticia-overlay"
          onClick={() => setNoticiaSeleccionada(null)}
        >
          <div
            className="modal-noticia-contenedor"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-noticia-cerrar"
              onClick={() => setNoticiaSeleccionada(null)}
              aria-label="Cerrar noticia"
            >
              ✕
            </button>

            <div className="modal-noticia-portada">
              <img
                src={noticiaSeleccionada.imagen}
                alt={noticiaSeleccionada.titulo}
              />
            </div>

            <div className="modal-noticia-cuerpo">
              <h2 className="modal-noticia-titulo">
                {noticiaSeleccionada.titulo}
              </h2>
              <p className="modal-noticia-bajada">
                {noticiaSeleccionada.descripcion}
              </p>
              <div className="modal-noticia-separador"></div>
              <p className="modal-noticia-texto">
                {noticiaSeleccionada.contenidoCompleto}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CarruselNoticias;
