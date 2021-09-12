import './RouteForm.css';

import React from 'react';

const RouteForm = () => (
  <form className="routeform-styles">
    <label htmlFor="cityName" className="routeform-labels">
      Enter City Name
      <input
        type="text"
        name="city"
        id="cityName"
        className="routeform-input"
        placeholder="dallas"
      />
    </label>
    <label htmlFor="stateName" className="routeform-labels">
      Enter State Name
      <input
        type="text"
        name="state"
        id="stateName"
        className="routeform-input"
        placeholder="texas"
      />
    </label>
    <label htmlFor="distance" className="routeform-labels">
      Enter Distance Within
      <input
        type="number"
        name="20"
        className="routeform-input"
        placeholder="20"
      />
    </label>
    <button type="submit">Submit</button>
  </form>
);
export default RouteForm;
