import React from "react";
import './Header.sass'

import MenuItems from "./MenuItems";
import {Button, Form, Navbar, Nav} from "react-bootstrap";

export default class Header extends React.Component {

    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">Curisco Fit Coach</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <MenuItems/>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-info">Sing In</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}