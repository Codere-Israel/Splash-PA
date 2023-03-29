import { Button, Container, Card, Row, Col } from "react-bootstrap";
import "./eventos-styles.css";
import { Slide, Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigations from "./events/Navigations";
import Floating from "./Floating";
import { useEffect } from "react";

export const backTopTop = () => {
  return (
    <div className="scroll">
      <ScrollToTop smooth component={<FontAwesomeIcon icon={faChevronUp} />} />
    </div>
  );
};

export default function EventosDeportivos(props) {
  const directions = ["left", "down", "right"];
  const prefix = "https://www.codere.pa/assets/seo/";

  const title = "Apuesta en los mejores Eventos Deportivos | Codere®";
  const description = "Aprende acerca de los mejores eventos deportivos a nivel mundial junto el Casino Online #1 de Panamá y alistate para ganar eligiendo Codere";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué significa hándicap +5.5 en basquet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El hándicap de +5.5 consiste en atribuir o restar una serie de puntos a cada equipo. Al favorito se le restan y al no favorito se le suman. Es así cómo las diferencias en basketball  se “igualan” y se les añade emoción para apostar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es un back to back de la NBA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En la NBA es fundamental la estadística de los «Back-to-back». Su definición consiste en el rendimiento de los equipos cuando juegan dos (o más) partidos seguidos sin descanso entre días.",
        },
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = {
    top_games: [
      {
        img: "tenis-promo",
        url: "/eventos-deportivos/apuestas-grand-slam",
        h2: "Apuesta para el Grand Slam de Tenis",
        game: "Tenis",
      },
      {
        img: "balenco-promo",
        url: "/eventos-deportivos/apuestas-mundial-baloncesto",
        h2: "Apuesta para Mundial de Baloncesto",
        game: "Baloncesto",
      },
      {
        img: "f1-promo",
        url: "/eventos-deportivos/apuestas-grand-prix",
        h2: "Apuesta para el Grand prix",
        game: "Formula1",
      },
    ],
    bottom_games: [
      {
        img: "tenis-promo",
        url: "/eventos-deportivos/apuestas-grand-slam",
        h2: "Apuestapara el Grand Slam de Tenis",
      },

      {
        img: "balenco-promo",
        url: "/eventos-deportivos/apuestas-mundial-baloncesto",
        h2: "Apuestapara Mundial de Baloncesto",
      },

      {
        img: "f1-promo",
        url: "/eventos-deportivos/apuestas-grand-prix",
        h2: "Apuestapara el Grand prix",
      },
    ],
  };

  const cardGenerator = (g, i) => {
    return (
      <Col xl={4} xs={6} key={i}>
        <Card className={`eventos_card ${!props.flag ? "mb-4" : ""}`}>
          <Link style={{ textDecoration: "unset" }} to={g.url}>
            <Card.Header as={"h2"}>{!props.flag ? g.h2 : g.game}</Card.Header>
          </Link>
          <Card.Body>
            <Slide triggerOnce direction={directions[i]}>
              <LazyLoadImage src={prefix + g.img + ".jpg"} />
            </Slide>
          </Card.Body>
          <Card.Footer>
            <Link rel="nofollow" to={g.url}>
              <Button
                as="span"
                style={{
                  width: "100%",
                  fontWeight: 600,
                  borderRadius: "1rem",
                }}
              >
                VER INFORMACIÓN
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="http://www.codere.pa/eventos-deportivos" />
        <meta name="description" content={description} />
        <meta name="robots" content="noindex" />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>
      <div id="eventos">
        <div className="scroll">{backTopTop()}</div>
        <Navigations />
        <Floating text="Deportes En Vivo" />
        <Fade triggerOnce>
          <LazyLoadImage
            style={{ maxWidth: "100%" }}
            src={`${prefix}general-${!props.flag ? "desktop" : "mobile"}.jpg`}
          />
        </Fade>

        <h1 style={{ color: "#fff", textAlign: "center", padding: "1.5rem" }}>
          Los mejores Eventos Deportivos estan en Codere
        </h1>
        <Container className="eventos-container">
          <Row>
            {data.top_games.map((g, i) => {
              return cardGenerator(g, i);
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
