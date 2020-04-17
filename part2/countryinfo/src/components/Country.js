import React from 'react';

import CountryWeather from './CountryWeather'

const Country = ({ country }) => {
  return (
    <div key={country.alpha3Code}>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <div>
        <h2>languages</h2>
        {country.languages.map(lang => {
          return <li key={lang.iso639_2}>{lang.name}</li>
        })}
      </div>
      <div>
          <img 
            src={country.flag} 
            alt='flag' 
            width='100' 
            height='100'>
          </img>
      </div>
      <CountryWeather country={country} />
    </div>
  )
}

export default Country;