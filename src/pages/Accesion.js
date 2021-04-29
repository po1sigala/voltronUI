import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
class Accesion extends Component {
    displayRQ = () => {
        console.log("searching for theRQ");
    };
    render() {
        return (
            <div>
                <Card
                    className="card"
                    style={{ width: "18rem", height: "35rem", padding: "2%" }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Rq</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />

                        <InputGroup.Append>
                            <Button
                                variant="outline-secondary"
                                onClick={this.displayRQ}
                            >
                                Enter
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Card>
            </div>
        );
    }
}
export default Accesion;
