import "./Footer.css";


function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">


        {/* COLUMNA 1 */}

        <div className="footer-column">

          <h3>
            MOTOCICLETAS
          </h3>

          <a href="#">
            Doble Propósito
          </a>

          <a href="#">
            Enduro
          </a>

          <a href="#">
            Clásica
          </a>

        </div>


        {/* COLUMNA 2 */}

        <div className="footer-column">

          <h3>
            NAVEGACIÓN
          </h3>

          <a href="#inicio">
            Inicio
          </a>

          <a href="#motos">
            Motos
          </a>

          <a href="#encuentranos">
            Encuéntranos
          </a>

          <a href="#noticias">
            Blog
          </a>

        </div>


        {/* COLUMNA 3 */}

        <div className="footer-column">

          <h3>
            CONTACTO
          </h3>

          <a href="#">
            Contáctanos
          </a>

          <a href="#">
            Puntos De Venta
          </a>

          <a href="#agendar">
            Prueba una
          </a>

        </div>


        {/* COLUMNA 4 */}

        <div className="footer-column">

          <h3>
            NUESTRO MUNDO
          </h3>

          <a href="#">
            Historia
          </a>

          <a href="#">
            Comunidad
          </a>

        </div>

      </div>


      {/* REDES */}

      <div className="footer-social">

        <p>
          Síguenos en nuestras redes sociales
        </p>

        <div className="social-icons">

          <a href="#">
            WhatsApp
          </a>

          <a href="#">
            Facebook
          </a>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            YouTube
          </a>

        </div>

      </div>


      {/* PARTE INFERIOR */}

      <div className="footer-bottom">

        <div>

          <a href="#">
            Políticas de privacidad
          </a>

          <a href="#">
            Términos y condiciones
          </a>

        </div>

        <p>
          ©2026. Vertex Motors. Las imágenes aquí mostradas
          pueden diferir del producto real
        </p>

      </div>

    </footer>

  );
}


export default Footer;