import './Home.css';

import { React, useState } from 'react';

import Searchbar from '../Searchbar/Searchbar';

import RouteForm from '../RouteForm/RouteForm';

const Home = () => {
  const [searchByZipcode, setSearchByZipcode] = useState(false);
  const [createRoute, setCreateRoute] = useState(false);
  // when user clicks button under search by zipcoe label
  // change state to true
  // now render searchbar
  const showSearchbar = () => {
    setSearchByZipcode(true);
    setCreateRoute(false);
  };

  const showForm = () => {
    setCreateRoute(true);
    setSearchByZipcode(false);
  };
  return (

    <main className="home-buttons-container">
      <div className="button-grp">
        <div>
          <h3 className="top-buttons-labels">Find Breweries by City</h3>
          <button className="top-buttons-style" type="button" onClick={() => showSearchbar()}>
            Brew
          </button>
        </div>
        <div>
          <h3 className="top-buttons-labels">Make a Brewery Tour</h3>

          <button className="top-buttons-style" type="button" onClick={() => showForm()}>
            Tour
          </button>
        </div>
      </div>
      {searchByZipcode && <Searchbar />}
      {createRoute && <RouteForm />}
    </main>

  );
};

export default Home;
