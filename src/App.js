// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import MySwiper from "./Components/MySwiper";
import Promos from "./Components/Promos";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import StickyFooter from "./Components/StickyFooter";
import { isMobile } from "react-device-detect";
import CookieConsent from "react-cookie-consent";

// import Axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Fade } from "react-awesome-reveal";
// import { useDispatch, useSelector } from "react-redux";
// import {setMobile} from "./redux/mobile"

function App() {
  // const { user, isMobile2 } = useSelector((state) => state);
  // console.log(user, isMobile2);
  // const dispatch = useDispatch();
  // dispatch(setMobile(false))

  return (
    <div className="App">
      <div id="first-section">
        <Header isMobile={isMobile} />
        {isMobile ? <StickyFooter /> : null}
        <CookieConsent
          cookieName="codere_cookie"
          expires={365}
          buttonText="- Acceptar -"
          buttonClasses="cookie-btn"
          overlay={true}
          cookieValue={"accepted"}
          extraCookieOptions={{ domain: ".codere.es" }}
          overlayClasses="cookie-overlay"
          containerClasses="cookie-container"
          contentClasses="cookie-content"
        >
          <h3>Uso Cookies</h3>
          Esta página web, propiedad de Codere Online S.A.U, utiliza cookies
          propias y de terceros con la finalidad de permitir tu navegación,
          elaborar información estadística y analizar tus hábitos de navegación,
          así como mostrarte la publicidad ajustada a tus preferencias. Puedes
          hacer clic en ACEPTAR para permitir el uso de todas las cookies.
          También puedes rechazar todas, o elegir qué tipo de cookies deseas
          aceptar o rechazar, mediante la opción{" "}
          <a href="https://m.apuestas.codere.es/deportes/#/CookiesConsentPage">
            configurar cookies
          </a>
          . Puedes obtener más información en nuestra{" "}
          <a href="https://www.codere.es/informaci%C3%B3n-legal/politica-de-cookies">
            política de cookies
          </a>
          . Está página web está optimizada para Google Chrome, en caso de
          encontrar algún funcionamiento incorrecto por favor use el citado
          navegador.
        </CookieConsent>
        <MySwiper isMobile={isMobile} />
      </div>
      <Promos isMobile={isMobile} />
      <Content isMobile={isMobile} />
      <Footer />
    </div>
  );
}

export default App;
