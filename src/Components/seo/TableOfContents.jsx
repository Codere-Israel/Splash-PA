import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

export default function TableOfContents(props) {
  const calcScroll = ()=>{
    // window.scrollTo(0, window.scrollY - 1500);
    // console.log('scrolled');
  }

  const link = (instnace) => {
    return (
      <div className="_tx flexed-centered">
        <FontAwesomeIcon icon={faAngleRight} />
        <Nav.Link href={`#${instnace.id}`} onClick={calcScroll}>{instnace.title}</Nav.Link>
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
                  <Container key={k}>{link(i)}</Container>
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
