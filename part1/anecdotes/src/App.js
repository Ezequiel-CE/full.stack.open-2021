import React, { useState } from "react";

const Anecdotes = ({ anecdotes, index, text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <p>{anecdotes[index]}</p>
    </div>
  );
};

const Button = ({ clickhandler, text }) => {
  return <button onClick={clickhandler}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const randomNumber = (lim) => Math.floor(Math.random() * lim);
  const voteAnecdote = () => {
    const pointscopy = [...points];
    pointscopy[selected]++;
    setPoints(pointscopy);
  };

  const maxVotes = points.indexOf(Math.max(...points));

  return (
    <div>
      <Anecdotes
        anecdotes={anecdotes}
        index={selected}
        text="Anecdote of the day"
      />
      <p> has {points[selected]} votes</p>
      <Button
        clickhandler={() => setSelected(randomNumber(anecdotes.length))}
        text="next anecdote"
      />
      <Button clickhandler={voteAnecdote} text="vote" />

      <Anecdotes
        anecdotes={anecdotes}
        index={maxVotes}
        text="Anecdote with most votes"
      />
    </div>
  );
};

export default App;
