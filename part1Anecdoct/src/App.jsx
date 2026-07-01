import { useState } from "react";
import StatisticsLine from "./components/StatisticLine";
import Button from "./components/Button";
import Anecdote from "./components/Anecdoct";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positivePercentage = (good / total) * 100 || 0;

  return (
    <>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="Total" value={total} />
          <StatisticsLine text="Average" value={average.toFixed(2)} />
        </tbody>
      </table>
      <StatisticsLine
        text="Positive"
        value={`${positivePercentage.toFixed(2)}%`}
      />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let checker = good || neutral || bad;

  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <>
        <h2>Statistics</h2>
        {checker > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <h4>No feedback given</h4>
        )}
      </>
      <Anecdote />
    </>
  );
};

export default App;
