import React from "react";
import Note from "./Note"

const NoteList = ({ notes, removeNote }) => {
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