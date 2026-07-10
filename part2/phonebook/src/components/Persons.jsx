import React, { useState } from "react";

function Persons({ filteredPersons, handleDelete, handleUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedNumber, setEditedNumber] = useState("");

  const startEditing = (person) => {
    setEditingId(person.id);
    setEditedName(person.name);
    setEditedNumber(person.number);
  };

  const submitUpdate = async (e, id) => {
    e.preventDefault();
    const result = await handleUpdate(id, editedName, editedNumber);
    console.log("Result", result);
    setEditingId(null);
  };

  return (
    <div>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          {editingId === person.id ? (
            <form onSubmit={(e) => submitUpdate(e, person.id)}>
              <div>
                name:
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              </div>
              <div>
                Number:
                <input
                  type="text"
                  value={editedNumber}
                  onChange={(e) => setEditedNumber(e.target.value)}
                />
              </div>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditingId(null)}>
                Cancel
              </button>
            </form>
          ) : (
            <p>
              {person.name}: {person.number}
              <button onClick={() => startEditing(person)}>Update</button>
              <button onClick={() => handleDelete(person.id)}>
                Delete Contact
              </button>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Persons;
