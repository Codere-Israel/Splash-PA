import Navigations from "../Navigations";
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

export default function Slots({ device }) {
  const game_prefix = "https://m.codere.pa/deportes/#/CasinoPage?playgame=";

  const title = "Slots Online ✔ en Panamá  | Codere®";
  const description =
    "Ahora también puedes jugar a las tragamonedas, las clásicas maquinitas de casino en línea ✔, Crown Casino Panamá tiene la mejor selección para ti.";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo ganar en las slots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aprovecha los bonos, promociones y tiradas gratis.<ul><li>Fíjate en la tabla de pagos.</li><li>Evita las slots progresivas.</li><li>Empieza jugando con la apuesta mínima.<li>Aprovecha la apuesta máxima.</li></ul>",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántas líneas tienen las tragamonedas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente los slots de 5 rodillos ofrecen más líneas de pago que las clásicas de 3.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es el RTP en las tragamonedas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los RTP significan en inglés “retorno para el jugador”. Esta cifra se muestra como porcentaje que representa la cantidad de dinero que un jugador puede ganar en los slots del casino.",
        },
      },
    ],
  };

  const top_par = {
    h1: "¡Juega Slots en Codere! las mejores máquinas tragamonedas",
    p: "En esta Guía de apuestas de Slots encontrarás las respuestas a las preguntas más comunes sobre uno de los juegos de casino más famosos y llamativos. Entre ellas, las mejores combinaciones, como jugar, los tipos de apuesta y descripciones sobre nuestros mejores juegos! Disfruta de la emoción y temática de los mejores juegos de las máquinas tragamonedas en línea.",
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "¿Cómo jugar a las tragamonedas online?",
      id: "como_juega",
    },
    {
      title: "Ventajas de jugar en línea",
      id: "ventajas",
    },
    {
      title: "Recomendaciones para escoger los slots",
      id: "recomendaciones",
    },
    {
      title: "Los mejores slots online están en Codere",
      id: "mejores",
    },
    {
      title: "Tipos de juegos online",
      id: "tipos",
    },
    {
      title: "Preguntas frecuentes",
      id: "preguntas",
    },
  ];

  // Table
  const table = [
    ["Juego de slot 🎰", "Temática"],
    [
      "Wolf Riches",
      "El juego se basa en la antigua historia de los Pieles Roja de los EU.",
    ],
    [
      "Dragon of the North",
      "La temática del juego es en base a un dragón que cuida la entrada del castillo donde está el preciado trofeo.",
    ],
    [
      "King Koko",
      "La temática del juego es en base a King Kong cuidando el trofeo que está oculto dentro de la jungla.",
    ],
    [
      "Viking Glory",
      "La temática del juego es en base a la mitología vikinga y sus demás figuras históricas.",
    ],
    [
      "Fortune Dragon",
      "La temática de es en base a la mitología china y sus animales.",
    ],
    [
      "Phoenix Gold",
      "La temática de este juego es en base a el ave Fenix presentándote un tesoro muy deseado.",
    ],
  ];

  // Games Data
  const live_games = [
    {
      name: "Fishermans Bounty Deluxe",
      img: "PRPFishermansBountyDeluxe_Square",
      sponsor: "PRP",
    },
    {
      name: "Dynamite Riches Megaways",
      img: "EVGDynamiteRichesMegaways_Square",
      sponsor: "EVG",
    },
    {
      name: "Flamin 7s",
      img: "PRPFlamin7s_Square",
      sponsor: "PRP",
    },
    {
      name: "Dragons Fire Megaways",
      img: "EVGDragonsFireMegaways_Square",
      sponsor: "EVG",
    },
    {
      name: "Jade King",
      img: "PRPJadeKing_Square",
      sponsor: "PRP",
    },
    {
      name: "Wolf Riches",
      img: "PRPWolfRiches_Square",
      sponsor: "PRP",
    },
  ];

  const como_juega = {
    id: "como_juega",
    h2: "¿Cómo jugar a las tragamonedas online?",
    p: "Para jugar a las tragaperras online, necesitarás: Abrir una cuenta en el casino online que prefieras. Deposita crédito en tu cuenta de casino con, tarjeta de débito, paypal o utilizando otro método de pago. Decide a qué juego quieres jugar y comienza la aventura.",
  };

  const ventajas = {
    id: "ventajas",
    h2: "Ventajas de jugar en línea",
    p: "Principalmente es que no necesitas instalación de software ni dependes de que el dispositivo con el que te conectes cuente o no con las aplicaciones. Además puedes disfrutar de la magia del casino sin salir de casa.",
  };

  const recomendaciones = {
    id: "recomendaciones",
    h2: "Recomendaciones para escoger los slots​",
    p: "Alguno de los puntos que debes tener en cuenta antes de adentrarte en este gran mundo de las tragamonedas en línea son: aprovechar los bonos, promociones y tiradas gratis, siempre revisa la tabla de pagos de cada juego antes de iniciar, evita jugar los slots progresivos ya que es posible que ganar se te haga más complicado, si eres nuevo te recomendamos que empieces con una apuesta mínima para que te familiarices con todo y para algunos juegos aprovecha la apuesta máxima.",
  };

  const mejores = {
    id: "mejores",
    h2: "Los mejores slots online están en Codere",
    p: "Disfruta de los mejores juegos de las clásicas máquinas tragamonedas ahora en Codere Online, con muchísimas opciones de juegos podrás vivir la emoción de los lobos, dragones y hasta vikingos! Los mejores juegos de slots ya disponibles en el casino en línea número uno en Panamá:.",
  };

  const tipos = {
    id: "tipos",
    h2: "Tipos Máquinas Tragamonedas online",
    tips: [
      {
        h3: "Clásicas (3 rodillos)",
        p: [
          "Los juegos de casino de esta máquina son muy diversos y se inspiran en muchos temas. También, utilizan una combinación de varios tipos de apuestas en máquinas tragamonedas, como líneas de pago múltiples y mini juegos.",
        ],
      },
      {
        h3: "Video (5 rodillos o más)",
        p: [
          "Podrás encontrar 5 rodillos girando a diferencia de los clásicos. Esto quiere decir que al haber un mayor número de símbolos en el juego, lo más probable es que las posibilidades de ganar sean mayores, siempre dependiendo de la cantidad de líneas de pago que tenga la máquina.",
          "Aparte de los rodillos, la otra variante fundamental en el juego son las líneas de pago ya que varían en cada máquina y son las que marcan las opciones de premios según las combinaciones de cada juego y sus símbolos. Antes de jugar, fíjate en los rodillos y las líneas de pago",
        ],
      },
      {
        h3: "Con líneas de pago Múltiples",
        p: [
          "Estas ofrecen diferentes variantes, no como las clásicas que cuentan con una sola línea. En estos juegos puedes ganar con diferentes combinaciones.",
        ],
      },
      {
        h3: "Progresivas",
        p: [
          "Aquí hay un premio mayor establecido, que se acredita al coincidir ciertos símbolos o haber alcanzado cierto nivel en el juego. También incluye un premio común puede pagar continuamente cada vez que alguien juega. En este tipo de tragamonedas el premio mayor aumentará hasta que un jugador lo gane. Esta máquina tragamonedas tiene el potencial para ganar un premio mayor el cual se restablece, listo para ser que otro jugador pueda tener esta satisfacción. ",
        ],
      },
      {
        h3: "Tragamonedas con Mini Juegos (i-Tragamonedas)",
        p: [
          "Este tipo de tragamonedas online es una de las más interesantes. Ya que activan etapas de bonificación, con cada mini juego tus ganancias aumentan.",
        ],
      },
      {
        h3: "Tragamonedas 3D ",
        p: [
          "Los juegos de casino de esta máquina son muy diversos y se inspiran en muchos temas. También, utilizan una combinación de varios tipos de apuestas en máquinas tragamonedas, como líneas de pago múltiples y mini juegos.",
        ],
      },
      {
        h3: "Tragamonedas de Realidad Virtual",
        p: [
          "Los juegos de VR o mejor conocidos como Realidad Virtual son juegos que los usuarios ya que les ofrece jugar en diferentes ambientes con grandes gráficos 3D y con una curiosa variedad que hace más atractiva jugarlos. Que es la variedad de personajes que puedes escoger para la imagen que quieras reflejar durante el juego.",
        ],
      },
    ],
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre el Casino Online",
    sub: [
      {
        h3: "¿Cómo ganar en las slots?",
        p: "Aprovecha los bonos, promociones y tiradas gratis.",
        li: [
          "Fíjate en la tabla de pagos.",
          "Evita las máquinas progresivas.",
          "Empieza jugando con la apuesta mínima.",
          "Aprovecha la apuesta máxima.",
        ],
      },
      {
        h3: "¿Cuántas líneas tienen las tragamonedas?",
        p: "Generalmente los slots de 5 rodillos ofrecen más líneas de pago que las clásicas de 3.",
      },
      {
        h3: "¿Qué es el RTP en las tragamonedas?",
        p: "Los RTP significan en inglés “retorno para el jugador”. Esta cifra se muestra como porcentaje que representa la cantidad de dinero que un jugador puede ganar en los slots del casino.",
      },
    ],
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="https://www.codere.pa/casino/slots" />
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      <Floating text="¡Las mejores Slots!" juega={true} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.pa/seopages/casino/assets/slots/${
            device ? "M" : "D"
          }-Header.webp)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container style={{ color: "#fff" }}>
        <h1 className="header mt-4 mb-3">{top_par.h1}</h1>
        <p>{top_par.p}</p>

        {/* Table */}
        {!device ? <TableOfContents table={table_of_contents_list} /> : null}

        <h2 id={como_juega.id} className="mt-4 mb-3">
          {como_juega.h2}
        </h2>
        <p>{como_juega.p}</p>
        {/* Games */}

        <Row className="casino-row">
          {live_games
            .slice(0, !device ? live_games.length : 4)
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

        <h2 id={ventajas.id} className="mt-4 mb-3">
          {ventajas.h2}
        </h2>
        <p>{ventajas.p}</p>

        <h2 id={recomendaciones.id} className="mt-4 mb-3">
          {recomendaciones.h2}
        </h2>
        <p>{recomendaciones.p}</p>

        <h2 id={mejores.id} className="mt-4 mb-3">
          {mejores.h2}
        </h2>
        <p>{mejores.p}</p>
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

        {tipos.tips.map((tip, k) => (
          <div key={k}>
            <h3>{tip.h3}</h3>
            {tip.p.map((t, k) => (
              <p key={k}>{t}</p>
            ))}
          </div>
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
