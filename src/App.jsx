/* =====================================================
   APP.JSX — COMPONENTE RAÍZ CON TODAS LAS RUTAS
   Configura el enrutador de React y define qué
   componente/página se muestra según la URL actual.
===================================================== */

import { BrowserRouter, Routes, Route } from "react-router-dom";

// ── COMPONENTES REUTILIZABLES ──────────────────────────
import Navbar from "./components/Navbar";                     // Barra de navegación superior
import Hero from "./components/Hero";                         // Sección hero de bienvenida
import MotoCarousel from "./components/MotoCarousel";         // Carrusel de motos en la portada
import NewsCarousel from "./components/NewsCarousel";         // Carrusel de noticias
import QuickActions from "./components/QuickActions";         // Tarjeta de acceso rápido (Agendar prueba)
import QuickActionsEncuentranos from "./components/QuickActionsEncuentranos"; // Tarjeta "Encuéntranos"
import Footer from "./components/Footer";                     // Pie de página

// ── PÁGINAS ────────────────────────────────────────────
import Motos from "./pages/Motos";                           // Catálogo de motocicletas
import AgendarPrueba from "./pages/AgendarPrueba";           // Página para agendar prueba de manejo
import Blog from "./pages/Blog";                             // Blog de noticias
import Login from "./pages/Login";                           // Inicio de sesión
import Registro from "./pages/Registro";                     // Crear cuenta nueva
import RecuperarContrasena from "./pages/RecuperarContrasena"; // Recuperar contraseña olvidada
import Dashboard from "./pages/Dashboard";                   // Panel de administración

import "./App.css";


/* =====================================================
   PÁGINA PRINCIPAL (HOME)
   Agrupa todos los componentes que forman la portada:
   Navbar → Hero → Carrusel Motos → Noticias → Acciones → Footer
===================================================== */

function Home() {
  return (
    <>
      {/* Barra de navegación superior */}
      <Navbar />

      <main>

        {/* =========================
            HERO — Sección de bienvenida con imagen de fondo
        ========================= */}

        <Hero />


        {/* =========================
            CARRUSEL DE MOTOS — Muestra modelos destacados con flechas de navegación
        ========================= */}

        <MotoCarousel />


        {/* =========================
            NOTICIAS — Carrusel paginado con las últimas novedades
        ========================= */}

        <NewsCarousel />


        {/* =========================
            ENLACES RÁPIDOS — Dos tarjetas de acceso rápido (Agendar prueba / Encuéntranos)
        ========================= */}

        {/* Contenedor que alinea las dos tarjetas en fila */}
        <section className="quick-links quick-links--double">

          <div className="quick-links-grid">

            {/* Tarjeta: Agendar prueba de manejo */}
            <QuickActions />

            {/* Tarjeta: Encuéntranos / Puntos de venta */}
            <QuickActionsEncuentranos />

          </div>

        </section>

      </main>

      {/* Pie de página con links, redes y copyright */}
      <Footer />
    </>
  );
}


/* =====================================================
   APP — CONFIGURACIÓN PRINCIPAL DE RUTAS
   BrowserRouter habilita la navegación por URL.
   Cada <Route> define qué componente renderizar
   cuando el usuario visita esa ruta.
===================================================== */

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Routes>

          {/* =================================================
              ADMIN / DASHBOARD — Panel de administración
              Accesible desde /dashboard o /admin
          ================================================= */}

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/admin"
            element={<Dashboard />}
          />


          {/* =================================================
              INICIO — Página principal con hero y carrusel
          ================================================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =================================================
              MOTOS — Catálogo de motocicletas con filtros
          ================================================= */}

          <Route
            path="/motos"
            element={
              <>
                <Navbar />

                <main>
                  <Motos />
                </main>

                <Footer />
              </>
            }
          />


          {/* =================================================
              AGENDAR PRUEBA — Formulario para reservar prueba de manejo
          ================================================= */}

          <Route
            path="/agendar-prueba"
            element={
              <>
                <Navbar />

                <main>
                  <AgendarPrueba />
                </main>

                <Footer />
              </>
            }
          />


          {/* =================================================
              INICIAR SESIÓN — Formulario de login con validaciones
          ================================================= */}

          <Route
            path="/login"
            element={
              <>
                <Navbar />

                <Login />

                <Footer />
              </>
            }
          />


          {/* =================================================
              CREAR CUENTA — Formulario de registro con requisitos de contraseña
          ================================================= */}

          <Route
            path="/registro"
            element={
              <>
                <Navbar />

                <Registro />

                <Footer />
              </>
            }
          />


          {/* =================================================
              RECUPERAR CONTRASEÑA — Envío por correo o teléfono
          ================================================= */}

          <Route
            path="/recuperar-contrasena"
            element={
              <>
                <Navbar />

                <RecuperarContrasena />

                <Footer />
              </>
            }
          />


          {/* =========================
              BLOG — Página de noticias y artículos
          ========================= */}

          <Route
            path="/blog"
            element={<Blog />}
          />


          {/* =================================================
              PÁGINA NO ENCONTRADA (404) — Ruta comodín "*"
              Se activa cuando ninguna otra ruta coincide
          ================================================= */}

          <Route
            path="*"
            element={
              <>
                <Navbar />

                {/* Contenido centrado con fondo negro */}
                <main
                  style={{
                    minHeight: "70vh",
                    background: "#000",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h1>404</h1>

                  <p>
                    Página no encontrada
                  </p>
                </main>

                <Footer />
              </>
            }

          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;