import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      <Part partName={parts[0]['name']} exercise={parts[0]['exercise']} />
      <Part partName={parts[1]['name']} exercise={parts[1]['exercise']} />
      <Part partName={parts[2]['name']} exercise={parts[2]['exercise']} />
    </div>
  ) 
}

const Part = (props) => {
  const { partName, exercise } = props;

  return (
    <div>
      <p>{partName} {exercise}</p>
    </div>
  )
}

const Total = (props) => {
  const { parts } = props;
  let sum = 0;

  for (let i = 0; i < parts.length; i++) {
    let part = parts[i];
    sum += part['exercise'];
  }

  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [   
    {
      name: 'Fundamentals of React',
      exercise: 10
    }, 
    {
      name: 'Using props to pass data',
      exercise: 7
    }, 
    {
      name: 'State of a component',
      exercise: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
