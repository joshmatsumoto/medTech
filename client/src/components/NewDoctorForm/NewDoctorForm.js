import React from 'react';

import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';


const SignupForm = () => {
    // set initial form state
  const [doctorFormData, setDoctorFormData] = useState({ email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [createDoctor, { error }] = useMutation(CREATE_DOCTOR);

};
return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        form
        <Form.Group>
          <Form.Label htmlFor='name'>name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your Name'
            name='name'
            onChange={handleInputChange}
            value={doctorFormData.name}
            required
          />
          <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
        </Form.Group>

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