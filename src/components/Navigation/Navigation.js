import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar bg="info" className="text-light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Form builder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-area">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/generateForm">Generate Form</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;