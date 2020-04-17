import React, { useState, useEffect } from 'react';

import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Notification from './components/Notification';
import personsService from './services/persons';

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ nameSearch, setNameSearch ] = useState('');
  const [ addedMessage, setAddedMessage ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  useEffect(() => {
    personsService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber
    }

    const foundPerson = persons.find(person => {
      return person.name.toLowerCase() === newName.toLowerCase();
    });

    if (foundPerson) {
      const confirmUpdate = window.confirm(
        `${foundPerson.name} is already added to the phonebook. 
        Replace the old number with the new one?`
      );

      if (confirmUpdate) {
        const personToUpdate = {...foundPerson, number: newNumber};
        personsService
          .update(foundPerson.id, personToUpdate)
          .then(updatedPerson => {
            setPersons(persons.map(person => {
              return person.id !== foundPerson.id ? person : updatedPerson;
            }));
          });
        
        event.target.reset();
      }
      return;
    }

    personsService
      .create(newPerson)
      .then((createdPerson) => {
        setPersons(persons.concat(createdPerson));

        setAddedMessage(`Added ${createdPerson.name}`);
        setTimeout(() => {
          setAddedMessage(null);
        }, 3000);

        setNewName('');
      });

    event.target.reset();
  }

  const handleNameAddition = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberAddition = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchFilter = (event) => {
    setNameSearch(event.target.value);
  }

  const handleDelete = (id, name) => {
    const confirmDeletion = window.confirm(`Delete ${name}?`);

    if (confirmDeletion) {
      personsService
        .deletePerson(id)
        .then(() => {
          const remainingPersons = [...persons];
          setPersons(remainingPersons.filter(person => person.id !== id));
        })
        .catch(error => {
          setErrorMessage(
            `Information of ${name} has already been removed from server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
          setPersons(persons.filter(p => p.id !== id));
        });
    }
  }

  const personsToShow = nameSearch
  ? persons.filter(person => person.name.search(nameSearch) !== -1)
  : persons;

  let toggleAddedMessage = null;
  if (addedMessage) {
    toggleAddedMessage = <Notification message={addedMessage} cssClass='added' />;
  }

  let toggleErrorMessage = null;
  if (errorMessage) {
    toggleErrorMessage = <Notification message={errorMessage} cssClass='error' />;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {toggleAddedMessage}
      {toggleErrorMessage}
      <Filter value={nameSearch} onChange={handleSearchFilter} />
      <h2>Add a new</h2>
      <PersonForm 
        addPerson={addPerson} 
        handleNameAddition={handleNameAddition}
        handleNumberAddition={handleNumberAddition}
      />
      <h2>Numbers</h2>
      <Persons
        persons={personsToShow}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App