import React, { useEffect } from "react";

const Note = ({ title, body, removeNote }) => {
    useEffect(() => {
        console.log("Setting up effect");
        return () => {
            console.log('Cleaning up effect');
        }
    }, [])

    return (
        <div >
            <h4 onClick={() => removeNote(title)}>{title}</h4>
            <p>{body}</p>
        </div>
    )
}
export default Note;