import { useState } from "react";
import "./MotoCotizacion.css";

function MotoCotizacion({ moto, onClose }) {

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [ingresos, setIngresos] = useState("");
  const [cuotaInicial, setCuotaInicial] = useState("");
  const [plazo, setPlazo] = useState("");

  const [mostrarExito, setMostrarExito] = useState(false);


  /* =========================
     FORMATO DE DINERO
  ========================= */

  const formatoDinero = (valor) => {

    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }).format(valor);

  };


  /* =========================
     PRECIO
  ========================= */

  const precioMoto =
    Number(
      moto.precio
        .replace(/\$/g, "")
        .replace(/\./g, "")
        .replace(/ COP/g, "")
    ) || 0;


  /* =========================
     FINANCIACIÓN
  ========================= */

  const inicial =
    Number(cuotaInicial) || 0;

  const financiado =
    Math.max(
      precioMoto - inicial,
      0
    );


  let cuota = 0;

  if (
    plazo &&
    Number(plazo) > 0 &&
    financiado > 0
  ) {

    const tasaMensual = 0.015;

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
     NOMBRE
  ========================= */

  const manejarNombre = (e) => {

    const valor =
      e.target.value.replace(
        /[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g,
        ""
      );

    setNombre(valor);

  };


  /* =========================
     TELÉFONO
  ========================= */

  const manejarTelefono = (e) => {

    let valor =
      e.target.value;

    if (!valor.startsWith("+")) {

      valor =
        "+" +
        valor.replace(/\+/g, "");

    }

    valor =
      "+" +
      valor
        .substring(1)
        .replace(/\D/g, "");

    valor =
      valor.substring(0, 16);

    setTelefono(valor);

  };


  /* =========================
     CUOTA INICIAL
  ========================= */

  const manejarInicial = (e) => {

    let valor =
      Number(e.target.value) || 0;

    if (valor > precioMoto) {

      valor = precioMoto;

    }

    setCuotaInicial(
      valor || ""
    );

  };


  /* =========================
     ENVIAR
  ========================= */

  const manejarSubmit = (e) => {

    e.preventDefault();


    /* NOMBRE */

    if (
      !/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/
        .test(nombre.trim())
    ) {

      alert(
        "El nombre solo puede contener letras y espacios."
      );

      return;

    }


    /* TELÉFONO */

    if (
      !/^\+[0-9]{7,15}$/
        .test(telefono)
    ) {

      alert(
        "El teléfono debe comenzar con + y contener únicamente números."
      );

      return;

    }


    /* CORREO */

    if (!correo) {

      alert(
        "Introduce un correo electrónico válido."
      );

      return;

    }


    /* INGRESOS */

    if (
      !ingresos ||
      Number(ingresos) < 0
    ) {

      alert(
        "Introduce tus ingresos mensuales."
      );

      return;

    }


    /* PLAZO */

    if (!plazo) {

      alert(
        "Selecciona un plazo de financiación."
      );

      return;

    }


    /* =========================
       MOSTRAR ÉXITO
    ========================= */

    setMostrarExito(true);

  };


  /* =========================
     CERRAR ÉXITO
  ========================= */

  const cerrarExito = () => {

    setMostrarExito(false);

    onClose();

  };


  return (

    <div className="cotizacion-modal">

      {/* FONDO */}

      <div
        className="cotizacion-background"
        onClick={onClose}
      ></div>


      {/* CONTENIDO */}

      <div className="cotizacion-container">

        {/* CERRAR */}

        <button
          className="cotizacion-close"
          onClick={onClose}
        >
          ×
        </button>


        {!mostrarExito ? (

          <>

            {/* TÍTULO */}

            <div className="cotizacion-header">

              <span>COTIZACIÓN</span>

              <h2>
                {moto.nombre}
              </h2>

              <p>
                Completa tus datos para
                solicitar una cotización.
              </p>

            </div>


            {/* PRECIO */}

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


            {/* FORMULARIO */}

            <form
              className="cotizacion-form"
              onSubmit={manejarSubmit}
            >

              <div className="cotizacion-row">

                <div className="campo">

                  <label>
                    Nombre completo
                  </label>

                  <input
                    type="text"
                    value={nombre}
                    onChange={manejarNombre}
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
                    onChange={manejarTelefono}
                    placeholder="+573001234567"
                    required
                  />

                </div>

              </div>


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

                  <input
                    type="number"
                    min="0"
                    max={precioMoto}
                    value={cuotaInicial}
                    onChange={manejarInicial}
                    placeholder="$ 0"
                  />

                </div>

              </div>


              {/* PLAZO */}

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


              {/* RESULTADO */}

              <div className="cotizacion-resumen">

                <div>

                  <span>
                    VALOR MOTO
                  </span>

                  <strong>
                    {formatoDinero(precioMoto)}
                  </strong>

                </div>


                <div>

                  <span>
                    CUOTA INICIAL
                  </span>

                  <strong>
                    {formatoDinero(inicial)}
                  </strong>

                </div>


                <div>

                  <span>
                    VALOR FINANCIADO
                  </span>

                  <strong>
                    {formatoDinero(financiado)}
                  </strong>

                </div>


                <div>

                  <span>
                    CUOTA APROXIMADA
                  </span>

                  <strong className="cuota-destacada">

                    {formatoDinero(cuota)}

                  </strong>

                </div>

              </div>


              {/* BOTÓN */}

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
             ÉXITO
          ========================= */

          <div className="cotizacion-exito">

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

  );

}

export default MotoCotizacion;