import React from "react";
import "./App.css";
import img from "./Rocky.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <h1> This is a Header</h1>
                        <header className="App-header">
                            Connor Brennan UD CISC275 with React Hooks and
                            TypeScript Hello World
                        </header>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <ul>
                            <li> First thing</li>
                            <li> Second thing</li>
                            <li> Third thing</li>
                        </ul>
                        <div>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </div>
                        <div
                            style={{
                                width: 150,
                                height: 100,
                                backgroundColor: "#ff0000",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <img src={img} alt="A picture of my cat Rocky" />
                        <div
                            style={{
                                width: 150,
                                height: 100,
                                backgroundColor: "#ff0000",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
