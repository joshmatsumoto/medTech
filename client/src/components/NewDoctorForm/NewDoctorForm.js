import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function DoctorForm() {
  return (
    <Container className="text-dark text-start">
      <Form>
        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="DoctorsName">
              <Form.Label>Doctor Name</Form.Label>
              <Form.Control placeholder="Enter Doctor name" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="DoctorsEmail">
              <Form.Label>Doctor Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Doctor email" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="doctorPassword">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="Department">
              <Form.Label>department</Form.Label>
              <Form.Control type="email" placeholder="Enter department" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="officeHours">
              <Form.Label>Office officeHours</Form.Label>
              <Form.Control type="email" placeholder="Enter Office officeHours" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="officeLoactation">
              <Form.Label>Office Location</Form.Label>
              <Form.Control type="email" placeholder="Enter Office Location" />
            </Form.Group>
          </Col>
        </Row>
        
        
        

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default DoctorForm;
