import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTES
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MotoCarousel from "./components/MotoCarousel";
import NewsCarousel from "./components/NewsCarousel";
import QuickActions from "./components/QuickActions";
import QuickActionsEncuentranos from "./components/QuickActionsEncuentranos";
import Footer from "./components/Footer";

// PÁGINAS
import Motos from "./pages/Motos";
import AgendarPrueba from "./pages/AgendarPrueba";

import Blog from "./pages/Blog";

import Login from "./pages/Login";
import Registro from "./pages/Registro";

import "./App.css";


/* =====================================================
   PÁGINA PRINCIPAL
===================================================== */

function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* =========================
            HERO
        ========================= */}

        <Hero />


        {/* =========================
            CARRUSEL DE MOTOS
        ========================= */}

        <MotoCarousel />


        {/* =========================
            NOTICIAS
        ========================= */}

        <NewsCarousel />


        {/* =========================
            ENLACES RÁPIDOS
        ========================= */}

        <section className="quick-links quick-links--double">

          <div className="quick-links-grid">

            <QuickActions />

            <QuickActionsEncuentranos />

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}


/* =====================================================
   APP
===================================================== */

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Routes>

          {/* =================================================
              INICIO
          ================================================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =================================================
              MOTOS
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
              AGENDAR PRUEBA
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
              INICIAR SESIÓN
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
              CREAR CUENTA
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


          {/* =========================
              PÁGINA BLOG
          ========================= */}

          <Route
            path="/blog"
            element={<Blog />}
          />


          {/* =================================================
              PÁGINA NO ENCONTRADA
          ================================================= */}

          <Route
            path="*"
            element={
              <>
                <Navbar />

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