import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Blog.css";

// ============================================================
// IMÁGENES DEL BLOG
// ============================================================

import blogHero from "../assets/imagenblog/blog_hero.png";
import art1 from "../assets/imagenblog/art_1.jpg";
import art2 from "../assets/imagenblog/art_2.jpg";
import art3 from "../assets/imagenblog/art_3.jpg";
import consejos from "../assets/imagenblog/consejos.png";
import social from "../assets/imagenblog/social.jpg";
import nuevaMoto from "../assets/imagenblog/nuevamoto.png";

// ============================================================
// ARTÍCULOS
// ============================================================

const articulos = [
  {
    id: 1,
    categoria: "Vertex Moto",
    imagen: art1,
    alt: "Borderless Warranty Program",
    titulo:
      'Vertex Moto lanza el programa "Borderless Warranty Program" para todos sus moteros',
    fecha: "Febrero 8, 2026",
    descripcion:
      "Vertex Moto, líder mundial en el segmento de motocicletas de tamaño medio (250-750 CC), ha lanzado el innovador Borderless Warranty Program, una iniciativa pionera en el mundo de las dos ruedas.",

    contenido: [
      {
        tipo: "p",
        texto:
          "Vertex Moto, líder mundial en el segmento de motocicletas de tamaño medio (250-750 CC), ha presentado el innovador Borderless Warranty Program, una iniciativa pensada para acompañar a sus moteros incluso cuando se encuentran fuera de su país de origen.",
      },
      {
        tipo: "h3",
        texto: "Una garantía pensada para viajar",
      },
      {
        tipo: "p",
        texto:
          "El Borderless Warranty Program nace con el objetivo de ofrecer mayor tranquilidad a los usuarios que disfrutan de viajar en motocicleta. La iniciativa permite que los moteros puedan contar con el respaldo de Vertex Moto durante sus desplazamientos internacionales.",
      },
      {
        tipo: "h3",
        texto: "Más libertad para los moteros",
      },
      {
        tipo: "p",
        texto:
          "Para quienes convierten la motocicleta en una forma de descubrir nuevos lugares, contar con un programa de garantía sin fronteras representa una mayor confianza a la hora de planificar rutas y viajes de larga distancia.",
      },
      {
        tipo: "p",
        texto:
          "Vertex Moto continúa trabajando para crear soluciones que acompañen a su comunidad más allá de la motocicleta, ofreciendo servicios pensados para las necesidades de los moteros actuales.",
      },
      {
        tipo: "h3",
        texto: "Una nueva experiencia de propiedad",
      },
      {
        tipo: "p",
        texto:
          "Con esta iniciativa, la marca refuerza su compromiso con sus usuarios y apuesta por una experiencia de propiedad más sencilla, flexible y adaptada a una comunidad cada vez más internacional.",
      },
    ],
  },

  {
    id: 2,
    categoria: "Guías",
    imagen: consejos,
    alt: "Consejos para preparar una moto antes de una ruta",
    titulo: "5 consejos para preparar tu moto antes de una gran ruta",
    fecha: "Mayo 17, 2026",
    descripcion:
      "Antes de comenzar una aventura es importante asegurarse de que todo está en perfecto estado. Te contamos cinco recomendaciones esenciales para revisar tu motocicleta y disfrutar de cada kilómetro con mayor seguridad y confianza.",

    contenido: [
      {
        tipo: "p",
        texto:
          "Una buena preparación puede marcar la diferencia antes de comenzar una ruta. Revisar algunos elementos básicos de la motocicleta permite reducir imprevistos y disfrutar del viaje con mayor tranquilidad.",
      },
      {
        tipo: "h3",
        texto: "1. Revisa los neumáticos",
      },
      {
        tipo: "p",
        texto:
          "Comprueba que los neumáticos tengan la presión adecuada y revisa visualmente su estado. Busca signos de desgaste, cortes o cualquier daño que pueda afectar a la conducción.",
      },
      {
        tipo: "h3",
        texto: "2. Comprueba los frenos",
      },
      {
        tipo: "p",
        texto:
          "Revisa el estado de las pastillas, discos y líquido de frenos. El sistema de frenado debe encontrarse en buenas condiciones antes de comenzar una ruta larga.",
      },
      {
        tipo: "h3",
        texto: "3. Comprueba los niveles",
      },
      {
        tipo: "p",
        texto:
          "Antes de salir, revisa los niveles correspondientes de aceite, refrigerante y líquido de frenos según las especificaciones de tu motocicleta.",
      },
      {
        tipo: "h3",
        texto: "4. Revisa las luces",
      },
      {
        tipo: "p",
        texto:
          "Comprueba que los faros, intermitentes, luz de freno y demás elementos de iluminación funcionan correctamente.",
      },
      {
        tipo: "h3",
        texto: "5. Prepara tu equipamiento",
      },
      {
        tipo: "p",
        texto:
          "Además de preparar la motocicleta, utiliza siempre el equipamiento adecuado para la ruta. Llevar los elementos necesarios puede hacer que el viaje sea mucho más cómodo.",
      },
      {
        tipo: "h3",
        texto: "Planifica antes de salir",
      },
      {
        tipo: "p",
        texto:
          "Consulta el recorrido, las condiciones meteorológicas y los puntos donde podrás realizar descansos. Una buena planificación permite concentrarse en disfrutar de la carretera y de la experiencia.",
      },
    ],
  },

  {
    id: 3,
    categoria: "Comunidad",
    imagen: social,
    alt: "Comunidad de moteros Vertex Moto",
    titulo:
      "La comunidad Vertex Moto se reúne para compartir su pasión por las motos",
    fecha: "Septiembre 22, 2026",
    descripcion:
      "Rodar juntos siempre hace que la experiencia sea especial. La comunidad Vertex Moto vuelve a reunirse para disfrutar de nuevas rutas, conocer otros moteros y compartir historias que nacen sobre dos ruedas.",

    contenido: [
      {
        tipo: "p",
        texto:
          "La comunidad Vertex Moto vuelve a reunirse para compartir una de las mejores experiencias que puede ofrecer el mundo de las dos ruedas: rodar juntos y crear nuevos recuerdos.",
      },
      {
        tipo: "h3",
        texto: "Mucho más que una ruta",
      },
      {
        tipo: "p",
        texto:
          "Los encuentros de la comunidad permiten descubrir nuevas carreteras, conocer otros moteros y compartir experiencias con personas que tienen una misma pasión.",
      },
      {
        tipo: "h3",
        texto: "Historias que nacen sobre dos ruedas",
      },
      {
        tipo: "p",
        texto:
          "Cada ruta tiene sus propios momentos. Una parada para tomar un café, una carretera que nadie había recorrido antes o una conversación entre compañeros pueden convertirse en algunos de los mejores recuerdos de una salida.",
      },
      {
        tipo: "h3",
        texto: "Compartir la pasión",
      },
      {
        tipo: "p",
        texto:
          "La comunidad también es un espacio para aprender. Los moteros pueden compartir consejos, experiencias de viaje, recomendaciones de rutas y conocimientos sobre el cuidado de sus motocicletas.",
      },
      {
        tipo: "h3",
        texto: "Seguimos rodando juntos",
      },
      {
        tipo: "p",
        texto:
          "Vertex Moto continúa apostando por crear espacios donde los moteros puedan encontrarse, disfrutar de nuevas aventuras y fortalecer una comunidad que crece con cada kilómetro recorrido.",
      },
    ],
  },

  {
    id: 4,
    categoria: "Vertex Moto",
    imagen: nuevaMoto,
    alt: "Nuevas motocicletas Vertex Moto",
    titulo:
      "Vertex Moto presenta sus nuevas motocicletas para la temporada 2026",
    fecha: "Enero 20, 2025",
    descripcion:
      "Vertex Moto continúa innovando con una nueva generación de motocicletas diseñadas para ofrecer mayor rendimiento, tecnología y comodidad. Descubre las novedades que marcarán esta nueva temporada para todos los amantes de las dos ruedas.",

    contenido: [
      {
        tipo: "p",
        texto:
          "Vertex Moto continúa innovando con una nueva generación de motocicletas diseñadas para ofrecer mayor rendimiento, tecnología y comodidad. Esta nueva temporada representa un paso adelante en la evolución de la marca y en su compromiso con los amantes de las dos ruedas.",
      },
      {
        tipo: "h3",
        texto: "Una nueva generación",
      },
      {
        tipo: "p",
        texto:
          "Las nuevas motocicletas han sido desarrolladas para ofrecer una experiencia de conducción equilibrada, combinando tecnología, diseño y prestaciones para diferentes tipos de moteros.",
      },
      {
        tipo: "p",
        texto:
          "Desde recorridos urbanos hasta grandes viajes por carretera, la nueva gama busca adaptarse a las necesidades de quienes disfrutan de cada kilómetro sobre su motocicleta.",
      },
      {
        tipo: "h3",
        texto: "Tecnología y diseño",
      },
      {
        tipo: "p",
        texto:
          "Vertex Moto incorpora nuevas soluciones orientadas a mejorar la comodidad y el control durante la conducción, sin dejar de lado el carácter deportivo y aventurero que identifica a la marca.",
      },
      {
        tipo: "p",
        texto:
          "El diseño exterior también recibe importantes novedades, con líneas modernas y una estética pensada para destacar tanto en carretera como en ciudad.",
      },
      {
        tipo: "h3",
        texto: "Preparadas para la aventura",
      },
      {
        tipo: "p",
        texto:
          "Esta nueva generación está pensada para los moteros que buscan una motocicleta versátil y preparada para acompañarlos en sus próximas aventuras.",
      },
    ],
  },

  {
    id: 5,
    categoria: "Comunidad",
    imagen: art3,
    alt: "Guía de rutas Reunion 2025",
    titulo: "Guía de rutas para llegar a la Reunion 2025 en Santander",
    fecha: "Agosto 6, 2025",
    descripcion:
      "El camino es tan importante como el destino. La Reunion este 2025 está a la vuelta de la esquina y la emoción ya se siente en el aire. Nuestra comunidad de royalteros se prepara para un viaje inolvidable.",

    contenido: [
      {
        tipo: "p",
        texto:
          "LA Reunion 2025 en Santander está cada vez más cerca y queremos que disfrutes del viaje desde el primer kilómetro. Si vas a acudir en moto, hemos preparado esta guía para ayudarte a organizar tu ruta y llegar al encuentro disfrutando del camino.",
      },
      {
        tipo: "h3",
        texto: "Destino: Santander",
      },
      {
        tipo: "p",
        texto:
          "Santander será el punto de encuentro para todos los moteros que participen en el REUnion 2025. La ciudad ofrece un entorno perfecto para disfrutar de la carretera, el paisaje y de unos días rodeados de otros apasionados por las motocicletas.",
      },
      {
        tipo: "h3",
        texto: "Antes de comenzar la ruta",
      },
      {
        tipo: "p",
        texto:
          "Antes de salir, revisa el estado general de tu motocicleta. Comprueba neumáticos, frenos, niveles de líquidos, luces y cadena si tu modelo cuenta con ella.",
      },
      {
        tipo: "p",
        texto:
          "También recomendamos consultar la previsión meteorológica y el estado de las carreteras para elegir el mejor momento para iniciar el viaje.",
      },
      {
        tipo: "h3",
        texto: "Ruta hacia Santander",
      },
      {
        tipo: "p",
        texto:
          "Una buena opción es planificar el recorrido con antelación y dividir el trayecto en diferentes etapas. De esta manera podrás realizar paradas para descansar, repostar y disfrutar de los lugares que encontrarás durante el camino.",
      },
      {
        tipo: "p",
        texto:
          "Si viajas en grupo, acuerda previamente los puntos de encuentro y descanso. Mantener un ritmo cómodo para todos hará que el viaje sea mucho más agradable.",
      },
      {
        tipo: "h3",
        texto: "Paradas durante el recorrido",
      },
      {
        tipo: "p",
        texto:
          "No tengas prisa por llegar. Una de las mejores partes de cualquier reunión motera es precisamente el camino. Aprovecha las paradas para descansar, tomar algo y compartir la experiencia con otros moteros que también se dirigen al REUnion.",
      },
      {
        tipo: "h3",
        texto: "Últimos kilómetros",
      },
      {
        tipo: "p",
        texto:
          "Al acercarte a Santander, presta especial atención al tráfico y adapta la velocidad a las condiciones de la carretera. Sigue siempre las indicaciones y señalización correspondiente.",
      },
      {
        tipo: "p",
        texto:
          "Una vez llegues a Santander, solo quedará disfrutar del REUnion 2025, conocer a otros miembros de la comunidad y compartir la pasión por las dos ruedas.",
      },
      {
        tipo: "h3",
        texto: "Disfruta del viaje",
      },
      {
        tipo: "p",
        texto:
          "Recuerda que el objetivo no es solamente llegar al destino. El verdadero espíritu de una ruta motera está en cada kilómetro, cada paisaje y cada experiencia compartida durante el camino.",
      },
    ],
  },

  {
    id: 6,
    categoria: "Guías",
    imagen: art2,
    alt: "Cómo elegir tu primera moto",
    titulo: "Cómo elegir tu primera moto Vertex Moto",
    fecha: "Noviembre 29, 2025",
    descripcion:
      "Elegir tu primera moto es el momento más importante en la vida como motero. No importa si eres experto o principiante, elegir correctamente mejora significativamente tus primeras experiencias.",

    contenido: [
      {
        tipo: "p",
        texto:
          "Elegir tu primera motocicleta es una decisión importante. No existe una única moto perfecta para todos los usuarios, por lo que es fundamental conocer tus necesidades, experiencia y el tipo de uso que quieres darle.",
      },
      {
        tipo: "h3",
        texto: "Define para qué utilizarás la moto",
      },
      {
        tipo: "p",
        texto:
          "Antes de elegir un modelo, piensa en tus recorridos habituales. No es lo mismo utilizar la motocicleta principalmente en ciudad que realizar viajes largos o rutas de fin de semana.",
      },
      {
        tipo: "h3",
        texto: "Ten en cuenta tu experiencia",
      },
      {
        tipo: "p",
        texto:
          "Si estás comenzando, es importante elegir una motocicleta que te permita aprender progresivamente y sentirte cómodo durante la conducción.",
      },
      {
        tipo: "p",
        texto:
          "La ergonomía, el peso, la altura del asiento y la facilidad de manejo son factores que pueden marcar una gran diferencia durante los primeros meses.",
      },
      {
        tipo: "h3",
        texto: "Piensa también en el mantenimiento",
      },
      {
        tipo: "p",
        texto:
          "Una motocicleta requiere revisiones y cuidados periódicos. Antes de comprar, es recomendable conocer los costes de mantenimiento y asegurarse de que el modelo se adapta a tu presupuesto.",
      },
      {
        tipo: "h3",
        texto: "La elección debe adaptarse a ti",
      },
      {
        tipo: "p",
        texto:
          "La mejor primera moto no es necesariamente la más potente ni la que tenga más prestaciones. Es aquella que se adapta a tu experiencia, tus necesidades y la manera en la que quieres disfrutar de la carretera.",
      },
    ],
  },
];

