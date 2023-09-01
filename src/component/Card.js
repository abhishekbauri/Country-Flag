import React from "react";
import "./Card.css";

const Card = (props) => {
  const { currencies, population, flags, name, region, capital } = props;

  let currencyName, currencySymbol;
  for (const prop in currencies) {
    currencyName = currencies[prop].name;
    currencySymbol = currencies[prop].symbol;
  }

  const populationInM = (+population / 1000000).toFixed(2);
  return (
    <div className="outerCard">

      <div className="flag">
        <img src={flags.png} alt="flag" />
      </div>

      <div className="innerCard">
        <div className="countryInfo">
          <h2> {name.common}</h2>
          <p> {region}</p>
        </div>
        <div className="otherDetails">
          <p>
            Capital: <span>{capital}</span>
          </p>
          <p>Population: {populationInM}M</p>
          <p>
            {currencyName} ({currencySymbol})
          </p>
        </div>
      </div>

    </div>
  );
};

export default Card;
