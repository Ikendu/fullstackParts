import React from "react";

function Persons({ filteredPersons }) {
  return (
    <div>
      {filteredPersons.map((person, index) => (
        <div key={index}>
          <p>
            {person.name}: {person.number}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Persons;
