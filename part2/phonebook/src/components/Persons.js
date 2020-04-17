import React from 'react';

const Person = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((person, i) => {
        return (
          <div key={i}>
            <p key={person.id}>{person.name} {person.number}</p>
            <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Person;