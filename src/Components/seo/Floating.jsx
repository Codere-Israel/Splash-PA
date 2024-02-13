import { Button } from "react-bootstrap";

export default function Floating(props) {
  return (
    <div className="floating">
      <span>{props.text}</span>
      <br />
      <Button
        href={
          props.juega
            ? "https://m.codere.pa/deportespanama/#/casino/CasinoPage?lobby=Panama "
            : "https://m.codere.pa/deportespanama/#/mso/RegistroPAPage"
        }
        rel="nofollow"
        className="floating-btn"
      >
        {props.juega ? "Juega ahora" : "Regístrate ahora"}
      </Button>
    </div>
  );
}
