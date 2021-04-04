import React from "react";

const Personinput = ({ text, placeholder, value, handler }) => {
  return (
    <div>
      {text} :
      <input placeholder={placeholder} value={value} onChange={handler} />
    </div>
  );
};

const PersonForm = ({
  name,
  number,
  addPersonHandler,
  newNameHandler,
  newNumberHandler,
}) => {
  return (
    <form onSubmit={addPersonHandler}>
      <Personinput
        text="Name"
        placeholder="add a name"
        value={name}
        handler={newNameHandler}
      />
      <Personinput
        text="Number"
        placeholder="add a number"
        value={number}
        handler={newNumberHandler}
      />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
