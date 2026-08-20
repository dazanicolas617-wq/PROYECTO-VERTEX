/* =====================================================
   SCROLLTOTOP.JSX
   Restaura automáticamente la posición del scroll al inicio (0, 0)
   de forma inmediata al cambiar de ruta, evitando saltos
   bruscos o retrasos visuales.
===================================================== */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Restablece la vista arriba de manera instantánea y suave
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}
