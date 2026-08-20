/* =====================================================
   BOTONTEMAFLOTANTE.JSX — BOTÓN FLOTANTE MODO CLARO / OSCURO
   - Ubicado fijamente en la esquina inferior derecha.
   - Alterna entre Sol y Luna con animación suave.
   - Muestra tooltip con la acción a realizar.
===================================================== */

import { Sun, Moon } from "lucide-react";
import { useTema } from "../context/TemaContext";
import "./BotonTemaFlotante.css";

export default function BotonTemaFlotante() {
  const { tema, alternarTema, esOscuro } = useTema();

  return (
    <div className="contenedor-boton-tema-flotante">
      <button
        type="button"
        className={`boton-tema-flotante ${esOscuro ? "modo-oscuro" : "modo-claro"}`}
        onClick={alternarTema}
        title={esOscuro ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
        aria-label={esOscuro ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
      >
        <div className="icono-tema-animado">
          {esOscuro ? (
            <Sun className="icono-sol" size={22} />
          ) : (
            <Moon className="icono-luna" size={22} />
          )}
        </div>
        <span className="tooltip-tema">
          {esOscuro ? "Modo Claro" : "Modo Oscuro"}
        </span>
      </button>
    </div>
  );
}
