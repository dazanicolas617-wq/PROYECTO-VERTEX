import "./Hero.css";

import heroImage from "../assets/hero-motos.jpg";

function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.55),
          rgba(0, 0, 0, 0.75)
        ), url(${heroImage})`
      }}
    >

      <div className="hero-content">

        <h1>
          MOTOS VERTEX
          <br />
          COLOMBIA
        </h1>

        <p>
          Bienvenidos a la herencia que se remonta a 2014,
          Vertex Colombia se enorgullece de la excelencia
          de sus motores, con una amplia variedad de modelos
          de alta calidad, diseñados para satisfacer las
          necesidades de los clientes de todo el mundo.
        </p>

        <button className="hero-button">
          Contáctenos
        </button>

      </div>

    </section>
  );
}

export default Hero;