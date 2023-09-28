import { Container, Accordion } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Floating from "../../Floating";
import TableOfContents from "../../TableOfContents";

export default function Baseball(props) {
  const title = "Apuestas de Béisbol ⚾ en Panamá | Codere®";
  const description =
    "Apuesta en Codere online a tu equipo favorito de béisbol de la MLB ⚾ juega en línea y pronostica quien se llevará la serie mundial.";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuántos jugadores tienen un equipo de béisbol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los equipos de béisbol están formados por 9 personas en cada equipo. Aunque en total, contando a los no titulares que se encuentran en el banco son un total de 23 jugadores por cada equipo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es un hit en béisbol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Si la bola toca el suelo antes de que ningún jugador a la defensiva la atrape, y el bateador logra alcanzar la primera base antes de que los defensores consigan tocar con la bola o pisar la primera base (out), se denomina "Sencillo". Si el bateador consigue llegar hasta la segunda base, sin que el equipo a la defensiva cometa ningún error, se denomina "Doble", si llega hasta la tercera base (sin error de la defensa) se denomina "Triple", y si llega a home (sin error de la defensa) se denomina "Homerun”. Si la bola sale volando por encima del límite de fondo de la zona de juego, es un cuadrangular o "jonrón" -del inglés "homerun"-, es decir, el bateador da la vuelta al cuadro hasta llegar al home y se anota una carrera. Si además había alguno de sus compañeros en las bases, ellos también corren hasta el home y anotan carreras, una por cada jugador que hubiera en base y otra que se anota el bateador.',
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos árbitros hay en un partido de béisbol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El árbitro, ampáyer u ompayer (en inglés: umpire) es la persona encargada en arbitrar un juego de béisbol.1​ Solo debe haber 4 ampáyeres, los ampáyeres lineales, el ampáyer central y el principal. Las decisiones de los umpires son inapelables.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos episodios se juegan en el béisbol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El equipo que anote más carreras al cabo de los nueve (9) episodios, llamados innings (o entradas) que dura el encuentro, es el que resulta ganador. Si al término de las nueve entradas regulares persiste un marcador igualado en carreras, el encuentro se extiende cuanto sea necesario para que haya un ganador, según las reglas básicas del juego no existe el empate, permitido solo en ligas amateurs e infantiles para limitar el desgaste de los jugadores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es fly en beisbol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Una pelota bateada que, sin golpear antes el campo, se eleva por los aires, siendo necesario atraparla en su descenso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos juegos se juegan en temporada regular y postemporada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Una temporada normalmente dura desde abril hasta septiembre. Cada equipo juega 162 partidos de temporada regular.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es el Juego de las Estrellas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los primeros días de julio marcan la mitad de la temporada, durante la cual se hace una pausa de tres días y se disputa el Juego de Estrellas. Se disputa entre jugadores de la Liga Nacional agrupados en un solo conjunto contra jugadores de la Liga Americana dispuestos en manera similar. Hasta la temporada 2017, la liga quién ganará este partido, tenía la ventaja de local para La Serie Mundial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué son los premios de guante de oro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El Guante de Oro es el premio otorgado en las Grandes Ligas de Béisbol al final de cada temporada al jugador que sea defensivamente excepcional en su posición y es presentado por la marca Rawlings. El premio se presenta a 18 jugadores en total cada año, uno por cada posición en la Liga Americana y la Liga Nacional. En el caso de los jardineros, el premio no va a un jardinero izquierdo, uno central y uno derecho, sino que va a los tres jardineros más destacados defensivamente, sin tomar en cuenta en que zona del jardín juegan. Algunos críticos consideran que se debe otorgar un Guante de Oro por cada posición, ya que cada zona del jardín no es igual a las otras. La votación para quienes recibirán el Guante de Oro es llevada a cabo por los entrenadores y mánager.1​ Los mánager no pueden votar por sus propios jugadores.",
        },
      },
    ],
  };

  const prefix = `https://www.codere.pa/seopages/cuotas/Baseball/${
    props.flag ? "M" : "D"
  }-Baseball-`;
  const postfix = ".jpg";

  const table_list = [
    {
      title: "Principales ligas de béisbol",
      id: "principales",
    },
    {
      title: "Equipos destacados de la Major League Baseball",
      id: "equipos",
    },
    {
      title: "¿Cómo apostar en la liga de béisbol MLB desde Panamá?",
      id: "como_apostar",
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
    h1: "Todo lo que tienes que saber sobre las apuestas en la mlb",
    p: "Las mejor liga de béisbol del planeta la MLB, está con nosotros en Codere Panamá vive la adrenalina de la competencia por el campeonato de la serie mundial en donde podrás apostar a tu equipo favorito para ganar",
  };

  const principales = {
    id: "principales",
    h2: "Principales ligas de béisbol",
    p: "La mejor liga, la más competitiva y con las mayores apuestas deportivas, se encuentra en los Estados Unidos, con la Major League Baseball (MLB) que cuenta con 30 equipos, de los cuales se dividen en 2 ligas, la Americana y la Nacional, de las cuales sale un representante de cada una para llegar a la Serie Mundial; La que le sigue es la Liga Japonesa de Béisbol Profesional (Nippon) que se encuentra en Japón, la cual cuenta con 12 equipos y esta se divide en 2 ligas, La Liga Central y La Liga del Pacifico, de los cuales sale un representante de cada conferencia para competir por la Serie de Japón; La última del top 3 sería La Liga de la Organización Coreana de Béisbol o Korean Baseball Organization (KBO), esta cuenta con 10 equipos, que consta de una fase regular que comienza en abril, y después se realizan unos playoff entre los cuatro primeros por la Serie Coreana. El campeón de la liga se clasifica directamente para la final. El equipo campeón representa a Corea del Sur en la Serie de Asia, frente al campeón de la Serie de Japón (Liga Japonesa de Béisbol Profesional).",
  };

  const equipos = {
    id: "equipos",
    h2: "Equipos destacados de la Major League Baseball",
    p: "La MLB cuenta con los mejores jugadores de béisbol del mundo, la liga está dividida en dos divisiones la liga nacional y la americana, de los cuales los equipos favoritos en competir la serie mundial todos los años son los siguientes: Los New York Yankees el favorito en Panamá ya que tuvo al mejor cerrador de la historia de la Liga en Mariano Rivera , Los Boston Red sox, Los Angeles Dodgers, Atlanta Braves, Houston Astros, San Francisco Giants, St. Louis Cardinals, Tampa Bay Rays, Toronto Blue Jays, Cleveland Indians, Los Angeles Angels, Philadelphia Phillies, Washington Nationals, Milwakee Brewers, San Diego Padres, todos estas organizaciones cuentan con los mejores jugadores.",
  };

  const como_apostar = {
    id: "como_apostar",
    h2: "¿Cómo apostar en la liga de béisbol MLB desde Panamá?",
    p: "Entrando a nuestra página web Codere.pa en la sección de béisbol puede escoger la liga que más te guste, incluyendo la MLB; al entrar hacer click en el menú al costado donde dice Béisbol, al escoger la liga que más te guste te mostrará todos los juegos que habrá en el día, con su pitcher, para hacer tu apuesta deportiva.",
  };

  const tips = {
    id: "tips",
    h2: "Tipos de apuestas en béisbol",
    ul: [
      "Apuestas de ganar los primeros 5 innings",
      "Ganador del partido",
      "Cantidad de carreras Over/under",
      "Apuestas Futuras: Over/Under de victorias en temporada regular, Jugador más valioso de la liga (Nacional y Americana), Premio Cy Young (pitcheo) (Nacional y Americana) , Premios Novato del Año (nacional y Americana), Ganador de la serie Mundial, Ganador de división (Nacional y Americana)",
      "Ganador por entrada sin empate",
      "Primer Equipo en anotar 3, 5, 7, Carreras",
    ],
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes en béisbol",
    inner: [
      {
        h3: "¿Cuántos jugadores tienen un equipo de béisbol?",
        p: `Si la bola toca el suelo antes de que ningún jugador a la defensiva la atrape, y el bateador logra alcanzar la primera base antes de que los defensores consigan tocar con la bola o pisar la primera base (out), se denomina "Sencillo". Si el bateador consigue llegar hasta la segunda base, sin que el equipo a la defensiva cometa ningún error, se denomina "Doble", si llega hasta la tercera base (sin error de la defensa) se denomina "Triple", y si llega a home (sin error de la defensa) se denomina "Homerun”. Si la bola sale volando por encima del límite de fondo de la zona de juego, es un cuadrangular o "jonrón" -del inglés "homerun"-, es decir, el bateador da la vuelta al cuadro hasta llegar al home y se anota una carrera. Si además había alguno de sus compañeros en las bases, ellos también corren hasta el home y anotan carreras, una por cada jugador que hubiera en base y otra que se anota el bateador.`,
      },
      {
        h3: "¿Cuántos árbitros hay en un partido de béisbol?",
        p: "El árbitro, ampáyer u ompayer (en inglés: umpire) es la persona encargada en arbitrar un juego de béisbol. Solo debe haber 4 ampáyeres, los ampáyeres lineales, el ampáyer central y el principal. Las decisiones de los umpires son inapelables.",
      },
      {
        h3: "¿Cuántos episodios se juegan en el béisbol?",
        p: "El equipo que anote más carreras al cabo de los nueve (9) episodios, llamados innings (o entradas) que dura el encuentro, es el que resulta ganador. Si al término de las nueve entradas regulares persiste un marcador igualado en carreras, el encuentro se extiende cuanto sea necesario para que haya un ganador, según las reglas básicas del juego no existe el empate, permitido solo en ligas amateurs e infantiles para limitar el desgaste de los jugadores.",
      },
      {
        h3: "¿Qué es fly en beisbol?",
        p: "Una pelota bateada que, sin golpear antes el campo, se eleva por los aires, siendo necesario atraparla en su descenso.",
      },
      {
        h3: "¿Cuántos juegos se juegan en temporada regular y postemporada?",
        p: "Una temporada normalmente dura desde abril hasta septiembre. Cada equipo juega 162 partidos de temporada regular.",
        p2: "Al concluir la temporada regular, los campeones de las tres divisiones de cada liga, junto con los dos equipos de mejor récord entre el resto (llamado wild card o comodín), califican para los juegos de postemporada. La post temporada consta de cuatro rondas: Wild Card de la Liga Americana y el Wild Card de la Liga Nacional los dos equipos con mejor récord entre los que no ganaron la división se enfrentan en un partido único donde el ganador avanza a las series divisionales donde jugarían en contra del equipo de mejor porcentaje de victorias entre los campeones de división. Serie Divisional de la Liga Americana y la Serie Divisional de la Liga Nacional, ya con cuatro equipos en la Liga Americana y en la Liga Nacional, el wild card o comodín enfrenta al equipo de mejor porcentaje de victorias entre los campeones de división, y los dos restantes a su vez llevan a cabo su tanda de partidos a jugar, el vencedor es el que gana 3 partidos en una serie de 5 partidos. Serie de Campeonato de la Liga Americana y la Serie de Campeonato de la Liga Nacional, aquí se enfrentan los dos equipos ganadores de su respectiva serie divisional, el primero que gane 4 partidos en una serie de 7 partidos es el vencedor. Los ganadores de la Serie de Campeonato avanzaron a la Serie Mundial, que será a ganar cuatro de siete juegos.Serie Mundial, ya en esta instancia se enfrentan los 2 mejores equipos de ambas ligas, se juegan a ganar 4 de 7 partidos posibles.",
      },
      {
        h3: "¿Qué es el Juego de las Estrellas?",
        p: "Los primeros días de julio marcan la mitad de la temporada, durante la cual se hace una pausa de tres días y se disputa el Juego de Estrellas. Se disputa entre jugadores de la Liga Nacional agrupados en un solo conjunto contra jugadores de la Liga Americana dispuestos en manera similar. Hasta la temporada 2017, la liga quién ganará este partido, tenía la ventaja de local para La Serie Mundial.",
      },
      {
        h3: "¿Qué son los premios de guante de oro?",
        p: "El Guante de Oro es el premio otorgado en las Grandes Ligas de Béisbol al final de cada temporada al jugador que sea defensivamente excepcional en su posición y es presentado por la marca Rawlings. El premio se presenta a 18 jugadores en total cada año, uno por cada posición en la Liga Americana y la Liga Nacional. En el caso de los jardineros, el premio no va a un jardinero izquierdo, uno central y uno derecho, sino que va a los tres jardineros más destacados defensivamente, sin tomar en cuenta en que zona del jardín juegan. Algunos críticos consideran que se debe otorgar un Guante de Oro por cada posición, ya que cada zona del jardín no es igual a las otras. La votación para quienes recibirán el Guante de Oro es llevada a cabo por los entrenadores y mánager. Los mánager no pueden votar por sus propios jugadores.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.pa/cuotas-deportivas/apuestas-beisbol-grandes-ligas"
        />
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>
      <Floating text="Anotate un homerun" />

      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.pa/seopages/cuotas/Baseball/${
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
            <div id={principales.id} className="mt-4">
              <h2 className="subtitle">{principales.h2}</h2>
              <p>{principales.p}</p>
            </div>
            <LazyLoadImage src={prefix + "1" + postfix} width="100%" />
            <div id={equipos.id} className="mt-4">
              <h2 className="subtitle">{equipos.h2}</h2>
              <p>{equipos.p}</p>
            </div>
            <div id={como_apostar.id} className="mt-4">
              <h2 className="subtitle">{como_apostar.h2}</h2>
              <p>{como_apostar.p}</p>
            </div>
            <div id={tips.id} className="mt-4">
              <h2 className="subtitle">{tips.h2}</h2>
              <ul style={{ listStyleType: "" }}>
                {tips.ul.map((li, k) => (
                  <li key={k}>{li}</li>
                ))}
              </ul>
            </div>

            <LazyLoadImage src={prefix + "2" + postfix} width="100%" />

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
