import './Searchbar.css';

import { React, useState } from 'react';

import Result from '../Results/Result';

const Searchbar = () => {
  const [breweries, setBreweries] = useState([]);
  const [cityInput, setCityInput] = useState('');
  const [stateInput, setStateInput] = useState('');
  const [error, setError] = useState(false);

  const inputChanged = (e) => {
    const { name, value } = e.target;
    if (name === 'city') {
      setCityInput(value);
    } else if (name === 'state') {
      setStateInput(value);
    }
  };

  const brewerySubmitted = (e) => {
    e.preventDefault();
    if (!cityInput || !stateInput) {
      setError(true);
      return;
    }
    setError(false);
    fetch(
      `https://api.openbrewerydb.org/breweries?by_city=${cityInput}&by_state=${stateInput}`,
    )
      .then((response) => response.json())
      .then((data) => setBreweries(data));
  };
  return (
    <>
      <form
        className="searchbar-form-styles"
        onSubmit={(e) => brewerySubmitted(e)}
      >
        <label htmlFor="cityName" className="searchbar-label">
          {error === true && <h4 className="error-styles">Fill out all input fields</h4>}
          Enter City Name
          <input
            type="text"
            name="city"
            id="cityName"
            value={cityInput}
            onChange={(e) => inputChanged(e)}
            placeholder="Dallas"
          />
        </label>
        <label htmlFor="stateName" className="searchbar-label">
          Enter State Name
          <input
            type="text"
            name="state"
            id="stateName"
            value={stateInput}
            onChange={(e) => inputChanged(e)}
            placeholder="Texas"
          />
        </label>
        <button type="submit" className="searchbar-form-styles">Submit</button>
      </form>
      <section className="breweries-grp">
        {breweries.map((brewery) => (
          <Result brewery={brewery} key={brewery.id} />
        ))}
      </section>
    </>
  );
};

export default Searchbar;
