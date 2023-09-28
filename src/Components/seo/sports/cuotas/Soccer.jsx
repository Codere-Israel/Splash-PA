import { Container, Accordion } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Floating from "../../Floating";
import TableOfContents from "../../TableOfContents";

export default function Soccer(props) {
  const title = "Apuestas de fútbol ⚽ en Panamá | Codere®";
  const description =
    "Conoce los diferentes tipos de apuestas que puedes realizar en Codere Online. Apuesta en partidos de Fútbol y aumenta tu pasión ⚽.";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo apostar al fútbol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Está entre 3 opciones apostar al ganador del partido, perdedor del partido o empate, también cuenta con más de 150 proposiciones para lo que guste.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo realizar pronósticos en fútbol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ver resultados entre enfrentamientos anteriores entre ambos equipos, y su rendimiento reciente, ayudará a hacer un pronóstico de fútbol. También ayuda ver programas deportivos o canales de youtube o Instagram con tipster, el cual Codere posee en redes sociales, para escuchar la opinión de un experto para sentirse seguro al hacer su apuesta deportiva.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién tiene más títulos Real Madrid o Barcelona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Real Madrid 34 vs Barcelona 26 (Liga española) Real Madrid 13 vs Barcelona 5 (Champions),Real Madrid 19 vs Barcelona 30 (Copa del Rey), Real Madrid (10) vs Barcelona (5) (Super Copa de Europa), Real Madrid(4) vs Barcelona (3) (Mundial de Clubes), Real Madrid (10) vs Barcelona (13) (Super Copa de España)",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos equipos hay en la liga española?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "20 equipos, de los cuales Los tres últimos equipos descenderán a la Segunda División y, de esta, ascenderán recíprocamente los dos primeros clasificados y un tercero vencedor de un sistema de eliminatorias, reemplazando así a los equipos que desciendan. El tercer ascenso desde Segunda División determinado por el sistema de eliminatorias será el vencedor de una final compuesta entre el ganador de la eliminatoria entre el tercer y sexto mejor clasificados, y el ganador de la eliminatoria entre el cuarto y quinto mejor clasificados. Las eliminatorias se jugarán en la ida en el campo del peor clasificado en la competición regular. Este sistema fue introducido en la temporada 2010-11, mientras que anteriormente ascendía directamente el tercer mejor clasificado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos partidos tiene la liga española?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La competición se disputa anualmente, empezando a finales del mes de agosto o principios de septiembre, y terminando en el mes de mayo o junio del siguiente año. La Primera División consta de un grupo único integrado por veinte equipos, pertenecientes a clubes de fútbol o sociedades anónimas deportivas (SAD). Siguiendo un sistema de liga, los veinte equipos se enfrentan todos contra todos en dos ocasiones una en campo propio y otra en campo contrario sumando un total de 38 jornadas. El orden de los encuentros se decide por sorteo antes de empezar la competición.",
        },
      },
    ],
  };

  const prefix = `https://www.codere.pa/seopages/cuotas/Soccer/${
    props.flag ? "M" : "D"
  }-Soccer-`;
  const postfix = ".jpg";

  const table_list = [
    {
      title: "Principales ligas de fútbol en el mundo",
      id: "principales",
    },
    {
      title: "Equipos destacados de La Liga Española",
      id: "equipos",
    },
    {
      title: "Tips y estrategias para realizar apuestas en fútbol",
      id: "tips",
    },
    {
      title: "Preguntas frecuentes sobre las apuestas en fútbol",
      id: "preguntas",
    },
  ];

  const top_par = {
    h1: "Vive la pasión por las apuestas de fútbol",
    p: "Vive la pasión del fútbol con Codere, donde puedes apostar a las mejores ligas del mundo, escoge a tu equipo favorito con las mejores líneas para que ganes en grande",
  };

  const principales = {
    id: "principales",
    h2: "Principales ligas de fútbol en el mundo",
    p: "Las mejores ligas del mundo son las Europeas, donde se originó el deporte, la liga más competitiva ahora mismo es la Premier League de Inglaterra; En España contamos con La Liga Española, en Alemania con la Bundesliga, en Francia con la Ligue 1, en Italia con La Serie A, en Holanda la Eredivisie, en Portugal La Liga NOS, y dentro de todas ellas la mayor competición de Europa La Champions League. En América, también cuenta con los mejores jugadores de la historia del deporte saliendo de estas ligas para explotar en Europa se encuentra, en Argentina la Liga Argentina Primera División, en México La Liga MX, en los Estados Unidos de América la MLS,en brasil el Brasileirao Seria A, y en conjunto de todas (con excepción de estados unidos) la máxima competición en América La Copa Libertadores.",
  };

  const equipos = {
    id: "equipos",
    h2: "Equipos destacados de La Liga Española",
    p: "A lo largo la historia de la liga española solo 3 equipos han participado en todas las competiciones en primera división, es decir, no han descendido en ninguna temporada, estos son el Real Madrid, FC Barcelona, y el Atlético de Madrid, estos tres gigantes han impactado en la historia no solo como los mejores equipos de España sino del mundo, entre otros gigantes que también han competido, no solo con ellos sino en la Champions y Europa League están el Real Sociedad, Sevilla, Valencia, Villarreal, Athletic de Bilbao, Celta de Vigo, y Real Betis, el impacto que tiene los equipos de España en el mundo es lo que lo han mantenido como una de las top 3 mejores ligas de todo el mundo.",
  };

  const tips = {
    id: "tips",
    h2: "Tips y estrategias para realizar apuestas en fútbol",
    ol: [
      "Apuestas a la línea asiática disminuye tu margen de error pero disminuye tu ganancia",
      "Ver rendimiento de encuentros anteriores ayuda para determinar marcador exacto",
      "Apostar al favorito en casa siempre es bueno",
      "Antes que empiece la liga puedes hacer apuestas deportivas futuras de las cuales puede apostar quién ganará la liga y quien será el mayor goleador de la liga",
      "Cuando se tienen partidos cerrados puedes apostar el resultado de ambas mitades por separado, apostar el resultado del primer tiempo y el resultado del segundo tiempo.",
      "Existe la apuesta de la doble oportunidad la cual consiste en 3 opciones: equipo A gana o empata, equipo B gana o empata o ambos equipos ganan, ósea que no habrá empate o derrota en el juego.",
      "Puedes también apostar por el jugador específico que anotara, también puedes apostar over/ under de goles que tendrá en el juego.",
      "También puedes apostar quien tendrá el primer tiro de esquina, primer tiro libre, primer gol, último gol.",
      "Tambien puede apostar cantidad de tarjetas amarillas que habrá en el juego entre ambos equipo, también si habrá tarjeta roja durante el juego",
      "En finales de torneos, puede apostar si el juego se ira a tiempo extra y penales, importante al hacer su selección de ganador incluir que gana incluyendo si el juego se va a tiempo extra o penales ya que si no lo hace, y su equipo gana sin poner esa especificación, pierde su apuesta deportiva",
    ],
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre las apuestas en fútbol",
    inner: [
      {
        h3: "¿Cómo apostar al fútbol?",
        p: "Está entre 3 opciones apostar al ganador del partido, perdedor del partido o empate, también cuenta con más de 150 proposiciones para lo que guste.",
      },
      {
        h3: "¿Cómo realizar pronósticos en fútbol?",
        p: "Ver resultados entre enfrentamientos anteriores entre ambos equipos, y su rendimiento reciente, ayudará a hacer un pronóstico de fútbol. También ayuda ver programas deportivos o canales de youtube o Instagram con tipster, el cual Codere posee en redes sociales, para escuchar la opinión de un experto para sentirse seguro al hacer su apuesta deportiva.",
      },
      {
        h3: "¿Quién tiene más títulos Real Madrid o Barcelona?",
        p: "Real Madrid 34 vs Barcelona 26 (Liga española) Real Madrid 13 vs Barcelona 5 (Champions),Real Madrid 19 vs Barcelona 30 (Copa del Rey), Real Madrid (10) vs Barcelona (5) (Super Copa de Europa), Real Madrid(4) vs Barcelona (3) (Mundial de Clubes), Real Madrid (10) vs Barcelona (13) (Super Copa de España)",
      },
      {
        h3: "¿Cuántos equipos hay en la liga española?",
        p: "20 equipos, de los cuales Los tres últimos equipos descenderán a la Segunda División y, de esta, ascenderán recíprocamente los dos primeros clasificados y un tercero vencedor de un sistema de eliminatorias, reemplazando así a los equipos que desciendan. El tercer ascenso desde Segunda División determinado por el sistema de eliminatorias será el vencedor de una final compuesta entre el ganador de la eliminatoria entre el tercer y sexto mejor clasificados, y el ganador de la eliminatoria entre el cuarto y quinto mejor clasificados. Las eliminatorias se jugarán en la ida en el campo del peor clasificado en la competición regular. Este sistema fue introducido en la temporada 2010-11, mientras que anteriormente ascendía directamente el tercer mejor clasificado.",
      },
      {
        h3: "¿Cuántos partidos tiene la liga española?",
        p: "La competición se disputa anualmente, empezando a finales del mes de agosto o principios de septiembre, y terminando en el mes de mayo o junio del siguiente año.",
        p2: "La Primera División consta de un grupo único integrado por veinte equipos, pertenecientes a clubes de fútbol o sociedades anónimas deportivas (SAD). Siguiendo un sistema de liga, los veinte equipos se enfrentan todos contra todos en dos ocasiones una en campo propio y otra en campo contrario sumando un total de 38 jornadas. El orden de los encuentros se decide por sorteo antes de empezar la competición.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.pa/cuotas-deportivas/apuestas-futbol"
        />
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>
      <Floating text="La Fiesta del fútbol" />

      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.pa/seopages/cuotas/Soccer/${
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

            <div id={tips.id} className="mt-4">
              <h2 className="subtitle">{tips.h2}</h2>
              <ol style={{ color: "#fff" }}>
                {tips.ol.map((li, k) => (
                  <li key={k}>{li}</li>
                ))}
              </ol>
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
