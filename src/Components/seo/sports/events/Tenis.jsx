import "./events.css";
import Navigations from "../../Navigations";
import Floating from "../../Floating";
import TableOfContents from "../../TableOfContents";
import { Container, Accordion, Image, Placeholder } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";

export default function Tenis({ device }) {
  const prefix = `https://www.codere.pa/seopages/eventos-deportivos/tenis/imgs/${
    device ? "M" : "D"
  }-Tennis-`;
  const jpg = ".jpg";

  const title = "Apuesta para el Grand Slam de Tenis | Codere®";
  const description =
    "¡Ven a vivir los mejores puntos 🎾 con tus apuestas en Codere! Aquí encontrarás las respuestas a las preguntas más comunes sobre el tenis.";
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

  const table_list = [
    { title: "Top de tenistas a nivel mundial", id: "top" },
    {
      title: "Origen del Grand Slam",
      id: "origen",
      inner: [
        { title: "Tipos de apuestas en tenis", id: "tipos" },
        { title: "Torneos del Grand Slam", id: "torneos" },
      ],
    },
    { title: "Conoce las Estadísticas", id: "conoce" },
  ];

  const top_par =
    "En esta Guía de apuestas sobre el Grand Slam encontrarás las respuestas a las preguntas más comunes sobre el tenis. Entre ellas, los mejores  jugadores, la historia del Slam, los tipos de apuestas y mucho más! ¡Ven a vivir los mejores puntos con tus apuestas en Codere!";

  const origen_par = [
    "El Grand Slam, uno de los nombres más reconocidos a nivel mundial en relación al Tenis. Todo el año hay diversas competiciones del deporte blanco en todo el mundo, pero hay 4 competiciones principales que llaman la atención de todos los amantes del tenis.  Sin embargo, al mencionar el Grand Slam, ya estamos subiendo la vara al hablar de uno de los torneos más prestigiosos a nivel mundial. El mismo, se lleva a cabo anualmente y su importancia data que al ganador, le brindaría el número mayor de puntos para el ranking mundial de la ATP. Por lo que entre más lejos llegues en el Grand Slam, más chances tendrás de ser uno de los top tenistas a nivel mundial, reconocidos por la ATP.",
    `El término de Grand Slam proviene del juego de cartas bridge y se empezó a aplicar en el deporte del tenis desde 1933 cuando salió un artículo acerca de John Herbert "Jack" Crawford, un jugador profesional de tenis multi campeón de Wimbledon.`,
  ];

  const origens = {
    list: [
      {
        id: "torneos",
        h3: "Torneos del Grand Slam",
        text: [
          "Los torneos de Grand Slam están conformados por 4 grandes competiciones, que son considerados los cuatro torneos oficiales de mayor nivel organizados por la Federación Internacional de Tenis.Esos torneos son los siguientes:",
          "Abierto de Australia: Conocido como el primero de los cuatro torneos oficiales que forman el Grand Slam de tenis. Este torneo se lleva a cabo cada mes de enero en la ciudad de Melbourne en el Melbourne Park.",
          "Torneo Rolando Garros: Torneo denominado de esa manera por honor al aviador francés, es otro de los cuatro torneos que conforman el Gran Slam. Se juega a finales del mes de Mayo en París en la pista central Philippe-Chatrier.",
          "Campeonato de Wimbledon: Es un torneo organizado por el All England Lawn Tennis and Croquet Club, que se lleva a cabo en junio/julio en Londres, Wimbledon.",
          "Abierto de Estados Unidos: Conocido anteriormente como el Campeonato Nacional de Estados Unidos, también conocido como el cuarto y último torneo que conforman el Grand Slam en la temporada de tenis. Se lleva a cabo anualmente entre los meses de agosto y septiembre en Nueva York, Flushing Meadowns en el USTA Billie Jean King National Tennis Center.",
        ],
      },
      {
        id: "top",
        h3: "Top de tenistas a nivel mundial",
        tops: [
          "Carlos Alcaraz: es un tenista español, desde finales del año 2022 está situado en el top del ranking ATP y actualmente es el campeón del Abierto de Estados Unidos.",
          "Rafael Nadal:  de nacionalidad española, es uno de los tenistas más conocidos de la actualidad y que ocupa la segunda posición del ranking mundial de la ATP.",
          "Stefanos Tsitsipas: El griego que compite como profesional desde 2016. Logró escalar a la tercera posición del ranking ATP en agosto de 2021, y que actualmente se posiciona en el Ranking de la ATP. Adicionalmente en el  2021, se convirtió en el primer tenista de su país en poder jugar la gran final del torneo Roland Garros.",
          "Casper Ruud: Sin duda unos de los favoritos al día de hoy, tenista profesional noruego y el primero en hacerse acreedor del título campeón ATP en noruega. Casper Ruud actualmente sostiene 9 títulos y es el primer tenista noruego en convertirse en el segundo lugar del ranking mundial de la ATP.",
          "Daniil Medvedev:  es un tenista profesional ruso cuyo principal logro fue su ganar el Abierto de EE.UU. 2021., Su mejor posición en el ranking ATP es la n.º 1 conseguida el 28 de febrero de 2022.",
          "Felix Auger-Aliassime: es un tenista canadiense de ascendencia togolesa. Compite como profesional desde 2015.",
          "Novak Djokovic: Es un jugador de tenis profesional serbio que ocupa actualmente la quinta posición en el ranking ATP.",
          "Andrey Rublev: Es un jugador de tenis profesional ruso que tuvo sus inicios desde el año 2014. Actualmente ocupa la novena posición en el Ranking ATP.",
          "Taylor Fritz: Tenista profesional de origen estadounidense que compite en las grandes ligas desde 2015. En 2016 recibió el ATP Star of Tomorrow.",
          "Holger Rune: es un tenista danés.",
        ],
      },
    ],
  };

  const tips = {
    list: [
      {
        h3: "Ganador del partido",
        text: "Esta jugada se basa en apostar al que pronostiques que será el ganador del encuentro.",
      },
      {
        h3: "Ganador del Set 1",
        text: "Es la apuesta básica del tenis, donde se predice qué jugador ganará el primer set del partido.",
      },
      {
        h3: "Ganador del Set 2",
        text: "Apuesta al jugador que ganará el segundo set del partido.",
      },
      {
        h3: "Hándicap por set",
        text: "En cualquier deporte se permite apostar al momio menos favorable en un evento determinado. De esta manera el jugador por el que apostemos no solamente deberá ganar el encuentro, sino que deberá lograr una determinada ventaja.",
      },
      {
        h3: "Resultado final (por set)",
        text: "Apuesta al resultado final del partido en sets. Selecciones posibles: 2:0, 2:1, 1:2, 0:2, (en partidos al mejor de 5 sets: 3:0, 3:1, 3:2, 2:3, 1:3, 0:3)",
      },
      {
        h3: "Ganador y más/menos juegos",
        text: "Apuesta a si el número total de juegos ganados en el partido por el Jugador 1 será superior (más de) o inferior (menos de) de un valor de juegos propuesto. Si la cifra de juegos predecida es un número entero y el número de juegos ganados coincide exactamente con este valor, las apuestas serán anulada",
      },
    ],
  };

  const questions = {
    list: [
      {
        h3: "¿Qué es +2.5 en tenis? ",
        text: "Le suma al tenista elegido 2.5 puntos al total de sus puntos al final del partido. Se usa para mejorar las probabilidades de ganar la apuesta realizada",
      },
      {
        h3: "¿Cómo saber si el pronóstico en tenis es fiable?",
        text_list: [
          "Por el número de tie breaks, ya que los encuentros en pista rápida y hierba suelen ser  mayor  especialmente los que enfrentan a dos sacadores.",
          "Por lo general, en los partidos de tenis femenino influye menos quien sirve y quien resta que en el tenis masculino.",
        ],
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
          href="https://www.codere.pa/eventos-deportivos/apuestas-grand-slam"
        />
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      <Floating text="Vive el deporte blanco" />

      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.pa/seopages/eventos-deportivos/tenis/imgs/${
            device ? "M" : "D"
          }-Header.jpg)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container>
        <div className="event">
          <Container>
            <Fade>
              <h1 className="header subtitle mt-4">
                Consejos para apuestas para el Grand Slam del Tenis
              </h1>
            </Fade>
            <p>{top_par}</p>

            {!device ? <TableOfContents table={table_list} /> : <></>}

            <div className="para">
              <h2 id="origen" className="subtitle">
                Origen del Grand Slam
              </h2>
            </div>
            {/* <Zoom triggerOnce> */}
            {origen_par.map((o, k) => (
              <p key={k}>{o}</p>
            ))}
            {/* </Zoom> */}
            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "1" + jpg} width="100%" />
            </Fade>
            <Container>
              {origens.list.map((o, k) => (
                <div key={k}>
                  <div className="para">
                    <h3 id={o.id} className=" subtitle">
                      {o.h3}
                    </h3>
                  </div>
                  {o.text ? (
                    // <Zoom triggerOnce>
                    o.text.map((t, k) => <p key={k}>{t}</p>)
                  ) : // </Zoom>
                  o.tops ? (
                    <ol style={{ color: "#fff" }}>
                      {o.tops.map((t, k) => (
                        // <Zoom key={k} triggerOnce>
                        <li key={k}>{t}</li>
                        // </Zoom>
                      ))}
                    </ol>
                  ) : null}
                </div>
              ))}
            </Container>
            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "2" + jpg} width="100%" />
            </Fade>
            <div id="tipos" style={{ paddingTop: "4.1rem" }}>
              <h2 style={{ color: "#79c000" }}>Tipos de apuestas en tenis </h2>
              {tips.list.map((t, k) => (
                <div key={k} id={t.h3.split(" ")[0].toLocaleLowerCase()}>
                  <div className="para">
                    <h3 className="subtitle">{t.h3}</h3>
                  </div>
                  <p>{t.text}</p>
                </div>
              ))}
            </div>
            <div className="para">
              <h2 id="conoce" className="subtitle">
                Preguntas frecuentes sobre el Grand Prix
              </h2>
            </div>
            <Accordion>
              {questions.list.map((q, k) => (
                <Accordion.Item key={k} eventKey={k + ""}>
                  <Accordion.Header as={"h3"}>{q.h3}</Accordion.Header>
                  <Accordion.Body>
                    {q.text ? (
                      q.text
                    ) : q.text_list ? (
                      <ol>
                        {q.text_list.map((l, k) => (
                          <li key={k}>{l}</li>
                        ))}
                      </ol>
                    ) : null}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "3" + jpg} width="100%" />
            </Fade>
          </Container>
        </div>
      </Container>
    </>
  );
}
