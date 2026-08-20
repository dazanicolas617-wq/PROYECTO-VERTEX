/* =====================================================
   ACCIONESRAPIDASENCUENTRANOS.JSX — TARJETA "ENCUÉNTRANOS"
   Acceso directo y destacado hacia puntos de venta y concesionarios.
===================================================== */

import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import "./AccionesRapidas.css";

function AccionesRapidasEncuentranos() {
  return (
    <Link to="/encuentranos" className="tarjeta-accion-rapida">
      {/* Glow de fondo decorativo */}
      <div className="tarjeta-accion-glow"></div>

      {/* Cabecera con ícono e insignia */}
      <div className="tarjeta-accion-cabecera">
        <div className="tarjeta-accion-icono-caja">
          <MapPin size={24} className="icono-accion-svg" />
        </div>
        <span className="tarjeta-accion-etiqueta">RED NACIONAL</span>
      </div>

      {/* Contenido textual */}
      <div className="tarjeta-accion-cuerpo">
        <h3>Encuéntranos</h3>
        <p>Ubica concesionarios oficiales, sedes y talleres autorizados en toda Colombia.</p>
      </div>

      {/* Pie con botón de flecha interactivo */}
      <div className="tarjeta-accion-pie">
        <span className="tarjeta-accion-link-texto">Ver sedes</span>
        <div className="tarjeta-accion-flecha-circulo">
          <ArrowRight size={20} />
        </div>
      </div>
    </Link>
  );
}

export default AccionesRapidasEncuentranos;
