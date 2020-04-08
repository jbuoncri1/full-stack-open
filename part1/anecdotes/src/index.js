import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ onClick, text }) => (
  <div>
    <button onClick={onClick}>
      {text}
    </button>
  </div>
)

const AnecdotesWithMostVotes = ({ votes, phrase }) => {
  if (votes < 1) {
    return (
      <div>
        No data yet!
      </div>
    )
  }

  return (
    <div>
      {phrase}
      <br/>
      has {votes} votes
    </div>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [maxVotes, setMaxVotes] = useState(Number.NEGATIVE_INFINITY);
  const [phraseWithMostVotes, setPhraseWithMostVotes] = useState('');

  const allVotes = {}
  for (let i = 0; i < anecdotes.length; i++) {
    allVotes[i] = 0;
  }

  const [points, setPoints] = useState(allVotes);

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)));
  }

  const handlePoints = () => {
    const copy = {...points}
    copy[selected] += 1
    if (maxVotes < copy[selected]) {
      setMaxVotes(copy[selected]);
      setPhraseWithMostVotes(anecdotes[selected]);
    }
    setPoints(copy);
  }

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <Button 
        onClick={handlePoints} 
        text='vote'
      />
      <Button 
        onClick={handleNextAnecdote} 
        text='next anecdote'
      />
      <AnecdotesWithMostVotes 
        votes={maxVotes}
        phrase={phraseWithMostVotes}
      />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
