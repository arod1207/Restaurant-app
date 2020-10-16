import React from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap';

import './NavBar.css';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">The Restaurant</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Button className="mr-2" variant="outline-info">
                    Log In
                </Button>
                <Button variant="outline-info">Sign Up</Button>
                <div className="navbar__cartIcon">
                    <i class="lni lni-cart"></i>
                </div>
                <div className="navbar__orderNumber">20</div>
            </Navbar>
        </>
    );
}

export default NavBar;
