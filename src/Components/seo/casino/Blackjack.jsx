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

export default function Blackjack(props) {
  const game_prefix = "https://m.codere.pa/deportes/#/CasinoPage?playgame=";

  const title = "Blackjack 21 Online en Panamá  | Codere®";
  const description =
    "Juega al blackjack Online del Crown Casino Panamá, uno de los juegos de mesa con más estrategia y decisión. Ven y diviértete en este mundo de adrenalina.";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué quiere decir 3 a 2 en blackjack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Este tipo de jugada se basa en el pago 3-2. Que le brinda al vencedor una ganancia 1,5 veces mayor su apuesta original. Un ejemplo para este tipo de jugada sería: Si apostaras 20 fichas y ganarás, se te otorgarían 30 es decir “10 fichas extra” junto con el dinero de tu apuesta. ",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se cuentan las cartas en el 21?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Este método se basa en darle un puntaje a cada carta y a medida que vayan saliendo de la baraja y los vayas sumando. Entre más sea la suma de las cartas que están sobre la mesa, más ventaja tendrá el jugador ya que tiene más opciones de obtener una carta alta.  ",
        },
      },
    ],
  };

  const top_par = {
    h1: "La guía de apuestas de Blackjack Online en Codere",
    p: "Además de encontrar los juegos de casino más populares, aquí encontrarás las respuestas a las preguntas más comunes sobre uno de los juegos de mesa de más estrategia y decisión en Casino. Entre ellas, las mejores combinaciones, como jugar, los tipos de apuesta y mucho más! Ven y diviértete con nuestro casino en vivo y disfruta de tus apuestas en Codere!",
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "¿Cómo jugar BlackJack Online?",
      id: "como_juega",
      inner: [
        { title: "Valor de las cartas", id: "valor" },
        { title: "Estrategia de juego", id: "estrategia" },
        { title: "Tipos de apuestas", id: "tipos" },
        { title: "Recomendaciones para jugar 21", id: "recomendaciones" },
        { title: "Tabla de apuestas", id: "tabla" },
      ],
    },
    {
      title: "Apuestas paralelas en Blackjack",
      id: "apuestas",
    },
    {
      title: "Preguntas frecuentes",
      id: "preguntas",
    },
  ];

  // Table
  const table = [
    [
      "Divir",
      "En esta opción buscaremos doblar la apuesta original. Aquí el jugador tendrá dos manos separadas contra el croupier. Solo se podrá lograr si se tienen dos cartas iguales, como por ejemplo dos nueves o dos cincos.",
    ],
    [
      "Plantarse",
      "Este tipo de jugada se basa en hacer lo opuesto a pedir a la banca. La estrategia de esta jugada es sencilla, solo debes quedarte con la mano que tengas, sin añadir más cartas.",
    ],
    [
      "Doblar",
      "Con esta jugada duplicas tu apuesta original a cambio de recibir una única carta.",
    ],
    [
      "Separar",
      "Consiste en separar dos cartas iguales para poder jugarla en manos diferentes.",
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
      name: "Free bet Blackjack",
      img: "EVGFreebetBlackjack_Square",
      sponsor: "EVG",
    },
    {
      name: "Lightning Blackjack",
      img: "EVGLightningBlackjack_Square",
      sponsor: "EVG",
    },
    {
      name: "Blackjack 3 hand",
      img: "HABblackjack3hand_Square",
      sponsor: "HAB",
    },
    {
      name: "American Blckjack",
      img: "HABAmericanblackjack_Square",
      sponsor: "HAB",
    },
  ];

  const como_juega = {
    id: "como_juega",
    h2: "¿Cómo jugar BlackJack Online?",
    p: "El objetivo principal se basa en derrotar a la banca. Si quieres derrotar a la banca, debes tener una mano que de una suma superior a la de la banca, pero siempre tomando en cuenta que no se debe superar los 21. También se puede vencer a la banca con menos de 21, siempre y cuando la banca supere los 21.",
    inner: [
      {
        h3: "Valor de las cartas",
        id: "valor",
        p: [
          "Las figuras de las cartas el Valet, la Reina y el Rey valen 10, el As tiene un puntaje de 11 o 1 y todas las otras cartas conservan su valor. El 21 de Black Jack se logra cuando las primeras dos cartas son de valor de diez o cualquier figura más un As.",
        ],
      },
      {
        h3: "Estrategia de juego",
        id: "estrategia",
        p: [
          "Esta va a definir cuántas ganancias logras generar. Te contaremos un poco de las movidas que puedes hacer dentro del juego para jugar la mejor mano posible!",
        ],
        table: true,
      },
      {
        h3: "Tipos de apuestas en Blackjack",
        id: "tipos",
        p: [
          "Parlay: Es una jugada que se basa en desarrollar sus ganancias gradualmente hasta que puedas retirar la apuesta que se realizó inicialmente.",
          "Martingala: Esta jugada es conocida por muchos jugadores como una de las más sencillas. Solo se debe doblar la apuesta si en la ronda inicial pierdes tu jugada, es decir el jugador debe mantenerse doblando la jugada hasta que salga ganador. De esta manera recuperarás tus pérdidas al punto de ganar un premio grande.",
        ],
      },
      {
        h3: "Recomendaciones para jugar 21",
        id: "recomendaciones",
        p: [
          "Comprende el margen de la casa este es un porcentaje que se aplica en todos los juegos de casino, tanto en los casinos online como en los físicos.",
        ],
        li: [
          "Contar cartas",
          "Gestiona tus fondos.",
          "Prueba sistemas de apuestas.",
          "No te fíes del seguro.",
        ],
      },
      {
        h3: "Tabla de apuestas",
        id: "tabla",
        hasImg: true,
        url: "https://www.codere.pa/_catalogs/masterpage/codere/images/seoPages/blackjack/seoPageBlackjacktabla.jpg",
        p: [],
      },
    ],
  };

  const apuestas = {
    id: "apuestas",
    h2: "Apuestas Paralelas en Blackjack",
    p: "ETambién son conocidas como apuestas secundarias o laterales, intentando adivinar las cartas del crupier o aquellas que, como jugadores, vayamos a recibir. Las apuestas en paralelo del seguro son unas de las más conocidas; ya que nos permite reducir las pérdidas ante un posible 21 del crupier.",
    games: [
      {
        h3: "La apuesta Seguro",
        p: "La apuesta segura se basa en colocar tu apuesta a que el crupier tendrá 21, cuando en la primera ronda tenga un As. sólo se podrá apostar en esta jugada por debajo de la mitad de la apuesta inicial. Si el crupier obtiene un Blackjack paga al jugador dos veces la apuesta del seguro.",
      },
      {
        h3: "Apuesta 21+3",
        p: "La apuesta 21+3 del 21 es una apuesta que puedes realizar junto con más apuestas en las partidas. Esta jugada se trata de la suma de manos del póker de tres cartas y puedes lograr conseguir beneficios mayores que los que ofrece una mano de blackjack normal.",
      },
      {
        h3: "La apuesta Royal Match",
        p: "El objetivo de esta jugada es lograr que el valor total de tus cartas tenga un valor de 21 o sea lo más cercano posible al 21. Si recibes 21 solo con dos cartas o logres combinación con una puntuación superior al del crupier, pero sin sobrepasar de 21, obtienes la victoria.",
      },
      {
        h3: "La apuesta Lucky Ladies",
        p: "Aquí necesitarás del crupier para poder ganar en una de las apuestas secundarias. Debes intentar conseguir 21 y los números de la suerte con tus cartas y las cartas del crupier para conseguir más premios.",
      },
      {
        h3: "La apuesta super 7",
        p: "Como su propio nombre lo dice, la apuesta paralela Super Sevens se paga cuando tu o el crupier recibís sietes en el primer reparto.",
      },
    ],
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre el Casino Online",
    sub: [
      {
        h3: "¿Qué quiere decir 3 a 2 en blackjack?",
        p: "Este tipo de jugada se basa en el pago 3-2. Que le brinda al vencedor una ganancia 1,5 veces mayor su apuesta original. Un ejemplo para este tipo de jugada sería: Si apostaras 20 fichas y ganarás, se te otorgarían 30 es decir “10 fichas extra” junto con el dinero de tu apuesta.",
      },
      {
        h3: "¿Cómo se cuentan las cartas en el 21?",
        p: "Este método se basa en darle un puntaje a cada carta y a medida que vayan saliendo de la baraja y los vayas sumando. Entre más sea la suma de las cartas que están sobre la mesa, más ventaja tendrá el jugador ya que tiene más opciones de obtener una carta alta.",
      },
    ],
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="https://www.codere.pa/casino/blackjack" />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.codere.es/casino/blackjack"
        />
        <link
          rel="alternate"
          hreflang="es-mx"
          href="https://www.codere.mx/casino/blackjack"
        />
        <link
          rel="alternate"
          hreflang="en-mx"
          href="https://www.codere.mx/casino/blackjack"
        />
        <link
          rel="alternate"
          hreflang="es-co"
          href="https://www.codere.com.co/casino/blackjack"
        />
        <link
          rel="alternate"
          hreflang="en-co"
          href="https://www.codere.com.co/casino/blackjack"
        />
        <link
          rel="alternate"
          hreflang="es-ar"
          href="https://www.codere.bet.ar/casino/blackjack"
        />
        <link
          rel="alternate"
          hreflang="en-ar"
          href="https://www.codere.bet.ar/casino/blackjack"
        />
        <link
          rel="alternate"
          hreflang="es-pa"
          href="https://www.codere.pa/casino/blackjack"
        />
        <link
          rel="alternate"
          hreflang="en-pa"
          href="https://www.codere.pa/casino/blackjack"
        />
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      <Navigations index={props.index} type={1} />
      <Floating text="¡El mejor Blackjack!" juega={true} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.pa/seopages/casino/assets/blackjack/${
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

        {como_juega.inner.map((c, k) => (
          <div id={c.id} key={k}>
            <h3 style={{ color: "#79c000" }}>{c.h3}</h3>
            {!c.hasImg ? (
              <>
                {c.p.map((p, k) => (
                  <p key={k}>{p}</p>
                ))}
                {c.li ? (
                  <ul>
                    {c.li.map((liItem, k) => (
                      <li key={k}>{liItem}</li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
                {c.table ? (
                  <Table
                    striped
                    bordered
                    hover
                    variant="dark"
                    className="seotable"
                  >
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
                ) : (
                  <></>
                )}
              </>
            ) : (
              <LazyLoadImage
                style={{ margin: "auto", display: "flex", maxWidth: "90%" }}
                src={c.url}
              />
            )}
          </div>
        ))}

        <h2 id={apuestas.id} className="mt-4 mb-3">
          {apuestas.h2}
        </h2>
        <p>{apuestas.p}</p>

        {apuestas.games.map((game, k) => (
          <div key={k}>
            <h3>{game.h3}</h3>
            <p>{game.p}</p>
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
