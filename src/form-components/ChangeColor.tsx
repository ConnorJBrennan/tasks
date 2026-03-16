import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("blue");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-change-blue"
                label="blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-change-red"
                label="red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-change-green"
                label="green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-change-orange"
                label="orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-change-cyan"
                label="cyan"
                value="cyan"
                checked={color === "cyan"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-change-purple"
                label="purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-change-white"
                label="white"
                value="white"
                checked={color === "white"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-change-magenta"
                label="magenta"
                value="magenta"
                checked={color === "magenta"}
            />
            <div>
                You have choosen
                {
                    <div
                        data-testid="colored-box"
                        style={{
                            backgroundColor: color,
                            display: "inline-block",
                            marginLeft: "5px",
                        }}
                    >
                        {color}
                    </div>
                }
                .
            </div>
        </div>
    );
}
