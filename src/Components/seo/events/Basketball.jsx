import {
  Accordion,
  Button,
  Col,
  Container,
  Image,
  Nav,
  Placeholder,
  Row,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Fade, Zoom } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { backTopTop } from "../EventosDeportivos";

import "./events.css";
import Navigations from "./Navigations";
import { useEffect, useState } from "react";
import Floating from "../Floating";
import TableOfContents from "../TableOfContents";

export default function Balenco(props) {
  const [loaded, setLoaded] = useState(false);
  const skeleton = `https://www.codere.pa/seopages/eventos-deportivos/icons/skeleton.png`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = "Apuesta para Mundial de Baloncesto 🏀 | Codere®";
  const description =
    "En la siguiente guía, encontrarás algunos consejos para que tu experiencia en Codere durante el mundial de Baloncesto, sea mucho más provechosa.";

  const prefix = `https://www.codere.pa/seopages/eventos-deportivos/baloncesto/imgs/${
    props.flag ? "M" : "D"
  }-Basketball-`;
  const jpg = ".jpg";

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

  const top_par =
    "En la siguiente guía, encontrarás algunos consejos para que tu experiencia en Codere durante el mundial de Baloncesto, sea mucho más provechosa. Entre ellos, encontrarás terminologías sobre apuestas, recomendaciones e información sobre los equipos. Grita con pasión las mejores canastas esta copa";

  const history_par =
    "La Copa Mundial de Baloncesto de la FIBA, también conocida como la Copa Mundial FIB o Mundial de baloncesto, es el campeonato internacional que disputan las selecciones nacionales que forman parte de la federación. Este campeonato se celebra cada cuatro años, y es reconocido como el campeonato más grande a nivel de selecciones del baloncesto. El mismo se ha realizado desde 1950 y hasta el dia de hoy es uno de los eventos deportivos más grandes a nivel de selecciones.";
  const clasificaciones_par =
    "Se han utilizado varios formatos de clasificación duende en toda su historia. Los primeros cinco torneos que se han realizado fueron disputados en Sudamérica y fueron dominados por equipos del mismo continente americano. El anfitrión de este primer campeonato fue Argentina, quien compitió de la mano con dos equipos de Europa, Asia y Sudamérica. Sin embargo, el hecho que el evento se haya realizado al otro lado del continente, los países concursantes de Asia no estaban dispuestos a viajar, por lo que 6/10 equipos que disputaron el mundial, eran de América.";
  const maximos_par =
    "Los máximos anotadores de la historia del baloncesto en la competición hasta el día de hoy son:";

  const maximos = {
    list: [
      {
        name: "Oscar Schmidt",
        text: "Ex Jugador profesional de baloncesto de nacionalidad Brasilera. Su estatura es de 2,05 metros y ha jugado en dos equipos de italia. Se destaco en el Valladolid de España, y ha disputado el resto de su carrera en equipos dentro de su país natal.",
      },
      {
        name: "Luis Scola",
        text: "Fue un exjugador de baloncesto argentino, que disputó 25 temporadas como jugador profesional,dichas temporadas se repartieron entre Argentina, Europa y la NBA. Con 2,06 metros de altura jugaba en la posición de ala-pívot.",
      },
      {
        name: "Andrew Gaze",
        text: "Es un exjugador de baloncesto australiano.",
      },
      {
        name: "Drazen Dalipagic",
        text: "Es un ex jugador serbio y actual máximo anotador de la ya extinta selección de yugoslavia. Fue uno de los jugadores más dominantes en Europa durante finales de los años 1970 y a principios de los años 1980. En 2008, fue nombrado uno de los 50 mayores jugadores contribuyentes de la Euroliga.",
      },
      {
        name: "Jose Rafael Ortiz",
        text: "Mejor conocido como “Piculín Ortiz”, es un exjugador de baloncesto de Puerto Rico. Ortiz ha jugado en equipos de ligas como la NCAA, NBA, también ha sido partícipe de ligas europeas.",
      },
      {
        name: "Pau Gasol",
        text: ": Es un exjugador de baloncesto que disputó 18 temporadas en la NBA, donde logró ser campeón dos veces, y otras 3 veces logró ser campeón con el equipo del FC Barcelona. Siendo un jugador con 2,13 metros de altura jugaba en la posición de ala-pívot. Pau es considerado como el mejor jugador español de todos los tiempos, entre los mejores europeos que han jugado en la NBA y también considerado uno de los jugadores más determinantes de la FIBA.",
      },
      {
        name: "Panagiotis Giannakis",
        text: "Nació el 1 de enero de 1959 en Nikea, es un exjugador y actual entrenador de un equipo de baloncesto griego. Cabe recalcar que también fue seleccionador del equipo nacional de Grecia.",
      },
    ],
  };

  const tips_par =
    "Los tipos de apuestas en el baloncesto son las más completas. Entre las más populares podrás encontrar, Apostar al ganador, puntos totales en un partido (Conocido en inglés como over/under), apostar al ganador de cada cuarto, entre otros.";

  const tips = {
    list: [
      {
        h3: "Ganador del partido",
        text: "El tipo de apuesta de “Ganador del partido” consiste en acertar quién será el ganador del juego al dar el pitazo final y haberse cumplido el tiempo reglamentario.",
      },
      {
        h3: "Hándicap",
        text: "El tipo de apuesta “hándicap” consiste en la ventaja o desventaja que se le da a un determinado equipo cuando el mismo no es el favorito (Underdog) para que pueda ser un encuentro equitativo.",
      },
      {
        h3: "Más/Menos Puntos Totales",
        text: "El tipo de apuesta “Más/Menos Puntos” consiste en pronosticar el estimado de puntos totales que se darán dentro del partido no solo de un equipo sino la suma de los puntos que obtengan ambos equipos.",
      },
      {
        h3: "Total de puntos Impar/Par",
        text: "El tipo de apuesta “Total de Puntos Impar/Par” consiste en pronosticar el total de puntos Pares o Impares que tendrán un encuentro. Lo que significa, que el resultado se basará en pronosticar si el marcador quedará con una puntuación de número Par o una puntuación de número Impar. Ejemplo 102 o 115.",
      },
      { h3: "", text: "" },
    ],
  };

  const como_balenco = {
    list: [
      {
        h3: "¿Qué significa hándicap +5.5 en basquet?",
        text: "El hándicap de +5.5 consiste en atribuir o restar una serie de puntos a cada equipo. Al favorito se le restan y al no favorito se le suman. Es así cómo las diferencias en basketball  se “igualan” y se les añade emoción para apostar.",
      },
      {
        h3: "¿Qué es un back to back de la NBA? ",
        text: "En la NBA es fundamental la estadística de los «Back-to-back». Su definición consiste en el rendimiento de los equipos cuando juegan dos (o más) partidos seguidos sin descanso entre días.",
      },
    ],
  };

  const table_list = [
    {
      title: "Historia del Mundial de Baloncesto",
      id: "historia",
      inner: [
        { title: "Clasificaciones", id: "clasificaciones" },
        { title: "Máximos anotadores", id: "maximos" },
        { title: "Tipos de Apuestas en Baloncesto", id: "tipos" },
      ],
    },
    {
      title: "¿Cómo hacer pronósticos de apuestas en baloncesto?",
      id: "como-balenco",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.pa/eventos-deportivos/apuestas-mundial-baloncesto"
        />
        <meta name="description" content={description} />
        <meta name="robots" content="noindex" />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      <Navigations index={props.index} />
      <Floating text="Encesta con la NBA" />

      {!loaded ? (
        <Placeholder as={Image} src={skeleton} animation="wave" />
      ) : null}
      <Fade duration={1000} triggerOnce>
        <Image
          className="ratio ratio-1220x319"
          style={loaded ? {} : { display: "none" }}
          src={`https://www.codere.pa/seopages/eventos-deportivos/baloncesto/imgs/${
            props.flag ? "M" : "D"
          }-Header.jpg`}
          onLoad={() => setLoaded(true)}
        />
      </Fade>

      <Container>
        <div className="event">
          <Container>
            {!props.flag ? <TableOfContents table={table_list} /> : <></>}

            <Fade>
              <h1 className="header subtitle">
                Guía de apuestas para el Mundial de Baloncesto
              </h1>
            </Fade>
            <p>{top_par}</p>
            <div className="para">
              <h2 id="historia" className="subtitle">
                Historia Del Mundial de Baloncesto
              </h2>
            </div>
            <Zoom triggerOnce>
              <p style={{ color: "#fff" }}>{history_par}</p>
            </Zoom>
            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "1" + jpg} width="100%" />
            </Fade>
            <Container>
              <div className="para">
                <h3 id="clasificaciones" className="subtitle">
                  Clasificaciones
                </h3>
              </div>
              <Zoom triggerOnce>
                <p style={{ color: "#fff" }}>{clasificaciones_par}</p>
              </Zoom>
              <div className="para">
                <h3 id="maximos" className="subtitle">
                  Máximos anotadores
                </h3>
              </div>
              <Zoom cascade triggerOnce duration={750}>
                <p style={{ color: "#fff" }}>{maximos_par}</p>
                <ol style={{ color: "#fff", width: "85%" }}>
                  {maximos.list.map((m, k) => (
                    <li key={k} style={{ padding: ".25rem" }}>
                      <b>{m.name}:</b> {m.text}
                    </li>
                  ))}
                </ol>
              </Zoom>
            </Container>
            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "2" + jpg} width="100%" />
            </Fade>
            <div id="tipos">
              <div className="para">
                <h2 className="subtitle">Tipos de Apuestas en Baloncesto</h2>
              </div>
              <p>{tips_par}</p>
              <Container>
                {tips.list.map((t, i) => (
                  <div key={i}>
                    <Zoom triggerOnce>
                      <h3 className="subtitle">{t.h3}</h3>
                      <p>{t.text}</p>
                    </Zoom>
                  </div>
                ))}
              </Container>
              <div id="como-balenco">
                <h2 style={{ color: "#79c000" }}>
                  Preguntas frecuentes sobre el Mundial de Basketball
                </h2>
                <Container>
                  <Accordion>
                    {como_balenco.list.map((i, k) => (
                      <Accordion.Item key={k} eventKey={k + ""}>
                        <Accordion.Header as={"h3"}>{i.h3}</Accordion.Header>
                        <Accordion.Body>
                          <p>{i.text}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Container>
              </div>
            </div>
            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "3" + jpg} width="100%" />
            </Fade>
          </Container>
        </div>
      </Container>

      {backTopTop()}
    </>
  );
}
