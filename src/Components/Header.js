import {
  Button,
  Container,
  Nav,
  Navbar,
  Dropdown,
  Accordion,
} from "react-bootstrap";
import { isMobileContext } from "../App";
import React, { useState, useEffect } from "react";
import { elastic as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DialogModal from "./DialogModal";
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
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  var regis = "https://m.codere.pa/deportespanama/#/RegistroPAPage";

  const acceder =
    "https://m.codere.pa/deportespanama/#/HomePage?openlogin=true";

  const URL = "https://dm.apuestas.codere.pa/LoginServicesESApi/login/web";
  const LOGO =
    "https://www.codere.pa/_catalogs/masterpage/codere/img/SponsorsLogoCodere.png";

  // Hooks
  const [hamburger, setHamburger] = useState(false);

  const hamburgerHandler = (evt) => {
    let flag = false;
    // console.log(evt.target.className);
    if (!hamburger && evt.target.id.includes("react-burger-menu-btn")) {
      evt.target.parentNode.classList.add("open");
      flag = true;
    } else if (evt.target.id.includes("react-burger-menu-btn")) {
      evt.target.parentNode.classList.remove("open");
      flag = true;
    } else if (
      evt.target.className.includes("bm-overlay") ||
      evt.target.id.includes("react-burger-cross-btn")
    ) {
      document
        .getElementById("react-burger-menu-btn")
        .parentNode.classList.remove("open");
      flag = true;
    }
    if (flag) setHamburger(!hamburger);
  };

  return (
    <isMobileContext.Consumer>
      {(isMobile) => (
        <Navbar className="header_nav stroke" variant="dark">
          {isMobile ? (
            <div id="father">
              <div id="outer-container" onClick={hamburgerHandler}>
                <Menu
                  id="elastic"
                  left
                  customCrossIcon={false}
                  pageWrapId={"page-wrap"}
                  outerContainerId={"outer-container"}
                >
                  {/* <a href="#">
              <FontAwesomeIcon icon={faRightToBracket} />
              Acceder <FontAwesomeIcon icon={faAngleRight} />
            </a> */}
                  <a
                    href="https://m.codere.pa/deportespanama/#/HomePage"
                    rel="nofollow"
                  >
                    <FontAwesomeIcon icon={faCrosshairs} />
                    Deportes
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a
                    href="https://m.codere.pa/deportespanama/#/DirectosPage"
                    rel="nofollow"
                  >
                    <FontAwesomeIcon icon={faCirclePlay} />
                    En Vivo
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a
                    href="https://m.codere.pa/deportespanama/#/CasinoPage"
                    rel="nofollow"
                  >
                    <FontAwesomeIcon icon={faCoins} />
                    Casino
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a
                    href="https://m.codere.pa/deportespanama/#/PromotionsPage"
                    rel="nofollow"
                  >
                    <FontAwesomeIcon icon={faBullhorn} />
                    Promociones
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <Accordion className="hamb-accordion">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Links Destacados</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <a href="https://www.codere.pa/cuotas-deportivas/apuestas-futbol">
                              <FontAwesomeIcon icon={faFutbol} />
                              Fútbol
                              <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.codere.pa/cuotas-deportivas/apuestas-beisbol-grandes-ligas">
                              <FontAwesomeIcon icon={faBaseball} />
                              Béisbol
                              <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.codere.pa/cuotas-deportivas/apuestas-nfl-futbol-americano">
                              <FontAwesomeIcon icon={faFootball} />
                              NFL
                              <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Menu>
                <main id="page-wrap"></main>
              </div>
              <a
                href="https://m.codere.pa/deportespanama/#/HomePage"
                rel="nofollow"
              >
                <img
                  src={LOGO}
                  alt="Logo Casa de Apuestas Codere - Real Madrid "
                />
              </a>
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
                  Registrate
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
                <Nav.Link
                  href="https://m.codere.pa/deportespanama/#/HomePage"
                  rel="nofollow"
                >
                  DEPORTES
                </Nav.Link>
                <Nav.Link
                  href="https://m.codere.pa/deportespanama/#/DirectosPage"
                  rel="nofollow"
                >
                  EN VIVO
                </Nav.Link>
                <Nav.Link
                  href="https://m.codere.pa/deportespanama/#/CasinoPage"
                  rel="nofollow"
                >
                  CASINO
                </Nav.Link>
                <Nav.Link
                  href="https://m.codere.pa/deportespanama/#/PromotionsPage"
                  rel="nofollow"
                >
                  PROMOCIONES
                </Nav.Link>
              </Nav>
              <Dropdown>
                <Dropdown.Toggle className="header_btn">
                  <FontAwesomeIcon icon={faAngleDown} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="https://www.codere.pa/cuotas-deportivas/apuestas-nfl-futbol-americano">
                    NFL
                  </Dropdown.Item>
                  <Dropdown.Item href="https://www.codere.pa/cuotas-deportivas/apuestas-beisbol-grandes-ligas">
                    Béisbol
                  </Dropdown.Item>
                  <Dropdown.Item href="https://www.codere.pa/cuotas-deportivas/apuestas-futbol">
                    Fútbol
                  </Dropdown.Item>
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
                Registrate
              </Button>
            </Container>
          )}
        </Navbar>
      )}
    </isMobileContext.Consumer>
  );
}

export default Header;
