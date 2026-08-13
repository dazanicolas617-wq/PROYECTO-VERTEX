import "./MotoCard.css"; 
 
function MotoCard({ moto, onVerMas, onCotizar }) { 
  return ( 
    <article className="moto-card"> 
 
      <div className="moto-card-image">
        <img 
          src={moto.imagen} 
          alt={moto.nombre} 
        /> 
 
        <div className="moto-card-overlay">
          <h3>{moto.nombre}</h3>
        </div>
      </div>
 
      <div className="moto-card-info">
 
        <div className="moto-price">
          <span>Precio desde</span>
          <strong>{moto.precio}</strong>
        </div>
 
        <div className="moto-buttons">
 
          <button 
            className="btn-ver-mas"
            onClick={() => onVerMas(moto)}
          >
            VER MÁS
          </button>
 
          <button 
            className="btn-cotizacion"
            onClick={() => onCotizar(moto)}
          >
            COTIZACIÓN
          </button>
 
        </div>
 
      </div>
 
    </article>
  ); 
} 
 
export default MotoCard;