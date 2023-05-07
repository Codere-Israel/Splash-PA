import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/roboto-condensed";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import Footer from "./Components/Footer";
import StickyFooter from "./Components/StickyFooter";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Inicio from "./Components/Inicio";
import Basketball from "./Components/seo/events/Basketball";
import Tenis from "./Components/seo/events/Tenis";
import Mundeal from "./Components/seo/events/Mundeal";
import Formula from "./Components/seo/events/Formula";
import EventosDeportivos from "./Components/seo/EventosDeportivos";

// import Timer from "./Components/Timer";
// import { Zoom, Slide, Fade } from "react-awesome-reveal";
// import Axios from "axios";

export const isMobileContext = React.createContext();

function App() {
  const [flag, setFlag] = useState(isMobile);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (windowSize.width <= 768 || isMobile) setFlag(true);
    else setFlag(false);
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
        <isMobileContext.Provider value={flag}>
          <Header />
          <CookieConsent
            cookieName="codere_cookie"
            expires={365}
            buttonText="- Aceptar -"
            buttonClasses="cookie-btn"
            overlay={true}
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
          {flag ? <StickyFooter /> : null}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route exact path="eventos-deportivos">
              <Route
                exact
                path=""
                element={<EventosDeportivos flag={flag} index={0} />}
              />
              <Route
                exact
                path="apuestas-mundial-baloncesto"
                element={<Basketball flag={flag} index={1} />}
              />
              <Route
                exact
                path="apuestas-grand-slam"
                element={<Tenis flag={flag} index={2} />}
              />
              <Route
                exact
                path="apuestas-grand-prix"
                element={<Formula flag={flag} index={3} />}
              />
              <Route
                exact
                path="apuestas-mundial-fifa"
                element={<Mundeal flag={flag} index={4} />}
              />
            </Route>
          </Routes>
          <Outlet />
        </isMobileContext.Provider>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
