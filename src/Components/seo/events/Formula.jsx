import { Container, Nav, Accordion, Row, Col, Image } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade, Zoom } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { backTopTop } from "../EventosDeportivosV2";
import "./events.css";
import Navigations from "./Navigations";
import { useEffect } from "react";
import Floating from "../Floating";
import TableOfContents from "../TableOfContents";

export default function Formula(props) {
  const title = "Apuesta para el Grand prix 🏎️ | Codere®";
  const description =
    "En esta Guía de apuestas de la F1 🥇 encontrarás las respuestas a las preguntas más comunes sobre el deporte de mayor emoción automovilística.";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es el equipo más ganador de la F1?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El equipo ganador de la F1 en los últimos años fue la escudería Mercedes. Pero estas últimas dos temporadas la F1 ha dado un giro ya que la escudería Ferrari y la escudería de Red Bull se han puesto en disputa del Campeonato también.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo es el  Grand Prix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La FIA (mejor conocida como el órgano rector del deporte automovilístico mundial) aprobó recién finalizada la temporada 2022 en septiembre el calendario para la próxima temporada con grandes premios. Serán un total de 24 carreras que van a conformar una temporada en la que se estrenarán algunos circuitos como el GP de Las Vegas y se mantendrán algunos circuitos que se pensó no estarían presentes como Mónaco y Spa tras muchos rumores que apuntaban a su desaparición. El Mundial de la F1 2023 tendrá inicio en Bahréin el 5 de marzo y tendrá su culminación el 26 de noviembre en Abu Dhabi. El GP de España tuvo un cambio de fecha, y pasó de mayo a junio. Francia queda eliminada del calendario y regresan a él los grandes premios de Qatar y China.",
        },
      },
    ],
  };

  const prefix = `https://www.codere.pa/seopages/eventos-deportivos/f1/imgs/${
    props.flag ? "M" : "D"
  }-Formula1-`;
  const postfix = ".jpg";

  const table_list = [
    {
      title: "Historia del Gran Premio de la F1",
      id: "historia",
      inner: [
        { title: "Clasificaciones al Grand prix", id: "clasificaciones" },
        { title: "Circuitos más importantes", id: "circuitos" },
        { title: "Puntuaciones para los pilotos en la F1", id: "puntuaciones" },
      ],
    },
    {
      title: "Apuestas y cuotas en F1",
      id: "apuestas",
      inner: [
        {
          title: "¿Cómo funcionan las cuotas de apuestas en F1?",
          id: "par1",
        },
        { title: "Mejores pilotos de Fórmula 1 para este 2022", id: "par2" },
        { title: "Pronósticos campeón Fórmula 1 2022", id: "par3" },
      ],
    },
  ];

  const top_par =
    "En esta Guía de apuestas de la F1 encontrarás las respuestas a las preguntas más comunes sobre el deporte de mayor emoción automovilística. Entre ellas, los mejores  corredores, la historia de la f1, los tipos de apuestas y mucho más! Atrévete a conocer a máxima velocidad tus apuestas en Codere!";

  const history_par =
    "La F1 es el campeonato mundial o competencia de autos/motor más importante de la FIA también conocido como la Federación Internacional del Automóvil. Se originó en las carreras automovilísticas demonias GP (Grand Prix/Grandes premios) y el día de hoy es de las más populares del mundo.";

  const history = {
    list: [
      {
        id: "clasificaciones",
        h3: "Clasificaciones al Grand prix",
        text: [
          "La tabla de clasificación consiste en las posiciones que se suman mediante los puntos obtenidos en cada carrera de la temporada.",
        ],
      },
      {
        id: "circuitos",
        h3: "Circuitos más importantes",
        text: [
          "La F1 cuenta con ciertos circuitos que por su nivel de dificultad para el manejo y la historia que cuentan alguna de ellas o campeonatos históricos. Algunos de los circuitos más importantes para esta disciplina automovilística son:",
          " Circuito de Monza: cuenta con trazado que pertenece al año 2000 y cuenta con un total de 11 curvas. Con su característica silueta en L que es difícil de confundir y le ofrece un recorrido muy rápido con velocidades que superan los 330 km/h.",
          "Circuito de Marina Bay: Este circuito cuenta con 23 curvas que los pilotos pasan frenando por lo que vuelve este circuito el segundo más grande de todos los circuitos del calendario.",
          "Circuito de Suzuka: Suzuka es uno de los circuitos más antiguos de la Fórmula 1, teniendo una larga historia de carreras como el famoso Gran Premio de Japón. Su papel tradicional como uno de los últimos grandes premios de cada temporada de la F1 han hecho que casi la mayoría de los Campeonatos del Mundo se hayan decidido en este circuito tan antiguo.",
          "Circuito de Mónaco: El GP de Mónaco es de los mas reconocidos a nivel mundial, por su fama de curvas circuito cerrado y lujosos yates que recorren la pista. Es la única pista que no supera los 305 km de distancia total, debido a un clausulado especial de la FIA.",
          "Pista de Red Bull Ring: Red Bull Ring es un autódromo ubicado en la Villa de Spielberg, en el estado de Estiria, Austria. Ha sido partícipe de muchos de los mejores campeonatos a nivel mundial y por supuesto europeos del deporte motor. El nombre original del circuito fue Österreichring, que traducido era el ''circuito de Austria'' .Luego de su remodelación en 1995, fue cambiado su título a A1-Ring debido al patrocinio de la telefónica A1 Mobilkom. En el 2010, Red Bull adquirió el circuito y le colocó el nombre que hoy día todos conocemos..",
        ],
      },
      {
        id: "puntuaciones",
        h3: "Puntuaciones para los pilotos en la F1",
        text: [
          "En la temporada de la F1 cada carrera tiene 2 etapas en las cuales cada corredor dependiendo de la posición en la que termine los circuitos sumará puntos en la tabla  de posiciones de los pilotos. Una de las jugadas recomendadas para tus apuestas de F1 es siempre verificar la tabla de posiciones de pilotos y sus carreras anteriores y así poder saber los corredores que son mejores en algunas etapas que otras.Recomendaciones para hacer tus pronósticos",
        ],
      },
    ],
  };

  const apuestas = {
    list: [
      {
        h3: "¿Cómo funcionan las cuotas de apuestas en F1?",
        text: "El sistema para apostar en la F1 es muy sencillo. Las carreras de F1 cuentan con 3 etapas. La primera etapa conocida como “Libre” que es para que los pilotos conozcan el circuito donde correrán. Luego, dos etapas donde sí se pueden realizar apuestas que constan de la fase clasificatoria que es pronosticar quien obtenga el mejor tiempo y de la cual se originarán las posiciones para el circuito oficial.",
      },
      {
        h3: "Mejores pilotos de Fórmula 1 para este 2022",
        text: "Los mejores pilotos actualmente para la Fórmula 1 del 2022 son:",
        table: [
          "Max Verstappen",
          "Charles Leclerc",
          "Sergio Perez",
          "Lewis Hamilton",
          "Carlos Jr. Sainz",
        ],
      },
      {
        h3: "Pronósticos campeón Fórmula 1 2022",
        text: "Con Codere en esta opción para tus apuestas podrás pronosticar quién será el campeón del mundo en esta nueva temporada de la Fórmula 1. Entre antes que realices tu pronóstico más elevado será la cuota maximizando tus ganancias.",
      },
    ],
  };

  const questions = {
    list: [
      {
        h3: "¿Cuál es el equipo más ganador de la F1?",
        text: "El equipo ganador de la F1 en los últimos años fue la escudería Mercedes. Pero estas últimas dos temporadas la F1 ha dado un giro ya que la escudería Ferrari y la escudería de Red Bull se han puesto en disputa del Campeonato también.",
      },
      {
        h3: "¿Cuándo es el  Grand Prix?",
        text: "La FIA (mejor conocida como el órgano rector del deporte automovilístico mundial) aprobó recién finalizada la temporada 2022 en septiembre el calendario para la próxima temporada con grandes premios. Serán un total de 24 carreras que van a conformar una temporada en la que se estrenarán algunos circuitos como el GP de Las Vegas y se mantendrán algunos circuitos que se pensó no estarían presentes como Mónaco y Spa tras muchos rumores que apuntaban a su desaparición. El Mundial de la F1 2023 tendrá inicio en Bahréin el 5 de marzo y tendrá su culminación el 26 de noviembre en Abu Dhabi. El GP de España tuvo un cambio de fecha, y pasó de mayo a junio. Francia queda eliminada del calendario y regresan a él los grandes premios de Qatar y China.",
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="http://www.codere.pa/eventos-deportivos/apuestas-grand-prix"
        />
        <meta name="description" content={description} />
        <meta name="robots" content="noindex" />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>
      <Navigations index={props.index} />
      <Floating text="Recorre las pistas" />
      <Fade duration={1000} triggerOnce>
        <Image
          className="ratio ratio-1220x319"
          src={`https://www.codere.pa/seopages/eventos-deportivos/f1/imgs/${
            props.flag ? "M" : "D"
          }-Header-F1.jpg`}
        />
      </Fade>
      <Container>
        <div className="event">
          <Container style={{ marginTop: "2rem" }}>
            {!props.flag ? (
              <TableOfContents isFormula={true} table={table_list} />
            ) : (
              <></>
            )}

            <Fade>
              <h1 className="header subtitle">
                Guía de apuestas en Grand Prix
              </h1>
            </Fade>
            <p>{top_par}</p>

            <div className="para">
              <h2 id="historia" className="subtitle">
                Historia del Gran Premio de la F1
              </h2>
            </div>
            <Zoom triggerOnce>
              <p>{history_par}</p>
            </Zoom>

            <Container style={{ width: "90%" }}>
              {history.list.map((h, k) => (
                <div key={k}>
                  <h3 id={h.id} className="para">
                    {h.h3}
                  </h3>
                  <Zoom triggerOnce>
                    {h.text.map((t, k) => (
                      <p key={k}>{t}</p>
                    ))}
                  </Zoom>
                </div>
              ))}
            </Container>
            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "1" + postfix} width="100%" />
            </Fade>
            <div id="apuestas" style={{ paddingTop: "4.1rem" }}>
              <div className="subtitle">
                <h2 style={{ color: "#79c000" }}>Apuestas y cuotas en F1</h2>
              </div>
              <Container>
                {apuestas.list.map((a, k) => (
                  <div key={k} id={"par" + (k + 1)}>
                    <h3 className="para">{a.h3}</h3>
                    <p>{a.text}</p>
                    {a.table ? (
                      <ul>
                        {a.table.map((t, k) => (
                          <li key={k}>{t}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </Container>
            </div>

            <div className="para">
              <h2 id="preguntas" className="subtitle">
                Preguntas frecuentes sobre el Grand Prix
              </h2>
            </div>
            <Accordion>
              {questions.list.map((q, k) => (
                <Accordion.Item key={k} eventKey={k + ""}>
                  <Accordion.Header as={"h3"}>{q.h3}</Accordion.Header>
                  <Accordion.Body>{q.text}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "2" + postfix} width="100%" />
            </Fade>
          </Container>
        </div>
      </Container>

      {backTopTop()}
    </>
  );
}
