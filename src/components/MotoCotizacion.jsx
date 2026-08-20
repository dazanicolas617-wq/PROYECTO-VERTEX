/* =====================================================
   MOTOCOTIZACION.JSX — MODAL DE COTIZACIÓN
   Se abre al hacer clic en "COTIZACIÓN" en una MotoCard.
   Permite al usuario ingresar sus datos personales y
   financieros para solicitar una cotización de crédito.

   Funcionalidades:
   - Cálculo automático de cuota mensual con interés
   - Validación de campos en tiempo real
   - Pantalla de éxito tras enviar el formulario

   Props recibidas:
   - moto    : Objeto con los datos de la moto a cotizar
   - onClose : Función para cerrar el modal
===================================================== */

import { useState } from "react";
import "./MotoCotizacion.css";

function MotoCotizacion({ moto, onClose }) {

  /* ── ESTADOS DEL FORMULARIO ──────────────────────────────
     Cada campo del formulario tiene su propio estado.
     Se inician vacíos y se actualizan con cada cambio.
  ──────────────────────────────────────────────────────────── */
  const [nombre, setNombre] = useState("");           // Nombre completo del cliente
  const [telefono, setTelefono] = useState("");       // Teléfono con código de país
  const [correo, setCorreo] = useState("");           // Correo electrónico
  const [ingresos, setIngresos] = useState("");       // Ingresos mensuales (número)
  const [cuotaInicial, setCuotaInicial] = useState(""); // Cuota inicial del crédito
  const [plazo, setPlazo] = useState("");             // Plazo en meses (12/24/36/48/60)

  /* Controla si se muestra la pantalla de éxito */
  const [mostrarExito, setMostrarExito] = useState(false);


  /* =========================
     FORMATO DE DINERO
     Convierte un número a formato moneda colombiana.
     Ejemplo: 18990000 → "$ 18.990.000"
  ========================= */

  const formatoDinero = (valor) => {

    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0   // Sin decimales
    }).format(valor);

  };


  /* =========================
     PRECIO BASE DE LA MOTO
     Extrae el número del string de precio que viene formateado
     (ej: "$18.990.000 COP") y lo convierte a número entero.
  ========================= */

  const precioMoto =
    Number(
      moto.precio
        .replace(/\$/g, "")       // Elimina el símbolo de peso
        .replace(/\./g, "")       // Elimina los puntos de miles
        .replace(/ COP/g, "")     // Elimina la etiqueta de moneda
    ) || 0;


  /* =========================
     CÁLCULO DE FINANCIACIÓN
     - inicial    : Cuota inicial ingresada por el usuario
     - financiado : Lo que queda por financiar (precio - inicial)
  ========================= */

  const inicial =
    Number(cuotaInicial) || 0;

  const financiado =
    Math.max(
      precioMoto - inicial,
      0                          // Garantiza que no sea negativo
    );


  /* ── CÁLCULO DE CUOTA MENSUAL ─────────────────────────
     Fórmula de amortización francesa (cuota fija):
       cuota = P × (r × (1+r)^n) / ((1+r)^n - 1)
     Donde:
       P = monto financiado
       r = tasa mensual (1.5%)
       n = número de meses (plazo)
  ──────────────────────────────────────────────────────── */

  let cuota = 0;

  if (
    plazo &&
    Number(plazo) > 0 &&
    financiado > 0
  ) {

    const tasaMensual = 0.015;          // Tasa de interés mensual del 1.5%

    const meses = Number(plazo);

    const potencia =
      Math.pow(
        1 + tasaMensual,
        meses
      );

    cuota =
      financiado *
      (
        tasaMensual *
        potencia
      ) /
      (
        potencia - 1
      );

  }


  /* =========================
     VALIDACIÓN DE NOMBRE
     Solo permite letras (incluye tildes, ñ y ü) y espacios.
     Filtra cualquier carácter no permitido en tiempo real.
  ========================= */

  const manejarNombre = (e) => {

    const valor =
      e.target.value.replace(
        /[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g,
        ""                        // Elimina todo lo que no sea letra o espacio
      );

    setNombre(valor);

  };


  /* =========================
     VALIDACIÓN DE TELÉFONO
     Asegura que el número siempre empiece con "+"
     y solo contenga dígitos después del símbolo.
     Máximo 16 caracteres (+ código país + número).
  ========================= */

  const manejarTelefono = (e) => {

    let valor =
      e.target.value;

    /* Agrega "+" si el usuario no lo escribió */
    if (!valor.startsWith("+")) {

      valor =
        "+" +
        valor.replace(/\+/g, "");

    }

    /* Mantiene el "+" y elimina todo lo que no sea dígito después */
    valor =
      "+" +
      valor
        .substring(1)
        .replace(/\D/g, "");

    /* Limita la longitud total a 16 caracteres */
    valor =
      valor.substring(0, 16);

    setTelefono(valor);

  };


  /* =========================
     VALIDACIÓN DE CUOTA INICIAL
     No permite que la cuota sea mayor al precio de la moto.
     Si el usuario ingresa un valor mayor, lo recorta al máximo.
  ========================= */

  const manejarInicial = (e) => {

    let valor =
      Number(e.target.value) || 0;

    if (valor > precioMoto) {

      valor = precioMoto;         // Limita al precio total de la moto

    }

    setCuotaInicial(
      valor || ""
    );

  };


  /* =========================
     ENVIAR FORMULARIO
     Valida todos los campos antes de mostrar la pantalla de éxito.
     En una app real, aquí se haría la petición al servidor.
  ========================= */

  const manejarSubmit = (e) => {

    e.preventDefault();           // Evita que el formulario recargue la página


    /* ── VALIDAR NOMBRE ─────────────────── */
    if (
      !/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/
        .test(nombre.trim())
    ) {

      alert(
        "El nombre solo puede contener letras y espacios."
      );

      return;

    }


    /* ── VALIDAR TELÉFONO ───────────────── */
    if (
      !/^\+[0-9]{7,15}$/
        .test(telefono)
    ) {

      alert(
        "El teléfono debe comenzar con + y contener únicamente números."
      );

      return;

    }


    /* ── VALIDAR CORREO ─────────────────── */
    if (!correo) {

      alert(
        "Introduce un correo electrónico válido."
      );

      return;

    }


    /* ── VALIDAR INGRESOS ───────────────── */
    if (
      !ingresos ||
      Number(ingresos) < 0
    ) {

      alert(
        "Introduce tus ingresos mensuales."
      );

      return;

    }


    /* ── VALIDAR PLAZO ──────────────────── */
    if (!plazo) {

      alert(
        "Selecciona un plazo de financiación."
      );

      return;

    }


    /* =========================
       MOSTRAR PANTALLA DE ÉXITO
       Todos los campos son válidos: muestra confirmación
    ========================= */

    setMostrarExito(true);

  };


  /* =========================
     CERRAR PANTALLA DE ÉXITO
     Oculta el mensaje de confirmación y cierra el modal
  ========================= */

  const cerrarExito = () => {

    setMostrarExito(false);

    onClose();  // Cierra el modal completamente

  };


  return (

    /* Contenedor fijo a pantalla completa */
    <div className="cotizacion-modal">

      {/* ── FONDO OSCURO — clic cierra el modal */}
      <div
        className="cotizacion-background"
        onClick={onClose}
      ></div>


      {/* ── CAJA DEL MODAL ──────────────────────────────── */}
      <div className="cotizacion-container">

        {/* Botón × para cerrar */}
        <button
          className="cotizacion-close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="cotizacion-body">

          {/* ── CONDICIONAL: muestra formulario o pantalla de éxito ── */}
          {!mostrarExito ? (

            <>

              {/* ── ENCABEZADO ────────────────────────────── */}
              <div className="cotizacion-header">

                <span>COTIZACIÓN</span>

                {/* Nombre del modelo a cotizar */}
                <h2>
                  {moto.nombre}
                </h2>

                <p>
                  Completa tus datos para
                  solicitar una cotización.
                </p>

              </div>


              {/* ── DATOS DE LA MOTO ──────────────────────── */}
              <div className="cotizacion-moto">

                <div>

                  <span>
                    PRECIO DESDE
                  </span>

                  <strong>
                    {moto.precio}
                  </strong>

                </div>

                <div>

                  <span>
                    CILINDRADA
                  </span>

                  <strong>
                    {moto.cilindrada}
                  </strong>

                </div>

              </div>


              {/* ── FORMULARIO DE COTIZACIÓN ──────────────── */}
              <form
                className="cotizacion-form"
                onSubmit={manejarSubmit}
              >

                {/* Fila: Nombre + Teléfono */}
                <div className="cotizacion-row">

                  <div className="campo">

                    <label>
                      Nombre completo
                    </label>

                    <input
                      type="text"
                      value={nombre}
                      onChange={manejarNombre}      // Filtra caracteres no permitidos
                      placeholder="Tu nombre"
                      required
                    />

                  </div>


                  <div className="campo">

                    <label>
                      Teléfono
                    </label>

                    <input
                      type="tel"
                      value={telefono}
                      onChange={manejarTelefono}    // Fuerza formato +código+número
                      placeholder="+573001234567"
                      required
                    />

                  </div>

                </div>


                {/* Campo: Correo electrónico */}
                <div className="campo">

                  <label>
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    value={correo}
                    onChange={(e) =>
                      setCorreo(e.target.value)
                    }
                    placeholder="correo@ejemplo.com"
                    required
                  />

                </div>


                {/* Fila: Ingresos mensuales + Cuota inicial */}
                <div className="cotizacion-row">

                  <div className="campo">

                    <label>
                      Ingresos mensuales
                    </label>

                    <input
                      type="number"
                      min="0"
                      value={ingresos}
                      onChange={(e) =>
                        setIngresos(e.target.value)
                      }
                      placeholder="$ 0"
                      required
                    />

                  </div>


                  <div className="campo">

                    <label>
                      Cuota inicial
                    </label>

                    {/* El máximo permitido es el precio total de la moto */}
                    <input
                      type="number"
                      min="0"
                      max={precioMoto}
                      value={cuotaInicial}
                      onChange={manejarInicial}     // Limita al precio de la moto
                      placeholder="$ 0"
                    />

                  </div>

                </div>


                {/* ── SELECTOR DE PLAZO ─────────────────────
                    Opciones: 12, 24, 36, 48 o 60 meses
                ──────────────────────────────────────────── */}
                <div className="campo">

                  <label>
                    Plazo de financiación
                  </label>

                  <select
                    value={plazo}
                    onChange={(e) =>
                      setPlazo(e.target.value)
                    }
                    required
                  >

                    <option value="">
                      Selecciona un plazo
                    </option>

                    <option value="12">
                      12 meses
                    </option>

                    <option value="24">
                      24 meses
                    </option>

                    <option value="36">
                      36 meses
                    </option>

                    <option value="48">
                      48 meses
                    </option>

                    <option value="60">
                      60 meses
                    </option>

                  </select>

                </div>


                {/* ── RESUMEN FINANCIERO ────────────────────
                    Se actualiza en tiempo real según los
                    valores ingresados por el usuario.
                    La cuota se calcula con amortización francesa.
                ──────────────────────────────────────────── */}
                <div className="cotizacion-resumen">

                  {/* Valor total de la moto */}
                  <div>

                    <span>
                      VALOR MOTO
                    </span>

                    <strong>
                      {formatoDinero(precioMoto)}
                    </strong>

                  </div>


                  {/* Cuota inicial ingresada */}
                  <div>

                    <span>
                      CUOTA INICIAL
                    </span>

                    <strong>
                      {formatoDinero(inicial)}
                    </strong>

                  </div>


                  {/* Saldo financiado = precio - inicial */}
                  <div>

                    <span>
                      VALOR FINANCIADO
                    </span>

                    <strong>
                      {formatoDinero(financiado)}
                    </strong>

                  </div>


                  {/* Cuota mensual calculada con amortización francesa */}
                  <div>

                    <span>
                      CUOTA APROXIMADA
                    </span>

                    <strong className="cuota-destacada">

                      {formatoDinero(cuota)}

                    </strong>

                  </div>

                </div>


                {/* Botón de envío — dispara manejarSubmit */}
                <button
                  type="submit"
                  className="btn-enviar-cotizacion"
                >

                  SOLICITAR COTIZACIÓN

                </button>

              </form>

            </>

          ) : (

            /* =========================
               PANTALLA DE ÉXITO
               Se muestra tras enviar el formulario exitosamente
            ========================= */

            <div className="cotizacion-exito">

              {/* Ícono de confirmación (check) */}
              <div className="exito-icono">
                ✓
              </div>

              <span className="exito-label">
                COTIZACIÓN
              </span>

              <h2>
                ¡Cotización realizada!
              </h2>

              <p>
                Tu solicitud de cotización
                fue registrada correctamente.
              </p>


              {/* Resumen de los datos enviados */}
              <div className="exito-datos">

                <div>

                  <span>
                    MOTO
                  </span>

                  <strong>
                    {moto.nombre}
                  </strong>

                </div>


                <div>

                  <span>
                    CLIENTE
                  </span>

                  <strong>
                    {nombre}
                  </strong>

                </div>


                <div>

                  <span>
                    TELÉFONO
                  </span>

                  <strong>
                    {telefono}
                  </strong>

                </div>

              </div>


              {/* Botón para cerrar el modal de éxito */}
              <button
                className="btn-exito"
                onClick={cerrarExito}
              >

                ACEPTAR

              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default MotoCotizacion;