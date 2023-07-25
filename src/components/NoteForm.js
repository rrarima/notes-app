import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ note, refreshNotes }) => {
  const [title, setTitle] = useState(note ? note.title : "");
  const [content, setContent] = useState(note ? note.content : "");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (note) {
      await axios.put(`http://localhost:8080/api/notes/${note.id}`, {
        title: title,
        content: content
      });
    } else {
      await axios.post("http://localhost:8080/api/notes", {
        title: title,
        content: content
      });
    }
    refreshNotes();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NoteForm;