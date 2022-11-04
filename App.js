import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/roboto-condensed";
import Header from "./Components/Header";
import MySwiper from "./Components/MySwiper";
import Timer from "./Components/Timer";
import Games from "./Components/Games";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import StickyFooter from "./Components/StickyFooter";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect, useMemo } from "react";
import { Zoom, Slide, Fade } from "react-awesome-reveal";

// import Axios from "axios";

export const isMobileContext = React.createContext();

function App() {
  const [flag, setFlag] = useState(isMobile);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    if (windowSize.width <= 768 || isMobile) setFlag(true);
    else setFlag(false);
    // console.log("isMobile");
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
    return <MySwiper setShowTimer={setShowTimer} />;
  }, []);

  return (
    <div className="App">
      <isMobileContext.Provider value={flag}>
        <div id="first-section">
          <Header />
          {flag ? <StickyFooter /> : null}
          {memoSwiper}
          {showTimer && new Date() <= new Date("Nov 21 2022 11:00") ? (
            <Timer />
          ) : (
            <></>
          )}
        </div>
        <Games />
        <Content />
        <Footer />
      </isMobileContext.Provider>
    </div>
  );
}

export default App;
