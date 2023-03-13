import React, { useState } from 'react';
import { Container, Form, Row ,Col , Button, Alert } from 'react-bootstrap';
//import Auth from '../utils/auth';

const PatientLogin = () => {
    const [patientFormData, setPatientFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPatientFormData({ ...patientFormData, [name]: value });
    };
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      // check if form has everything (as per react-bootstrap docs)
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      try {
        const response =  PatientLogin();
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
       // const { token, patient } = await response.json();
       // console.log(patient );
        //Auth.login(token);
  //reset()
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
  };
    return (
      <Container className='text-dark text-start'>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your login credentials!
          </Alert>
          <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <Form.Group className= "mb-3" controlId= "patientLogin">
            <Form.Label htmlFor='email'> Patient Email</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your email'
              name='email'
              onChange={handleInputChange}
              value={patientFormData.email}
              required
            />
            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
          </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <Form.Group>
            <Form.Label htmlFor='password'> Patient Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Your password'
              name='password'
              onChange={handleInputChange}
              value={patientFormData.password}
              required
            />
            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
          </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <Button
            disabled={!(patientFormData.email && patientFormData.password)}
            type='submit'
            variant='success'>
            Submit
          </Button>
          </Col>
          </Row>
        </Form>
      </Container>
    );
  };

  export default PatientLogin;
