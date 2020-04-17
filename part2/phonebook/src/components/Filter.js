import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      filter shown with a: <input onChange={onChange} value={value} />
    </div>
  )
}

export default Filter;