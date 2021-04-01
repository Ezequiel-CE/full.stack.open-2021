import React, { useState } from "react";

const Button = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  if (text === "positive")
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    );

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props.infoState;
  const averageScore = good - bad / 3;
  const total = good + bad + neutral;
  const positiveFeedback = isNaN((good * 100) / (good + bad))
    ? 0
    : (good * 100) / (good + bad);

  if (total === 0)
    return (
      <div>
        <h1>Statistics</h1>
        <p>No Feedback given</p>
      </div>
    );

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={total} />
          <Statistic text="averageScore" value={averageScore} />
          <Statistic text="positive" value={positiveFeedback} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button clickHandler={() => setGood(good + 1)} text="Good" />
      <Button clickHandler={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button clickHandler={() => setBad(bad + 1)} text="Bad" />
      <Statistics infoState={{ good, neutral, bad }} />
    </div>
  );
};

export default App;
