import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Datetime from "react-datetime";
import moment from "moment";
import Button from "react-bootstrap/Button";

function AppointmentForm() {
  return (
    <Container className="text-dark text-start">
      <Form>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="patientsName">
              <Form.Control placeholder="Patients Name Here" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="patientsEmail">
              <Form.Control placeholder="Patients Email Here" />
            </Form.Group>
          </Col>
          <Col md={{span: 3, offset: 3}}>
          <Form.Group className="mb-3" controlId="selectDoctor">
              <Form.Select>
                <option disabled>...Select A Doctor</option>
                <option>Doctor 1</option>
                <option>Doctor 2</option>
                <option>Doctor 3</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={{ span: 3 }}>
            <Form.Group controlId="appointmentDate">
                <Datetime placeholder="Select Appointment Date" />
            </Form.Group>
          </Col>
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group controlId="appointmentMessage">
            <Form.Control as="textarea" rows={5} placeholder="Leave a Message for your Doctor here..." />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default AppointmentForm;
