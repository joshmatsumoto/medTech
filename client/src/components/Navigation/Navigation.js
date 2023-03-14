import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import Auth from '../../utils/auth';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="py-4">
      <Container fluid>
        <Navbar.Brand className="justify-content-between">
          MedTech
        </Navbar.Brand>
        <Nav>
         <Nav.Link as={Link}  to="/" className="text-light">
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
