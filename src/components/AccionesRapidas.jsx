/* =====================================================
   ACCIONESRAPIDAS.JSX — TARJETA "AGENDAR PRUEBA"
   Acceso directo y destacado para agendar prueba de manejo.
===================================================== */

import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import "./AccionesRapidas.css";

function AccionesRapidas() {
  return (
    <Link to="/agendar-prueba" className="tarjeta-accion-rapida">
      {/* Glow de fondo decorativo */}
      <div className="tarjeta-accion-glow"></div>

      {/* Cabecera con ícono e insignia */}
      <div className="tarjeta-accion-cabecera">
        <div className="tarjeta-accion-icono-caja">
          <Calendar size={24} className="icono-accion-svg" />
        </div>
        <span className="tarjeta-accion-etiqueta">EXPERIENCIA VERTEX</span>
      </div>

      {/* Contenido textual */}
      <div className="tarjeta-accion-cuerpo">
        <h3>Agendar prueba</h3>
        <p>Reserva tu prueba de manejo personalizada y siente la potencia de nuestros modelos.</p>
      </div>

      {/* Pie con botón de flecha interactivo */}
      <div className="tarjeta-accion-pie">
        <span className="tarjeta-accion-link-texto">Reservar ahora</span>
        <div className="tarjeta-accion-flecha-circulo">
          <ArrowRight size={20} />
        </div>
      </div>
    </Link>
  );
}

export default AccionesRapidas;
