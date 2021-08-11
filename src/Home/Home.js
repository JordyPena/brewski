import "../Home/Home.css";
import Searchbar from "../Searchbar/Searchbar";
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
  }
  return (
    <main className="home-container">
      <div className="home-background-img">
        <section className="home-buttons-container">
          <label>
            <h3 className="top-buttons-labels">Sasquatch search by zipcode</h3>

            <button
              className="top-buttons-style"
              onClick={() => showSearchbar()}
            >
              Grrrrr
            </button>
          </label>
          <label>
            <h3 className="top-buttons-labels"> Sasquatch make me a tour</h3>
            <button 
              className="top-buttons-style"
              onClick={() => showForm()}
            >
              Grrrrr
            </button>
          </label>
        </section>
        <div className="searchbar-container">
          {searchByZipcode === true && <Searchbar />}
          {/* form goes here */}
        </div>
      </div>
    </main>
  );
};

export default Home;
