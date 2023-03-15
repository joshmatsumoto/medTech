import React, { useState } from "react";
import AdminLogin from "../AdminLogin/AdminLogin";

import { Col, Row, Button, Modal } from "react-bootstrap";

function AdminBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Row>
          <Col>
            <Button className="px-3" variant="primary" onClick={handleShow}>
              Admin Login
            </Button>
          </Col>
        </Row>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>AdminLogin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdminLogin />
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

export default AdminBtn;
