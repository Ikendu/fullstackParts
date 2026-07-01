import React from "react";
import axios from "axios";
import { useEffect } from "react";

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

  return (
    <div>
      <h1>Notes</h1>
      <>
        {notes.map((note) => (
          <div key={note.id}>
            <p>{note.content}</p>
            <p>Important: {note.important ? "Yes" : "No"}</p>
          </div>
        ))}
      </>
    </div>
  );
}

export default App;
