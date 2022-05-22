import "../componentes/css-general/style_h_f.css";
import logo from "./img-general/logo.png";

export default function Footer() {
  return (
    <footer id="footer" className="pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <img
            src={logo}
            className="mb-2"
            alt="logo"
            height="100 px"
            width="100 px"
          />
        </div>
        <div className="col-6 col-md">
          <h5>Contacto:</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="#">
                Teléfono: +34 902 55 01 51
              </a>
            </li>
            <li>
              <a className="text-muted" href="mailto:postgrado@uem.es">
                Correo Electrónico: postgrado@uem.es
              </a>
            </li>
            <li>
              <a
                className="text-muted"
                href="https://www.facebook.com/RealMadrid/"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="text-muted"
                href="https://www.instagram.com/realmadrid/?hl=es"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
