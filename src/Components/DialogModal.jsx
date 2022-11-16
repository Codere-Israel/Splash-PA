import { Modal, Form, Button } from "react-bootstrap";
import Axios from "axios";
import React, { useState } from "react";

class PostUser {
  constructor(loginName, password) {
    this.loginName = loginName;
    this.password = password;
    // this.persistCookie = persistCookie;
    // this.deviceType = deviceType;
  }
}

export default function DialogModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [pw, setPassword] = useState("");

  const emailHandler = (evt) => {
    console.log(evt.target.value);
    setEmail(evt.target.value);
  };

  const pwHandler = (evt) => {
    console.log(evt.target.value);
    setPassword(evt.target.value);
  };

  const formHandler = (evt) => {
    evt.preventDefault();
    console.log("been there done that");

    checkExistingUser();

    setEmail("");
    setPassword("");
  };

  function checkExistingUser() {
    Axios.post(URL, new PostUser(email, pw)).then((res) => {
      console.log("users >>");
      console.log(res.data);
    });
  }

  return (
    <>
      <Button
        // href={acceder}
        onClick={handleShow}
        className="acceder-button header_btn"
        // rel="nofollow"
      >
        Acceder
      </Button>
      <Modal id="modal_app" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log-In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="test" onSubmit={formHandler}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Control
                type="text"
                onChange={emailHandler}
                placeholder="Usuario ó Correo Electrónico"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={pwHandler}
                required
              />
            </Form.Group>

            <Button type="submit" className="login_btn">
              Log-In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
