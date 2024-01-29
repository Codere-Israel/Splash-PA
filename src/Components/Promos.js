import "../App.css";
import methodos from "../JSON/methodos.json";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Top Games \\

function Promos() {
  // console.log(gameCarousel);
  return (
    <div id="desktop_games">
      <div className="top_games_conatiner">
        {methodos.top_games.map((item, key) => {
          return (
            <div className="topGame" key={key}>
              <div className="card">
                <a href={item.link} rel="nofollow">
                  <img
                    className="topGameImage"
                    src={item.image}
                    alt={item.alt}
                  />
                </a>
                <div className="game_info">
                  <h3 className="topGameTitle">{item.name}</h3>
                  <Button
                    className="jugar-regis"
                    href={item.link}
                    rel="nofollow"
                  >
                    MAS INFO{" "}
                    <FontAwesomeIcon id="game-svg" icon={faAngleRight} />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Promos;
