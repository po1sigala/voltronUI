import React, { Component } from "react";
import "./style.css";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
    render() {
        return (
            <div>
                <Nav activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Package Opening</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/trending">Associating</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/search">Accession Hold</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default NavBar;
