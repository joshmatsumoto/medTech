import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from'react-router-dom';
import NewDoctorForm from '../NewDoctorForm';
import NewPatientForm from '../NewPatientForm';

function DoctorNavBar() {
    const [showForm, setShowForm] = useState(false);

    const handleShowDocNav = () => {
        setShowDocNav(true);
};

return (
    <div>
        <Navbar bg="tertiary" variant="dark">
            <Container fluid>
                <Navbar.Brand className='justify-content-between'>
                    MedTech
                </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.NavDropdown title="Appointments" id="appointment-dropdown">
                        <NavDropdown.Item>
                            Create New Appointment
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            View All Appointments
                        </NavDropdown.Item>
                    <Nav.NavDropdown title="Patients" id="patients-dropdown">
                        <NavDropdown.Item>
                            Create New Patient
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            View All Patients
                        </NavDropdown.Item>
                    </Nav.NavDropdown>
                    </Nav.NavDropdown>

                </Nav>
            </Container>
        </Navbar>
    </div>

);

export default DoctorNavBar;