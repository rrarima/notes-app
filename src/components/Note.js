import React from 'react';
import axios from 'axios';

const Note = ({ note, refreshNotes }) => {
    const handleDelete = async () => {
        await axios.delete(`http://localhost:8080/api/notes/${note.id}`);
        refreshNotes();
    };

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Note;
