import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqestedAttempts, setRequested] = useState<string>("");
    const reqAttempts = parseInt(reqestedAttempts) || 0;
    return (
        <div>
            <div>Attempts left: {attempts}</div>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + reqAttempts);
                }}
            >
                gain
            </Button>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Attempts Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequested(event.target.value);
                    }}
                />
            </Form.Group>
        </div>
    );
}
