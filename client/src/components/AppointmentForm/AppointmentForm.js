import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";

function AppointmentForm() {
  const [startDate, setStartDate] = useState(new Date());
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className="appointmentForm">
      <Container fluid className="bg-primary text-light p-4">
        <h1>Create A New Appointment </h1>
      </Container>
      <Container className="text-dark text-start mt-5 pt-5">
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
            <Col md={{ span: 3, offset: 3 }}>
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
                <Form.Control
                  as={DatePicker}
                  todayButton="Select Today's Date"
                  showIcon="true"
                  selected={startDate}
                  showTimeSelect
                  filterTime={filterPassedTime}
                  timeFormat="hh:mm aa"
                  timeIntervals={30}
                  timeCaption="time"
                  includeTimes={[
                    setHours(setMinutes(new Date(), 0), 9),
                    setHours(setMinutes(new Date(), 30), 9),
                    setHours(setMinutes(new Date(), 0), 10),
                    setHours(setMinutes(new Date(), 30), 10),
                    setHours(setMinutes(new Date(), 0), 11),
                    setHours(setMinutes(new Date(), 30), 11),
                    setHours(setMinutes(new Date(), 0), 12),
                    setHours(setMinutes(new Date(), 30), 12),
                    setHours(setMinutes(new Date(), 0), 13),
                    setHours(setMinutes(new Date(), 30), 13),
                    setHours(setMinutes(new Date(), 0), 14),
                    setHours(setMinutes(new Date(), 30), 14),
                    setHours(setMinutes(new Date(), 0), 15),
                    setHours(setMinutes(new Date(), 30), 15),
                    setHours(setMinutes(new Date(), 0), 16),
                    setHours(setMinutes(new Date(), 30), 16),
                    setHours(setMinutes(new Date(), 0), 17),
                  ]}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  onChange={(date) => setStartDate(date)}
                />
              </Form.Group>
            </Col>
            <Col md={{ span: 6, offset: 3 }}>
              <Form.Group controlId="appointmentMessage">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Leave a Message for your Doctor here..."
                />
              </Form.Group>

              <div className="d-grid mt-3 mb-3 gap-2 d-flex justify-content-end">
                <Button variant="outline-danger" type="reset">
                  Reset
                </Button>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default AppointmentForm;
