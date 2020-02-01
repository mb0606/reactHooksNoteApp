import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { title, body }
    ])
    setTitle('');
    setBody('');
  }

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  }
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}><h1>Notes</h1>
          <Form onSubmit={addNote}>
            {notes.map((note) => (
              <div key={note.title}>
                <h4 onClick={() => removeNote(note.title)}>{note.title}</h4>
                <p>{note.body}</p>
              </div>
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
