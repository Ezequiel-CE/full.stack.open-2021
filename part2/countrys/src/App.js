import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // app state
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState({});

  //fetching data of countries

  const dataHandler = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
    });
  };

  useEffect(dataHandler, []);

  //fecht data of weather on condition
  useEffect(() => {
    const countrytoFetch = countries.filter((c) =>
      c.name.toLowerCase().includes(country)
    );
    if (countrytoFetch.length === 1) {
      console.log("work");
      weatherHandler(countrytoFetch[0]);
      setSelectedCountry(countrytoFetch[0]);
    }
  }, [country, countries]);

  //call to the apy

  const weatherHandler = (country) => {
    //APY KEY
    const { REACT_APP_API_KEY } = process.env;
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${REACT_APP_API_KEY}&query=${country.capital}`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data.current);
      });
  };

  //input controller

  const countryInputHandler = (e) => {
    setCountry(e.target.value);
    setSelectedCountry(null);
  };

  //opent the country with button
  const displayCountry = (index) => {
    weatherHandler(countriesToShow[index]);
    setSelectedCountry(countriesToShow[index]);
  };

  //helper variable

  const countriesToShow = countries.filter((c) =>
    c.name.toLowerCase().includes(country)
  );

  const renderCountry = (countries, selectedCountry) => {
    if (selectedCountry) {
      return (
        <div>
          <div>
            <h1>{selectedCountry.name}</h1>
            <p>capital: {selectedCountry.capital} </p>
            <p>population: {selectedCountry.population}</p>
            <h3>Languages</h3>
            <ul>
              {selectedCountry.languages.map((l) => (
                <li key={l.name}>{l.name}</li>
              ))}
            </ul>
            <img src={selectedCountry.flag} height="150px" alt="#"></img>
          </div>
          <div>
            <h2>Weather in {selectedCountry.capital}</h2>
            <p>temperature: {weather.temperature} C </p>

            <p>
              wind: {weather.wind_speed} mph direction {weather.wind_dir}
            </p>
          </div>
        </div>
      );
    }

    if (countries.length > 0 && countries.length < 10) {
      return (
        <div>
          {countries.map((coun, index) => (
            <div key={coun.name}>
              <label>{coun.name}</label>
              <button onClick={() => displayCountry(index)}>show</button>
            </div>
          ))}
        </div>
      );
    }

    if (countries.length === 0) {
      return <div>Country not found</div>;
    }
  };

  return (
    <div>
      <div key="country">
        <label>find countries</label>
        <input
          type="text"
          value={country}
          onChange={countryInputHandler}
        ></input>
      </div>
      <div>{renderCountry(countriesToShow, selectedCountry)}</div>
    </div>
  );
}

export default App;
