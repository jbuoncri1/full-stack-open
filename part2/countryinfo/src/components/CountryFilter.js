import React from 'react';

const CountryFilter = ({ value, onChange }) => {
  return (
    <div>
      <label>find countries: </label>
      <input
        id='country-search'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default CountryFilter;