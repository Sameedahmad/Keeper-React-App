import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function addNote(newnote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newnote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmit={addNote} />

      {notes.map((eachNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            delete={deleteNote}
            title={eachNote.title}
            content={eachNote.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
