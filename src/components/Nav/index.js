import React, { Component } from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import voltron from "./voltron.png";
import { Nav } from "react-bootstrap";

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Brand href="#home">
                        <img
                            src={voltron}
                            width="100"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav.Link href="Home">Package Intake</Nav.Link>
                    <Nav.Link href="Accession">Accession Specimens</Nav.Link>
                    <Nav.Link href="Bulk">Bulk Accesion</Nav.Link>
                    <Nav.Link href="Hold">Accesion Hold</Nav.Link>
                    <Nav.Link href="Sendout">sendout</Nav.Link>
                    <Nav.Link href="Qeueu">Accesioned Queue</Nav.Link>
                    <Nav.Link href="Settings">Settings</Nav.Link>
                    <Nav.Link href="LogOut">Log Out</Nav.Link>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
