import React from "react";

const Person = ({ person, deletePerson }) => {
  return (
    <p>
      {person.name} {person.number}{" "}
      <button onClick={deletePerson}>delete</button>
    </p>
  );
};

const Persons = ({ persontoShow, deletePerson }) => {
  return (
    <div>
      {persontoShow.map((person) => (
        <Person
          key={person.name}
          person={person}
          deletePerson={() => deletePerson(person.id)}
        />
      ))}
    </div>
  );
};

export default Persons;
