/* eslint-disable */
import './RouteForm.css';

import { React, useState, useEffect, useRef } from 'react';

import Result from '../Results/Result';

import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiampkZXYiLCJhIjoiY2t0eG11M2hoMnV2bjJ3cDN0bmo2dW9zOCJ9.JBlW99Q4ZOAndKLQDjcbAw';

const RouteForm = () => {
  const [inputs, setInputs] = useState({
    city: '',
    state: '',
    distance: '',
  });
  const [error, setError] = useState(false);
  const [breweries, setBreweries] = useState(null);
  const inputsChange = ({ target: { value, name } }) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const map = useRef(null);

  const createRoute = (e) => {
    e.preventDefault();
    if (!inputs.city || !inputs.state) {
      setError(true);
      return;
    }
    if (!inputs.distance) {
      setError(true);
      return;
    }
    setError(false);
    fetch(
      `https://api.openbrewerydb.org/breweries?by_city=${inputs.city}&by_state=${inputs.state}`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const newData = {
          type: 'FeatureCollection',
        };
        newData.features = data.map((brewery) => {
          return {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [
                brewery.longitude,
                brewery.latitude,
              ],
            },
            properties: {
              phone: brewery.phone,
              street: brewery.street,
              city: brewery.city,
              country: 'United States',
              postal_code: brewery.postal_code,
              state: brewery.state,
              id: brewery.id,
              brewery_type: brewery.brewery_type,
              website_url: brewery.website_url,
              name: brewery.name
            },
          }
        })
        setBreweries(newData)
      })
  };
  useEffect(() => {
    if (map.current) return;
      map.current = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-96.8719773,
          32.8208747,],
        zoom: 13,
        scrollZoom: true
    }) 
  }, [breweries])
   useEffect(() => {
        /* Add the data to your map as a layer */
    if (breweries && map.current) {
      map.current.addLayer({
        id: 'locations',
        type: 'circle',
        /* Add a GeoJSON source containing place coordinates and information. */
        source: {
          type: 'geojson',
          data: breweries
        }
      });
    }
   }, [breweries])

   useEffect(() => {
   console.log('data', breweries)
   }, [breweries])
  return (
    <>
      <form className="routeform-styles" onSubmit={(e) => createRoute(e)}>
        <label htmlFor="cityName" className="routeform-labels">
          {error === true && (
            <h4 className="error-styles">Fill out all input fields</h4>
          )}
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
        {breweries?.features && breweries.features.map((brewery) => (
          <Result brewery={brewery.properties} key={brewery.properties.id} />
        ))}
      </section>
      
      <div id="map" className="map"></div>
    </>
  );
};
export default RouteForm;
