import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/notes");
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleImportance = (id) => {
    const note = notes.find((n) => n.id === id);
    const updatedNote = { ...note, important: !note.important };

    axios
      .put(`http://localhost:3001/notes/${id}`, updatedNote)
      .then((response) => {
        setNotes(notes.map((n) => (n.id === id ? response.data : n)));
      })
      .catch((error) => {
        console.error("Error updating note:", error);
      });
  };

  return (
    <div>
      <h1>Notes</h1>
      <>
        {notes.map((note) => (
          <div key={note.id}>
            <Note
              note={note}
              toggleImportance={() => toggleImportance(note.id)}
            />
          </div>
        ))}
      </>
    </div>
  );
}

export default App;
