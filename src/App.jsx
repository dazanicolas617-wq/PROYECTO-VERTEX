import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MotoCarousel from "./components/MotoCarousel";
import NewsCarousel from "./components/NewsCarousel";
import QuickActions from "./components/QuickActions";
import Footer from "./components/Footer";

import Motos from "./pages/Motos";

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
        <QuickActions />

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