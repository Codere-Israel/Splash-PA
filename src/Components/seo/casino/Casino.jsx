import Navigations from "../Navigations";
import { useState } from "react";
import Floating from "../Floating";
import {
  Image,
  Placeholder,
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

export default function Casino(props) {
  const game_prefix = "https://m.codere.pa/deportes/#/CasinoPage?playgame=";

  const title = "Casino Online regulado en Panamá 🎰 | Codere®";
  const description =
    "Juega en línea en el Crown Casino de Panamá, encuentra la mejor selección de juegos online, aprovecha nuestras promociones y diviértete a lo grande aquí.";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es la apuesta mínima en un casino online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La apuesta mínima para el casino online de Codere varia depende del tipo de juego que elijas. Podrás encontrar juegos de ruleta con importes mínimos de 10c, Slots desde 50c y Blackjack desde $1.<",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué diferencia hay entre el casino físico y el casino online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En un Casino en línea puedes jugar en cualquier lugar y en cualquier momento. Desde la comodidad de tu casa, a un clic de distancia.",
        },
      },
    ],
  };

  const top_par = {
    h1: "Casino en Panamá: Los mejores juegos te están esperando",
    p: "El casino Online de Codere te espera. Conoce todos nuestros juegos y vive una experiencia inmersiva con los mejores juegos de CrowN Casino en Panamá ahora también en línea. Te invitamos a disfrutar de lo mejor del entretenimiento desde la comodidad de tu casa, en tu sala o tu recámara a solo un click de distancia donde te regalaremos las mejores emociones en los mejores juegos de Slots, Ruletas y Blackjack.",
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "¿Cómo se juega en el Casino Online de Codere?",
      id: "como_juega",
    },
    {
      title: "Los mejores juegos de Casino están en Codere",
      id: "mejores",
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

  // Table
  const table = [
    ["🏆 Establecido", "2008"],
    ["🎰Juegos ofrecidos", "80"],
    ["✔️ Moneda", "Dólar"],
    ["💰Depósito mínimo", "$20"],
    [
      "💳 Formas de Pago",
      "Transferencia Bancaria, Punto Pago, Punto Pago App (Tarjeta de Credito y Debito), Depósitos en los CrowN Casinos",
    ],
  ];

  // Games Data
  const live_games = [
    {
      name: "First Person Blackjack",
      img: "EVGFirstPersonBlackjack_Square",
      sponsor: "EVG",
    },
    {
      name: "Blackjack",
      img: "PRPBlackjack_Square",
      sponsor: "PRP",
    },
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
      name: "Dragon Tiger",
      img: "EVGDragonTiger_Square",
      sponsor: "EVG",
    },
    {
      name: "EVG Fan Tan",
      img: "EVGFanTan_Square",
      sponsor: "EVG",
    },
    {
      name: "EVG Bacara Rapido",
      img: "EVGBacaraRapido_Square",
      sponsor: "EVG",
    },
    {
      name: "European Roulette 10c Min",
      img: "PRPEuropeanRoulette10cMin_Square",
      sponsor: "PRP",
    },
    {
      name: "EVG Baccarat Control Squeeze",
      img: "EVGBaccaratControlSqueeze_Square",
      sponsor: "EVG",
    },
    {
      name: "EVG Ruleta en Espanol",
      img: "EVGRuletaenEspanol_Square",
      sponsor: "EVG",
    },
    {
      name: "EVG First Person Roulette",
      img: "EVGFirstPersonRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "EVG Ruleta Relampago en Vivo",
      img: "EVGRuletaRelampagoenVivo_Square",
      sponsor: "EVG",
    },
  ];

  const como_juega = {
    id: "como_juega",
    h2: "¿Cómo se juega en el Casino Online de Codere?",
    p: "Para disfrutar de nuestros juegos de casino, solo regístrate aquí y selecciona la opción casino, donde podrás encontrar nuestra diversa variedad de juegos de Casino, entre ellos, Slots, Blackjack y ruleta.",
  };

  const ventajas = {
    h2: "Ventajas de jugar Online",
    p: [
      "Juega desde cualquier lugar, en cualquier momento y desde cualquier dispositivo. No hay necesidad de salir de casa cuando juegas en un casino en línea.",
      "Diseño del juego. En línea se ofrece una experiencia alusiva al juego ya que presentan hermosos gráficos en 3D con infinidad de opciones temáticas.",
      "Ofertas ilimitadas, los casinos físicos tienen una cantidad limitada de espacio físico, lo que significa que la variedad de juegos que ofrecen están restringidos por el área de sus pisos.",
    ],
  };

  const como_deopsitar = {
    h3: "¿Cómo depositar plata en el casino online?",
    p: "Una vez que te hayas registrado en nuestro sitio web. Dirígete a tu perfil, opción Cajero, opción depósitos para ingresar fondos a tu cuenta. Elige el método de depósito más adecuado para ti y empieza a disfrutar de la diversión",
  };
  const como_puedo = {
    h3: "¿Cómo puedo cobrar?",
    p: "Puedes realizar cobros de los fondos que dispones en tu cuenta por medio de transferencia bancaria con un importe mínimo de $50, o realizar retiros las 24 horas del día en cualquiera de nuestros casinos Crown.",
  };

  const mejores = {
    id: "mejores",
    h2: "Los mejores juegos de Casino están en Codere",
    p: "El casino de Codere te invita a conocer sus mejores juegos! Ingresa a tus juegos favoritos y conoce mucho más sobre sus temáticas, estrategias y como disfrutar de la mejor experiencia de juego.",
    games: [
      {
        h3: "Jackpot Fortunes",
        p: "Un premio mayor de la fortuna te espera en esta cautivadora tragamonedas con temática asiática. Repleto de tesoros dorados, quedarás hipnotizado desde el primer giro. En su viaje de juego, la acción nunca se detiene con jackspots para ganar",
      },
      {
        h3: "Dragons of the North MegaWays",
        p: "Es una tragamonedas de aventura y fantasía de 117,649 Megaways rebosante de emoción. Manténgase alerta para el Golden Dragon Egg. Lo que desencadena funciones ganadoras.",
      },
      {
        h3: "American Roulette",
        p: "La Ruleta Americana es una variación del clásico juego de ruleta, y la Rueda tiene 38 divisiones que están numeradas del 0 al 36, más un 00 (doble cero). Los números del 1 al 36 se colorean alternativamente de rojo y negro, mientras que el 0 y el 00 son de color verde. Ruleta Americana 10c Min, permite que disfrutes de todas las emociones y el entretenimiento que este legendario juego tiene para ofrecer por tan solo 10c para apostar.",
      },
      {
        h3: "Blackjack",
        p: "El blackjack es un juego de mesa de casino clásico que se remonta a la década de 1700 y sigue siendo un firme favorito entre los jugadores hasta el día de hoy. Este juego legendario no se trata simplemente de suerte, sino que requiere habilidad y estrategia. También conocido como 21, el objetivo del juego es vencer la mano del crupier sin que tus cartas sumen más de 21.",
      },
      {
        h3: "King Kokos Quest",
        p: "Aventúrate en lo profundo de la jungla para descubrir una ciudad mística de simios muy avanzados que está gobernada por el rey Koko. Este lugar mágico te cautivará, especialmente los inmensos tesoros que alberga.",
      },
    ],
  };

  const porque_elegir = {
    id: "porque",
    h2: "¿Por qué elegir jugar en el Casino Online de Codere?",
    p: "Porque en Codere tenemos la mejor variedad de juegos de casino y las mejores promociones para hacer que tu experiencia sea la que más te beneficie. Entra en el mejor casino en línea, elige entre la diversa opción de juegos de slots que tendrás al alcance de tu mano, descubre las últimas novedades que han llegado al mercado y disfruta jugando con total seguridad y transparencia.",
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre el Casino Online",
    sub: [
      {
        h3: "¿Cuál es la apuesta mínima en un casino online?",
        p: "La apuesta mínima para el casino online de Codere varia depende del tipo de juego que elijas. Podrás encontrar juegos de ruleta con importes mínimos de 10c, Slots desde 50c y Blackjack desde $1.",
      },
      {
        h3: "¿Qué diferencia hay entre el casino físico y el casino online?",
        p: "En un Casino en línea puedes jugar en cualquier lugar y en cualquier momento. Desde la comodidad de tu casa, a un clic de distancia.",
      },
    ],
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="https://www.codere.pa/casino" />
        <meta name="description" content={description} />

        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      <Floating text="¡El mejor Casino!" juega={true} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.pa/seopages/casino/assets/casino/${
            props.flag ? "M" : "D"
          }-Header.jpg)`,
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

        <h2 id={como_juega.id} className="mt-4 mb-3">
          {como_juega.h2}
        </h2>
        <p>{como_juega.p}</p>
        {/* Games */}

        <Row className="casino-row">
          {live_games
            .slice(0, !props.flag ? live_games.length : 4)
            .map((game, k) => (
              <Col lg={2} md={4} xs={6} key={k}>
                <NavLink
                  rel="nofollow"
                  href={`${game_prefix}${game.sponsor} ${game.name}`}
                >
                  <div className="cas-game-wrapper">
                    <LazyLoadImage
                      className="casino-game-img shining"
                      src={
                        "https://www.codere.pa/lobby_tiles/" + game.img + ".jpg"
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

        <h3>{ventajas.h2}</h3>
        {ventajas.p.map((v, k) => (
          <p key={k}>{v}</p>
        ))}

        <h3>{como_deopsitar.h3}</h3>
        <p>{como_deopsitar.p}</p>

        <h3>{como_puedo.h3}</h3>
        <p>{como_puedo.p}</p>

        <h2 id={mejores.id} className="mt-4 mb-3">
          {mejores.h2}
        </h2>
        <p>{mejores.p}</p>
        <Accordion
          // style={{ width: "80%", margin: "auto" }}
          defaultActiveKey="0"
          flush
        >
          {mejores.games.map((game, k) => (
            <Accordion.Item eventKey={k} key={k}>
              <Accordion.Header as={"h3"}>{game.h3}</Accordion.Header>
              <Accordion.Body as={"p"}>{game.p}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <h2 id={porque_elegir.id} className="mt-4 mb-3">
          {porque_elegir.h2}
        </h2>
        <p>{porque_elegir.p}</p>

        <Table striped bordered hover variant="dark" className="seotable">
          <tbody>
            {table.map((tr, i) => (
              <tr key={i}>
                {tr.map((td, j) => (
                  <td key={j}>{td}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>

        <Accordion>
          <h2 id={preguntas.id} className="mt-4 mb-3">
            {preguntas.h2}
          </h2>
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
