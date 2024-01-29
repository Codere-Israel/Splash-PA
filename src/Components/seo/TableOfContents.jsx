import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Nav, Row } from "react-bootstrap";

export default function TableOfContents(props) {
  const link = (instance) => {
    const handleClick = (e) => {
      e.preventDefault();
      const headerHeight = 90;
      const element = document.getElementById(instance.id);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    return (
        <div className="_tx flexed-centered">
          <Nav.Link href={`#${instance.id}`} onClick={handleClick}>
            <i></i>
            {instance.title}
          </Nav.Link>
        </div>
    );
  };


  const regTable = () => {
    return (
        <Container>
          {props.table.map((t, k) => (
              <div key={k}>
                {link(t)}
                {t.inner ? (
                    <>
                      {t.inner.map((i, k) => (
                          <Container key={k}>{link(i)}</Container>
                      ))}
                    </>
                ) : null}
              </div>
          ))}
        </Container>
    );
  };

  const formulaTable = () => {
    return (
        <Row>
          {props.table.map((t, k) => (
              <Col key={k}>
                {link(t)}
                {t.inner ? (
                    <>
                      {t.inner.map((i, k) => (
                          <Container className="formulaTable" key={k}>
                            {link(i)}
                          </Container>
                      ))}
                    </>
                ) : null}
              </Col>
          ))}
        </Row>
    );
  };

  return (
      <div className="content-table mt-4">
      <span style={{ fontSize: "1.35rem" }} className="subtitle">
        Tabla de contenidos:
      </span>
        {props.isFormula ? formulaTable() : regTable()}
      </div>
  );
}
