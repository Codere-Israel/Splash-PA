import gameCSS from "../CSS/games.module.css";
import TopGame from "./TopGame";
import BottomGame from "./BottomGame";
import GameSwiper from "./GameSwiper";
import gameCarousel from "../JSON/mob-games.json";
import deskGames from "../JSON/desktop-games.json";
import { isMobileContext } from "../App";
import { useState } from "react";

// import { isMobile } from "react-device-detect";
// Top Games \\

function Games() {
  return (
    <isMobileContext.Consumer>
      {(isMobile) => {
        return isMobile ? (
          <section id="mobile-games-section">
            <h2 className="gamesTitle"> Juegos Destacados </h2>
            <GameSwiper games={gameCarousel.first_slide_list} order={0} />
            <h2 className="gamesTitle mt-3"> Nuevos Juegos </h2>
            <GameSwiper games={gameCarousel.second_slide_list} order={1} />
          </section>
        ) : (
          <div id={gameCSS.desktop_games}>
            <h2> Mejores Juegos </h2>
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
            <h2> Nuevos Juegos </h2>

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
        );
      }}
    </isMobileContext.Consumer>
  );
}

export default Games;
