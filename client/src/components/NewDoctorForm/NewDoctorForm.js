import React from 'react';

import {Container, Form, Row, Col, Button, } from 'react-bootstrap';




const DoctorForm = () => {


  return(
  <Container className='text-dark text-start'>
    <Form>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group className='mb-3' controlId='doctorsName'>
            <Form.Label>Doctor's Name</Form.Label>
            <Form.Control placeholder="Enter Doctor's name" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group className='mb-3' controlId='doctorsEmail'>
            <Form.Label>Doctor's Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Doctor's email" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group className="mb-3" controlId="Department">
            <Form.Label>Department </Form.Label>
            <Form.Control placeholder="Department" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Office Hours</Form.Label>
            <Form.Control placeholder="Office Hours" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group className='mb-3' id='formGridCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={{ span: 6, offset: 3 }}>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  </Container>
);
}
export default DoctorForm;