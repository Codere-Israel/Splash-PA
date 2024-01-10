import { Route, Routes, useLocation } from "react-router-dom";
import Inicio from "../Components/Inicio";
import Basketball from "../Components/seo/sports/events/Basketball";
import Tenis from "../Components/seo/sports/events/Tenis";
import Mundeal from "../Components/seo/sports/events/Mundeal";
import Formula from "../Components/seo/sports/events/Formula";
import EventosDeportivos from "../Components/seo/sports/EventosDeportivos";
import Casino from "../Components/seo/casino/Casino";
import Slots from "../Components/seo/casino/Slots";
import CasinoLive from "../Components/seo/casino/CasinoLive";
import Blackjack from "../Components/seo/casino/Blackjack";
import Ruleta from "../Components/seo/casino/Ruleta";
import { useEffect, useState } from "react";
import CuotasDeportivas from "../Components/seo/sports/CuotasDeportivas";
import Baseball from "../Components/seo/sports/cuotas/Baseball";
import Navigations from "../Components/seo/Navigations";
import Soccer from "../Components/seo/sports/cuotas/Soccer";
import NFL from "../Components/seo/sports/cuotas/NFL";

export default function Routing({ device }) {
  const activeHandler = () => {
    switch (location.pathname) {
      case "/casino":
      case "/eventos-deportivos/apuestas-mundial-baloncesto":
      case "/cuotas-deportivas/apuestas-futbol":
        return 1;
      case "/casino/casino-en-vivo":
      case "/eventos-deportivos/apuestas-grand-slam":
      case "/cuotas-deportivas/apuestas-nfl-futbol-americano":
        return 2;
      case "/casino/slots":
      case "/eventos-deportivos/apuestas-grand-prix":
      case "/cuotas-deportivas/apuestas-beisbol-grandes-ligas":
        return 3;
      case "/casino/blackjack":
      case "/eventos-deportivos/apuestas-mundial-fifa":
      case "/cuotas-deportivas/apuestas-ciclismo":
        return 4;
      case "/casino/ruleta":
      case "/cuotas-deportivas/":
        return 5;
      default:
        return 0;
    }
  };

  const location = useLocation();
  const [activated, setActivated] = useState(0);

  useEffect(() => {
    setActivated(activeHandler);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const typeHandler = () => {
    if (location.pathname.includes("eventos")) return 0;
    else if (location.pathname.includes("casino")) return 1;
    else return 2;
  };

  return (
    <>
      {location.pathname.includes("deportiv") ||
      location.pathname.includes("casino") ? (
        <Navigations index={activeHandler()} type={typeHandler()} />
      ) : (
        <></>
      )}
      <Routes>
        <Route path="/" element={<Inicio device={device} />} />
        <Route path="stg" element={<Inicio device={device} />} />
        <Route path="/stg/index.html" element={<Inicio device={device} />} />
        <Route exact path="eventos-deportivos">
          <Route
            exact
            path=""
            element={<EventosDeportivos device={device} />}
          />
          <Route
            exact
            path="apuestas-mundial-baloncesto"
            element={<Basketball device={device} />}
          />
          <Route
            exact
            path="apuestas-grand-slam"
            element={<Tenis device={device} />}
          />
          <Route
            exact
            path="apuestas-grand-prix"
            element={<Formula device={device} />}
          />
          <Route
            exact
            path="apuestas-mundial-fifa"
            element={<Mundeal device={device} />}
          />
        </Route>
        <Route exact path="cuotas-deportivas">
          <Route exact path="" element={<CuotasDeportivas device={device} />} />
          <Route
            exact
            path="apuestas-beisbol-grandes-ligas"
            element={<Baseball device={device} />}
          />
          <Route
            exact
            path="apuestas-futbol"
            element={<Soccer device={device} />}
          />
          <Route
            exact
            path="apuestas-nfl-futbol-americano"
            element={<NFL device={device} />}
          />
        </Route>
        <Route exact path="casino">
          <Route exact path="" element={<Casino device={device} />} />
          <Route
            exact
            path="casino-en-vivo"
            element={<CasinoLive device={device} />}
          />
          <Route exact path="slots" element={<Slots device={device} />} />
          <Route
            exact
            path="blackjack"
            element={<Blackjack device={device} />}
          />
          <Route exact path="ruleta" element={<Ruleta device={device} />} />
        </Route>
      </Routes>
    </>
  );
}
