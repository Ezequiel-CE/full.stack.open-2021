import React, { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  // state

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  //events handlers

  const addPersonHandler = (e) => {
    e.preventDefault();
    //busca persona que tenga el mismo nombre
    const matchName = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (matchName) return alert(`${newName} already exist`);

    //actualiza el state
    const newPersonObj = { name: newName, number: newNumber };

    setPersons(persons.concat(newPersonObj));
    setNewName("");
    setNewNumber("");
  };

  const filterHandler = (e) => {
    setFilterName(e.target.value);
  };

  const newNameHandler = (e) => {
    setNewName(e.target.value);
  };

  const newNumberHandler = (e) => {
    setNewNumber(e.target.value);
  };

  //filtra las personas

  const persontoShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filterName} filterHandler={filterHandler} />

      <h1>Add new</h1>
      <PersonForm
        name={newName}
        number={newNumber}
        addPersonHandler={addPersonHandler}
        newNameHandler={newNameHandler}
        newNumberHandler={newNumberHandler}
      />

      <h2>Numbers</h2>
      <Persons persontoShow={persontoShow} />
    </div>
  );
};

export default App;
