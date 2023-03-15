import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

function PatientNavBar(props) {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => setShowForm(true);
  return (
    <div>
      <Navbar className="justify-content-end" bg="dark" variant="dark">
        <Container fluid>
          <Nav>
            <Nav.Link as={Link} to="/dashboard">
              Home
            </Nav.Link>
            <NavDropdown title="createAppointment">
              <NavDropdown.Item
                as={Link}
                to="/createAppointment"
                onClick={handleShowForm}
              >
                Create New Appointment
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      {showForm && (
        <div>
          <AppointmentForm />
        </div>
      )}
    </div>
  );
}

export default PatientNavBar;
