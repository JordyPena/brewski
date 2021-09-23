import './RouteForm.css';

import { React, useState } from 'react';

import Result from '../Results/Result';

const RouteForm = () => {
  const [inputs, setInputs] = useState({
    city: '',
    state: '',
    distance: '',
  });
  const [error, setError] = useState(false);
  const [breweries, setBreweries] = useState([]);
  const inputsChange = ({ target: { value, name } }) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const createRoute = (e) => {
    e.preventDefault();
    if (!inputs.city || !inputs.state) {
      setError(true);
      return;
    } if (!inputs.distance) {
      setError(true);
      return;
    }
    setError(false);
    fetch(
      `https://api.openbrewerydb.org/breweries?by_city=${inputs.city}&by_state=${inputs.state}`,
    )
      .then((response) => response.json())
      .then((data) => setBreweries(data));
  };
  return (
    <>
      <form className="routeform-styles" onSubmit={(e) => createRoute(e)}>
        <label htmlFor="cityName" className="routeform-labels">
          {error === true && <h4 className="error-styles">Fill out all input fields</h4>}
          Enter City Name
          <input
            type="text"
            name="city"
            id="cityName"
            value={inputs.city}
            onChange={(e) => inputsChange(e)}
            className="routeform-input"
            placeholder="Dallas"
          />
        </label>
        <label htmlFor="stateName" className="routeform-labels">
          Enter State Name
          <input
            type="text"
            name="state"
            id="stateName"
            value={inputs.state}
            onChange={(e) => inputsChange(e)}
            className="routeform-input"
            placeholder="Texas"
          />
        </label>
        <label htmlFor="distance" className="routeform-labels">
          Enter Distance Within
          <input
            type="number"
            name="distance"
            value={inputs.distance}
            onChange={(e) => inputsChange(e)}
            className="routeform-input"
            placeholder="20 miles"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <section className="breweries-grp">
        {breweries.map((brewery) => (
          <Result brewery={brewery} key={brewery.id} />
        ))}
      </section>
    </>
  );
};
export default RouteForm;
