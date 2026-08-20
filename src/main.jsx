/* =====================================================
   PUNTO DE ENTRADA DE LA APLICACIÓN
   - Monta el componente raíz <App /> dentro del
     elemento HTML con id="root" (definido en index.html)
   - StrictMode activa advertencias adicionales
     de React en desarrollo
===================================================== */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";     // Componente principal con todas las rutas
import "./index.css";             // Estilos globales de la aplicación

// Busca el div#root en el DOM y renderiza la app dentro de él
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);