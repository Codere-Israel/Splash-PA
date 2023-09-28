import { Container, Accordion } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Floating from "../../Floating";
import TableOfContents from "../../TableOfContents";

export default function NFL(props) {
  const title = "Apuestas Futbol Americano de la NFL 🏈 en Panamá | Codere®";
  const description =
    "Vive la emoción del futbol americano 🏈 en Codere Panamá. Apuesta a los mejores equipos de la NFL rumbo al SuperBowl y juega en grande.";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿En qué consisten los  playoffs en la National Football League?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La postemporada (conocida también como “Playoffs”) consta de cuatro jornadas adicionales al cierre de la temporada regular, en donde juegan los siete mejores equipos de cada una de las conferencias (catorce en total). Esta es su estructura (tomando como ejemplo tan sólo una de las conferencias, pudiendo extrapolarse a la otra): Mejor campeón de división (1), Segundo mejor campeón de división (2), Tercer mejor campeón de división (3), Cuarto mejor campeón de división (4),Comodín con mejor balance, no campeón (5),Comodín con segundo mejor balance, no campeón (6). Comodín con tercer mejor balance, no campeón (7).",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué son y cómo se definen los comodines en la NFL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los comodines son los equipos con mejores records que no son líderes de división, que aplican para competir en los playoffs",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es el super bowl?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es el último juego de los playoffs de la NFL, para determinar el campeón de la liga. Que precisa de planificación, programación e implementación exhaustivas, siendo necesario recibir las candidaturas de los equipos y las ciudades que aspiran a figurar como sedes con varios años de anticipación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo apostar en la temporada NFL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con Codere Panamá, se puede apostar hasta 263 preposiciones por juego, puede apostar el resultado directo, por cuanto un equipo puede ganar y totales de puntos por ejemplo. El menú de apuestas deportivas lo encuentras al costado de la página donde dice futbol americano, ahí haciendo clic, saldrá la NFL donde saldrán los juegos de la semana correspondiente y ahí podrá hacer su apuesta sencilla o parlay dependiendo a la cantidad de juegos que quiera apostar.",
        },
      },
    ],
  };

  const prefix = `https://www.codere.pa/seopages/cuotas/NFL/${
    props.flag ? "M" : "D"
  }-superbowl-`;
  const postfix = ".jpg";

  const table_list = [
    {
      title: "¿Cuáles equipos son los principales en la NFL?",
      id: "equipos",
    },
    {
      title: "Jugadores destacados",
      id: "jugadores",
    },
    {
      title: "Calendario NFL 2022",
      id: "calendario",
    },
    {
      title: "Breve Historia de la NFL",
      id: "history",
    },
    {
      title: "Consejos de apuestas de NFL",
      id: "consejos",
    },
    {
      title: "Tipos de apuestas en béisbol",
      id: "tips",
    },
    {
      title: "Preguntas frecuentes en béisbol",
      id: "preguntas",
    },
  ];

  const top_par = {
    h1: "Apuesta por la emoción en cada temporada NFL",
    p: "Vive toda la emoción de la NFL con Codere Panamá, apuesta a los mejores equipos del mundo del fútbol americano camino al SuperBowl, donde te brindamos las bolsas más atractivas para ganar en grande.",
  };

  const equipos = {
    id: "equipos",
    h2: "¿Cuáles equipos son los principales en la NFL?",
    p: "La NFL es una de las ligas que tiene la competencia más pareja en el mundo, dentro de los equipos favoritos se encuentran el actual campeón del Superbowl los Tampa Bay Bucaneers, de la liga nacional entre otros favoritos de esta división se encuentra, los Dallas Cowboys, Los Angeles Rams, Green Bay Packers, Arizona Cardinals, New York Giants, Minnesota Vikings, Seattle Seahawks, y los San Francisco 49ers; El equipo finalista del año pasado de la liga americana, también favorito son los Kansas City Chiefs, los otros principales serían los Buffalo Bills, Baltimore Ravens, New England Patriots, Pittsburgh Steelers, Tennessee Titans, Indianapolis Colts, Los Angeles Chargers, Las Vegas Raiders, y los Cincinnati Bengals.",
  };

  const jugadores = {
    id: "jugadores",
    h2: "Jugadores destacados",
    p: "Los jugadores favoritos de la NFL son los mariscales de campo los cuales controlan la ofensivo, y de ellos depende que tan bien será un equipo de fútbol americano el más destacado ahora mismo, tiene 7 anillos de superbowl y juega aún a nivel increíble a pesar de sus 44 años, Tom Brady actual MVP del super bowl otras estrellas en la posición son Patrick Mahomes, , Josh Allen, Aaron Rodgers, Lamar Jackson, Kyler Murray , Justin Helbert, Dak Prescott, Matthew Stafford, Russell Wilson, y Joe Burrow, también resaltan sus armas los mejores receptores y las cerradas de la liga que son Davante Adams, Deandre Hopkins, Tyreek Hill, Travis Kelce, Antonio Brown, George Kittle, Julio Jones, Stefon Diggs, Mike Evans, DK Metcalf, Darren Walller, Keenan Allen, y Mark Andrews; Este deporte también depende mucho del juego terrestre que es donde se originó el juego y además es la manera que los equipos ganan campeonatos los mejores corredores son Alvin Kamara, Derrick Henry, Christian Mccaffrey, Aaron Jones y Dalvin Cook. Del otro lado la defensa es el trabajo más difícil en el deporte y estos jugadores son los que hacen la diferencia para ganar los juegos, los mejores defensivos son, Jalen Ramsey, , Myles Garrett, JJ Watt, TJ Watt, Bobby Wagner, Joey Bosa, Nick Bosa, Fred Warner, Jaire Alexander, Devin White, Davonta David y Kenny Clark.",
  };

  const calendario = {
    id: "calendario",
    h2: "Calendario NFL 2022",
    p: "Temporada Regular Semanas 1-18 Empieza el el 9 de septiembre 2021 hasta el 9 de enero del 2022, con juegos todos los jueves, domingos, y lunes (un viernes y sábado por Thanksgiving) durante un lapso de 18 semanas. Los Playoffs de 2021 están programados para comenzar el fin de semana del 15 al 17 de enero con la Ronda de Comodines. Habrá tres equipos Wild Card por conferencia, y solo el mejor favorito de la conferencia recibirá un adiós en la primera ronda. Se jugarán tres juegos cada día. En la Ronda Divisional programada para el 22-23 de enero, el primer favorito de la conferencia jugará con el menor favorito restante y los otros dos equipos restantes se enfrentarán entre sí. Los ganadores de esos juegos avanzarán a los Campeonatos de la Conferencia programados para el 30 de enero. El Super Bowl LVI está programado para el 13 de febrero en el SoFi Stadium de Inglewood, California.",
  };

  const history = {
    id: "history",
    h2: "Breve Historia de la NFL",
    p: "La National Football League (NFL) , en español conocida como Liga Nacional de Fútbol Americano, es la mayor liga de fútbol americano profesional de Estados Unidos. La NFL toma la figura jurídica de asociación deportiva, controlada por sus propios miembros.1 Fue creada por once equipos en 1920 como la American Professional Football Association, cambiando su nombre por el de American Professional Football League en 1921 para modificarlo una vez más por el nombre ahora vigente en 1922. Actualmente la NFL está formada por 32 franquicias establecidas en diversas ciudades y regiones estadounidenses. Se divide en dos conferencias: la Nacional ([[Conferencia Nacional (NFC) y la Americana ([[Conferencia Americana (AFC). A su vez, cada conferencia se integra por cuatro divisiones (Norte, Sur, Este y Oeste) y cada una de ellas, por cuatro equipos. La NFL ostenta la mayor asistencia de público por partido de todas las ligas profesionales del mundo, atrayendo a 67.000 espectadores en cada partido de las temporadas 2006 y 2007. No obstante, la asistencia de público total en términos brutos de la NFL solo supone aproximadamente el 20 % de la Major League Baseball (MLB), dado que esta disputa diez veces más partidos.",
  };

  const consejos = {
    id: "",
    h2: "Consejos de apuestas de NFL",
    ol: [
      "Apostar al equipo en casa que siempre tiene esa ventaja",
      "Apostar al spread positivos altos",
      "Apostar el over con equipos ofensivos y under con equipo defensivos",
      "Cuando no esté seguro de un juego completo, pueden apostar a una mitad, también pueden apostar cualquiera de los 4 cuartos",
      "Puedes también hacer apuestas deportivas directamente apostando los estadísticos de los jugadores (recepciones, yardas y touchdowns)",
      "Puede apostar los Over/ under de yardas de pases de los mariscales de campo, para juegos con malas defensas o donde el mariscal esté un juego en desventaja, apuesta el over ya que el mariscal tendrá que pasar mucho la bola en dichas situaciones.",
      "También antes que empiece la temporada, puede hacer apuestas futuras, por ejemplo quién ganará el super bowl, quién ganará MVP, quién ganará rookie ofensivo y defensivo del año, cantidad de victorias que tendrá el equipo en la temporada, estas normalmente son de over/under",
    ],
  };

  const tips = {
    id: "tips",
    h2: "Tipos de apuestas para la NFL en Codere",
    p: "Apuesta Ganador de partido, Apuesta por el spread, Apuesta Over/Under Total de puntos, Apuestas combinadas, Player props, Apuesta ganador de primera mitad, apuesta ganador de segunda mitad, Apuesta ganador del cuarto, Apuesta Mitad con más puntos, Apuesta Cantidad de yardas en el juego, Apuesta cantidad de touchdowns en el partido.",
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre la NFL",
    inner: [
      {
        h3: "¿En qué consisten los playoffs en la National Football League?",
        p: "La postemporada (conocida también como “Playoffs”) consta de cuatro jornadas adicionales al cierre de la temporada regular, en donde juegan los siete mejores equipos de cada una de las conferencias (catorce en total). Esta es su estructura (tomando como ejemplo tan sólo una de las conferencias, pudiendo extrapolarse a la otra): Mejor campeón de división (1), Segundo mejor campeón de división (2), Tercer mejor campeón de división (3), Cuarto mejor campeón de división (4),Comodín con mejor balance, no campeón (5),Comodín con segundo mejor balance, no campeón (6). Comodín con tercer mejor balance, no campeón (7).",
      },
      {
        h3: "¿Qué son y cómo se definen los comodines en la NFL?",
        p: "Los comodines son los equipos con mejores records que no son líderes de división, que aplican para competir en los playoffs",
      },
      {
        h3: "¿Qué es el super bowl?",
        p: "Es el último juego de los playoffs de la NFL, para determinar el campeón de la liga. Que precisa de planificación, programación e implementación exhaustivas, siendo necesario recibir las candidaturas de los equipos y las ciudades que aspiran a figurar como sedes con varios años de anticipación.",
      },
      {
        h3: "¿Cómo apostar en la temporada NFL?",
        p: "Con Codere Panamá, se puede apostar hasta 263 preposiciones por juego, puede apostar el resultado directo, por cuanto un equipo puede ganar y totales de puntos por ejemplo. El menú de apuestas deportivas lo encuentras al costado de la página donde dice futbol americano, ahí haciendo clic, saldrá la NFL donde saldrán los juegos de la semana correspondiente y ahí podrá hacer su apuesta sencilla o parlay dependiendo a la cantidad de juegos que quiera apostar.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.pa/cuotas-deportivas/apuestas-nfl-futbol-americano"
        />
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>
      <Floating text="Haz tu mejor jugada" />

      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.pa/seopages/cuotas/NFL/${
            props.flag ? "M" : "D"
          }-Header.jpg)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container>
        <div className="event">
          <Container style={{ marginTop: "2rem" }}>
            <h1 className="header subtitle">{top_par.h1}</h1>
            <p>{top_par.p}</p>
            {!props.flag ? <TableOfContents table={table_list} /> : <></>}
            <div id={equipos.id} className="mt-4">
              <h2 className="subtitle">{equipos.h2}</h2>
              <p>{equipos.p}</p>
            </div>
            <div id={jugadores.id} className="mt-4">
              <h2 className="subtitle">{jugadores.h2}</h2>
              <p>{jugadores.p}</p>
            </div>
            <LazyLoadImage src={prefix + "1" + postfix} width="100%" />

            <div id={calendario.id} className="mt-4">
              <h2 className="subtitle">{calendario.h2}</h2>
              <p>{calendario.p}</p>
            </div>
            <div id={history.id} className="mt-4">
              <h2 className="subtitle">{history.h2}</h2>
              <p>{history.p}</p>
            </div>
            <div id={consejos.id} className="mt-4">
              <h2 className="subtitle">{consejos.h2}</h2>
              <ol style={{ color: "#fff" }}>
                {consejos.ol.map((li, k) => (
                  <li key={k}>{li}</li>
                ))}
              </ol>
            </div>

            <LazyLoadImage src={prefix + "2" + postfix} width="100%" />
            <div id={tips.id} className="mt-4">
              <h2 className="subtitle">{tips.h2}</h2>
              <p>{tips.p}</p>
            </div>
            <div className="mt-4" id={preguntas.id}>
              <h2 className="subtitle">{preguntas.h2}</h2>
            </div>
            <Accordion>
              {preguntas.inner.map((q, k) => (
                <Accordion.Item key={k} eventKey={k}>
                  <Accordion.Header className="subtitle" as={"h3"}>
                    {q.h3}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{q.p}</p> {q.p2 ? <p>{q.p2}</p> : null}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <LazyLoadImage src={prefix + "3" + postfix} width="100%" />
          </Container>
        </div>
      </Container>
    </>
  );
}
