import { Zoom } from "react-awesome-reveal";
import { Table, Accordion } from "react-bootstrap";
import React from "react";

var questions = [
  "¿Cómo funcionan las apuestas deportivas en línea?",
  "¿Dónde están ubicadas las casas de apuestas deportivas de Codere?",
  "¿Qué tips de apuestas deportivas puedo usar para ganar?",
  "¿Qué es un parley?",
];
var answers = [
  "Las apuestas deportivas consisten en apostar una cantidad monetaria a un determinado resultado o resultado de un evento deportivo. El propósito de una apuesta deportiva es beneficiarse de un pronóstico o predicción hecha para que el apostante, y este tenga una ganancia alta por el dinero apostado (el presupuesto multiplicador dividido por la cuota)",
  "Las Casas de apuesta deportiva Codere están alrededor de toda la ciudad de Panamá, en 6 diferentes Casinos Crown ( El Panamá, el Hipódromo, Continental, Riande, Sheraton, Soloy), , y muchos más que puedes ver al hacer clic en nuestra página web en la sección de Locales, donde podrás ver por google maps todas sucursales y direcciones.",
  "Los mejores Tips los puedes conseguir en nuestras redes sociales, en instagram @coderepan, donde tenemos nuestros videos semanales con nuestros influencers Rony Vargas y Nicolle Ferguson, los cuales dan su análisis en los diferentes partidos, para ayudar a nuestros clientes a hacer las mejores selecciones posibles para garantizar sus victorias en sus apuestas.",
  "En Codere, al hacer una apuesta deportiva con varias selecciones de juegos, a esto se le llama un parlay, el cual entre más juegos tengas, la cantidad de ganancia aumenta exponencialmente, para ganar una apuesta de tipo parlay, todos los juegos seleccionados deben cumplir con el pronóstico escogido, dentro de Codere tenemos una mejora del porcentaje de ganancia al poner más juegos, es decir además de aumentar la cantidad de ganancia por las líneas, damos un porcentaje extra por selecciones adicionales.",
];

