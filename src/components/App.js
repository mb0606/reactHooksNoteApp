import React, { useState, useEffect, useReducer } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import NotesContext from "../context/notes-context"

import notesReducer from "../reducers/notes";

function App() {
  const [notes, dispatch] = useReducer(notesReducer, []);

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


  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}><h1>Notes</h1>
            <NoteList />
            <NoteForm />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </NotesContext.Provider>
  );
}

export default App;
