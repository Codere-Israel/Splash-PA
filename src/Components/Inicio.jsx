import MySwiper from "./MySwiper";
import Games from "./Games";
import Content from "./Content";
import { Helmet } from "react-helmet";

export default function Inicio(props) {
  const title = "Apuestas Deportivas y Casino Online » $100 de Bono | Codere®";
  const description =
    "Juega en línea con Codere, la casa de Apuestas Deportivas y Casino Online #1🥇 en Panamá. Regístrate y recibe hasta $100 de bono en tu primer depósito.";
  const json1 = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "codere",
    alternateName: ["codere panama", "codere.pa", "codere pa"],
    legalName: "Codere S.A.",
    url: "https://www.codere.pa/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Codere_Logo.svg",
    foundingDate: "1980",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "[+(507) 3774200]",
      email: "apuestas@codere.com",
    },
    description:
      "Codere es la casa de apuestas deportivas #1 en Panamá. La mejor opción para apostar online en tus deportes favoritos.",
    sameAs: [
      "https://www.facebook.com/CoderePan",
      "https://twitter.com/CoderePanama",
      "https://www.youtube.com/channel/UCWSDewbh7GXcpfOzl-bisfQ",
      "https://www.instagram.com/coderepan/",
      "https://es.wikipedia.org/wiki/Codere",
      "https://www.wikidata.org/wiki/Q2918415",
      "https://www.crunchbase.com/organization/codere",
      "https://www.google.com/search?kgmid=/g/121c515_",
    ],
  };

  const json2 = [
    {
      "@context": "https://schema.org",
      "@id":
        "https://www.codere.pa/_catalogs/masterpage/codere/images/splash/casino-online-panama.jpg",
      "@type": "ImageObject",
      url: "https://www.codere.pa/_catalogs/masterpage/codere/images/splash/casino-online-panama.jpg",
      width: "1200",
      height: "628",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo funcionan las apuestas deportivas en línea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las apuestas deportivas consisten en apostar una cantidad monetaria a un determinado resultado o resultado de un evento deportivo. El propósito de una apuesta deportiva es beneficiarse de un pronóstico o predicción hecha para que el apostante, y este tenga una ganancia alta por el dinero apostado (el presupuesto multiplicador dividido por la cuota)",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde están ubicadas las casas de apuestas deportivas de Codere?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las Casas de apuesta deportiva Codere están alrededor de toda la ciudad de Panamá, en 6 diferentes Casinos Crown ( El Panamá, el Hipódromo, Continental, Riande, Sheraton, Soloy), , y muchos más que puedes ver al hacer clic en nuestra página web en la sección de Locales, donde podrás ver por google maps todas sucursales y direcciones.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué tips de apuestas deportivas puedo usar para ganar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los mejores Tips los puedes conseguir en nuestras redes sociales, en instagram @coderepan, donde tenemos nuestros videos semanales con nuestros influencers Rony Vargas y Nicolle Ferguson, los cuales dan su análisis en los diferentes partidos, para ayudar a nuestros clientes a hacer las mejores selecciones posibles para garantizar sus victorias en sus apuestas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es un Freebet y cómo lo puedo utilizar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un Freebet es una apuesta gratis, la cual utiliza dinero de la casa, y para ganar dinero necesita ganar las apuestas; Existen freebets de diferentes cantidades $10, $20, $50 y $100, las cuales son entregadas dependiendo de la promoción en la cual esté activada y cantidad que determine dicha promoción, en Codere Freebet de bono de bienvenida, que es dada cuando se registra y hace su primer depósito, Freebet promocionales que son por apuesta se le da un Freebet de x cantidad dependiendo de la promoción, freebets VIP que son para nuestros clientes VIPs. Todos estos freebets pueden ser usados en cualquier tipo de apuesta deportiva, siempre y cuando cumpla con los términos y condiciones, al hacer su apuesta al lado del botón de hacer apuesta, estará un cuadro que dirá Freebet al hacer clic ahí, le saldrá si la cantidad de Freebet que tiene disponible y podrá realizar su apuesta con el Freebet.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es un parley?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En Codere, al hacer una apuesta deportiva con varias selecciones de juegos, a esto se le llama un parley, el cual entre más juegos tengas, la cantidad de ganancia aumenta exponencialmente, para ganar una apuesta de parley todos los juegos seleccionados deben cumplir con el pronóstico escogido, dentro de Codere tenemos para los parleys una mejora del porcentaje de ganancia al poner más juegos, es decir además de aumentar la cantidad de ganancia por las líneas, damos un porcentaje extra por selecciones adicionales.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json1)}</script>
        <script type="application/ld+json">{JSON.stringify(json2)}</script>

        <link rel="canonical" href="https://www.codere.pa/" />
      </Helmet>
      <MySwiper flag={props.flag} />
      <Games flag={props.flag} />
      <Content />
    </>
  );
}
