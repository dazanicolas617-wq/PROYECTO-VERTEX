/* =====================================================
   DETALLESMOTOS.JSX — MODAL DE DETALLES DE MOTOCICLETA
   Se abre cuando el usuario hace clic en "VER MÁS"
   dentro del catálogo de motos.

   Muestra:
   - Imagen de la moto
   - Categoría y cilindrada
   - Descripción
   - Precio
   - Botón para ir a la página de agendar prueba

   Props recibidas:
   - moto    : Objeto con los datos de la moto seleccionada
   - onClose : Función para cerrar el modal (desde el padre)
===================================================== */

import { useNavigate } from "react-router-dom";
import { Calendar, X } from "lucide-react";
import "./DetallesMoto.css";

function DetallesMoto({ moto, onClose }) {

  /* Hook de React Router para navegar entre rutas */
  const navigate = useNavigate();

  /* Si no se recibió una moto, no renderiza nada */
  if (!moto) {
    return null;
  }

  /* ── AGENDAR PRUEBA ────────────────────────────────────
     Al hacer clic, cierra el modal y redirige a la página
     de agendar prueba, pasando el nombre de la moto
     seleccionada como estado de navegación.
  ──────────────────────────────────────────────────────── */
  const handleAgendarPrueba = () => {
    if (onClose) {
      onClose();  // Cierra el modal antes de navegar
    }
    navigate("/agendar-prueba", { state: { motoSeleccionada: moto.nombre } });
  };

  return (
    /* Contenedor de posición fija que cubre toda la pantalla (z-index alto) */
    <div className="moto-modal">

      {/* ── FONDO OSCURO ────────────────────────────────
          Clic sobre el fondo cierra el modal (backdrop click)
      ──────────────────────────────────────────────────── */}
      <div
        className="moto-modal-background"
        onClick={onClose}
      ></div>

      {/* ── CAJA DEL MODAL ──────────────────────────────
          Contenedor con borde azul, fondo oscuro y
          scroll interno para pantallas pequeñas
      ──────────────────────────────────────────────────── */}
      <div className="moto-details">

        {/* ── BOTÓN CERRAR ── esquina superior derecha */}
        <button
          className="moto-close"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X size={18} />
        </button>

        {/* Cuerpo con scroll independiente para no desbordar el modal */}
        <div className="moto-details-content">

          {/* Nombre de la moto */}
          <h2>{moto.nombre}</h2>

          {/* Imagen de la moto */}
          <div className="moto-details-image">
            <img
              src={moto.imagen}
              alt={moto.nombre}
            />
          </div>

          {/* ── CARACTERÍSTICAS EN GRID ─────────────────
              Muestra categoría y cilindrada en dos columnas
          ──────────────────────────────────────────────── */}
          <div className="moto-details-grid">
            <div className="detail-box">
              <strong>CATEGORÍA:</strong>
              <span>{moto.categoria}</span>
            </div>

            <div className="detail-box">
              <strong>CILINDRADA:</strong>
              <span>{moto.cilindrada}</span>
            </div>
          </div>

          {/* Descripción larga de la moto */}
          <p className="moto-description">
            {moto.descripcion}
          </p>

          {/* ── PRECIO ─────────────────────────────────
              Resaltado con fondo azul translúcido
          ──────────────────────────────────────────────── */}
          <div className="modal-price">
            <span>Precio desde</span>
            <strong>
              {moto.precio}
            </strong>
          </div>

          {/* ── BOTÓN — Redirige a /agendar-prueba ──────
              Llama a handleAgendarPrueba que cierra el
              modal y navega a la página de agendamiento
          ──────────────────────────────────────────────── */}
          <button className="modal-test-button" onClick={handleAgendarPrueba}>
            <Calendar size={18} />
            <span>Agendar prueba de manejo</span>
          </button>

        </div>
      </div>
    </div>
  );
}

export default DetallesMoto;
