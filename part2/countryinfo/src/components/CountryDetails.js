import React from 'react';
import Country from './Country';

const CountryDetails = ({ countries, showCountry }) => {
  if (countries.length > 10) {
    return <p>Too many matches. Specify another filter</p>;
  } else if (countries.length > 1 && countries.length < 10) {
    return (
      <div>
        {countries.map(country => {
          return (
            <div key={country.alpha3Code}>
              <span>{country.name}</span>
              <button
                onClick={() => showCountry(country.name)}>
                  show
              </button>
            </div>
          )
        })}
      </div>
    );
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />
  } else {
    return null;
  } 
}

export default CountryDetails;