function Content(props) {
  return (
    <div className="content-container">
      <div className="row">
        <div className="col-12 col-sm-4 left-col">
          <Zoom triggerOnce>
            <h1 className="bottomContentSubTitle">
              Bienvenido a la mejor casa de apuestas deportivas en Panamá
            </h1>
            <p className="bottomContentText">
              Gracias por aceptar el reto y ser parte de la mejor casa de
              apuestas en Panamá. Con nosotros podrás probar todos tus
              conocimientos y estrategias deportivas para poder ganar mucho
              dinero con las mejores cuotas del mercado.
            </p>
            <p>
              Podrás apostar online desde la comodidad de tu casa cuando
              quieras. Todas tus apuestas deportivas son seguras, gracias al
              respaldo de una multinacional que opera las mejores casas
              deportivas del mundo en países de Suramérica y Europa.
            </p>
            <p>
              Con Codere podrás realizar tus apuestas deportivas online con las
              ligas más importantes, los mejores equipos y los mejore jugadores:
            </p>
            <ul>
              <li>
                <a href="https://www.codere.pa/cuotas-deportivas/apuestas-futbol">
                  Apuestas fútbol
                </a>
              </li>
              <li>
                <a href="https://www.codere.pa/cuotas-deportivas/apuestas-nfl-futbol-americano">
                  Apuestas NFL
                </a>
              </li>
              <li>
                <a href="https://www.codere.pa/cuotas-deportivas/apuestas-beisbol-grandes-ligas">
                  Apuestas MLB
                </a>
              </li>
              <li>Apuestas deportivas en vivo</li>
              <li>Apuestas NBA</li>
              <li>Apuestas Champions</li>
            </ul>
            <p>Y mucha más variedad de apuestas deportivas para ti</p>
            <p>
              Somos sin duda alguna el mejor lugar en Panamá para realizar todas
              tus apuestas online, juega diviértete y genera ganancias. Las
              mejores apuestas en línea están en Codere.
            </p>
            <h2 className="bottomContentSubTitle">
              Guía rápida de Apuestas Deportivas en Codere
            </h2>
            <div className="bottomContentText">
              <p>
                El mundo de las apuestas deportivas es emocionante y divertido,
                donde con algo de información, conocimiento y estudio de
                estadísticas, podrás armar las mejores estrategias para ganar.
              </p>
              <p>
                Contamos con varios tipos de apuestas, tanto directas como
                parlay. ¿Qué es un parlay? Es un tipo de apuesta donde combinas
                varios resultados de ganadores o empates que te ayudan a
                maximizar tus ganancias.
              </p>
              <p>
                Además de contar con una plataforma online amigable y fácil de
                usar, te brindaremos tips para que sepas como ganar dinero con
                las apuestas deportivas para que junto a tus conocimientos,
                estrategias, astucia e intuición, se conviertan en muchas horas
                de alegrías y diversión para ti.
              </p>
            </div>
          </Zoom>
        </div>
        <div className="col-12 col-sm-4 middle-col">
          <Zoom triggerOnce>
            <h3 className="bottomContentSubTitle">Entender a los Equipos</h3>
            <div className="bottomContentText">
              <p>
                Sin duda alguna que ser un estudioso de los deportes te da una
                gran ventaja a la hora de realizar tus apuestas deportivas. A la
                hora de estudiar a los equipos, es importante tener toda la
                información a mano y conocer su forma, fortalezas, debilidades,
                lista de lesionados y varios factores más que pueden influir en
                su desempeño. Es casi como si fueras el director técnico de un
                equipo y estudias a tu rival de la próxima semana. Todos los
                números y toda la información que puedas recopilar te ayudará.
              </p>
            </div>
            <h3 className="bottomContentSubTitle">
              Conocer Tus Probabilidades
            </h3>
            <div className="bottomContentText">
              <p>
                Es muy importante saber de qué manera y porque vamos a realizar
                nuestras jugadas. Sabemos que entre más apuestes, mayor puede
                ser el premio, pero también es importante encontrar un balance.
                Todas las ligas son diferentes y ningún partido es igual a otro,
                por lo cual se debe realizar la tarea y reunir la mayor cantidad
                de información para así armar la mejor estrategia y poder
                encontrar un balance para poder disfrutar el juego.
              </p>
            </div>
            <h3 className="bottomContentSubTitle">Aprender las Estrategias</h3>
            <div className="bottomContentText">
              <p>
                Así como los equipos y jugadores arman sus estrategias para
                ganar de cara a sus partidos, también debemos tener las nuestras
                a la hora de realizar nuestras apuestas deportivas. Tus
                conocimientos, astucia, expectativa y datos te ayudarán en tus
                decisiones.
              </p>
              <p>
                También puedes guiarte de las estrategias que le funcionan a
                otros y tenerla de referencia, pero recuerda siempre mantenerte
                fiel a tus conocimientos y crear las tuyas propias. Tener una
                estrategia bien definida es clave para poder ganar con tus
                apuestas deportivas.
              </p>
            </div>
            <h2 className="bottomContentSubTitle">
              Tips para Apostar Responsablemente
            </h2>
            <div className="bottomContentText">
              <p>
                Lo más importante a la hora de realizar apuestas deportivas, es
                entender que es un juego y como tal, debe ser divertido. A veces
                se gana, a veces se pierde. Es bueno celebrar nuestras victorias
                y aprender de nuestras derrotas, como lo hacen los
                profesionales.
              </p>
              <p>
                Realiza apuestas deportivas seguras. Si bien no tienes seguro el
                100% de probabilidad de ganar, sabrás que tienes una apuesta
                deportiva con bases y con la que puedes estar tranquilo con su
                resultado.
              </p>
              <p>
                Este es un mundo apasionante y en Codere queremos que te lo
                goces desde el primer día que decidas jugar en nuestra casa.
                Sigue estos tips, así como tu estrategia, y seguro la pasarás
                muy bien.
              </p>
              <p>
                Apuesta lo que puedas, nunca más. Sabemos que los deportes
                levantan muchas emociones, pero es importante saber controlarlas
                y poner un límite de cuanto puedes y quieres gastar.
              </p>
            </div>
          </Zoom>
        </div>
        <div className="col-12 col-sm-4 right-col">
          <Zoom triggerOnce>
            <p>
              Distribuye el presupuesto. La manera más recomendable luego de
              elegir un monto para tus apuestas deportivas, es saberlo
              distribuir y tomar el dinero destinado al juego como dinero que ya
              se fue. Ya sea por día, por semana, por equipo, por liga o como
              prefieras. De esa manera podrás divertirte y jugar de manera
              inteligente.
            </p>
            <p>
              No apuestes para recuperar. El dinero perdido, perdido está y
              queda en el pasado. Apuesta siempre mirando adelante y pensando en
              futuras oportunidades para ganar.
            </p>
            <p>
              Este es un mundo apasionante y en Codere queremos que te lo goces
              desde el primer día que decidas jugar en nuestra casa. Sigue estos
              tips, así como tu estrategia, y seguro la pasarás muy bien.
            </p>
            <h2 className="bottomContentSubTitle">
              EL Mejor Casino online de Panamá está en Codere.pa
            </h2>
            <div className="bottomContentText">
              <p>
                Ahora también ofrecemos la mejor plataforma de casino online en
                Panamá, con una variedad de juegos de Casino como las
                tradicionales ruletas virtuales, tragamonedas, blackjack y
                muchos más.
              </p>
              <p>
                Jugar con nosotros, es una experiencia novedosa e intuitiva, que
                hará que te sientas como en un casino físico, pero desde la
                comodidad de tu casa porque nosotros cambiamos el juego.
              </p>
              <p>
                Es hora de que conozcas nuestros juegos en línea y sigas
                disfrutando de lo mejor del casino online desde tu dispositivo
                móvil o computadora, a un solo click de distancia..
              </p>
              <p>
                Aquí encontrarás todas las mesas y máquinas de slots que te
                puedas imaginar. Puedes recorrer nuestras salas y escoger el
                juego que más te divierta, siempre con la seguridad de que
                trabajamos con integridad y transparencia..
              </p>
              <p>
                Ningún otro casino online en Panamá te va a consentir tanto como
                Codere. Buscando siempre la mejor experiencia para el usuario,
                tendremos sorpresas, promociones, bonos y mucho más para ti.
                Todos nuestros esfuerzos buscan asegurarte una experiencia
                inigualable, y estamos seguros, que así será..
              </p>
            </div>
            <h2 className="bottomContentSubTitle">
              ¿Por qué Codere es el sitio más seguro para hacer tus apuestas
              deportivas y juegos de casino?
            </h2>
            <div className="bottomContentText">
              <p>
                40 años de presencia en el mundo, creciendo consistentemente
                como multinacional, respaldan todas nuestras operaciones y esto
                nos ha permitido dominar el know-how de la industria y ofrecer
                plataformas totalmente confiables y seguras.
              </p>
              <p>
                En Panamá operamos bajo la vigilancia de la Junta de Control de
                Juegos cumpliendo con toda la legislación vigente. Todas
                nuestras transacciones y plataformas cumplen los más altos
                estándares en seguridad y privacidad de la industria.
              </p>
            </div>
          </Zoom>
        </div>
      </div>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>🏆 Establecido</td>
            <td>2005</td>
          </tr>
          <tr>
            <td>⚽ Apuestas Deportivas</td>
            <td>Apuestas NFL, Apuestas MLB, Apuestas LaLiga Santander y más</td>
          </tr>
          <tr>
            <td>🎰 Juegos de Casino</td>
            <td>Máquinas tragamonedas (slots), ruleta y blackjack</td>
          </tr>
          <tr>
            <td>🎲 Licencia</td>
            <td>
              Contratos Nº 38 de 22/01/2003 y Nº 193 de 4/10/2005, y Resolución
              Nº. 921 de 21/09/2017.
            </td>
          </tr>
          <tr>
            <td>✔️ Moneda</td>
            <td>Dólares</td>
          </tr>
          <tr>
            <td>💰 Depósito mínimo</td>
            <td>Minimo $10 Dolares</td>
          </tr>
          <tr>
            <td>💸 Limites de Retiros</td>
            <td>Retiro mínimo es de $50.</td>
          </tr>
          <tr>
            <td>💳 Formas de Pago </td>
            <td>Visa, Mastercard, Tranferecnia Bancaria, Punto Pago</td>
          </tr>
        </tbody>
      </Table>

      <section id="acc-section">
        <h2 className="bottomContentTitle">
          Preguntas frecuentes sobre Apuestas deportivas en Panamá
        </h2>
        <Accordion
          className="content-accordion"
          defaultActiveKey={["0"]}
          alwaysOpen
        >
          {answers.map((answer, index) => {
            return (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header as="h3">
                  <p>{questions[index]}</p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>{answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </section>
    </div>
  );
}

export default Content;
