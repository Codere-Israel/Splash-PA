import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Timer2 from "./Timer2.0";
import banners from "../JSON/data.json";
import { useState } from "react";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { isMobileContext } from "../App";

var imgs = [];
const regis = "https://m.codere.pa/deportespanama/#/RegistroPAPage";

function MySwiper() {
  const DATE_TO_COUNT = "2022-12-18T15:00:00Z";
  const [showTimer, setShowTimer] = useState(false);
  const [delay, setDelay] = useState(400);

  const indexHandler = (swiper) => {
    if (swiper.realIndex === 0) setShowTimer(true);
    else {
      setShowTimer(false);
      setDelay(100);
    }
  };

  function dateInBetween(banner) {
    return (
      new Date() >= new Date(banner.startDate) &&
      new Date() <= new Date(banner.endDate)
    );
  }

  function BannerFilter(banner) {
    if (!banner.scheduled) return banner;
    else {
      if (dateInBetween(banner)) return banner;
    }
  }

  return (
    <isMobileContext.Consumer>
      {(isMobile) => {
        if (!isMobile) imgs = banners.desktop_slide_list.filter(BannerFilter);
        else imgs = banners.mobile_slide_list.filter(BannerFilter);
        return (
          <div id="carousel-section">
            <Swiper
              onSlideChange={(swiper) => indexHandler(swiper)}
              // onChange={console.log("changed")}
              modules={[Pagination, EffectFade, Autoplay, Lazy]}
              pagination={{ clickable: true }}
              effect={"fade"}
              lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
              autoplay={{ delay: 3250, disableOnInteraction: false }}
              // autoplay={{ delay: 3250, disableOnInteraction: true }}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
            >
              {imgs.map((item, index) => (
                <SwiperSlide key={index}>
                  <a href={regis}>
                    <img src={item.image} alt={item.img_alt} />
                  </a>

                  {!isMobile ? (
                    <div id="des-reg">
                      <Button
                        className="central-regis gl-effect"
                        href={regis}
                        rel={"nofollow"}
                      >
                        Regístrate
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Button>
                      {item.tycLink ? (
                        <a className="tyc" href={item.tycLink}>
                          Términos y condiciones
                        </a>
                      ) : null}
                    </div>
                  ) : (
                    <>
                      {item.tycLink ? (
                        <div className="mob-tyc">
                          <a className="tyc" href={item.tycLink}>
                            Términos y condiciones
                          </a>
                        </div>
                      ) : null}
                    </>
                  )}
                  {/* {showTimer && new Date() < new Date(DATE_TO_COUNT) && (
                      <Timer2 DATE_TO_COUNT={DATE_TO_COUNT} delay={delay} />
                    )} */}
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Timer for live Text */}
            {isMobile ? <SlideButton regis={regis} /> : null}
          </div>
        );
      }}
    </isMobileContext.Consumer>
  );
}
export default MySwiper;
