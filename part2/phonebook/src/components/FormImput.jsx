import React from "react";

export default function FormInput(
  addPerson,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
) {
  return (
    <form onSubmit={addPerson}>
      <h3>Add a new person</h3>
      <div>
        name:{" "}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        number:{" "}
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
