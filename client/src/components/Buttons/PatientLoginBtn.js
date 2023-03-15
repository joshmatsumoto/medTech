import React, { useState } from "react";
import PatientForm from "../NewPatientForm/NewPatientForm";
import { Col, Row, Button, Modal } from "react-bootstrap";


function PatientBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [patientFormData, setPatientFormData] = useState({
    email: "",
    password: "",
  });
  

  return (
    <>
      <div>
        <Row>
          <Col
            className="my-5 d-flex gap-3 justify-content-between"
          >

            <Button variant="outline-success" onClick={handleShow} className="px-2">
              Create New Patient
            </Button>
            <Button
                disabled={!(patientFormData.email && patientFormData.password)}
                type="submit"
                variant="success"
              >
                Submit
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
