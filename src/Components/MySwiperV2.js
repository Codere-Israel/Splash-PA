import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, NavLink, Table } from "react-bootstrap";
// import Timer2 from "./Timer2.0";
import banners from "../JSON/data.json";
import { useEffect, useState } from "react";
import terms from "../JSON/tyc.json";
import axios from "axios";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// var imgs = [];

// const regis = "https://m.codere.pa/deportespanama/#/RegistroPAPage";

function MySwiper({ device }) {
  const [imgs, setImgs] = useState([]);
  const [liveBanners, setLiveBanners] = useState([]);

  const [swiper, setSwiper] = useState(null);
  const [currentTycType, setCurrentTycType] = useState(null);
  const [currentBannerName, setCurrentBannerName] = useState("");
  const [showTycModal, setShowTycModal] = useState(false);
  const [ctaText, setCtaText] = useState("Regístrate");
  const [ctaLink, setCtaLink] = useState(
    "https://m.codere.pa/deportespanama/#/RegistroPAPage"
  );

  const indexHandler = (swiper) => {
    setSwiper(swiper);

    try {
      setCtaText(liveBanners[swiper.realIndex].ctaText);
      setCtaLink(liveBanners[swiper.realIndex].ctaURL);
    } catch (error) {}

    console.log(liveBanners[swiper.realIndex].tycType);
    if (liveBanners[swiper.realIndex].tycType)
      setCurrentTycType(liveBanners[swiper.realIndex].tycType);
    else setCurrentTycType("");
    if (liveBanners[swiper.realIndex].tycTitle)
      setCurrentBannerName(liveBanners[swiper.realIndex].tycTitle);
    else setCurrentBannerName("");
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER || "http://localhost:5001"}/prd/panama`
      )
      .then((res) => {
        let x = res.data[0].slide_list.filter(BannerFilter);
        setImgs([...x]);

        setLiveBanners(
          x.reduce((acc, obj) => {
            const tempBanner = {
              ...obj,
              image: obj.image.replace("xxx", device ? "mobile" : "desktop"),
            };
            acc.push(tempBanner);
            return acc;
          }, [])
        );
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let tempList = imgs.reduce((acc, obj) => {
      const tempBanner = {
        ...obj,
        image: obj.image.replace("xxx", device ? "mobile" : "desktop"),
      };
      acc.push(tempBanner);
      return acc;
    }, []);

    setLiveBanners([...tempList]);
  }, [device]);

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

  const modalGenerator = () => {
    return (
      <>
        <Modal
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
            {currentTycType && tycGenerator(currentTycType)}
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
    <div
      style={{ minHeight: `${device ? "75vh" : "55vh"}` }}
      id="carousel-section"
    >
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
        {liveBanners.map((item, index) => (
          <SwiperSlide key={index}>
            <NavLink href={ctaLink}>
              <img src={item.image} alt={item.img_alt} />
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
      {!device ? (
        <div id="des-reg">
          <Button
            href={ctaLink}
            className="central-regis gl-effect"
            rel={"nofollow"}
          >
            {ctaText}
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>

          {currentTycType && (
            <span className="tyc" onClick={() => setShowTycModal(true)}>
              Términos y condiciones
            </span>
          )}
        </div>
      ) : (
        <div>
          {currentTycType && (
            <div className="mob-tyc">
              <span className="" onClick={() => setShowTycModal(true)}>
                Términos y condiciones
              </span>
            </div>
          )}
          <SlideButton regis={ctaLink} ctaText={ctaText} />
        </div>
      )}
      {modalGenerator()}
    </div>
  );
}
export default MySwiper;
