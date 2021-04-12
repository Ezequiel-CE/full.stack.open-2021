import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personServices from "./services/personServices";
import Notification from "./components/Notification";

const App = () => {
  // state

  const [persons, setPersons] = useState([]);
  //input controllers
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [message, SetMessage] = useState({ message: ``, error: null });

  //fetch data
  const datahandler = () => {
    personServices.getAll().then((Newpersons) => {
      setPersons(Newpersons);
    });
  };

  useEffect(datahandler, []);
  /// input controllers

  const filterHandler = (e) => {
    setFilterName(e.target.value);
  };

  const newNameHandler = (e) => {
    setNewName(e.target.value);
  };

  const newNumberHandler = (e) => {
    setNewNumber(e.target.value);
  };

  const cleanInput = () => {
    setNewName("");
    setNewNumber("");
  };

  // event handlers

  // updating a person

  const updatePerson = () => {
    const personM = persons.find((p) => p.name === newName);

    personServices
      .update(personM.id, { ...personM, number: newNumber })
      .then((changedPerson) => {
        setPersons(
          persons.map((p) => (p.id === changedPerson.id ? changedPerson : p))
        );
        cleanInput();
      })
      .catch((err) => {
        //maneja el error
        SetMessage({
          message: `information of ${newName} has already been removed from server`,
          error: true,
        });
        setTimeout(() => SetMessage({ message: ``, error: null }), 5000);
      });
  };

  //for createn a person

  const createPerson = () => {
    //create the new person and send to the server
    personServices
      .create({ name: newName, number: newNumber })
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        cleanInput();
      });
  };

  const addPersonHandler = (e) => {
    e.preventDefault();
    //busca persona que tenga el mismo nombre
    const matchName = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    //si match pregunta si actualiza o no
    if (matchName) {
      window.confirm(
        `${newName} is already added to the phonebook,replace the old number with a new one?`
      )
        ? updatePerson()
        : cleanInput();
      return;
    }
    // si no hay match crea una persona
    createPerson();
    SetMessage({ message: `Added ${newName}`, error: false });
    setTimeout(() => SetMessage({ message: ``, error: null }), 5000);
  };

  //delete person from server

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    const userResponse = window.confirm(
      `are you sure you want to delete ${person.name}`
    );
    if (userResponse) {
      personServices.remove(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
  };

  //helper variables

  //filtra las personas
  const persontoShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <Notification message={message} />
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
      <Persons persontoShow={persontoShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
