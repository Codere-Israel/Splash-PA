import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faChevronDown,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, NavLink, Table } from "react-bootstrap";
import Timer2 from "./Timer2.0";
import banners from "../JSON/data.json";
import { useEffect, useState } from "react";
import terms from "../JSON/tyc.json";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { LazyLoadImage } from "react-lazy-load-image-component";

var imgs = [];

// const regis = "https://m.codere.pa/deportespanama/#/RegistroPAPage";

function MySwiper(props) {
  const [swiper, setSwiper] = useState(null);
  const [currentTycType, setCurrentTycType] = useState(null);
  const [currentBannerName, setCurrentBannerName] = useState("");
  const [showTycModal, setShowTycModal] = useState(false);
  const [ctaText, setCtaText] = useState("Regístrate");
  const [ctaLink, setCtaLink] = useState(
    "https://m.codere.pa/deportespanama/#/RegistroPAPage"
  );
  // const DATE_TO_COUNT = "2022-12-18T15:00:00Z";
  // const [showTimer, setShowTimer] = useState(false);
  // const [delay, setDelay] = useState(400);

  const indexHandler = (swiper) => {
    setSwiper(swiper);
    if (imgs[swiper.realIndex].ctaText) {
      setCtaText(imgs[swiper.realIndex].ctaText);
      setCtaLink(imgs[swiper.realIndex].ctaLink);
    } else {
      setCtaText("Regístrate");
      setCtaLink("https://m.codere.pa/deportespanama/#/RegistroPAPage");
    }

    if (imgs[swiper.realIndex].tycType) {
      setCurrentTycType(imgs[swiper.realIndex].tycType);
    }
    if (imgs[swiper.realIndex].name) {
      setCurrentBannerName(imgs[swiper.realIndex].name);
    }
    // console.log(imgs[swiper.realIndex]);
  };

  useEffect(() => {
    console.log(swiper);
    if (swiper) {
      if (showTycModal) swiper.autoplay.pause();
      else swiper.autoplay.run();
    }
  }, [showTycModal]);

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

  if (!props.flag) imgs = banners.desktop_slide_list.filter(BannerFilter);
  else imgs = banners.mobile_slide_list.filter(BannerFilter);

  const modalGenerator = () => {
    return (
      <>
        <Modal
          // onWheel={tycScrollHandler}
          centered
          show={showTycModal}
          onHide={() => setShowTycModal(false)}
          contentClassName="terms-tyc"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="test">
                <h5>Términos y condiciones</h5>
                <h5>{currentBannerName}</h5>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {currentTycType ? tycGenerator(currentTycType) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setShowTycModal(false)}
              className="accept-btn"
            >
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  const tycGenerator = (type) => {
    let term = null;
    for (let i = 0; i < terms.length; i++) {
      if (terms[i].type === type) term = terms[i];
    }
    // console.log(term);
    return (
      <ol style={{ maxHeight: "50vh", overflowY: "scroll" }}>
        {term.ol.map((li, k) => (
          <li key={k}>
            {li.bolded ? <strong>{li.bolded}</strong> : null}
            {li.text}
            {li.inner ? (
              <ul>
                {li.inner.map((li2, k2) => (
                  <li key={k2}>{li2}</li>
                ))}
              </ul>
            ) : null}
            {li.table ? (
              <Table bordered className="mt-2">
                <thead>
                  <tr>
                    {li.table.th.map((h, k) => (
                      <th key={k}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {li.table.tr.map((tr, i) => (
                    <tr key={i}>
                      {tr.map((td, j) => (
                        <td key={j}>{td}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : null}
          </li>
        ))}
        {/* <Button>Accept</Button> */}
      </ol>
    );
  };

  return (
    <div id="carousel-section">
      <Swiper
        onSlideChange={(swiper) => indexHandler(swiper)}
        modules={[Pagination, EffectFade, Autoplay, Lazy]}
        pagination={{ clickable: true }}
        effect={"fade"}
        lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
        autoplay={{ delay: 3250, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        {imgs.map((item, index) => (
          <SwiperSlide key={index}>
            <NavLink href={ctaLink}>
              <img src={item.image} alt={item.img_alt} />
            </NavLink>

            {!props.flag ? (
              <div id="des-reg">
                <Button
                  className="central-regis gl-effect"
                  href={ctaLink}
                  rel={"nofollow"}
                >
                  {ctaText}
                  <FontAwesomeIcon icon={faAngleRight} />
                </Button>

                {item.tycType || item.tycLink ? (
                  <span
                    className="tyc"
                    onClick={() => setShowTycModal(true)}
                    // href={item.tycLink ? item.tycLink : "#"}
                  >
                    Términos y condiciones
                  </span>
                ) : null}
              </div>
            ) : (
              <>
                {item.tycType || item.tycLink ? (
                  <div className="mob-tyc">
                    <span
                      className="tyc"
                      onClick={() => setShowTycModal(true)}
                      // href={item.tycLink ? item.tycLink : "#"}
                    >
                      Términos y condiciones
                    </span>
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
      {props.flag ? <SlideButton regis={ctaLink} ctaText={ctaText} /> : null}
      {modalGenerator()}
    </div>
  );
}
export default MySwiper;