// ============================================================
// COMPONENTE BLOG
// ============================================================

function Blog() {
  const [categoria, setCategoria] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [articuloSeleccionado, setArticuloSeleccionado] = useState(null);

  // ==========================================================
  // FILTRO DE ARTÍCULOS
  // ==========================================================

  const articulosFiltrados = useMemo(() => {
    const normalizarTexto = (texto) =>
      texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    const textoBuscado = normalizarTexto(busqueda);
    const categoriaSeleccionada = normalizarTexto(categoria);

    return articulos.filter((articulo) => {
      const categoriaArticulo = normalizarTexto(articulo.categoria);

      const textoArticulo = normalizarTexto(
        `${articulo.categoria} ${articulo.titulo} ${articulo.fecha} ${articulo.descripcion}`
      );

      const coincideCategoria =
        categoriaSeleccionada === "" ||
        categoriaArticulo === categoriaSeleccionada;

      const coincideBusqueda =
        textoBuscado === "" || textoArticulo.includes(textoBuscado);

      return coincideCategoria && coincideBusqueda;
    });
  }, [categoria, busqueda]);

  // ==========================================================
  // MODAL
  // ==========================================================

  const abrirModal = (articulo) => {
    setArticuloSeleccionado(articulo);
    document.body.classList.add("modal-abierto");
  };

  const cerrarModal = () => {
    setArticuloSeleccionado(null);
    document.body.classList.remove("modal-abierto");
  };

  // ==========================================================
  // ESC PARA CERRAR
  // ==========================================================

  const manejarTecla = (event) => {
    if (event.key === "Escape") {
      cerrarModal();
    }
  };

  return (
    <>
      <Navbar />

      <main className="pagina_blog">
        {/* ====================================================
            HERO
        ==================================================== */}

        <section className="blog_hero">
          <div className="blog_hero__imagen">
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
              Encuentra noticias, eventos, artículos y consejos para que
              la aventura no tenga límite.
            </p>
          </div>
        </section>

        {/* ====================================================
            FILTROS
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
                onChange={(event) => setCategoria(event.target.value)}
              >
                <option value="">Todas las categorías</option>
                <option value="Vertex Moto">Vertex Moto</option>
                <option value="Comunidad">Comunidad</option>
                <option value="Guías">Guías</option>
              </select>
            </aside>

            {/* BUSCADOR */}

            <form
              className="buscador_blog"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="buscador_label">
                <input
                  type="search"
                  id="busqueda"
                  name="buscar"
                  placeholder="Buscar artículos..."
                  aria-label="Buscar artículos"
                  value={busqueda}
                  onChange={(event) => setBusqueda(event.target.value)}
                />
              </label>

              <button type="submit" className="boton_buscador">
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
              <article className="blog-card" key={articulo.id}>
                <div className="blog-card__imagen">
                  <img src={articulo.imagen} alt={articulo.alt} />
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

                  <button
                    type="button"
                    className="blog-card__link"
                    onClick={() => abrirModal(articulo)}
                  >
                    Ver más
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="blog-sin-resultados">
              <h2>No encontramos artículos</h2>
              <p>
                Intenta cambiar la categoría o utilizar otro término de
                búsqueda.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* ======================================================
          MODAL
      ====================================================== */}

      {articuloSeleccionado && (
        <div
          className="blog-modal activo"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitulo"
          onKeyDown={manejarTecla}
        >
          <div
            className="blog-modal__overlay"
            onClick={cerrarModal}
          ></div>

          <div className="blog-modal__contenido">
            <button
              className="blog-modal__cerrar"
              onClick={cerrarModal}
              aria-label="Cerrar artículo"
              type="button"
            >
              &times;
            </button>

            <img
              className="blog-modal__imagen"
              src={articuloSeleccionado.imagen}
              alt={articuloSeleccionado.alt}
            />

            <div className="blog-modal__body">
              <p className="blog-modal__tag">
                {articuloSeleccionado.categoria}
              </p>

              <h2
                className="blog-modal__titulo"
                id="modalTitulo"
              >
                {articuloSeleccionado.titulo}
              </h2>

              <p className="blog-modal__fecha">
                {articuloSeleccionado.fecha}
              </p>

              <p className="blog-modal__descripcion">
                {articuloSeleccionado.descripcion}
              </p>

              <div className="blog-modal__texto">
                {articuloSeleccionado.contenido.map(
                  (bloque, index) => {
                    if (bloque.tipo === "h3") {
                      return (
                        <h3 key={index}>{bloque.texto}</h3>
                      );
                    }

                    return (
                      <p key={index}>{bloque.texto}</p>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Blog;