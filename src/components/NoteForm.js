
import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import NotesContext from "../context/notes-context"

const NoteForm = () => {
    const { dispatch } = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_NOTE", title, body
        })
        setTitle('');
        setBody('');
    }
    return (
        <Form onSubmit={addNote}>
            <Form.Group >
                <Form.Label>Add Note</Form.Label>
                <Form.Control
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Form.Control
                    as="textarea"
                    rows="3"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Note
        </Button>
        </Form>
    )
}

export default NoteForm;







