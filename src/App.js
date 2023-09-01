import { useEffect, useState } from "react";
import Card from "./component/Card";
import "./App.css";

function App() {
  const [countryName, setCountryName] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [error, setError] = useState(false);

  const countryHandler = (event) => {
    setCountryName(event.target.value);
  };

  useEffect(() => {
    countryName && findCountry(countryName);
  }, [countryName]);

  const submitHandler = (e) => {
    e.preventDefault();
    findCountry(countryName);
    setCountryName("");
  };

  const findCountry = async function (country) {
    setSearchData(null);
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();
      setSearchData(data);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <label >Know About your Country</label>
        <input
          type="text"
          placeholder="search about your country here"
          value={countryName}
          onChange={countryHandler}
        />
      </form>
      <div className="innerContainer">
        {searchData &&
          searchData.map((data, index) => <Card key={index} {...data} index />)}
        {error && <h1> Something went wrog! Not Found </h1>}
      </div>
    </div>
  );
}

export default App;
