// see SignupForm.js for comments
import React, { useState } from 'react';
import { Container, Form, Row ,Col , Button, Alert } from 'react-bootstrap';
//import Auth from '../utils/auth';


const DoctorLogin = () => {
  const [doctorFormData, setDoctorFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDoctorFormData({ ...doctorFormData, [name]: value });
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
      const response =  DoctorLogin();
      if (!response.ok) {
        throw new Error('something went wrong!');
      }

     // const { token, doctor } = await response.json();
     // console.log(doctor);
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
        <Form.Group className= "mb-3" controlId= "doctorsName">
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={doctorFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>
        </Col>
        </Row>
      

        <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={doctorFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        </Col>
        </Row>
        
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <Button
          disabled={!(doctorFormData.email && doctorFormData.password)}
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

export default DoctorLogin;