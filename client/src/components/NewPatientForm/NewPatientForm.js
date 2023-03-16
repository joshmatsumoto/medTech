import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_PATIENT } from '../../utils/mutations';


function PatientForm(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [patientData, setPatientData] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [addPatient] = useMutation(ADD_PATIENT);
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const mutationResponse = await addPatient({
      variables: {
        email: formState.email,
        password: formState.password,
        name: formState.name,
        age: formState.age,
        gender: formState.gender,
        address: formState.concatenatedAddress,
        // city: formState.city,
        // state: formState.state,
        // zip: formState.zip,
      },
    });
    const token = mutationResponse.data.addPatient.token;
    Auth.login(token);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

  };



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { address, city, state, zip } = patientData;
    const concatenatedAddress = `${address}, ${city}, ${state} ${zip}`;
    console.log(concatenatedAddress);
  };

  return (
    <Container className="text-dark text-start">
      <Form validated={validated} onSubmit={[handleSubmit, handleFormSubmit]}>
        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="patientsName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control placeholder="Enter patient name" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="patientsEmail">
              <Form.Label>Patient Email</Form.Label>
              <Form.Control type="email" placeholder="Enter patient email" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                placeholder="1234 Main St"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select
                name="state"
                defaultValue="Choose..."
                onChange={handleInputChange}
              >
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Add Patient" />
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

export default PatientForm;
