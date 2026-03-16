import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-check"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {!editMode && (
                <p>
                    {name} is {isStudent ? "a student" : "not a student"}
                </p>
            )}
            {editMode && (
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            )}
            {editMode && (
                <Form.Check
                    type="checkbox"
                    id="edit-isstudent"
                    name="student"
                    label="student"
                    checked={isStudent}
                    onChange={updateIsStudent}
                />
            )}
        </div>
    );
}
