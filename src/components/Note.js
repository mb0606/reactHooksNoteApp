import React, { useEffect, useContext } from "react";
import NotesContext from "../context/notes-context"

const Note = ({ title, body }) => {
    const { dispatch } = useContext(NotesContext);
    useEffect(() => {
        console.log("Setting up effect");
        return () => {
            console.log('Cleaning up effect');
        }
    }, [])

    const removeNote = (title) => {
        dispatch({
            type: "REMOVE_NOTE", title
        })
    }

    return (
        <div >
            <h4 onClick={() => removeNote(title)}>{title}</h4>
            <p>{body}</p>
        </div>
    )
}
export default Note;