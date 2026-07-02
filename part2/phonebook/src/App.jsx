import { useEffect, useState } from "react";
import FormInput from "./components/FormImput";
import Persons from "./components/Persons";
import { getAll, create, remove } from "../phonebook";
import SearchInput from "./components/SearchInput";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [notAdded, setNotAdded] = useState(false);
  const [notDeleted, setNotDeleted] = useState(false);

  useEffect(() => {
    getAll().then((initialPersons) => {
      console.log("Initial persons:", initialPersons);
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = async (e) => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber, id: Date.now() };
    if (
      persons.some(
        (person) => person.name === newName && person.number === newNumber,
      )
    ) {
      setNotAdded(true);
      setTimeout(() => setNotAdded(false), 3000);
      return;
    }
    await create(newPerson);
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterText.toLowerCase()),
  );

  // const

  const handleDelete = async (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (personToDelete) {
      const confirmDelete = window.confirm(
        `Are you sure you want to delete ${personToDelete.name}?`,
      );
      if (confirmDelete) {
        const updatedPersons = persons.filter((person) => person.id !== id);
        await remove(id);
        setPersons(updatedPersons);
        setIsDeleted(true);
        setTimeout(() => setIsDeleted(false), 3000);
      } else {
        setNotDeleted(true);
        setTimeout(() => setNotDeleted(false), 3000);
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
        {isAdded && (
          <div className="success">Added {newName} to the phonebook.</div>
        )}
        {isDeleted && (
          <div className="success">Deleted person from the phonebook.</div>
        )}
        {notAdded && (
          <div className="failure">
            {newName} is already in the phonebook with the same number.
          </div>
        )}
        {notDeleted && (
          <div className="failure">Deletion of person was canceled.</div>
        )}
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
