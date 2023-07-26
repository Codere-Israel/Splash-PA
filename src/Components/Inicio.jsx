import MySwiper from "./MySwiper";
import Games from "./Games";
import Content from "./Content";
import { Helmet } from "react-helmet";

export default function Inicio() {
  return (
    <>
      <Helmet>
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.codereonline.com/overview/default.aspx"
        />
        <link rel="canonical" href="https://www.codere.pa" />
      </Helmet>
      <MySwiper />
      <Games />
      <Content />
    </>
  );
}
