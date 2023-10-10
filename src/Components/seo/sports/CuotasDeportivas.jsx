import { Button, Container, Card, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Floating from "../Floating";
import { useEffect } from "react";
import axios from "axios";

export default function CuotasDeportivas(props) {
  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_AFFILIATE_API, {
  //       headers: {
  //         CodereAffiliateApiKey: process.env.REACT_APP_AFFILIATE_KEY,
  //         CodereAffiliateApiSecret: process.env.REACT_APP_AFFILIATE_SECRET,
  //       },
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const directions = ["left", "down", "right", "left"];
  const prefix = "https://www.codere.pa/seopages/cuotas/";

  const title = "Cuotas Deportivas » Fútbol / NFL / F1 / UFC | Codere®";
  const description =
    "Conoce acerca del mundo de las apuestas deportivas online, juega en línea desde España y sigue los partidos de las competencias más importantes";
  const indexes = [
    {
      img: "soccer-promo",
      url: "/cuotas-deportivas/apuestas-futbol",
      h2: "Apuestas de fútbol",
      game: "Fútbol",
    },
    {
      img: "nfl-promo",
      url: "/cuotas-deportivas/apuestas-nfl-futbol-americano",
      h2: "Apuestas NFL",
      game: "NFL",
    },
    {
      img: "mlb-promo",
      url: "/cuotas-deportivas/apuestas-beisbol-grandes-ligas",
      h2: "Apuestas béisbol",
      game: "MLB",
    },
  ];

  const cardGenerator = (g, i) => {
    return (
      <Col md={4} xs={6} key={i}>
        <Card className={`eventos_card`}>
          <Link style={{ textDecoration: "unset" }} to={g.url}>
            <Card.Header as={"h2"}>{!props.flag ? g.h2 : g.game}</Card.Header>
          </Link>
          <Card.Body>
            <LazyLoadImage src={`${prefix}${g.img}.jpg`} />
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
        <link rel="canonical" href="https://www.codere.pa/cuotas-deportivas" />
        <meta name="description" content={description} />
      </Helmet>
      <div id="eventos">
        <Floating text="Cuotas Deportivas" />
        <div
          className="top-bg-seo"
          style={{
            backgroundImage: `url(https://www.codere.pa/assets/seo/general-${
              !props.flag ? "desktop" : "mobile"
            }.jpg)`,
            backgroundSize: "cover",
          }}
        ></div>

        <h1 style={{ color: "#fff", textAlign: "center", padding: "1.5rem" }}>
          Los mejores Eventos Deportivos estan en Codere
        </h1>
        <Container className="eventos-container" style={{ maxWidth: "75%" }}>
          <Row>
            {indexes.map((g, i) => {
              return cardGenerator(g, i);
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
