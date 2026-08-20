/* =====================================================
   TEMACONTEXT.JSX — CONTEXTO GLOBAL DE TEMA (CLARO / OSCURO)
   - Permite alternar entre 'oscuro' y 'claro'.
   - Persiste la preferencia en localStorage.
   - Aplica automáticamente 'data-theme' y la clase 'tema-claro'
     al elemento <html> y <body>.
===================================================== */

import { createContext, useContext, useState, useEffect } from "react";

const TemaContext = createContext();

export function TemaProvider({ children }) {
  // Inicializar tema con localStorage o 'oscuro' por defecto
  const [tema, setTema] = useState(() => {
    const guardado = localStorage.getItem("vertex_theme");
    return guardado === "claro" ? "claro" : "oscuro";
  });

  useEffect(() => {
    // Aplicar atributos y clases al elemento raíz
    const root = document.documentElement;
    const body = document.body;

    root.setAttribute("data-theme", tema);
    body.setAttribute("data-theme", tema);

    if (tema === "claro") {
      root.classList.add("tema-claro");
      root.classList.remove("tema-oscuro");
      body.classList.add("tema-claro");
      body.classList.remove("tema-oscuro");
    } else {
      root.classList.add("tema-oscuro");
      root.classList.remove("tema-claro");
      body.classList.add("tema-oscuro");
      body.classList.remove("tema-claro");
    }

    localStorage.setItem("vertex_theme", tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((prev) => (prev === "oscuro" ? "claro" : "oscuro"));
  };

  const esOscuro = tema === "oscuro";
  const esClaro = tema === "claro";

  return (
    <TemaContext.Provider value={{ tema, setTema, alternarTema, esOscuro, esClaro }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  const context = useContext(TemaContext);
  if (!context) {
    throw new Error("useTema debe ser utilizado dentro de un TemaProvider");
  }
  return context;
}
