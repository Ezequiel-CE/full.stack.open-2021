import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const { part1, part2, part3 } = props.parts;
  const { exercises1, exercises2, exercises3 } = props.exercises;

  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  );
};

const Total = (props) => {
  const { exercises1, exercises2, exercises3 } = props.exercises;
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        parts={{ part1, part2, part3 }}
        exercises={{ exercises1, exercises2, exercises3 }}
      />
      <Total exercises={{ exercises1, exercises2, exercises3 }} />
    </div>
  );
};

export default App;
