import React, { useState } from "react";

import DoctorLogin from "../DoctorLogin/DoctorLogin";
import { Col, Row, Button, Modal } from "react-bootstrap";

function DocBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Row>
          <Col>
            <Button className="px-3" variant="primary" onClick={handleShow}>
              Doctor Login
            </Button>
          </Col>
        </Row>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DoctorLogin />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DocBtn;
