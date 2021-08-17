import "../Searchbar/Searchbar.css";
import { useState } from "react";
import Result from "../Results/Result";
const Searchbar = () => {
  const [breweries, setBreweries] = useState([]);
  const [userInput, setUserInput] = useState("");

  const inputChanged = (e) => {
    setUserInput(e.target.value);
  };

  const brewerySubmitted = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openbrewerydb.org/breweries?by_city=${userInput}&by_state=Texas`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("my result", data);
        setBreweries(data);
      });
  };

  return (
    <>
      <form
        className="searchbar-form-styles"
        onSubmit={(e) => brewerySubmitted(e)}
      >
        <label className="searchbar-label">
          <span>Enter City Name</span>
          <input
            type="text"
            name="searchbar"
            value={userInput}
            onChange={(e) => inputChanged(e)}
            placeholder="Dallas"
          />
        </label>
      </form>
      <section className="breweries-grp">
        {breweries.map((brewery, index) => {
          return (
            <Result brewery={brewery} key={index}/>    
        )})}
      </section>
    </>
  );
};

export default Searchbar;
