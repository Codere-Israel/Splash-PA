import "../App.css";
import deskGames from "../JSON/desktop-games.json";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Top Games \\

function Promos(props) {
  // console.log(gameCarousel);
  return (
    <div id="desktop_games">
      <div className="top_games_conatiner">
        {deskGames.top_games.map((item, key) => {
          return (
            <div className="topGame" key={key}>
              <div className="card">
                <a href={item.link}>
                  <img className="topGameImage" src={item.image} alt="" />
                </a>
                <div className="game_info">
                  <h3 className="topGameTitle">{item.name}</h3>
                  <Button className="jugar-regis" href={item.link}>
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
