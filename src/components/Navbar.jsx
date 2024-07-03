import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MyNavBar() {
  return (
    <Navbar expand="lg" className="bg-purple-700">
      <Container>
        <Navbar.Brand as={Link} to='/' className="text-purple-500 text-xl font-extrabold">Rick and Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to='/' className="text-purple-500 text-xl">Home</Nav.Link>
            <Nav.Link as={Link} to='/about' className="text-purple-500 text-xl">About</Nav.Link>
            <Nav.Link as={Link} to='/characters' className="text-purple-500 text-xl">Characters</Nav.Link>
            <Nav.Link as={Link} to='/favorites' className="text-purple-500 text-xl">Favorites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
