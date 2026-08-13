import { useState } from "react";
import "./NewsCarousel.css";

function NewsCarousel() {

    const noticias = [

        {
            titulo: "NUEVA COLECCIÓN 2026",
            descripcion:
                "Descubre los nuevos modelos que llegan para llevar tu pasión por las motos al siguiente nivel.",
            imagen:
                "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg"
        },

        {
            titulo: "POTENCIA SIN LÍMITES",
            descripcion:
                "Conoce motocicletas diseñadas para ofrecer máximo rendimiento, potencia y presencia.",
            imagen:
                "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg"
        },

        {
            titulo: "VIVE LA EXPERIENCIA",
            descripcion:
                "Siente la libertad de conducir una motocicleta creada para quienes buscan algo diferente.",
            imagen:
                "https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg"
        },

        {
            titulo: "AVENTURA SOBRE DOS RUEDAS",
            descripcion:
                "Prepárate para recorrer nuevos caminos y convertir cada viaje en una experiencia inolvidable.",
            imagen:
                "https://images.pexels.com/photos/163210/motorcycle-racer-racing-speed-163210.jpeg"
        },

        {
            titulo: "DISEÑO QUE IMPONE",
            descripcion:
                "Líneas agresivas, detalles únicos y una personalidad que no pasa desapercibida.",
            imagen:
                "https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg"
        },

        {
            titulo: "TECNOLOGÍA Y RENDIMIENTO",
            descripcion:
                "La combinación perfecta entre innovación, tecnología y el espíritu de las motocicletas.",
            imagen:
                "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg"
        },

        {
            titulo: "TU PRÓXIMA MOTOCICLETA",
            descripcion:
                "Encuentra el modelo que se adapta a tu estilo y comienza una nueva aventura.",
            imagen:
                "https://images.pexels.com/photos/104842/bmw-motorcycle-ride-bike-104842.jpeg"
        },

        {
            titulo: "UNA NUEVA HISTORIA COMIENZA",
            descripcion:
                "No se trata solamente de conducir. Se trata de vivir cada kilómetro al máximo.",
            imagen:
                "https://images.pexels.com/photos/164634/motorcycles-choppers-harley-davidson-freedom-164634.jpeg"
        }

    ];


    // Cantidad de noticias que se muestran
    const noticiasPorPagina = 2;


    // Página actual del carrusel
    const [paginaActual, setPaginaActual] = useState(0);


    // Calculamos cuántas páginas existen
    const cantidadPaginas = Math.ceil(
        noticias.length / noticiasPorPagina
    );


    // Primera noticia que debemos mostrar
    const inicio = paginaActual * noticiasPorPagina;


    // Sacamos las dos noticias correspondientes
    const noticiasVisibles = noticias.slice(
        inicio,
        inicio + noticiasPorPagina
    );


    // Ir a la siguiente página
    const siguientePagina = () => {

        setPaginaActual((pagina) => {

            if (pagina >= cantidadPaginas - 1) {
                return 0;
            }

            return pagina + 1;

        });

    };


    // Ir a la página anterior
    const anteriorPagina = () => {

        setPaginaActual((pagina) => {

            if (pagina <= 0) {
                return cantidadPaginas - 1;
            }

            return pagina - 1;

        });

    };


    return (

        <section className="seccion-noticias">

            {/* Fondo oscuro */}
            <div className="fondo-noticias"></div>


            {/* Contenido */}
            <div className="contenido-seccion-noticias">


                {/* =================================
                    TÍTULO
                ================================= */}

                <div className="encabezado-noticias">

                    <span className="linea-titulo"></span>

                    <h2>Noticias</h2>

                    <span className="linea-titulo"></span>

                </div>


                {/* =================================
                    CARRUSEL
                ================================= */}

                <div className="carrusel-noticias">


                    {/* Flecha izquierda */}

                    <button
                        className="flecha-noticia flecha-izquierda"
                        onClick={anteriorPagina}
                        aria-label="Noticias anteriores"
                    >

                        <span>‹</span>

                    </button>


                    {/* Noticias */}

                    <div className="contenedor-noticias">

                        {noticiasVisibles.map((noticia, indice) => (

                            <article
                                className="tarjeta-noticia"
                                key={inicio + indice}
                            >

                                {/* Imagen */}

                                <div className="imagen-noticia">

                                    <img
                                        src={noticia.imagen}
                                        alt={noticia.titulo}
                                    />

                                </div>


                                {/* Contenido */}

                                <div className="contenido-noticia">

                                    <h3>
                                        {noticia.titulo}
                                    </h3>


                                    <p>
                                        {noticia.descripcion}
                                    </p>


                                    <button className="boton-leer">
                                        LEER MÁS
                                    </button>

                                </div>

                            </article>

                        ))}

                    </div>


                    {/* Flecha derecha */}

                    <button
                        className="flecha-noticia flecha-derecha"
                        onClick={siguientePagina}
                        aria-label="Siguientes noticias"
                    >

                        <span>›</span>

                    </button>

                </div>


                {/* =================================
                    INDICADORES
                ================================= */}

                <div className="indicadores-noticias">

                    {Array.from(
                        { length: cantidadPaginas }
                    ).map((_, indice) => (

                        <button
                            key={indice}
                            className={
                                `indicador-noticia ${
                                    indice === paginaActual
                                        ? "activo"
                                        : ""
                                }`
                            }
                            onClick={() =>
                                setPaginaActual(indice)
                            }
                            aria-label={`Ir a página ${indice + 1}`}
                        ></button>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default NewsCarousel;