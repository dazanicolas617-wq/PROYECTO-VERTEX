/* =====================================================
   ACCIONESRAPIDASENCUENTRANOS.JSX — TARJETA "ENCUÉNTRANOS"
   Muestra una tarjeta de acceso rápido para guiar al
   usuario hacia los puntos de venta / ubicación.
   Comparte los mismos estilos de AccionesRapidas.css.
===================================================== */

import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import "./AccionesRapidas.css";

function AccionesRapidasEncuentranos() {
  return (
    <section className="quick-links quick-links--single">
      <div className="quick-links-grid">
        {/* Tarjeta completa como enlace hacia la página /encuentranos */}
        <Link to="/encuentranos" className="quick-link-card">
          <div className="quick-link-icon" aria-hidden="true">
            <MapPin size={22} color="#3b82f6" />
          </div>

          <h3>Encuéntranos</h3>

          <span className="quick-link-arrow" aria-hidden="true">
            <ArrowRight size={20} />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default AccionesRapidasEncuentranos;
