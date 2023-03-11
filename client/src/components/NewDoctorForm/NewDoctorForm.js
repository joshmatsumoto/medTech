import React from 'react';

import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';


const SignupForm = () => {
  const [doctorFormData, setDoctorFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
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
        <Button
          disabled={!(doctorFormData.email && doctorFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default userLogin;