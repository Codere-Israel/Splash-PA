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
        <MySwiper isMobile={isMobile} />
      </div>
      <Promos isMobile={isMobile} />
      <Content isMobile={isMobile} />
      <Footer />
    </div>
  );
}

export default App;
