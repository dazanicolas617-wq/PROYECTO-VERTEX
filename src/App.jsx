import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";

// ── COMPONENTES REUTILIZABLES ──────────────────────────
import BarraNavegacion from "./components/BarraNavegacion";              // Barra de navegación superior
import Portada from "./components/Portada";                              // Sección de bienvenida
import CarruselMotos from "./components/CarruselMotos";                  // Carrusel de motos en la portada
import CarruselNoticias from "./components/CarruselNoticias";            // Carrusel de noticias
import AccionesRapidas from "./components/AccionesRapidas";              // Tarjeta de acceso rápido (Agendar prueba)
import AccionesRapidasEncuentranos from "./components/AccionesRapidasEncuentranos"; // Tarjeta "Encuéntranos"
import PieDePagina from "./components/PieDePagina";                     // Pie de página
import ScrollToTop from "./components/ScrollToTop";                     // Restaurador de scroll suave

// ── PÁGINAS ────────────────────────────────────────────
import Motos from "./pages/Motos";                           // Catálogo de motocicletas
import AgendarPrueba from "./pages/AgendarPrueba";           // Página para agendar prueba de manejo
import Blog from "./pages/Blog";                             // Blog de noticias
import Login from "./pages/Login";                           // Inicio de sesión
import Registro from "./pages/Registro";                     // Crear cuenta nueva
import RecuperarContrasena from "./pages/RecuperarContrasena"; // Recuperar contraseña olvidada
import MiCuenta from "./pages/MiCuenta";                       // Panel de cliente / Mi cuenta
import Dashboard from "./pages/Dashboard";                   // Panel de administración
import Encuentranos from "./pages/encuentranos";

import "./App.css";

/* =====================================================
   SECCIÓN DE ACCIONES RÁPIDAS INTELIGENTE
   - Oculta en: Login, Registro, Recuperar contraseña y Dashboard.
   - En /encuentranos: Solo muestra "Agendar prueba".
   - En /agendar-prueba: Solo muestra "Encuéntranos".
   - En el resto de páginas (Inicio, Motos, Blog, Mi Cuenta): Muestra ambas.
===================================================== */
function SeccionAccionesGlobales() {
  const location = useLocation();
  const ruta = location.pathname.toLowerCase();

  // Ocultar completamente en pantallas de autenticación y panel admin
  const ocultarEnAuth =
    ruta.includes("login") ||
    ruta.includes("registro") ||
    ruta.includes("recuperar") ||
    ruta.includes("dashboard") ||
    ruta.includes("admin");

  if (ocultarEnAuth) {
    return null;
  }

  const esEncuentranos = ruta.includes("encuentranos");
  const esAgendar = ruta.includes("agendar-prueba");

  return (
    <section className={`quick-links ${esEncuentranos || esAgendar ? "quick-links--single" : "quick-links--double"}`}>
      <div className="quick-links-grid">
        {!esAgendar && <AccionesRapidas />}
        {!esEncuentranos && <AccionesRapidasEncuentranos />}
      </div>
    </section>
  );
}

/* =====================================================
   LAYOUT PÚBLICO PERSISTENTE
   Mantiene la Barra de Navegación, los botones de acción rápida
   y el Pie de Página montados permanentemente.
===================================================== */
function LayoutPublico() {
  return (
    <>
      <BarraNavegacion />
      <div className="contenedor-pagina-publica">
        <Outlet />
      </div>
      <SeccionAccionesGlobales />
      <PieDePagina />
    </>
  );
}

/* =====================================================
   PÁGINA PRINCIPAL (HOME)
===================================================== */
function Inicio() {
  return (
    <main>
      <Portada />
      <CarruselMotos />
      <CarruselNoticias />
    </main>
  );
}

/* =====================================================
   PÁGINA 404
===================================================== */
function PaginaNoEncontrada() {
  return (
    <main
      style={{
        minHeight: "70vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#3b82f6" }}>404</h1>
      <p style={{ fontSize: "1.2rem", color: "#9ca3af" }}>Página no encontrada</p>
    </main>
  );
}

/* =====================================================
   APP — CONFIGURACIÓN PRINCIPAL DE RUTAS
===================================================== */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Routes>
          {/* =========================================
              PANEL ADMINISTRATIVO (Sin Layout Público)
          ========================================= */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Dashboard />} />

          {/* =========================================
              RUTAS PÚBLICAS (Con Layout Persistente)
          ========================================= */}
          <Route element={<LayoutPublico />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/motos" element={<Motos />} />
            <Route path="/agendar-prueba" element={<AgendarPrueba />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/encuentranos" element={<Encuentranos />} />
            <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
            <Route path="/mi-cuenta" element={<MiCuenta />} />
            <Route path="/cuenta" element={<MiCuenta />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<PaginaNoEncontrada />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
