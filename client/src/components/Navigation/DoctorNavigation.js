import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from'react-router-dom';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import NewPatientForm from '../NewPatientForm/NewPatientForm';

function DoctorNavBar() {
    const [showAppointmentsForm, setShowAppointmentsForm, showPatientsForm, setShowPatientsForm] = useState(false);

    const handleShowAppointmentsForm = () => {
        setShowAppointmentsForm(true);
    }

    const handleShowPatientsForm = () => {
        setShowPatientsForm(true);

};

return (
    <div>
        <Navbar bg="primary" variant="dark">
            <Container fluid>
                <Navbar.Brand className='justify-content-between'>
                    MedTech
                </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <NavDropdown title="Appointments" id="appointment-dropdown">
                        <NavDropdown.Item as={Link}to='/docdashboard/appform'>
                            Create New Appointment
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            View All Appointments
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Patients" id="patients-dropdown">
                        <NavDropdown.Item as={Link}to='/docdashboard/patform'>
                            Create New Patient
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            View All Patients
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/">
                        Sign out
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        {showAppointmentsForm && (
            <div className='mt-5'>
                <AppointmentForm />
            </div>    

        )}

        {showPatientsForm && (
            <div className='mt-5'>
                <NewPatientForm />
            </div>
        )}
    </div>

);

}

export default DoctorNavBar;