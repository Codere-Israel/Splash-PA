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
import { isMobileContext } from "../App";
import React, { useState, useEffect } from "react";
// import Axios from "axios";
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
} from "@fortawesome/free-solid-svg-icons";

class PostUser {
  constructor(loginName, password) {
    this.loginName = loginName;
    this.password = password;
    // this.persistCookie = persistCookie;
    // this.deviceType = deviceType;
  }
}

function Header() {
  var regis = "https://m.codere.pa/deportespanama/#/RegistroPAPage";

  const acceder =
    "https://m.codere.pa/deportespanama/#/HomePage?openlogin=true";

  // const URL = "https://dm.apuestas.codere.es/LoginServicesESApi/login/web";
  const LOGO =
    "https://www.codere.pa/_catalogs/masterpage/codere/img/SponsorsLogoCodere.png";

  // Hooks
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPassword] = useState("");
  const [hamburger, setHamburger] = useState(false);

  // Handlers
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const formHandler = (evt) => {
  //   evt.preventDefault();
  //   // console.log("been there done that");

  //   checkExistingUser();

  //   setEmail("");
  //   setPassword("");
  // };

  // const emailHandler = (evt) => {
  //   console.log(evt.target.value);
  //   setEmail(evt.target.value);
  // };

  // const pwHandler = (evt) => {
  //   console.log(evt.target.value);
  //   setPassword(evt.target.value);
  // };

  // function checkExistingUser() {
  //   Axios.post(URL, new PostUser(email, pw)).then((res) => {
  //     console.log("users >>");
  //     console.log(res.data);
  //   });
  // }

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
      {(isMobile) => {
        return (
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
      }}
    </isMobileContext.Consumer>
  );
}

export default Header;
