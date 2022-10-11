import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Lazy } from "swiper";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/autoplay";

function GameSwiper(props) {
  return (
    <div className="game-carousel">
      <Swiper
        modules={[Autoplay, Lazy]}
        lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
        autoplay={{ delay: 1000 }}
        spaceBetween={15}
        slidesPerView={3}
        loop={true}
      >
        {props.games.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <a
                href={
                  "https://m.codere.pa/deportespanama/#/CasinoPage?playgame=PRP " +
                  item.name
                }
                rel={"nofollow"}
              >
                <img src={item.image} alt={item.alt} />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
export default GameSwiper;
