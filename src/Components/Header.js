import {
  Button,
  Container,
  Nav,
  Navbar,
  Dropdown,
  Accordion,
  InputGroup,
} from "react-bootstrap";
import React, { useState } from "react";
import { elastic as Menu } from "react-burger-menu";

import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Arrowrightw, Arrowdown, Deportes, LocalesMenuIcon, Promociones, Ruletasenvivo, CasinoMenuIcon, Directo, ArrowdownBlack, Omnichannel } from '../icons';

function Header({ device }) {
  var regis = "https://m.codere.pa/deportespanama/#/RegistroPAPage";
  const acceder =
    "https://m.codere.pa/deportespanama/#/HomePage?openlogin=true";

  const URL = "https://dm.apuestas.codere.pa/LoginServicesESApi/login/web";
  const LOGO =
    new Date() >= new Date("2022-12-30T22:00:00Z")
      ? "https://www.codere.pa/_catalogs/masterpage/codere/img/SponsorsLogoCodere.png"
      : "https://www.codere.pa/_catalogs/masterpage/codere/img/christmassLogo.gif";

  // Hooks
  const [hamburger, setHamburger] = useState(false);
  const [onShow, setOnShow] = useState("");

  const menu = [
    {
      name: "Deportes",
      url: "https://m.codere.pa/deportespanama/#/HomePage",
      icon: Deportes,
    },
    {
      name: "En Vivo",
      url: "https://m.codere.pa/deportespanama/#/DirectosPage",
      icon: Directo,
    },
    {
      name: "Casino",
      url: "https://m.codere.pa/deportespanama/#/CasinoPage",
      icon: CasinoMenuIcon,
    },
    {
      name: "Casino En Vivo",
      url: "https://m.codere.pa/deportespanama/#/CasinoPage?filter=En%20Vivo",
      icon: Ruletasenvivo,
    },
    {
      name: "Promociones",
      url: "https://m.codere.pa/deportespanama/#/PromotionsPage",
      icon: Promociones,
    },
    {
      name: "Crown Casinos",
      url: "https://m.codere.pa/deportespanama/#/NearestLocalPage",
      icon: Omnichannel,
    },
  ];

  const seo_menu = [
    { name: "Casino", url: "/casino" },
    {
      name: "Casino en vivo",
      url: "/casino/casino-en-vivo",
    },
    { name: "Ruleta", url: "/casino/ruleta" },
    { name: "Slots", url: "/casino/slots" },
    { name: "BlackJack", url: "/casino/blackjack" },
    { name: "Eventos Deportivos", url: "/eventos-deportivos" },
    {
      name: "Cuotas Deportivas",
      url: "/cuotas-deportivas",
    },
  ];

  const hamburgerHandler = () => {
    hamburger ? setOnShow("") : setOnShow("open");
    setHamburger(!hamburger);
  };

  return (
    <Navbar className="header_nav stroke" variant="dark">
      {device ? (
        <div id="father">
          <div id="outer-container">
            <Menu
              id="elastic"
              left
              customCrossIcon={false}
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
              burgerButtonClassName={onShow}
              isOpen={hamburger}
              onOpen={hamburgerHandler}
              onClose={hamburgerHandler}
            >

              {menu.map((m, k) => (
                <Nav.Link key={k} rel="nofollow" href={m.url}>
                  <div className={'mobMenuSVGwrapper'}>
                    {(React.createElement (m.icon, { className: "mobileMenuIcon" }))}
                    {m.name}
                  </div>

                  <div className={'arrowright'}>
                    < Arrowrightw/>
                  </div>
                </Nav.Link>
              ))}

              <Accordion className="hamb-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Links Destacados</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {seo_menu.map((s, k) => (
                        <li key={k}>
                          <Nav.Link
                            onClick={hamburgerHandler}
                            as={Link}
                            to={s.url}
                          >
                            {s.name}
                            <Arrowrightw/>
                          </Nav.Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Menu>
            <main id="page-wrap"></main>
          </div>
          <Nav.Link
            href="https://m.codere.pa/deportespanama/#/HomePage"
            rel="nofollow"
          >
            <img src={LOGO} alt="Logo Casa de Apuestas Codere - Real Madrid " />
          </Nav.Link>
          <div id="header_buttons">
            <Button
              href={acceder}
              className="acceder-button header_btn"
              rel="nofollow"
            >
              Acceder
            </Button>
            {/* <DialogModal /> */}

            <Button
              href={regis}
              className="registrate-button header_btn"
              rel="nofollow"
            >
              Regístrate
            </Button>
          </div>
        </div>
      ) : (
        <Container>
          <InputGroup className="header-group-left">
            <Nav.Link
              href="https://m.codere.pa/deportespanama/#/HomePage"
              rel="nofollow"
            >
              <LazyLoadImage
                src={LOGO}
                style={{ maxWidth: 160 }}
                alt="Logo Casa de Apuestas Codere - Real Madrid "
              />
            </Nav.Link>
            <Nav className="me-auto">
              {menu.map((m, k) => (
                <Nav.Link key={k} rel="nofollow" href={m.url}>
                  <span style={{ textTransform: "uppercase" }}>{m.name}</span>
                </Nav.Link>
              ))}
            </Nav>
          </InputGroup>

          <div className={'headerRightButtonsBlock'}>
            <Dropdown>
              <Dropdown.Toggle className="header_btn">
                <ArrowdownBlack className={"arrowdownBlack"}/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {seo_menu.map((d, k) => (
                  <Dropdown.Item as={Link} to={d.url} key={k}>
                    {d.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Button
              href={acceder}
              className="acceder-button header_btn"
              rel="nofollow"
            >
              Acceder
            </Button>
            {/* <DialogModal /> */}
            <Button
              href={regis}
              className="registrate-button header_btn"
              rel="nofollow"
            >
              Regístrate
            </Button>
          </div>
        </Container>
      )}
    </Navbar>
  );
}

export default Header;
