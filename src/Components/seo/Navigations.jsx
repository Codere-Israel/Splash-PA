import { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Navigations(props) {
  const [active, setActive] = useState(props.index);

  const prefix =
    props.type != 1 // 0 for eventos, 1 for casino, 2 for cuotas. since cuotas and eventos are placed in the same address, then they share a common uri
      ? "https://www.codere.pa/seopages/eventos-deportivos/icons/"
      : "https://www.codere.pa/seopages/casino/assets/icons/";

  const eNavStyleDesktop = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "2rem",
  };
  const eNavStyleMobile = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "1rem",
  };

  const navs = [
    [
      {
        icon: "baloncesto",
        title: "Baloncesto",
        url: "/eventos-deportivos/apuestas-mundial-baloncesto",
      },
      {
        icon: "tenis",
        title: "Grand Slam",
        url: "/eventos-deportivos/apuestas-grand-slam",
      },
      {
        icon: "formula1",
        title: "Grand Prix",
        url: "/eventos-deportivos/apuestas-grand-prix",
      },
      {
        icon: "mundial",
        title: "Mundial",
        url: "/eventos-deportivos/apuestas-mundial-fifa",
      },
    ],
    [
      {
        icon: "casino",
        title: "Casino",
        url: "/casino",
      },
      {
        icon: "en-vivo",
        title: "En Vivo",
        url: "/casino/casino-en-vivo",
      },
      {
        icon: "slots",
        title: "Slots",
        url: "/casino/slots",
      },
      {
        icon: "blackjack",
        title: "Blackjack",
        url: "/casino/blackjack",
      },
      {
        icon: "ruleta",
        title: "Ruleta",
        url: "/casino/ruleta",
      },
    ],
    [
      {
        icon: "soccer",
        title: "Futbol",
        url: "/cuotas-deportivas/apuestas-futbol",
      },
      {
        icon: "superbowl",
        title: "NFL",
        url: "/cuotas-deportivas/apuestas-nfl-futbol-americano",
      },
      {
        icon: "mlb",
        title: "MLB",
        url: "/cuotas-deportivas/apuestas-beisbol-grandes-ligas",
      },
    ],
  ];

  return (
    <div
      className="e-nav"
      style={!isMobile ? eNavStyleDesktop : eNavStyleMobile}
    >
      {navs[props.type].map((n, k) => (
        <Link
          onClick={() => setActive(k)}
          to={n.url}
          style={{ color: "#fff", textDecoration: "none" }}
          key={k}
        >
          <LazyLoadImage
            src={prefix + n.icon + ".svg"}
            className={props.index === k + 1 ? "colored" : ""}
            style={isMobile ? { height: 32 } : { height: "2rem" }}
          />
          <span className={props.index === k + 1 ? "colored" : ""}>
            {n.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
