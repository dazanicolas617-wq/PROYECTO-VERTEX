import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MotoCarousel from "./components/MotoCarousel";
import NewsCarousel from "./components/NewsCarousel";
import QuickActions from "./components/QuickActions";
import QuickActionsEncuentranos from "./components/QuickActionsEncuentranos";
import Footer from "./components/Footer";

import Motos from "./pages/Motos";
import AgendarPrueba from "./pages/AgendarPrueba";

import "./App.css";


function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}
        <Hero />

        {/* CARRUSEL DE MOTOS */}
        <MotoCarousel />

        {/* NOTICIAS */}
        <NewsCarousel />

        {/* ENLACES RÁPIDOS */}
        <section className="quick-links">
          <div className="quick-links-grid">
            <QuickActions />
            <QuickActionsEncuentranos />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Routes>

          {/* =========================
              PÁGINA PRINCIPAL
          ========================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =========================
              PÁGINA DE MOTOS
          ========================= */}

          <Route
            path="/motos"
            element={
              <>
                <Navbar />

                <Motos />

                <QuickActions />

                <Footer />
              </>
            }
          />


          {/* =========================
              PÁGINA AGENDAR PRUEBA
          ========================= */}

          <Route
            path="/agendar-prueba"
            element={
              <>
                <Navbar />

                <AgendarPrueba />

                <QuickActions />

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