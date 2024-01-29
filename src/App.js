import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/roboto-condensed";
import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./Components/Footer";
import Routing from "./routes/Routing";

import StickyFooter from "./Components/StickyFooter";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";

// import Timer from "./Components/Timer";
// import { Zoom, Slide, Fade } from "react-awesome-reveal";
// import Axios from "axios";

export const isMobileContext = React.createContext();

function App() {
  const [device, setDevice] = useState(isMobile);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (windowSize.width <= 768 || isMobile) setDevice(true);
    else setDevice(false);
  }, [windowSize]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header device={device} />
        <CookieConsent
          cookieName="codere_cookie"
          expires={365}
          buttonText="- Aceptar -"
          buttonClasses="cookie-btn"
          overlay={false}
          cookieValue={"accepted"}
          extraCookieOptions={{ domain: ".codere.pa" }}
          overlayClasses="cookie-overlay"
          containerClasses="cookie-container"
          contentClasses="cookie-content"
        >
          <h3>Uso Cookies</h3>
          Utilizamos cookies propias y de terceros para mejorar tu
          accesibilidad, personalizar, analizar tu navegación, así como para
          mostrar anuncios basados en tus intereses. Si sigues navegando,
          consideramos que aceptas su uso. Puedes obtener más información en
          nuestra{" "}
          <a href="https://www.codere.pa/Paginas/Pol%C3%ADtica-de-cookies.aspx">
            política de cookies
          </a>
          .
        </CookieConsent>
        <Routing device={device} />

        <Footer />
        {device && <StickyFooter />}
      </div>
    </Router>
  );
}

export default App;
