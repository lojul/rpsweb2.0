import React, { Component } from 'react'
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';

import AuthNav from "./auth/auth-nav";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="http://localhost:3000" className="navbar-brand">Member Management App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href="/members">Members</Nav.Link>
                                <Nav.Link href="/plangroups">Plan Group</Nav.Link>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <Nav.Link href="/external-api">External-api Example</Nav.Link>
                            </Nav>
                            <AuthNav />
                        </Navbar.Collapse>

                    </Navbar>

                </header>
            </div>
        )
    }
}

export default HeaderComponent
