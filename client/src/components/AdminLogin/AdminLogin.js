import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations'
import Auth from '../../utils/auth';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
//import Auth from '../utils/auth';
const AdminLogin = (props) => {
  const [AdminLogin, { error }] = useMutation(LOGIN);
  const [adminFormData, setAdminFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAdminFormData({ ...adminFormData, [name]: value });
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
      const response = AdminLogin(
        {
          variables: {
            email: adminFormData.email,
            password: adminFormData.password
          },
        }
      );
      const token = response.data.login.token;
      Auth.login(token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      // const { token, administrator } = await response.json();
      // console.log(administrator );
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
            <Form.Group className="mb-3" controlId="adminLogin">
              <Form.Label htmlFor='email'> Administrator Email</Form.Label>
              <Form.Control
                type='text'
                placeholder='Your email'
                name='email'
                onChange={handleInputChange}
                value={adminFormData.email}
                required
              />
              <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group>
              <Form.Label htmlFor='password'> Administrator Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Your password'
                name='password'
                onChange={handleInputChange}
                value={adminFormData.password}
                required
              />
              <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Button
              disabled={!(adminFormData.email && adminFormData.password)}
              type='submit'
              variant='success'>
              Submit
            </Button>
          </Col>
        </Row>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </Form> 
    </Container>
  );
};

export default AdminLogin;
