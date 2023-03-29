import { Button, Nav, Container, Row, Col, Image } from "react-bootstrap";
import "./eventos-styles.css";
import { Slide, Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import ScrollToTop from "react-scroll-up";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const backTopTop = () => {
  return (
    <div className="scroll">
      <ScrollToTop smooth component={<FontAwesomeIcon icon={faChevronUp} />} />
    </div>
  );
};

export default function EventosDeportivos(props) {
  const prefix = "https://www.codere.pa/assets/seo/";
  const tenis_par =
    "¡Ven a vivir los mejores puntos con tusapuestas en Codere! Aquí encontrarás las respuestas a las preguntas más comunes sobreel tenis.";
  const basketball_par =
    "En la siguiente guía, encontrarás algunos consejos para que tu experiencia en Codere durante el mundial de Baloncesto, sea muchomás provechosa.";
  const formula_par =
    "En esta Guía de apuestas de la F1 encontrarás las respuestas a las pregunta más comunes sobre el deporte de mayor emoción automovilística.";
  const data = {
    games: [
      {
        img: "tenis-promo",
        url: "/eventos-deportivos/apuestas-grand-slam",
        h2: "Apuestapara el Grand Slam de Tenis",
        par: tenis_par,
      },

      {
        img: "balenco-promo",
        url: "/eventos-deportivos/apuestas-mundial-baloncesto",
        h2: "Apuestapara Mundial de Baloncesto",
        par: basketball_par,
      },

      {
        img: "f1-promo",
        url: "/eventos-deportivos/apuestas-grand-prix",
        h2: "Apuestapara el Grand prix",
        par: formula_par,
      },
    ],
  };

  const regular = (g, i) => {
    return (
      <Row key={i} className="mb-4">
        <Col xs={!props.flag ? 7 : 12}>
          <Slide delay={(i + 1) * 500} triggerOnce>
            <LazyLoadImage src={prefix + g.img + ".jpg"} />
          </Slide>
        </Col>
        <Col xs={!props.flag ? 5 : 12}>
          <Nav.Link href={g.url}>
            <h2>{g.h2}</h2>
          </Nav.Link>
          <p>{g.par}</p>
          <Button className="ver_btn" href={g.url} rel="nofollow">
            Ver información
          </Button>
        </Col>
      </Row>
    );
  };

  const flip = (g, i) => {
    return (
      <Row key={i} className="mb-4">
        <Col xs={!props.flag ? 5 : 12}>
          <Nav.Link href={g.url}>
            <h2>{g.h2}</h2>
          </Nav.Link>
          <p>{g.par}</p>
          <Button className="ver_btn" href={g.url} rel="nofollow">
            Ver información
          </Button>
        </Col>
        <Col xs={!props.flag ? 7 : 12}>
          {/* <Slide direction="right"> */}
          <Slide triggerOnce direction="right" delay={(i + 1) * 125}>
            <LazyLoadImage src={prefix + g.img + ".jpg"} />
          </Slide>
        </Col>
      </Row>
    );
  };

  return (
    <div id="eventos">
      <div className="scroll">{backTopTop()}</div>
      <Fade>
        <LazyLoadImage
          style={
            !props.flag
              ? { margin: "4rem 0 2rem 0", maxWidth: "100%" }
              : { margin: "3.2rem 0 2rem 0", maxWidth: "100%" }
          }
          src={prefix + "general.jpg"}
        />
      </Fade>
      <h1 style={{ color: "#fff", textAlign: "center" }}>
        Los mejores Eventos Deportivos estanen Codere
      </h1>
      <Container className="eventos-container">
        {data.games.map((g, i) => {
          return props.flag
            ? regular(g, i)
            : i % 2 === 0
            ? regular(g, i)
            : flip(g, i);
        })}
      </Container>
    </div>
  );
}
