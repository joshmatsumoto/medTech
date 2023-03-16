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
      <Navbar bg="dark" variant="dark">
        <Container fluid>
        <Navbar.Brand className="justify-content-between">
          MedTech
        </Navbar.Brand>
          <Nav className="justify-content-end">
            <NavDropdown title="Appointments">
              <NavDropdown.Item as={Link} to='/patdashboard/appform'
              >
                Create New Appointment
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/"
                onClick={handleShowForm}
              >
                View All Appointments
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/dashboard">
              Home
            </Nav.Link>
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
