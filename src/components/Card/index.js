import React, { Component } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class newCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default newCard;
