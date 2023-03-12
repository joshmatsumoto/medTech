import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function adminNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MedTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Account</Nav.Link>
            <NavDropdown title="Administrator" id="admin-dropdown">
              <NavDropdown.Item href="#view-all-admins">
                View All Administrators
              </NavDropdown.Item>
              <NavDropdown.Item href="#add-admin">
                Add Administrator
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Doctors" id="doc-dropdown">
              <NavDropdown.Item href="#view-all-docs">
                View All Doctors
              </NavDropdown.Item>
              <NavDropdown.Item href="#add-doc">Add Doctor</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Patients" id="pat-dropdown">
              <NavDropdown.Item href="#view-all-pats">
                View All Patients
              </NavDropdown.Item>
              <NavDropdown.Item href="#add-pat">
                Add Patient
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#sign-out">Sign-Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default adminNavBar;
