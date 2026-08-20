/* =====================================================
   PUNTO DE ENTRADA DE LA APLICACIÓN
   - Monta el componente raíz <App /> dentro del
     elemento HTML con id="root" (definido en index.html)
   - StrictMode activa advertencias adicionales
     de React en desarrollo
===================================================== */

import { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";     // Componente principal con todas las rutas
import "./index.css";             // Estilos globales de la aplicación

/* ─── ERROR BOUNDARY GLOBAL ────────────────────────────────────
   Captura errores de render de cualquier página y muestra un
   mensaje útil en lugar de dejar la pantalla en negro.
──────────────────────────────────────────────────────────────── */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Error capturado por ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          background: "#0a0a0a",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          gap: "16px",
          padding: "32px"
        }}>
          <h1 style={{ color: "#ef4444", fontSize: "2rem" }}>⚠ Error en la aplicación</h1>
          <p style={{ color: "#9ca3af", textAlign: "center", maxWidth: "500px" }}>
            {this.state.error?.message || "Ocurrió un error inesperado."}
          </p>
          <button
            onClick={() => { this.setState({ hasError: false, error: null }); window.location.href = "/"; }}
            style={{
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px 28px",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            Volver al inicio
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Busca el div#root en el DOM y renderiza la app dentro de él
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);