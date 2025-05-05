import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export const NavBar1 = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center w-100">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/AboutUs">Acerca de nosotros</Nav.Link>
            <Nav.Link href="https://frt.utn.edu.ar/">FRT UTN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
