import { Button } from "react-bootstrap";

export default function Floating(props) {
  return (
    <div className="floating">
      <span>{props.text}</span>
      <br />
      <Button
        href="https://m.codere.pa/deportespanama/#/HomePage"
        rel="nofollow"
        className="floating-btn"
      >
        Juega ahora
      </Button>
    </div>
  );
}
