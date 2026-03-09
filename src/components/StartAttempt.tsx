import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    return (
        <div>
            <span>
                <Button
                    disabled={inProgress || attempts === 0}
                    onClick={() => {
                        setAttempts(attempts - 1);
                        setProgress(!inProgress);
                    }}
                >
                    Start Quiz
                </Button>
                Attempts: {attempts}
            </span>
            <Button
                disabled={!inProgress}
                onClick={() => {
                    setProgress(!inProgress);
                }}
            >
                Stop Quiz
            </Button>
            <span>
                <Button
                    disabled={inProgress}
                    onClick={() => {
                        setAttempts(attempts + 1);
                    }}
                >
                    Mulligan
                </Button>
            </span>
        </div>
    );
}
