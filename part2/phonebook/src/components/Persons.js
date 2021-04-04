import React from "react";

const Person = ({ person }) => {
  return (
    <p>
      {person.name} {person.number}{" "}
    </p>
  );
};

const Persons = ({ persontoShow }) => {
  return (
    <div>
      {persontoShow.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default Persons;
