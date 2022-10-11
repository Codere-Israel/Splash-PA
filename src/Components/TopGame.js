import gameCSS from "../CSS/games.module.css";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";

function TopGame(props) {
  const dir = ["left", "right", "top", "bottom"];

  return (
    <div className={gameCSS.topGame}>
      <div className={gameCSS.card}>
        <a href={props.gameLink} rel={"nofollow"}>
          {/* <div id="avner"> */}
          <img className="topGameImage" src={props.imgSrc} alt={props.alt} />
          {/* </div> */}
          <Slide
            duration={1500}
            direction={props.imgSrc.includes("blackjack") ? "left" : "right"}
          >
            <img
              className={gameCSS.game_logo}
              src={props.logo}
              alt={props.logoAlt}
            />
          </Slide>
        </a>
        <div className={gameCSS.game_info}>
          <h3 className={gameCSS.topGameTitle}>{props.game_name}</h3>
          <div className={gameCSS.topGameSponsor}>{props.sponsor}</div>
        </div>
        <div className={gameCSS.jugar_div}>
          <Button
            className={gameCSS.jugar_regis}
            size="lg"
            href={props.gameLink}
          >
            Juega Ahora
            <FontAwesomeIcon id={gameCSS.game_svg} icon={faAngleRight} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TopGame;
