import React from 'react';
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import Image from "react-bootstrap/Image";
// import { HouseFill } from "react-bootstrap-icons";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="py-4">
      <Container fluid>
        <Navbar.Brand>
          MedTech
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/" className="text-light">
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
