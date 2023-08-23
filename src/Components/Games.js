import gameCSS from "../CSS/games.module.css";
import TopGame from "./TopGame";
import BottomGame from "./BottomGame";
import GameSwiper from "./GameSwiper";
import gameCarousel from "../JSON/mob-games.json";
import deskGames from "../JSON/desktop-games.json";

// import { isMobile } from "react-device-detect";
// Top Games \\

function Games(props) {
  const desktopTitleStyles = {
    color: "#fff",
    fontSize: "1.75rem",
    fontWeight: 700,
  };
  const mobileTitleStyles = {
    color: "#79c000",
    fontWeight: 700,
    textAlign: "center",
    fontSize: "5vw",
    margin: "1.75vw 0",
  };
  return (
    <>
      {props.flag ? (
        <div id="mobile-games-section">
          <div style={mobileTitleStyles}>
            <span> Juegos Destacados </span>
          </div>
          <GameSwiper games={gameCarousel.first_slide_list} order={0} />
          <div className="mt-4" style={mobileTitleStyles}>
            <span> Nuevos Juegos </span>
          </div>
          <GameSwiper games={gameCarousel.second_slide_list} order={1} />
        </div>
      ) : (
        <div id={gameCSS.desktop_games}>
          <div>
            <span style={desktopTitleStyles}>Mejores Juegos</span>
          </div>
          <div className={gameCSS.top_games_conatiner}>
            {deskGames.top_games.map((item, key) => {
              return (
                <TopGame
                  key={key}
                  imgSrc={item.image}
                  logo={item.logo}
                  gameLink={item.gamelink}
                  sponsor={item.sponsor}
                  game_name={item.name}
                  alt={item.alt}
                  logoAlt={item.logo_alt}
                />
              );
            })}
          </div>
          <div>
            <span style={desktopTitleStyles}>Nuevos Juegos</span>
          </div>

          <div className={gameCSS.bottom_conatiner}>
            {deskGames.bottom_games.map((item, key) => {
              return (
                <BottomGame
                  key={key}
                  index={key}
                  img={item.image}
                  logo={item.logo}
                  gameLink={item.gamelink}
                  name={item.name}
                  alt={item.alt}
                  logoAlt={item.logo_alt}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Games;
