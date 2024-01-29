
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CodereChat, Facebook, Instagram, Twitter, Youtube, Phone, Whatsapp } from '../icons';
import React from "react";
// Codere Footer \\
function Footer() {
  const model = {
    sobre: [
      {
        name: "Juego Responsable",
        url: "https://condiciones.apuestas.codere.es/Panama/juego_responsable.html",
        rel: "nofollow",
      },
      {
        name: "Contrato",
        url: "https://m.codere.pa/csbgonline/condicionesgenerales/ContratoPanama.pdf",
        rel: "nofollow",
      },
      {
        name: "Reglas",
        url: "https://m.codere.pa/deportespanama/#/InformationPage?type=reglas",
        rel: "nofollow",
      },
      {
        name: "Política de Privacidad",
        url: "https://m.codere.pa/csbgonline/condicionesgenerales/politicaprivacidadPanama.pdf",
        rel: "nofollow",
        target: "_blank",
      },
      {
        url: "https://www.codere.pa/ayuda/politica-de-cookies",
        name: "Política de Cookies",
        rel: "nofollow",
      },
      {
        url: "https://www.codere-partners.com/es/",
        name: "Afiliados de Codere",
        rel: "nofollow",
        target: "_blank",
      },
    ],
    links: [
      {
        url: "https://www.codere.pa/resultados-y-estadisticas",
        name: "Resultados y Estadísticas",
        rel: "nofollow",
      },
      { url: "/casino", name: "Casino", spa: true },
      {
        url: "/casino/casino-en-vivo",
        name: "Casino En Vivo",
        spa: true,
      },
      { url: "/casino/ruleta", name: "Ruleta", spa: true },
      { url: "/casino/slots", name: "Slots", spa: true },
      {
        url: "/casino/blackjack",
        name: "Blackjack",
        spa: true,
      },
      {
        url: "/eventos-deportivos",
        name: "Eventos Deportivos",
        spa: true,
      },
      {
        url: "https://www.codere.pa/cuotas-deportivas",
        name: "Cuotas Deportivas",
      },
    ],
    deportes: [
      {
        url: "https://www.codere.pa/ayuda/deposito-online",
        name: "Info Depósitos y Cobros",
        rel: "nofollow",
      },
      {
        url: "https://www.codere.pa/ayuda/como-y-donde-apostar",
        name: "Cómo Apostar",
        rel: "nofollow",
      },
      {
        url: "https://m.codere.pa/deportespanama/#/CuotaTypePage",
        name: "Opciones de apuesta",
        rel: "nofollow",
      },
      {
        url: "https://m.codere.pa/deportespanama/#/HomePage",
        name: "Apuestas Deportivas",
        rel: "nofollow",
      },
      {
        url: "https://blog.codere.pa/",
        name: "Blog Codere",
        target: "_blank",
      },
    ],
    ayuda: [
      {
        url: "https://www.codere.pa/ayuda",
        name: "Ayuda Términos y Condiciones",
        rel: "nofollow",
      },
      {
        url: "https://m.codere.pa/deportespanama/#/LanguagePage",
        name: "Idioma",
        rel: "nofollow",
      },
      {
        url: "mailto:apuestas@codere.com",
        name: "Contacto: apuestas@codere.com",
        rel: "nofollow",
      },
      {
        url: "https://wa.me/50769314912",
        name: " + 507 6931 4912",
        icon: Whatsapp,
        rel: "nofollow",
      },
      {
        url: "tel:+5073772602",
        name: " + 507 377 2602",
        icon: Phone,
        rel: "nofollow",
      },
    ],
  };

  return (
    <div>
      <footer className="nb-footer">
        <div className="about">
          <LazyLoadImage
            className="mb-4"
            width={155}
            src="https://www.codere.pa/assets/footer/RealMadrid.png"
          />
          <div className="social-media">
            <ul className="list-inline">
              <li>
                <a
                  href="https://m.codere.pa/deportespanama/#/ContactPage"
                  rel="nofollow"
                >
                  <CodereChat/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/CoderePan" rel="nofollow">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/coderepan/" rel="nofollow">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/CoderePanama" rel="nofollow">
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCWSDewbh7GXcpfOzl-bisfQ"
                  rel="nofollow"
                >
                  <Youtube />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Container>
          <Row>
            <Col>
              <div className="footer-info-single">
                <span className="title">SOBRE NOSOTROS</span>
                <ul className="list-unstyled">
                  {model.sobre.map((li, k) => (
                    <li key={k}>
                      <NavLink href={li.url} target={li.target} rel={li.rel}>
                        {li.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer-info-single">
                <span className="title">LINKS DESTACADOS</span>
                <ul className="list-unstyled">
                  {model.links.map((li, k) => (
                    <li key={k}>
                      <NavLink
                        as={li.spa ? Link : NavLink}
                        to={li.url}
                        href={li.url}
                        target={li.target}
                        rel={li.rel}
                      >
                        {li.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer-info-single">
                <span className="title">DEPORTES</span>
                <ul className="list-unstyled">
                  {model.deportes.map((li, k) => (
                    <li key={k}>
                      <NavLink href={li.url} target={li.target} rel={li.rel}>
                        {li.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer-info-single">
                <span className="title">AYUDA</span>
                <ul className="list-unstyled">
                  {model.ayuda.map((li, k) => (
                    <li key={k}>
                      <NavLink href={li.url} target={li.target} rel={li.rel}>
                        {li.icon ? React.createElement (li.icon, { className: "ayudaIconsFooter" }) : null}{" "}
                        {li.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>

        <hr className="mb-5" />

        <div className="row juegas-banners">
          <div className="col">
            <img
              src="https://www.codere.pa/_catalogs/masterpage/codere/react-splash/assets/repPan.png"
              alt="Gobierno República de Panamá"
            />

            <a href="mailto:jcj-quejas@mef.gob.pa" rel="nofollow">
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
              src="https://www.codere.pa/assets/footer/aenor-logo.png"
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
