import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import banners from "../JSON/data.json";
import { useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { useState } from "react";

var imgs = [];

function MySwiper(props) {
  var regis = "https://m.codere.pa/deportespanama/#/RegistroPAPage";

  if (!props.isMobile) imgs = banners.desktop_slide_list;
  else imgs = banners.mobile_slide_list;

  return (
    <div id="carousel-section">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay, Lazy]}
        pagination={{ clickable: true }}
        effect={"fade"}
        lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
        autoplay={{ delay: 3250 }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        {imgs.map((item, index) => {
          let referlink = "";
          let d1,
            d2,
            cur = new Date();

          item.referLink ? (referlink = item.referLink) : (referlink = regis);

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
                <a href={referlink}>
                  <img src={item.image} alt={item.img_alt} />
                </a>
                {!props.isMobile ? (
                  <div className="slidebtn">
                    <Button
                      className={item.regText + " central-regis gl-effect"}
                      href={referlink}
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                    {item.tycLink ? (
                      <a className="terms" rel="nofollow" href={item.tycLink}>
                        Términos y condiciones
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <div className="slidebtn-mobile">
                    <SlideButton regis={referlink} regText={item.regText} />
                    {item.tycLink ? (
                      <div id="tyc-mobile">
                        <a href={item.tycLink} rel="nofollow">
                          Términos y condiciones
                        </a>
                      </div>
                    ) : null}
                  </div>
                )}
              </SwiperSlide>
            );
        })}
      </Swiper>
    </div>
  );
}
export default MySwiper;
