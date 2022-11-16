import React, { useState, useEffect } from "react";

import sportCSS from "../CSS/sportgames.module.css";
import { isMobileContext } from "../App";
// import { sortByDate } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Lazy, Navigation } from "swiper";
import { Card } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { BarLoader } from "react-spinners";
import "swiper/css/navigation";

const URL =
  "https://coderesbgonlinesbsbanners.azurewebsites.net/api/feeds/leagues/5108021769/1/GetEventsByLeagueAndMarketId";
const headers = {
  CodereAffiliateApiKey: "GUY%20AFFILIATE%201",
  CodereAffiliateApiSecret: "cb82be80-d58a-4c7a-a523-a4a9dd98f237",
};

const spinnerCss = { margin: "auto", marginTop: "4rem", marginBottom: "2rem" };

function SportGames() {
  const [data, setData] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [mouseEnteredCard, setMouseEnteredCard] = useState(false);
  const [showLast, setShowLast] = useState(true);

  // revoke the 1X2 from server side
  useEffect(() => {
    axios.get(URL, { headers }).then((res) => {
      // get only the first 6 games.
      // console.log(res.data);
      // setData(res.data.slice(0, 6));
      // console.log(res.);
      setData(
        res.data
          .sort((a, b) => new Date(a.StartDate) - new Date(b.StartDate))
          .slice(0, 6)
      );
      setShowSpinner(false);
      // setData(res.data);
      // console.log(data);
    });
  }, []);

  function oddHandler(odd) {
    return odd >= 2
      ? "+" + ((parseFloat(odd).toFixed(2) - 1) * 100).toFixed(0)
      : (-100 / (parseFloat(odd).toFixed(2) - 1)).toFixed(0);
  }

  function dateFix(date) {
    let x = new Date(date);
    // console.log(date);
    let day = x.getDate();
    let month = x.getMonth() + 1;
    if (day < 10) day = "0" + x.getDate();
    if (month < 10) day = "0" + x.getMonth();

    return day + "/" + month + "/" + x.getFullYear();
  }

  function getGameHour(date) {
    let x = new Date(date);
    let hours = x.getHours(),
      mins = x.getMinutes();
    if (x.getHours() < 10) hours = "0" + x.getHours();
    if (x.getMinutes() < 10) mins = "0" + x.getMinutes();
    return hours + ":" + mins;
  }

  const mouseEnterHandler = () => {
    setMouseEnteredCard(true);
    // console.log("in");
  };
  const mouseOutHandler = () => {
    setMouseEnteredCard(false);
    // console.log("Out");
  };

  return (
    <>
      {showSpinner ? (
        <BarLoader color="#79c000" cssOverride={spinnerCss} />
      ) : (
        <div className={sportCSS.sport_games_slider}>
          <isMobileContext.Consumer>
            {(isMobile) => {
              return (
                <>
                  <h2
                    style={{
                      color: "#79c000",
                      fontWeight: 700,
                      marginBottom: "2vw",
                    }}
                  >
                    Copa del Mundo
                  </h2>
                  <Swiper
                    modules={[Autoplay, Lazy, Navigation]}
                    lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
                    autoplay={{
                      delay: 2000,
                      pauseOnMouseEnter: true,
                      disableOnInteraction: false,
                    }}
                    spaceBetween={25}
                    slidesPerView={isMobile ? 1 : 3}
                    loop={true}
                    navigation={{
                      prevEl: ".prev",
                      nextEl: ".next",
                    }}
                  >
                    {data.map((item, key) => (
                      <SwiperSlide
                        key={key}
                        style={{ color: "#fff", fontSize: "1.2rem" }}
                      >
                        <Card className={sportCSS.card} bg="dark">
                          <div className={sportCSS.startdate}>
                            <span>{dateFix(item.StartDate)}</span>
                            <span>{getGameHour(item.StartDate)}</span>
                          </div>
                          <div className={sportCSS.row + " row"}>
                            <div className={sportCSS.col + " col-4"}>
                              <img
                                style={{
                                  width: "auto",
                                  padding: "8px",
                                  marginBottom: ".25rem",
                                }}
                                src={
                                  "https://www.codere.pa/copaflags/" +
                                  item.Games[0].Results[0].Name +
                                  ".png"
                                }
                              />
                              <Card.Link
                                className={sportCSS.url}
                                href={
                                  "https://m.codere.pa/deportes/#/HomePage?addbet=" +
                                  item.Games[0].Results[0].NodeId
                                }
                              >
                                <div className={sportCSS.frame}>
                                  <div>
                                    {item.Games[0].Results[0].Name.includes(
                                      "Sur"
                                    )
                                      ? "Corea del S"
                                      : item.Games[0].Results[0].Name}
                                  </div>

                                  <div>
                                    {oddHandler(item.Games[0].Results[0].Odd)}
                                  </div>
                                </div>
                              </Card.Link>
                            </div>
                            <div
                              className={sportCSS.vs + " col-4"}
                              style={{
                                fontSize: "2rem",
                                paddingTop: "0",
                              }}
                            >
                              vs
                              <Card.Link
                                className={sportCSS.url}
                                href={
                                  "https://m.codere.pa/deportes/#/HomePage?addbet=" +
                                  item.Games[0].Results[1].NodeId
                                }
                              >
                                <div className={sportCSS.frame}>
                                  <div
                                    style={{
                                      fontSize: "1.2rem",
                                      marginTop: "1.4rem",
                                    }}
                                  >
                                    X
                                  </div>
                                  <div style={{ fontSize: "1.2rem" }}>
                                    {oddHandler(item.Games[0].Results[1].Odd)}
                                  </div>
                                </div>
                              </Card.Link>
                            </div>

                            <div className={sportCSS.col + " col-4"}>
                              <img
                                style={{
                                  width: "auto",
                                  padding: "8px",
                                  marginBottom: ".25rem",
                                }}
                                src={
                                  "https://www.codere.pa/copaflags/" +
                                  item.Games[0].Results[2].Name +
                                  ".png"
                                }
                              />
                              <div className={sportCSS.frame}>
                                <Card.Link
                                  className={sportCSS.url}
                                  href={
                                    "https://m.codere.pa/deportes/#/HomePage?addbet=" +
                                    item.Games[0].Results[2].NodeId
                                  }
                                >
                                  <div>
                                    {item.Games[0].Results[2].Name.includes(
                                      "Sur"
                                    )
                                      ? "Corea Rep."
                                      : item.Games[0].Results[2].Name}
                                  </div>
                                  <div>
                                    {oddHandler(item.Games[0].Results[2].Odd)}
                                  </div>
                                </Card.Link>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              );
            }}
          </isMobileContext.Consumer>

          <div className={sportCSS.arrows}>
            <div className={sportCSS.prev + " prev"}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className={sportCSS.next + " next"}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SportGames;
