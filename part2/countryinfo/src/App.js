import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CountryFilter from './components/CountryFilter';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(({ data }) => {
        setCountries(data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  const countrySearchHandler = (event) => {
    setCountrySearch(event.target.value);
  }

  const showCountry = (countryName) => {
    setCountrySearch(countryName);
  }

  const filteredCountries = countrySearch ?
    countries.filter(country => {
      return country.name.toLowerCase().search(countrySearch.toLowerCase()) !== -1;
    }) : countries;

  
  return (
    <div className="App">
      <CountryFilter
        value={countrySearch}
        onChange={countrySearchHandler}
      /> 
      <CountryDetails
        countries={filteredCountries}
        showCountry={showCountry}
      />
    </div>
  );
}

export default App;
