import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, Table } from "react-bootstrap";
import Timer2 from "./Timer2.0";
import banners from "../JSON/data.json";
import { useState } from "react";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

var imgs = [];

const regis = "https://m.codere.pa/deportespanama/#/RegistroPAPage";

function MySwiper(props) {
  const [showTycModal, setShowTycModal] = useState(false);
  const DATE_TO_COUNT = "2022-12-18T15:00:00Z";
  const [showTimer, setShowTimer] = useState(false);
  const [delay, setDelay] = useState(400);

  const indexHandler = (swiper) => {
    if (swiper.realIndex === 0) setShowTimer(true);
    else {
      setShowTimer(false);
      setDelay(100);
    }
  };

  function dateInBetween(banner) {
    return (
      new Date() >= new Date(banner.startDate) &&
      new Date() <= new Date(banner.endDate)
    );
  }

  function BannerFilter(banner) {
    if (!banner.scheduled) return banner;
    else {
      if (dateInBetween(banner)) return banner;
    }
  }

  if (!props.flag) imgs = banners.desktop_slide_list.filter(BannerFilter);
  else imgs = banners.mobile_slide_list.filter(BannerFilter);

  const specialTyc = () => {
    return (
      <ol
        style={
          props.flag
            ? { maxHeight: "30vh", overflowY: "scroll" }
            : { maxHeight: "50vh", overflowY: "scroll" }
        }
      >
        <li>
          <p>
            <strong>RESTRICCIONES GENERALES: </strong> Esta es una promoción de
            Codere Apuestas (en adelante, Codere), sociedad ALTA CORDILLERA, S.A
            administrador y operador de agencia de eventos deportivos,
            autorizada por la Junta de Control de Juegos conforme contrato No.
            2021-006 de 26 de mayo de 2021.
          </p>
        </li>
        <li>
          <p>
            <strong>EXPLICACIÓN: </strong> La promoción consiste en que
            semanalmente habrá un juego destacado que será publicado cada semana
            bajo el nombre “Juego de la Semana” y podrá ser cualquier juego
            incluido en las pestañas de “Casino” del sitio www.codere.pa. En
            dicha promoción el jugador obtendrá una bonificación diaria que se
            puede encontrar en el punto 4 de estas bases.
          </p>
        </li>
        <li>
          <p>
            <strong>PREMIO:</strong> El premio consistirá en 5 Giros gratis
            diarios cada Giros en el juego de la semana que corresponda en la
            pestaña de “Casino” del sitio. Recibiéndose un total de 35 giros
            gratis semanalmente.
          </p>
        </li>
        <li>
          <p>
            El monto de la bonificación del Juego de La semana no es
            directamente retirable sino las ganancias derivadas de la puesta en
            juego del mismo. El requisito de apuesta para poder retirar las
            ganancias netas derivadas de la puesta en juego de los Giros Gratis
            obtenidos es de cincuenta (50) veces el valor de dichos premios.
            Este requisito debe completarse en un plazo máximo de veinticuatro
            (24) horas naturales, de lo contrario, tanto la bonificación como
            las ganancias obtenidas caducarán.
          </p>
        </li>
        <li>
          <p>
            En cualquier caso, el monto máximo total a retirar como ganancia
            derivada de cada bono recibido correspondiente al “Juego de la
            Semana”, no podrá superar los 10 USD al día. El resto de las
            ganancias obtenidas, serán canceladas.
          </p>
        </li>
        <li>
          <p>
            El pago de los premios obtenidos bajo esta promoción se entregará en
            un plazo de tres (3) días laborables.
          </p>
        </li>
        <li>
          <p>
            <strong>VERIFICACIÓN DE IDENTIDAD: </strong> Para la recepción del
            premio y desbloquear el uso del premio es obligatorio pasar el
            proceso de verificación de identidad, que consiste en enviar a
            Codere Apuestas: Cédula de Ciudadanía y/o Cédula de Extranjería.
          </p>
        </li>
        <li>
          <p>
            <strong>OTRAS RESTRICCIONES DE PARTICIPACIÓN: </strong> No podrán
            participar los empleados y familiares directos del organizador o de
            sus empresas asociadas, los asesores profesionales, las agencias de
            publicidad y de promoción que tengan relación con el organizador. No
            podrán participar tampoco aquellos que se encuentren inscritos en el
            registro de autoexclusión de acceso al juego, así como también:
          </p>
          <ul>
            <li>Menores de 18 años.</li>
            <li>Los incapacitados legalmente.</li>
            <li>
              Accionistas, partícipes o titulares de las empresas dedicadas a la
              organización y comercialización de las apuestas, personal,
              directivos o empleados.
            </li>
            <li>
              Deportistas, sus agentes u otros participantes directos en el
              acontecimiento objeto de las apuestas.
            </li>
            <li>
              Los árbitros o jueces que ejerzan sus funciones en el
              acontecimiento objeto de las apuestas, así como las personas que
              resuelvan los recursos contra las decisiones de aquellos.
            </li>
            <li>
              Personal empleado en los locales de apuestas y en las zonas de
              apuestas.
            </li>
            <li>
              El organizador no tendrá obligación de entregar el premio en los
              supuestos siguientes:
            </li>
            <li>Si por cualquier causa el Ganador no aceptase el premio.</li>
            <li>
              Si el Ganador se negara a facilitar sus datos personales para que
              el Organizador pueda gestionar la entrega y promoción del premio,
              así como aquellos necesarios para llevar a cabo y cumplir las
              obligaciones fiscales pertinentes.
            </li>
            <li>
              Si hay sospecha de incumplimiento de los presentes términos y
              condiciones o de las condiciones generales de contratación
              aceptadas por el cliente, en particular en lo relativo a la
              veracidad de datos y a la prohibición de registrar más de un
              usuario por persona física, sin perjuicio de las acciones
              adicionales que procedieran por tal incumplimiento.
            </li>
            <li>
              Si hay sospecha de que un cliente ha utilizado diferentes recursos
              para desvirtuar el objeto de la promoción.
            </li>
            <li>
              Si el cliente no aceptara recibir comunicaciones publicitarias por
              correo electrónico, SMS u otro medio de comunicación equivalente.
            </li>
            <li>
              Antes de ser cobrado, Codere verificará si dichas condiciones se
              han cumplido correctamente, y se reserva el derecho a cancelar el
              ingreso del freebet si considera que ha habido un abuso de la
              campaña o se ha cometido fraude.
            </li>
            <li>
              Todas las ofertas se limitan a una por persona, familia, dirección
              de domicilio, dirección de correo electrónico, número de teléfono,
              el mismo número de cuenta del método de pago (ej. transferencia
              bancaria, casino, tarjeta debito o crédito y punto pago), o
              cualquier circunstancia en la que un computador sea susceptible a
              ser compartido (ej. en una biblioteca pública, un lugar de
              trabajo, etc.).
            </li>
            <li>
              No se tendrán en cuenta para esta promoción apuestas que no
              cumplan los requisitos anteriormente especificados, o las que se
              cancelen o cierren con anterioridad o hayan sido realizadas con
              freebets. No se tendrán en cuenta los tickets que contengan
              apuestas de sistema. Esta promoción no se puede usar junto con
              ninguna otra oferta.
            </li>
          </ul>
        </li>
        <li>
          Los clientes de Codere Apuestas que participen en la promoción aceptan
          los términos y condiciones y reconocen que el incumplimiento de las
          mismas puede provocar su descalificación.
        </li>
      </ol>
    );
  };

  return (
    <div id="carousel-section">
      <Swiper
        onSlideChange={(swiper) => indexHandler(swiper)}
        // onChange={console.log("changed")}
        modules={[Pagination, EffectFade, Autoplay, Lazy]}
        pagination={{ clickable: true }}
        effect={"fade"}
        lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
        autoplay={{
          delay: 3250,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // autoplay={{ delay: 3250, disableOnInteraction: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        {imgs.map((item, index) => (
          <SwiperSlide key={index}>
            <a href={regis}>
              <img src={item.image} alt={item.img_alt} />
            </a>

            {!props.flag ? (
              <div id="des-reg">
                <Button
                  className="central-regis gl-effect"
                  href={regis}
                  rel={"nofollow"}
                >
                  Regístrate
                  <FontAwesomeIcon icon={faAngleRight} />
                </Button>
                {/* {item.specialTerms ? <></> : <></>} */}
                {item.tycLink ? (
                  <a
                    className="tyc"
                    onClick={() =>
                      item.specialTerms ? setShowTycModal(true) : null
                    }
                    href={!item.specialTerms ? item.tycLink : "#"}
                  >
                    Términos y condiciones
                  </a>
                ) : null}
              </div>
            ) : (
              <>
                {item.specialTerms ? <></> : <></>}
                {item.tycLink ? (
                  <div className="mob-tyc">
                    <a
                      className="tyc"
                      onClick={() =>
                        item.specialTerms ? setShowTycModal(true) : null
                      }
                      href={!item.specialTerms ? item.tycLink : "#"}
                    >
                      Términos y condiciones
                    </a>
                  </div>
                ) : null}
              </>
            )}
            {/* {showTimer && new Date() < new Date(DATE_TO_COUNT) && (
                      <Timer2 DATE_TO_COUNT={DATE_TO_COUNT} delay={delay} />
                    )} */}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Timer for live Text */}
      {props.flag ? <SlideButton regis={regis} /> : null}
      <Modal show={showTycModal} onHide={() => setShowTycModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Términos y condiciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>{specialTyc()}</Modal.Body>
      </Modal>
    </div>
  );
}
export default MySwiper;
