import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

export default function NavbarComponent() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>        
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/movie">Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
}

