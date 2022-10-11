import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav} from 'react-bootstrap';
import './NavBar.css';

function NavBar() {


  console.log()

  return (
    <div className="navbar">
      <Navbar expand="lg">
      <Container>
      <Navbar.Brand href="/"><img 
        src="https://i.imgur.com/QFdw6lI.png" 
        width="60" 
        height="60"
        className="d-inline-block align-top" alt="Hiatus" />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <Nav.Link href='/#about'>About</Nav.Link>
          <Nav.Link href='/#map'>Map</Nav.Link>
          <Nav.Link href='/#resources'>Resource Hub</Nav.Link>
          <Nav.Link href='/#stories'>Stories</Nav.Link>
          <Nav.Link href='/#donate'>Donate</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar