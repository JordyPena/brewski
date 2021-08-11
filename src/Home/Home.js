import "../Home/Home.css";
import Searchbar from "../Searchbar/Searchbar";
import RouteForm from "../RouteForm/RouteForm";
import { useState } from "react";
const Home = () => {
  const [searchByZipcode, setSearchByZipcode] = useState(false);
  const [createRoute, setCreateRoute] = useState(false);
  //when user clicks button under search by zipcoe label
  //change state to true
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
    <main className="home-container">
      <div className="home-background-img">
        <section className="home-buttons-container">
          <div>
            <h3 className="top-buttons-labels">Find Breweries by Zipcode</h3>

            <button
              className="top-buttons-style"
              onClick={() => showSearchbar()}
            >
              Brew
            </button>
          </div>
          <div>
            <h3 className="top-buttons-labels">Make a Brewery Tour</h3>

            <button className="top-buttons-style" onClick={() => showForm()}>
              Tour
            </button>
          </div>
        </section>
        <div className="searchbar-container">
          {searchByZipcode === true && <Searchbar />}
          {createRoute === true && <RouteForm />}
        </div>
      </div>
    </main>
  );
};

export default Home;
