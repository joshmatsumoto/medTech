import React, { useState } from "react";
import PatientForm from "../NewPatientForm/NewPatientForm";
import { Col, Row, Button, Modal } from "react-bootstrap";


function PatientBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Row>
          <Col
            className="my-5 d-flex justify-content-between"
            md={{ span: 6, offset: 3 }}
          >

            <Button variant="primary" onClick={handleShow}>
              Create New Patient
            </Button>
          </Col>
        </Row>
      </div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DoctorLogin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PatientForm/>
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

export default PatientBtn;
