import React from "react";

function Persons({ filteredPersons, handleDelete }) {
  return (
    <div>
      {filteredPersons.map((person, index) => (
        <div key={index}>
          <p>
            {person.name}: {person.number}
            <button onClick={() => handleDelete(person.id)}>
              Delete Contact
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Persons;
