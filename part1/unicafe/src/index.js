import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({onClick, text}) => (
   <button onClick={onClick}>
     {text}
   </button>
);

const Statistics = ({ good, neutral, bad, sum, all }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{Math.abs(sum / all)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{Math.abs(good / all) * 100}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [sum, setSum] = useState(0);

  const handleGoodClick = () => {
    setAll(all + 1);
    setSum(sum + 1);
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setAll(all + 1);
    setSum(sum + 0);
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setAll(all + 1);
    setSum(sum - 1);
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad'/>
      
      <h2>Statistics</h2>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad} 
        sum={sum}
        all={all}
      />                  
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
