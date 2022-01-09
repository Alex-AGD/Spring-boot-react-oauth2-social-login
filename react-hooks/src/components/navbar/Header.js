import React from 'react';
import {Button, Nav, Navbar, NavDropdown, NavLink} from 'react-bootstrap'
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
                            <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavLink as={Link} to="/"> Home</NavLink>
                                    <NavLink as={Link} to="/ttt">Contact Us</NavLink>
                                    <NavLink as={Link} to="/contact-us">About Us</NavLink>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Button as={Link} to="/login">Login</Button>
                            </Navbar.Collapse>
                        </Navbar>
                        <br />
                </div>
            </div>
        </div>
    );
}

export default Header;