import {
  Button,
  Container,
  Nav,
  Navbar,
  Dropdown,
  Modal,
  Form,
  Accordion,
} from "react-bootstrap";

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { elastic as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faFutbol,
  faCoins,
  faDice,
  faBullhorn,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

class PostUser {
  constructor(loginName, password) {
    this.loginName = loginName;
    this.password = password;
    // this.persistCookie = persistCookie;
    // this.deviceType = deviceType;
  }
}

function Header(props) {
  var regis = "https://m.codere.pa/deportespanama/#/RegistroPAPage";

  const acceder =
    "https://m.codere.pa/deportespanama/#/HomePage?openlogin=true";

  const URL = "https://dm.apuestas.codere.es/LoginServicesESApi/login/web";
  const LOGO =
    "https://www.codere.pa/_catalogs/masterpage/codere/img/SponsorsLogoCodere.png";

  // Hooks
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPassword] = useState("");
  const [hamburger, setHamburger] = useState(false);

  // Handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formHandler = (evt) => {
    evt.preventDefault();
    // console.log("been there done that");

    checkExistingUser();

    setEmail("");
    setPassword("");
  };

  const emailHandler = (evt) => {
    console.log(evt.target.value);
    setEmail(evt.target.value);
  };

  const pwHandler = (evt) => {
    console.log(evt.target.value);
    setPassword(evt.target.value);
  };

  function checkExistingUser() {
    Axios.post(URL, new PostUser(email, pw)).then((res) => {
      console.log("users >>");
      console.log(res.data);
    });
  }

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
    <Navbar className="header_nav stroke" variant="dark">
      {props.isMobile ? (
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
                href="https://m.apuestas.codere.es/deportes/#/HomePage"
                rel="nofollow"
              >
                <FontAwesomeIcon icon={faFutbol} />
                Deportes
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
              <a
                href="https://m.apuestas.codere.es/deportes/#/CasinoPage"
                rel="nofollow"
              >
                <FontAwesomeIcon icon={faDice} />
                En Vivo
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
              <a
                href="https://m.apuestas.codere.es/csbgonline/home/link?gotopromotions"
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
                          Futbol
                          <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.codere.pa/cuotas-deportivas/apuestas-beisbol-grandes-ligas">
                          Beisbol
                          <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.codere.pa/cuotas-deportivas/apuestas-nfl-futbol-americano">
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
            <img style={{ maxWidth: 134, maxHeight: 32 }} src={LOGO} />
          </div>

          <div id="header_buttons">
            {/* onClick={handleShow} */}
            <Button
              href={acceder}
              className="acceder-button header_btn"
              rel="nofollow"
            >
              Acceder
            </Button>
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
          <img src={LOGO} />

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
                BEISBOL
              </Dropdown.Item>
              <Dropdown.Item href="https://www.codere.pa/cuotas-deportivas/apuestas-futbol">
                FUTBALL
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            href={acceder}
            // onClick={handleShow}
            className="acceder-button header_btn"
            rel="nofollow"
          >
            Acceder
          </Button>
          <Button
            href={regis}
            className="registrate-button header_btn"
            rel="nofollow"
          >
            Registrate
          </Button>
        </Container>
      )}
      {/* <Modal id="modal_app" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log-In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="test" onSubmit={formHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                onChange={emailHandler}
                placeholder="Usuario ó Correo Electrónico"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={pwHandler}
                required
              />
            </Form.Group>
            <input type="submit" className="login_btn" value="Log-In" />
          </Form>
        </Modal.Body>
      </Modal> */}
    </Navbar>
  );
}

export default Header;
