import React from "react";
import { Container, Navbar, Nav ,NavDropdown } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";


const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/"><b>IT SUPPORT</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-left">
            <NavDropdown title="Log In" id="basic-nav-dropdown">
              <NavDropdown.Item >
                Supporter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Admin</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Register</Nav.Link>
            <Nav.Link href="/form">Add Supporter</Nav.Link>
            <Nav.Link href="/suplist">View Supporters</Nav.Link>


          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
