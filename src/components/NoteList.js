import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Note from './Note';
import NoteForm from './NoteForm';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const response = await axios.get('http://localhost:8080/api/notes');
        setNotes(response.data);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div>
            <NoteForm refreshNotes={fetchNotes} />
            {notes.map(note => (
                <Note key={note.id} note={note} refreshNotes={fetchNotes} />
            ))}
        </div>
    );
};

export default NoteList;
