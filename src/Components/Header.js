import {
  Button,
  Container,
  Nav,
  Navbar,
  Dropdown,
  Accordion,
} from "react-bootstrap";
import { isMobileContext } from "../App";
import React, { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleDown,
  faAngleRight,
  faFutbol,
  faCirclePlay,
  faBullhorn,
  faCrosshairs,
  faBaseball,
  faFootball,
  faCoins,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
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
      icon: faCrosshairs,
    },
    {
      name: "En Vivo",
      url: "https://m.codere.pa/deportespanama/#/DirectosPage",
      icon: faCirclePlay,
    },
    {
      name: "Casino",
      url: "https://m.codere.pa/deportespanama/#/CasinoPage",
      icon: faCoins,
    },
    {
      name: "Casino En Vivo",
      url: "https://m.codere.pa/deportespanama/#/CasinoPage?filter=En%20Vivo",
      icon: faCoins,
    },
    {
      name: "Promociones",
      url: "https://m.codere.pa/deportespanama/#/PromotionsPage",
      icon: faBullhorn,
    },
  ];

  const seo_menu = [
    { name: "Casino", url: "https://www.codere.pa/casino" },
    {
      name: "Casino en vivo",
      url: "https://www.codere.pa/casino/casino-en-vivo",
    },
    { name: "Ruleta", url: "https://www.codere.pa/casino/ruleta" },
    { name: "BlackJack", url: "https://www.codere.pa/casino/blackjack" },
    { name: "Slots", url: "https://www.codere.pa/casino/slots" },
    { name: "Eventos Deportivos", url: "/eventos-deportivos", spa: true },
    {
      name: "Cuotas Deportivas",
      url: "https://www.codere.pa/cuotas-deportivas",
    },
  ];

  const hamburgerHandler = () => {
    hamburger ? setOnShow("") : setOnShow("open");
    setHamburger(!hamburger);
  };

  return (
    <isMobileContext.Consumer>
      {(isMobile) => (
        <Navbar className="header_nav stroke" variant="dark">
          {isMobile ? (
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
                      <FontAwesomeIcon icon={m.icon} />
                      {m.name}
                      <FontAwesomeIcon icon={faAngleRight} />
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
                                onClick={s.spa ? hamburgerHandler : null}
                                as={s.spa ? Link : "a"}
                                to={s.url}
                                href={s.url}
                              >
                                {s.name}
                                <FontAwesomeIcon icon={faAngleRight} />
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
                <img
                  src={LOGO}
                  alt="Logo Casa de Apuestas Codere - Real Madrid "
                />
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
              <a
                href="https://m.codere.pa/deportespanama/#/HomePage"
                rel="nofollow"
              >
                <img
                  src={LOGO}
                  alt="Logo Casa de Apuestas Codere - Real Madrid "
                />
              </a>
              <Nav className="me-auto">
                {menu.map((m, k) => (
                  <Nav.Link key={k} rel="nofollow" href={m.url}>
                    <span style={{ textTransform: "uppercase" }}>{m.name}</span>
                  </Nav.Link>
                ))}
              </Nav>

              <Dropdown>
                <Dropdown.Toggle className="header_btn">
                  <FontAwesomeIcon icon={faAngleDown} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {seo_menu.map((d, k) => (
                    <Dropdown.Item
                      as={d.spa ? Link : "a"}
                      to={d.url}
                      key={k}
                      href={d.url}
                    >
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
            </Container>
          )}
        </Navbar>
      )}
    </isMobileContext.Consumer>
  );
}

export default Header;
