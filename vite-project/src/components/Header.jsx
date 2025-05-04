import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export const Header = () => {
  return (
    <div>
      <h1 className="text-center">Trabajo Practico N2</h1>
      <h3 className="text-center">Grupo numero 7</h3>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center w-100">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Acerca de nosotros</Nav.Link>
            <Nav.Link href="#link">FRT UTN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
