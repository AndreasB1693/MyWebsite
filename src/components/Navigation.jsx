import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../css/Navbar.css";

function Navigation() {
    return(
        <Navbar fixed="top" expand="lg">
        <Container>
          <Nav.Link as={Link} to="/about"><i class="fa-solid fa-house-chimney fa-2x"/></Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about"><i class="icon fa-brands fa-github fa-2x"/></Nav.Link>
              <Nav.Link as={Link} to="/about"><i class="fa-brands fa-facebook fa-2x"/></Nav.Link>
              <Nav.Link as={Link} to="/about"><i class="fa-solid fa-envelope fa-2x"/></Nav.Link>
              <Nav.Link as={Link} to="/about"><i class="fa-solid fa-folder-arrow-down"/></Nav.Link>
              <NavDropdown title={<i class="icon fa-solid fa-file-pdf fa-2x"/>} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to ="/about"><i class="fa-solid fa-file-pdf"></i> Action</NavDropdown.Item>
                <NavDropdown.Item href="/#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="/#">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/#">Separated link <i class="fa-solid fa-arrow-right"/></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
    
}

export default Navigation;