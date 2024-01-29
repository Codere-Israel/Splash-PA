import MySwiper from "./MySwiper";
import Games from "./Games";
import Content from "./Content";
import { Helmet } from "react-helmet";

export default function Inicio({ device }) {
  const title = "Apuestas Deportivas y Casino Online » Bono de $100 | Codere®";
  const description =
    "Juega en línea con Codere, la casa de Apuestas Deportivas y Casino Online #1 en Panamá. Somos el patrocinador oficial del club de fútbol Real Madrid ⚽.";

  const json1 = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "codere",
    alternateName: [
      "codere panama",
      "codere.pa",
      "codere pa",
      "codere online",
      "codere sa",
      "codere s.a.",
    ],
    legalName: "Alta Cordillera, S.A",
    url: "https://www.codere.pa/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Codere_Logo.svg",
    foundingDate: "2021",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "[+(507) 3772602]",
      email: "apuestas@codere.com",
    },
    description:
      "Juega en línea con Codere, la casa de Apuestas Deportivas y Casino Online #1 en Panamá. Somos el patrocinador oficial del club de fútbol Real Madrid ⚽",
    sameAs: [
      "https://www.facebook.com/CoderePan",
      "https://twitter.com/CoderePanama",
      "https://www.youtube.com/channel/UCWSDewbh7GXcpfOzl-bisfQ",
      "https://www.instagram.com/coderepan/",
      "https://es.wikipedia.org/wiki/Codere",
      "https://www.wikidata.org/wiki/Q2918415",
      "https://play.google.com/store/apps/details?id=pa.codere.apuestas",
      "https://www.crunchbase.com/organization/codere",
      "https://www.google.com/search?kgmid=/g/121c515_",
    ],
  };

  const json2 = {
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
        name: "¿Dónde están ubicados los locales físicos de Codere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las casas de apuestas deportivas Codere están alrededor de toda la ciudad de Panamá, en 9 diferentes Casinos Crown ( El Panamá, el Hipódromo, Continental, Riande, Sheraton, Soloy, Guayacanes (Chitre), Mirage (Chiriqui) y Hotel Nacional (Chiriqui)) y que puedes ver al hacer clic en nuestra página web en la sección de Locales, donde podrás ver por google maps todas sucursales y sus direcciones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde puedo ver tips de apuestas para ganar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los mejores tips los puedes conseguir en nuestras redes sociales, en Instagram @coderepan, Twitter @Coderepan y Facebook @Coderepanama donde tenemos cuotas, promociones, y comunicaciones sobre los diferentes partidos, para ayudar a nuestros clientes a hacer las mejores selecciones posibles.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es un parley?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Codere, al hacer una apuesta deportiva con varias selecciones de juegos, a esto se le llama un parlay, el cual entre más juegos tengas, la cantidad de ganancia aumenta exponencialmente, para ganar una apuesta de tipo parlay, todos los juegos seleccionados deben cumplir con el pronóstico escogido, dentro de Codere tenemos una mejora del porcentaje de ganancia al poner más juegos, es decir además de aumentar la cantidad de ganancia por las líneas, damos un porcentaje extra por selecciones adicionales.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json1)}</script>
        <script type="application/ld+json">{JSON.stringify(json2)}</script>

        <link rel="canonical" href="https://www.codere.pa/" />
      </Helmet>
      <MySwiper device={device} />
      <Games device={device} />
      <Content />
    </>
  );
}
