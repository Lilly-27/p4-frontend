import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav} from 'react-bootstrap';
import './NavBar.css';

function NavBar() {

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
          <Nav.Link href="/#About">About</Nav.Link>
          <Nav.Link href="/#map">Map</Nav.Link>
          <Nav.Link href="/#Resources">Resource Hub</Nav.Link>
          <Nav.Link href="/#Stories">Stories</Nav.Link>
          <Nav.Link href="/#Donate">Donate</Nav.Link>
          {/* <Link path='/#About' >About</Link>
          <Link path='/#map' >Map</Link>
          <Link path='/#Resources' >Resources</Link>
          <Link exact path='/#Stories' >Stories</Link> */}
          {/* <Link to={{
            pathname: '/',
            hash: '#Donate'
          }}>Donate</Link> */}
          <Link to='/#Donate'>Donate</Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar