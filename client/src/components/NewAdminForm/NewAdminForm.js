import React, { useState }  from "react";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_ADMIN } from '../../utils/mutations';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function NewAdminForm(props) {
  const [formState] = useState({ email: '', password: '' });
  const [addAdmin] = useMutation(ADD_ADMIN);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addAdmin({
      variables: {
        email: formState.email,
        password: formState.password,
        name: formState.name,
        
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };



  return (
    <Container className="text-dark text-start">
      <Form onSubmit={handleFormSubmit}>
        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="adminName">
              <Form.Label>Administrator Name</Form.Label>
              <Form.Control placeholder="Enter Administrator name" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="adminEmail">
              <Form.Label>Administrator Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Administrator email" />
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
            <Form.Group className="mb-3" controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>



        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formGridZip">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Add Administrator" />
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

export default NewAdminForm;
