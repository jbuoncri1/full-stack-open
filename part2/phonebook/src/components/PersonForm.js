import React from 'react';

const PersonForm = ({ addPerson, handleNameAddition, handleNumberAddition }) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameAddition} />
        </div>
        <div>
          number: <input onChange={handleNumberAddition} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>      
    </div>
  )
}

export default PersonForm;