import React, { useState, useEffect, useReducer } from 'react';
import Note from "./Note";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import notesReducer from "../reducers/notes";

function App() {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  useEffect(() => {
    console.log("will run every time I update my state")
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  useEffect(() => {
    // good for fetch data
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) dispatch({ type: "FETCH_NOTES", notes: notes });
    console.log("will only run once")
  }, [])

  const addNote = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE", title, body
    })
    setTitle('');
    setBody('');
  }

  const removeNote = (title) => {
    dispatch({
      type: "REMOVE_NOTE", title
    })
  }
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}><h1>Notes</h1>
          <Form onSubmit={addNote}>
            {notes && notes.map((note) => (
              <Note key={note.title} title={note.title}
                body={note.body}
                removeNote={removeNote}
              />
            ))}
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

        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
