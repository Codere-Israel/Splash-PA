import "./events.css";
import Navigations from "../../Navigations";
import Floating from "../../Floating";
import TableOfContents from "../../TableOfContents";
import { Accordion, Container, Image, Placeholder } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Balenco(props) {
  function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return true;
      }
    }
    return false;
  }

  // const segmentCookieExist = getCookie("segmentMe");
  // console.log(segmentCookieExist);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = "Apuesta para el Mundial de Fútbol | Codere®";
  const segmentedTitle = "test test test | Codere";
  const description =
    "Acá te dejamos una explicación sobre en qué consisten algunas populares opciones de apuesta y algunas que no son tan populares. Apuesta en Codere.";
  const prefix = `https://www.codere.pa/seopages/eventos-deportivos/fifa/imgs/${
    props.flag ? "M" : "D"
  }-Soccer`;
  const jpg = ".jpg";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué países organizarán la siguiente copa del mundo en 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La FIFA anuncio que la Copa del Mundo 2026 se llevara a cabo en México, Canadá y en los Estados Unidos. Sera la primera Copa del Mundo en llevarse a cabo en 3 países diferentes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué país tiene más copas del mundo organizadas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En la reciente edición del Mundial en total clasificaron 32 Selecciones. Sin embargo, para el Mundial 2026, que se realizará en Estados Unidos, Canadá y México, por primera vez, tendrá México en 2026 se convertirá en el país con más mundiales organizados en la historia, ya que albergará su tercera copa del mundo, uniéndose a las de 1970 y 1986.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo inician las clasificatorias para el mundial de futbol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La clasificación para la Copa del Mundo 2026 iniciara su clasificación con Sudamérica dando el primer paso. Dicho paso daría inicio en junio del 2023.",
        },
      },
    ],
  };

  const top_par =
    "En esta sección podrás encontrar una breve información sobre la Copa del Mundo desde su creación como también algunos de los momentos más relevantes que se han vivido en alguna de las copas del Mundo. También podrás encontrar una guía de los tipos de opciones que existen para las apuestas del futbol y cuales son algunos de los datos que debes tomar en cuenta antes de armar tu apuesta.";

  const history = {
    h2: "La historia de las copas del mundo",
    p: "La Copa del Mundo se lleva a cabo cada 4 años y es considerado el torneo más importante para el fútbol y todos sus fanáticos. Es el evento deportivo por mayor excelencia, aunque existen varios torneos relevantes en el mundo del futbol, ninguno tiene ese especial sentimiento y euforia que se vive en los partidos y poder tener la posibilidad de ver a una nación coronarse como el mejor del mundo. Mundiales de futbol hay muchos, pero son pocos los que han quedado marcados en la mente de los fanáticos de este deporte.",
  };

  const principales = {
    h2: "Principales estadísticas de los Mundiales de Futbol",
    p: "Estos son los Mundiales con más impacto en la historia",
    list: [
      {
        headline: "Suiza 1954",
        text: "Es recordado por ser el Mundial de futbol con más goles, fueron 140 anotaciones en 26 partidos. El mundial del 54 se llevó a cabo en Suiza por ser la sede de la FIFA que cumplía medio siglo de su creación. Además, también cabe recalcar que fue el primer Mundial retransmitido por la televisión.",
      },
      {
        headline: "Suecia 1958",
        text: ": Copa del mundo en la que Brasil domino el torneo ese año y una etapa iniciaba en el fútbol. En el mundial del 58 fue la primera vez que un arquero utilizo guantes de nombre Lev Yashin “la Araña Negra”, fue también la primera y única vez que lograron participar las cuatro selecciones británicas en un Mundial de futbol. Un jugador nuevo aparece llamado “Pelé” donde se presenta de manera esplendida en su primer Mundial y el delantero francés Fontaine nos permitió ver uno de los mejores partidos jamás recordados.",
      },
      {
        headline: "México 1970",
        text: `El Mundial del 70 fue de Platini, Zico, Butragueño, Ruummenige, pero sobre todos resalto un joven de nombre Diego Armando Maradona, esta copa del mundo lo llevo a ser considerado un "Dios para el fútbol". Una de las cosas clave para Argentina en este Mundial fue la participación del Pelusa. Pelusa logro anotar un doblete en la semifinal y dio la asistencia al gol que les daría el pase a la final, Maradona se transformó en el creador del "el gol del siglo" , además de una de las polémicas más grandes del futbol como la "mano de Dios"`,
      },
      {
        headline: "Alemania 2006",
        text: "Mundial de futbol que vio el inicio de una de las mejores generaciones de España, jugadores como Xavi, Iniesta, Villa, Puyol, Ramos, Xabi Alonso, Raúl y Fernando Torres. Además, fue el mundial que le abría la puerta a Zinedine Zidane como uno de los mejores futbolistas de la historia, pero que también se dio una de las faltas más históricas de una copa del mundo, como fue el cabezazo contra Marco Materazzi, después de que éste lo provocara, dejara marcada su impecable carrera en el deporte.",
      },
      {
        headline: "Sudáfrica 2010",
        text: "Mundial de España, con Vicente Del Bosque al mando junto a la generación dorada de España que consiguió dominar el mundo con un juego de toque, también conocido como el Tiki Taka donde la posesión y un enorme control del balón en la media cancha. Fueron los líderes de una selección irrepetible que lograría lo que nadie en el futbol hasta ahora, el trío de títulos Eurocopa 2008 - Mundial 2010 - Eurocopa 2012. ",
      },
    ],
  };

  const tips = {
    h2: "Tipos de apuestas en la copa mundial de fútbol",
    p: "Te queremos presentar los tipos de apuestas con las que podrás armar tus jugadas para la próxima copa del mundo:",
    list: [
      {
        h3: "Ganador del partido 1X2 ",
        text: "Esta apuesta trata de acertar como será el resultado final del marcador, luego pasado los 90 minutos. El 1X2 se refiere a si saldrá ganador el equipo local (1), si el resultado final será un empate (X), o si el ganador será el equipo visitante. ",
      },
      {
        h3: "Más/Menos Total Goles",
        text: "Conocido comúnmente como una apuesta a la alta y baja, este mercado trata de pronosticar si el total de goles será más/menos el “numero” elegido en el mercado. Ejemplo más de 2 goles o menos de 3 goles en todo el partido.",
      },
      {
        h3: "Doble Oportunidad ",
        text: "Es una apuesta en la que se hace un doble pronóstico, 1X, 12 ó X2, es decir, se escoge que gana el local y empate, el visitante y el empate o victoria del local y el visitante. En esta quiniela no se tiene en cuenta el tiempo extra o la tanda de penaltis en caso de que los hubiera, solo cuentan los 90 minutos reglamentarios. ",
      },
      {
        h3: "Resultado final",
        text: "Es una cuota que pronostica el resultado exacto al término del partido, de acuerdo a los goles marcados por uno y otro equipo. En este mercado no se tiene en consideración la prórroga o la tanda de penaltis si los hubiese.",
      },
      {
        h3: "Marcan Ambos Equipos",
        text: "Esta apuesta como su nombre indica, nos dice que ambos equipos van a conseguir marcar, al menos, un gol en el partido. La ventaja que ofrece esta apuesta es que hay multitud de pronósticos al mismo tiempo: 1-1, 2-2, 3-3, 2-1, 1-2, 3-2, 2-3… Lo que nos otorga más posibilidades de acierto.",
      },
      {
        h3: "Primer Equipo en Marcar",
        text: "En esta cuota podrás seleccionar a que equipo apostarás considerando quien será el primero en abrir el marcador durante el partido.",
      },
      {
        h3: "Marcan Gol Durante el Partido",
        text: "Esta apuesta te permite pronosticar que equipo o jugador anotará en algún momento de los 90 minutos del partido, este pronóstico no toma en cuenta el tiempo extra o las tandas de penaltis en caso de que los hubiera.",
      },
    ],
  };

  const consejos = {
    h2: "Consejos de Codere para apuestas de futbol",
    p: "Algunos de los consejos para los jugadores de apuestas de futbol serian que siempre analicen las cuotas, informarse bien antes de apostarte a su equipo favorito, fija la cantidad que harás tu apuesta, verificar nuestra sección de promociones y si eres un nuevo jugador de Codere verifica nuestro bono de bienvenida de hasta $100 en freebets con tu primer deposito.",
  };

  const preguntas = {
    h2: "Preguntas frecuentes sobre el mundial de futbol de 2026",
    p: "Aquí podrás encontrar las preguntas más frecuentes para armar tus apuestas, parlays de la Copa del Mundo 2026 y algunas de las informaciones que más consultan sobre la Copa del Mundo en sí.",
    questions: [
      {
        question:
          "¿Qué países organizarán la siguiente copa del mundo en 2026?",
        answer:
          "La FIFA anuncio que la Copa del Mundo 2026 se llevara a cabo en México, Canadá y en los Estados Unidos. Sera la primera Copa del Mundo en llevarse a cabo en 3 países diferentes.",
      },
      {
        question: "¿Qué país tiene más copas del mundo organizadas?",
        answer:
          "México en 2026 se convertirá en el país con más mundiales organizados en la historia, ya que albergará su tercera copa del mundo, uniéndose a las de 1970 y 1986.",
      },
      {
        question:
          "¿Cuándo inician las clasificatorias para el mundial de futbol?",
        answer:
          "La clasificación para la Copa del Mundo 2026 iniciara su clasificación con Sudamérica dando el primer paso. Dicho paso daría inicio en junio del 2023.",
      },
    ],
  };

  const table_list = [
    {
      title: "La historia de las copas del mundo",
      id: "historia",
    },

    {
      title: "Tipos de apuestas en la copa mundial de fútbol",
      id: "tipos",
    },
    {
      title: "Principales estadísticas de los Mundiales de Futbol",
      id: "principales",
    },
    {
      title: "Preguntas frecuentes sobre el mundial de futbol de 2026",
      id: "preguntas",
    },
    {
      title: "Consejos de Codere para apuestas de futbol",
      id: "consejos",
    },
  ];

  return (
    <>
      <Helmet>
        {/* <title>{segmentCookieExist ? segmentedTitle : title}</title> */}
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.pa/eventos-deportivos/apuestas-mundial-fifa"
        />
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      <Floating text="La Copa del Mundo" />

      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.pa/seopages/eventos-deportivos/fifa/imgs/${
            props.flag ? "M" : "D"
          }-Header.jpg)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container>
        <div className="event">
          <Container>
            <Fade>
              <h1 className="header subtitle mt-4">
                Apuestas deportivas para el Mundial de Futbol
              </h1>
            </Fade>
            <p>{top_par}</p>

            {!props.flag ? <TableOfContents table={table_list} /> : <></>}

            <div className="para">
              <h2 id="historia" className="subtitle">
                {history.h2}
              </h2>
            </div>
            <p style={{ color: "#fff" }}>{history.p}</p>
            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "1" + jpg} width="100%" />
            </Fade>
            <div className="para">
              <h2 id="principales" className="subtitle">
                {principales.h2}
              </h2>
            </div>
            {/* <Zoom triggerOnce> */}
            <p> {principales.p}</p>
            <ul>
              {principales.list.map((p, k) => (
                <li key={k}>
                  <p>
                    <strong>{p.headline}: </strong>
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>
            {/* </Zoom> */}

            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "2" + jpg} width="100%" />
            </Fade>
            <div id="tipos">
              <div className="para">
                <h2 className="subtitle">{tips.h2}</h2>
              </div>
              <p>{tips.p}</p>
              <Container>
                {tips.list.map((t, i) => (
                  <div key={i}>
                    {/* <Zoom triggerOnce> */}
                    <h3>{t.h3}</h3>
                    <p>{t.text}</p>
                    {/* </Zoom> */}
                  </div>
                ))}
              </Container>
              <div id="consejos">
                <h2 className="subtitle">
                  Consejos de Codere para apuestas de futbol
                </h2>
                <p>{consejos.p}</p>
              </div>
              <div id="preguntas">
                <h2 style={{ color: "#79c000" }} className="subtitle">
                  {preguntas.h2}
                </h2>
                <p>{preguntas.p}</p>
                <Container>
                  <Accordion>
                    {preguntas.questions.map((q, k) => (
                      <Accordion.Item key={k} eventKey={k + ""}>
                        <Accordion.Header as={"h3"}>
                          {q.question}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>{q.answer}</p>
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
    </>
  );
}
