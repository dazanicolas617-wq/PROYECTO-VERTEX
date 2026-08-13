import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Blog.css";

// IMÁGENES DEL BLOG
import blogHero from "../assets/imagenblog/blog_hero.png";
import art1 from "../assets/imagenblog/art_1.jpg";
import art2 from "../assets/imagenblog/art_2.jpg";
import art3 from "../assets/imagenblog/art_3.jpg";
// ============================================================
// DATOS DE LOS ARTÍCULOS
// ============================================================

const articulos = [
  {
    id: 1,
    categoria: "Vertex Moto",
    imagen: art1,
    alt: "Borderless Warranty Program",
    titulo:
      'Vertex Moto lanza el programa "Borderless Warranty Program" para todos sus moteros',
    fecha: "Enero 8, 2026",
    descripcion:
      "Vertex Moto, líder mundial en el segmento de motocicletas de tamaño medio (250-750 CC), ha lanzado el innovador Borderless Warranty Program, una iniciativa pionera en el mundo de las dos ruedas.",
  },

  {
    id: 2,
    categoria: "Comunidad",
    imagen: art3,
    alt: "Guía de rutas REunion 2025",
    titulo:
      "Guía de rutas para llegar al REunion 2025 en Santander",
    fecha: "Septiembre 12, 2025",
    descripcion:
      "El camino es tan importante como el destino. El REUnion 2025 está a la vuelta de la esquina y la emoción ya se siente en el aire. Nuestra comunidad de royalteros se prepara para un viaje inolvidable.",
  },

  {
    id: 3,
    categoria: "Guías",
    imagen: art2,
    alt: "Cómo elegir tu primera moto",
    titulo:
      "Cómo elegir tu primera moto Vertex Moto",
    fecha: "Febrero 29, 2024",
    descripcion:
      "Elegir tu primera moto es el momento más importante en la vida como motero. No importa si eres experto o principiante, elegir correctamente mejora significativamente tus primeras experiencias.",
  },
];

// ============================================================
// COMPONENTE BLOG
// ============================================================

function Blog() {
  // Categoría seleccionada
  const [categoria, setCategoria] = useState("");

  // Texto de búsqueda
  const [busqueda, setBusqueda] = useState("");

  // ==========================================================
  // FILTRADO
  // ==========================================================

  const articulosFiltrados = useMemo(() => {
    const texto = busqueda.toLowerCase().trim();

    return articulos.filter((articulo) => {
      // Filtro por categoría
      const coincideCategoria =
        categoria === "" ||
        articulo.categoria.toLowerCase() === categoria.toLowerCase();

      // Texto completo del artículo
      const contenidoArticulo = `
        ${articulo.categoria}
        ${articulo.titulo}
        ${articulo.fecha}
        ${articulo.descripcion}
      `.toLowerCase();

      // Filtro por búsqueda
      const coincideBusqueda =
        texto === "" || contenidoArticulo.includes(texto);

      return coincideCategoria && coincideBusqueda;
    });
  }, [categoria, busqueda]);

  // ==========================================================
  // BUSCADOR
  // ==========================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    // El filtrado ya ocurre automáticamente
    // gracias al estado de busqueda.
  };

  return (
    <>
      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* ======================================================
          CONTENIDO PRINCIPAL
      ====================================================== */}

      <main className="pagina_blog">

        {/* ====================================================
            HERO
        ==================================================== */}

        <section className="blog_hero">

          <div
            className="blog_hero__imagen"
            aria-label="Imagen principal del blog Vertex Moto"
          >
            <img
              src={blogHero}
              alt="Imagen principal del blog Vertex Moto"
            />
          </div>

          <div className="intro_texto">

            <h1>Blog Vertex Moto</h1>

            <p className="intro_subtitulo">
              ¡Bienvenido al mundo del motociclismo puro!
            </p>

            <p className="intro_descripcion">
              Encuentra noticias, eventos, artículos y consejos
              para que la aventura no tenga límite.
            </p>

          </div>

        </section>

        {/* ====================================================
            FILTROS Y BUSCADOR
        ==================================================== */}

        <section className="bloque_intro_blog">

          <div className="bloque_filtros">

            {/* CATEGORÍAS */}

            <aside className="panel_categorias">

              <label
                className="categoria_label"
                htmlFor="select-categoria"
              >
                Categorías
              </label>

              <select
                className="select_categoria"
                id="select-categoria"
                value={categoria}
                onChange={(event) =>
                  setCategoria(event.target.value)
                }
              >

                <option value="">
                  Todas las categorías
                </option>

                <option value="Vertex Moto">
                  Vertex Moto
                </option>

                <option value="Comunidad">
                  Comunidad
                </option>

                <option value="Guías">
                  Guías
                </option>

              </select>

            </aside>

            {/* BUSCADOR */}

            <form
              className="buscador_blog"
              onSubmit={handleSubmit}
            >

              <label
                className="buscador_label"
                htmlFor="busqueda"
              >

                <input
                  type="search"
                  id="busqueda"
                  name="buscar"
                  placeholder="Buscar artículos..."
                  aria-label="Buscar artículos"
                  value={busqueda}
                  onChange={(event) =>
                    setBusqueda(event.target.value)
                  }
                />

              </label>

              <button
                type="submit"
                className="boton_buscador"
              >
                BUSCAR
              </button>

            </form>

          </div>

        </section>

        {/* ====================================================
            ARTÍCULOS
        ==================================================== */}

        <section className="contenido_blog">

          {articulosFiltrados.length > 0 ? (

            articulosFiltrados.map((articulo) => (

              <article
                className="blog-card"
                key={articulo.id}
              >

                <div className="blog-card__imagen">

                  <img
                    src={articulo.imagen}
                    alt={articulo.alt}
                  />

                </div>

                <div className="blog-card__body">

                  <p className="blog-card__tag">
                    {articulo.categoria}
                  </p>

                  <h2 className="blog-card__titulo">
                    {articulo.titulo}
                  </h2>

                  <p className="blog-card__fecha">
                    {articulo.fecha}
                  </p>

                  <p className="blog-card__descripcion">
                    {articulo.descripcion}
                  </p>

                  <a
                    href="#"
                    className="blog-card__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    Ver más
                  </a>

                </div>

              </article>

            ))

          ) : (

            // ==================================================
            // SIN RESULTADOS
            // ==================================================

            <div className="blog_sin_resultados">

              <h2>No encontramos artículos</h2>

              <p>
                Intenta cambiar la categoría o utilizar
                otro término de búsqueda.
              </p>

            </div>

          )}

        </section>

      </main>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </>
  );
}

export default Blog;