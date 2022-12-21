import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faComments,
  faHeadset,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// Codere Footer \\
function Footer() {
  return (
    <div>
      {/* <hr /> */}
      <footer className="nb-footer">
        <div className="about">
          <div className="social-media">
            <ul className="list-inline">
              <li>
                <a
                  href="https://m.codere.pa/deportespanama/#/ContactPage"
                  title=""
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faHeadset} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/CoderePan"
                  title=""
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/coderepan/"
                  title=""
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/CoderePanama"
                  title=""
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCWSDewbh7GXcpfOzl-bisfQ"
                  title=""
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer-info-single">
                <span className="title">SOBRE NOSOTROS</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://condiciones.apuestas.codere.es/Panama/juego_responsable.html"
                      title=""
                      rel="nofollow"
                    >
                      Juego Responsable
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.codere.pa/csbgonline/condicionesgenerales/ContratoPanama.pdf"
                      title=""
                      rel="nofollow"
                    >
                      Contrato
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.codere.pa/deportespanama/#/InformationPage?type=reglas"
                      title=""
                      rel="nofollow"
                    >
                      Reglas
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.codere.pa/csbgonline/condicionesgenerales/politicaprivacidadPanama.pdf"
                      title=""
                      target={"_blank"}
                      rel="nofollow"
                    >
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.pa/Paginas/Pol%C3%ADtica-de-cookies.aspx"
                      title=""
                      rel="nofollow"
                    >
                      Política de Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-info-single">
                <span className="title">LINKS DESTACADOS</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.codere.pa/resultados-y-estadisticas"
                      title=""
                      rel="nofollow"
                    >
                      Resultados y Estadísticas
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.pa/casino"
                      title=""
                      rel="nofollow"
                    >
                      Casino
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.pa/cuotas-deportivas"
                      title=""
                      rel="nofollow"
                    >
                      Cuotas Deportivas
                    </a>
                    <ul style={{ color: "#fff", listStyle: "initial" }}>
                      <li>
                        <a href="https://www.codere.pa/cuotas-deportivas/apuestas-nfl-futbol-americano">
                          NFL
                        </a>
                      </li>
                      <li>
                        <a href="https://www.codere.pa/cuotas-deportivas/apuestas-beisbol-grandes-ligas">
                          Beisbol
                        </a>
                      </li>
                      <li>
                        <a href="https://www.codere.pa/cuotas-deportivas/apuestas-futbol">
                          Futbol
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-info-single">
                <span className="title">DEPORTES</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.codere.pa/dep%C3%B3sitos/dep%C3%B3sito-online"
                      title=""
                    >
                      Info Depósitos y Cobros
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.pa/apuestas/c%C3%B3mo-y-d%C3%B3nde-apostar"
                      title=""
                    >
                      Cómo Apostar
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.codere.pa/deportespanama/#/CuotaTypePage"
                      title=""
                      rel="nofollow"
                    >
                      Opciones de apuesta
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.codere.pa/deportespanama/#/CheckTicketPage"
                      title=""
                      rel="nofollow"
                    >
                      Consulta tu ticket
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-info-single">
                <span className="title">AYUDA</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.codere.pa/ayuda" title="">
                      Ayuda Términos y Condiciones
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.codere.pa/deportespanama/#/LanguagePage"
                      title=""
                      rel="nofollow"
                    >
                      Idioma
                    </a>
                  </li>
                  <li>
                    <a href="mailto:apuestas@codere.com" title="">
                      Contacto: apuestas@codere.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/50769314912"
                      title=""
                      rel="nofollow"
                      target="_blank"
                      className="whatsapp"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                      {"  "} +507 6931 4912
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+5073772602"
                      title=""
                      rel="nofollow"
                      className="whatsapp"
                    >
                      <FontAwesomeIcon icon={faPhone} />
                      {"  "} + 507 377 2602
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ marginBottom: "2vw" }} />

        <div className="row juegas-banners">
          <div className="col">
            <img
              src="https://www.codere.pa/_catalogs/masterpage/codere/react-splash/assets/repPan.png"
              alt="Gobierno República de Panamá"
            />

            <a href="mailto:jcj-quejas@mef.gob.pa">
              <img
                src="https://www.codere.pa/_catalogs/masterpage/codere/react-splash/assets/junta.png"
                alt="JugarSeguro"
              />
            </a>

            <img
              src="https://www.codere.pa/_catalogs/masterpage/codere/react-splash/assets/jugarRes.png"
              alt="Juega Responsablemente"
            />
          </div>
        </div>

        <div id="legals" style={{ float: "right", marginBottom: ".2vw" }}>
          S.A., con domicilio en Panamá, Ciudad de Panamá, Vía Israel y Calle 76
        </div>
        <div id="legals" style={{ marginBottom: "2vw" }}>
          <a
            href="https://m.codere.pa/csbgonline/condicionesgenerales/politicaseguridadinformacion.pdf"
            rel="nofollow"
          >
            <img
              src="https://m.apuestas.codere.es/deportes/assets/img/logoaenoriso27001.png"
              alt="AENOR Seguridad Información"
            />
          </a>
          Apuestas, opera en Panamá a través de la sociedad Alta Cordillera,
          S.A., con domicilio en Panamá, Ciudad de Panamá, Vía Israel y Calle 76
          Este San Francisco, Hotel Aloft (Lobby), Oficinas Administrativas:
          377-4200, Administrador / Operador de la Licencia de Juegos Suerte y
          Azar a través de Internet, autorizada por la Junta de Control de
          Juegos conforme Contrato No. 2021-006 de 26 de mayo de 2021.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
