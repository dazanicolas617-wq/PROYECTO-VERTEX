/* =====================================================
   MOTOCARD.JSX — TARJETA DE MOTOCICLETA
   Componente de presentación que muestra la información
   básica de una moto dentro del catálogo:
     - Imagen con degradado inferior
     - Nombre superpuesto sobre la imagen
     - Precio de referencia
     - Botones "VER MÁS" y "COTIZACIÓN"

   Props recibidas:
   - moto      : Objeto con los datos de la moto
                 (nombre, imagen, precio, etc.)
   - onVerMas  : Función que se llama al hacer clic
                 en "VER MÁS" — abre el modal de detalles
   - onCotizar : Función que se llama al hacer clic
                 en "COTIZACIÓN" — abre el modal de cotización
===================================================== */

import "./MotoCard.css";

function MotoCard({ moto, onVerMas, onCotizar }) {
  return (
    /* <article> es el elemento semántico correcto para
       una unidad de contenido independiente como una tarjeta */
    <article className="moto-card">

      {/* ── IMAGEN CON OVERLAY ────────────────────────────
          Contenedor con overflow:hidden para el efecto de zoom.
          El pseudo-elemento ::after en CSS agrega el degradado
          negro en la parte inferior sobre la imagen.
      ──────────────────────────────────────────────────── */}
      <div className="moto-card-image">
        <img
          src={moto.imagen}
          alt={moto.nombre}
        />

        {/* Nombre de la moto superpuesto sobre el degradado */}
        <div className="moto-card-overlay">
          <h3>{moto.nombre}</h3>
        </div>
      </div>

      {/* ── INFORMACIÓN INFERIOR ──────────────────────────
          Muestra el precio y los dos botones de acción
      ──────────────────────────────────────────────────── */}
      <div className="moto-card-info">

        {/* Precio de referencia */}
        <div className="moto-price">
          <span>Precio desde</span>
          <strong>{moto.precio}</strong>
        </div>

        {/* Botones de acción */}
        <div className="moto-buttons">

          {/* Botón blanco — abre el modal con detalles completos */}
          <button
            className="btn-ver-mas"
            onClick={() => onVerMas(moto)}
          >
            VER MÁS
          </button>

          {/* Botón azul — abre el formulario de cotización */}
          <button
            className="btn-cotizacion"
            onClick={() => onCotizar(moto)}
          >
            COTIZACIÓN
          </button>

        </div>

      </div>

    </article>
  );
}

export default MotoCard;