import gameCSS from "../CSS/games.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-bootstrap";
import { Bounce } from "react-awesome-reveal";

function BottomGame(props) {
  // console.log(props);
  return (
    <NavLink href={props.gameLink} rel={"nofollow"}>
      <div className={gameCSS.bottom_card}>
        <div className={gameCSS.bottom_box}>
          <div className={gameCSS.game}>
            <div className="avner">
              <img src={props.img} alt={props.alt} />
            </div>
          </div>

          <div className={gameCSS.logo}>
            <Bounce duration={1500} right>
              {/* <div className="avner"> */}
              <img src={props.logo} alt={props.logoAlt} />
              {/* </div> */}
            </Bounce>
          </div>
        </div>
        <div className={gameCSS.bottom_content}>
          <span className={gameCSS.regis}>
            Juega Ahora
            <FontAwesomeIcon id={gameCSS.game_svg} icon={faChevronRight} />
          </span>
        </div>
        <div className={gameCSS.bottom_game_title}>
          <h3>{props.name}</h3>
        </div>
      </div>
    </NavLink>
  );
}

export default BottomGame;
