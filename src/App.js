import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/roboto-condensed";
import Header from "./Components/Header";
import MySwiper from "./Components/MySwiper";
import SportGames from "./Components/SportGames";
import Games from "./Components/Games";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import StickyFooter from "./Components/StickyFooter";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect, useMemo } from "react";
import CookieConsent from "react-cookie-consent";

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

  const memoSwiper = useMemo(() => {
    return <MySwiper />;
  }, []);

  return (
    <div className="App">
      <isMobileContext.Provider value={flag}>
        <div id="first-section">
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
            <a href="/ayuda/politica-de-cookies">
              política de cookies
            </a>
            .
          </CookieConsent>
          {flag ? <StickyFooter /> : null}
          {memoSwiper}

          {/* <SportGames /> */}
        </div>
        <Games />
        <Content />
        <Footer />
      </isMobileContext.Provider>
    </div>
  );
}

export default App;
