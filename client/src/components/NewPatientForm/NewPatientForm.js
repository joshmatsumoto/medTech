import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function PatientForm() {
  return (
    <Container className='text-dark text-start'>
      <Form>
        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className='mb-3' controlId='patientsName'>
              <Form.Label>Patient Name</Form.Label>
              <Form.Control placeholder='Enter patient name' />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className='mb-3' controlId='patientsEmail'>
              <Form.Label>Patient Email</Form.Label>
              <Form.Control type="email" placeholder='Enter patient email' />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className='mb-3' controlId='formGridCity'>
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group className='mb-3' controlId='formGridState'>
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue='Choose...'>
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group className='mb-3' controlId='formGridZip'>
              <Form.Label>Zip</Form.Label>
              <Form.Control />
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

export default PatientForm;
