import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {

    return <>
        <Navbar bg='dark' variant='dark' expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand>Mutual Fund</Navbar.Brand>
                <Navbar.Toggle aria-controls='x' />
                <Navbar.Collapse id='x'>
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/help">Help Us</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>

    </>
}

export default Header