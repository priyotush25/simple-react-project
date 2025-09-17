import { use, useState } from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  const countriesData = use(countries);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const countryHandle = (country) => {
    const newVisitedCountries = [...visitedCountries, country];

    setVisitedCountries(newVisitedCountries);
  };

  const visitedFlagHandle = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Travel Countries : {countriesData.length}
      </h1>
      <h2 style={{ textAlign: "center" }}>
        <ol className="container">
          {visitedCountries.map((country) => (
            <li style={{ textAlign: "center" }}>{country.name.common}</li>
          ))}
        </ol>
        <div className="container">
          {visitedFlag.map((flag, index) => (
            <img
              src={flag}
              alt=""
              key={index}
              style={{ margin: "5px", height: "150px" }}
            />
          ))}
        </div>
        Traveled so far : {visitedCountries.length}
      </h2>
      <div className="container">
        {countriesData.map((country) => (
          <Country
            key={country.name.name}
            country={country}
            countryHandle={countryHandle}
            visitedFlagHandle={visitedFlagHandle}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
