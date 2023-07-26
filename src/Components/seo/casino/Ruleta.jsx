import Navigations from "../Navigations";
import Floating from "../Floating";
import {
  Container,
  Accordion,
  Row,
  Col,
  NavLink,
  Button,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TableOfContents from "../TableOfContents";

export default function Ruleta(props) {
  const game_prefix = "https://m.codere.pa/deportes/#/CasinoPage?playgame=";

  const title = "Juega ahora a la mejor Ruleta Online en Panamá  | Codere® ";
  const description =
    "El Crown Casino Panamá, trae ahora uno de los juegos más populares de todos los tiempos, las famosas mesas de ruleta. Juega en línea y diviértete girando.";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo obtener el bono de Casino Codere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sigue atento a nuestras publicaciones para visualizar nuestras mejores promociones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto paga el pleno en la ruleta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apostar a número o pleno paga 36X1.",
        },
      },
    ],
  };

  const top_par = {
    h1: "Juega en la Ruleta Online de Casino Codere",
    p: "En esta Guía de apuestas encontrarás las respuestas a las preguntas más comunes sobre uno de los juegos de mesa más antiguos y divertidos en Casino, la ruleta. Entre ellas, las mejores combinaciones, como jugar, los tipos de apuesta y mucho más! ¡Atrévete a conocer la adrenalina con tus apuestas en Codere!",
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "Gran variedad de títulos para jugar ruleta en línea",
      id: "gran",
    },
    {
      title: "5 Tipos de apuestas y pagos en la ruleta",
      id: "tipos",
    },
    {
      title: "Recomendaciones para jugar",
      id: "recomendaciones",
    },
    {
      title: "¿Cómo saber a qué apostar en la Ruleta?",
      id: "como_saber",
    },
    {
      title: "Preguntas frecuentes sobre el Casino Online",
      id: "preguntas",
    },
  ];

  // Games Data
  const live_games = [
    {
      name: "European Roulette 10c Min",
      img: "PRPEuropeanRoulette10cMin_Square",
      sponsor: "PRP",
    },
    {
      name: "First Person Roulette",
      img: "EVGFirstPersonRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "American Roulette 10c Min",
      img: "PRPAmericanRoulette10cMin_square",
      sponsor: "PRP",
    },
    {
      name: "Live Roulette",
      img: "EVGLiveRoulette_square",
      sponsor: "EVG",
    },
    {
      name: "Live American Roulette",
      img: "EVGLiveAmericanRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "Double Ball Roulette",
      img: "EVGDoubleBallRoulette_square",
      sponsor: "EVG",
    },
  ];

  const gran = {
    id: "gran",
    h2: "Gran variedad de títulos para jugar ruleta en líne",
    inner: [
      {
        h3: "Europea",
        p: "Es una variación del juego clásico. Tiene 37 divisiones numeradas del 1 al 36, más un 0 (cero). Los números del 1 al 36 están coloreados alternativamente en rojo y negro, mientras que el 0 está en verde. En cada ronda del juego, la ruleta gira en una dirección y la bola blanca en la dirección opuesta hasta que la bola se detiene en una de las casillas.",
      },
      {
        h3: "Americana High Stakes:",
        p: "Otra variación del juego clásico. Tiene 38 casillas numeradas del 0 al 36, más un 00 (doble cero). Los números del 1 al 36 se colorean alternativamente de rojo y negro, mientras que el 0 y el 00 son verdes.",
      },
      {
        h3: "Americana",
        p: "La American Roulette tiene 38 divisiones numeradas del 0 al 36, más un 00 (doble cero). Los números del 1 al 36 se colorean alternativamente de rojo y negro, mientras que el 0 y el 00 son verdes.",
      },
      {
        h3: "Europea High Stake",
        p: "Tiene 37 divisiones numeradas del 1 al 36, más un 0 (cero). Los números del 1 al 36 están coloreados alternativamente en rojo y negro, mientras que el 0 está en verde.",
      },
    ],
  };
  const tipos = {
    id: "tipos",
    h2: "5 tipos de apuestas y pagos en la ruleta",
    p: "El juego de ruleta tiene diferentes tipos de apuestas y formas de armar una buena jugada o jugada segura, algunas de estas jugadas son:",
    inner: [
      {
        bolded: "Apuestas suertes sencillas:",
        p: "Son las apuestas más conocidas y las más fáciles de jugar y se paga 2X1. Se basa apostar a Color( Rojo/Negro), Par/Impar y Falta/Pasa. Si el cae cero y no es uno de los elegidos, la apuesta quedaría completamente retenida a favor de la banca o se puede recuperar la mitad de lo que se ha jugado en función del juego que se esté realizando.",
      },
      {
        bolded: "Apuestas múltiples:",
        p: "Tanto la Francesa y Americana utilizan la misma manera de distribuir los números a lo largo del cilindro. Al ser distribuidos así, existen muchas opciones: vecinos del cero “son 17 números vecinos al número cero incluyendo el cero”, el cero y sus vecinos “son 17 números con 10 fichas”, huérfanos “son 8 números con 5 fichas o con 8 fichas” y tercios “son 6 fichas a 12 números”.",
      },
      {
        bolded: "Apuestas finales:",
        p: "Esta jugada se trata en apostar a un conjunto de números de la misma terminación. Un ejemplo podría ser una apuesta a todos los números que acaban en 3 “3, 13, 23, 33”",
      },
    ],
  };

  const recomendaciones = {
    h2: "Recomendaciones para jugar​",
    p: [
      "La mayoría de los jugadores nuevos quieren saber el secreto para ganar. Pero la ruleta se basa en probabilidad y existen algunas estrategias que un jugador puede aplicar para mejorar sus probabilidades.",
      "Algunas estrategias se centran en la apuesta. Uno de los métodos más conocidos se llama la estrategia de Martingale. Cuando se juega Martingale, los jugadores mantienen una constante en su apuesta. Cada vez que pierden una ronda, doblan sus apuestas perdidas. Por ejemplo, una apuesta de $10.000 se convierte en una apuesta de $20.000 Martingale.",
    ],
  };

  const como_saber = {
    id: "como",
    h2: "¿Cómo saber a qué apostar en la Ruleta?",
    sub: [
      {
        p: "En el juego de la ruleta existen dos caminos efectivos para apostar, elegir entre la apuesta externa y la apuesta interna.",
      },
      {
        p: "La apuesta externa te brinda altos porcentajes de probabilidad de que tu jugada sea beneficiosa ya que tienes menos riesgo. Otro punto a resaltar sería que te asegura a corto plazo ganancias en cada una de tus jugadas siempre y cuando no intentes utilizar esta jugada a largo plazo.",
      },
      {
        p: "Existe una clasificación de las principales apuestas externas que serian:",
      },
      {
        bolded: "Apuestas Altas y Bajas: ",
        p: "Con los números bajos las apuestas son del número 1 al 18. Y las apuestas con los números altos son entre el 19 y el 36. Apuestas al Rojo y Negro: Realizas tus apuestas al color que consideres que es tu pronostico. Par e Impar: Las apuestas en esta jugada se hacen en base a números pares o impares. Docena: En esta jugada da cierto porcentaje certero de ganancia ya que realizas una selección de 12 números para realizar tu apuesta. Apuesta de Docena: En esta jugada las probabilidades de ganancias son mucho más certeras ya que le apuestas a toda una columna de números.",
      },
      {
        p: "Las apuestas internas en la ruleta si tienen un mayor riesgo pero a la vez ese alto riesgo trae grandes beneficios.",
      },
      {
        p: "Esta es la clasificación de las apuestas internas:",
      },
      {
        bolded: "Apuesta Directa: ",
        p: "Realizas una apuesta a cualquier número. Apuesta Dividida: Realizas una apuesta combinada seleccionando dos números. Apuesta de Calle: Realizas una apuesta combinando tres números consecutivos.",
      },
      {
        bolded: "Apuesta de Esquina: ",
        p: "Debes realizar una apuesta combinando 4 números. Apuesta Base: Debes hacer una apuesta de combinación de 5 números. Apuesta Lineal: Realizas una apuesta de 6 números en dos filas.",
      },
    ],
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes:",
    sub: [
      {
        h3: "¿Cómo obtener el bono de Casino Codere?",
        p: "Sigue atento a nuestras publicaciones para visualizar nuestras mejores promociones.",
      },
      {
        h3: "¿Cuánto paga el pleno en la ruleta?",
        p: "Apostar a número o pleno paga 36X1.",
      },
    ],
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="https://www.codere.pa/casino/ruleta" />
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      <Navigations index={props.index} type={1} />
      <Floating text="!Las mejores Ruletas!" juega={true} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.pa/seopages/casino/assets/ruleta/${
            props.flag ? "M" : "D"
          }-Header.webp)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container style={{ color: "#fff" }}>
        <h1 className="header mt-4 mb-3">{top_par.h1}</h1>
        <p>{top_par.p}</p>

        {/* Table */}
        {!props.flag ? (
          <TableOfContents table={table_of_contents_list} />
        ) : null}
        {/* Games */}

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

        <h2 id={gran.id} className="mt-4 mb-3">
          {gran.h2}
        </h2>
        <Accordion defaultActiveKey="0" flush>
          {gran.inner.map((game, k) => (
            <Accordion.Item eventKey={k} key={k}>
              <Accordion.Header style={{ color: "#79c000" }} as={"h3"}>
                {game.h3}
              </Accordion.Header>
              <Accordion.Body as={"p"}>{game.p}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <h2 id={tipos.id} className="mt-4 mb-3">
          {tipos.h2}
        </h2>
        {tipos.inner.map((context, k) => (
          <div key={k}>
            <h3 style={{ color: "#79c000" }}>{context.h3}</h3>
            <p>{context.p}</p>
          </div>
        ))}

        <h2 id={recomendaciones.id} className="mt-4 mb-3">
          {recomendaciones.h2}
        </h2>
        {recomendaciones.p.map((txt, k) => (
          <p key={k}>{txt}</p>
        ))}

        <h2 id={como_saber.id} className="mt-4 mb-3">
          {como_saber.h2}
        </h2>
        {como_saber.sub.map((s, k) => (
          <p key={k}>
            {s.bolded ? <strong>{s.bolded}</strong> : null}
            {s.p}
          </p>
        ))}

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
