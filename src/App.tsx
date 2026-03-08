import React from "react";
import "./App.css";
<<<<<<< HEAD
import img from "./Rocky.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): React.JSX.Element {
    return (
        <div className="App">
<<<<<<< HEAD
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
=======
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
