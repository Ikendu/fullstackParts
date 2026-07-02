import { useEffect, useState } from "react";
import FormInput from "./components/FormImput";
import Persons from "./components/Persons";
import { getAll } from "../phonebook";
import SearchInput from "./components/SearchInput";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    getAll().then((initialPersons) => {
      console.log("Initial persons:", initialPersons);
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber, id: Date.now() };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterText.toLowerCase()),
  );

  const handleDelete = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (personToDelete) {
      const confirmDelete = window.confirm(
        `Are you sure you want to delete ${personToDelete.name}?`,
      );
      if (confirmDelete) {
        const updatedPersons = persons.filter((person) => person.id !== id);
        
        setPersons(updatedPersons);
        alert(`${personToDelete.name} has been deleted from the phonebook.`);
      } else {
        alert(`Deletion of ${personToDelete.name} canceled.`);
      }
    } else {
      alert("Person not found.");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h4>filter shown with</h4>
        <SearchInput setFilterText={setFilterText} />
      </div>
      <FormInput
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
