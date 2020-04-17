import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from 'dotenv';
config();

const CountryWeather = ({ country }) => {
  const [weather, setweather] = useState()
  useEffect(() => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.name}`;
    axios
      .get(url)
      .then(({ data }) => {
        setweather(data);
      })
  }, [country.name]);
  
  let result = null;
  if (weather) {
    result = (
      <div>
        <h3>Weather in {country.capital}</h3>
        <label><strong>temperature: </strong></label>
        {weather.current.temperature} Celcius
        <div>
          <img
            src={weather.current.weather_icons} 
            alt='flag' 
            width='100'
          >
          </img>
        </div>
        <div>
          <label><strong>wind</strong></label>
          <p>{weather.current.wind_speed} mph </p>
          <label><strong>direction</strong></label>
          {weather.current.wind_dir}
        </div>
      </div>
    )
  }

  return result;
}

export default CountryWeather;