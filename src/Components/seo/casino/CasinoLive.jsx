import Navigations from "../Navigations";
import { useState } from "react";
import Floating from "../Floating";
import {
  Container,
  Accordion,
  Row,
  Col,
  NavLink,
  Table,
  Button,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TableOfContents from "../TableOfContents";

export default function CasinoLive(props) {
  const game_prefix = "https://m.codere.pa/deportes/#/CasinoPage?playgame=";

  const title = "Juega Casino en Vivo desde Panamá | Codere®";
  const description =
    "Disfrutar de toda la experiencia real de un Casino desde tu casa, platica con croupiers y otros jugadores en las mejores mesas de casino en línea de Panamá.";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un live casino?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los juegos de casino en vivo te brindan una experiencia real y única en la que puedes vivir toda la experiencia de un casino real.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo jugar vía streaming desde mi dispositivo celular?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con el casino en vivo de Codere puedes disfrutar de todo el casino desde cualquier de tus dispositivos desde cualquier parte. Solo debes de iniciar sesión y ganar.",
        },
      },
    ],
  };

  const top_par = {
    h1: "Juega casino en vivo en nuestras mesas online",
    p: "En el Casino en Vivo de Codere.pa podrás disfrutar de toda la experiencia real de un Casino online desde cualquiera de tus dispositivos móviles y la comodidad de tu hogar. Podrás disfrutar de ruletas, blackjack, baccarat y muchos juegos más.",
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "Vive la experiencia de jugar en mesas en vivo",
      id: "viva",
    },
    {
      title: "Elige entre los mejores Juegos de Casino",
      id: "elige",
    },
    {
      title: "¿Por qué elegir jugar en el Casino Online de Codere?",
      id: "porque",
    },
    {
      title: "Preguntas frecuentes sobre el Casino Online",
      id: "preguntas",
    },
  ];

  // Games Data
  const live_games = [
    {
      name: "Live No commission Baccarat",
      img: "EVGLiveNocommissionBaccarat_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Baccarat",
      img: "EVGLiveBaccarat_Square",
      sponsor: "EVG",
    },
    {
      name: "Ruleta Relampago en Vivo",
      img: "EVGRuletaRelampagoenVivo_Square",
      sponsor: "EVG",
    },
    {
      name: "Ruleta En Vivo",
      img: "EVGRuletaEnVivo_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Roulette",
      img: "EVGLiveRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Lightning Roulette",
      img: "EVGLiveLightningRoulette_Square",
      sponsor: "EVG",
    },
  ];

  const viva = {
    id: "viva",
    h2: "Vive la experiencia de jugar en mesas en vivo",
    p: "Para toda persona que sea amante de todo el ambiente del casino, el Casino en Vivo de Codere te permite vivir cada una de esas experiencias desde cualquier de tus dispositivos móviles. Solo debes de registrarte, iniciar sesión y tu decides que jugar, dónde jugar y cómo jugar. Todo a un toque de distancia.",
    inner: [
      {
        h3: "Interactúa con los dealers en vivo",
        p: "Con el Casino en vivo de Codere podrás interactuar, oír sus consejos e incluso chatear directamente con los dealers como si estuvieras en un casino real.",
      },
      {
        h3: "Chatea con otros jugadores",
        p: "En el Casino en vivo de Codere aparte de poder disfrutar de toda la experiencia que ya te hemos comentado, también podrás chatear con el resto de los jugadores de las mesas de manera directa y ser leídos por los mismos.",
      },
    ],
  };
  const elige = {
    id: "elige",
    h2: "Elige entre los mejores Juegos de Casino",
    p: "En el Casino en vivo de Codere te traemos todo tipo de juegos, pero sin pensarlo la mejor experiencia que te podemos recomendar es nuestro juego de Crazy Time. Aparte de nuestros múltiples juegos clásicos en vivo como Roulette Live, Craps Live, Infiniti Blackjack y Baccarat Live..",
    inner: [
      {
        h3: "Live Roulette:",
        p: "Uno de los juegos más aclamados por los fanáticos del casino llega a un solo click de distancia. Podrás vivir toda la experiencia de la ruleta con hasta la asistencia del crupier, todo desde tu celular.",
      },
      {
        h3: "Live Blackjack:",
        p: "Es un juego exclusivo de Blackjack donde podrás disfrutar en vivo de un crupier y de personas jugando en la misma mesa donde podrás interactuar tanto con ellos como con el crupier en tiempo real.",
      },
      {
        h3: "Live Auto-Roulette:",
        p: "Es una ruleta exclusiva de Codere donde podrás encontrar un crupier y un chat en vivo para que vivas de manera auténtica la experiencia de una ruleta en el casino.",
      },
      {
        h3: "Live VIP Roulette:",
        p: "En esta ruleta exclusiva de Codere podrás disfrutar de uno de los clásicos juegos de casino pero de una manera VIP, con un crupier y un casino con estilo de alto nivel.",
      },
      {
        h3: "Live Football Studio:",
        p: "En este juego podrás vivir la experiencia de una Blackjack al estilo de un partido de fútbol donde podrás apoyar al equipo de casa o al visitante. Todo esto a un toque de distancia.",
      },
      {
        h3: "Live Craps:",
        p: "Para los amantes de los juegos clásicos de casino, Codere trae a cualquier de tus dispositivos móviles el juego Craps para que tires los dados, te diviertas y ganes desde cualquier parte.",
      },
      {
        h3: "Live Monopoly Live:",
        p: "Codere trae de manera exclusiva la ruleta de Monopoly a tus dispositivos móviles donde solo debes de escoger tu jugada y disfrutar de las múltiples opciones de la ruleta con toda la experiencia del clásico juego de Monopoly en tu celular.",
      },
      {
        h3: "Live Super Sic Bo:",
        p: "Diviértete jugando este clásico juego asiatico de casino donde solo debes de escoger la combinación de los dados ya sean altos o bajos y ganar.",
      },
      {
        h3: "Live Dream Catcher:",
        p: "Codere te trae la ruleta Dream Catcher donde solo debes de armar tu apuesta y disfrutar en vivo de las múltiples opciones y multiplicadores de esta mágica ruleta.",
      },
    ],
  };

  const porque_elegir = {
    id: "porque",
    h2: "¿Por qué elegir jugar en el Casino Online de Codere?",
    p: "El Casino Online aparte de poder vivir una experiencia exclusiva con cada uno de nuestros juegos con sus múltiples opciones, también podrás encontrar promociones semanales que mejoraran toda la diversión haciéndote ganar más.",
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre el Casino Online",
    sub: [
      {
        h3: "¿Qué es un live casino?",
        p: "Los juegos de casino en vivo te brindan una experiencia real y única en la que puedes vivir toda la experiencia de una casino real.",
      },
      {
        h3: "¿Puedo jugar vía streaming desde mi dispositivo celular?",
        p: "Con el casino en vivo de Codere puedes disfrutar de todo el casino desde cualquier de tus dispositivos desde cualquier parte. Solo debes de iniciar sesión y ganar.",
      },
    ],
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.pa/casino/casino-en-vivo"
        />
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      <Navigations index={props.index} type={1} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.pa/seopages/casino/assets/casino-live/${
            props.flag ? "M" : "D"
          }-Header.webp)`,
          backgroundSize: "cover",
        }}
      >
        <Floating text="¡El mejor casino En Vivo!" juega={true} />
      </div>

      <Container style={{ color: "#fff" }}>
        <h1 className="header mt-4 mb-3">{top_par.h1}</h1>
        <p>{top_par.p}</p>

        {/* Table */}
        {!props.flag ? (
          <TableOfContents table={table_of_contents_list} />
        ) : null}

        <h2 id={viva.id} className="mt-4 mb-3">
          {viva.h2}
        </h2>
        <p>{viva.p}</p>
        <Container>
          {viva.inner.map((v, k) => (
            <div key={k}>
              <h3 style={{ color: "#79c000" }}>{v.h3}</h3>
              <p>{v.p}</p>
            </div>
          ))}
        </Container>
        {/* Games */}

        <h2 id={elige.id} className="mt-4 mb-3">
          {elige.h2}
        </h2>
        <Row className="casino-row">
          {live_games
            .slice(0, !props.flag ? live_games.length : 4)
            .map((game, k) => (
              <Col lg={2} md={4} xs={6} key={k}>
                <NavLink href={`${game_prefix}${game.sponsor} ${game.name}`}>
                  <div className="cas-game-wrapper">
                    <LazyLoadImage
                      className="casino-game-img shining"
                      src={
                        "https://www.codere.es/lobby_tiles/" + game.img + ".jpg"
                      }
                    />
                    <div className="hvr">
                      <p>{game.name}</p>
                      <LazyLoadImage src="https://www.codere.pa/_catalogs/masterpage/codere/images/seoPages/jackpotsPlayHoverLogo.svg" />
                    </div>
                  </div>
                </NavLink>
              </Col>
            ))}
        </Row>

        {elige.inner.map((context, k) => (
          <div key={k}>
            <h3 style={{ color: "#79c000" }}>{context.h3}</h3>
            <p>{context.p}</p>
          </div>
        ))}

        <h2 id={porque_elegir.id} className="mt-4 mb-3">
          {porque_elegir.h2}
        </h2>
        <p>{porque_elegir.p}</p>

        <h2 id={preguntas.id} className="mt-4 mb-3">
          {preguntas.h2}
        </h2>

        <Accordion>
          {preguntas.sub.map((s, k) => (
            <Accordion.Item key={k} eventKey={k}>
              <Accordion.Header as={"h3"}>{s.h3}</Accordion.Header>
              <Accordion.Body as={"p"}>{s.p}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <Button
          href="https://m.codere.pa/deportespanama/#/RegistroPAPage"
          className="cas-reg-btn"
          rel="nofollow"
        >
          Regístrate
        </Button>
      </Container>
    </div>
  );
}
