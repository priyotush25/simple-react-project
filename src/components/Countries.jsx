import { use } from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  const countriesData = use(countries);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Travel Countries : {countriesData.length}
      </h1>
      <div className="container">
        {countriesData.map((country) => (
          <Country key={country.name.name} country={country} />
        ))}
      </div>
    </>
  );
};

export default Countries;
