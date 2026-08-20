/* =====================================================
   QUICKACTIONSENCUENTRANOS.JSX — TARJETA "ENCUÉNTRANOS"
   Muestra una tarjeta de acceso rápido para guiar al
   usuario hacia los puntos de venta / ubicación.
   Comparte los mismos estilos de QuickActions.css.
===================================================== */

import "./QuickActions.css";

function QuickActionsEncuentranos() {
  return (
    /* Sección de enlace rápido — variante de una sola tarjeta */
    <section className="quick-links quick-links--single">
      <div className="quick-links-grid">

        {/* Tarjeta completa como enlace (actualmente apunta a "/") */}
        <a href="/" className="quick-link-card">

          {/* Ícono decorativo (se estiliza con CSS) */}
          <div className="quick-link-icon" aria-hidden="true">
            {/* Icono decorativo */}
          </div>

          {/* Texto principal de la tarjeta */}
          <h3>Encuéntranos</h3>

          {/* Flecha decorativa indicando que es un enlace */}
          <span className="quick-link-arrow" aria-hidden="true">
            →
          </span>
        </a>

      </div>
    </section>
  );
}

export default QuickActionsEncuentranos;
