import React, { useState } from 'react';
import AdminLogin from '../AdminLogin/AdminLogin';
import DoctorLogin from '../DoctorLogin/DoctorLogin';
import {Col, Row, Button, Modal} from 'react-bootstrap';
function Buttons() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div  >
        <Row>
    <Col className='my-5 d-flex justify-content-between' md={{ span: 6, offset: 3 }} >
    <Button variant="primary" onClick={handleShow}>
        AdminLogin
      </Button>
      <Button variant="primary" onClick={handleShow}>
        DoctorLogin
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
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DoctorLogin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <DoctorLogin/>
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

export default Buttons;