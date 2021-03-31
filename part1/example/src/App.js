import React, { useState } from "react";

const Button = (props) => {
  console.log(props);
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Display = (props) => <div>{props.value}</div>;

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(0)} text="reset to zero" />
      <Button handleClick={() => setToValue(50)} text="reset to 50" />
      <Button handleClick={() => setToValue(value + 1)} text="increment by 1" />
    </div>
  );
};

export default App;
