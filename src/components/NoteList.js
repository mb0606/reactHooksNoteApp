import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "../context/notes-context"

const NoteList = ({ removeNote }) => {
    const { notes } = useContext(NotesContext)
    return (
        notes && notes.map((note) => (
            <Note key={note.title} title={note.title}
                body={note.body}
                removeNote={removeNote}
            />
        ))
    )
}
export default NoteList;