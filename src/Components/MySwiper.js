import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Timer from "./Timer";
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
  const dateToCount = "";
  const [showTimer, setShowTimer] = useState(false);
  const [delay, setDelay] = useState(400);

  const indexHandler = (swiper) => {
    // console.log(swiper);
    // if (swiper.realIndex === 0) setShowTimer(true);
    // else {
    //   setShowTimer(false);
    //   setDelay(100);
    // }
  };

  return (
    <isMobileContext.Consumer>
      {(isMobile) => {
        if (!isMobile) imgs = banners.desktop_slide_list;
        else imgs = banners.mobile_slide_list;

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
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
            >
              {imgs.map((item, index) => {
                let d1,
                  d2,
                  cur = new Date();

                if (item.startDate != "" && item.endDate != "") {
                  // Schedule both Start-Date and End Date
                  d1 = new Date(item.startDate);
                  d2 = new Date(item.endDate);
                } else if (item.startDate == "" && item.endDate != "") {
                  // Schedule End-Date Without Starting
                  d1 = new Date("01/01/1970");
                  d2 = new Date(item.endDate);
                } else if (item.startDate != "" && item.endDate == "") {
                  // Schedule Start-Date Without ending
                  d1 = new Date(item.startDate);
                  d2 = new Date("01/01/2500");
                } else {
                  // No Scheduling
                  d1 = new Date("01/01/1970");
                  d2 = new Date("01/01/2500");
                }

                if (cur >= d1 && cur <= d2)
                  return (
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
                    </SwiperSlide>
                  );
              })}
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
