import "../Searchbar/Searchbar.css";
import { useState } from "react";
import Result from "../Results/Result";
const Searchbar = () => {
  const [breweries, setBreweries] = useState([]);
  const [cityInput, setCityInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [ error, setError] = useState(false);

  const inputChanged = (e) => {
    const {name, value} = e.target;
    if (name === 'city') {
      setCityInput(value);
    } else if (name === 'state') {
      setStateInput(value);
    } 
  };

  const brewerySubmitted = (e) => {
    e.preventDefault();
    if (!cityInput && !stateInput) {
      return setError(true);
    } else 
    setError(false);
    fetch(
      `https://api.openbrewerydb.org/breweries?by_city=${cityInput}&by_state=${stateInput}`
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
          {error === true && <h4 className='error-styles'>Fill out all input fields</h4>}
          <span>Enter City Name</span>
          <input
            type="text"
            name="city"
            value={cityInput}
            onChange={(e) => inputChanged(e)}
            placeholder="Dallas"
            />
        </label>
        <label className="searchbar-label">
          <span>Enter State Name</span>
          <input
            type="text"
            name="state"
            value={stateInput}
            onChange={(e) => inputChanged(e)}
            placeholder="Texas"
            />
        </label>
        <button className='searchbar-form-styles'>Submit</button>
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
