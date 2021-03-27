import React from "react";

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        hello {props.name} with {props.age}
      </p>
    </div>
  );
};

const App = () => {
  const age = 10;
  const name = "eze";
  return (
    <div>
      <p>Greetings</p>
      <Hello name={name} age={age} />

      <Hello name="charles" age={26 + 5} />
    </div>
  );
};

export default App;
