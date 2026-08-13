import "./MotoDetails.css";

function MotoDetails({ moto, onClose }) {

  if (!moto) {
    return null;
  }

  return (
    <div className="moto-modal">

      {/* FONDO OSCURO */}
      <div
        className="moto-modal-background"
        onClick={onClose}
      ></div>


      {/* CONTENEDOR */}
      <div className="moto-details">

        {/* BOTÓN CERRAR */}
        <button
          className="moto-close"
          onClick={onClose}
        >
          ×
        </button>


        {/* TITULO */}
        <h2>{moto.nombre}</h2>


        {/* IMAGEN */}
        <div className="moto-details-image">

          <img
            src={moto.imagen}
            alt={moto.nombre}
          />

        </div>


        {/* CARACTERÍSTICAS */}
        <div className="moto-details-grid">

          <div className="detail-box">
            <strong>CATEGORÍA:</strong>
            <span>{moto.categoria}</span>
          </div>

          <div className="detail-box">
            <strong>CILINDRADA:</strong>
            <span>{moto.cilindrada}</span>
          </div>

        </div>


        {/* DESCRIPCIÓN */}
        <p className="moto-description">
          {moto.descripcion}
        </p>


        {/* PRECIO */}
        <div className="modal-price">

          <span>Precio desde</span>

          <strong>
            {moto.precio}
          </strong>

        </div>


        {/* BOTÓN */}
        <button className="modal-test-button">
          📅 Agendar prueba de manejo
        </button>

      </div>

    </div>
  );
}

export default MotoDetails;
