import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by 
      <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Nimbus';
  const age = 3;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age + 0.5} />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root')
);
