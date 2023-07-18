import { Route, Routes } from "react-router-dom";
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

export default function Routing(props) {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="stg" element={<Inicio />} />
      <Route path="/stg/index.html" element={<Inicio />} />
      <Route exact path="eventos-deportivos">
        <Route
          exact
          path=""
          element={<EventosDeportivos flag={props.flag} index={0} />}
        />
        <Route
          exact
          path="apuestas-mundial-baloncesto"
          element={<Basketball flag={props.flag} index={1} />}
        />
        <Route
          exact
          path="apuestas-grand-slam"
          element={<Tenis flag={props.flag} index={2} />}
        />
        <Route
          exact
          path="apuestas-grand-prix"
          element={<Formula flag={props.flag} index={3} />}
        />
        <Route
          exact
          path="apuestas-mundial-fifa"
          element={<Mundeal flag={props.flag} index={4} />}
        />
      </Route>
      <Route exact path="casino">
        <Route exact path="" element={<Casino flag={props.flag} index={1} />} />
        <Route
          exact
          path="casino-en-vivo"
          element={<CasinoLive flag={props.flag} index={2} />}
        />
        <Route
          exact
          path="slots"
          element={<Slots flag={props.flag} index={3} />}
        />
        <Route
          exact
          path="blackjack"
          element={<Blackjack flag={props.flag} index={4} />}
        />
        <Route
          exact
          path="ruleta"
          element={<Ruleta flag={props.flag} index={5} />}
        />
      </Route>
    </Routes>
  );
}
