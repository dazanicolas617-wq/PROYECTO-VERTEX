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
       Cada objeto tiene título, descripción e imagen
  ========================================= */

  const noticias = [
    {
      titulo: "NUEVA COLECCIÓN 2026",
      descripcion:
        "Descubre los nuevos modelos que llegan para llevar tu pasión por las motos al siguiente nivel.",
      imagen:
        "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
    },

    {
      titulo: "POTENCIA SIN LÍMITES",
      descripcion:
        "Conoce motocicletas diseñadas para ofrecer máximo rendimiento, potencia y presencia.",
      imagen:
        "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg",
    },

    {
      titulo: "VIVE LA EXPERIENCIA",
      descripcion:
        "Siente la libertad de conducir una motocicleta creada para quienes buscan algo diferente.",
      imagen:
        "https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg",
    },

    {
      titulo: "AVENTURA SOBRE DOS RUEDAS",
      descripcion:
        "Prepárate para recorrer nuevos caminos y convertir cada viaje en una experiencia inolvidable.",
      imagen:
        "https://images.pexels.com/photos/163210/motorcycle-racer-racing-speed-163210.jpeg",
    },

    {
      titulo: "DISEÑO QUE IMPONE",
      descripcion:
        "Líneas agresivas, detalles únicos y una personalidad que no pasa desapercibida.",
      imagen:
        "https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg",
    },

    {
      titulo: "TECNOLOGÍA Y RENDIMIENTO",
      descripcion:
        "La combinación perfecta entre innovación, tecnología y el espíritu de las motocicletas.",
      imagen:
        "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg",
    },

    {
      titulo: "TU PRÓXIMA MOTOCICLETA",
      descripcion:
        "Encuentra el modelo que se adapta a tu estilo y comienza una nueva aventura.",
      imagen:
        "https://images.pexels.com/photos/104842/bmw-motorcycle-ride-bike-104842.jpeg",
    },

    {
      titulo: "UNA NUEVA HISTORIA COMIENZA",
      descripcion:
        "No se trata solamente de conducir. Se trata de vivir cada kilómetro al máximo.",
      imagen:
        "https://images.pexels.com/photos/164634/motorcycles-choppers-harley-davidson-freedom-164634.jpeg",
    },
  ];

  /* =========================================
       CONFIGURACIÓN
       Cuántas noticias se muestran por página
  ========================================= */

  const noticiasPorPagina = 2;

  /* =========================================
       ESTADO
       Índice de la página actualmente visible (base 0)
  ========================================= */

  const [paginaActual, setPaginaActual] = useState(0);

  /* =========================================
       CANTIDAD DE PÁGINAS
       Redondea hacia arriba por si hay un número impar
  ========================================= */

  const cantidadPaginas = Math.ceil(noticias.length / noticiasPorPagina);

  /* =========================================
       NOTICIAS VISIBLES
       Calcula qué noticias mostrar según la página actual.
       Ejemplo: página 0 → índices 0-1, página 1 → 2-3, etc.
  ========================================= */

  const inicio = paginaActual * noticiasPorPagina;

  const noticiasVisibles = noticias.slice(inicio, inicio + noticiasPorPagina);

  /* =========================================
       SIGUIENTE PÁGINA
       Si está en la última, vuelve a la primera (circular)
  ========================================= */

  const siguientePagina = () => {
    setPaginaActual((pagina) => {
      if (pagina >= cantidadPaginas - 1) {
        return 0;               // Vuelve al inicio
      }

      return pagina + 1;
    });
  };

  /* =========================================
       PÁGINA ANTERIOR
       Si está en la primera, va a la última (circular)
  ========================================= */

  const anteriorPagina = () => {
    setPaginaActual((pagina) => {
      if (pagina <= 0) {
        return cantidadPaginas - 1;   // Salta al final
      }

      return pagina - 1;
    });
  };

  /* =========================================
       RENDERIZADO
       Estructura: título → carrusel → indicadores
  ========================================= */

  return (
    <section className="seccion-noticias">

      {/* =================================
                TÍTULO DE SECCIÓN con líneas decorativas
          ================================= */}

      <div className="encabezado-noticias">
        <span className="linea-titulo"></span>

        <h2>Noticias</h2>

        <span className="linea-titulo"></span>
      </div>

      {/* =================================
                FONDO DECORATIVO de la sección
          ================================= */}

      <div className="fondo-noticias"></div>

      {/* =================================
                CONTENIDO PRINCIPAL del carrusel
          ================================= */}

      <div className="contenido-seccion-noticias">

        {/* =================================
                    CARRUSEL — Flechas + Tarjetas
                ================================= */}

        <div className="carrusel-noticias">

          {/* ── FLECHA IZQUIERDA ── */}
          <button
            className="flecha-noticia flecha-izquierda"
            onClick={anteriorPagina}
            aria-label="Noticias anteriores"
          >
            <span>‹</span>
          </button>

          {/* ── TARJETAS DE NOTICIAS ───────────────────────
              Se renderizan solo las noticias de la página actual.
              La key usa (inicio + indice) para ser único globalmente.
          ──────────────────────────────────────────────────── */}
          <div className="contenedor-noticias">
            {noticiasVisibles.map((noticia, indice) => (
              <article className="tarjeta-noticia" key={inicio + indice}>

                {/* Imagen de portada de la noticia */}
                <div className="imagen-noticia">
                  <img src={noticia.imagen} alt={noticia.titulo} />
                </div>

                {/* Título, descripción y botón "Leer más" */}
                <div className="contenido-noticia">
                  <h3>{noticia.titulo}</h3>

                  <p>{noticia.descripcion}</p>

                  {/* Botón decorativo — sin funcionalidad de navegación */}
                  <button className="boton-leer">LEER MÁS</button>
                </div>

              </article>
            ))}
          </div>

          {/* ── FLECHA DERECHA ── */}
          <button
            className="flecha-noticia flecha-derecha"
            onClick={siguientePagina}
            aria-label="Siguientes noticias"
          >
            <span>›</span>
          </button>
        </div>

        {/* =================================
                    INDICADORES DE PÁGINA (puntos)
                    Permite saltar directamente a cualquier página.
                    El punto activo recibe la clase "activo".
                ================================= */}

        <div className="indicadores-noticias">
          {Array.from({
            length: cantidadPaginas,
          }).map((_, indice) => (
            <button
              key={indice}
              className={`indicador-noticia ${
                indice === paginaActual ? "activo" : ""
              }`}
              onClick={() => setPaginaActual(indice)}    // Navega directo a esa página
              aria-label={`Ir a página ${indice + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarruselNoticias;
